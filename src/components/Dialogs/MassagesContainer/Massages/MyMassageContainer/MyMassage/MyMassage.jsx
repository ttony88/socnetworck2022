import React from 'react'
import styles from './MyMassage.module.css'
import MyMassageForm from './MyMassageForm/MyMassageForm'
import { reset } from "redux-form"

const MyMassage = (props) => {

    const addMassage = (values, dispatch) => {
        props.addMassageItem(values.myMassageTexarea)
        dispatch(reset("addMyMassage"))
    }

    return(
        <div className={styles.myMassage}>
            <MyMassageForm onSubmit={addMassage}/>
        </div>
    )
}

export default MyMassage
