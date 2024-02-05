import { useState } from 'react'
import Input from '../components/form/input'
import './style_form.css'
import Button from '../components/Button'
import '../styles/globals.css'
import ProfileSection from '../components/ProfileSection/ProfileSection'
import { Link } from 'react-router-dom'

function Login() {

    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')

    function aoClicar() {
        console.log(email)
        console.log(senha)
    }

    return (
        <>
            <div className='container'>
                <div className={'style_form'}>
                    <ProfileSection>
                        <h3>Login</h3>
                    </ProfileSection>
                    <Input type="E-mail" text="E-mail" name="email" placeholder="E-mail" handleOnChange={(e) => { setEmail(e.target.value) }} value={email} />
                    <Input type="password" text="Senha" name="senha" placeholder="Senha" handleOnChange={(e) => { setSenha(e.target.value) }} value={senha} />
                    <Button onClick={aoClicar}>Login</Button>
                    <p>
                        <Link to="/Cadastro" className='link'>Não tem cadastro? Cadastre-se</Link>
                    </p>
                </div>
            </div>
        </>
    )
}
export default Login