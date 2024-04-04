import './App.css';
import TodoList from './components/TodoList.tsx';
import ThemeProvider from './contexts/ThemeProvider.tsx';
import Header from './components/Header.tsx';

function App() {

  return (
    <div className="App" style={{display:'flex', flexDirection:"column"}}>
      <ThemeProvider>
        <Header></Header>
        <TodoList></TodoList>
      </ThemeProvider>
    </div>
  );
}

export default App;
