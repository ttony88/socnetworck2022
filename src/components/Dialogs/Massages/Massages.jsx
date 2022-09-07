import Massage from './Massage/Massage';
import FrendsMassages from './FrendsMassages/FrendsMassages';
import styles from './Massages.module.css'
import MyMassage from './MyMassage/MyMassage';

const Massages = (props) => {

let massages = props.massages.map(massage => <Massage myMassage={massage.myMassage} />)

let frendsMassages = props.frendsMassages.map(frendsMassages => {
                     <FrendsMassages frendsMassages={frendsMassages.frendsMassage}/>})                                                      

  return (
    <div className={styles.massages}>
      <MyMassage addMassageItem={props.addMassageItem}/>
      {massages}
      {frendsMassages}
    </div>
  );
};

export default Massages;
