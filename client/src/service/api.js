import axios from "axios";

const url = "http://localhost:5000";

export const addUser = async (data) => {
  try {
    axios.post(`${url}/add`, data);
  } catch (error) {
    console.log("Error while adding User ", error);
  }
};

export const getUser = async () => {
  try {
    let response = await axios.get(`${url}/users`);
    return response.data;
  } catch (error) {
    console.log("Error while calling users api", error);
  }
};

export const setConversation = async (data) => {
  try {
    await axios.post(`${url}/conversation/add`, data);
  } catch (error) {
    console.log("Error While Setting the users Conversation", error);
  }
};

export const getConversation = async (data) => {
  try {
    let response = await axios.post(`${url}/conversation/get`, data);
    return response.data;
  } catch (error) {
    console.log("Error while calling getConversation api", error);
  }
};

export const newMessage = async (data) => {
  try {
    await axios.post(`${url}/message/addNew`, data);
  } catch (error) {
    console.log("Error while calling newMessage api", error);
  }
};

export const getAllMessages = async (id) => {
  try {
    let response = await axios.get(`${url}/message/get/${id}`);
    return response.data;
  } catch (error) {
    console.log("Error while calling getAllMessages api", error.message);
  }
};

export const uploadFile = async (data) => {
  try {
    return await axios.post(`${url}/file/upload`, data);
  } catch (error) {
    console.log("Error while uploading file ", error.message);
  }
};
