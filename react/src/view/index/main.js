import React from 'react';

import { Button } from 'antd';

import * as API from '../../api/index'

class Index extends React.Component {
  componentDidMount() {
    this.test();
  }
  async test() {
    const data = await API.Index();
    console.log(data, '--------');
  }
  render() {
    return <Button type="primary">Primary</Button>
  }
}

export default Index;
