import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addData } from '../../modules/actions/apiActions';
import { setToDefault } from '../../modules/actions/modal/modalActions';
import { RootState } from '../../modules/store';
import Button from '../UI/Button';
import { ImageData } from './ImageData';
import ModalBody from './ModalBody';
import ModalHeader from './ModalHeader';

const array = [
    {
        id: '1',
        label: 'File Type',
        value:'JPG'
    },
    {
        id: '2',
        label: 'File Size',
        value:'1.5MB'
    },
]

export default function AddImageModal() {
    const { modalData } = useSelector((state: RootState) => state.modal);
    const dispatch = useDispatch();
    const [inputValue, setInputValue] = useState('');

    const handleClick = () => {
        if (inputValue.length === 0 || modalData.length > 128) {
            alert("Please enter a value between 1 and 128 characters");
            return;
        }
        const data = { ...modalData, name: inputValue };
        dispatch(addData(data));
        dispatch(setToDefault());
    }
    const obj = {
        id: '3',
        label: 'Dimentions',
        value: `${modalData.width} x ${modalData.height}`
    }

    return (
        <ModalBody width="sm">
            <div className="h-full w-full p-2 cus-538:p-10">
                <ModalHeader text="Add Image" helperText="Edit your media files here" />
                <div className="my-4 h-[24rem] place-item-center scrollbar-hide rounded-[12px] grid p-2 place-items-center border-[3px] border-dashed">
                    <img className='h-full rounded mt-2' src={modalData.urls.small} alt="" />
                    <div className="grid grid-cols-9 sm:grid-cols-6  place-items-center">
                        <div className="h-10 flex flex-col justify-center col-span-2 sm:col-span-3">
                            <p className="font-normal text-[10px]">Title</p>
                            <input value={inputValue} onChange={(e) => setInputValue(e.target.value)} type="text" className="outline-0 h-8 w-[90%] mt-0 text-main/70 focus:shadow-none rounded focus:ring-0 ring-0 focus:border-border border-1 border-border" placeholder="Title" />
                        </div>
                        {[...array,obj].map(({id,label,value})=><ImageData key={id} label={label} value={value}/>)}
                    </div>
                </div>
                <Button text="Add Image" onClick={handleClick} />
            </div>
        </ModalBody>
    )
}