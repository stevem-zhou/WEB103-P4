const validate = (isConvertible, partIsConvertible) => {
  if ((isConvertible == "true") && (partIsConvertible == false)) {
    alert("The part is not compatible with the car!");
    return false
  }
  return true
};

export default {
    validate
}