const postAlert = require("../../Controllers/alertsControllers/postAlert");

const createTicket = async (req, res) => {
  //faltan datos de patient_Id mobile_Id por que no estan creados y el uuid es necesario;
  const { location, alert_tipe, status } = req.body;
  console.log(location, alert_tipe, status);
  try {
    const newAlert = await postAlert(location, alert_tipe, status);
    res.status(200).json(newAlert);
  } catch (error) {
    res.status(200).json(error.message);
  }
};

module.exports = createTicket;
