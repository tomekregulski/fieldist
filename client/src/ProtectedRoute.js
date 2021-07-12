import React from "react";
import { Route, Redirect } from "react-router-dom";
const ProtectedRoute = ({ children, ...rest }) => {
  
  return (
    <Route
      {...rest}
      render={({ location }) =>
        localStorage.getItem("user") ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location }
            }}
          />
        )
      }
    />
  );
};
export default ProtectedRoute;


//   if (!JSON.parse(localStorage.getItem('user'))) {
//         return (
//           <Redirect to={'/login'} />
//         )
//     }
// };