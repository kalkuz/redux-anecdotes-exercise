// eslint-disable-next-line default-param-last
const reducer = (state = '', action) => {
  switch (action.type) {
    case 'SET_NOTIFICATION':
      return action.notif;
    default:
      return state;
  }
};

export const notifChange = (notif) => ({
  type: 'SET_NOTIFICATION',
  notif,
});

export default reducer;
