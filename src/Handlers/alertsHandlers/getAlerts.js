const getAllAlerts = require('../../Controllers/alertsControllers/getAllAlerts');

const getAlerts = async (req,res) =>{
    try {
        const allAlerts = await getAllAlerts();
        res.status(200).json(allAlerts);
    } catch (error) {
        res.status(200).json(error.message)
    }
}

module.exports = getAlerts;