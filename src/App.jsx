import React, { useState } from 'react';
import { Route, Routes } from 'react-router';
import 'bootstrap/dist/css/bootstrap.min.css';
import './global.scss';
import HomePage from './pages/homePage';
import Header from './components/header';
import Footer from './components/footer';
import Sidebar from './components/sidebar';
import Socials from './components/socials';
import FoodMenuPage from './pages/foodMenuPage';
import DrinkMenuPage from './pages/drinkMenuPage';
import WelcomePage from './pages/welcomePage';
import JobsPage from './pages/jobsPage';
import ScrollToTop from './utils/scrollToTop';
import PrivacyPolicyPage from './pages/privacyPolicyPage';
import TermsOfServicesPage from './pages/termsOfServicesPage';
import AccessibilityPage from './pages/accessibilityPage';
import VipRoomPage from './pages/vipRoomPage';
import GiftCardPage from './pages/giftCardPage';
import EventsPage from './pages/eventsPage';
import ParkingPage from './pages/parkingPage';

function App() {
  const [showSideBar, setShowSideBar] = useState(false);
  const [sideRef, setSideRef] = useState();

  return (
    <div className="App">
      <ScrollToTop />
      <Header showSideBar={showSideBar} setShowSideBar={setShowSideBar} />
      <Sidebar showSideBar={showSideBar} setShowSideBar={setShowSideBar} setSideRef={setSideRef} />
      <Routes>
        <Route path={'/'} element={<HomePage sideRef={sideRef} />} />
        <Route path={'/welcome'} element={<WelcomePage />} />
        <Route path={'/food-menu'} element={<FoodMenuPage />} />
        <Route path={'/drink-menu'} element={<DrinkMenuPage />} />
        <Route path={'/events'} element={<EventsPage />} />
        <Route path={'/cards'} element={<GiftCardPage />} />
        <Route path={'/vip'} element={<VipRoomPage />} />
        <Route path={'/parking'} element={<ParkingPage />} />

        <Route path={'/jobs'} element={<JobsPage />} />
        <Route path={'/privacy-policy'} element={<PrivacyPolicyPage />} />
        <Route path={'/terms-of-services'} element={<TermsOfServicesPage />} />
        <Route path={'/accessibility'} element={<AccessibilityPage />} />
      </Routes>
      <Socials />
      <Footer />
    </div>
  );
}

export default App;
