const editProfileBtn = document.querySelector(".profile_edit-btn");
const editProfileModal = document.querySelector("#edit-profile-modal");
const editProileCloseBtn = editProfileModal.querySelector(".modal_close-btn");

editProfileBtn.addEventListener("click", function () {
  editProfileModal.classList.add("modal_is-opened");
});
