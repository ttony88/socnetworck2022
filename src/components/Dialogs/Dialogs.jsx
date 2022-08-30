import styles from './Dialogs.module.css'

const Dialogs = () => {

    return (
        <div className={styles.dialogs}>
            <div className={styles.dialogsItem}>
                <div className={styles.dialog + ' ' + styles.active}>Anton</div>
                <div className={styles.dialog}>Dasha</div>
                <div className={styles.dialog}>Sava</div>
                <div className={styles.dialog}>Rita</div>
            </div>
            <div className={styles.massages}>
                <div className={styles.massage}>Hi</div>
                <div className={styles.massage}>How are you</div>
                <div className={styles.massage}>Сool</div>
            </div>
        </div>
    )
}

export default Dialogs