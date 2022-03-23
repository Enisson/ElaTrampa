import bg from '../../assets/01.jpg';
import monara from '../../assets/staff/monara.jpeg';
import joao from '../../assets/staff/Joao.jpeg';
import enisson from '../../assets/staff/Enisson.jpeg';
import carine from '../../assets/staff/carine.jpg';
import aline from '../../assets/staff/Aline.jpeg';
import adriano from '../../assets/staff/adriano.jpg';

import {AboutUsContainer,
        About,
        ImgContainer,
        StaffContainer,
        Staff,
} from './aboutus';


export default function AboutUs() {
    return (
        <AboutUsContainer>
            <About>
                <h1>Quem somos</h1>
                <p>ElaTrampa! é um projeto do Squad53 focado na empregabilidade de mulheres trans que sofrem com a falta de oportunidades no mercado de trabalho.
                Apesar de já existir locais que incentivem ao emprego não há um encaminhamento para quem entra no mercado de trabalho, com cursos de qualificação e também não é apresentada uma capacitação para quem deseja emprender, sendo assim, surgiu a ideia do projeto ElaTrampa!.</p>

                <ImgContainer>
                    <img src={bg} alt='pessoas protestando'/>
                </ImgContainer>

                <p>
                A Ela Trampa é uma startup de impacto social que busca contribuir com a diversidade e combater a desigualdade inserindo mulheres trans do estado de São Paulo, no mercado de trabalho. Nós buscamos atender a todos os níveis de escolaridade, aqui você encontra vagas com perfil para jovem aprendiz, mulheres com nível médio incompleto e muito mais. Todos os dias conectamos mulheres trans a novas oportunidades de emprego
                </p>
            </About>

                <h1>Equipe</h1>
                
            <StaffContainer>
                <Staff>
                    <img src={monara} alt="Monara" />
                    <h2>Monara</h2>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quia, earum! Et enim quia pariatur dignissimos facilis incidunt animi amet totam laborum! Temporibus illum placeat laboriosam maxime officia eos. Aliquid, fugit!</p>
                </Staff>
                <Staff>
                    <img src={joao} alt="Monara" />
                    <h2>João</h2>
                    <p>Estudante de desenvolvimento web e entusiasta do empreendedorismo social. Quer me chamar pra tomar um café ou trocar uma idéia? joaomgsa@gmail.com</p>
                </Staff>
                <Staff>
                    <img src={enisson} alt="Monara" />
                    <h2>Enisson Lemos</h2>
                    <p>Estudante de desenvolvimento fullstack pela Recode, além de ser formado em design gráfico na Anhembi Morumbi.</p>
                </Staff>
                <Staff>
                    <img src={carine} alt="Monara" />
                    <h2>Carine</h2>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quia, earum! Et enim quia pariatur dignissimos facilis incidunt animi amet totam laborum! Temporibus illum placeat laboriosam maxime officia eos. Aliquid, fugit!</p>
                </Staff>
                <Staff>
                    <img src={aline} alt="Monara" />
                    <h2>Aline Fernandes</h2>
                    <p>Formada em administração de empresa e aluna de desenvolvimento full stack da Recode Pro</p>
                </Staff>
                <Staff>
                    <img src={adriano} alt="Monara" />
                    <h2>Adriano Soares</h2>
                    <p>Email: adrsoares@gmail.com
                        LinkedIn : https://www.linkedin.com/in/adriano-soares-49620a136
                        Desenvolvedor Full-Stack Jr - Recode Pro/Estudante de Engenharia Civil - Uerj Membro do Squad 53.</p>
                </Staff>
            </StaffContainer>
        </AboutUsContainer>
    );
}