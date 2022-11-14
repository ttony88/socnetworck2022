import React from 'react'
import styles from './MyMassage.module.css'
import MyMassageForm from './MyMassageForm/MyMassageForm'

const MyMassage = (props) => {

    const addMassage = (values) => {
        return props.addMassageItem(values.myMassageTexarea)
    }

    return(
        <div className={styles.myMassage}>
            <MyMassageForm onSubmit={addMassage}/>
        </div>
    )
}

export default MyMassage
