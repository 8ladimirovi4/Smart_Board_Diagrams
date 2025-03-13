//@ts-nocheck
import React, { useState, useEffect, useRef, useCallback } from "react";
import { Handle, Position, useNodes, useUpdateNodeInternals } from "@xyflow/react";
import { NodeService } from '../data';
import { useDispatch } from "react-redux";
import { setReactFlowTableNodeProperties } from "@/store/redux/ractFlowSlice";

const TableNode = ({ data, id }) => {

  const [rows, setRows] = useState(data.rows || [[""]]);
  const tableRef = useRef(null);
  const updateNodeInternals = useUpdateNodeInternals();
  const nodes = useNodes();

  // Добавить строку
  const addRow = () => {
    setRows((prevRows) => [...prevRows, Array(data.columns.length).fill("")]);
  };

  // Удалить последнюю строку
  const removeRow = () => {
    if (rows.length > 1) {
      setRows((prevRows) => prevRows.slice(0, -1));
    }
  };

  const handleChange = (rowIndex, colIndex, value) => {
    const updatedRows = [...rows];
    updatedRows[rowIndex][colIndex] = value;
    setRows(updatedRows);
  };

  return (
    <div className="table-node" ref={tableRef}>
      <table className="custom-table">
        <thead>
          <tr>
            {data.columns.map((col, index) => (
              <th key={index}>{col}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {row.map((cell, colIndex) => (
                <td key={colIndex}>
                  <input
                    type="text"
                    value={cell}
                    onChange={(e) => handleChange(rowIndex, colIndex, e.target.value)}
                  />
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>

      <div className="table-controls">
        <button onClick={addRow}>Добавить строку</button>
        <button onClick={removeRow}>Удалить строку</button>
      </div>

      {/* Вход и выход для связей */}
      <Handle type="target" position={Position.Left} />
      <Handle type="source" position={Position.Right} />
    </div>
  );
};

export default TableNode;
