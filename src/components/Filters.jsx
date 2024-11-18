import React from "react";

const Filters = ({ setFilters }) => {
  const Cambiar = (e) => {
    const { name, value } = e.target;
    setFilters((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="filters">
      <select name="status" onChange={Cambiar}>
        <option value="">All Status</option>
        <option value="alive">Alive</option>
        <option value="dead">Dead</option>
        <option value="unknown">Unknown</option>
      </select>
      <select name="species" onChange={Cambiar}>
        <option value="">All Species</option>
        <option value="Human">Human</option>
        <option value="Alien">Alien</option>
      </select>
      <select name="gender" onChange={Cambiar}>
        <option value="">All Genders</option>
        <option value="female">Female</option>
        <option value="male">Male</option>
        <option value="genderless">Genderless</option>
        <option value="unknown">Unknown</option>
      </select>
    </div>
  );
};

export default Filters;
