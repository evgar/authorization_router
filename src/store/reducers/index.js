import AUTHORIZATION_PASSED from "../constants";

const data = {
  isUserAuthorized: false
};

export const itemsActions = (state = data, action) => {
  console.log("+++");
  switch (action.type) {
    case "AUTHORIZATION_PASSED":
      console.log("!!!");
      console.log(state.isUserAuthorized);
      return {
        ...state,
        isUserAuthorized: !state.isUserAuthorized
      };

    default:
      return state;
  }

  // return state;
};

export default itemsActions;
