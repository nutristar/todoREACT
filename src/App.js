import logo from './static/logo.svg';
import './static/App.css';
import TodoItem from './TodoItem';
import todosData from './todosData';


function App() {
  const nashListOfTODO=todosData.map(fordst=>{return(<TodoItem id={fordst.id} text={fordst.text} completed= {fordst.completed} />)})
  return (
    <div className="App">
      {nashListOfTODO}
      
    </div>
  );
}

export default App;
