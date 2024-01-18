import axios from '../axios'

// function handle login
const handleLoginApi = ( email, password ) =>
{
    return axios.post( 'api/login', { email, password } ); // request len server
}

// get all code
const getAllcodeService = ( inputData ) =>
{
    return axios.get( `/api/allcode?type=${ inputData }` );
}

// ---------------------- patient -------------------

const getAllPatient = () =>
{
    return axios.get( `/api/get-patient` );
}

export
{
    handleLoginApi, getAllcodeService,


    /* patient */
    getAllPatient
};