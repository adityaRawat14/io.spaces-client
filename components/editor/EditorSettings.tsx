"use client";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
} from "@radix-ui/react-dialog";
import React, { useState } from "react";
import { DialogHeader } from "../ui/dialog";
import {
  setIsEditorSettingOpen,
  setTheme,
  setEditorFontSize,
  setEditorLineHeight,
  setEditorWordWrap,
  setEditorMiniMap,
  setEditorCursor,
  setEditorWhiteSpace,
} from "@/store/features/code-editor/editorSlice";
import { Switch } from "../ui/switch";

function EditorSettings() {
  const isModalOpen = useAppSelector(
    (state) => state.editor.isEditorSettingOpen
  );

  const theme = useAppSelector((state) => state.editor.theme);
  const fontSize = useAppSelector((state) => state.editor.fontSize);
  const wordWrap = useAppSelector((state) => state.editor.wordWrap);
  const miniMap = useAppSelector((state) => state.editor.miniMap);
  const cursor = useAppSelector((state) => state.editor.cursor);
  const whiteSpace = useAppSelector((state) => state.editor.whiteSpace);
  const lineHeight = useAppSelector((state) => state.editor.lineHeight);

  const [mySettings, setMySettings] = useState({
    theme,
    fontSize,
    wordWrap,
    miniMap,
    cursor,
    whiteSpace,
    lineHeight,
  });

  const dispatch = useAppDispatch();

  const toggleModal = () => {
    dispatch(setIsEditorSettingOpen(!isModalOpen));
  };

  if (!isModalOpen) return null;

  const themes = [
    {
      label: "black",
      theme: "hc-black",
    },
    {
      label: "light",
      theme: "light",
    },
    {
      label: "dark",
      theme: "vs-dark",
    },
  ];
  const lineHeights = [19, 20, 21, 22];
  const fontSizes = [14, 15, 16, 17];
  const cursors = ["block", "line", "underline"];


  const handleSaveChanges = () => {
    dispatch(setTheme(mySettings.theme));
    dispatch(setEditorFontSize(Number(mySettings.fontSize)));
    dispatch(setEditorLineHeight(Number(mySettings.lineHeight)));
    dispatch(setEditorCursor(mySettings.cursor));
    dispatch(setEditorWordWrap(!mySettings.wordWrap));
    dispatch(setEditorMiniMap(!mySettings.miniMap));
    dispatch(setEditorWhiteSpace(!mySettings.whiteSpace));
    toggleModal()
  };

  

  const handleThemeChange = (event: any) => {
    setMySettings({ ...mySettings, theme: event.target.value });
  };

  const handleFontSizeChange = (event: any) => {
    setMySettings({ ...mySettings, fontSize: Number(event.target.value) });
  };

  const handleLineHeightChange = (event: any) => {
    setMySettings({ ...mySettings, lineHeight: Number(event.target.value) });
  };

  const handleCursorChange = (event: any) => {
    setMySettings({ ...mySettings, cursor: event.target.value });
  };

  const handleWordWrapChange = () => {
    console.log("changed to wordwrap",!mySettings.wordWrap);
    
    setMySettings({
      ...mySettings,
      wordWrap: !mySettings.wordWrap,
    });
    console.log(mySettings);
    
  };

  const handleMiniMapChange = () => {
    console.log("changing to minimap ",!mySettings.miniMap);
    
    setMySettings({
      ...mySettings,
      miniMap: !mySettings.miniMap,
    });
    console.log(mySettings);
  };

  const handleWhiteSpaceChange = () => {
    console.log("changing to  whitespace",!mySettings.whiteSpace);
    setMySettings({
      ...mySettings,
      whiteSpace: !mySettings.whiteSpace,
    });
    console.log(mySettings);
  };

  return (
    <div className="flex items-center justify-center fixed inset-0">
      <main className="bg-[#373737] w-[30rem] border border-white/20 z-10 px-6 py-6 rounded-md shadow-lg shadow-black transition-all duration-100">
        <Dialog open={isModalOpen}>
          <DialogContent className="">
            <DialogHeader className="">
              <DialogTitle className="text-md text-gray-200 font-semibold">
                Editor Settings
              </DialogTitle>
              <DialogDescription className="text-[11px] text-white/50">
                Adjust your editor preferences here.
              </DialogDescription>
            </DialogHeader>
            <div className="flex  justify-between">
              <div className="flex flex-col px-4 gap-3 py-4 ">
              <div className="flex   items-center gap-6">
                <label
                  htmlFor="font-size"
                  className=" text-gray-300 text-[11px]"
                >
                  Font Size
                </label>
                <select
                  onChange={handleFontSizeChange}
                  id="font-size"
                  defaultValue={mySettings.fontSize}
                  className="col-span-3 outline-none text-gray-300 bg-white/10  rounded-sm text-[12px] w-16 border border-gray-600"
                >
                  {fontSizes.map((size, index) => {
                    return (
                      <option
                        className="text-gray-300 bg-[#373737]"
                        key={size}
                        value={size}
                      >
                        {size}
                      </option>
                    );
                  })}
                </select>
              </div>
              <div className="flex   items-center gap-6">
                <label htmlFor="theme" className="text-[11px] text-gray-300">
                  Theme
                </label>
                <select
                  id="theme"
                  defaultValue={mySettings.theme}
                  onChange={handleThemeChange}
                  className="col-span-3 outline-none bg-white/10 text-gray-300  rounded-sm text-[12px] w-16 border border-gray-600"
                >
                  {themes.map((th) => {
                    return (
                      <option
                        key={th.theme}
                        className="text-gray-300 bg-[#373737]"
                        value={th.theme}
                      >
                        {th.label}
                      </option>
                    );
                  })}
                </select>
              </div>

              <div className="flex   items-center gap-6">
                <label
                  htmlFor="line-height"
                  className="text-[11px] text-gray-300"
                >
                  Line Height
                </label>
                <select
                  onChange={handleLineHeightChange}
                  id="line-height"
                  defaultValue={mySettings.lineHeight}
                  className="col-span-3 outline-none bg-white/10 text-gray-300  rounded-sm text-[12px] w-16 border border-gray-600"
                >
                  {lineHeights.map((th) => {
                    return (
                      <option
                        key={th}
                        className="text-gray-300 bg-[#373737]"
                        value={th}
                      >
                        {th}
                      </option>
                    );
                  })}
                </select>
              </div>
              <div className="flex   items-center gap-6">
                <label htmlFor="cursor" className="text-[11px] text-gray-300">
                  Cursor
                </label>
                <select
                  id="cursor"
                  defaultValue={mySettings.cursor}
                  onChange={handleCursorChange}
                  className="col-span-3 outline-none bg-white/10 text-gray-300  rounded-sm text-[12px] w-16 border border-gray-600"
                >
                  {cursors.map((th) => {
                    return (
                      <option
                        key={th}
                        className="text-gray-300 bg-[#373737]"
                        value={th}
                      >
                        {th}
                      </option>
                    );
                  })}
                </select>
              </div>
            
            </div>
           <div className="flex flex-col py-4 px-3  items-center gap-3  ">
           <div className="flex   items-center w-full gap-14">
                <label htmlFor="mini-map" className="text-[11px] text-gray-300">
                  Mini Map
                </label>
                <Switch
                  id="mini-map"
                  checked={mySettings.miniMap}
                  className="h-5 "
                  onCheckedChange={handleMiniMapChange}
                />
              </div>

              <div className="  flex items-center gap-10">
                <label
                  htmlFor="white-space"
                  className="text-[11px] text-gray-300"
                >
                  White spaces
                </label>
                <Switch
                  id="white-space"
                  checked={mySettings.whiteSpace}
                  className="h-5 bg-black"
                  onCheckedChange={handleWhiteSpaceChange}
                />
              </div>
              <div className="flex  items-center gap-10">
                <label
                  htmlFor="word-wrap"
                  className="text-[11px] text-gray-300"
                >
                  Word wrap
                </label>
                <Switch
                  id="word-wrap"
                  checked={mySettings.wordWrap}
                  className="h-5 "
                  onCheckedChange={handleWordWrapChange}
                />
              </div>
           </div>
            </div>
            
           <div className="w-full flex justify-end">
            <div className="flex gap-3">
            <button onClick={toggleModal} className="text-[13px] px-1  hover:text-gray-100 border-[2px] border-white/30  text-gray-300 rounded-sm">cancel</button>
            <button onClick={handleSaveChanges} className="text-[13px] px-1  hover:text-gray-100 border-[2px] border-white/30  text-gray-300 rounded-sm" >save</button>
            </div>
           </div>
          </DialogContent>
        </Dialog>
      </main>
    </div>
  );
}


export default EditorSettings;
