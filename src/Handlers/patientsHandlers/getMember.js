const searchByMembershipNumber = require('../../Controllers/patientsControllers/searchByMembershipNumber');

const getMember = async (req,res) =>{
    const {membershipNumber} = req.params;
    
    try{
        const search = await searchByMembershipNumber(membershipNumber);
        res.status(200).json(search);
    } catch (error){
        res.status(200).json(error.message);
    }
}

module.exports = getMember;