// @ts-nocheck
export const toolbarButtons = [
    {
            view: 'button',
            value: 'Shape control',
            width: 150,
            click: function () {
              let selectedId = null;
              const diagram = $$('diagram');
              const editor = $$('editor');
              const state = editor.getState();

              if (state.selected && state.selected.id) {
                selectedId = state.selected.id;
              }
              if (selectedId) {
                diagram.updateItem(selectedId, { fillOpacity: 0.5 });

                const full_data = diagram.serialize(true);
                editor.setValues(full_data);
              }
            },
            fill: true
          },
          {
            view: 'button',
            value: 'Resize template',
            width: 150,
            click: function () {
              const diagram = $$('diagram');
              const editor = $$('editor');
              diagram.define('width', 1000);
              editor.define('width', 1000);
              diagram.resize();
              editor.resize();
            },
          },
   ]