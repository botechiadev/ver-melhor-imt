import styled from 'styled-components'
import bg from '../../assets/img/bg.png'
export const ContainerCardBox = styled.li`
    background: url(bg);
    border: 3px solid #070d45;
    width: 32%;
    padding: 1rem;


    @media screen and (max-width: 720px){
        width: 80%
    }
`