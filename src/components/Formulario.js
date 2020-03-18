import React, { useState } from "react";

const Formulario = () => {
  const [busquedaState, setBusquedaState] = useState({
    ciudad: "",
    pais: ""
  });

  const handleChange = event => {
    setBusquedaState({
      ...busquedaState,
      [event.target.name]: event.target.value
    });
  };
  return (
    <div>
      <form>
        <div className="input-field col s12">
          <input
            type="text"
            name="ciudad"
            id="ciudad"
            onChange={handleChange}
          ></input>
          <label htmlFor="ciudad">Ciudad</label>
        </div>

        <div className="input-field col s12">
          <select name="pais" onChange={handleChange}>
            <option value="">Selecciona un país</option>
            <option value="US">Estados Unidos</option>
            <option value="AR">Argentina</option>
            <option value="CO">Colombia</option>
            <option value="MX">Mexico</option>
          </select>
        </div>

        <div className="input-field col s12">
          <input
            type="submit"
            className="waves-effect waves-light btn-large btn-block yellow accent-4"
            value="Buscar Clima"
          />
        </div>
      </form>
    </div>
  );
};

export default Formulario;
