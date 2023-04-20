import React from "react";
import { Link } from "react-router-dom";
import { Button, Container, Icon, Menu, Segment } from "semantic-ui-react";
import { LayoutProps } from "./LayoutProps";
import { useLocation } from 'react-router-dom'


function Layout(props: LayoutProps) {

  const { pathname } = useLocation();

  return (
    <>
      <Container text>
        <Menu
          inverted
          fixed='top'
          color='blue'
          pointing
          secondary
          size='large'
        >
          <Container>
            <Menu.Item active={pathname === '/' ? true : undefined}>
              <Link to='/'><Icon name='home' />Home</Link>
            </Menu.Item>
            <Menu.Item active={pathname.includes('/projects') ? true : undefined}>
              <Link to='/projects'><Icon name='code' />Projects</Link>
            </Menu.Item>
            <Menu.Item active={pathname === '/resume' ? true : undefined}>
              <Link to='/resume'><Icon name='file alternate outline' />Resume</Link>
            </Menu.Item>
            <Menu.Item>
              <a target="_blank" href="https://www.linkedin.com/in/jameswcramer/">
                <Icon name='linkedin' />
                LinkedIn
              </a>
            </Menu.Item>
          </Container>
        </Menu>

      </Container>
      <div style={{ marginTop: "80px", paddingBottom: "30px" }}>
        {props.children}
      </div>
    </>
  );
}

export default Layout;