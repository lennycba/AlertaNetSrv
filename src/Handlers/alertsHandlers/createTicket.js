const postAlert = require("../../Controllers/alertsControllers/postAlert");

const createTicket = async (req, res) => {
  //faltan datos de patient_Id mobile_Id por que no están creados y el uuid es necesario;
  const { address, geoCoding, alertType, symptoms, description } = req.body;
  const user = req.user;

  console.log(user, address, geoCoding, alertType, symptoms, description);
  try {
    const {ok, message, statusCode, newAlert} = await postAlert(user, address, geoCoding, alertType, symptoms, description);
    
    if (!ok) {
      return res.status(statusCode).json({ ok, message });
    }
    res.status(statusCode).json({ok, message, newAlert});

  } catch (error) {
    res.status(200).json(error.message);
  }
};

module.exports = createTicket;
