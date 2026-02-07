import React, { useRef } from 'react';
import '../assets/css/todolist.css';
import avatar from '../assets/images/profil.jpg';
import Button from './Button';

const ProfileCard = ({isDarkMode,setIsDarkMode}) => {
  return (
    <div className="card profile-section">
      <div className="profile-header">
        <img src={avatar} alt="Avatar" className="avatar" />
        <div>
          <h2 id="name-display">Lindu Aji Trisnadi</h2>
          <p className="role">Frontend Developer</p>
        </div>
      </div>
      <p className="bio">
        I'm a Computer Science student at Telkom University in Bandung and have internship experience at a company specializing in article and journal writing. I also have design fundamentals, an understanding of HTML, CSS, JavaScript, Python, and PHP, and database skills using MySQL Workbench.
      </p>

      <Button variant='secodary' onClick={()=> setIsDarkMode(!isDarkMode)}>
        {isDarkMode ? "Dark Mode": "Light Mode"}
      </Button>
    </div>
  );
};

export default ProfileCard;
