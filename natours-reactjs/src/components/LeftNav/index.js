import { NavItem } from 'components/NavItem';
import React from 'react';
import RouteEnum from '../../constants/RouteEnum';
import Images from '../../constants/images';
import './LeftNav.scss';

function LeftNav(props) {
  const { isAdmin, activeNav } = props;

  return (
    <nav className="user-view__menu">
      <ul className="side-nav">
        <NavItem
          link={RouteEnum.Settings}
          text="Settings"
          icon={Images.SETTINGS}
          active={activeNav === RouteEnum.Settings}
        />
        <NavItem
          link={RouteEnum.MyTours}
          text="My bookings"
          icon={Images.BRIEFCASE}
          active={activeNav === RouteEnum.MyTours}
        />
        <NavItem
          link={RouteEnum.Reviews}
          text="My reviews"
          icon={Images.STAR}
          active={activeNav === RouteEnum.Reviews}
        />
        <NavItem
          link={RouteEnum.Billing}
          text="Billing"
          icon={Images.CREDIT_CARD}
          active={activeNav === RouteEnum.Billing}
        />

        {isAdmin && (
          <div className="admin-nav">
            <h5 className="admin-nav__heading">Admin</h5>
            <ul className="side-nav">
              <NavItem
                link={RouteEnum.ManageTours}
                text="Manage tours"
                icon={Images.MAP}
                active={activeNav === RouteEnum.ManageTours}
              />
              <NavItem
                link={RouteEnum.ManageUsers}
                text="Manage users"
                icon={Images.USERS}
                active={activeNav === RouteEnum.ManageUsers}
              />
              <NavItem
                link={RouteEnum.ManagerReviews}
                text="Manage reviews"
                icon={Images.STAR}
                active={activeNav === RouteEnum.ManagerReviews}
              />
              <NavItem
                link={RouteEnum.ManageBookings}
                text="Manage bookings"
                icon={Images.BRIEFCASE}
                active={activeNav === RouteEnum.ManageBookings}
              />
            </ul>
          </div>
        )}
      </ul>
    </nav>
  );
}

export default LeftNav;
