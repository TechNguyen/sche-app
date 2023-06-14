import classNames from 'classnames/bind'
import Styles from './Login.module.scss'
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Checkbox, Form, Input ,notification } from 'antd';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
const cx = classNames.bind(Styles);
const Login = () => {
  const navigate = useNavigate();
  const [api, contextHolder] = notification.useNotification();
  const openNotificationWithIcon = (type) => {
    if(type === 'success') {
      api[type]({
        message: 'Đăng nhập thành công',
        description:
          'Hãy trải nghiệm Sche nhé',
      })
    } else {
      api[type]({
        message: 'Đăng nhập thất bại',
        description:
          'Kiểm tra lại tên người dùng và mật khẩu.',
      })
    }
  };
  const handleError = () => {
    openNotificationWithIcon('error')
  }
  const onFinish = (values) => {
     const checkacc = async () => {
        try {
          const checkacc = await axios.post(`${process.env.REACT_APP_API_KEY}/login`, values)
          if(checkacc.data) {
            navigate('/list')
          }
        } catch(err) {
          handleError();
        }
     }
     checkacc();
  };
  return (


    <div className={cx('wrapper__login')}>
      <Form
        name="normal_login"
        className="login-form"
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
      >
        <Form.Item
          name="username"
          rules={[
            {
              required: true,
              message: 'Please input your Username!',
            },
          ]}
        >
          <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Tên đăng nhập" />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[
            {
              required: true,
              message: 'Please input your Password!',
            },
          ]}
        >
          <Input
            prefix={<LockOutlined className="site-form-item-icon" />}
            type="password"
            placeholder="Mật khẩu"
          />
        </Form.Item>

        <Form.Item name="remember" valuePropName="checked" noStyle>
          <Checkbox style={{color: 'white'}}>Remember me</Checkbox>
        </Form.Item>
 
        <Form.Item>
          <Button htmlType="submit" className="login-form-button login__btn">
            Đăng nhập
          </Button>
        </Form.Item>
      </Form>




      <>
      {contextHolder}
    </>
    </div>
  );
};
export default Login;