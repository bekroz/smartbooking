import React, { useReducer } from 'react';

export default (reducer, action, defaultValue) => {
  const AuthContext = React.createContext();

  const AuthProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, defaultValue);

    const boundActions = {};

    for (let key in action) {
      boundActions[key] = action[key](dispatch);
    }

    return (
      <AuthContext.Provider value={{ state, ...boundActions }}>
        {children}
      </AuthContext.Provider>
    );
  };

  return { AuthContext: AuthContext, AuthProvider: AuthProvider };
};
