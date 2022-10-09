import Preloader from '../../../common/Preloader/Preloader'
import styles from './ProfileInfo.module.css'

const ProfileInfo = (props) => {

    if(!props.profile){
        return(
            <div>
                <Preloader />
            </div>
        )
    }
    return(
        <div>
            <div>
                <img src={props.profile.photos.large} alt="photo" />
            </div>
            <div>
                {props.profile.fullName}
            </div>
            <div>
                {props.profile.contacts.github}
            </div>
            <div>
                {props.profile.contacts.vk}
            </div>
            <div>
                {props.profile.contacts.facebook}
            </div>
            <div>
                {props.profile.contacts.instagram}
            </div>
            <div>
                {props.profile.contacts.twitter}
            </div>
            <div>
                {props.profile.contacts.website}
            </div>
            <div>
                {props.profile.contacts.youtube}
            </div>
            <div>
                {props.profile.contacts.mainLink}
            </div>
            <div>
                Looking for a job:
                <div className={styles.lookingForAJob}>{props.profile.lookingForAJob ?
                    <img src="https://weblinks.ru/wp-content/uploads/2021/11/15-10.jpg" alt="yes" />:
                    <img src="https://static.tildacdn.com/tild3661-3266-4463-b936-303263393636/WhatsApp_Image_2020-.jpeg" alt="no" />}
                </div>
            </div>
            <div>
                {props.profile.lookingForAJobDescription}
            </div>
            
        </div>
    )
}

export default ProfileInfo