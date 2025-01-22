import { ExecutionOutputType } from '@/types/editorTypes';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';



interface JavaState {
  code: string;
  output: ExecutionOutputType;
  isExecuting:boolean
  error:string | null
}



const initialState: JavaState = {
  code:   `public class Main {
      
      public static void main(String []args) {
            System.out.println("Hello world");
     }
  }
          `,
  output: {},
  isExecuting:false,
  error:null
};

const javaSlice = createSlice({
  name: 'java',
  initialState,
  reducers: {
    setJavaCode(state, action: PayloadAction<string>) {
      state.code = action.payload;
    },
    setJavaCodeOutput(state, action: PayloadAction<ExecutionOutputType>) {
      state.output = action.payload;
    },
    setIsExecuting(state, action: PayloadAction<boolean>) {
      state.isExecuting = action.payload;
    },
    setJavaError(state,action:PayloadAction<string | null>){
      state.error=action.payload;
    }
  },
});



export const { setJavaCode, setJavaCodeOutput,setIsExecuting , setJavaError} = javaSlice.actions;

const javaReducer=javaSlice.reducer;
export default  javaReducer;