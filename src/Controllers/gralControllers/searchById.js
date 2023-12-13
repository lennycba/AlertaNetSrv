const {Alert,Mobile,Patient,Personal} = require ('../../db');

const searchById = async (id) =>{
    const searchAlert = await Alert.findOne({
        where:{
            id:id,
        }
    });
    if(searchAlert) return searchAlert;

    //---------------------------------------------------------------------

    const searchMobile = await Mobile.findOne({
        where:{
            id:id,
        }
    });
    if(searchMobile) return searchMobile;

    //---------------------------------------------------------------------

    const searchPatient = await Patient.findOne({
        where:{
            id:id,
        }
    });
    if(searchPatient) return searchPatient;

    //---------------------------------------------------------------------

    const searchPersonal = await Personal.findOne({
        where:{
            id:id,
        },
    });
    if(searchPersonal) return searchPersonal;

    else{
        throw new Error('No se encontro ningún dato con la ID especificada');
    }
}



module.exports = searchById;