

function CountryList( {countries} : { countries: ListCountryQuery["listCountry"];
}) {
  return (
    <div>
      <h2>Liste des Pays</h2>
      <ul>
        {countries.map((c) => (
          <li key={c.id}>
            {c.name} ({c.code}) {c.emoji}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CountryList;
