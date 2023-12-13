const searchById = require('../../Controllers/gralControllers/searchById');

const getById = async (req,res) =>{
    const {id} = req.params;
    console.log(id)
    try {
        const search = await searchById(id);
        res.status(200).json(search);
    } catch (error) {
        res.status(200).json(error.message);
    }
};

module.exports = getById;