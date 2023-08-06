export function getFormValues(form) {
  const formData = new FormData(form);
  const formValues = {};

  formData.forEach((value, key) => {
    formValues[key] = value;
  });

  return formValues;
}
