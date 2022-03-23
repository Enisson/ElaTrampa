import styled from 'styled-components';

export const AboutUsContainer = styled.div `
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0 auto;
    width: 1200px;
    color: grey;

    h1 {
        color: #5BCEFA;
    }
`

export const About = styled.div `
    display: flex;
    flex-direction: column;
    align-items: center; 
`

export const ImgContainer = styled.div `
    width: 380px;

    img {
        width: 100%;
        border-radius: 5px;
    }

`

export const StaffContainer = styled.ul `
    display: flex;
    flex-wrap: wrap;
`

export const Staff = styled.li `
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    width: 400px;
    margin: 3rem;
    img {
    width: 100px;
    border-radius: 5rem;
}
`