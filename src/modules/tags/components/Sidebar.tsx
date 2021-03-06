import { __ } from 'modules/common/utils';
import { Sidebar } from 'modules/layout/components';
import { SidebarList } from 'modules/layout/styles';
import React from 'react';
import { NavLink } from 'react-router-dom';

function TagsSidebar() {
  const { Title } = Sidebar.Section;

  return (
    <Sidebar>
      <Sidebar.Section>
        <Title>{__('Tags')}</Title>
        <SidebarList>
          <li>
            <NavLink activeClassName="active" to="/tags/engageMessage">
              {__('Engage Message')}
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName="active" to="/tags/conversation">
              {__('Conversation')}
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName="active" to="/tags/customer">
              {__('Customer')}
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName="active" to="/tags/company">
              {__('Company')}
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName="active" to="/tags/integration">
              {__('Integration')}
            </NavLink>
          </li>
        </SidebarList>
      </Sidebar.Section>
    </Sidebar>
  );
}

export default TagsSidebar;
