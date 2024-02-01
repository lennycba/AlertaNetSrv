const {Patient} = require('../../db');


const updatePatient = async ({
    status,
    nMember,
    role,
    name,
    lastName,
    phone,
    address,
    medicalHistory,
    image }) => {
        
        let patientToUpdate = await Patient.findOne({nMember})
        console.log(patientToUpdate)
        if (!patientToUpdate) {
            throw new Error('Paciente no encontrado')
        } else {
            
            // Actualizar campos que se envian:

            if (status != undefined)  
                patientToUpdate.status = status;

            if (role != undefined)
                patientToUpdate.role = role;

            if (name != undefined)  
                patientToUpdate.name = name; 

            if (lastName != undefined)  
                patientToUpdate.lastName = lastName; 

            if (phone != undefined)    
                patientToUpdate.phone = phone;  

            if (address != undefined)      
                patientToUpdate.address = address; 

            if (medicalHistory != undefined)     
                patientToUpdate.medical_history = medicalHistory;

            if (image != undefined)  
                patientToUpdate.image = image;      
}
        await patientToUpdate.save();
        return patientToUpdate;
    }

    


    module.exports = updatePatient;