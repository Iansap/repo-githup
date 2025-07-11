function showBio(name, bio) {
  document.getElementById("bioModalLabel").innerText = name;
  document.getElementById("bioContent").innerText = bio;
  const modal = new bootstrap.Modal(document.getElementById("bioModal"));
  modal.show();
}
