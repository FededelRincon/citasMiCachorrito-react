import Swal from 'sweetalert2';

const Patient = ({ editPatient, setEditPatient, deletePatient, index }) => {
    console.log(editPatient)
    const { name, owner, email, entry, symptom, id, debt } = editPatient

    const handleEliminar = () => {

        Swal.fire({
            title: 'Quieres eliminar este paciente?',
            icon: 'warning',
            showDenyButton: true,
            confirmButtonText: 'Si, ya tiene el alta',
            denyButtonText: `No, aún no esta curado`,
            confirmButtonColor: '#2c5288',
            denyButtonColor: '#058bc0',
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire({
                    title: 'Paciente eliminado !',
                    icon: 'success',
                    confirmButtonText: 'Ok!',
                    confirmButtonColor: '#2c5288',
                })

                deletePatient(id);

            } else if (result.isDenied) {
                Swal.fire({
                    title: 'No se elimino al paciente!',
                    icon: 'error',
                    confirmButtonText: 'Ok!',
                    confirmButtonColor: '#2c5288',
                })
            }
        })

        
          
    }

    return (
        <div className="mx-5 mb-5 bg-white shadow-md px-5 py-9 rounded-xl relative">

            <p className="text-opacity-50 absolute right-14 mt-8 text-9xl text-gray-400 font-bold mb-3 uppercase">{index} </p>

            <p className="font-bold mb-3 text-gray-700 uppercase">Nombre: {''}
                <span className="font-normal normal-case">{name}</span>
            </p>

            <p className="font-bold mb-3 text-gray-700 uppercase">Propietario: {''}
                <span className="font-normal normal-case">{owner}</span>
            </p>

            <p className="font-bold mb-3 text-gray-700 uppercase">Email: {''}
                <span className="font-normal normal-case">{email}</span>
            </p>

            <p className="font-bold mb-3 text-gray-700 uppercase">Fecha Alta: {''}
                <span className="font-normal normal-case">{entry}</span>
            </p>

            <p className="font-bold mb-3 text-gray-700 uppercase">Síntomas: {''}
                <span className="font-normal normal-case">{symptom}</span>
            </p>

            <p className="font-bold mb-3 text-gray-700 uppercase">Costo: {''} 
                <span className="font-normal normal-case">u$s {''} {debt} </span>
            </p>

            <div className="flex justify-around mt-8">
                <button 
                    type="button"
                    className='edit-btn'
                    onClick={() => setEditPatient(editPatient)}
                >
                    Editar
                </button>


                <button 
                    type="button"
                    className='delete-btn'
                    onClick={handleEliminar}
                >
                    Eliminar
                </button>
            </div>
        </div>
    )
}

export default Patient
