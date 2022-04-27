import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import {  FetchedData, } from '../../helpers/api';
import { setModalContent } from '../../modules/actions/modal/modalActions';
import { RootState } from '../../modules/store';
import Button from '../UI/Button';
import AddImageModal from './AddImageModal';
import { ModalImageCard } from './ModalImageCard';


type StateData={
    data:FetchedData[]
}

export default function ModalImageContainer() {

    const [selected, setSelected] = React.useState('');
    const dispatch = useDispatch();

    const { data  }:StateData= useSelector((state: RootState) => state.modalSearch);

    const handleClick = () => {
        const selectedData = data.find((item: FetchedData) => item.id === selected);
        if(!selectedData) {
            alert('Please select an image to add');
            return
        };  
        dispatch(setModalContent({ content: <AddImageModal />, data: selectedData }));
    };

    return (
        <>
            <div className="my-8 h-[18rem] p-2 place-item-center scrollbar-hide rounded-[12px] grid gap-5 grid-cols-auto-fit border-[3px] border-dashed overflow-hidden overflow-y-auto">
                {data.length > 0 && data.map((item: FetchedData) => <ModalImageCard selected={selected} setSelected={setSelected} key={item.id} data={item} />)}
            </div>
            <Button text="Select Image" onClick={handleClick} />
        </>
    )
}
function data(data: any) {
    throw new Error('Function not implemented.');
}

