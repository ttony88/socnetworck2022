import React from 'react'
import styles from './MyMassage.module.css'

const MyMassage = (props) => {

    let newMassageItem = React.createRef()

    const addMassage = () => {
        let text = newMassageItem.current.value;
        return props.addMassage(text)
    }

    return(
        <div className={styles.myMassage}>
            <textarea ref={newMassageItem} />
            <button onClick={addMassage} className={styles.addMassage}>Add massage</button>
        </div>
    )
}

export default MyMassage
