// @ts-nocheck

import{ useEffect, useRef, useState } from "react";
import {
  base_data as initialNodes,
  base_links as initialEdges,
  base_svgs as initialSvgs
} from './data'
import { toolbarButtons } from './toolbarButtons'
import CustomToolbar from "./CustomToolbar";
import { MTLogo } from "/assets";

const WebixScheme = () => {
    const uiContainer = useRef(null);
    const uiRef = useRef(null);
    const resObserver = useRef(null);
    const [isEditor, setIsEditor] = useState(false)
  
    useEffect(() => {
      const container = uiContainer.current;

      webix.ready(() => {
      webix.CustomScroll.init();

      let root = "root";

      //editor space
      class MyWSpace extends diagram.views.workspace {
        Autoplace() {
          const view =  this.View;
          const selected = this.State.selected;
          super.Autoplace();
          const id = selected && !selected.link ? selected.id : root;
          if(view.getItem(id))
            view.autoPlace(id);
        }
      }

      //shapes space
      class CustomShapes extends diagram.views["shapes"] {
        config(){
          //get JSON object with configuration
          const ui = super.config();

          //search field
          const search = {
            view: "search",
            placeholder: "Search shape by name",
            clear: "replace",
            on: {
              onTimedKeyPress() { 
                const text = this.getValue();
                this.$scope.SearchShape(text);
              },
              onChange(text) { 
                if (!text) this.$scope.SearchShape();
              }
          }
        }

          return {
      rows: [
        {
          type: "wide",
          css: "search-container",
          padding: 5,
          rows: [search]
        },
        ui
      ]
    };
        }
        init() {
          // call default logic
          super.init();
          //get block with shapes
          const block = this.$$("lineView")
         // exclude basic shapes from Block group: octagon, triangle, etc.
          // this.$$("blockView").filter((obj) => {
          //   return obj.id.indexOf("dot") === -1 && obj.id.indexOf("angle") === -1;
          // });
    
        }
        SearchShape(text) {
          text = (text || "").toLowerCase();
          const dataViews = this.getRoot().queryView("dataview", "all");
       
          dataViews.forEach(view => {
            view.filter(shape => {
              const name = (shape.name || shape.id).toLowerCase();
              return name.indexOf(text) !== -1;
            });
       
            //разворачиваем группу, если название фигуры соответствует запросу 
            //если нет - сворачиваем
            const panel = view.getParentView();

            //doesn't work
            //view.count() ? panel.expand() : panel.collapse();
          });
        }
      }

      //toolbar space
      class CustomEditorToolbar extends diagram.views["toolbar"] {
        RightGroupConfig() {
          
          const elements = super.RightGroupConfig();
          //add buttons to diagram-editor toolbar
          toolbarButtons.forEach(button =>  elements.push(button)); 
          return elements;
        }
      }
                    
      const myDiagram = {
        view:"diagram",
        id:"diagram",
        root,
        autoplace: false, // false - to get fugure coordinate
        item: {
          width: 120,
          height: 50,
          template: obj => {
            if (obj.$css == "expected")
              return (
                "Expected value <br><span class='bold'>" +
                obj.value +
                "</span>"
              );
            if (obj.value)
              return (
                obj.value +
                (obj.percent
                 ? " <span class='bold'>" + obj.percent + "%</span>"
                 : "")
              );
            return "";
          },
        },
        tooltip:{
          template:function(obj){
            return `<span>${obj.value}</span>`
        },
        },
      
        shapes: [ //costomize shapes
          {
            id: "process",
            backgroundColor: "#facddc",
            lineColor: "#facddc",
            fontSize: 13,
          },
          {
            id: "start",
            backgroundColor: "#BFC5E6",
            lineColor: "#BFC5E6",
            fontSize: 13,
            width: 165,
            height: 50,
          },
          {
            id: "phone",
            // used for tooltips in Diagram editor
            name: "custom",
            // used to group shapes in Diagram editor
            group: "custom devices",
            template: initialSvgs["phone"],
            lineColor: "98E4ED",
            backgroundColor:"#fff",
            altBackgroundColor:"#98E4ED",
            textVAlign:"bottom"
          },
          {
            id: "checkbox",
            // used for tooltips in Diagram editor
            name: "custom",
            // used to group shapes in Diagram editor
            group: "custom devices",
            template:  (obj) => `
            <div>
              <span>Checkbox</span>
              <input type="checkbox" ${obj.checked ? "checked" : "checked"} onclick="toggleCheck(${obj.id})"/>
            </div>
          `,
            lineColor: "98E4ED",
            backgroundColor:"#fff",
            altBackgroundColor:"#98E4ED",
            textVAlign:"bottom"
          },
          {
            id: "image",
            // used for tooltips in Diagram editor
            name: "custom",
            // used to group shapes in Diagram editor
            group: "custom devices",
            template:  (obj) => `
              <div>
              <img src=${MTLogo} width="50" height="50" style="transform: scaleX(-1)">
            </div>
          `,
            lineColor: "98E4ED",
            backgroundColor:"#fff",
            altBackgroundColor:"#98E4ED",
            textVAlign:"bottom"
          },
        ],
        select:true, 
        data: initialNodes, 
        links: initialEdges,
        on:{
            //hide toolbar
            onAfterRender: () =>  setIsEditor(false)
        },
      };
    
      const toolbar = {
        view: "toolbar",
        padding: webix.skin.$active.layoutPadding.space,
        elements: [
          {},
          {
            view: "button",
            value: "Edit",
            autowidth: true,
            css: "webix_primary",
            click: function() {
              const diagram = $$("diagram");
              // blocks, links, shapes, defaults for blocks and links
              const full_data = diagram.serialize(true);
    
              $$("editor").show();
              $$("editor").setValues(full_data);

              //show toolbar
              setIsEditor(true)
            },
          },
        ],
      };

      const editor = {
        view: "diagram-editor",
        id: "editor",
        save: () => {
          const diagram = $$("diagram");
    
          // clear old data
          diagram.clearAll();
          diagram.getLinks().clearAll();
    
          // get blocks, links, shapes, defaults for blocks and links
          const full_data = $$("editor").getValues();
          // parse new data
          diagram.parse(full_data);
    
          $$("view").show();
        },
         override: new Map([
          [diagram.views.workspace, MyWSpace], 
          [diagram.views["shapes"], CustomShapes],
          [diagram.views["toolbar"], CustomEditorToolbar]
        ]),
         //override: new Map([[diagram.views["shapes"], LimitedShapes]]),
      };

      webix.ui({
        animate: false, //animate editor when show
        cells: [
          {
            id: "view",
            rows: [toolbar, myDiagram],
          },
          editor,
        ],
        container
      });
    }); 
  
      uiRef.current = $$('diagram-template')
      resObserver.current = new ResizeObserver(() => {
        if (uiRef.current) uiRef.current.adjust();
      });
      resObserver.current.observe(container);
  
      return () => {
        if (uiRef.current) {
          uiRef.current.destructor();
          uiRef.current = null;
        }
        resObserver.current.disconnect();
      };
    }, []);
  return (
    <>
    <CustomToolbar isEditor={isEditor}/>
    <div ref={uiContainer} style={{ height: "100%" }}></div>
    </>
  )
}

export default WebixScheme