import { useDispatch } from 'react-redux'
import { AnyAction,Dispatch } from 'redux'

interface ButtonProps{
  outlined?:boolean
  isActive?:boolean
  white?:boolean,
  onClick?:(dispatch:Dispatch<AnyAction>,text:string) => void
  text:string
}


export default function Button({ outlined, isActive,text,white,onClick }:ButtonProps) {

  const dispatch = useDispatch();
  const handleClick = ()=>{
    onClick && onClick(dispatch,text)
  }
  const btnStyles = outlined ? 'text-cyan-500 border ' : white ?'bg-gradient-to-b from-lightGreyGradient to-darkGreyGradient text-main border border-border ml-4':'bg-gradient-to-b from-[#0099FF] to-[#0B79C3] text-white';
  const isActiveClass = "bg-cyan-500/5 border-cyan-500";
  return (
    <div className="flex align-right flex-1 justify-end">
      <button
        onClick={handleClick}
        className={`
        ${btnStyles}
        ${isActive && isActiveClass}
        font-medium 
        rounded flex 
        items-center 
        text-[13px] 
        px-3 py-2
      `}>{text}</button>
    </div>
  )
}
