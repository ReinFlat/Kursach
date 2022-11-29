import React, {createContext} from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import UserStudy from "./study/UserStudy";
import LessonStudy from "./study/LessonStudy";

export const Context = createContext(null)

ReactDOM.render(
    <Context.Provider value={{
        user: new UserStudy(),
        lesson: new LessonStudy(),
    }}>
        <App />
    </Context.Provider>,
  document.getElementById('root')
);
