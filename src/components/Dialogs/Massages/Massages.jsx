import Massage from './Massage/Massage';
import FrendsMassages from './FrendsMassages/FrendsMassages';
import styles from './Massages.module.css'
import MyMassage from './MyMassage/MyMassage';

const Massages = (props) => {

let massages = props.massages.map(massage => <Massage key={massage.id} myMassage={massage.myMassage} />)

let frendsMassages = props.frendsMassages.map(frendsMassages => {
                     <FrendsMassages key={frendsMassages.id} frendsMassages={frendsMassages.frendsMassage}/>})                                                      

  return (
    <div className={styles.massages}>
      <MyMassage dispatch={props.dispatch}/>
      {massages}
      {frendsMassages}
    </div>
  );
};

export default Massages;
