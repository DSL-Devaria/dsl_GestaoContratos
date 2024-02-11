import style from './style.module.css'


export default function ProfileSection(props){
    return(
        <div
        {...props}
        className={`${style.wrapper} ${props.className}`}
        >
            {props.children}
        </div>
    )  
}