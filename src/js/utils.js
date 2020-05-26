const getRandom = function(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
};

const validators = {
  required: value => !!value || "Required.",
  password: value => value.length >= 3 || "Min 3 characters",
  email: value => {
    const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return pattern.test(value) || "Invalid e-mail.";
  }
};

export default {
  getRandom,
  validators
};
