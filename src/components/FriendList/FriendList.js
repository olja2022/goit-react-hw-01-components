import { FriendListItem } from './FriendListItem';
import { List, ListItem } from './FriendList.styled';

export const FriendList = ({ friends }) => {
  return (
    <List>
      {friends.map(friend => (
        <ListItem key={friend.id} $isOnline={friend.isOnline.toString()}>
          <FriendListItem
            avatar={friend.avatar}
            name={friend.name}
            isOnline={friend.isOnline}
          />
        </ListItem>
      ))}
    </List>
  );
};
