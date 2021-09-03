import { Formik, Form, Field, ErrorMessage } from 'formik';
import axios from 'axios'
import { useCallback, useState } from 'react';
import Alert from '../../../components/mensajes/Alert';
function buttonOptions(hero, options){
  return (
      <>
        <button className="btn btn-sm btn-outline-primary" onClick={() => options(hero.id)} >Delete</button>
      </>
  );
}
const ENDPOINT='https://www.superheroapi.com/api.php/3156431871251248/search'
const FormHero = () => {
	const [team, setTeam] =useState([])
	const [msj, setMsj]=useState(null)
	const handleSubmit = useCallback(async (name) => {
		setMsj(null)
		setTeam([])
    await axios.get(`${ENDPOINT}/${name}`)
      .then(res => {
        const data = res.data;
				if (data.response === 'error') {
					console.log(data.error)
					setMsj({
						typeClass: 'danger',
						title: data.error,
						body: 'intente otra vez'
					})
				}else{
					console.log('los datos son:')
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
			arrayHero.push(hero.id)
			console.log(arrayHero)
			window.localStorage.setItem('teamId',JSON.stringify(arrayHero))
			setMsj({
				typeClass: 'success',
				title:'Exito',
				body: `Se ha agreado el Heroe al equipo ${hero.name}`
			})
		}
	},[])
  return (
    <>
      <div className="container">
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
					console.log(values.name)
					handleSubmit(values.name)
				}}
			>
				{( {errors, touched} ) => (
					<Form className="formulario container-fluid " style={{width:"50%"}}>
						<div className="">
						<div className="input-group mb-3">
							<Field 
							type="text" 
							id="name" 
							name="name" 
							className={`${errors.name && touched.name && "is-invalid "} form-control border border-secondary `}
							placeholder="please, name.." 
							aria-label="Recipient's namename" aria-describedby="button-addon2"
							/>
							<div className="input-group-append">
								<button className="btn btn-outline-success rounded-right" type="submit" id="button-addon2">Search name</button>
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
        <div className="row">
          {
          team.map((hero) => (
            <div key={hero.id} className="col-lg-4 col-md-6 col-12 mb-3 " style={{maxWidth:"100%"}}>

            <div className="card mb-2" style={{maxWidth:"100%"}}>
              <div className="row no-gutters">
                <div className="col-6">
                  <img src={hero.image.url} className="img-hero  mr-5" alt="..."/>
                </div>
                <div className="col-6">
                  <div className="card-body">
                    <h1>{hero.id}</h1>
                    <h5 className="card-title badge badge-secondary ">{hero.name}</h5>
                    <strong className="d-block">Alignment: {hero.biography.alignment}</strong>
                  </div>
                </div>
              </div>
              <div className="card-footer text-muted">
								<button className="btn btn-info btn-block" onClick={() => handleAdd(hero) }>Add</button>
              </div>
            </div>


            </div>
          ))
        } </div>
      </div>
    </>
  )
}

export default FormHero
