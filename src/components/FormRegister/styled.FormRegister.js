import styled from "styled-components";

export const ContainerFormRegister = styled.div`
    position: fixed;
    top: 20%;
    bottom: 20%;
    left: 20%;
    right: 20%;
    background: white !important;
    border-radius: 22px;
    padding: 1rem;
    text-align: center;
        font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
    color: #656565 !important;
    background-color: #fff;
    background-clip: padding-box;
    border: 3px solid #f4f8f1;



    @media screen and (max-width: 720px){
        position: fixed;
        top: 20%;
        bottom: 10%;
        left: 5%;
        right: 5%;
    }

input{
    height: 40px;
        border: 3px solid #f4f8f1;
        width: 80%;
        border-radius: 22px;
        margin: 10px auto;
}
`
export const ContainerBtn = styled.div`


padding-top: 50px;
display: flex;
flex-flow: row wrap;

button{
    display: block;
    width: 90px;
    height: 45px;
    margin: 30px auto;
    padding: 1rem 15px;
    border: 2px solid gray;
    border-radius: 22px;
    font-size: 10px;
    background-color: whitesmoke;
}


button:hover{
    background-color: gray;
    color: white;
}

button:focus{
    background-color: black;
    color: white;
}


`

