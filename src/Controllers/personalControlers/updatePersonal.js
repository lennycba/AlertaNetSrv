const {Personal} = require('../../db');


const updatePersonal = async ({
            nPersonal,
            name,
            lastName,
            phone,
            status,
            role,
            image }) => {
        
        let personalToUpdate = await Personal.findOne({nPersonal})
        if (!personalToUpdate) {
            throw new Error('personal no encontrado')
        } else {
            
            // Actualizar campos que se envian:

            if (name != undefined)  
                personalToUpdate.name = name; 

            if (lastName != undefined)  
                personalToUpdate.lastName = lastName; 

            if (phone != undefined)    
                personalToUpdate.phone = phone;  

            if (status != undefined)      
                personalToUpdate.status = status; 

            if (role != undefined)     
                personalToUpdate.role = role;

            if (image != undefined)  
                patientToUpdate.image = image;      
}
        await personalToUpdate.save();
        return personalToUpdate;
    }

    


    module.exports = updatePersonal;