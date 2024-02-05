import styles from './styles.module.css'

export default function Button(props){
    return(
        <button className={styles.wrapper} onClick={props.onClick} > {props.children}</button>
    )
} 