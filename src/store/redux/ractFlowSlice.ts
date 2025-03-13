
//@ts-nocheck
import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

const initialState = {
  tableNode:{}
 };

const reactFlowSlice = createSlice({
  name: 'REACT_FLOW',
  initialState,
  reducers: {
    setReactFlowTableNodeProperties: (state, action) => {
      const {id, width, height} = action.payload
      state.tableNode = {id, width, height}
    },
  },
});

export const { setReactFlowTableNodeProperties } = reactFlowSlice.actions;
export default reactFlowSlice.reducer;
