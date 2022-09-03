import styles from './Massage.module.css'

const Massage = (props) => {

    return(
        <div className={styles.massage}>{props.textMassage}</div>
    )
}

export default Massage