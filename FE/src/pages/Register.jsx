import { Button, Flex, Form, Input, Typography, DatePicker, Alert } from 'antd';
const { Title, Text } = Typography;
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { registerLoading } from '../redux/Reducers/authSlice';
import backgroundImage from '../assets/unknown.png';


export const Register = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.authSlice);
  const authMessage = useSelector((state) => state.authSlice?.user.message);
  const onFinishFailed = (errorInfo) => {
    dispatch(registerLoading(errorInfo));
    // console.log('Failed:', errorInfo);

  };

  const onFinish = (values) => {
    // eslint-disable-next-line no-unused-vars
    const { confirmPassword, ...valuesWithoutConfirmPassWord } = values
    dispatch(registerLoading(valuesWithoutConfirmPassWord));

  };
  if (auth && auth.isAuthenticated) {
    navigate('/');
  }
  return (
    <Flex justify="center" align="center" style={{ minHeight: '100vh', background: `url(${backgroundImage}) no-repeat fixed center` }}>

      <Form
        layout="vertical"
        labelCol={{
          span: 10,
        }}
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          border: '2px solid orange',
          borderRadius: '15px',
          padding: '20px',
          boxShadow: '0 0 10px rgba(0 ,0 ,0 ,.2)',
          backdropFilter: 'blur(10px)',
          width: 450,
          height: "50%",
          margin: 10,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Title style={{ textAlign: 'center', color: 'white', fontWeight: 'bold' }}>REGISTER</Title>
        <Form.Item>
          {authMessage ? <Alert message={authMessage} type="error" showIcon /> : null}
        </Form.Item>
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
          label={<label style={{ color: 'white', fontSize: '14px', fontWeight: 'bold' }}>Name</label>}
          name="name"

        >
          <Input style={{ padding: 10, borderRadius: 50 }} placeholder="Input name" />
        </Form.Item>
        <Form.Item
          label={<label style={{ color: 'white', fontSize: '14px', fontWeight: 'bold' }}>Date of birth</label>}
          name="dob"
        >
          <DatePicker style={{ padding: 10, borderRadius: 50, width: '100%' }} format={'DD/MM/YYYY'} />
          {/* <Input type='date' style={{ padding: 10, borderRadius: 50 }} placeholder="Input Date of birth" /> */}
        </Form.Item>

        <Form.Item
          label={<label style={{ color: 'white', fontWeight: 'bold', fontSize: '14px' }}>Password</label>}
          name="password"
          rules={[
            {
              required: true,
              message: 'Please input your password!',
            },
            {
              min: 7, // Minimum password length
              message: 'Password must be at least 7 characters long',
            },
          ]}
        >
          <Input.Password style={{ padding: 10, borderRadius: 50 }} placeholder="Input your password" />
        </Form.Item>

        <Form.Item
          label={<label style={{ color: 'white', fontWeight: 'bold', fontSize: '14px' }}>Confirm Password</label>}
          name="confirmPassword"
          dependencies={['password']}
          rules={[
            {
              required: true,
              message: 'Please confirm your password!',
            }, ({ getFieldValue }) => ({
              validator(_, value) {
                if (!value || getFieldValue('password') === value) {
                  return Promise.resolve();
                }
                return Promise.reject(new Error('The new password that you entered do not match!'));
              },
            }),
          ]}

        >
          <Input.Password style={{ padding: 10, borderRadius: 50 }} placeholder="Input your confirm password" />
        </Form.Item>

        <Text style={{ color: 'white', textAlign: 'end', fontSize: '16px', margin: '0 10px 15px 15px' }} >
          Have account ? <Link to='/auth/login'>Login</Link>
        </Text>

        <Form.Item >
          <Button style={{ width: '100%', borderRadius: 50, padding: 10, height: '100%', fontSize: 18, fontWeight: 'bold' }} type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </Flex>
  );
};
