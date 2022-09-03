import Massage from './Massage/Massage';
import styles from './Massages.module.css'

const Massages = (props) => {

let massages = props.massages.map(massage => <Massage textMassage={massage.textMassage} />)

  return (
    <div className={styles.massages}>
      {massages}
    </div>
  );
};

export default Massages;
