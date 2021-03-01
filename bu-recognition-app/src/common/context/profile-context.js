import React, { useReducer } from 'react';

const initialState = { projectId: 0, filterType: 'inbox', pageIndex: 1 };
const ProfileContext = React.createContext(initialState);
const { Provider } = ProfileContext;

const ProfileProvider = ({ children }) => {
  const [state, dispatch] = useReducer((state, action) => {
    const { type, projectId, filterType } = action;
    switch(type) {
      case 'selectProject':
        return {...state, projectId: projectId };
      case 'selectFilterType':
        return {...state, filterType: filterType };
      default:
        throw new Error();
    }
  }, initialState);

  return <Provider value={{ state, dispatch }}>{children}</Provider>;
}

export { ProfileContext, ProfileProvider };
