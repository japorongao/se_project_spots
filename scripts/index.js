const editProfileBtn = document.querySelector(".profile_edit-btn");
const editProfileModal = document.querySelector("#edit-profile-modal");
const editProileCloseBtn = editProfileModal.querySelector(".modal_close-btn");

const newPostBtn = document.querySelector(".profile_new-post-btn");
const newPostModal = document.querySelector("#new-post-modal");
const newPostCloseBtn = newPostModal.querySelector(".modal_close-btn");

editProfileBtn.addEventListener("click", function () {
  editProfileModal.classList.add("modal_is-opened");
});

editProfileBtn.addEventListener("click", function () {
  editProfileModal.classList.remove("modal_is-opened");
});

newPostBtn.addEventListener("click", function () {
  newPostModal.classList.add("modal_is-opened");
});

newPostBtn.addEventListener("click", function () {
  newPostModal.classList.remove("modal_is-opened");
});
