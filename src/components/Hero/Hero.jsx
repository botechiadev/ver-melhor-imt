import {useNavigate} from 'react-router-dom'
import { ContainerHero } from './styled.Hero'
import logoVerMelhor from './../../assets/logoVerMelhor.svg'
import {handleRegister, handleProducts} from './../../router/coordinator'
export default function Hero() {
  const navigate = useNavigate()
  return (
    <ContainerHero>
      <div className="p-4 textBox">
        <span className="text-lg text-white font-weight-300">Uma ideia de visão para nossas crianças!</span>
        <h2 className="text-gray-900 text-xxl">VER<strong className="font-weight-900"> Melhor!</strong></h2>
        <p>Somos alunos de engenharia, design e sistemas do <strong>Instituto de Tecnologia Mauá</strong> e buscamos promover a melhora da saude e bem estar visual a través desse projeto para alunos de escolas e comunidades carentes até 15 anos da região do ABC PAULISTA.
        </p>
        <div className="flex">
            <button className="bg-green-400 rounded-xl"
            onClick={()=>{handleRegister(navigate)}}
            >Cadastro Único</button>
            <button className="bg-green-400 rounded-xl"
              onClick={()=>{handleProducts(navigate)}}
            >Formas de Contribuir</button>
         </div>   
      </div>
      <div className="shampooBox">
        <img className="pulse" src={logoVerMelhor} alt="img do shampoo da linha herbal"/>
      </div>
    </ContainerHero>
  )
}
