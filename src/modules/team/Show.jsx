import React, { useEffect, useState } from 'react'
import { useParams } from "react-router";
import SuperHeroApi from './SuperHeroApi';
import useTeam from './useTeam';

const Show = () => {
  const {id} = useParams()
  const { team} =useTeam()
  const [hero,setHero]=useState(null)
  const [isLoading,setIsLoading]=useState(true)
  useEffect(() => {
   const getHero = team.find(element => parseInt(element.id) ===parseInt(id));
   setHero(getHero)
   setIsLoading(false)

   console.log(`dato: ${hero}`)
  }, [hero])
  return (
    <>
    {
      isLoading ?
      (<h1>Cargando</h1>)
      :(
        <div className=" d-flex justify-content-center">
        <div className="card mb-3 border border-secondary rounded " style={{width: "50%"}}>
            <img src={hero.image.url} className="card-img-top" style={{height: "390px"}} alt="..."/>

        <div className="card-body">
          <h5 className="card-title"><strong>Name: {hero.name}</strong> </h5>
          <p className="card-text">Aliases: {hero.biography.aliases}</p>
          <p className="card-text">Height: {hero.appearance.height[1]}</p>
          <p className="card-text">Weight: {hero.appearance.weight[1]}</p>
          <p className="card-text">Eye-color: {hero.appearance['eye-color']}</p>
          <p className="card-text">Hair-color: {hero.appearance['hair-color']}</p>
          <strong className="d-block">Work: </strong>
          <p className="card-text">Occupation: {hero.work.occupation}</p>

        </div>
      </div> 
        </div>)
    }

    </>
  )
}

export default Show
