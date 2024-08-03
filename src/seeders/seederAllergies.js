
const { Allergy } = require('../db'); 

const bulkCreateAllergies = async (allergiesData) => {


  try {
    // Mapear los datos de los síntomas para establecer el valor por defecto y eliminar el patientId
    const mappedAllergiesData = allergiesData.map(allergy => ({
      ...allergy,
      default: true,
    }));

    // Realizar la operación de bulkCreate
    const createdAllergies = await Allergy.bulkCreate(mappedAllergiesData);
    

    return {
      ok: true,
      statusCode: 201,
      message: 'Allergies created successfully',
      createdAllergies,
    };
  } catch (error) {
    return {
      ok: false,
      statusCode: 500,
      message: error.message,
    };
  }
}


module.exports = { bulkCreateAllergies }