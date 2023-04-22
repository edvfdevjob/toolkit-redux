import { useDispatch, useSelector } from 'react-redux';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css';

import { increment, decrement, incrementBy } from './store/slices/counter';


function App() {
  
  const { counter } = useSelector( state => state.counter );
  const dispatch = useDispatch();

  return (
    <div className="App">
      
      <h1>Vite + React</h1>

      <p>
        count is {counter}
      </p>
      
      <div className="card">
        <p>
          <button onClick={ () => { dispatch( increment() ) }}>
            Increment
          </button>
          <button onClick={ () => { dispatch( decrement() ) }}>
            Decrement
          </button>
          <button onClick={ () => { dispatch( incrementBy(2) ) }}>
            Increment by 2
          </button>
        </p>
      </div>

    </div>
  )
}

export default App
