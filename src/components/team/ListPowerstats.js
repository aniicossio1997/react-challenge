function ListPowerstats(powerstats) {
  const itemRows=[]
  for (const property in powerstats) {
    const item = (
      <span className="d-block text-capitalize" key={property}>
        ‣ {property}:{" "}
        {(powerstats[property] == null) | (powerstats[property] == "null")
          ? 0
          : powerstats[property]}
      </span>
    );
  itemRows.push(item)
  }
  return itemRows;
}
export  {ListPowerstats}