import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { Navigation,Footerbar,SectionOneDescription } from './Components/Components'



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Navigation/>
    <SectionOneDescription/>
    <Footerbar/>
  </StrictMode>,
)
