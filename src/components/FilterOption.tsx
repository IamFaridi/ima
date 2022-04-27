import { useSelector } from 'react-redux';
import { setActiveFilter } from '../modules/actions/filterAction';
import { FilterAction } from '../modules/reducers/types/filter';
import { RootState } from '../modules/store';
import Button from './UI/Button'

type FilterOptionProps = {
  outlined: boolean;
  text: string;
}

export default function FilterOption({outlined, text}:FilterOptionProps) {

  const {activeFilter} = useSelector((state: RootState) => state.filter);
  
  const callBack = (dispatch: (arg0: FilterAction) => void,text: string)=>{
    dispatch(setActiveFilter(text));
  }

  return (
    <Button outlined={outlined} isActive={activeFilter===text} text={text} onClick={callBack}/>
  )
}
