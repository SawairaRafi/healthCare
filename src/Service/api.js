import axios from 'axios';

const url="http://localhost:5000";
//connect backend with frontend...hit backend..present in front end

export const addApplicant = async (applicantData) =>{
//post request if axios
return await axios.post(`${url}/signUp`,applicantData);

}

// axios.get(); //fetch data from database
// axios.post();

export const getApplicant=async()=>{

    return await axios.get(`${url}/appointment`,)
}
