import styles from './Dialogs.module.css'
import DialogItem from './DialogsItem/DialogItem'
import Massages from './Massages/Massages'

const Dialogs = () => {

    return (
        <div className={styles.dialogs}>
            <DialogItem />
            <Massages />
        </div>
    )
}

export default Dialogs