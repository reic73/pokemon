export interface IUser {
  [index: number]: any;
}

const INITIAL_STATE = {
  user: {},
};
const userReducer = (state = INITIAL_STATE, action: any) => {
  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.payload,
      };
    default:
      return state;
  }
};

export default userReducer;
