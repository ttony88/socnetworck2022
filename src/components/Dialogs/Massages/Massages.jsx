import Massage from './Massage/Massage';
import styles from './Massages.module.css'
import MyMassage from './MyMassage/MyMassage';

const Massages = (props) => {

let massages = props.massages.map(massage => <Massage myMassage={massage.myMassage} 
                                                      frendsMassage={massage.frendsMassage} />)

  return (
    <div className={styles.massages}>
      <MyMassage />
      {massages}
    </div>
  );
};

export default Massages;
