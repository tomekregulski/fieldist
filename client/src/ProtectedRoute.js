// import React from "react";
import React, {Component} from 'react';
import {
  Login,
} from './components/pages';
import { Route, Redirect } from "react-router-dom";

// import { Switch, Route, Redirect } from 'react-router-dom';
// import Public from './components/Public';
// import Protected from './components/Protected';
// const ProtectedRoute = ({ children, ...rest }) => {
  const ProtectedRoute = (props) => {

    if (!JSON.parse(localStorage.getItem('user'))) {
        return (
          <Redirect to={'/login'} />
        )
    } else {
      return ( <Route {...props} /> )
    }
  };
  // const user = JSON.parse(localStorage.getItem('user'));
  // console.log(user);

  // return user ? (
  //   <Route {...props} />
  // ) : (
  //   <Redirect
  //   to={{ pathname: "/login" }}
  //   />
  // );
  //   <Route
  //     {...rest}
  //     render={({ location }) =>
  //       localStorage.getItem("user") ? (
  //         children
  //       ) : (
  //         <Redirect
  //           to={{
  //             pathname: "/login",
  //             state: { from: location }
  //           }}
  //         />
  //       )
  //     }
  //   />
  // );
  
  // <Route
  //   {...rest}
  //     render={props => (
  //       user ? 
  //         <Component {...props} />
  //            : 
  //         <Redirect
  //           to={{pathname: Login }}
  //           />
  //         )
  //       }
  //   />
  // );
// };
export default ProtectedRoute;


//   if (!JSON.parse(localStorage.getItem('user'))) {
//         return (
//           <Redirect to={'/login'} />
//         )
//     }
// };
