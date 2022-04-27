import { FetchedData } from "../../helpers/api";

type ModalImageCardProps = {
    data:FetchedData
    selected:string
    setSelected:React.Dispatch<React.SetStateAction<string>>
}

export function ModalImageCard({ data,selected,setSelected }: ModalImageCardProps) {
    const selectedClass = selected === data.id ? "bg-[#354052]":"";
    return (
        <div onClick={() => setSelected(data.id)}className={`relative place-self-center rounded hover:bg-[#354052] focus:bg-[#354052] p-2 flex flex-col align-center justify-center ${selectedClass}`}>
            <img src={data.urls?.small} className="object-cover rounded w-36  min-h-[30px]" alt="img" />
        </div>
    )
}