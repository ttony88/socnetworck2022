import styles from './DialogsItem.module.css'
import Dialog from './Dialog/Dialog';

const DialogItem = (props) => {

  let dialogs = props.dialogs.map(dialog => <Dialog name={dialog.name} />)
  return (
    <div className={styles.dialogsItem}>
        {dialogs}
    </div>
  )
};

export default DialogItem
