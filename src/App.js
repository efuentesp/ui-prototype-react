import React, { Component } from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import Route from 'react-router-dom/Route';
import { Layout } from 'antd';
import SideMenu from './components/organisms/SideMenu';
import GlobalHeader from './components/organisms/GlobalHeader';
import Home from './pages/Home';
import PageNotFound from './pages/PageNotFound';
import AfiliadoCreate from './pages/Afiliado/AfiliadoCreate';
import AfiliadoSearch from './pages/Afiliado/AfiliadoSearch';
import logo from './assets/logo.svg';

const { Content, Header, Footer } = Layout;

class App extends Component {
  render() {
    return (
      <Router>
        <Layout>
          <SideMenu logo={logo} />
          <Layout>
            <Header style={{ padding: 0 }}>
              <GlobalHeader />
            </Header>
            <Content style={{ margin: '24px 24px 0', height: '100%' }}>
              <div>
                <Switch>
                  <Route path="/" component={Home} exact />
                  <Route path="/afiliado-create" component={AfiliadoCreate} />
                  <Route path="/afiliado-search" component={AfiliadoSearch} />
                  <Route component={PageNotFound} />
                </Switch>
              </div>
            </Content>
            <Footer style={{ textAlign: 'center' }}>ACME ©2018 Creado por Softtek</Footer>
          </Layout>
        </Layout>
      </Router>
    );
  }
}

export default App;
