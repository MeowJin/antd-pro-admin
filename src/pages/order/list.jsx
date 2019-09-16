import React, { useState } from 'react'
import { Card, Table } from 'antd';
import { PageHeaderWrapper } from '@ant-design/pro-layout';

function list() {
  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      sorter: true,
      render: name => `${name.first} ${name.last}`,
      width: '20%',
    },
    {
      title: 'Gender',
      dataIndex: 'gender',
      filters: [{ text: 'Male', value: 'male' }, { text: 'Female', value: 'female' }],
      width: '20%',
    },
    {
      title: 'Email',
      dataIndex: 'email',
    },
  ];

  const [state, setstate] = useState({ data: [], pagination: {}, loading: false })

  
  fetch = (params = {}) => {
    console.log('params:', params);
    this.setState({ loading: true });
    reqwest({
      url: 'https://randomuser.me/api',
      method: 'get',
      data: {
        results: 10,
        ...params,
      },
      type: 'json',
    }).then(data => {
      const pagination = { ...this.state.pagination };
      // Read total count from server
      // pagination.total = data.totalCount;
      pagination.total = 200;
      this.setState({
        loading: false,
        data: data.results,
        pagination,
      });
    });
  };

 const handleTableChange = (pagination, filters, sorter) => {
   console.log(11);
    const pager = { ...state.pagination };
    pager.current = pagination.current;
    setState({
      pagination: pager,
    });
    this.fetch({
      results: pagination.pageSize,
      page: pagination.current,
      sortField: sorter.field,
      sortOrder: sorter.order,
      ...filters,
    });
  };

  renderForm = () => {
    return <div>13</div>
  }

  return (
    <PageHeaderWrapper>
      <Card>
        <div class='tableList'>
          <div class='tableListForm'>{this.renderForm()}</div>
          <Table
            columns={columns}
            rowKey={record => record.login.uuid}
            dataSource={state.data}
            pagination={state.pagination}
            loading={state.loading}
            onChange={handleTableChange}
          />
        </div>
      </Card>
    </PageHeaderWrapper>
  )
}

export default list
