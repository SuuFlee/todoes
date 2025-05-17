import "./App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun } from "@fortawesome/free-solid-svg-icons";
import { faMoon } from "@fortawesome/free-solid-svg-icons";
import {Todos, Filter, Create} from './components'
import { useStore } from "./store/todos.js";
import { ToastContainer, toast } from 'react-toastify';

function App() {
  const {       
    setMoon,
    moon,
    newTodo,
    setNewTodo,
    removeTodo,
    handleKeyDown,
  } = useStore();
  // const countAll = todoList.length()
  


  <filteredTodos />;
  
  
  return (
    <div className="bg-[url(/img/bg-desktop-dark.jpg)] h-[300px] bg-no-repeat bg-center ">
      <div className=" text-center flex flex-col w-lg  m-auto relative top-1/3">
        <div className="flex justify-between text-white">
          <h2 className="text-white text-left text-4xl mb-10">T O D O</h2>
          <div className="text-right text-2xl">
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
          <p>5 items left</p>
          <Filter />
          <button onClick={removeTodo}>Clear Completed</button>
        </div>

        <p className="text-gray-300 text-sm p-8">
          Drag and drop to reoder list
        </p>
      </div>
    </div>
  );
}

export default App;
