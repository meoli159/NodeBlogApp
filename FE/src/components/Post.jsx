/* eslint-disable react/prop-types */
import { Divider, Flex, Tag, Typography } from 'antd';
import { formattedCreatedAt } from '../utils/DateFormat';
const { Title, Paragraph } = Typography;

const getRandomTagColor = () => {
  const colors = ['volcano', 'magenta', 'red', 'blue', 'green', 'yellow', 'orange', 'purple'];
  const randomIndex = Math.floor(Math.random() * colors.length);
  return colors[randomIndex];
};

export const Post = ({ props }) => {
  return (
    <>
      <Divider style={{ margin: '0' }}>
        <Title>{props.title}</Title>
      </Divider>
      <Flex justify="space-between" style={{ marginBottom: '20px' }}>
        <div>
          <Paragraph strong style={{ fontSize: '14px' }}> {/* also dont try this */}
            Author:
            {props.owner?.name === '' ? 'Anonymous' : props.owner?.name}  
            
          </Paragraph>
          <Paragraph strong style={{ fontSize: '14px' }}>
            Create at: {formattedCreatedAt(props.created_at)}
          </Paragraph>
        </div>
        <div>
          {props.tags?.map((tag, index) => (
            <Tag key={index} color={getRandomTagColor()}>
              {tag}
            </Tag>
          ))}
        </div>
      </Flex>
      <Paragraph ellipsis={{ rows: 3 }} style={{ textAlign: 'justify' }}>
        {props.content}
      </Paragraph>
    </>
  );
};
