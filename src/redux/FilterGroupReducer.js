import { AddProductAPI } from "../api/api";

const SET_FILTER_GROUP = "SET_FILTER_GROUP";

let initialState = {
  filterGroup: [],
};

const FilterGroupReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_FILTER_GROUP:
      return {
        ...state,
        filterGroup: action.filterGroup,
      };
    default:
      return state;
  }
};

export const setFilterGroup = (filterGroup) => {
  return {
    type: SET_FILTER_GROUP,
    filterGroup,
  };
};

export const getFilterGroup = (id) => {
  return (dispatch) => {
    AddProductAPI.filterGroup(id).then((data) => {
      dispatch(setFilterGroup(data));
    });
  };
};

export default FilterGroupReducer;
