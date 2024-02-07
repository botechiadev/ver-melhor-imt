import styled from 'styled-components'
import Navbar from './components/Navbar'
import GlobalStyled from './theme/globalStyled'
import Router from './router/Router'
import Footer from './components/Footer'
const HeaderComponent = styled.header``

function App() {

  return (
    <>
    <GlobalStyled/>
    <Router/>
    <Footer/>
    </>
  )
}

export default App
