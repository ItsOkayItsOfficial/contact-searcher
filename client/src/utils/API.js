import axios from "axios";

export default {
  // Gets all contacts
  getContacts: function() {
    return axios.get("/api/contacts");
  },
  // Gets the Contact with the given id
  getContact: function(id) {
    return axios.get("/api/contacts/" + id);
  },
  // Deletes the Contact with the given id
  deleteContact: function(id) {
    return axios.delete("/api/contacts/" + id);
  },
  // Saves a Contact to the database
  saveContact: function(contactData) {
    return axios.post("/api/contacts", contactData);
  }
};
