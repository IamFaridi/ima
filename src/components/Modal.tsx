import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setToDefault } from "../modules/actions/modal/modalActions";
import { RootState } from "../modules/store";

const Modal = () => {
    let { modalVisibility, modalContent } = useSelector((state: RootState) => state.modal);
    const dispatch = useDispatch();
    const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
        e.preventDefault();
        e.stopPropagation();
        let target = e.target as HTMLInputElement;
        if(target.id==="modal") {
            dispatch(setToDefault())
        }
    }

    useEffect(() => {
        if (modalVisibility) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
    }, [modalVisibility])

    return (
        modalVisibility ?
            <div id="modal"  tabIndex={- 1} aria-hidden="true" onClick={handleClick} className="fixed top-0 left-0 right-0 z-10  w-full bg-black/40 overflow-x-hidden overflow-y-auto inset-0 h-modal md:h-full backdrop-blur" >
                {modalContent}
            </div >
            :
            null
    )
};

export default Modal;