
const { ChronicPathology } = require('../db'); 

const bulkCreatePathologies = async (chronicPathologiesData) => {
  
  try {
    // Mapear los datos de los síntomas para establecer el valor por defecto y eliminar el patientId
    const mappedPathologiesData = chronicPathologiesData.map(pathology => ({
      ...pathology,
      default: true,
    }));

    // Realizar la operación de bulkCreate
    const createdPathologies = await ChronicPathology.bulkCreate(mappedPathologiesData);
    console.log("Pathologies: ",createdPathologies);

    return {
      ok: true,
      statusCode: 201,
      message: 'Pathologies created successfully',
      createdPathologies,
    };
  } catch (error) {
    return {
      ok: false,
      statusCode: 500,
      message: error.message,
    };
  }
}


module.exports = { bulkCreatePathologies }