const settings = {
  formSelector: ".modal__form",
  inputSelector: ".modal__input",
  submitButtomSelector: ".modal__button",
  inactiveButtonClass: "modal__button_disabled",
  inputErrorClass: "modal__input_type_error",
  errorClass: "modal__error_visible",
};

const showInputError(formEl, inputEl, errorMsg) => {
  const errorMsgID = inputEl.id + ".error";
  const errorMsgEl = document.querySelector("#" + errorMsgID);
  errorMsgEl.textContent = errorMsg;
  console.log(errorMsgID);
  inputEl.classList.add("modal__input_type_error");
};

const hideInputError(formEl, inputEl) => {
  const errorMsgID = inputEl.id + ".error";
  const errorMsgEl = document.querySelector("#" + errorMsgID);
  errorMsgEl.textContent = "";
  console.log(errorMsgID);
  inputEl.classList.remove("modal__input_type_error");
};

const checkInputValidity = (formEl, inputEl) => {
  if (!inputEl.validity.valid)
    showInputError(formEl, inputEl, inputEl.validationMessage);
} else {
  hideInputError(formEl, inputEl);
};

const hasInvalidInput = (inputList) => {
return inputList.some((input) => {
  return !input.validity.valid;
})
};

const toggleButtonState = (inputList, buttonEl) {
  if (hasInvalidInput(inputList)) {
disableButton(buttonEl);
} else {
  buttonEl.disabled = false;
  // remove the disabled class
}
};

const disableButton = (buttonEl, config) => {
   buttonEl.disabled = true;
    // add a modifier class to the buttonEl to make it gray
    // dont forget CSS
};

const resetValidation = (formEl, inputList) => {
 inputList.forEach((input) => {
  hideInputError(formEl, input);
 })
};

// TODO - Implement the same to the other error messages.
// TODO - Use the settings object in all functions instead of hard-coded strings.

const setEventListeners = (formEl, config) => {
  const inputList = Array.from(formEl.querySelectorAll(config.inputSelector));
  const buttonEl = formEl.querySelector(".modal__button");

  // TODO - Handle initial states
  toggleButtonState(inputList, buttonElement);

  inputList.forEach((inputEl) => {
    inputEl.addEventListener("input", function () {
      checkInputValidity(formEl, inputEl, config);
      toggleButtonState(inputList, buttonElement, config);
    });
  });
};

const enableValidation = (config) => {
  const formList = document.querySelectorAll("config.formSelector");
  formList.forEach((formEl) => {
    setEventListeners(formEl, config);
  });
};



enableValidation(settings);
