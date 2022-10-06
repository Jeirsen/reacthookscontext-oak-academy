import Navbar from './components/NavBar';
import TodoList from './components/TodoList';
import AuthContextProvider from './context/AuthContext';
import ThemeContextProvider from './context/ThemeContext';
import TodoListContextProvided from './context/TodoListContext';

function App() {
  return (
    <div className="App">
      <div className="ui raised very padded text container segment">
        <ThemeContextProvider>
          <TodoListContextProvided>
            <AuthContextProvider>
              <Navbar />
              <TodoList />
            </AuthContextProvider>
          </TodoListContextProvided>
        </ThemeContextProvider>
      </div>
    </div>
  );
}

export default App;
