
const { Symptom } = require('../db'); 

const bulkCreateSymptoms = async (symptomsData) => {

  const validCategories = ["accident", "disease", "pregnancy", "poisoning"];
  const isValid = symptomsData.every(symptom => symptom.category.every(category => validCategories.includes(category)));
  
  if (!isValid) {
    return {
      ok: false,
      statusCode: 400,
      message: 'Invalid category'
    };
  }

  try {
    // Mapear los datos de los síntomas para establecer el valor por defecto y eliminar el patientId
    const mappedSymptomsData = symptomsData.map(symptom => ({
      ...symptom,
      default: true,
    }));

    // Realizar la operación de bulkCreate
    const createdSymptoms = await Symptom.bulkCreate(mappedSymptomsData);

    return {
      ok: true,
      statusCode: 201,
      message: 'Symptoms created successfully',
      createdSymptoms
    };
  } catch (error) {
    return {
      ok: false,
      statusCode: 500,
      message: error.message,
    };
  }
}


module.exports = { bulkCreateSymptoms }