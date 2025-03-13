//diagram example

import * as React from 'react';
import Rappid from './rappid';
import '@joint/plus/joint-plus.css';
import './css/styles.scss';

class Scheme2 extends React.Component {
  public render() {
    return (
      <>
    
        <h1 style={{display: 'flex', justifyContent: 'center'}}>JointJS+</h1>
        <h2 style={{display: 'flex', justifyContent: 'center'}}>License: $</h2>

        <div style={{display: 'flex', gap: '10px', justifyContent: 'center'}}>
        <a href="https://docs.jointjs.com/learn/integration/react" target="_blank">docs</a>
        <a href="https://drive.google.com/drive/folders/1zGTqgGr2ZoVg4bDAYTwKSPN07j5lrrql?usp=sharing" target="_blank">trial Packages</a>
        <a href="https://docs.jointjs.com/learn/quickstart/" target="_blank">getting started guid</a>
        <a href="https://www.youtube.com/watch?v=RWCpPN0bqR4" target="_blank">contents of the trial package</a>
        <a href="https://www.youtube.com/watch?v=kwAAwl_piI8" target="_blank">how to use our ready-made boilerplate applications</a>
        <a href="https://www.jointjs.com/demos" target="_blank">demo page</a>
        <a href="https://docs.jointjs.com/" target="_blank">tutorials section</a>
        <a href="https://codepen.io/jointjs/" target="_blank">Codepen</a>
        <a href="https://calendly.com/alexis-jointjs/30min" target="_blank">my calendar</a>
        <a href="https://www.jointjs.com/support" target="_blank">premium support level</a>
        </div>
        <Rappid />
      </>
    );
  }
}

export default Scheme2;

//render one shape

// import { PageWrapper } from './styles';
// import './style.css'
// import { useEffect, useRef } from 'react';
// import { dia, ui, shapes } from '@joint/plus/';
// import '@joint/plus/joint-plus.css';

// function Scheme4() {

//   const canvas = useRef<Element | null>(null);

//   useEffect(() => {
//       const graph = new dia.Graph();

//       const paper = new dia.Paper({
//           model: graph,
//           background: {
//               color: '#F8F9FA',
//           },
//           frozen: true,
//           async: true,
//           cellViewNamespace: shapes
//       });

//       const scroller = new ui.PaperScroller({
//           paper,
//           autoResizePaper: true,
//           cursor: 'grab'
//       });

//       canvas.current?.appendChild(scroller.el);
//       scroller.render().center();

//       const rect = new shapes.standard.Rectangle({
//           position: { x: 100, y: 100 },
//           size: { width: 100, height: 50 },
//           attrs: {
//               label: {
//                   text: 'Hello World'
//               }
//           }
//       });

//       graph.addCell(rect);
//       paper.unfreeze();

//       return () => {
//           scroller.remove();
//           paper.remove();
//       };

//   }, []);

//   return (
//     <>
//     <h1>JointJS+</h1>
//     <h2>Licence: $, free trial 30 days</h2>
//     <a href="https://docs.jointjs.com/learn/integration/react" target="_blank">docs</a>
//       <div className="canvas" ref={canvas}/>
//     </>

//   );
// }

// export default Scheme4;
