import styled from "styled-components";
export const ContainerPreFooter = styled.section`
    display: grid;
    grid-template-rows: repeat(1, 1fr);
    max-width: 1fr;
    min-height: 100vh;


    .div1{
        display: flex; 
        flex-flow: row wrap;
        justify-content: space-around;
        align-items: center;
        padding: 1rem;
        text-align: center;
        padding: 1rem;
    }


    img{
        width: 180px;
        height: 180px;
        margin: 30px auto;
    }

    .div2{
        display: flex; 
        flex-flow: row wrap;
        justify-content: space-around;
        align-items: center;
        padding: 1rem;
    }
`