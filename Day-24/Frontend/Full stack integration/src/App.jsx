import './app.css';
import Form from './components/Form';
import UserManagement from './components/UserManagement';
const App = () => {
  const token = localStorage.getItem('token');
  return (
    <>
    {token ? <UserManagement/> : <Form/>}
    </>
  )
}

export default App
