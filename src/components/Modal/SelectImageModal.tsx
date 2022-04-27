import { errorCB, successCB } from '../../helpers/modal/modalSearch'
import useFetch from '../../hooks/useFetch'
import Button from '../UI/Button'
import Textfield from '../UI/Textfield'
import ModalBody from './ModalBody'
import ModalHeader from './ModalHeader'
import ModalImageContainer from './ModalImageContainer'

export default function SelectImageModal() {
  const endPoint = '/search/photos?query=random&per_page=20&orientation=landscape';
  const props = { endPoint, successCB, errorCB };
  const fetcher = useFetch(props);

  const handleChangeText = (dispatch: any, value: string) => {
    if (value.length > 2)
      fetcher(`/search/photos?query=${value}&per_page=20&orientation=landscape`);
    else
      fetcher(endPoint);
  }

  return (
    <ModalBody>
      <div className="h-full w-full p-10">
        <ModalHeader text="Select Image" helperText="Search and select image" />
        <div className='flex mt-7 max-w-xs align-middle justify-center w-full sm:w-[60%]'>
          <Textfield onChangeText={handleChangeText} />
          <Button text="Search" isActive={false} white={true} />
        </div>
        <ModalImageContainer />
      </div>
    </ModalBody>
  )
}
