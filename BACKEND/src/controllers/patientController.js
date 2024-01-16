import patientService from '../services/patientService';

// create a new patient
let createPatient = async ( req, res ) =>
{
    let patient = await patientService.createPatient( req.body );
    return res.status( 200 ).json( patient );
}

// get all patient
let getPatient = async ( req, res ) =>
{
    let patient = await patientService.getPatient();
    return res.status( 200 ).json( patient );
}

// get patient by id
let getPatientById = async ( req, res ) =>
{
    let patient = await patientService.getPatientById( req.body.id );
    return res.status( 200 ).json( patient );
}

let deletePatient = async ( req, res ) =>
{
    let patient = await patientService.deletePatient( req.body.id );
    return res.status( 200 ).json( patient );
}

let updatePatient = async ( req, res ) =>
{
    let patient = await patientService.updatePatient( req.body );
    return res.status( 200 ).json( patient );
}

module.exports = {
    createPatient: createPatient,
    getPatient: getPatient,
    getPatientById: getPatientById,
    deletePatient: deletePatient,
    updatePatient: updatePatient
}