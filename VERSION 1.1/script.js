"use strict";

const modalBtn = document.querySelectorAll(".show-modal");
const modalWindow = document.querySelector(".modal");
const closeModal = document.querySelector(".close-modal");
const overlay = document.querySelector(".overlay");

// EVENT HANDLERS
// 1. Close modal function
const modalCloser = function () {
	modalWindow.classList.add("hidden");
	overlay.classList.add("hidden");
};
// 2. Open modal function
const modalOpener = function () {
	modalWindow.classList.remove("hidden");
	overlay.classList.remove("hidden");
};

// Adding event listener to overlay, closeModal and modalBtn elements
overlay.addEventListener("click", modalCloser);
closeModal.addEventListener("click", modalCloser);
for (let i = 0; i < modalBtn.length; i++)
	modalBtn[i].addEventListener("click", modalOpener);

// Adding key press event that closes modal
document.addEventListener("keydown", function (e) {
	if (e.key === "Escape") {
		modalCloser();
	}
});
