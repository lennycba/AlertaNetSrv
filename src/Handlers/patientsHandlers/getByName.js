const searchByName = require('../../Controllers/patientsControllers/searchByName');

const getByName = async (req,res) =>{
    const {input} = req.query;
    const [name,lastName] = input.split(' ');
    console.log('nameeeeeeeeeeeeeeeeeeeeeee',name)
    try {
        const patients = await searchByName(name,lastName);
        res.status(200).json(patients);
    } catch (error) {
        res.status(200).json(error.message);
    } 
};

module.exports=getByName;