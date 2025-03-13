// @ts-nocheck
import { useEffect, useRef, useState } from 'react';
import { toolbarButtons } from './toolbarButtons';

const CustomToolbar = ({ isEditor }) => {
  const uiContainer = useRef(null);
  const uiRef = useRef(null);
  const resObserver = useRef(null);
  const [isMessage, setIsMessage] = useState(false);
  const [message, setMessage] = useState(false);

  useEffect(() => {
    const container = uiContainer.current;
    webix.ready(() => {
      webix.CustomScroll.init();

      webix.ui({
        view: 'toolbar',
        id: 'myToolbar',
        //cols: toolbarButtons,
        cols: [],
        container,
      });
    });

    uiRef.current = $$('myToolbar');
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
      <div style={{ height: '70px' }}>
        {isEditor ? (
          <>
            <div ref={uiContainer} style={{ height: '100%', width: '100%' }}>
              {isMessage ? <div style={{ display: 'flex', justifyContent: 'center' }}>{message}</div> : <></>}
            </div>
          </>
        ) : (
          <div ref={uiContainer} style={{ display: 'none' }}></div>
        )}
      </div>
    </>
  );
};

export default CustomToolbar;
