import Home from './pages/Home'
import About from './pages/About'
import Technologies from './pages/Technologies'
import Products from "./pages/Products";
import Research from "./pages/Research";

function App() {
  const path = window.location.pathname

  if (path === '/about') {
    return <About />
  }

  if (path === '/technologies') {
    return <Technologies />
  }

  if (path === '/products') {
    return <Products />
  }

  if (path === '/research') {
    return <Research />
  }

  return <Home />
}

export default App