import Massage from './Massage/Massage';
import styles from './Massages.module.css'
import MyMassageContainer from './MyMassageContainer/MyMassageContainer';

const Massages = (props) => {

let massages = props.massages.map(massage => <Massage key={massage.id} myMassage={massage.myMassage} />)
                                                     

  return (
    <div className={styles.massages}>
      <MyMassageContainer />
      {massages}
    </div>
  );
};

export default Massages;
