
import { Link } from 'react-router-dom';
import {ImgContainer, 
        Banner, 
        Btn, 
        Jobs, 
        JobsContainer, 
        Content,
        Info,
        InfoWrap,
    } from './styles';

export default function Home() {
    return (
        <div>
            <ImgContainer> 
                <Banner>

                    <h1>Vagas de emprego para mulheres trans</h1>

                    <p>Encontre aqui a sua oportunidade!</p>

                    <Btn>Quero me candidatar!</Btn>
                </Banner>
            </ImgContainer>

            <Content>
                <h1>Vagas mais recentes</h1>
                <JobsContainer>
                    <Jobs>
                        <h2>Jovem Aprendiz</h2>
                        <p>Nome da empresa</p>
                        <button> <Link to="/">Saiba mais</Link></button>
                    </Jobs>
                    <Jobs>
                        <h2>Maquiadora</h2>
                        <p>Nome da empresa</p>
                        <button><Link to="/">Saiba mais</Link></button>
                    </Jobs>
                    <Jobs>
                        <h2>Promotora de Tecnologia</h2>
                        <p>Nome da empresa</p>
                        <button><Link to="/">Saiba mais</Link></button>
                    </Jobs>
                    <Jobs>
                        <h2>Estágiario</h2>
                        <p>Nome da empresa</p>
                        <button><Link to="/">Saiba mais</Link></button>
                    </Jobs>
                    <Jobs>
                        <h2>Recepcionista</h2>
                        <p>Nome da empresa</p>
                        <button><Link to="/">Saiba mais</Link></button>
                    </Jobs>
                    <Jobs>
                        <h2>Cabeleireiro</h2>
                        <p>Nome da empresa</p>
                        <button><Link to="/">Saiba mais</Link></button>
                    </Jobs>
                </JobsContainer>
            </Content>
                <Info>
                    <h1>Profissões mais buscadas</h1>
                    <InfoWrap >
                        <div>Maquiadora</div>
                        <div>Promotor(a/e) de Tecnologia</div>
                        <div>Jovem Aprendiz</div>
                        <div>Promotor(a/e) de Tecnologia</div>
                        <div>Recepcionista</div>
                        <div>Estagiário</div>                    
                    </InfoWrap>
                </Info>
            
        </div>
    );
};