const obj = {
  name: "John",
  age: 20,
  location: "Maharashtra",
};

const getUsers = async (req, res) => {
  try {
    return res.status(200).json({ data: obj });
  } catch (error) {
    console.log(error);
  }
};

const getAllUsers = async (req, res) => {
  try {
    return res.status(200).json({ data: { obj, obj } });
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  getUsers,
  getAllUsers
};
