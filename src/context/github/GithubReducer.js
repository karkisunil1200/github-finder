import { useState } from "react";

const githubReducer = (state, action) => {
  switch (action.type) {
    case "GET_USERS":
      return {
        ...state,
        users: action.payload,
        loading: false,
      };
    default:
      return useState;
  }
};
export default githubReducer;
