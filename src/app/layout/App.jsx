import React from 'react';
import NavBar from '../../features/nav/NavBar';
import { Container } from 'semantic-ui-react';
import { Route, Routes } from 'react-router-dom';
import EventDashboard from '../../features/events/eventDashboard/EventDashboard';
import EventDetailedPage from '../../features/events/eventDetailed/EventDetailedPage';
import EventForm from '../../features/events/eventForm/EventForm';

const App = () => {
  return (
    <>
      <NavBar />
      <Container className='main'>
        <Routes>
          <Route path='/events' element={<EventDashboard />} />
          <Route path='/events/:id' element={<EventDetailedPage />} />
          <Route
            // path={['/createEvent', '/manage/:id']}
            path='/createEvent'
            element={<EventForm />}
          />
        </Routes>
      </Container>
    </>
  );
};

export default App;
