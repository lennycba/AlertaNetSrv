const getAllPersonal = require('../../Controllers/personalControlers/getAllPersonal')


const getPersonal = async (req,res) =>{
    try {
        const allPersonal = await getAllPersonal();
        res.status(200).json(allPersonal);
    } catch (error) {
        res.status(200).json(error.message)
    }
}

module.exports = getPersonal;