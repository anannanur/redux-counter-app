import './App.css';
import Counter from './Components/Counter';

function App() {
  return (
    <div className='main'>
      <div className="App">
        <h1 style={{color: '#f1c40f', textAlign: 'center'}}>React-Redux Counter App</h1>
        <Counter/>
      </div>
    </div>
  );
}

export default App;
