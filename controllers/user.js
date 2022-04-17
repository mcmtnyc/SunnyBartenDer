import User from "../models/user.js";

export const getUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.json(users)
  } catch (error) {
    console.log(error)
    res.status(500).json({ error: error.message })
  }
};
export const getUserById = async (req, res) => {
  try {
    const { id } = req.params
    const user = await User.findById(id);
    if (user) {
      return res.json(user)
    }
    res.status(400).json({ message: "User not found!" })

  } catch (error) {
    console.log(error)
    res.status(500).json({ error: error.message })
  }
};
export const getUserByName = async (req, res) => {
  try {
    // const { id } = req.params
    const user = await User.findOne({ name: req.params.userName });
    if (user) {
      // return res.json(user["city"])
      return res.json(user)
    }
    res.status(400).json({ message: "User not found!" })

  } catch (error) {
    console.log(error)
    res.status(500).json({ error: error.message })
  }
};

export const createUser = async (req, res) => {
  try {

    const user = new User(req.body);
    await user.save();
    res.status(201).json(user)

  } catch (error) {
    console.log(error)
    res.status(500).json({ error: error.message })
  }
};
export const updateUser = async (req, res) => {

  const { id } = req.params;
  const user = await User.findByIdAndUpdate(id, req.body);

  res.status(200).json(user)


};
export const deleteUser = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await User.findByIdAndDelete(id)
    if (deleted) {
      return res.status(200).send("user deleted!")
    }
    throw new Error("user not found")
  } catch (error) {
    console.log(error)
    res.status(500).json({ error: error.message })
  }




};

