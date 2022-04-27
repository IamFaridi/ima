import { useSelector } from 'react-redux';
import { searchText } from '../modules/actions/searchActions';
import { SearchAction } from '../modules/reducers/types/search';
import { RootState } from '../modules/store';
import Filteroption from './FilterOption'
import Textfield from './UI/Textfield'

export default function FilterOptions() {
    const state = useSelector((state: RootState) => state.select);
    const handleChangeText = (dispatch: (arg0: SearchAction) => void, value: string) => {
        dispatch(searchText(value));
    }
    return (
        <section className="border text-border rounded-7 font-bold bg-white">
            <div className="flex">
                <div className="p-6 flex items-center">
                    <input className='mr-2 w-4 h-4 rounded border border-[#CCD2E2]/75 bg-gradient-to-t from-[#F1F5FA] to-[#FDFEFF]  focus:ring-0 focus:ring-offset-0' type="checkbox" id="vehicle1" name="vehicle1" value="Bike" data-id="select-all" checked={state.isAllSelected} readOnly />
                    <label className=" text-main/70 text-13" htmlFor="vehicle1">Select All</label>
                </div>
                <div className="border-l-2 h-18 text-border"></div>
                <div className="flex items-center justify-center ml-[10px]">
                    <i className="fa-solid fa-trash-can cursor-pointer" data-id="delete"></i>
                </div>
                <div className="flex flex-1 items-center justify-end p-4 align-center ml-[10px]" >
                    <Textfield onChangeText={handleChangeText} />
                </div>
            </div>
            <hr className='text-border' />
            <div className="flex">
                <div className="px-6 py-1 flex items-center">
                    <p className=" text-main/70 text-13 font-bold">Sort By</p>
                </div>
                <div className="border-l-2 h-18 text-border"></div>
                <div className="flex gap-4 sm:gap-10 px-4 py-2 align-center">
                    {["Date", "Size", "Title"].map((opt, i) => <Filteroption key={i} outlined={true} text={opt} />)}
                </div>
            </div>
        </section>
    )
}