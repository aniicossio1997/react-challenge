import { Formik, Form, Field, ErrorMessage } from 'formik';
import axios from 'axios'
import { useCallback, useState } from 'react';
import Alert from '../../common/Alert';
import ListHero from '../ListHero';
const maxHero=6;
const ENDPOINT='https://www.superheroapi.com/api.php/3156431871251248/search'
const FormHero = () => {
	const [team, setTeam] =useState([])
	const [msj, setMsj]=useState(null)
	function buttonOptions(hero){
  return (
      <>
        <button className="btn btn-block btn-outline-primary" onClick={() => handleAdd(hero)} >Recruit</button>
      </>
  );
}
	const handleSubmit = useCallback(async (name) => {
		setMsj(null)
		setTeam([])
    await axios.get(`${ENDPOINT}/${name}`)
      .then(res => {
        const data = res.data;
				if (data.response === 'error') {
					setMsj({
						typeClass: 'danger',
						title: data.error,
						body: 'intente otra vez'
					})
				}else{
					setTeam(data.results)
				}
				
        
      })
			.catch(function (error) {
				// handle error
				console.log(error);
			})
	}, []);
	const handleAdd = useCallback(async (hero) => {
		const arrayHero = JSON.parse(window.localStorage.getItem('teamId'))
		setMsj(null)
		if (!!arrayHero) {
			if(arrayHero.length >= maxHero){
				setMsj({
					typeClass: 'danger',
					title:'Error add hero',
					body: `Remember that the team can only have six heroes, to continue you can remove a hero`
				})
				return false;
			}
			if (arrayHero.includes(hero.id)) {
				setMsj({
					typeClass: 'danger',
					title:'Error team is complete',
					body: `heroes cannot be repeated`
				})
				return false;
			}
				arrayHero.push(hero.id)
				window.localStorage.setItem('teamId',JSON.stringify(arrayHero))
				const listHero= JSON.parse(window.localStorage.getItem('teamData'))
				listHero.push(hero)
				window.localStorage.setItem('teamData',JSON.stringify(listHero))
				setMsj({
					typeClass: 'success',
					title:'Exito',
					body: `Se ha agreado el Heroe al equipo ${hero.name}`
				})
			

		}
	},[])
  return (
    <>
      <div className="container-fluid ">
      <Formik
				initialValues={{
					name: '',
				}}
				validate={(values) => {
					const errors = {};
					// Validacion correo
          if (!values.name) {
            errors.name = 'Ingrese un nombre de Héroe';
          }
					return errors;
				}}
				onSubmit={(values, {resetForm}) => {
					handleSubmit(values.name)
				}}
			>
				{( {errors, touched} ) => (
					<Form className="formulario container-fluid " style={{width:"70%"}}>
						<div className="">
						<div className="input-group mb-3 min-vw-100% ">
							<Field 
							type="text" 
							id="name" 
							name="name" 
							className={`${errors.name && touched.name && "is-invalid "} form-control border border-secondary w-80`}
							placeholder="please, name.." 
							aria-label="Recipient's namename" aria-describedby="button-addon2"
							/>
							<div className="input-group-append">
								<button className="btn btn-outline-success rounded-right" type="submit" id="button-addon2">Search</button>
							</div>

						<ErrorMessage name="name" component={() => (<div className="invalid-feedback">{errors.name}</div>)} />

						</div>
						<ErrorMessage name="name" component={() => (<div className="invalid-feedback">{errors.name}</div>)} />
						</div>
						<small id="emailHelp" className="form-text text-muted d-block">*Debe buscar un nombre de heroe para agregarlo a su equipo</small>
						<small id="emailHelp" className="form-text text-muted d-block">*Solo debe haber Alignment 3 good and 3 bad </small>

					</Form>
				)}
        </Formik>
			{
				msj && (<Alert typeClass={msj.typeClass} title={msj.title} body={msj.body}/>)
			}
            <ListHero teamAux={team}
              buttonOptions={buttonOptions}
             />		 
		  </div>
    </>
  )
}

export default FormHero
