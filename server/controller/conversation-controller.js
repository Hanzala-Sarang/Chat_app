import Conversation from "../model/Conversation.js";

export const newConversation = async (request, response) => {
  let senderId = request.body.senderId;
  let recieverId = request.body.recieverId;

  const ConvExist = await Conversation.findOne({
    members: { $all: [recieverId, senderId] },
  });

  if (ConvExist) {
    response.status(200).json("Conversation already exists");
    return;
  }

  const newConversation = new Conversation({
    members: [senderId, recieverId],
  });

  try {
    const savedConversation = await newConversation.save();
    response.status(200).json(savedConversation);
  } catch (error) {
    response.status(500).json(error);
  }
};

export const getConversation = async (request, response) => {
  try {
    let senderId = request.body.senderId;
    let recieverId = request.body.recieverId;

    let conversation = await Conversation.findOne({
      members: { $all: [senderId, recieverId] },
    });

    return response.status(200).json(conversation);
  } catch (error) {
    return response.status(500).json("Can not get Conversation details");
  }
};
