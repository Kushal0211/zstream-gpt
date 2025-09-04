export const checkValidData = (email, password) => {
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

  const isEmailValid = emailRegex.test(email);
  const isValidPassword = passwordRegex.test(password);

  if (!isEmailValid) return "Email address is not valid";
  if (!isValidPassword) return "Password entered is not up to standards";

  return null;
};
