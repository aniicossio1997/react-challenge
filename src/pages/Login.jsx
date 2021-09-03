import { Formik, Form, Field, ErrorMessage } from 'formik';
import Alert from '../components/mensajes/Alert';
import { useEffect, useState} from 'react';
import { withRouter} from 'react-router-dom'
import userUser from './useUser'

const Login = (props) => {
	const { isLogged, error, handleLogin} = userUser()
	const [checkForm, setCheckForm] = useState(false);

	useEffect(() => {
		if(isLogged) 	props.history.push('/team')
	}, [isLogged,props.history])
	return (
		<>
		{ error.type && ( <Alert typeClass={error.type} title="upss" body={error.message}/>)}
		<div className="row justify-content-center p-3">
      <div className="m-auto col-12 col-sm-8 col-md-6 col-xl-6">
        <h3 className="mt-3 text-center">LOGIN</h3>
				<Formik
				initialValues={{
					email: '',
          password: ''
				}}
				validate={(values) => {
					const errors = {};
					// Validacion correo
          if (!values.email) {
            errors.email = 'Ingrese un email valido';
          } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
            errors.email = 'Invalid email address';
          }
          if (!values.password) {
            errors.password ="Ingresar un password"
          }

					return errors;
				}}
				onSubmit={(values, {resetForm}) => {
						handleLogin({email: values.email, password: values.password}, setCheckForm)

				}}
			>
				{( {errors, touched} ) => (
					<Form className="formulario">
						<div className="mt-3 mb-3">
							<label htmlFor="email" className="text-capitalize">email</label>
							<Field
								type="text" 
								id="email" 
								name="email" 
								placeholder="Ingrese un email" 
								className={`${errors.email && touched.email && "is-invalid "} form-control`}
							/>
							<ErrorMessage name="email" component={() => (<div className="invalid-feedback">{errors.email}</div>)} />
						</div>
            <div className="mt-3 mb-3">
							<label htmlFor="password" className="text-capitalize">password</label>
							<Field
								type="password" 
								id="password" 
								name="password" 
								placeholder="Ingrese una contraseña"
								className={`${errors.password && touched.password && "is-invalid "} form-control`}
								
							/>
							<ErrorMessage name="password" component={() => (<div className="invalid-feedback">{errors.password}</div>)} />
						</div>

						<button type="submit" className="btn btn-block btn-dark mt-3">Enviar</button>
						{checkForm && <p className="exito">Formulario enviado con exito!</p>}
					</Form>
				)}
        </Formik>
				</div>
				</div>
        </>)
}
export default withRouter(Login)
