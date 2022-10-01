import styles from './Dialogs.module.css'
import DialogsItemContainer from './DialogsItemContsiner/DialogsItemContainer'
import MassagesContainer from './MassagesContainer/MassagesContainer'

const Dialogs = (props) => {

    return (
        <div className={styles.dialogs}>
            <DialogsItemContainer />
            <MassagesContainer />
        </div>
    )
}

export default Dialogs