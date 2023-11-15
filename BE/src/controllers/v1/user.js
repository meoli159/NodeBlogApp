import { User } from '../../models/user.js';

export const logIn = () => {};
export const register = async (req, res) => {
  // try {
  //   const { username, password, name, dob } = req.body;
  //   const existUser = await User.findOne({ username: username });
  //   if (existUser)
  //     return res.status(400).json({ message: 'username already existed' });
  //   const user = await User.create({
  //     username: username,
  //     password: password,
  //     name: name,
  //     dob: dob,
  //   });
  //   console.log(user);
  //   return res.status(200).json(user);
  // } catch (error) {
  //   console.error(error);
  // }
};
export const updateUser = () => {};
export const deleteUser = () => {};
