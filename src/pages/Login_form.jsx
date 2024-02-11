import React, { useState } from 'react'
import Input from '../components/form/input'
import Button from '../components/Button'
import ProfileSection from '../components/ProfileSection/ProfileSection'
import { Link } from 'react-router-dom'

function Login() {
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [errors, setErrors] = useState({
        email: '',
        senha: ''
    });

    function validarEmail(email) {
        const emailRegex = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return emailRegex.test(email)
    }

    function aoClicar() {
        const newErrors = {};

        if (!email || !validarEmail(email)) {
            newErrors.email = "Por favor, insira um e-mail válido."
        }

        if (!senha || senha.length < 6) {
            newErrors.senha = "A senha deve ter pelo menos 6 caracteres."
        }

        setErrors(newErrors);

        if (Object.keys(newErrors).length === 0) {
            console.log("E-mail:", email);
            console.log("Senha:", senha);
        } else {
            console.log("Por favor, corrija os erros antes de prosseguir.")
        }
    }

    function primeiraMensagemErro() {
        for (let key in errors) {
            if (errors[key]) {
                return errors[key];
            }
        }
        return null; // Retorna null se não houver erros
    }

    return (
        <div className='container'>
            <div className='style_form'>
            {primeiraMensagemErro() && (
                        <div style={{ color: '#f64348', marginBottom: '0.5rem' }}>
                            {primeiraMensagemErro()}
                        </div>
                    )}
                <ProfileSection>
                    <h3>Login</h3>
                </ProfileSection>
                <Input
                    type="email"
                    text="E-mail"
                    name="email"
                    placeholder="E-mail"
                    handleOnChange={(e) => setEmail(e.target.value)}
                    value={email}
                    errorMessage={errors.email}
                />
                <Input
                    type="password"
                    text="Senha"
                    name="senha"
                    placeholder="Senha"
                    handleOnChange={(e) => setSenha(e.target.value)}
                    value={senha}
                    errorMessage={errors.senha}
                />
                <Button onClick={aoClicar}>Login</Button>
                <p>
                    <Link to="/Cadastro" className='link'>Não tem cadastro? Cadastre-se</Link>
                </p>
            </div>
        </div>
    );
}

export default Login;
