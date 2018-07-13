import React, { Component } from 'react'
import { BrowserRouter as Router, Switch } from "react-router-dom";
import Route from "react-router-dom/Route";
import { Layout, Breadcrumb } from 'antd'
import SideMenu from './components/organisms/SideMenu'
import Home from './pages/Home'
import PageNotFound from './pages/PageNotFound'
import AfiliadoCreate from './pages/Afiliado/AfiliadoCreate'
import logo from './assets/logo.svg';

const { Content, Header, Footer } = Layout

class App extends Component {
  render() {
    return (
      <Router>
        <Layout style={{ minHeight: '100vh' }}>
          <SideMenu
            logo={logo}
          />
          <Layout>
            <Header style={{ background: '#fff', padding: 0 }}>Header</Header>
            <Content style={{ margin: '0 16px' }}>
              <Breadcrumb style={{ margin: '16px 0' }}>
                <Breadcrumb.Item>Afiliado</Breadcrumb.Item>
                <Breadcrumb.Item>Crear</Breadcrumb.Item>
              </Breadcrumb>
              <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>
                <Switch>
                  <Route path="/" component={Home} exact />
                  <Route path="/afiliado-create" component={AfiliadoCreate} />
                  <Route component={PageNotFound} />
                </Switch>
              </div>
            </Content>
            <Footer style={{ textAlign: 'center' }}>
              ACME ©2018 Creado por Softtek
            </Footer>
          </Layout>
        </Layout>
      </Router>
    );
  }
}

export default App
