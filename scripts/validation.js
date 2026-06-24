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
    buttonEl.disabled = true;
    // add a modifier class to the buttonEl to make it gray
    // dont forget CSS
} else {
  buttonEl.disabled = false;
  // remove the disabled class
}
};

// TODO - Implement the same to the other error messages.

const setEventListeners = (formEl) => {
  const inputList = Array.from(formEl.querySelectorAll(".modal__input"));
  const buttonEl = formEl.querySelector(".modal__button");

  // TODO - Handle initial states
  // toggleButtonState(inputList, buttonElement);

  inputList.forEach((inputEl) => {
    inputEl.addEventListener("input", function () {
      checkInputValidity(formEl, inputEl);
      toggleButtonState(inputList, buttonElement);
    });
  });
};

const enableValidation = () => {
  const formList = document.querySelectorAll(".modal__form");
  formList.forEach((formEl) => {
    setEventListeners(formEl);
  });
};

enableValidation();
