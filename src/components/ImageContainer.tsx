import {  useSelector } from 'react-redux';
import { FetchedData } from '../helpers/api';
import { sortList } from '../helpers/sortList';
import { RootState } from '../modules/store';
import { ImageCard } from './ImageCard';

export default function ImageContainer() {
    const {api:{data},search:{searchQuery},filter:{activeFilter}}= useSelector((state: RootState) => state);
    const state = useSelector((state: RootState) => state.select);
    const filteredData = sortList(data,searchQuery,activeFilter)
    return (    
        <section className="my-8 grid gap-5 grid-cols-auto-fit ">
            {filteredData.length > 0 && filteredData.map((item: FetchedData) => <ImageCard key={item.id} data={item} state={state} />)}
        </section>
    )
}