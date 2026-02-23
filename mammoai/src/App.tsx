import { Route, Routes } from 'react-router-dom'
import { ListaMamografiasScreen } from './screens/ListaMamografiasScreen'
import { LoginScreen } from './screens/LoginScreen'
import { db } from './database/db'

function App() {

  console.log('Iniciando aplicación...', db);
  return (
    <div className="bg-white w-screen h-screen overflow-x-hidden overflow-y-hidden ">
      <Routes>
      <Route path="/login" element={<LoginScreen />} />
      <Route path="/mamografias" element={<ListaMamografiasScreen />} />      
    </Routes>
    </div>
  )
}

export default App

