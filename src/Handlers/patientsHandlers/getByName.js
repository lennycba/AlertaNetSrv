const searchByName = require('../../Controllers/patientsControllers/searchByName');

const getByName = async (req,res) =>{
    const {fullName} = req.query;

    console.log('nameeeeeeeeeeeeeeeeeeeeeee',fullName);
    try {
        const patients = await searchByName(fullName);
        res.status(200).json(patients);
    } catch (error) {
        res.status(200).json(error.message);
    } 
};

module.exports=getByName;