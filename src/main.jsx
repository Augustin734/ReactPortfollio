import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Home_page from './jsx/Home_page.jsx'
import Record from './jsx/components/Record.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Home_page/>
    <Record RecordName={"Formations"}/>
    <Record RecordName={"Projets"}/>
    <Record RecordName={"Expériences"}/>
    <Record RecordName={"Compétences"}/>
    <Record RecordName={"Interest"}/>
  </StrictMode>,
)