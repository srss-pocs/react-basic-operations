
import './App.css';
import person from './Person';
import './index.css'

function App() {
  console.log(person)
  
  return (
    
   <div>
    {sum(5,4)} <br/>
       <label htmlFor='sub' >Subscribe : </label>
       <input id='sub' type="checkbox"></input>
       <br></br>
       <label>MySite Name</label>
       <input type="text" id='name'></input>
       
   </div>
    
  );
}

function sum(n1,n2){
  return n1+n2;
}
export default App;
