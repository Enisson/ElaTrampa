import styled from 'styled-components';

export const SignUpContainer = styled.div `
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 1200px;
    margin: 0 auto;
    color: grey;
    
    h1 {
        color: #5BCEFA;
    }

    h2 {
        font-size: 1rem;
        font-weight: 400;
    }
`

export const Form = styled.form `
    display: flex;
    flex-direction: column;
    
    label {
        font-weight: bold;
        margin-top: 1rem;
    }

    input {
        height: 25px;
        border: 2px solid #5BCEFA;
        border-radius: 3px;
        outline: none;
    }

    textarea {
        border: 2px solid #5BCEFA;
        border-radius: 3px;
        outline: none;
    }

    button {
        background-color: #F5A9B8;
        cursor: pointer;
        border: none;
        padding: 10px;
        font-weight: bold;
        color: white;
        font-size: 1rem;
        border-radius: 3px;
        margin-top: 2rem;
        margin-bottom: 15rem;


        &:hover {
            background-color: #D95273;
        }
    }
    
`