import React from 'react'

import {ListPowerstats} from "./ListPowerstats";

function listPowerstats(powerstats) {
  const itemRows = [];
  for (const property in powerstats) {
    const item =(<span className="d-block text-capitalize" key={property}>{property}: { (powerstats[property] == null | powerstats[property] == "null") ? 0 : powerstats[property]}</span>)
    itemRows.push(item);
  }
  return (itemRows.length === 0 ? null : itemRows)
}
const HeroListItem = ({hero, buttonOptions}) => {
  return (
      <div className="card mb-2" style={{ maxWidth: "100%" }}>
        <div className="row no-gutters">
          <div className="col-6">
            <img src={hero.image.url} className="img-hero  mr-5" alt="..." />
          </div>
          <div className="col-6">
            <div className="card-body">
              <h1>{hero.id}</h1>
              <h5 className="card-title badge badge-secondary ">{hero.name}</h5>
              {ListPowerstats(hero.powerstats)}
              <strong>Alignment: {hero.biography.alignment}</strong>
            </div>
          </div>
        </div>
        <div className="card-footer text-muted">
          {buttonOptions(hero)}
        </div>
      </div>
  );
};

export default HeroListItem;
