import React from 'react';
import NavBar from '../../features/nav/NavBar';
import { Container } from 'semantic-ui-react';
import { Route, Routes, useLocation } from 'react-router-dom';
import EventDashboard from '../../features/events/eventDashboard/EventDashboard';
import EventDetailedPage from '../../features/events/eventDetailed/EventDetailedPage';
import EventForm from '../../features/events/eventForm/EventForm';
import SandBox from '../../features/sandbox/Sandbox';
import ModalManager from '../common/modals/ModalManager';
import { ToastContainer } from 'react-toastify';

const App = () => {
  const { key } = useLocation();
  return (
    <>
      <ModalManager />
      <ToastContainer position='bottom-right' theme='colored' hideProgressBar />
      <NavBar />
      <Container className='main'>
        <Routes>
          <Route path='/events' element={<EventDashboard />} />
          <Route path='/sandbox' element={<SandBox />} />
          <Route path='/events/:id' element={<EventDetailedPage />} />
          <Route path='/createEvent' element={<EventForm key={key} />} />
          <Route path='/manage/:id' element={<EventForm />} />
        </Routes>
      </Container>
    </>
  );
};

export default App;
