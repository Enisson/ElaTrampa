import { Link } from "react-router-dom";

import { FooterContainer } from "./footer";

export default function Footer () {
    return (
        <FooterContainer>
            <h1><Link to="/">ElaTrampa</Link></h1>
            <p>Projeto desenvolvido pelo o squad53</p>
        </FooterContainer>
    );
}