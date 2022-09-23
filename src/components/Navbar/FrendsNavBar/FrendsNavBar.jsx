import styles from './FrendsNavBar.module.css'
import FrendNavBar from './FrendNavBar/FrendNavBar';

const FrendsNavBar = (props) => { 

  const frends = props.navBar.frends.map((frend) => (
    <FrendNavBar key={frend.id} frend={frend}/>
  ));

  return (
    <div>
        {frends}
    </div>
  )
};

export default FrendsNavBar;
