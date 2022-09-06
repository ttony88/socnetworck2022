import styles from './MyMassage.module.css'

const MyMassage = () => {
    return(
        <div className={styles.myMassage}>
            <textarea  />
            <button onClick={() => alert('HI')} className={styles.addMassage}>Add massage</button>
        </div>
    )
}

export default MyMassage
