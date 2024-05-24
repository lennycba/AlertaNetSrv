const { Alert, Symptom } = require("../../db");

const postAlert = async (user, address, geoCoding, alertType, symptoms, description) => {
  //faltan datos de patient_Id mobile_Id por que no estan creados y el uuid es necesario;
  if (alertType === "emergency") {
    if (
      !address, 
      !geoCoding, 
      !alertType, 
      !symptoms, 
      !description) {
      return {
        ok: false,
        statusCode: 401,
        message: "Missing data"
      }
    }

    const newAlert = await Alert.create({
      patientId: user.id,
      companyId: user.companyId,
      address, 
      geoCoding, 
      alertType, 
      description
    });


    if (symptoms && symptoms.length > 0) {
      for (const symptom of symptoms) {
        if (symptom.id) {
          await newAlert.addSymptom(symptom.id);
        } else if (symptom.name) {
          const newSymptom = await Symptom.create({ name: symptom.name, patientId });
          await alert.addSymptom(newSymptom.id);
        }
      }
    }


    return {
      ok: true,
      statusCode: 201,
      message: "Alert created successfully",
      newAlert
    };
  }

};

module.exports = postAlert;
