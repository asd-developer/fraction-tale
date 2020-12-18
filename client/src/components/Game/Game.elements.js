import styled from 'styled-components'

export const StoryBackground = styled.div`
    display: block;
    margin: 1rem auto;
    background-color: #f2efe4;
    border-radius: 2rem;
    width: 70vw;
    height: auto;
    padding-bottom: 5rem;
`

export const Tittle = styled.h1`
    margin: 1rem auto;
    color: #1c1c1c;
    font-size: 2rem;
`

export const Tale = styled.h1`
    color: #141414;
    font-family: 'Itim';
    font-size: 1.3rem;
    text-align: left;
    padding: 3rem;
`

export const EnterQueue = styled.button`
    font-size: 1rem;
    font-weight: bold;
    border-radius: 2rem;
    background-color: green;
    border:none;
    border-radius:2rem;
    color: white;
    padding: 1rem 2rem 1rem 2rem;
    &:focus{
        outline: none;
        background-color: #4a7801;
    }
`

export const WriteFraction = styled.textarea`
    display: block;
    font-size: 1.5rem;
    font-weight: bold;
    margin: 0.5rem auto;
    border-radius: 0.5rem;
    width: 20rem;
    height: 5rem;
    resize: none;
`

export const SubmitFractionBT = styled.button`
    font-size: 1rem;
    font-weight: bold;
    border-radius: 2rem;
    background-color: #3c44b5;
    border:none;
    border-radius:2rem;
    color: white;
    padding: 1rem 2rem 1rem 2rem;
    &:focus{
        outline: none;
        background-color: #4e54ad;
    }
`