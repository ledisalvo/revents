import cuid from 'cuid';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { Button, Header, Segment, FormField } from 'semantic-ui-react';
import { createEvent, updateEvent } from '../eventActions';
import { Formik, Form, Field } from 'formik';

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
        <Form className='ui form'>
          <FormField>
            <Field name='title' placeholder='Event Title' />
          </FormField>
          <FormField>
            <Field name='category' placeholder='Category' />
          </FormField>
          <FormField>
            <Field name='description' placeholder='Description' />
          </FormField>
          <FormField>
            <Field name='city' placeholder='City' />
          </FormField>
          <FormField>
            <Field name='venue' placeholder='Venue' />
          </FormField>
          <FormField>
            <Field name='date' placeholder='Date' type='date' />
          </FormField>
          <Button type='submit' floated='right' positive content='Submit' />
          <Button
            as={Link}
            to='/events'
            type='submit'
            floated='right'
            content='Cancel'
          />
        </Form>
      </Formik>
    </Segment>
  );
};

export default EventForm;
