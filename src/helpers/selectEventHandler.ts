
import { Dispatch } from "redux";
import { removeData } from "../modules/actions/apiActions";
import { selectAll, selectOne, unSelectAll, unSelectOne } from "../modules/actions/selectActions";
import { Action } from "../modules/reducers/types/api";
import { SelectAction } from "../modules/reducers/types/select";


export const select = (target: HTMLInputElement, dispatch: Dispatch<SelectAction | Action>, allData: string[], state: { selected: string[], isAllSelected: boolean }) => {
  switch (target.dataset.id) {
    case "select-all":
      if (target.checked) dispatch(selectAll(allData));
      else dispatch(unSelectAll());
      break;
    case "delete":
      let data:string[] = state.selected
      if (state.selected.length > 0) dispatch(removeData(data));
      break;
    default:
      if (!(target instanceof HTMLInputElement)) return;
      let isAllSelected = allData.length === state.selected.length + 1;
      let id = target.dataset.id as string;
      let payload = { id, isAllSelected };
      if (target.checked) dispatch(selectOne(payload))
      else dispatch(unSelectOne(id))
      break;
  }
}