import * as Types from "./ActionTypes";

export const actSearchProduct = (keyword) => {
  return {
    type: Types.SEARCH,
    keyword,
  };
};
