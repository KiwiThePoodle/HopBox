import axios from "axios";


export const axiosInstance = axios.create({
  baseURL: "http://localhost:5050",
});

export async function postRenterEmail(email) {
  try {
    const response = await axiosInstance.post('/renter',{email: email});
    return response.data;
  } catch (err) {
    throw err;
  }
}

export async function postHostEmail(email) {
  try {
    const response = await axiosInstance.post('/host',{email: email});
    return response.data;
  } catch (err) {
    throw err;
  }
}

export async function createUser(name, email, password) {
  try {
    const response = await axiosInstance.post("/user/create", {name: name, email: email, password: password});
    return response.data;
  } catch (err) {
    throw err;
  }
}

export async function login(email, password) {
  const userObj = {email: email, password: password};
  try {
    console.log("here 5");
    const response = await axiosInstance.post("/login", userObj);
    console.log("here 6");
    return response.data;
  } catch (err) {
    throw err;
  }
}

export async function getAuth() {
  try {
    const response = await axiosInstance.get("/isAuthorized");
    return response.data;
  } catch (err) {
    throw err;
  }
}

export async function testAuthorize(postData) {
  try {
    console.log("axios", axiosInstance.defaults.headers["Authorization"]);
    const response = await axiosInstance.post("/testAuthorize", postData);
    return response.data;
  } catch (err) {
    throw err;
  }
}

export async function createListing(listing) {
  try {
    const response = await axiosInstance.post("/listing", listing);
    return response.data;
  } catch (err) {
    throw err;
  }
}
  
export async function getAllListings() {
  try {
    const response = await axiosInstance.get("/listings");
    return response.data;
  } catch (err) {
    throw err;
  }
}


///APPLICAITON:
export async function createApplication(application) {
  try {
    const response = await axiosInstance.post("/applications", application);
    return response.data;
  } catch (err) {
    throw err;
  }
}
  
export async function getAllApplications() {
  try {
    const response = await axiosInstance.get("/applications");
    return response.data;
  } catch (err) {
    throw err;
  }
}

export async function getApplicationById(applicationId) {
  try {
    const response = await axiosInstance.get(`/applications/${applicationId}`);
    return response.data;
  } catch (err) {
    throw err;
  }
}

export async function updateApplicationById(applicationId, application) {
  try {
    const response = await axiosInstance.patch(`/application/${applicationId}`, application);
    return response.data;
  } catch (err) {
    throw err;
  }
}

export async function deleteApplicationById(applicationId) {
  try {
    const response = await axiosInstance.delete(`/applications/${applicationId}`);
    return response.data;
  } catch (err) {
    throw err;
  }
}
