import { ChangeEvent, useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { AnyAction, Dispatch } from 'redux';
import useDebounce from '../../hooks/useDebounce'


type TextfieldProps = {
    onChangeText:(dispatch:Dispatch<AnyAction>,text:string) => void
}

export default function Textfield({onChangeText}:TextfieldProps) {
    const dispatch = useDispatch();
    const [value, setValue] = useState<string>('')
    const debouncedValue = useDebounce<string>(value, 500);
    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value);
    }
    useEffect(() => {
        onChangeText(dispatch,value);
    }, [debouncedValue]);

    return (
        <div className="flex items-center max-h-[45px] max-w-xl rounded border text-border">
            <div className="translate-x-5 sm:translate-x-7">
                <i className="fa-solid fa-magnifying-glass text-icon"></i>
            </div>
            <input onChange={handleChange} type="text" className="h-8 text-main/70 text-13 border-0 focus:border-0 focus:outline-0 outline-0 rounded py-3 px-2 pl-7 sm:pl-10  w-full font-semibold focus:shadow-none focus:ring-0 placeholder-gray-300" placeholder='Search Media' />
        </div>
    )
}