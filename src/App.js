import {useSelector, useDispatch} from 'react-redux';
import {increment, decrement} from './action'; 

function App() {
  const counter = useSelector(state => state.counter); 
  const isLogged = useSelector(state => state.logged); 
  const dispatch = useDispatch(); 
  
  return (
    <div>
      <h1>Counter : {counter}</h1>
      <button onClick={()=> {dispatch(increment())}}>+</button>
      <button onClick={()=> {dispatch(decrement())}}>-</button>
      {isLogged && <h1>User is logged in</h1>}
    </div>
  );
}

export default App;
