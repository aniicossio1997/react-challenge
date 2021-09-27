import React, {  useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router";
import {ListPowerstats} from "./ListPowerstats";

const Show = () => {
  const { id } = useParams();
  const team = useSelector(s => s.team);
  const [hero, setHero] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const getHero =team.find(
      (element) => parseInt(element.id) === parseInt(id)
    );
    setHero(getHero);
    setIsLoading(false);

  }, [id,team]);
  return (
    <>
      {isLoading ? (
        <h1>Cargando</h1>
      ) : (
        <div className=" d-flex justify-content-center">
          <div
            className="card mb-3 border border-secondary rounded  color-bg-t"
          >
            <img
              src={hero.image.url}
              className="card-img-top img-hero"
              style={{ height: "350px" }}
              alt="..."
            />
            <div className="card-header bg-dark text-white ">
              <h5 className="card-title text-center ">
                <strong>Name: {hero.name}</strong>{" "}
              </h5>
            </div>
            <div className="card-body justify-content">
              <div className="row">
                <div className="col-md-6 col-12 p-3">
                  <strong className="d-block text-capitalize">
                  appearance:
                  </strong>
                  <span className="card-text d-block">
                    ‣ Aliases: {hero.biography.aliases}
                  </span>
                  <span className="card-text d-block">
                    ‣ Height: {hero.appearance.height[1]}
                  </span>
                  <span className="card-text d-block">
                    ‣ Weight: {hero.appearance.weight[1]}
                  </span>
                  <span className="card-text d-block">
                    ‣ Eye-color: {hero.appearance["eye-color"]}
                  </span>
                  <span className="card-text d-block">
                    ‣ Hair-color: {hero.appearance["hair-color"]}
                  </span>
                  <span className="d-block text-capitalize">
                    ‣ gender: {hero.appearance.gender}
                  </span>
                  <span className="d-block text-capitalize">
                    ‣ race: {hero.appearance.race}
                  </span>
                  <strong className="d-block"> Work: </strong>
                  <p className="card-text">
                    ‣ Occupation: {hero.work.occupation}
                  </p>
                </div>
                <div className="col-md-6 col-12 p-3">
                  <strong>Powerstats:</strong>
                  {ListPowerstats(hero.powerstats)}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Show;
