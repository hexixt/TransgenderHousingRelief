import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import {
  Menu,
  Label,
  Icon
} from 'semantic-ui-react';

const UserActionMenu = () => {
  const isLoggedInUser = true;
  return (
    <Menu vertical>
      {
        isLoggedInUser ? (
          <MenuItemsPrivate />
        ) : (
          <MenuItemsPublic username='someone' />
        )
      }
    </Menu>
  );
}

const MenuItemsPrivate = () => (
  <React.Fragment>
    <Menu.Item as={Link} to='/messages'>
      <Label color='teal'>2</Label>
      <span>
        <Icon name='mail' /> Messages
      </span>
    </Menu.Item>
    <Menu.Item as={Link} to='/notifications'>
      <Label color='teal'>1</Label>
      <span>
        <Icon name='exclamation circle' /> Notifications
      </span>
    </Menu.Item>
    <Menu.Item as={Link} to='/profile/settings/password'>
      <span>
        <Icon name='arrow alternate circle right outline' /> Change Password
      </span>
    </Menu.Item>
    <Menu.Item as={Link} to='/profile/settings/avatar'>
      <span>
        <Icon name='arrow alternate circle right outline' /> Change Avatar
      </span>
    </Menu.Item>
  </React.Fragment>
)

const MenuItemsPublic = ({username}) => (
  <React.Fragment>
    <Menu.Item as={Link} to={`/message/${username}`}>
      <span>
        <Icon name='mail' /> Send a Message
      </span>
    </Menu.Item>
    <Menu.Item as={Link} to={`/message/${username}`}>
      <span>
        <Icon color='red' name='user cancel' /> Block User
      </span>
    </Menu.Item>
    <Menu.Item as={Link} to={`/message/${username}`}>
      <span>
        <Icon color='red' name='exclamation circle' /> Report User
      </span>
    </Menu.Item>
  </React.Fragment>
)

MenuItemsPublic.propTypes = {
  username: PropTypes.string,
}

export default UserActionMenu;
