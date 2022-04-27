import Container from './components/Container';
import { errorCB, initiated, successCB } from './helpers/api';
import useFetch from './hooks/useFetch';

function App() {
    let endPoint:string = '/photos/random?count=20&orientation=landscape';
    let props = {endPoint, initiated, successCB, errorCB};
    useFetch(props);
  return (  
    <div className="App font-sf">
      <Container />
    </div>
  );
}

export default App;



