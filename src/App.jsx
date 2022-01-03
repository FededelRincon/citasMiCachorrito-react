import { useState, useEffect } from 'react'
import Footer from './components/Footer';
import Form from "./components/Form"
import Header from "./components/Header"
import PatientList from "./components/PatientList"

import './css/Button.css';

function App() {

  const [patient, setPatients] = useState([]);  //Lista de pacientes
  const [editPatient, setEditPatient] = useState({}); //editPatient para editar

  useEffect(() => {
    const getLocalStorage = () => {
      const patientsLS = JSON.parse(localStorage.getItem('patient')) ?? [];
      setPatients(patientsLS)
    }
    getLocalStorage();
  }, []);

  useEffect(() => {
    localStorage.setItem('patient', JSON.stringify( patient ));
  }, [patient])

  const deletePatient = id => {
    const updatedPatient = patient.filter( editPatient => editPatient.id !== id);
    setPatients( updatedPatient );
  }

  return (
    <>
      <div className="container mx-auto">
        <Header />

        <div className="mt-12 md:flex">
            <Form 
              patient={patient}
              setPatients={setPatients}
              editPatient={editPatient}
              setEditPatient={setEditPatient}
            />
            <PatientList 
              patient={patient}
              setEditPatient={setEditPatient}
              deletePatient={deletePatient}
            />
        </div>

      </div>
        <Footer />
    </>
  )
}

export default App