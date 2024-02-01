exports.convertDate = (value) => {
  let date = value ? value : new Date();
  return date?.toISOString()?.replace(/T/, " ")?.replace(/\..+/, "");
};

exports.validateReq = (key, value, validations) => {
  if (value == "" || !value || value == null || value == undefined) {
    return `${key} value shouldn't be empty`;
  } else if (value.length < validations.minLength) {
    return `${key} value should be ${validations.minLength} chars`;
  }
};
