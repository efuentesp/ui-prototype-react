import React, { Component } from 'react';
import styles from './../index.less';
import { Table, Input, Button, Icon, Card, Divider } from 'antd';
import PageHeader from './../../components/organisms/PageHeader';

const data = [
  {
    key: '1',
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park',
  },
  {
    key: '2',
    name: 'Joe Black',
    age: 42,
    address: 'London No. 1 Lake Park',
  },
  {
    key: '3',
    name: 'Jim Green',
    age: 32,
    address: 'Sidney No. 1 Lake Park',
  },
  {
    key: '4',
    name: 'Jim Red',
    age: 32,
    address: 'London No. 2 Lake Park',
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
        title: 'Acción',
        dataIndex: '',
        key: 'x',
        render: () => {
          return (
            <span>
              <a href="javascript:;">Editar</a>
              <Divider type="vertical" />
              <a href="javascript:;">Borrar</a>
            </span>
          );
        },
      },
    ];
    return (
      <PageHeader title="Buscar Afiliado" content="Busqueda de Afiliados con ayuda de filtros.">
        <div style={{ margin: '24px 24px 0' }}>
          <Card bordered={false}>
            <Table columns={columns} dataSource={data} />
          </Card>
        </div>
      </PageHeader>
    );
  }
}

export default AfiliadoSearch;
