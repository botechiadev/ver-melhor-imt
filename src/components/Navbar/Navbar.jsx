
import {handleHome, handleLogin, handleProducts , handleRegister} from './../../router/coordinator'
import { useNavigate } from 'react-router-dom'
import { ContainerNavbar } from './styled.Navbar'
export default function Navbar() {

  const navigate = useNavigate()
  return (
    <ContainerNavbar>
 <nav className="flex items-center justify-around p-4 bg-blue-300">
    <div>
      <h1 className="font-semibold text-white text-md">
        VER<strong className='font-extrabold'>MELHOR</strong>
      </h1>
    </div>
    <button onClick={()=>{handleHome(navigate)}} className='tracking-wide text-gray-900 hover:text-lime-100'>HOME</button>
    <button onClick={()=>{handleProducts(navigate)}} className='tracking-wide text-gray-900 hover:text-lime-100'>O PROJETO</button>
    <button onClick={()=>{handleRegister(navigate)}} className='tracking-wide text-gray-900 hover:text-lime-100'>CADASTRO VOLUNTARIOS</button>
  </nav>
  </ContainerNavbar>
  )
}
