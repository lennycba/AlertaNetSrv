const { Alert } = require("../../db");

const postAlert = async (address, location, alert_type, status) => {
  //faltan datos de patient_Id mobile_Id por que no estan creados y el uuid es necesario;
  const newAlert = await Alert.create({
    address,
    location,
    alert_type,
    status,
  });
  if (!location || !alert_type || !status) {
    throw new Error("Could not create alert");
  }
  return newAlert;
};

module.exports = postAlert;
