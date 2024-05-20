const postAlert = require("../../Controllers/alertsControllers/postAlert");

const createTicket = async (req, res) => {
  //faltan datos de patient_Id mobile_Id por que no están creados y el uuid es necesario;
  const { location, alert_type, status } = req.body;
  const user = req.user;

  console.log(user);
  console.log(location, alert_type, status);
  try {
    // const newAlert = await postAlert(location, alert_type, status);
    // res.status(200).json(newAlert);
    res.status(200).json(user);
  } catch (error) {
    res.status(200).json(error.message);
  }
};

module.exports = createTicket;
