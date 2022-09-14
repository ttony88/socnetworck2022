import styles from './Dialogs.module.css'
import DialogItem from './DialogsItem/DialogItem'
import Massages from './Massages/Massages'

const Dialogs = (props) => {

    return (
        <div className={styles.dialogs}>
            <DialogItem dialogs={props.massagesPage.dialogs} />
            <Massages massages={props.massagesPage.massages} 
                      frendsMassages={props.massagesPage.frendsMassages} 
                      dispatch={props.dispatch} />
        </div>
    )
}

export default Dialogs