import { useState, useEffect } from 'react';
import Swal from 'sweetalert2';
import Message from './Message';


const Form = ({ patient, setPatients, editPatient, setEditPatient }) => {
    const [name, setName] = useState('');
    const [owner, setOwner] = useState('');
    const [email, setEmail] = useState('');
    const [entry, setEntry] = useState('');
    const [symptom, setSymptom] = useState('');
    const [debt, setDebt] = useState('');   //deberia estar en 0, pero sino no muestra el placeholder

    const [error, setError] = useState(false)

    useEffect(() => {
        if( Object.keys(editPatient).length > 0  ) {
            setName(editPatient.name)
            setOwner(editPatient.owner)
            setEmail(editPatient.email)
            setEntry(editPatient.entry)
            setSymptom(editPatient.symptom)
            setDebt(editPatient.debt)
        }
    }, [editPatient])


    const generateID = () => {
        const random = Math.random().toString(36).substring(2);
        const date = Date.now().toString(36)
        return random + date;
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        // Validación del Formulario
        if( [ name, owner, email, entry, symptom, debt ].includes('') ) {

            setError(true);

            setTimeout(() => {
                setError(false)
            }, 3000);
            return;
        } 
        

        // Objeto de editPatient
        const objectPatient = {
            name, 
            owner, 
            email, 
            entry, 
            symptom,
            debt
        }

        if(editPatient.id) {
            // Editando Registro
            objectPatient.id = editPatient.id
            const updatedPatient = patient.map( pacienteState => pacienteState.id === editPatient.id ? objectPatient : pacienteState )

            setPatients( updatedPatient );
            setEditPatient({});

            Swal.fire({
                title: 'Paciente Editado!',
                text: 'Listado de pacientes actualizado',
                icon: 'success',
                confirmButtonColor: '#2c5288',
                confirmButtonText: 'Ok!'
            })

        } else {
            // Nuevo registro
            objectPatient.id = generateID();
            setPatients([...patient, objectPatient]);

            Swal.fire({
                title: 'Paciente Creado!',
                text: 'Listado de pacientes actualizado',
                icon: 'success',
                confirmButtonColor: '#2c5288',
                confirmButtonText: 'Ok!'
            })
        }

        // Reiniciar el form
        setName('');
        setOwner('');
        setEmail('');
        setEntry('');
        setSymptom('');
        setDebt('');

    }

    return (
        <div className=" md:w-1/2 lg:w-2/5 mx-5 ">
            <h2 className="font-black text-3xl text-gray-200 text-center mb-6">Ingreso Paciente</h2>

            <form 
                onSubmit={handleSubmit}
                className="bg-white shadow-md rounded-lg py-10 px-5 mb-10"
            >
                <div className="mb-5">
                    <label htmlFor="mascota" className="block text-gray-700 uppercase font-bold">
                        Nombre Mascota:
                    </label>
                    <input
                        id="mascota"
                        type="text"
                        placeholder="Nombre de la Mascota"
                        className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                        value={name}
                        onChange={ (e) => setName(e.target.value) }
                        autoComplete="off"
                        maxLength="60"
                    />  
                </div>

                <div className="mb-5">
                    <label htmlFor="owner" className="block text-gray-700 uppercase font-bold">
                        Nombre Propietario:
                    </label>
                    <input
                        id="owner"
                        type="text"
                        placeholder="Nombre del Propietario"
                        className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                        value={owner}
                        onChange={ (e) => setOwner(e.target.value) }
                        autoComplete="off"
                        maxLength="60"
                    />  
                </div>

                <div className="mb-5">
                    <label htmlFor="email" className="block text-gray-700 uppercase font-bold">
                        Email:
                    </label>
                    <input
                        id="email"
                        type="email"
                        placeholder="Email Contacto Propietario"
                        className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                        value={email}
                        onChange={ (e) => setEmail(e.target.value) }
                        autoComplete="off"
                        maxLength="60"
                    />  
                </div>

                <div className="mb-5">
                    <label htmlFor="entry" className="block text-gray-700 uppercase font-bold">
                        Fecha de Ingreso:
                    </label>
                    <input
                        id="entry"
                        type="date"
                        className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                        value={entry}
                        onChange={ (e) => setEntry(e.target.value) }
                        autoComplete="off"
                    />  
                </div>

                <div className="mb-5">
                    <label htmlFor="symptom" className="block text-gray-700 uppercase font-bold">
                        Síntomas:
                    </label>
                    <textarea 
                        id="symptom"
                        className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                        placeholder="Describe los Síntomas"
                        value={symptom}
                        onChange={ (e) => setSymptom(e.target.value) }
                        autoComplete="off"
                        maxLength="60"
                    />
                </div>

                <div className="mb-5">
                    <label htmlFor="debt" className="block text-gray-700 uppercase font-bold">
                        Costo del tratamiento:
                    </label>
                    <input
                        id="debt"
                        type="number"
                        placeholder="Deuda provisoria del paciente"
                        className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                        value={debt}
                        onChange={ (e) => setDebt(e.target.value) }
                        min="0"
                        step="0.1"
                        autoComplete="off"
                        maxLength="60"
                    />  
                </div>
                { error &&  <Message message='Todos los campos son obligatorios' />}

                <button 
                    className='add-btn'
                    type="submit"
                >
                    { editPatient.id ? 'Editar Paciente' : 'Agregar Paciente' }
                </button>
            </form>
        </div>
    )
}

export default Form
