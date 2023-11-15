import { User } from '../../models/user.js';
import { compareHashPassword, hashPassword } from '../../utils/authUtil.js';

export const logIn = async (req, res) => {
  try {
    const { username, password } = req.body;
    const existUser = await User.findOne({ username });

    if (!existUser) {
      return res.status(401).json({ message: 'Invalid username' });
    }

    const isPasswordMatch = await compareHashPassword(
      password,
      existUser.password
    );

    if (!isPasswordMatch) {
      return res.status(401).json({ message: 'Invalid password' });
    }

    return res
      .status(200)
      .json({ message: 'Login successful', user: existUser });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error.' });
  }
};

export const register = async (req, res) => {
  try {
    const { username, password, name, dob } = req.body;
    const existUser = await User.findOne({ username: username });
    if (existUser) {
      return res.status(400).json({ message: 'username already existed' });
    }
    const user = await User.create({
      username: username,
      password: await hashPassword(password),
      name: name,
      dob: dob,
    });

    return res.status(200).json(user);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error.' });
  }
};

export const updateUser = () => {};
export const deleteUser = () => {};
