import Application from "../model/Application.js";

class ApplicationDAO {
  async createApplication({ hostID, renterID, listingID, startDate, endDate, hazardCheck, items, needs, protectionPlan, creditCard }) {
    const application = await Application.create({ hostID, renterID, listingID, startDate, endDate, hazardCheck, items, needs, protectionPlan, creditCard });
    return application;
  }
  
  async getAllApplications() {
    const applications = await Application.find();
    return applications;
  }
  
  async getApplicationById(applicationID) {
    const application = await Application.findById(applicationID);
    return application;
  }
  
  async updateApplication(applicationID, updatedApplication) {
    const application = await Application.findByIdAndUpdate(applicationID, updatedApplication, { new: true });
    return application;
  } 
  
  async deleteApplication(applicationID) {
    await Application.findByIdAndDelete(applicationID);
  }
}

export default ApplicationDAO;
