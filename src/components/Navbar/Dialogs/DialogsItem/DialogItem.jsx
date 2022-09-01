import styles from './DialogsItem.module.css'
import Dialog from './Dialog/Dialog';

const DialogItem = () => {
  return (
    <div className={styles.dialogsItem}>
        <Dialog name='Anton' id='1' />
        <Dialog name='Dasha' id='2' />
        <Dialog name='Sava' id='3' />
        <Dialog name='Rita' id='4' />
    </div>
  )
};

export default DialogItem
