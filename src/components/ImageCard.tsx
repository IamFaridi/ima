import { FetchedData } from "../helpers/api";

type ImageCardProps = {
    data: FetchedData;
    state:{
        selected:string[]
    }
}

export function ImageCard({ data, state }: ImageCardProps) {
    let id = data.id;
    const isChecked = state.selected.includes(id);
    return <div className="relative rounded hover:bg-[#E7EAF1] focus:bg-[#E7EAF1] p-2 flex flex-col align-center justify-center w-fit">
        <input className={`absolute  cursor-pointer w-4 h-4 rounded border border-[#CCD2E2]/75 bg-gradient-to-t from-[#F1F5FA] to-[#FDFEFF]  focus:ring-0 focus:ring-offset-0 top-1 left-1`} type="checkbox" checked={isChecked} data-id={id} readOnly />
        <img src={data.urls.small} className="object-cover rounded w-full cus-538:w-[400px]  min-h-24" alt="img" />
        <p className="text-xs mt-2">{data.name}</p>
    </div>;
}