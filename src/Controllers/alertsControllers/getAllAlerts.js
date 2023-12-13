const {Alert} = require('../../db');

const getAllAlerts = async () => {
    const alerts = await Alert.findAll();

    if(alerts.length > 0) return alerts;
    else throw Error('No hay alertas cargadas hasta el momento')
}


module.exports = getAllAlerts;