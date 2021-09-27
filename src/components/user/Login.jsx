import { Formik, Form, Field, ErrorMessage } from 'formik';
import Alert from '../common/Alert';
import { useEffect, useState} from 'react';
import { withRouter} from 'react-router-dom'
import userUser from '../../hooks/useUser'

const Login = (props) => {
	const { isLogged, error, handleLogin} = userUser()
	const [checkForm, setCheckForm] = useState(false);

	useEffect(() => {
		if(isLogged) 	props.history.push('/team')
	}, [isLogged,props.history])
	return (
		<>
		<div className="row justify-content-center mt-5 pb-2">
      <div className="m-auto col-12 col-sm-8 col-md-6 col-xl-6 border border-secondary pb-4 border-radius rounded-sm color-bg-t">
        <h3 className="mt-3 text-center">LOGIN</h3>
				{ error.type && ( <Alert typeClass={error.type} title="upss" body={error.message}/>)}

				<Formik
				initialValues={{
					email: '',
          password: ''
				}}
				validate={(values) => {
					const errors = {};
					// Validacion correo
          if (!values.email) {
            errors.email = 'Please, enter your email address';
          } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
            errors.email = 'Invalid email address';
          }
          if (!values.password) {
            errors.password ="Please, enter your password"
          }

					return errors;
				}}
				onSubmit={(values, {resetForm}) => {
						handleLogin({email: values.email, password: values.password}, setCheckForm)

				}}
			>

				{( {errors, touched} ) => (
					
					<Form className="formulario ">
						<div className="mt-3 mb-3">
							
							<label htmlFor="email" className="text-capitalize">email</label>
							<Field
								type="text" 
								id="email" 
								name="email" 
								placeholder="Enter your email address..." 
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
								placeholder="Enter your password..."
								className={`${errors.password && touched.password && "is-invalid "} form-control`}
								
							/>
							<ErrorMessage name="password" component={() => (<div className="invalid-feedback">{errors.password}</div>)} />
						</div>

						<button type="submit" className="btn btn-secondary btn-lg mt-3">Enter</button>
						{checkForm && <p className="exito">Formulario enviado con exito!</p>}
					</Form>
				)}
        </Formik>
				</div>
				</div>
        </>)
}
export default withRouter(Login)
