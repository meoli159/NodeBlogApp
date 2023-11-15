import bcrypt from 'bcrypt';

export const hashPassword = async (password) => {
  const salt = 10;
  return bcrypt.hashSync(password, salt);
};

export const compareHashPassword = async (password, hashPassword) => {
  return bcrypt.compareSync(password, hashPassword);
};
