type ImageDataProp = {
    label: string,
    value: string,
}

export function ImageData({ label, value }:ImageDataProp) {
    const isDimension = label ==="Dimentions"
    return (
        <div className={`h-13 flex flex-col justify-center ${isDimension?'col-span-3':'col-span-2'} sm:col-span-1`}>
            <p className='font-normal text-[10px] align-left'>{label}</p>
            <p className="font-semibold text-[13px]">{value}</p>
        </div>
    );
}