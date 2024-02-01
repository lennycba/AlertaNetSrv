const searchPByName = require('../../Controllers/personalControlers/searchPByName');

const getPByName = async (req,res) =>{
    const {fullName} = req.query;

    try {
        const personal = await searchPByName(fullName);
        res.status(200).json(personal);
    } catch (error) {
        res.status(200).json(error.message);
    } 
};

module.exports=getPByName;