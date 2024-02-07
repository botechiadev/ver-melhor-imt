import {useState} from 'react'
import CardBox1 from '../CardBox1/CardBox1'
import logoIMT from '../../assets/logoIMT.png'
import logoPrint from '../../assets/logoPrint.png'
import { ContainerPreFooter } from './styled.PreFooter'
export default function PreFooter() {


const [cardsList, setCardsList] = useState([
    {
        id: "c001",
        title: "Agradecimentos e Realização",
        icon: logoIMT
    },
    {
      id: "c001",
      title: "Semana Print",
      icon: logoPrint
  }
])


  return (
    <ContainerPreFooter>
      <ul className='div1'>
        {cardsList.map((cardItem)=>(
        <CardBox1 item={cardItem} key={cardItem.id}/>
        ))}
      </ul>
    </ContainerPreFooter>
  )
}
