import './App.css';
import Form from './components/Form';
import FormUsingRef from './components/FormUsingRef';
function App() {
  return (
    <div className="App">
      <div class="content content1" >
        
        <Form />
      </div>
       <div class="content content2" >
        <FormUsingRef />
       </div>
     
    
   
    </div>
  );
}

export default App;
