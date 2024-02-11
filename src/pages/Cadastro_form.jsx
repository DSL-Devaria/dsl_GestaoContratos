import { useState } from 'react';
import Input from '../components/form/input';
import './style_form.css';
import Button from '../components/Button';
import '../styles/globals.css';
import ProfileSection from '../components/ProfileSection/ProfileSection';
import { Link } from 'react-router-dom';

function Cadastro() {
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [confirmarSenha, setConfirmarSenha] = useState('');
    const [link, setLink] = useState('');
    const [errors, setErrors] = useState({
        nome: '',
        email: '',
        senha: '',
        confirmarSenha: '',
        link: '',
    });

    function aoClicar() {
        const newErrors = {};

        if (!nome || nome.length < 2) {
            newErrors.nome = "Por favor, insira um nome válido.";
        }

        const emailRegex = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (!email.match(emailRegex)) {
            newErrors.email = "Por favor, insira um e-mail válido.";
        }

        if (!senha || senha.length < 6) {
            newErrors.senha = "A senha deve ter pelo menos 6 caracteres.";
        }

        if (senha !== confirmarSenha) {
            newErrors.confirmarSenha = "As senhas não coincidem.";
        }

        if (!link) {
            newErrors.link = "Por favor, insira um link.";
        }

        setErrors(newErrors);

        // Se não houver erros, você pode prosseguir com o envio do formulário
        if (Object.keys(newErrors).length === 0) {
            // Aqui você pode chamar uma função para enviar os dados do formulário
            console.log("Formulário válido. Enviar dados...");
        } else {
            console.log("Formulário inválido. Corrija os erros.");
        }


    }

    /*          {Object.values(errors).some(error => error) && (

                        <div style={{ color: '#f64348', marginBottom: ' 0.5rem' }}>
                            {errors.nome && errors.nome}
                            {errors.email && errors.email}
                            {errors.senha && errors.senha}
                            {errors.confirmarSenha && errors.confirmarSenha}
                            {errors.link && errors.link}
                        </div>
                    )}*/

    function primeiraMensagemErro() {
        for (let key in errors) {
            if (errors[key]) {
                return errors[key];
            }
        }
        return null; // Retorna null se não houver erros
    }

    return (
        <>

            <div className='container'>
                <div className={'style_form'}>
                {primeiraMensagemErro() && (
                        <div style={{ color: '#f64348', marginBottom: '0.5rem' }}>
                            {primeiraMensagemErro()}
                        </div>
                    )}
                    <ProfileSection>
                        <h3>Cadastro</h3>
                    </ProfileSection>




                    <Input
                        type="text"
                        text="Nome Completo"
                        name="name"
                        placeholder="Insira seu nome."
                        handleOnChange={(e) => setNome(e.target.value)}
                        value={nome}
                        errorMessage={errors.nome} // Adicionei errorMessage para mostrar os erros



                    />
                    <Input
                        type="email"
                        text="E-mail"
                        name="email"
                        placeholder="Insira seu melhor E-mail."
                        handleOnChange={(e) => setEmail(e.target.value)}
                        value={email}
                        errorMessage={errors.email} // Adicionei errorMessage para mostrar os erros
                    />
                    <Input
                        type="password"
                        text="Senha"
                        name="senha"
                        placeholder="Criar uma nova senha"
                        handleOnChange={(e) => setSenha(e.target.value)}
                        value={senha}
                        errorMessage={errors.senha} // Adicionei errorMessage para mostrar os erros
                    />
                    <Input
                        type="password"
                        text="Confirmar Senha"
                        name="confirmar-senha"
                        placeholder="Confirme sua senha"
                        handleOnChange={(e) => setConfirmarSenha(e.target.value)}
                        value={confirmarSenha}
                        errorMessage={errors.confirmarSenha} // Adicionei errorMessage para mostrar os erros
                    />
                    <Input
                        type="text"
                        text="Link Autentique"
                        name="link-autentique"
                        placeholder="Link Autentique:"
                        handleOnChange={(e) => setLink(e.target.value)}
                        value={link}
                        errorMessage={errors.link} // Adicionei errorMessage para mostrar os erros
                    />
           
                    <Button onClick={aoClicar}>Cadastrar</Button>
                    <p><Link to="/" className='link'>Já registrado? Conecte-se</Link></p>
                </div>
            </div>
        </>
    )
}

export default Cadastro;
