import { ContainerCardBox } from "./styled.CardBox"


const CardBox1 = ({item}) => {
  
  const {id, title, icon, imageUrl, description, price, totalAvaliable} = item;
    return (
    <ContainerCardBox>
      <h2 className="text-gray-300">{title}</h2>
      <img src={icon} alt="icon da img"/>
    </ContainerCardBox>
  )
}

export default CardBox1
