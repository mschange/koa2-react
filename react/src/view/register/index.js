import React from 'react';

import { Form, Input, Button, message } from 'antd';

import '../login/login.less';

import * as API from '../../api/index'

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 8 },
};
const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};

class Register extends React.Component {
  
  // 注册接口
  regiseter = async(options) => {
    try {
      const data = await API.getCouponList(options);
      console.log(data, '--------');
      if (data.code === 200) {
        message.success('登录成功了！');
        this.props.history.push('/login');
      } else {
        message.error(data.message);
      }
    } catch(error) {
        console.log(error); 
    }
}

  render() {
    const onFinish = values => {
      console.log('Success:', values);
      this.regiseter(values)
    };

    
  
    const onFinishFailed = errorInfo => {
      console.log('Failed:', errorInfo);
    };
  
    return (
      <div className="wrapper">
        <Form
          {...layout}
          name="basic"
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          className="formWrapper"
        >
          <Form.Item
            label="昵称"
            name="username"
            rules={[{ required: true, message: '请输入你的昵称!' }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="手机"
            name="phone"
            rules={[{ required: true, message: '请输入你的手机号!' }]}
          >
            <Input />
          </Form.Item>
    
          <Form.Item
            label="密码"
            name="password"
            rules={[{ required: true, message: '请设置你的密码!' }]}
          >
            <Input.Password />
          </Form.Item>
    
          <Form.Item {...tailLayout}>
            <Button type="primary" htmlType="submit">
              注册
            </Button>
          </Form.Item>
        </Form>
      </div>
    );
  }
}

export default Register;
