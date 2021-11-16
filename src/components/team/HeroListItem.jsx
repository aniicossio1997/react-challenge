import React from 'react'

import {ListPowerstats} from "./ListPowerstats";

const HeroListItem = ({hero, buttonOptions}) => {
  return (
      <div className="card mb-2 color-bg-t" style={{ maxWidth: "100%" }}>
        <div className="row no-gutters">
          <div className="col-6">
            <img src={hero.image.url} className="img-hero  mr-5" alt="..." />
          </div>
          <div className="col-6">
          <div className="card-header text-center">
            <small className="text-secondary">Name</small>
              <h5 className="card-title text-capitalize ">
                {hero.name}
              </h5>
            </div>
            <div className="card-body">
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
