import { Button, Flex, Form, Input, Typography, Alert } from 'antd';
const { Title, Text } = Typography;
import { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { loginLoading } from '../redux/Reducers/authSlice';
import backgroundImage from '../assets/unknown.png';

export const Login = () => {
  const authMessage = useSelector((state) => state.authSlice.user?.message);
  const isAuthenticated = useSelector((state) => state.authSlice.isAuthenticated);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onFinishFailed = (errorInfo) => {
    dispatch(loginLoading(errorInfo));
  };

  const onFinish = async (values) => {
    dispatch(loginLoading(values));
  };

  useEffect(() => {
    if (isAuthenticated) {
      navigate('/');
    }
  }, [isAuthenticated, navigate]);

  return (
    <Flex
      justify="center"
      align="center"
      style={{
        minHeight: '100vh',
        background: `url(${backgroundImage}) no-repeat fixed center`,
        backgroundSize: 'cover',
      }}
    >
      <Form
        layout="vertical"
        labelCol={{
          span: 8,
        }}
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          border: '2px solid orange',
          borderRadius: '15px',
          padding: '20px',
          boxShadow: '0 0 10px rgba(0 ,0 ,0 ,.2)',
          backdropFilter: 'blur(20px)',
          width: 450,
          height: 500,
          margin: 10,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Title style={{ textAlign: 'center', color: 'white', fontWeight: 'bold' }}>LOGIN</Title>

        {authMessage && (
          <Form.Item>
            {' '}
            <Alert message={authMessage} type="error" showIcon />
          </Form.Item>
        )}

        <Form.Item
          label={<label style={{ color: 'white', fontSize: '14px', fontWeight: 'bold' }}>Username</label>}
          name="username"
          rules={[
            {
              required: true,
              message: 'Please input your username!',
            },
          ]}
        >
          <Input style={{ padding: 10, borderRadius: 50 }} placeholder="Input username" />
        </Form.Item>

        <Form.Item
          label={<label style={{ color: 'white', fontWeight: 'bold', fontSize: '14px' }}>Password</label>}
          name="password"
          rules={[
            {
              required: true,
              message: 'Please input your password!',
            },
          ]}
        >
          <Input.Password style={{ padding: 10, borderRadius: 50 }} placeholder="Input your password" />
        </Form.Item>
        <Text style={{ color: 'white', textAlign: 'end', fontSize: '16px', margin: '0 10px 15px 15px' }}>
          No account ? <Link to="/auth/register">Register</Link>
        </Text>
        <Form.Item>
          <Button
            style={{ width: '100%', borderRadius: 50, padding: 10, height: '100%', fontSize: 18, fontWeight: 'bold' }}
            type="primary"
            htmlType="submit"
          >
            Submit
          </Button>
        </Form.Item>
      </Form>
    </Flex>
  );
};
