import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { MetaMaskContextProvider } from './hooks/UseMetaMask.tsx'
import Footer from './components/Footer.tsx'
import Header from './components/Header.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <MetaMaskContextProvider>
    <Header/>
        <App />
    <Footer/>
  </MetaMaskContextProvider>
)
