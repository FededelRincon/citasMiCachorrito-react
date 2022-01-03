import Patient from "./Patient";

const PatientList = ({patient, setEditPatient, deletePatient}) => {
    return (
        <div className="md:w-1/2 lg:w-3/5 ">

            {patient && patient.length ? (
                <>
                    <h2 className="font-black text-3xl text-gray-200 text-center mb-6">Listado Pacientes</h2>

                    { patient.map( (editPatient, index) => (
                        <Patient 
                            key={editPatient.id}
                            editPatient={editPatient}
                            setEditPatient={setEditPatient}
                            deletePatient={deletePatient}
                            index={ index + 1 }
                        />
                    ))}
                </>

            ) : (
                <>
                    <h2 className="font-black text-3xl text-gray-200 text-center">No hay pacientes</h2>

                    <p className="text-xl mt-10 mb-10 text-center text-gray-200">
                        Comienza agregando {''}
                        <span className="text-secondary font-bold ">Mascotas</span>
                    </p>
                </>
            )}
        </div>
    )
}

export default PatientList
