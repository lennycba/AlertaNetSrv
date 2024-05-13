const postPersonal = require('../../Controllers/personalControlers/postPersonal')
const bcrypt = require('bcryptjs');

const createPersonal = async (req,res) =>{
    const{
        nPersonal,
        name,
        lastName,
        phone,
        email,
        password,
        role,
        status,
        image,
    } = req.body;

    try {
        const personalData = {
        nPersonal,
        name,
        lastName,
        phone,
        email,
        password: bcrypt.hashSync(password),
        role,
        status,
        image,
        }

    
        const newPersonal = await postPersonal(personalData);
        return res.status(201).json(newPersonal)

    } catch (error) {
        res.status(200).json(error.message)
    }
}

module.exports = createPersonal;