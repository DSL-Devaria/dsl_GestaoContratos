import Input from '../components/form/input'
//import styles  from '../styles/ProjectFrom.module.css'

function ProjectFrom(){
    return(
        <>
            <Input type="text" text="Nome Completo" name="name" placeholder="Insira seu nome."/>
            <Input type="text" text="E-mail" name="email" placeholder="Insira seu melhor E-mail."/>
            <Input type="date" text="Data de Nascimento" name="DataNascimento" placeholder=""/>
            <Input type="password" text="Senha" name="senha" placeholder="Criar uma nova senha"/>
            <Input type="password" text="Confirmar Senha" name="senha" placeholder="Criar uma nova senha"/> 
        </>
    )
}

export default ProjectFrom