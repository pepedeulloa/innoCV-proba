import './App.css';
import TodoList from './components/TodoList.tsx';
import ThemeProvider from './contexts/ThemeProvider.tsx';
import Header from './components/Header.tsx';
import RegistrationForm from './components/RegistrationForm.tsx';

function App() {

  return (
      <ThemeProvider>
        <div className="App" style={{display:'flex', flexDirection:"column"}}>
          <Header></Header>
          <TodoList></TodoList>
          <RegistrationForm/>
        </div>
      </ThemeProvider>
  );
}

export default App;
