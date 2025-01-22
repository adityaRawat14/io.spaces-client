"use client";

import React, { useEffect } from "react";
import { IconType } from "react-icons";
import { TbPlayerPlayFilled } from "react-icons/tb";
import EditorSettingsButton from "./EditorSettingsButton";
interface FilesHeaderProps {
  files?: FileData[];
  onFileSelect?: (file: string) => void;
  selectedFile?: string;
  onCodeExecute?: any;
}
type FileData = {
  name: string;
  icon: IconType;
  language: string;
};

function FilesHeader({
  files,
  onFileSelect,
  selectedFile,
  onCodeExecute,
}: FilesHeaderProps) {


  return (
    <div className="bg-gray-800 sticky top-0 h-10 flex  justify-between pr-6  w-full ">
      <div className="flex">
        {files && files.map((file) => (
          <button
            key={file.name}
            className={`flex items-center px-4 h-full text-[13px] focus:outline-none transition-colors ${
              selectedFile === file.name
                ? "bg-gray-700 text-white"
                : "hover:bg-gray-700"
            }`}
            onClick={() => {
              if (onFileSelect) onFileSelect(file.name);
            }}
          >
            <file.icon className="mr-2" size={15} />
            {file.name}
          </button>
        ))}
      </div>
      <div className="h-full gap-6 items-center flex">
        <EditorSettingsButton />
      {onCodeExecute && (
        <button
          onClick={onCodeExecute}
          className="flex  hover:text-gray-300 text-[12px] text-gray-400 items-center  gap-1 border-[1px] rounded-sm border-gray-400 px-2 py-1"
        >
          <span className="font-bold ">Run</span>
          <TbPlayerPlayFilled />
        </button>
      )}
      </div>
    </div>
  );
}

export default FilesHeader;
