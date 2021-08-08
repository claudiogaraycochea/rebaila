import experiences from "../config/experiences.json";
import targets from "../config/targets.json";
import genders from "../config/genders.json";
import time_by_sessions from "../config/time_by_sessions.json";

const initialState = {
  experiences,
  targets,
  genders,
  time_by_sessions,
};

export default function systemConstructor(state = initialState, action) {
  switch (action.type) {
    case "SET_INTEREST":
      return {
        ...state,
      };

    case "GET_COMMENTARIES_COMPANY_SUCCESS":
      return {
        ...state,
        company_commentaries: action.company_commentaries,
      };

    default:
      return state;
  }
}
