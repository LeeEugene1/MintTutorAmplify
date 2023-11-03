import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { MetaMaskContextProvider } from './hooks/UseMetaMask.tsx'
import Footer from './components/Footer.tsx'
import Header from './components/Header.tsx'
import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";
import List from './pages/List.tsx'
import Chat from './pages/Chat.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
    <MetaMaskContextProvider>
        <Header/>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<App />} />
              <Route path="/list" element={<List />} />
              <Route path="/chat" element={<Chat />} />
            </Routes>
          </BrowserRouter>
        <Footer/>
    </MetaMaskContextProvider>
)
