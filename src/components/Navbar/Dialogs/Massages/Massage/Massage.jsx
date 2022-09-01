import styles from './Massage.module.css'

const Massage = (props) => {

    return(
        <div className={styles.massage}>{props.massage}</div>
    )
}

export default Massage