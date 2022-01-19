import React from "react";
import Paciente from "./Paciente";

const ListadoPacientes = ({ saveCita, setPaciente,eliminarPacientes }) => {
  return (
    <div className="md:w-1/2 lg:w-3/5 md:h-screen overflow-y-auto">
      {saveCita && saveCita.length ? (
        <>
          <h2 className="font-black text-3xl text-center">Listado pacientes</h2>
          <p className="text-xl mt-5 mb-10 text-center">
            Administra tus{" "}
            <span className="text-indigo-600 font-bold">Pacientes y Citas</span>
          </p>
          {saveCita.map((cita) => (
            <Paciente key={cita.id} cita={cita} setPaciente={setPaciente} eliminarPacientes={eliminarPacientes}/>
          ))}{" "}
        </>
      ) : (
        <>
          <h2 className="font-black text-3xl text-center">No hay Pacientes</h2>
          <p className="text-xl mt-5 mb-10 text-center">
            Comienza agregando{" "}
            <span className="text-indigo-600 font-bold">Pacientes y Citas</span>
          </p>
        </>
      )}
    </div>
  );
};

export default ListadoPacientes;
