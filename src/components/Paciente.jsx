import React from "react";

const Paciente = ({ cita, setPaciente, eliminarPacientes }) => {
  const handleEliminar = () => {
    const respuesta = window.confirm(
      "Estas seguro que deseas elimar este paciente?"
    );
    if (respuesta) {
      eliminarPacientes(cita.id);
    }
  };
  return (
    <div className="mx-5 my-10 bg-white shadow-md px-5 py-10 rounded-xl">
      <p className="font-bold mb-3 text-gray-700 uppercase">
        MASCOTA:{" "}
        <span className="font-normal normal-case ml-1">{cita.mascota}</span>
      </p>
      <p className="font-bold mb-3 text-gray-700 uppercase">
        PROPIETARIO:{" "}
        <span className="font-normal normal-case ml-1">{cita.propietario}</span>
      </p>
      <p className="font-bold mb-3 text-gray-700 uppercase">
        EMAIL:{" "}
        <span className="font-normal normal-case ml-1">{cita.email}</span>
      </p>
      <p className="font-bold mb-3 text-gray-700 uppercase">
        FECHA ALTA:{" "}
        <span className="font-normal normal-case ml-1">{cita.alta}</span>
      </p>
      <p className="font-bold mb-3 text-gray-700 uppercase">
        SÍNTOMAS:{" "}
        <span className="font-normal normal-case ml-1">{cita.sintomas}</span>
      </p>
      <div className="flex justify-around align-middle mt-5">
        <button
          type="button"
          className="py-2 px-10 bg-indigo-600 hover:bg-indigo-700 text-white font-bold uppercase rounded-md"
          onClick={() => setPaciente(cita)}
        >
          Editar
        </button>
        <button
          type="button"
          className="py-2 px-10 bg-red-600 hover:bg-red-700 text-white font-bold uppercase rounded-md"
          onClick={handleEliminar}
        >
          Eliminar
        </button>
      </div>
    </div>
  );
};

export default Paciente;
