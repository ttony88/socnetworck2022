import React from 'react'
import styles from './MyMassage.module.css'

const MyMassage = (props) => {

    let newMassageItem = React.createRef()

    const addMassage = () => {
        return props.addMassage()
    }

    const updateMassageText = () => {
        let text = newMassageItem.current.value;
        return props.updateMassageText(text)
    }

    return(
        <div className={styles.myMassage}>
            <textarea onChange={updateMassageText} value={props.massageText} ref={newMassageItem} />
            <button onClick={addMassage} className={styles.addMassage}>Add massage</button>
        </div>
    )
}

export default MyMassage
