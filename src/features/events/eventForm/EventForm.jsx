import cuid from 'cuid';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, Navigate, useNavigate, useParams } from 'react-router-dom';
import { Button, Form, Header, Segment } from 'semantic-ui-react';
import { createEvent, updateEvent } from '../eventActions';
import { Formik } from 'formik';

const EventForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();
  const selectedEvent = useSelector((state) =>
    state.event.events.find((e) => e.id === id)
  );

  const initialValues = selectedEvent ?? {
    title: '',
    category: '',
    description: '',
    city: '',
    venue: '',
    date: '',
  };

  const [values, setValues] = useState(initialValues);

  function handleFormSubmit() {
    selectedEvent
      ? dispatch(updateEvent({ ...selectedEvent, ...values }))
      : dispatch(
          createEvent({
            ...values,
            id: cuid(),
            hostedBy: 'Bob',
            attendees: [],
            hostPhotoURL: '/assets/user.png',
          })
        );
    navigate('/events');
  }

  function handleInputChange(e) {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  }
  return (
    <Segment clearing>
      <Header content={selectedEvent ? 'Edit the Event' : 'Create new Event'} />
      <Formik
        initialValues={initialValues}
        onSubmit={(values) => console.log(values)}
      >
        {({ values, handleChange, handleSubmit }) => (
          <Form onSubmit={handleSubmit}>
            <Form.Field>
              <input
                type='text'
                placeholder='Event title'
                name='title'
                value={values.title}
                onChange={handleChange}
              />
            </Form.Field>
            <Form.Field>
              <input
                type='text'
                placeholder='Category'
                name='category'
                value={values.category}
                onChange={handleChange}
              />
            </Form.Field>
            <Form.Field>
              <input
                type='text'
                placeholder='Description'
                name='description'
                value={values.description}
                onChange={handleChange}
              />
            </Form.Field>
            <Form.Field>
              <input
                type='text'
                placeholder='City'
                name='city'
                value={values.city}
                onChange={handleChange}
              />
            </Form.Field>
            <Form.Field>
              <input
                type='text'
                placeholder='Venue'
                name='venue'
                value={values.venue}
                onChange={handleChange}
              />
            </Form.Field>
            <Form.Field>
              <input
                type='date'
                placeholder='Date'
                name='date'
                value={values.date}
                onChange={handleChange}
              />
            </Form.Field>
            <Button type='submit' floated='right' positive content='Submit' />
            <Button
              as={Link}
              to='/events'
              type='submit'
              floated='right'
              content='Cancel'
            />
          </Form>
        )}
      </Formik>
    </Segment>
  );
};

export default EventForm;
