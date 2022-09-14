import styles from './FrendNavBar.module.css'

const FrendNavBar = (props) => {
    return(
        <div className={styles.frend}>
            <img src={props.frend.ava} />
            {props.frend.name}
        </div>
    )
}

export default FrendNavBar