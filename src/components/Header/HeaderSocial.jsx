import React from 'react';
import { BsLinkedin } from 'react-icons/bs';
import { FaGithub } from 'react-icons/fa';

const HeaderSocial = () => {
  return (
    <div className='header__social'>
      <a href='https://www.linkedin.com/in/jeremy-huynh/' target='_blank'><BsLinkedin /></a>
      <a href='https://github.com/jermeewinn' target='_blank'><FaGithub /></a>
    </div>
  )
}

export default HeaderSocial