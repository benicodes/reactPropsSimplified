import './App.css';
import MyProducts from './components/MyProducts';
import ProductDestructure from './components/ProductDestructure';

function App() {
  return (
    <div className="App">
      <MyProducts
        name='Sweater'
        description='this product has fantastic feature'
        price={2000}
      />

      <MyProducts
        name='Bom short'
        description='this product has fantastic feature'
        price={1000}
      />
      <hr />
      <ProductDestructure 
        student='Anietie Bassey'
        subject='Mathematics'
        score={68}
      />
      <hr />
      <ProductDestructure />
    </div>
  );
}

export default App;
