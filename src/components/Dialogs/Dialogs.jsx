import styles from './Dialogs.module.css'
import DialogItem from './DialogsItem/DialogItem'
import MassagesContainer from './MassagesContainer/MassagesContainer'

const Dialogs = (props) => {

    return (
        <div className={styles.dialogs}>
            {/*<DialogItem dialogs={props.massagesPage.dialogs} />*/}
            <MassagesContainer />
        </div>
    )
}

export default Dialogs