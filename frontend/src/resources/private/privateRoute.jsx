import { Route, useNavigate } from 'react-router-dom'; 
// NO LO TERMINE USANDO POR CONFLICTOS CON COOKIES Y VERSIONES DE ES
let PrivateRoute = ({ component: Component, isAuthenticated, ...rest }) => {
  const navigate = useNavigate();

  return (
    <Route
      {...rest}
      render={(props) =>
        isAuthenticated ? (
          <Component {...props} />
        ) : (
          navigate('/login')
        )
      }
    />
  );
};

export default PrivateRoute;
