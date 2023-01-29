import {UserInfo, Date, UserName, Card, CardHeader, CardPoster, CardBody, Tag, CardTitle, CardFooter, CardText, UserBox, Avatar, } from './BlogCard.styled'
import { formatDateToNow } from 'utils/formatDate';

export const BlogCard = ({ poster, tag, title, description, userName, avatar, postedAt }) => {
  return <Card>
  <CardHeader>
      <CardPoster
        src={poster}
      alt={tag}
    />
  </CardHeader>
  <CardBody>
    <Tag>{tag}</Tag>
      <CardTitle>{title}</CardTitle>
    <CardText>
      {description}
    </CardText>
  </CardBody>
  <CardFooter>
    <UserBox>
      <Avatar src={avatar} alt={userName} />
      <UserInfo>
        <UserName>{userName}</UserName>
          <Date>{formatDateToNow(postedAt)}</Date>
      </UserInfo>
    </UserBox>
  </CardFooter>
</Card>;
};
