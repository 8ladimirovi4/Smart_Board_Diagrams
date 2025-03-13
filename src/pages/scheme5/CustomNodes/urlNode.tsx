// @ts-nocheck

import React, { useState } from 'react';
import { Handle, Position } from '@xyflow/react';

export default function urlNode ({ data, isConnectable }) {
  const [url, setUrl] = useState(data.url || '');
  const [isUrlValid, setIsUrlValid] = useState(true);
  const [iframeUrl, setIframeUrl] = useState(data.url || '');

  const handleUrlChange = (event) => {
    setUrl(event.target.value);
  };

  const handleUrlSubmit = () => {
    try {
      // Проверка на корректность URL
      new URL(url);
      setIframeUrl(url);
      setIsUrlValid(true);
    } catch (e) {
      setIsUrlValid(false);
    }
  };

  return (
    <>
      <Handle
        type="target"
        position={Position.Left}
        onConnect={(params) => console.log('handle onConnect', params)}
        isConnectable={isConnectable}
      />
      <div
        className="url-node"
        style={{
          height: `${data.height || 300}px`,
          width: `${data.width || 200}px`,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '10px',
          backgroundColor: '#f4f4f4',
          borderRadius: '8px',
          boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
        }}
      >
        <input
          type="text"
          value={url}
          onChange={handleUrlChange}
          placeholder="Enter website URL"
          style={{
            width: '100%',
            padding: '5px',
            marginBottom: '10px',
            borderRadius: '4px',
            border: '1px solid #ccc',
          }}
        />
        <button
          onClick={handleUrlSubmit}
          style={{
            padding: '5px 10px',
            borderRadius: '4px',
            backgroundColor: '#007bff',
            color: 'white',
            border: 'none',
            cursor: 'pointer',
          }}
        >
          Confirm
        </button>
        {!isUrlValid && <span style={{ color: 'red', marginTop: '10px' }}>Invalid URL</span>}
        {iframeUrl && (
          <iframe
            src={iframeUrl}
            title="Website"
            width="100%"
            height="150px"
            style={{
              border: 'none',
              marginTop: '10px',
              borderRadius: '4px',
            }}
          />
        )}
      </div>
      <Handle type="source" position={Position.Right} id="a" isConnectable={isConnectable} />
    </>
  );
};
