import styles from './FrendsMassages.module.css'

const FrendsMassages = (props) => {

    return(
        <div>
            <div className={styles.frendsMassage}>{props.frendsMassages}</div>
        </div>
    )
}

export default FrendsMassages