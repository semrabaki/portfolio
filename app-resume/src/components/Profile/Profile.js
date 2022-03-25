import React from 'react';
import {Typography} from '@material-ui/core';
import './Profile.css';
import CustomTimeline from '../Timeline/Timeline';

console.log('deneme');
const Profile = () => {
  return (
    <div className='profile container_shadow'>
    <div className='profile_name'>
    <Typography className='name'>Semra Baki</Typography>
    <Typography className='title'>Software Engineer</Typography>
    </div>
    <figure className='profile_image'>
      <img src={require('../../assets/images/sb.jpg')} alt=""/>
    </figure>

    <div className='profile_information'>
      {/* Bu asagidaki kodu acinca ekrandan profile page gidiyor sadece backgorund kalior. node_modules da libraryler yuklu ama bilemedm */}
      <CustomTimeline/>
      <br/>
      <button>my button</button>
    </div>
     
    </div>
  )
}

export default Profile;