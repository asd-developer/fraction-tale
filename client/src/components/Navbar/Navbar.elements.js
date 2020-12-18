import styled from 'styled-components'

export const StickyNavbar = styled.nav`
    display: flex;
    flex-direction: row;
    background-color:#77ad6f; //#ACC15E;
    width: 100%;
    height: 4rem;
    align-items: center;
    justify-content: space-between;
`;

export const FlexStart = styled.div`
    justify-content: flex-start;
`;

export const FlexEnd = styled.div`
    justify-content: flex-end;
`;

export const PageTitle = styled.h2`
    font-family: 'Berkshire Swash', cursive;
    font-weight: 50;
    color: white;
    font-size: 2em;
    padding-left: 2rem;
`;

export const Login = styled.input`
    color: black;
    font-size: 1rem;
    font-weight: bold;
    border: none;
    border-radius: 0.3rem;
    padding: 0.5rem 0.5rem 0.5rem 1rem;
    margin: 1rem;
    &::placeholder{
        font-weight: bold;
    }
    &:focus{
        outline: none;
    }
`;

export const Password = styled.input`
    color: black;
    font-size: 1rem;
    font-weight: bold;
    border: none;
    border-radius: 0.3rem;
    padding: 0.5rem 0.5rem 0.5rem 1rem;
    margin: 1rem;
    &::placeholder{
        font-weight: bold;
    }
    &:focus{
        outline: none;
    }
`;

export const LoginBt = styled.button`
    background-color: #f5e000;
    border:none;
    border-radius:2rem;
    color: black;
    padding: 0.5rem 2rem;
    margin: 0 0.5rem 0 0;
    &:focus{
        outline: none;
        background-color: #ffd52b;
    }
`;

export const RegisterBt = styled.button`
    background-color: #FC9D69;
    border:none;
    border-radius:2rem;
    color: black;
    padding: 0.5rem 2rem;
    margin: 0 2rem 0 0;
    &:focus{
        outline: none;
        background-color: #ffd52b;
    }
`;



