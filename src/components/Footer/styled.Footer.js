import styled from "styled-components";

export const ContainerFooter = styled.footer`
    position: fixed;
    z-index: 9999;
    left: 0;
    right: 0;
    bottom: 0;
    display: grid;
    max-width: 1fr;
    background: #afcaf1;
    height: 40px;

    ul{
        display: flex;
        flex-flow: row wrap;
        align-items: center;
        justify-content: space-around;
    }

    ul li{
        list-style-type: none
    }

    ul li:hover{
        cursor: pointer;
    }

    ul li a svg{
        color: white;
    }

    img{
        width: 70px;
        height: 40px;
    }
`