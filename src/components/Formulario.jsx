import React, { useState, useEffect } from "react";
import Error from "./Error";
import { v4 as uuidv4 } from "uuid";

const initialForm = {
  mascota: "",
  propietario: "",
  email: "",
  alta: "",
  sintomas: "",
};
const Formulario = ({ setsaveCita, saveCita, paciente, setPaciente }) => {
  const [cita, setCita] = useState(initialForm);
  const [errores, setErrores] = useState(false);

  const { mascota, propietario, email, alta, sintomas } = cita;

  /*vamos a llenar el objeto cita con los valores de paciente,
  paciente son los valores que vienen una vez que se ha editado, cuando se presiona el boton */
  useEffect(() => {
    if (Object.keys(paciente).length > 0) {
      setCita(paciente);
    }
  }, [paciente]);

  const handleChange = (e) => {
    setCita({
      ...cita,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    /*podemos juntar todas las variables para validar si hay un espacio vacio */
    if ([mascota, propietario, email, alta, sintomas].includes("")) {
      setErrores(true);
      return;
    }
    setErrores(false);

    /*esta validacion es para saber si estamos editanto o creando un nuevo paciente,
    ya que paciente.id son los valores para editar */
    if (paciente.id) {
      /*saveCita estan todos es un array de objeto con todos las citas,
      la iteramos, newCitaPaciente.id === paciente.id,
      cita se llena con los valores de paciente
      en el useEffect de arriba estamos llenando la variable cita con los
      nuevo valores que enviamos al presionar el voton editar,
      y tenemos que regresar newCitaPaciente ya que si no, nos borraria 
      todos los demas registros*/
      const pacienteActualizado = saveCita.map((newCitaPaciente) =>
        newCitaPaciente.id === paciente.id ? cita : newCitaPaciente
      );
      setsaveCita(pacienteActualizado);
      /*regresamos paciente a 0 para que no se quede guardado */
      setPaciente({});
    } else {
      /*creamos una copia de saveCita que esta vacia y es un [] y le pasamos
    cita que es un objeto{}, y asi el array se va a ir llenado de objeto*/
      cita.id = uuidv4();
      setsaveCita([...saveCita, cita]);
    }

    setCita(initialForm);
  };

  return (
    <div className="md:w-1/2 lg:w-2/5">
      <h2 className="font-black text-3xl text-center">Seguimiento Pacientes</h2>
      <p className="text-lg mt-5 text-center mb-10">
        Añade Pacientes y{" "}
        <span className="text-indigo-600 font-bold">Administralos</span>
      </p>
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded-lg py-10 px-5 mb-10 mx-5"
      >
        {errores && <Error />}
        <div className="mb-5">
          <label
            className="block text-gray-700 uppercase font-bold"
            htmlFor="mascota"
          >
            Nombre Mascota
          </label>
          <input
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            type="text"
            id="mascota"
            placeholder="Nombre de la mascota"
            name="mascota"
            value={mascota}
            onChange={handleChange}
          />
        </div>
        <div className="mb-5">
          <label
            className="block text-gray-700 uppercase font-bold"
            htmlFor="propietario"
          >
            Nombre Propietario
          </label>
          <input
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            type="text"
            id="propietario"
            placeholder="Nombre del propietario"
            name="propietario"
            value={propietario}
            onChange={handleChange}
          />
        </div>
        <div className="mb-5">
          <label
            className="block text-gray-700 uppercase font-bold"
            htmlFor="email"
          >
            Email
          </label>
          <input
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            type="email"
            id="email"
            placeholder="E-mail Contacto Propietario"
            name="email"
            value={email}
            onChange={handleChange}
          />
        </div>
        <div className="mb-5">
          <label
            className="block text-gray-700 uppercase font-bold"
            htmlFor="alta"
          >
            Alta
          </label>
          <input
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            type="date"
            id="alta"
            placeholder="E-mail Contacto Propietario"
            name="alta"
            value={alta}
            onChange={handleChange}
          />
        </div>
        <div className="mb-5">
          <label
            className="block text-gray-700 uppercase font-bold"
            htmlFor="sintomas"
          >
            Sintomas
          </label>
          <textarea
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md resize-none"
            id="sintomas"
            placeholder="Describe los Sintomas"
            name="sintomas"
            value={sintomas}
            onChange={handleChange}
          />
        </div>
        <input
          type="submit"
          className="bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-700 cursor-pointer transition-all"
          value={paciente.id ? "Editar Paciente" : "Agregar Paciente"}
        />
      </form>
    </div>
  );
};

export default Formulario;
