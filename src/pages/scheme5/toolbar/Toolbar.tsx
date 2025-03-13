// @ts-nocheck

import DownloadButton from "./DownloadButton";

const Toolbar = ({ checked, onChange = () => {} }) => {
  return (
    <div style={{display: 'flex', flexDirection: 'column', gap: '10px', width: '100%', height: '100px', borderTop: '1px solid lightGrey', marginBottom: '5px' }}>
      <p>Scheme Toolbar</p>
      <div style={{ display: 'flex', gap: '5px'}}>
        
        <label htmlFor="ishidden">
          Show/hide shapes layer
          <input id="ishidden" type="checkbox" checked={checked} onChange={onChange} className="react-flow__ishidden" />
        </label>
  
        <DownloadButton />
      </div>
    </div>
  );
};

export default Toolbar;
