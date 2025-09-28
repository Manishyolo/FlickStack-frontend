const errorMessages = {
  name: "Name must be between 3 and 20 characters",
  emptyname: "Please enter your name",
  email: "Please enter a valid Email address",
  emptyemail: "Please enter your email",
  password: "Password must be between 4 and 10 characters",
  emptypassword: "Please enter your password",
  emptyfields: "Please fill all the fields",
};

const validateForm = (form) => {
 

  const Error = { name: "", email: "", password: "" };
  const LoginError = { email: "", password: "" };

  if (form.type === "Sign up") {
    if (!form.name) {
      Error.name = errorMessages.emptyname;
    } else if (form.name.length < 3 || form.name.length > 20) {
      Error.name = errorMessages.name;
    }

    if (!form.email) {
      Error.email = errorMessages.emptyemail;
    } else if (!form.email.includes("@gmail.com")) {
      Error.email = errorMessages.email;
    }
    if (!form.password) {
      Error.password = errorMessages.emptypassword;
    } else if (form.password.length < 4 || form.password.length > 10) {
      Error.password = errorMessages.password;
    }

    return Error;
  }

  if (!form.email) {
    console.log(form);
    
    LoginError.email = errorMessages.emptyemail;
  } else if (!form.email.includes("@gmail.com")) {
    LoginError.email = errorMessages.email;
  }

  if (!form.password) {
    LoginError.password = errorMessages.emptypassword;
  } else if (form.password.length < 4 || form.password.length > 10) {
    LoginError.password = errorMessages.password;
   
  }
  
  return LoginError;
};

export default validateForm;
