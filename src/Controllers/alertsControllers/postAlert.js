const { Alert } = require("../../db");

const postAlert = async (location, alert_tipe, status) => {
  //faltan datos de patient_Id mobile_Id por que no estan creados y el uuid es necesario;
  const newAlert = await Alert.create({
    location,

    alert_tipe,
    status,
  });
  if (!location || !alert_tipe || !status) {
    throw new Error("Could not create alert");
  }
  return newAlert;
};

module.exports = postAlert;
