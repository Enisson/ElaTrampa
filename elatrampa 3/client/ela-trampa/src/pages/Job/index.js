import { Link } from "react-router-dom";
import { JobContainer, Jobs } from "./job";

export default function Job() {
    return (
        <JobContainer>
            <h1>Encontre aqui a sua vaga</h1>

            <Jobs>
                <h2>Jovem Aprendiz</h2>
                <h3>Nome da Empresa aqui</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab porro eos magnam soluta quos laudantium odit ipsa, dignissimos qui iusto doloremque culpa earum quaerat voluptatem animi laborum modi quis fugit? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo enim officiis incidunt inventore! A, temporibus. Ea, animi laborum quae deleniti, quaerat dignissimos aliquid, rem assumenda quo sequi voluptatibus ipsam modi!</p>

                
                <Link to="/signup">Quero me candidatar</Link>
            </Jobs>
            <Jobs>
                <h2>Maquiadora</h2>
                <h3>Nome da Empresa aqui</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab porro eos magnam soluta quos laudantium odit ipsa, dignissimos qui iusto doloremque culpa earum quaerat voluptatem animi laborum modi quis fugit? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo enim officiis incidunt inventore! A, temporibus. Ea, animi laborum quae deleniti, quaerat dignissimos aliquid, rem assumenda quo sequi voluptatibus ipsam modi!</p>

                
                <Link to="/signup">Quero me candidatar</Link>
            </Jobs>
            <Jobs>
                <h2>Costureira</h2>
                <h3>Nome da Empresa aqui</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab porro eos magnam soluta quos laudantium odit ipsa, dignissimos qui iusto doloremque culpa earum quaerat voluptatem animi laborum modi quis fugit? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo enim officiis incidunt inventore! A, temporibus. Ea, animi laborum quae deleniti, quaerat dignissimos aliquid, rem assumenda quo sequi voluptatibus ipsam modi!</p>

                
                <Link to="/signup">Quero me candidatar</Link>
            </Jobs>
            <Jobs>
                <h2>Cabeleireira</h2>
                <h3>Nome da Empresa aqui</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab porro eos magnam soluta quos laudantium odit ipsa, dignissimos qui iusto doloremque culpa earum quaerat voluptatem animi laborum modi quis fugit? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo enim officiis incidunt inventore! A, temporibus. Ea, animi laborum quae deleniti, quaerat dignissimos aliquid, rem assumenda quo sequi voluptatibus ipsam modi!</p>

                
                <Link to="/signup">Quero me candidatar</Link>
            </Jobs>
        </JobContainer>
    );
}