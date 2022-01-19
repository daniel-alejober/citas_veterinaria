import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Formulario from "./components/Formulario";
import ListadoPacientes from "./components/ListadoPacientes";
function App() {
  const [saveCita, setsaveCita] = useState([]);
  const [paciente, setPaciente] = useState({});

  /*verificar si hay algo en el localstorage,
   si no hay nada en LS agregale un [] */
  useEffect(() => {
    const obtenerLS = () => {
      const citasLs = JSON.parse(localStorage.getItem("cita")) ?? [];
      setsaveCita(citasLs);
    };
    obtenerLS();
  }, []);

  /*cada vez que haya un cambio en saveCita por que quiere decir que se agrego un nuevo paciente,
  primero debemos guardarlos en el LS con setItem y le pasamos el objeto de saveCita*/
  useEffect(() => {
    localStorage.setItem("cita", JSON.stringify(saveCita));
  }, [saveCita]);

  /*creamos una funcion que nos va a regresar todos los que sean diferentes a ese id */
  const eliminarPacientes = (id) => {
    const citasRestantes = saveCita.filter((newCita) => newCita.id !== id);
    setsaveCita(citasRestantes);
  };

  return (
    <div className="bg-gray-200">
      <div className="container mx-auto">
        <Header />
        <div className="mt-12 md:flex">
          {/*le pasamos save cita que es donde se guardan los datos del paciente para que asi
           podamos hacer el arreglo, si no se queda com objeto*/}
          <Formulario
            saveCita={saveCita}
            setsaveCita={setsaveCita}
            paciente={paciente}
            setPaciente={setPaciente}
          />
          <ListadoPacientes
            saveCita={saveCita}
            setPaciente={setPaciente}
            eliminarPacientes={eliminarPacientes}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
