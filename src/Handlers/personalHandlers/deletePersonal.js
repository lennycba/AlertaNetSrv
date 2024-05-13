const {Personal} = require('../../db');


const deletePersonal = async (req, res) => {

  const { id } = req.params

  const employee = await Personal.findByPk(id)
  
  if (!employee) {
    res.status(404).json({ ok: false, message: "user not found"})
  } else {
    
    await Personal.destroy({
      where: { id }
    })

    res.status(200).json({ ok: true, message: "Employee deleted" })
  }
}

module.exports = deletePersonal