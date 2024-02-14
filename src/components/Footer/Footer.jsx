import {ContainerFooter} from './styled.Footer'
import { ImGithub } from "react-icons/im";
import { FaLinkedin } from "react-icons/fa";
import { FaRegEnvelope } from "react-icons/fa";
import logoIMT from './../../assets/logoIMT.png'
import logoPrint from './../../assets/logoPrint.png'
import logoVerMelhor from './../../assets/logoVerMelhor.svg'
export default function Footer() {

  return (
    <ContainerFooter>
      <ul>
        <li>
          <a href="https://maua.br" target="_blank">
           <img src={logoIMT} alt="logo IMT"/>
          </a>
        </li>
        <li>
          <a href="https://maua.br/img/upload/recepcao-aos-calouros-1706292486.jpg?_gl=1*rxkzho*_ga*NDExMDg4OTk5LjE3MDY0MDUwOTE.*_ga_Q0DH4GG89H*MTcwNzI4MDU5My41LjAuMTcwNzI4MDU5My42MC4wLjA." target="_blank">
          <img src={logoPrint} alt="logo IMT Semana Print"/>
          </a>
        </li>
        <li>
        <a href="/" target="_blank">
           <img src={logoVerMelhor} alt="logo Ver Melhor"/>
          </a>
        </li>
      </ul>
    </ContainerFooter>
  )
}
