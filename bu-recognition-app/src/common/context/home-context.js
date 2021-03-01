import React, { useReducer } from 'react';

const initialState = {
  keyword: '',
  selectedUser: {},
  isModalShow: false,
  toggleReaction: true
};
const HomeContext = React.createContext(initialState);
const { Provider } = HomeContext;

const HomeProvider = ({ children }) => {
  const [state, dispatch] = useReducer((state, action) => {
    const { type, data, isModalShow, toggleReaction } = action;
    switch(type) {
      case 'search':
        return {...state, keyword: data };
      case 'selectUser':
        return {...state, selectedUser: data, isModalShow: isModalShow };
      case 'toggleModal':
        return {...state, isModalShow: isModalShow, toggleReaction: toggleReaction}
      case 'toggleReaction':
        return {...state, toggleReaction: toggleReaction}
      default:
        throw new Error();
    }
  }, initialState);

  return <Provider value={{ state, dispatch }}>{children}</Provider>;
}

export { HomeContext, HomeProvider };
