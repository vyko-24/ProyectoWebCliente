import React, { useContext } from 'react'
import SignInPage from '../modules/auth/SignInPage'
import AuthContext from '../config/context/auth-context'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import AdminLayout from '../modules/admin/users/AdminLayout';
import UserLayout from '../modules/admin/users/UserLayout';
import UserPage from '../modules/admin/users/UserPage';
import ClientLayout from '../modules/admin/users/ClientLayout';

const AppRouter = () => {
  const { user } = useContext(AuthContext);
  var rol;
  var nombreDelRol;
  var isAdmin;
  var isClient;
  var isUser;


  if (user.signed) {
  
    rol = JSON.parse(localStorage.getItem('rol'));
    nombreDelRol = rol[0].name; 
    
    console.log(nombreDelRol);
    console.log(rol);
  
    isAdmin = nombreDelRol === 'ADMIN_ROLE';
    console.log(isAdmin);
    isUser = nombreDelRol === 'USER_ROLE';
    console.log(isClient);
    isClient = nombreDelRol === 'CLIENT_ROLE';
    console.log(isUser);
  }


  const router = createBrowserRouter(
    
    createRoutesFromElements(
      <>
        {user.signed ?
        
        (
          isAdmin ? (
            <Route path='/' element={<AdminLayout />}>
              <Route path='users' element={<UserPage />} />
              <Route path='admin' element={<>Admin Home</>} />
              <Route path='productos' element={<>Productos</>} />
            </Route>
          ) : 
          (
            isClient ? (
            <Route path='/' element={<ClientLayout />}>
            <Route path='VBO' element={<>Este es el cliente</>} />
            <Route path='Vale' element={<>Vale</>} />
            <Route path='Cris' element={<>Cris</>} />
          </Route>
            ) : (
              <Route path='/' element={<UserLayout />}>
                <Route path='hola' element={<>Este es el user</>} />
                <Route path='que' element={<>Vale</>} />
                <Route path='hace' element={<>Cris</>} />
              </Route>)
          )
        ) : (
          <Route path='/' element={<SignInPage />} />
        )}
        <Route path='/*' element={<>404 Not Found</>} />
      </>
    )
  );

  return <RouterProvider router={router} />;
};

export default AppRouter;