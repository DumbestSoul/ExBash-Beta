import '../styles/profile_card.css';

function ProfileCard(props){
    return (
        <div className="profile--card"> 
            <img src={props.img} className="profile--pic" /> 
            <div className="profile--info">
                <h3>{props.name}</h3>
                <h5>{props.role}</h5>
                <p>
                    {props.about} 
                </p>
            </div>
        </div>
    )
}

export default ProfileCard