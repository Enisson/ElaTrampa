import styled from 'styled-components';

export const JobContainer = styled.div `
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    width: 1200px;
    margin: 0 auto;
    color: grey;

    h1 {
        color: #5BCEFA;
    }
`

export const Jobs = styled.div `
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 685px;
    text-align: left;
    border: 3px solid #5BCEFA;
    padding: 25px;
    margin: .5rem 0;

    h2 {
        color: #5BCEFA;
        margin: 0;
    }

    h3 {
        margin-top: 0;
        font-size: 1rem;
    }

    p {
        margin-top: 0;
    }

    a {
        background-color: #F5A9B8;
        border: none;
        border-radius: 3px;
        padding: 10px;
        color: white;
        font-weight: bold;
        font-size: 1rem;

        &:hover {
            background-color: #D95273;
        }
    }
`