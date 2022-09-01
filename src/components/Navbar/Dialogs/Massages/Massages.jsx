import Massage from './Massage/Massage';
import styles from './Massages.module.css'

const Massages = () => {
  return (
    <div className={styles.massages}>
        <Massage massage='Hi' />
        <Massage massage='How are you' />
        <Massage massage='Cool' />
    </div>
  );
};

export default Massages;
