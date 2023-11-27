const userData = {
  users: [],
};

export const getUsersAsync = () => {
  return Promise.resolve(userData.users);
};

export const getUsersSync = () => {
  return userData.users;
};

export const isUsernameTaken = (username) => {
  return userData.users.some((user) => user.username === username);
};

export const isEmailTaken = (email) => {
  return userData.users.some((user) => user.email === email);
};

export const isUsernameTakenAsync = async (username) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(isUsernameTaken(username));
    }, 1000);
  });
};

export const isEmailTakenAsync = async (email) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(isEmailTaken(email));
    }, 1000);
  });
};

export const registerUser = async (newUser) => {
  const { username, email } = newUser;

  const isUsernameTakenResult = await isUsernameTakenAsync(username);
  const isEmailTakenResult = await isEmailTakenAsync(email);

  if (isUsernameTakenResult || isEmailTakenResult) {
    return false;
  }

  const userWithRegistrationpay = { ...newUser, Registrationpay: [] };

  userData.users.push(userWithRegistrationpay);
  return true;
};

export const addToCart = (userId, product) => {
  const user = userData.users.find((user) => user.id === userId);

  if (user) {
    user.Registrationpay.push(product);
  }
};

export const getRegistrationpay = (userId) => {
  const user = userData.users.find((user) => user.id === userId);

  return user ? user.Registrationpay : [];
};
