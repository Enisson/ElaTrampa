import { SignUpContainer,
    Form,
} from "./contact";

export default function Contact() {
return (
    <SignUpContainer>
        <h1>Entre em contato conosco</h1>
        <h2>Preencha suas informações abaixo que em breve entraremos em contato</h2>

        <Form>
            <label>Qual o seu nome?</label>
            <input type="text"/>
            <label>Qual o seu email?</label>
            <input type="text"/>
            <label>Telefone?</label>
            <input type="email"/>
            <label>Deixe aqui a sua mensagem!</label>
            <textarea cols='30' rows='6' maxlength='240'></textarea>

            <button type="submit">Cadastre-se</button>
        </Form>
    </SignUpContainer>
);
}