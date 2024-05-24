const { Router } = require("express");
const seederRouter = Router();
const symptomsData = require("../seeders/symptomsData.json");
const { bulkCreateSymptoms } = require("../seeders/seederSymptoms");

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

module.exports = seederRouter;