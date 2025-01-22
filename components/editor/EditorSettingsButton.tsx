"use client"
import { setIsEditorSettingOpen } from "@/store/features/code-editor/editorSlice";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { IoMdSettings } from "react-icons/io";

function EditorSettingsButton() {
const isModalOpen = useAppSelector((state)=>state.editor.isEditorSettingOpen);
const dispatch=useAppDispatch()
const toggleModal=()=>{
  dispatch(setIsEditorSettingOpen(!isModalOpen));
}

  return (
   <button onClick={toggleModal}>
    <IoMdSettings className="text-gray-300 hover:text-gray-200" size={16}/>
   
   </button>
  )
}

export default EditorSettingsButton