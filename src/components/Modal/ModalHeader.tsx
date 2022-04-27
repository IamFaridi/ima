type ModalHeaderProps = {
  text: string;
  helperText: string;
}

export default function ModalHeader({text,helperText}:ModalHeaderProps) {
  return (
    <div>
      <h1 className="font-bold text-[22px] mb-[11px] text-main/75">
        {text}
      </h1>
      <p className="font-regular text=[13px] text-main/75">
        {helperText}
      </p>
    </div>
  )
}
