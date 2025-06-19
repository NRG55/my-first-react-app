import styles from "./Button.module.css"

export function ButtonSimple() {
    return (
        <button className={styles.button}>Submit</button>
    )
}
 
export default function Button({type="primary", label="Button"}) {
    return (
        <button className={styles[type]}>{label}</button>
    )
}