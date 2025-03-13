//@ts-nocheck
import React, { useState } from "react";
import { Handle, Position } from "@xyflow/react";

const DropdownNode = ({ data }) => {
  const [selectedValue, setSelectedValue] = useState(data.defaultValue || "");

  return (
    <div className="dropdown-node">
      <div className="dropdown-header">Выбери значение:</div>
      <select
        className="dropdown-select"
        value={selectedValue}
        onChange={(e) => setSelectedValue(e.target.value)}
      >
        {data.options.map((option: string) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>

      {/* Вход и выход для связей */}
      <Handle type="target" position={Position.Left} />
      <Handle type="source" position={Position.Right} />
    </div>
  );
};

export default DropdownNode;
