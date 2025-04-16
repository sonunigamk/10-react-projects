import { useState } from 'react'
import NavHeader from './components/NavHeader'
import ContactPage from './components/ContactPage'
function App() {

  return (
    <div className='min-h-screen overflow-auto'>
      <NavHeader />
      <ContactPage />
    </div>
  )
}

export default App
