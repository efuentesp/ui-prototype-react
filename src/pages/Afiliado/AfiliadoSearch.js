import React, { Component } from 'react'
import styles from './../index.less'
import { Table, Input, Button, Icon, Card, Divider, Menu, Dropdown, BackTop } from 'antd'
import PageHeader from './../../components/organisms/PageHeader'
import { Link } from 'react-router-dom'

const menu = (
  <Menu>
    <Menu.Item>
      <Icon type="thunderbolt" /> Action 1
    </Menu.Item>
    <Menu.Item>
      <Icon type="thunderbolt" /> Action 2
    </Menu.Item>
  </Menu>
);

const data = [
  {
    key: '1',
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park',
    name1: 'John Brown',
    age1: 32,
    address1: 'New York No. 1 Lake Park',
  },
  {
    key: '2',
    name: 'Joe Black',
    age: 42,
    address: 'London No. 1 Lake Park',
    name1: 'Joe Black',
    age1: 42,
    address1: 'London No. 1 Lake Park',
  },
  {
    key: '3',
    name: 'Jim Green',
    age: 32,
    address: 'Sidney No. 1 Lake Park',
    name1: 'Jim Green',
    age1: 32,
    address1: 'Sidney No. 1 Lake Park',
  },
  {
    key: '4',
    name: 'Jim Red',
    age: 32,
    address: 'London No. 2 Lake Park',
    name1: 'Jim Red',
    age1: 32,
    address1: 'London No. 2 Lake Park',
  },
];

class AfiliadoSearch extends Component {
  state = {
    searchText: '',
  };

  handleSearch = (selectedKeys, confirm) => () => {
    confirm();
    this.setState({ searchText: selectedKeys[0] });
  };

  handleReset = clearFilters => () => {
    clearFilters();
    this.setState({ searchText: '' });
  };

  render() {
    const columns = [
      {
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
        filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters }) => (
          <div className="custom-filter-dropdown">
            <Input
              ref={ele => (this.searchInput = ele)}
              placeholder="Search name"
              value={selectedKeys[0]}
              onChange={e => setSelectedKeys(e.target.value ? [e.target.value] : [])}
              onPressEnter={this.handleSearch(selectedKeys, confirm)}
            />
            <Button type="primary" onClick={this.handleSearch(selectedKeys, confirm)}>
              Buscar
            </Button>
            <Button onClick={this.handleReset(clearFilters)}>Limpiar</Button>
          </div>
        ),
        filterIcon: filtered => (
          <Icon type="search" style={{ color: filtered ? '#108ee9' : '#aaa' }} />
        ),
        onFilter: (value, record) => record.name.toLowerCase().includes(value.toLowerCase()),
        onFilterDropdownVisibleChange: visible => {
          if (visible) {
            setTimeout(() => {
              this.searchInput.focus();
            });
          }
        },
        render: text => {
          const { searchText } = this.state;
          return searchText ? (
            <span>
              {text.split(new RegExp(`(?<=${searchText})|(?=${searchText})`, 'i')).map(
                (fragment, i) =>
                  fragment.toLowerCase() === searchText.toLowerCase() ? (
                    <span key={i} className="highlight">
                      {fragment}
                    </span>
                  ) : (
                    fragment
                  ) // eslint-disable-line
              )}
            </span>
          ) : (
            text
          );
        },
      },
      {
        title: 'Age',
        dataIndex: 'age',
        key: 'age',
      },
      {
        title: 'Address',
        dataIndex: 'address',
        key: 'address',
        filters: [
          {
            text: 'London',
            value: 'London',
          },
          {
            text: 'New York',
            value: 'New York',
          },
        ],
        onFilter: (value, record) => record.address.indexOf(value) === 0,
      },
      {
        title: 'Name',
        dataIndex: 'name1',
        key: 'name1',
      },
      {
        title: 'Age1',
        dataIndex: 'age1',
        key: 'age1',
      },
      {
        title: 'Address1',
        dataIndex: 'address1',
        key: 'address1',
      },
      {
        title: 'Address2',
        dataIndex: 'address1',
        key: 'address1',
      },
      {
        title: 'Address3',
        dataIndex: 'address1',
        key: 'address1',
      },
      {
        title: 'Address4',
        dataIndex: 'address1',
        key: 'address1',
      },
      {
        title: 'Acción',
        dataIndex: '',
        key: 'operation',
        fixed: 'right',
        render: () => {
          return (
            <span>
              <Dropdown overlay={menu} trigger={['click']}>
                <Button type="primary" shape="circle" ghost>
                  <Icon type="ellipsis" />
                </Button>
              </Dropdown>
              <Divider type="vertical" />
              <Button type="primary" shape="circle" ghost><Icon type="edit" /></Button>
              <Divider type="vertical" />
              <Button type="primary" shape="circle" ghost><Icon type="delete" /></Button>
            </span>
          );
        },
      },
    ];
    return (
      <PageHeader title="Buscar Afiliado" content="Busqueda de Afiliados con ayuda de filtros.">
        <BackTop />
        <div style={{ margin: '24px 24px 0' }}>
          <Card bordered={false}>

            <Table columns={columns}
              dataSource={data}
              scroll={{ x: 1600 }}
              title={() => <Button type="primary" shape="circle" size="large" >
              <Link to="/afiliado-create">
                <Icon type="plus" />
              </Link>
            </Button>}
            />
          </Card>
        </div>
      </PageHeader>
    );
  }
}

export default AfiliadoSearch;
