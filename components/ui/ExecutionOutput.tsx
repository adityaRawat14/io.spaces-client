import { formatBinaryString } from "@/lib/utils";
import { ExecutionOutputType } from "@/types/editorTypes";
import React from "react";

interface ExecutionOutputProps {
  output: ExecutionOutputType;
  isLoading: boolean;
  error: string | null;
}

function ExecutionOutput({ output, isLoading, error }: ExecutionOutputProps) {
  const outputErrorMessageFormatted=output.errorMessage?.split("\n")
  const outputResponseMessageFormatted=output.response?.split("\n")

  return (
    <div className="px-2">
      {isLoading ? (
        <h1 className="font-bold mb-3  text-2xl px-2 py-2  text-gray-500 border-gray-700 border-b ">
          Executing..{" "}
        </h1>
      ) : (
        <h1 className="font-bold mb-3  text-2xl px-2 py-2  text-gray-500 border-gray-700 border-b ">
          {" "}
          Output{" "}
        </h1>
      )}
      <div
        className={`py-3 px-3 rounded font-mono ${
          output.response && "border-[1px]"
        }  border-gray-700 text-gray-400 text-sm  `}
      >
        {error ? (
          <span className="text-red-600">{error}</span>
        ) : output.errorMessage ? (
         <div className="flex flex-col gap-1">{
          outputErrorMessageFormatted?.map((msg)=>{
            return (
          <span className="text-red-600">
          {formatBinaryString(msg)}
        </span>
)
          })
          }</div>
        ) : (
          output.response && <div className="flex flex-col gap-1">{
            outputResponseMessageFormatted?.map((res)=>{
              return (
                <span>{formatBinaryString(res)}</span>
              )
            })
            }</div>
        )}
      </div>
    </div>
  );
}

export default ExecutionOutput;
