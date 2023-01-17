import React from 'react';
import { NavLink } from 'react-router-dom';
import { Button, Container, Menu } from 'semantic-ui-react';

const NavBar = ({ setFormOpen }) => {
  return (
    <Menu inverted fixed='top'>
      <Container>
        <Menu.Item as={NavLink} exact to='/' header>
          <img src='/logo192.png' alt='logo' style={{ marginRight: 15 }} />
          Re-vents
        </Menu.Item>
        <Menu.Item as={NavLink} to='/events' name='Events' />
        <Menu.Item as={NavLink} to='/createEvent'>
          <Button positive inverted content='Create Event' />
        </Menu.Item>
        <Menu.Item position='right'>
          <Button basic inverted content='Login' />
          <Button
            basic
            inverted
            content='Register'
            style={{ marginLeft: '0.5em' }}
          />
        </Menu.Item>
      </Container>
    </Menu>
  );
};

export default NavBar;
