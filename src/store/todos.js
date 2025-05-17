import { create } from "zustand";
import { todoList } from "../components/todo-list/todoList";
import { toast } from "react-toastify";


    
const customId = "custom-id-yes";
    
const notifyS = () =>
  toast.success("Success!", {
    position: "top-center",
    autoClose: 1000,
    hideProgressBar: false,
    closeOnClick: false,
    pauseOnHover: true,
    draggable: true,
    progress: 0,
    theme: "dark",
    toastId: customId
  });
  
const notifyW = () =>
  toast.warn("Warning! You cant add empty title", {
    position: "top-center",
    autoClose: 1000,
    hideProgressBar: false,
    closeOnClick: false,
    pauseOnHover: true,
    draggable: true,
    progress: 0,
    theme: "dark",
    toastId: customId
  });

export const useStore = create((set, get) => ({
  count: todoList,
  filter: "All",
  moon: false,
  newTodo: {
    title: "",
    completed: false,
  },
  filters: ["All", "Active", "Completed"],

  setTodo: (todo) => set((state) => ({ count: [...state.count, todo] })),
  setFilter: (filter) => set((state) => ({ filter })),
  setMoon: (moon) => set((state) => ({ moon })),
  setNewTodo: (newTodo) => set((state) => ({ newTodo })),
  filteredTodos: () => {
    return get().count.filter((count) => {
      switch (get().filter) {
        case "Active":
          return count.completed === false;
        case "Completed":
          return count.completed === true;
        default:
          return count;
      }
    });
  },
  removeTodo: () => set({ count: [] }),

  handleKeyDown: (event) => {
    if (event.key === "Enter") {
      const { newTodo } = get();
      let list = {};
      if (newTodo.title != "") {
        list = {
          title: newTodo.title,
          completed: newTodo.completed,
        };
        notifyS();
        set((state) => ({
          count: [...state.count, list],
          newTodo: { title: "", completed: false },
        }))
      } else {
        notifyW();
      }
    }
  },
}));
