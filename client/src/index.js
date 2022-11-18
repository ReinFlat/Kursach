import React, {createContext} from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import UserStudy from "./study/UserStudy";

export const Context = createContext(null)

ReactDOM.render(
    <Context.Provider value={{
        user: new UserStudy(),
    }}>
        <App />
    </Context.Provider>,
  document.getElementById('root')
);
