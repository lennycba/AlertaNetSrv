const searchNMember = require('../../Controllers/patientsControllers/searchNMember');

const getMember = async (req,res) =>{
    const {nMember} = req.params;
    console.log(nMember);
    try{
        const search = await searchNMember(nMember);
        res.status(200).json(search);
    } catch (error){
        res.status(200).json(error.message);
    }
}

module.exports = getMember;