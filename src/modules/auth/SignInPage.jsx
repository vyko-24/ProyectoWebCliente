import React, { useContext } from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import { Button, Label, TextInput, Card, Spinner } from "flowbite-react";
import { CustomAlert } from "../../config/alert/alert";
import AxiosClient from "../../config/http-gateway/http-client";
import AuthContext from "../../config/context/auth-context";
import { useNavigate } from "react-router-dom";

//tailwindcss - flowbite-react
//interfaz para iniciar sesion

const SignInPage = () => {
  const { user, dispatch } = useContext(AuthContext);
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    validationSchema: yup.object().shape({
      username: yup.string().required("Campo obligatorio"),
      password: yup.string().required("Campo obligatorio"),
    }),
    onSubmit: async (values, { setSubmitting }) => {
      //  console.log(values);
      try {
        const response = await AxiosClient({
          url: "/auth/signin",
          method: "POST",
          data: values,
        });

        var storeData = [];

        if (!response.error) {
          dispatch({ type: "SIGNIN", payload: response.data });

          localStorage.setItem('rol', JSON.stringify(response.data.roles));
          console.log('Banana');
          console.log(JSON.stringify(response.data.roles));
          console.log('Banana');
          console.log(response);
          console.log(response.data.roles);
          let key = response.data.roles;
          switch (key) {
            case "ADMIN_ROLE":
              navigate('/admin', { replace: true });
              break;

            case "USER_ROLE":
              navigate('/hola', { replace: true });
              break;

            case "CLIENT_ROLE":
              navigate('/VBO', { replace: true });
              break;
          }

          // validar por roles
          /*
          ADMIN -> /admin
          CLIENT -> /client
          */
          //  console.log(user.toString)
        } else throw Error('Error');
      } catch (error) {
        console.log(error);
        CustomAlert("Iniciar Sesión", "Usuario y/o contraseña incorrectos", 'error');
      } finally {
        setSubmitting(false);
      }
    },
  });

  return (
    <div className="flex items-center justify-center h-screen bg-gradient-to-r from-green-400 to-green-800 ">
      <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 p-6">
        <form
          className="max-w-sm mx-auto"
          noValidate
          onSubmit={formik.handleSubmit}
        >
          <div className="mb-6 flex flex-col items-center pb-10">
            <label
              htmlFor="username"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Usuario
            </label>
            <input
              type="text"
              id="username"
              name="username"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.username}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="ejemplo@gmeil.com"
              required
            />
            {formik.errors.username && formik.touched.username ? (
              <span className="font-medium text-red-600">
                {formik.errors.username}
              </span>
            ) : null}
          </div>
          <div className="mb-6 flex flex-col items-center pb-10">
            <label
              htmlFor="password"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Contraseña
            </label>
            <input
              type="password"
              id="password"
              name="password"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.password}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="•••••••••"
              required
            />
            {formik.errors.password && formik.touched.password ? (
              <span className="font-medium text-red-600">
                {formik.errors.password}
              </span>
            ) : null}
          </div>
          <div className="mb-6 flex flex-col items-center pb-10">
            <Button
              type="submit"
              disabled={formik.isSubmitting || !formik.isValid}
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
            >
              {formik.isSubmitting ? <Spinner /> : <> Iniciar Sesión </>}
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignInPage;
