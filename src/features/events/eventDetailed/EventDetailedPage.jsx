import React from 'react';
import { Grid } from 'semantic-ui-react';
import EventDetailedHeader from './EventDetailedHeader';
import EventDetailedInfo from './EventDetailedInfo';
import EventDetailedChat from './EventDetailedChat';
import EventDetailedSideBar from './EventDetailedSideBar';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import useFirestoreDoc from '../../../app/hooks/useFirestoreDoc';
import { listenToEventFromFirestore } from '../../../app/firestore/filestoreService';
import { listenToEvents } from '../eventActions';
import LoadingComponent from '../../../app/layout/LoadingComponent';

const EventDetailedPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();
  const event = useSelector((state) =>
    state.event.events.find((e) => e.id === id)
  );
  const { loading, error } = useSelector((state) => state.async);

  useFirestoreDoc({
    query: () => listenToEventFromFirestore(id),
    data: (event) => dispatch(listenToEvents([event])),
    deps: [id, dispatch],
  });

  if (loading || (!event && !error))
    return <LoadingComponent content={'Loading event...'} />;

  if (error) navigate('/error');

  return (
    <Grid>
      <Grid.Column width={10}>
        <EventDetailedHeader event={event} />
        <EventDetailedInfo event={event} />
        <EventDetailedChat />
      </Grid.Column>
      <Grid.Column width={6}>
        <EventDetailedSideBar attendees={event?.attendees} />
      </Grid.Column>
    </Grid>
  );
};

export default EventDetailedPage;
