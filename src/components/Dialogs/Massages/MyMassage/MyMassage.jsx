import React from 'react'
import styles from './MyMassage.module.css'

const MyMassage = (props) => {

    let newMassageItem = React.createRef()

    let addMassage = () => {
        let text = newMassageItem.current.value
        props.addMassageItem(text)
    }
    
    return(
        <div className={styles.myMassage}>
            <textarea ref={newMassageItem} />
            <button onClick={addMassage} className={styles.addMassage}>Add massage</button>
        </div>
    )
}

export default MyMassage
