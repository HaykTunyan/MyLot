import React from 'react';
import './user-settings.scss';
import { Nav, Tab } from "react-bootstrap";
import AccountSettings from './account-settings/account-settings';
import NotificetionsSettings from './notifications-settings/notifications-settings';
import ProfileSettings from './profile-settings/profile-settings';
import { NavLink } from "react-router-dom";
import { useIntl } from 'react-intl';

const UserSettings = () => {

    const intl = useIntl();

    return (
        <React.Fragment>
            <div className="my-5 userSettings-container container">
                <nav class="nav py-4">
                    <NavLink to="/home" className="text-dark mr-2">{intl.messages.main_page}</NavLink>
                    <span>&gt;</span>
                    <NavLink to="/usersettings" className="active ml-2"> {intl.messages.settings.settings_title} </NavLink>
                </nav>
                <div className="p-3 card">
                    <Tab.Container className="card " id="left-tabs-example" defaultActiveKey="Auction">
                        <div className="row">
                            <div className="col-12 col-sm-3">
                                <Nav variant="pills" className="flex-column">
                                    <Nav.Item>
                                        <Nav.Link eventKey="Auction" className="profile-user-text">
                                            {intl.messages.settings.settings_step_one}
                                        </Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="Notificetions" className="profile-user-text">
                                            {intl.messages.settings.settings_step_two}
                                        </Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="Profile" className="profile-user-text">
                                            {intl.messages.settings.settings_step_three}
                                        </Nav.Link>
                                    </Nav.Item>
                                </Nav>
                            </div>
                            <div className="col-12 col-sm-9">
                                <Tab.Content>
                                    <Tab.Pane eventKey="Auction">
                                        <AccountSettings />
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="Notificetions">
                                        <NotificetionsSettings />
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="Profile">
                                        <ProfileSettings />
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="Email">
                                        <ProfileSettings />
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="Phone">
                                        <ProfileSettings />
                                    </Tab.Pane>
                                </Tab.Content>
                            </div>
                        </div>
                    </Tab.Container>
                </div>

            </div>
        </React.Fragment>
    )
}

export default UserSettings