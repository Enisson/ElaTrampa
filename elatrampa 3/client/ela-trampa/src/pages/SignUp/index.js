import { SignUpContainer,
        Form,
} from "./signup";

export default function SignUp() {
    return (
        <SignUpContainer>
            <h1>Cadastre-se e veja as vagas que estão esperando por você!</h1>

            <Form>
                <label>Nome</label>
                <input type="text"/>
                <label>CPF</label>
                <input type="text"/>
                <label>Email</label>
                <input type="email"/>
                <label>Telefone</label>
                <input type="number"/>
                <label>Conte-nos um pouco sobre você!</label>
                <textarea cols='30' rows='6' maxlength='240'></textarea>
                
                <label for="vagas">Selecione a vaga que você quer!</label>
                <select id="vagas">
                <option selected>Escolha sua vaga</option>
                <option value="Jovem Aprendiz">Jovem Aprendiz</option>
                <option value="Maquiadora">Maquiadora</option>
                <option value="Costureira">Costureira</option>
                <option value="Cabeleireira">Cabeleireira</option>
                </select>

                <button type="submit">Cadastre-se</button>
            </Form>
        </SignUpContainer>
    );
}