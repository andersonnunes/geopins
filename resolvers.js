const user = {
  _id: "1",
  name: "Anderson",
  email: "anderson@email.com",
  picture: "https://cloudinary.com/asdf"
};

module.exports = {
  Query: {
    me: () => user
  }
};
