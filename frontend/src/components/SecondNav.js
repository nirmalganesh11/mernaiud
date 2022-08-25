import React, { useState } from 'react';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import './SecondNav.css';
//import Dropdown from './Dropdown';
import Dropdown from './Dropdown';
import {useDispatch, useSelector } from 'react-redux'


function Navbar() {
  const userLogin = useSelector(state => state.userLogin)
  const userInfo = userLogin
  const [click, setClick] = useState(false);
  const [dropdown, setDropdown] = useState(false);
  const [secondDropdown,setsecondDropdown] = useState(false);
  console.log(userInfo)
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const onMouseEnter = () => {
    if (window.innerWidth < 9) {
      setDropdown(false);
      setsecondDropdown(false);
    } else {
      setDropdown(true);
    }
  };
  const onMouseEnterSecond = () => {
    if (window.innerWidth < 9) {
      setDropdown(false);
      setsecondDropdown(false);
    } else {
      setsecondDropdown(true);
    }
  };

  const onMouseLeave = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
      setsecondDropdown(false);
    } else {
      setDropdown(false);
      setsecondDropdown(false);
    }
  };

  return (
    <>
      <nav className='navbar'>
        <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
          AIUD
          <i class='fab fa-firstdraft' />
        </Link>
        <div className='menu-icon' onClick={handleClick}>
          <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
        </div>
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
      
        <li className='nav-item'>
        <Link to='/Universities?cg=uni' className='nav-links' onClick={closeMobileMenu}>
           Universities
        </Link>
     </li>
     <li className='nav-item'>
        <Link to='/courses' className='nav-links' onClick={closeMobileMenu}>
           Courses
        </Link>
     </li>
    
  {/*<li className='nav-item'>
  <Link to='/news' className='nav-links' onClick={closeMobileMenu}>
     News
  </Link> 
  </li> */}
 {/* <li className='nav-item'>
<Link to='/admissions' className='nav-links' onClick={closeMobileMenu}>
   Admissions
</Link>
</li> */}
<li className='nav-item'>
<Link
  to='/recomended'
  className='nav-links'
  onClick={closeMobileMenu}
>
  Ranking
</Link>
</li>
<li className='nav-item'>
<Link to='/compare'
  className='nav-links'
  onClick={closeMobileMenu}
>
  Comparison
</Link>
</li>
<li className='nav-item'>
<Link to='/leaderboard'
  className='nav-links'
  onClick={closeMobileMenu}
>
  Verified
</Link>
</li>
{/* {userInfo ? (<li className='nav-item'>
<Link to='/files' className= 'nav-links' onClick={closeMobileMenu}>
   ${userInfo.message}
</Link>
</li>): <li className='nav-item'>
<Link to='/files' className='nav-links' onClick={closeMobileMenu}>
   not signed IN
</Link>
</li>} */}
<li className='nav-item'>
<Link to='/files' className='nav-links' onClick={closeMobileMenu}>
   Upload
</Link>
</li>

<li
className='nav-item'
onMouseEnter={onMouseEnter}
onMouseLeave={onMouseLeave}
>
<Link
  to='/services'
  className='nav-links'
  onClick={closeMobileMenu}
>
  Overall <i className='fas fa-caret-down' />
</Link>
{dropdown && <Dropdown />}
</li>

<li className='nav-item'>
<Link to='/about'
  className='nav-links'
  onClick={closeMobileMenu}
>
  About
</Link>

</li>
{/*
<li
className='nav-item'
onMouseEnter={onMouseEnterSecond}
onMouseLeave={onMouseLeave}
>
<Link
  to='/services'
  className='nav-links'
  onClick={closeMobileMenu}
>
  secondoverall <i className='fas fa-caret-down' />
</Link>
{secondDropdown && <Dropdown />}
</li> */}


          <li>
            <Link
              to='/register'
              className='nav-links-mobile'
              onClick={closeMobileMenu}
            >
              Sign Up
            </Link>
          </li>
        </ul>
        <Button />
      </nav>
    </>
  );
}

export default Navbar;
