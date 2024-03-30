import React from 'react'
import ReactDOM from 'react-dom/client'
import { Home } from './pages/Home'
import { Bio } from './componant/Bio'
import { Skills } from './componant/Skills'
import { Project } from './componant/Project'
import { Contact } from './componant/Contact'
import './Global.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Home />
    <Bio/>
    <Skills/>
    <Project/>
    <Contact/>
  </React.StrictMode>,
)
