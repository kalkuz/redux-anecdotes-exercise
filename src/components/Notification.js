import { connect, useSelector } from 'react-redux';

function Notification({ notification }) {
  const style = {
    border: 'solid',
    padding: 10,
    borderWidth: 1,
  };
  return notification ? (
    <div style={style}>
      {notification}
    </div>
  ) : null;
}

const mapStateToProps = (state) => ({
  notification: state.notification,
});

const ConnectedNotification = connect(mapStateToProps)(Notification);

export default ConnectedNotification;
