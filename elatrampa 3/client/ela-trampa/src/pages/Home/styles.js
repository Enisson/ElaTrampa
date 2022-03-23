import styled from "styled-components"

export const ImgContainer = styled.div `
    position: relative;
    background: linear-gradient(rgba(11, 11, 158, 0.2),rgba(11, 11, 158, 0.2)100%), url(https://cdn.discordapp.com/attachments/886767522152611910/928673807282106378/banner.jpeg);
    height: 21rem;
    background-size: cover;
    background-position: bottom;
    background-attachment: fixed;
`

export const Banner = styled.div `
    width: 1200px;
    height: 100%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;  

    h1 {
        color: white;
        font-size: 1.56rem;
        height: 10rem;
    }

    p {
        color: white;
    }  
`

export const Btn = styled.button `

    background-color: #F5A9B8; 
    border: none;
    padding: 10px;
    color: white;
    border-radius: 3px;
    font-weight: bold;
    font-size: 1rem;
    width: 217px;
    cursor: pointer;
    text-align: center;

    &:hover {
        background-color: #D95273;
    }
`

export const Content = styled.div `
    color: #5BCEFA;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 1200px;
    margin: 0 auto;
`

export const JobsContainer = styled.div `
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-wrap: wrap;
    width: 1200px;
    margin: 0 auto;
`

export const Jobs = styled.div `
    border: 2px solid #5BCEFA;
    width: 300px;
    text-align: center;
    padding: 15px;
    margin: 20px;

    h2 {
        color: #5BCEFA;
        margin-top: 0;
    }

    p {
        color: grey;
    }

    button {
        background-color: #F5A9B8;
        border: none;
        color: white;
        padding: 10px;
        width: 150px;
        border-radius: 3px;
        font-weight: bold;
        font-size: 1rem;

        &:hover {
            background-color: #D95273;
        }
    }
`

export const Info = styled.div `
    text-align: center;
    color: white;
    background-color: #F5A9B8;
    height: 200px;
    width: 100%;
    padding-top: 15px;
`

export const InfoWrap = styled.div `
    display: flex;
    color: #5BCEFA;
    width: 1200px;
    flex-wrap: wrap;
    margin: 0 auto;

    div {
        background-color: white;
        height: 20px;
        text-align: center;
        margin: 15px;
        padding: 10px;
        border-radius: 3px;
    }
`