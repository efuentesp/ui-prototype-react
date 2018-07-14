import React from 'react';
import styles from './index.less';
import { Link } from 'react-router-dom';
import { Layout, Menu, Icon } from 'antd';

const { Sider } = Layout;
const SubMenu = Menu.SubMenu;

const SideMenu = props => {
  return (
    <Sider collapsible breakpoint="lg" width={256} className="sider">
      <div className="logo" key="logo">
        <Link to="/">
          <img src={props.logo} alt="logo" />
          <h1>Demo App</h1>
        </Link>
      </div>
      <Menu
        key="Menu"
        theme="dark"
        defaultSelectedKeys={['1']}
        mode="inline"
        style={{ padding: '16px 0', width: '100%' }}
      >
        <Menu.Item key="1">
          <Link to="/">
            <span>
              <Icon type="dashboard" />
              <span>Inicio</span>
            </span>
          </Link>
        </Menu.Item>
        <SubMenu
          key="sub1"
          title={
            <span>
              <Icon type="user" />
              <span>Afiliado</span>
            </span>
          }
        >
          <Menu.Item key="3">
            <Link to="/afiliado-search">Buscar</Link>
          </Menu.Item>
          <Menu.Item key="4">
            <Link to="/afiliado-create">Agregar</Link>
          </Menu.Item>
        </SubMenu>
      </Menu>
    </Sider>
  );
};

export default SideMenu;
