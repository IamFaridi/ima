import { useDispatch, useSelector } from 'react-redux';
import { Dispatch } from 'redux';
import { select } from '../helpers/selectEventHandler';
import { Action } from '../modules/reducers/types/api';
import { SelectAction } from '../modules/reducers/types/select';
import { RootState } from '../modules/store';
import FilterOptions from './FilterOptions'
import Header from './Header'
import ImageContainer from './ImageContainer'

export default function Container() {
  const dispatch = useDispatch<Dispatch<SelectAction | Action>>();
  const { api: { data }, select: state } = useSelector((state: RootState) => state);
  const allData = data.map((item: any) => item.id);
  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    let target = e.target as HTMLInputElement;
    select(target, dispatch, allData, state)
  }
  return (
    <div onClick={handleClick} className='h-screen bg-main px-6 py-10'>
      <Header />
      <FilterOptions />
      <ImageContainer />
    </div>
  )
}
