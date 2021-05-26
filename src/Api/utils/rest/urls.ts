import { API_ENDPOINTS } from "../../../constants";

const urls = {
  auth: {
    //GET
    getSession: API_ENDPOINTS.AUTH_ENDPOINTS.getSession,
    //POST
    userLogin: API_ENDPOINTS.AUTH_ENDPOINTS.userLogin,
    userLogout: API_ENDPOINTS.AUTH_ENDPOINTS.userLogout,
  },
  user: {
    //GET
    getUserInformation: API_ENDPOINTS.USER_ENDPOINTS.getUserInformation,
  },
  contacts: {
    //GET
    getContacts: API_ENDPOINTS.CONTACT_ENDPOINTS.getContacts,
  },
  uploadedContacts: {
    //GET
    getContacts: API_ENDPOINTS.UPLOADED_CONTACTS_ENDPOINTS.getContacts,
    //POST
    createContacts: API_ENDPOINTS.UPLOADED_CONTACTS_ENDPOINTS.createContacts,
  },
  filing: {
    //GET
    files: API_ENDPOINTS.FILING_ENDPOINTS.files,
    //POST
    uploadFile: API_ENDPOINTS.FILING_ENDPOINTS.uploadFile,
    //DELETE
    deleteFile: API_ENDPOINTS.FILING_ENDPOINTS.deleteFile,
  },
  messaging: {
    //GET
    getMessagingType: API_ENDPOINTS.MESSAGING_ENDPOINTS.getMessagingType,
    //POST
    postSendNotification: API_ENDPOINTS.MESSAGING_ENDPOINTS.postSendNotification,
  },
};

export default urls;
