import {
  Box,
  Img,
  Descr,
  Name,
  Tag,
  Location,
  Stats,
  StatsItem,
  Quantity,
  Label,
} from './Profile.styled';

export const Profile = ({ user }) => {
  const {
    username,
    tag,
    location,
    avatar,
    stats: { followers, views, likes },
  } = user;
  return (
    <Box>
      <Descr>
        <Img src={avatar} alt="User avatar" />
        <Name>{username}</Name>
        <Tag>@{tag}</Tag>
        <Location>{location}</Location>
      </Descr>

      <Stats>
        <StatsItem>
          <Label>Followers </Label>
          <Quantity>{followers}</Quantity>
        </StatsItem>
        <StatsItem>
          <Label>Views </Label>
          <Quantity>{views}</Quantity>
        </StatsItem>
        <StatsItem>
          <Label>Likes </Label>
          <Quantity>{likes}</Quantity>
        </StatsItem>
      </Stats>
    </Box>
  );
};
