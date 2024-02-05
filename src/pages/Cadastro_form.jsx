import { useState } from 'react'
import Input from '../components/form/input'
import './style_form.css'
import Button from '../components/Button'
import '../styles/globals.css'
import ProfileSection from '../components/ProfileSection/ProfileSection'
import { Link } from 'react-router-dom'

function Cadastro() {
    const [nome, setNome] = useState('')
    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')
    const [confirmarSenha, setConfirmarSenha] = useState('')
    const [link, setLink] = useState('')

    function aoClicar() {
        console.log(nome)
        console.log(email)
        console.log(senha)
        console.log(confirmarSenha)
        console.log(link)
    }
    return (
        <>
           <div className='container'>
                <div className={'style_form'}>
                    <ProfileSection>
                        <h3>Cadastro</h3>
                    </ProfileSection>
                    <Input type="text" text="Nome Completo" name="name" placeholder="Insira seu nome." handleOnChange={(e) => { setNome(e.target.value) }} value={nome} />
                    <Input type="email" text="E-mail" name="email" placeholder="Insira seu melhor E-mail." handleOnChange={(e) => { setEmail(e.target.value) }} value={email} />
                    <Input type="password" text="Senha" name="senha" placeholder="Criar uma nova senha" handleOnChange={(e) => { setSenha(e.target.value) }} value={senha} />
                    <Input type="password" text="Confirmar Senha" name="senha" placeholder="Confirme sua senha " handleOnChange={(e) => { setConfirmarSenha(e.target.value) }} value={confirmarSenha} />
                    <Input type="text" text="Link Autentique" placeholder={"Link Autentique:"} handleOnChange={(e) => { setLink(e.target.value) }} value={link} />
                    <Button onClick={aoClicar}>Cadastrar</Button>
                    <p><Link to="/" className='link'>Já registrado? Conecte-se</Link></p>

                </div>
            </div>
        </>
    )
}
export default Cadastro