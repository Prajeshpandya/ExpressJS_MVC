import { User } from "../models/user.js";

export const getAlluser = async (req, res) => {
  const users = await User.find({});

  const keyword = req.query.parth; //value that we pass in params keywords..
  console.log(keyword);

  res.json({
    success: "true",
    users,
  });
};

export const createUser = async (req, res) => {
  const { name, email, password } = req.body;

  await User.create({
    name,
    email,
    password,
  });

  res.status(201).cookie("tempi", "lol").json({
    success: "true",
    message: "registered successfully!",
  });
};

export const specialFunc = async (req, res) => {
  res.json({
    success: true,
    message: "just joking",
  });
};


export const getUserById = async (req, res) => {
  //if this route is in upper this will threw error
  // const {id}=req.query;
  const { id } = req.params;

  const user = await User.findById(id); //it show the data of that id
  console.log(req.params);

  res.json({
    success: true,
    user,
  });
};
