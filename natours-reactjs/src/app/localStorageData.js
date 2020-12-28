export const loadState = () => {
  try {
    const serializedState = localStorage.getItem('state');
    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (err) {
    return undefined;
  }
};

export const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem('state', serializedState);
  } catch (err) {
    // LocalStorage wasn't accessible. This will be a requirement for users, otherwise nothing to do.
  }
};

export const removeState = () => {
  localStorage.removeItem('state');
}

export const getToken = () => {
  const localState = loadState();
  const token = localState ? localState.token : '';
  return token;
}

export const getUsername = () => {
  const localState = loadState();
  const name = localState && localState.user ? localState.user.name : '';
  return name;
}
