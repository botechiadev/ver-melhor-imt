import styled from "styled-components";
import bg from '../../assets/img/bg.png'

export const ContainerHero = styled.div`
  height: 100vh;
    padding: 80px auto;
    background: url(${bg});
    background-size: cover;
    background-repeat: no-repeat;
    background-color: #afcaf1;
    display: grid;
    max-width: 1fr;
    overflow: hidden;

    @media screen and (min-width: 721px){
    grid-template-columns: repeat(2, 50%);
    grid-template-rows: 100%;
    }

    @media screen and (max-width: 720px){
        grid-template-columns: 100%;
        grid-template-rows: repeat(2, 50%) ;
    }

    .shampooBox{
        display: flex;
        flex-flow: column wrap;
        height: 90%;
        padding-top: 80px;
        padding-bottom: 80px;
        object-fit: contain;
        align-items:center;
        margin-top: 80px;
    }

    .shampooBox img {
        height: 100%;
        width:80%;
object-fit: contain;
    animation-duration: 5s;

    animation-iteration-count: infinite;

    }

    @keyframes pulse {
    0% {
        transform: scaleX(1)
    }

    50% {
        transform: scale3d(1.05,1.05,1.05)
    }

    to {
        transform: scaleX(1)
    }
}

.pulse {
    animation-name: pulse
}

.textBox{
 position: relative;
 top: 30%;
text-align: center;
}


 .textBox h2{
    font-size: 2rem;
    font-family: 'Poppins', sans-serif;
    margin-bottom: 10px ;
 }

  .textBox h2 strong{
    font-size: 2rem;
    font-weight: 900;
    color: whitesmoke;
 }


 .textBox p{
    padding: 2rem;
    font-size: 1rem;
    font-weight: 500;
 }

 button{
    display: flex;
padding: 12px 26px;
align-items: center;
gap: 8px;
 }
 button:hover{
background: white;
font-weight: bolder;
 }
 .flex{
    justify-content: space-around;
 }

`