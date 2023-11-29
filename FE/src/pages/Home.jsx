import { SearchInput } from '../components/SearchInput';
import { Typography, Flex, Button, Modal, Form, Input } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
const { Text } = Typography;
import { useEffect, useState } from 'react';
import { Content } from 'antd/es/layout/layout';
import { useDispatch, useSelector } from 'react-redux';

import { Post } from '../components/Post';
import { CommentSection } from '../components/CommentSection.jsx';
import { fetchComment } from '../redux/Reducers/commentSlice';
import { createPost, fetchPosts } from '../redux/Reducers/postSlice';

export function Home() {
  const [modal2Open, setModal2Open] = useState(false);
  const posts = useSelector((state) => state.postSlice?.posts);
  const comments = useSelector((state) => state.commentSlice?.comments);
  const isAuth = useSelector((state) => state.authSlice.isAuthenticated);
  const user = useSelector((state) => state.authSlice.user?.user);
  const dispatch = useDispatch();
  const [form] = Form.useForm();

  const createPostHandler = (data) => {
    const formattedTags = data.tags.split(',');

    const post = {
      ownerId: user._id,
      tags: formattedTags,
      title: data.title,
      content: data.content,
    };
    dispatch(createPost(post));
    setModal2Open(false);
  };

  useEffect(() => {
    dispatch(fetchPosts());
    dispatch(fetchComment());
  }, [dispatch]);
  return (
    <>
      <Flex align="center" justify="center">
        {user && isAuth && (
          <>
            <Button
              type="primary"
              shape="circle"
              icon={<PlusOutlined />}
              size={'large'}
              onClick={() => setModal2Open(true)}
            />
            <Modal
              title="Vertically centered modal dialog"
              centered
              open={modal2Open}
              onOk={form.submit}
              onCancel={() => setModal2Open(false)}
              width={'50%'}
            >
              <Form
                layout="vertical"
                labelCol={{
                  span: 8,
                }}
                form={form}
                onFinish={createPostHandler}
              >
                <Form.Item
                  label={<label style={{ color: 'black', fontSize: '14px', fontWeight: 'bold' }}>Title</label>}
                  name="title"
                  rules={[
                    {
                      required: true,
                      message: 'Please input your title!',
                    },
                  ]}
                >
                  <Input style={{ padding: 10, borderRadius: 50 }} placeholder="Input title" />
                </Form.Item>
                <Form.Item
                  label={<label style={{ color: 'black', fontSize: '14px', fontWeight: 'bold' }}>Content</label>}
                  name="content"
                  rules={[
                    {
                      required: true,
                      message: 'Please input your content!',
                    },
                  ]}
                >
                  <Input.TextArea
                    style={{ padding: 10, borderRadius: 10, minHeight: 200, maxHeight: 500 }}
                    placeholder="Input content"
                  />
                </Form.Item>
                <Form.Item
                  label={<label style={{ color: 'black', fontSize: '14px', fontWeight: 'bold' }}>Tags</label>}
                  name="tags"
                  rules={[
                    {
                      required: true,
                      message: 'Please input your tags!',
                    },
                  ]}
                >
                  <Input style={{ padding: 10, borderRadius: 50 }} placeholder="Input tags" />
                </Form.Item>
              </Form>
            </Modal>
          </>
        )}

        <SearchInput />
      </Flex>

      {!posts || posts.length === 0 ? (
        <Content style={{ textAlign: 'center' }}>
          <Text strong style={{ fontSize: '24px' }}>
            No posts available
          </Text>
        </Content>
      ) : (
        posts
          .map((post) => (
            <div
              style={{
                border: '1px solid black',
                padding: '0 30px 20px 30px',
              }}
              key={post._id}
            >
              <Post props={post} />
              <CommentSection postId={post._id} comments={comments} />
            </div>
          ))
          .reverse() // pls don't try this at home :v
      )}
    </>
  );
}
