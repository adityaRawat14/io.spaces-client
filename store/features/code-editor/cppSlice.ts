import { ExecutionOutputType } from '@/types/editorTypes';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface CppState {
  code: string;
  output: ExecutionOutputType;
  isExecuting:boolean
  error:string | null
}



const initialState: CppState = {
  code:   `#include <iostream>

int main() {
    std::cout << "Hello, World!" << std::endl; 
    return 0; 
}

          `,
  output: {},
  isExecuting:false,
  error:null
};

const cppSlice = createSlice({
  name: 'cpp',
  initialState,
  reducers: {
    setCppCode(state, action: PayloadAction<string>) {
      state.code = action.payload;
    },
    setCppCodeOutput(state, action: PayloadAction<ExecutionOutputType>) {
      state.output = action.payload;
    },
    setIsExecuting(state, action: PayloadAction<boolean>) {
      state.isExecuting = action.payload;
    },
    setCppError(state, action: PayloadAction<string | null>) {
      state.error = action.payload;
    },
  },
});



export const { setCppCode, setCppCodeOutput,setIsExecuting ,setCppError} = cppSlice.actions;

const cppReducer=cppSlice.reducer;
export default  cppReducer;