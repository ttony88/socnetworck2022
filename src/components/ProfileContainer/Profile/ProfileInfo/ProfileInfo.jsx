import Preloader from '../../../common/Preloader/Preloader'

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
            <img src={props.profile.photos.large} alt="photo" />
            ava + status
        </div>
    )
}

export default ProfileInfo