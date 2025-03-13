// @ts-nocheck
import React, { useState } from 'react';
import { Handle, Position } from '@xyflow/react';

export default ({ data, isConnectable }) => {
  const [imageURL, setImageURL] = useState(data.image.url);

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const newImageURL = URL.createObjectURL(file);
      setImageURL(newImageURL);
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
        className="image-node"
        style={{
          height: `${data.image.height}px`,
          width: `${data.image.width}px`,
          backgroundImage: `url(${imageURL})`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'contain',
          backgroundPosition: 'center',
        }}
      />
      <input
        type="file"
        accept="image/*"
        onChange={handleImageUpload}
        style={{
          position: 'absolute',
          bottom: '-20px',
          left: '0',
          width: '100%',
          opacity: 0.7,
        }}
      />
      <Handle type="source" position={Position.Right} id="a" isConnectable={isConnectable} />
    </>
  );
};
