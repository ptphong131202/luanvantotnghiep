import express from "express";
import patient from '../controllers/patientController';

let router = express.Router();

let initWebRoutes = ( app ) =>
{

    // route patient
    router.post( "/api/create-patient", patient.createPatient ); // create patient
    router.get( "/api/get-patient", patient.getPatient ); // get patient
    router.get( "/api/get-patient-by-id", patient.getPatientById ); // get patient by id
    router.delete( "/api/delete-patient", patient.deletePatient ); // delete patient
    router.put( "/api/update-patient", patient.updatePatient ); // update patient

    // route admin
    router.post( "/api/create-admin", patient.createAdmin ); // create admin
    router.get( "/api/get-admin", patient.getAdmin ); // get admin
    router.get( "/api/get-admin-by-id", patient.getAdminById ); // get admin by id
    router.delete( "/api/delete-admin", patient.deleteAdmin ); // delete admin
    router.put( "/api/update-admin", patient.updateAdmin ); // update admin
    return app.use( "/", router );
}

module.exports = initWebRoutes;