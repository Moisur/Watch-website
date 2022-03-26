import './App.css';
import Products from './components/Products/Products';
import Text from './Text/Text';

function App() {
  return (
    <div className="App">
      <h1 className='logo'>Top Ten Watch </h1>
      <hr />
      <Products></Products>
      <Text></Text>
    </div>
  );
}

export default App;
