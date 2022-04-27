import { setModalVisiblity } from "../modules/actions/modal/modalActions";
import { ModalAction } from "../modules/reducers/types/modal";
import Button from "./UI/Button";

export default function Header() {

    const handleClick = (dispatch: (arg0: ModalAction) => void) => {
        dispatch(setModalVisiblity())
    }
    return <header className="flex items-start mb-3">
        <div className="container flex-1">
            <h1 className="text-xl mb-2.5 text-main font-semibold">Media Library</h1>
            <p className="text-tiny text-sec">create, edit, and manage the media on your community</p>
        </div>
        <Button text="Add Image" onClick={handleClick}/>
    </header>;
}