import { PageWrapper } from './styles';
import './style.css'
import Diagram, {
  Nodes, AutoLayout, Toolbox, Group,
} from 'devextreme-react/diagram';
import ArrayStore from 'devextreme/data/array_store';
import service from './data';
import { useEffect } from 'react';

const dataSource = new ArrayStore({
  key: 'ID',
  data: service.getEmployees(),
});

const Scheme1 = () => {

  useEffect(() => {
    //hide license block
    const licenseElement = document.querySelector('dx-license');
    const closeButton = licenseElement?.querySelector('svg');

    if (licenseElement && closeButton) {
      closeButton.dispatchEvent(new MouseEvent('click', { bubbles: true }));
    }
  }, []);



  return (
    <PageWrapper>
      <h1>Dev Extreme Diagram</h1>
      <h2>License: $</h2>
      <a href="https://js.devexpress.com/React/Documentation/Guide/UI_Components/Diagram/Demos/" target='_blank'>Docs</a>
    <Diagram id="diagram">
      {/* <Nodes dataSource={dataSource} keyExpr="ID" textExpr="Title" parentKeyExpr="Head_ID">
        <AutoLayout type="tree" />
      </Nodes>
      <Toolbox>
        <Group category="general" title="General" />
      </Toolbox> */}
    </Diagram>
    </PageWrapper>
  );
};

export default Scheme1;
