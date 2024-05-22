const { UserAdmin } = require('../../db');


const updateSuperadmin = async ({
      id,
      name,
      lastName,
      phone,
      image }) => {
        
        let personalToUpdate = await UserAdmin.findOne({ id })
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

            if (image != undefined)  
                patientToUpdate.image = image;      
}
        await personalToUpdate.save();
        return personalToUpdate;
    }

    


    module.exports = updateSuperadmin;