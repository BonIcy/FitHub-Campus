import { Route, useNavigate } from 'react-router-dom'; // Importa useNavigate aquí

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
