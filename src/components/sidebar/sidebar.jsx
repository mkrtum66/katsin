import React from 'react';
import './sidebar.scss';
import { NavLink } from 'react-router-dom';
import { scrollToSection } from '../../utils/scrollToSection';

const Sidebar = ({ showSideBar, setShowSideBar, setSideRef }) => {
  const handleNavigate = () => {
    setShowSideBar(false);
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const clickOnLink = id => {
    setShowSideBar(false);
    setSideRef(id);
    scrollToSection(id);
  };

  return (
    <div className={`sidebar ${showSideBar ? 'open' : ''}`}>
      <div className="bg" onClick={() => setShowSideBar(false)} />
      <div className="sidebar-content">
        <ul>
          <li onClick={() => handleNavigate()}>
            <NavLink to={'/welcome'}>Welcome</NavLink>
          </li>
          <li onClick={() => handleNavigate()}>
            <NavLink to={'/food-menu'}>Food Menu</NavLink>
          </li>
          <li onClick={() => handleNavigate()}>
            <NavLink to={'/drink-menu'}>Drink Menu</NavLink>
          </li>
          <li onClick={() => clickOnLink('venue')}>
            <NavLink to={'/'}>Venue</NavLink>
          </li>
          <li onClick={() => handleNavigate()}>
            <NavLink to={'/'}>Events</NavLink>
          </li>
          <li onClick={() => handleNavigate()}>
            <NavLink to={'/gift-card'}>Gift Cards</NavLink>
          </li>
          <li onClick={() => handleNavigate()}>
            <NavLink to={'/'}>Dress Code</NavLink>
          </li>
          <li onClick={() => handleNavigate()}>
            <NavLink to={'/vip'}>VIP Room</NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
