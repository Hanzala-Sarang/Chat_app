import Message from "../model/Message.js";
import Conversation from "../model/Conversation.js";
import { response } from "express";

export const newMessage = async (request, response) => {
  try {
    const newMessage = new Message(request.body);

    await newMessage.save();
    await Conversation.findByIdAndUpdate(request.body.conversationId, {
      message: request.body.text,
    });
    response.status(200).json("Message has been sent successfully");
  } catch (error) {
    return response.status(500).json(error.message);
  }
};

export const getMessages = async (request, response) => {
  try {
    const messages = await Message.find({ conversationId: request.params.id });
    return response.status(200).json(messages);
  } catch (error) {
    return response.status(500).json(error.message);
  }
};
