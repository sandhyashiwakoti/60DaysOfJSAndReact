//seleting potential elements
const form = document.getElementById("profileForm");
const inputName = document.getElementById("inputName");
const inputTitle = document.getElementById("inputTitle");
const inputDescription = document.getElementById("inputDescription");
const inputAvatar = document.getElementById("inputAvatar");
const userProfile = document.querySelector("#userProfile"); // Selecting this once is more efficient

//avatarUrl
let avatarUrl = null;

inputAvatar.addEventListener("change", getAvatarSrc);

function getAvatarSrc(event) {
  // Get the selected file and create a temporary URL for it
  const file = event.target.files[0];
  if (file) {
    avatarUrl = URL.createObjectURL(file);
  }
}

function deleteProfile(e) {
  // Find the parent .profile-info card and remove it
  e.closest(".profile-info").remove();
}

form.addEventListener("submit", (e) => {
  e.preventDefault();

  // Check if the text fields have values
  if (inputName.value && inputTitle.value && inputDescription.value) {
    // Determine which image source to use
    // If avatarUrl has been set by the user, use it. Otherwise, use the default.
    const imageSource = avatarUrl ? avatarUrl : "img/avatar.png";

    userProfile.innerHTML += `
			<div class="profile-info"> 
					<div class="avatar">
							<img src="${imageSource}" alt="avatar" />
					</div>
					<div class="info">
							<div class="profileName-flexbox">
									<h2>${inputName.value}</h2>
									<div class="edit-delete-icon"> 
											<i class="fas fa-user-times" onclick="deleteProfile(this)"></i>
									</div>
							</div>
							<h3>${inputTitle.value}</h3>
							<p>${inputDescription.value}</p>
					</div>
			</div>
      `;

    form.reset();
    avatarUrl = null; // Reset the avatarUrl for the next submission
  } else {
    alert("Please fill out all the fields.");
  }
});
