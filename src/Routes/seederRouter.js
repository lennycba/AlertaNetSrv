const { Router } = require("express");
const seederRouter = Router();
const symptomsData = require("../seeders/symptomsData.json");
const allergiesData = require("../seeders/allergiesData.json");
const chronicPathologiesData = require("../seeders/chronicPathologiesData.json");
const { bulkCreateSymptoms } = require("../seeders/seederSymptoms");
const { bulkCreateAllergies } = require("../seeders/seederAllergies");
const { bulkCreatePathologies } = require("../seeders/seederChronicPatologies");

seederRouter.get("/symptoms", async (req, res) => {
  
  try {
    const {ok, message, statusCode, createdSymptoms} = await bulkCreateSymptoms(symptomsData);

    if (!ok) {
      return res.status(statusCode).json({ ok, message });
    }
    res.status(statusCode).json({ ok, message, createdSymptoms });
  } catch (error) {
    res.status(500).json({ message: 'Internal server error' });
  }
});

seederRouter.get("/allergies", async (req, res) => {
  
  try {
    const {ok, message, statusCode, createdAllergies} = await bulkCreateAllergies(allergiesData);
    if (!ok) {
      return res.status(statusCode).json({ ok, message });
    }
    res.status(statusCode).json({ ok, message, createdAllergies });
  } catch (error) {
    res.status(500).json({ message: 'Internal server error' });
  }

});

seederRouter.get("/pathologies", async (req, res) => {
  
  try {
    const {ok, message, statusCode, createdPathologies} = await bulkCreatePathologies(chronicPathologiesData);
    if (!ok) {
      return res.status(statusCode).json({ ok, message });
    }
    res.status(statusCode).json({ ok, message, createdPathologies });
  } catch (error) {
    res.status(500).json({ message: 'Internal server error' });
  }

});

module.exports = seederRouter;