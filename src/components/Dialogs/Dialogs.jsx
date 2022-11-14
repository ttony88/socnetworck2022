import { compose } from 'redux'
import styles from './Dialogs.module.css'
import DialogsItemContainer from './DialogsItemContsiner/DialogsItemContainer'
import MassagesContainer from './MassagesContainer/MassagesContainer'
import { withAuthRedirect } from '../../hoc/withAuthRedirectComponent'

const Dialogs = () => {

    return (
        <div className={styles.dialogs}>
            <DialogsItemContainer />
            <MassagesContainer />
        </div>
    )
}

export default compose(withAuthRedirect)(Dialogs)