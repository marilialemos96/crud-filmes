import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from './componentes/Home'
import Create from './componentes/Create'
import Read from './componentes/Read'
import Update from './componentes/Update'
import Delete from './componentes/Delete'

function App() {

  return (

    <BrowserRouter>

      <Routes>

        <Route path='/' element={<Home />} />

        <Route path='/create' element={<Create />} />

        <Route path='/read/:id' element={<Read />} />

        <Route path='/update' element={<Update />} />

        <Route path='/delete' element={<Delete />} />

      </Routes>

    </BrowserRouter>

  )
}

export default App