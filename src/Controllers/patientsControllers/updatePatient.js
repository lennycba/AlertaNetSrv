const uploadImage = require("../../config/cloudinary.config");
const { Patient } = require("../../db");

const updatePatient = async ({
  id,
  status,
  role,
  name,
  lastName,
  phone,
  address,
  medicalHistory,
  image,
}) => {

  let patientToUpdate = await Patient.findByPk(id);

  if (!patientToUpdate) {
    return {
      ok: false,
      message: "Patient not found",
    }
  } else {
    // Actualizar campos que se envían:

    let imageToUpdate;

    if (image) {
      const { secure_url } = await uploadImage(image)
      console.log(secure_url);
      if (!secure_url) {
        return {
          ok: false,
          message: "Error uploading image",
        }
      }
      imageToUpdate = secure_url;
    }

    const [rowsUpdated, [updatedPatient]] = await Patient.update(
      {
        status,
        role,
        name,
        lastName,
        phone,
        address,
        medical_history: medicalHistory,
        image: imageToUpdate,
      },
      { returning: true, where: { id } }
    );

    if (rowsUpdated > 0) {
      return {
        ok: true,
        event: updatedPatient,
      };
    } else {
      return {
        ok: false,
        message: "User not found",
      };
    }
  }

};

module.exports = updatePatient;
