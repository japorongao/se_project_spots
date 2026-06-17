const showInputError(formEl, inputEl, errorMsg) => {
  const errorMsgID = inputEl.id + ".error";
  const errorMsgEl = document.querySelector("#" + errorMsgID);
  errorMsgEl.textContent = errorMsg;
  console.log(errorMsgID);
};

const checkInputValidity = (formEl, inputEl) => {
  if (!inputEl.validity.valid)
    showInputError(formEl, inputEl, inputEl.validationMessage);
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
      // toggleButtonState(inputList, buttonElement);
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
