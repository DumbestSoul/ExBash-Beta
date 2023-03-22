import React from "react";
import ReactDOM from 'react-dom/client';
import ProfileCard from "../components/ProfileCard";
import '../styles/profile_card.css';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<AboutUs />)

function AboutUs(){
    return (
        <div className="about--body">
            <ProfileCard
                img='./img/prof_1.jpeg'
                name="Rajat Kishore Acharya"
                role="Coder"
                about="Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                Quisquam rerum cupiditate doloribus quia fugit id illo." 
            />
            <ProfileCard
                img='./img/prof_2.jpeg'
                name="Akshat Kumar"
                role="Coder"
                about="Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                Quisquam rerum cupiditate doloribus quia fugit id illo." 
            />
            <ProfileCard
                img='./img/prof_3.jpeg'
                name="Akshat Kumar Sahoo"
                role="Coder"
                about="Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                Quisquam rerum cupiditate doloribus quia fugit id illo." 
            />
        </div>
    )
}

export default AboutUs