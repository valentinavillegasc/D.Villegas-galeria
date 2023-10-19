const validation = (form) => {
  const errors = {};
  if (form.name && !/^[A-Z][a-zA-Z ]+$/.test(form.name))
    errors.name = "Invalid name";
  if (form.email && !/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(form.email))
    errors.email = "Invalid email format";
  return errors;
};

export default validation;
