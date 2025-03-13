// @ts-nocheck
import { Link } from 'react-router-dom';
import { PageWrapper } from './styles';

const Scheme6 = () => {
 
  return (
       <PageWrapper>
      <h1>Webix Diagrams</h1>
      <h2>License: $</h2>
      <div style={{display: 'flex', justifyContent: 'center', gap: '10px'}}>
    <a href="https://docs.webix.com/desktop__diagram.html" target='_blank'>Docs</a>
    <a href="https://drive.google.com/drive/folders/1jZVyQp3kIVWIq_EQMmbX4H-sjjq00e2E?usp=sharing" target='_blank'>React Samples</a>
    <a href="https://drive.google.com/drive/folders/1cfXllneBRtAqDSm3iNuzNuvyRSqXgUbj?usp=sharing" target='_blank'>Trial JS Samples</a>
    </div>
    <ul>
      <li  
      style={{cursor: 'pointer', margin: '10px', listStyle: 'none'}}> <Link to="/scheme6/scheme">Схема1</Link></li>
      <li  style={{cursor: 'pointer', margin: '10px', listStyle: 'none'}}><Link to="/scheme6/scheme">Схема2</Link></li>
      <li  style={{cursor: 'pointer', margin: '10px', listStyle: 'none'}}><Link to="/scheme6/scheme">Схема3</Link></li>
    </ul>

      </PageWrapper>
  );
};

export default Scheme6;
