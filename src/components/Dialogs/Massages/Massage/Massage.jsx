import styles from './Massage.module.css'

const Massage = (props) => {

    return(
        <div>
            <div className={styles.myMassage}>{props.myMassage}</div>
            <div className={styles.frendsMassage}>{props.frendsMassage}</div>
        </div>
    )
}

export default Massage