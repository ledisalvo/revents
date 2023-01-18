import React, { useState } from 'react';
import NavBar from '../../features/nav/NavBar';
import { Container } from 'semantic-ui-react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import EventDashboard from '../../features/events/eventDashboard/EventDashboard';
import EventDetailedPage from '../../features/events/eventDetailed/EventDetailedPage';
import EventForm from '../../features/events/eventForm/EventForm';

const App = () => {
  const [formOpen, setFormOpen] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);

  function handleSelectedEvent(event) {
    setSelectedEvent(event);
    setFormOpen(true);
  }

  function handleCreateFormOpen() {
    setSelectedEvent(null);
    setFormOpen(true);
  }

  const navigate = useNavigate();
  console.log('navigate: ' + navigate('/'));

  return (
    <>
      <NavBar setFormOpen={handleCreateFormOpen} />
      <Container className='main'>
        <Routes>
          <Route path='/events' element={<EventDashboard />} />
          <Route path='/events/:id' element={<EventDetailedPage />} />
          <Route path='/createEvent' element={<EventForm />} />
        </Routes>
      </Container>
    </>
  );
};

export default App;
