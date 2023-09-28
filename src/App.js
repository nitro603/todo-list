import TodoForm from "./Components/TodoForm";
import TodoList from "./Components/TodoList";

function App() {
  return (
    <div className="container mx-auto bg-gray-200 rounded-xl shadow border p-8 m-10">
      <TodoList/>
    </div>
  );
}
export default App;