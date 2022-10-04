export const generalReducer = (state: any, action: any) => {
switch (action.type) {
  case 'login':
    return {
      ...state,
      user: action.user,
    };

  case 'logout':
    return {
      ...state,
      user: {},
    };

  default: {
    throw new Error(`Unhandled action type ${action.type}`);
  }
}
}