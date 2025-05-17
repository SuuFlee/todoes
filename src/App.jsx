import "./App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun } from "@fortawesome/free-solid-svg-icons";
import { faMoon } from "@fortawesome/free-solid-svg-icons";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import {Todos, Filter, Create} from './components'
import { useStore } from "./store/todos.js";
import { ToastContainer, toast } from 'react-toastify';
import emailjs from 'emailjs-com';

const formatTodoList = (todos) => {
  return todos.map(todo => {
    return `${todo.completed ? '✅' : '❌'} ${todo.title}`;
  }).join('\n');
};




function App() {
  const SERVICE_ID = import.meta.env.VITE_SERVICE_ID
  const TEMPLATE_ID = import.meta.env.VITE_TEMPLATE_ID
  const PUBLIC_KEY = import.meta.env.VITE_PUBLIC_KEY


  const handleOnSubmit = (e) => {
        console.log(count)
        e.preventDefault();
        emailjs.send(SERVICE_ID, TEMPLATE_ID, {message: formatTodoList(count)}, PUBLIC_KEY)
          .then((result) => {
            alert('Message Sent Successfully')
          }, (error) => {
            console.log(error.text);
            alert('Something went wrong!')
          });
        
      };
      

      
  const {     
    count, 
    setMoon,
    moon,
    newTodo,
    setNewTodo,
    removeTodo,
    handleKeyDown,
  } = useStore();

  const countAll = count.length; 


  <filteredTodos />;
  
  
  return (
    <div className="bg-[url(/img/bg-desktop-dark.jpg)] h-[300px] bg-no-repeat bg-center ">
      <div className=" text-center flex flex-col w-lg  m-auto relative top-1/3">
        <div className="flex text-white reletive"> 
          <h2 className="text-white text-left text-4xl mb-10">T O D O</h2>
          <button className="h-5 w-5 absolute right-10 top-1 cursor-pointer" onClick={handleOnSubmit}><FontAwesomeIcon icon={faPlus}/></button>
          <div className="text-right text-2xl absolute right-0">
            <FontAwesomeIcon
              icon={moon ? faSun : faMoon}
              onClick={() => setMoon(!moon)}
              className="cursor-pointer"
            />
          </div>
        </div>
        <div className="h-13 w-full bg-[#353858] rounded-lg m-auto flex mb-[30px]">
          <Create
            newTodo={newTodo}
            setNewTodo={setNewTodo}
            handleKeyDown={handleKeyDown}
          />
           <div className="grid place-items-center h-dvh bg-zinc-900/15">
            <ToastContainer
              position="top-right"
              autoClose={2000}
              limit={1}
              hideProgressBar
              newestOnTop={false}
              closeOnClick={false}
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
              theme="dark"
               />
          </div> 

        </div>
        <Todos />

        <div className="flex justify-center gap-14 rounded-b-lg bg-[#353858] text-gray-300 p-1.5 text-sm">
          <p>{countAll} items left</p>
          <Filter />
          <button onClick={removeTodo}>Clear Completed</button>
        </div>

      </div>
    </div>
  );
}

export default App;
