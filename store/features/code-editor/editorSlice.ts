import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type EditorTheme = "vs-dark" | "light" | "hc-black";

interface EditorState {
  theme: EditorTheme;
  isEditorSettingOpen: boolean;
  fontSize: number;
  lineHeight: number;
  wordWrap:boolean;
  miniMap:boolean;
  cursor:'block' | 'line' | 'underline',
  whiteSpace:boolean
}

const initialState: EditorState = {
  theme: "vs-dark",
  isEditorSettingOpen: false,
  fontSize: 14,
  lineHeight: 20,
  wordWrap:true,
  miniMap:true,
  cursor:'line',
  whiteSpace:false
};

const editorSlice = createSlice({
  name: "editor",
  initialState,
  reducers: {
    setTheme(state, action: PayloadAction<EditorTheme>) {
      state.theme = action.payload;
    },
    setIsEditorSettingOpen(state, action: PayloadAction<boolean>) {
      state.isEditorSettingOpen = action.payload;
    },
    setEditorFontSize(state, action: PayloadAction<number>) {
      state.fontSize = action.payload;
    },
    setEditorLineHeight(state, action: PayloadAction<number>) {
      state.lineHeight = action.payload;
    },
    setEditorWordWrap(state, action: PayloadAction<boolean>) {
      state.wordWrap = action.payload;
    },
    setEditorMiniMap(state, action: PayloadAction<boolean>) {
      state.miniMap = action.payload;
    },
    setEditorCursor(state, action: PayloadAction<'block' | 'line' | 'underline'>) {
      state.cursor = action.payload;
    },
    setEditorWhiteSpace(state, action: PayloadAction<boolean>) {
      state.whiteSpace = action.payload;
    },
  },
});

export const {
   setTheme,
   setIsEditorSettingOpen,
   setEditorFontSize ,
   setEditorLineHeight,
   setEditorWordWrap,
   setEditorMiniMap,
   setEditorCursor,
   setEditorWhiteSpace
  } =
  editorSlice.actions;

const editorReducer = editorSlice.reducer;
export default editorReducer;
