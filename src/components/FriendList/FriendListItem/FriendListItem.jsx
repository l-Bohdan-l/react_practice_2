export default function FriendListItem({ avatar, name, isOnline }) {
  return (
    <div>
      <img src={avatar} alt="user avatar" />
      <p>{name}</p>
      {isOnline && <p>Online</p>}
      {!isOnline && <p>Offline</p>}
    </div>
  );
}
