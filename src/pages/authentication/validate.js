export const validate = (data) => {
  const errors = {};

  if (!data.name.trim()) {
    errors.name = "Username Required";
  } else {
    delete errors.name;
  }

  if (!data.email) {
    errors.email = "email Required";
  } else if (!/\S+@\S+\.\S+/.test(data.email)) {
    errors.email = "email Invalid";
  } else {
    delete errors.email;
  }

  if (!data.password) {
    errors.password = "Password Empyt";
  } else if (data.password.lenght < 6) {
    errors.password = "it should be more than 6 character or more";
  } else {
    delete errors.password;
  }

  if (!data.confirmPassword) {
    errors.confirmPassword = "confirm the password";
  } else if (data.confirmPassword !== data.password) {
    errors.confirmPassword = "Not mactch";
  } else {
    delete errors.confirmPassword;
  }
  if (data.isAccepted) {
    delete errors.isAccepted;
  } else {
    errors.isAccepted = "accept is required";
  }

  return errors;
};
