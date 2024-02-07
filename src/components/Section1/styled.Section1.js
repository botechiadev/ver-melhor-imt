import styled from 'styled-components'

export const ContainerSection1 = styled.section`
    display: grid;
   min-height: 100vh;
    padding: 1rem;
    max-width: 1fr;
    grid-template-columns: 100%;
    grid-template-rows: 100%;


 h2{
    padding-top: 110px;
        font-size: 3rem;
        text-align: center;
    }

    .box-2 {
        width: 100%;
        display: flex;
        flex-flow: row wrap;
        justify-content: space-around;
        align-items: center;
        align-self: flex-end;
        padding-top: 80px;
        padding-bottom: 110px;
    }



 img{
    width: 150px;
    height: 100px;
    margin: 30px auto;

        height: 80%;
        width:50%;
object-fit: contain;
    animation-duration: 5s;

    animation-iteration-count: infinite;

    }

    @keyframes pulse {
    0% {
        transform: scaleX(1)
    }

    50% {
        transform: scale3d(1.25,1.25,1.05)
    }

    to {
        transform: scaleX(1)
    }
}

.pulse {
    animation-name: pulse
}

`