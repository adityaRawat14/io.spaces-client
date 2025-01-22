import { configureStore } from '@reduxjs/toolkit'
import javaReducer from './features/code-editor/javaSlice'
import cppReducer from './features/code-editor/cppSlice'
import editorReducer from './features/code-editor/editorSlice'
export const makeStore = () => {
  return configureStore({
    reducer: {
      java:javaReducer,
      cpp:cppReducer,
      editor:editorReducer
    },
  })
}


export type AppStore = ReturnType<typeof makeStore>
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']