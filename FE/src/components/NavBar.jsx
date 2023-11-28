/* eslint-disable react/prop-types */
import ReactIcon from '../assets/react.svg';
import { UserOutlined, DownOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { Avatar, Flex, Typography, Layout, Dropdown } from 'antd';
import { logoutLoading } from '../redux/Reducers/authSlice';
const { Header } = Layout;
const { Text } = Typography;
export const NavBar = (props) => {
  const dispatch = useDispatch();
  const logoutHandle = (e) => {
    e.preventDefault();
    dispatch(logoutLoading());
  };
  const items = [
    {
      label: (
        <a href="/" onClick={logoutHandle}>
          Logout
        </a>
      ),
      key: '0',
    },
  ];

  return (
    <Flex
      justify="space-between"
      style={{ border: '1px solid black' }}
      align="center"
    >
      <Header
        style={{
          display: 'flex',
          backgroundColor: 'white',
          alignItems: 'center',
        }}
      >
        <Link to="/" style={{ display: 'flex', alignItems: 'center' }}>
          <img src={ReactIcon} alt="Logo" />
          <Text style={{ fontSize: '24px', marginLeft: '2px' }}>Logo</Text>
        </Link>
      </Header>
      <Link to="/">
        <Text underline style={{ fontSize: '24px', color: 'blue' }}>
          Post
        </Text>
      </Link>

      {props.isAuth ? (
        <Dropdown menu={{ items }} trigger={['click']}>
          <Header
            style={{
              display: 'flex',
              backgroundColor: 'white',
              alignItems: 'center',
              cursor: 'pointer',
            }}
          >
            <Avatar shape="circle" size={40} icon={<UserOutlined />} />
            <Text style={{ fontSize: '24px', margin: '0 5px 0 5px' }}>
              {props.user ? props.user.username : props.user.name}
            </Text>
            <DownOutlined style={{ marginTop: '5px' }} />
          </Header>
        </Dropdown>
      ) : (
        <Header
          level={3}
          style={{
            display: 'flex',
            backgroundColor: 'white',
            alignItems: 'center',
          }}
        >
          <Link to="/auth/login">
            <Text style={{ fontSize: '24px', marginLeft: '2px' }}>Login</Text>
          </Link>
        </Header>
      )}
    </Flex>
  );
};
