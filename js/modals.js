// These functions generate the HTML for the modals used in the game

function generateStartModal() {
  const startModal = document.createElement("div");
  startModal.classList.add("modal", "fade");
  startModal.id = "startModal";
  startModal.tabIndex = "-1";
  startModal.setAttribute("aria-labelledby", "startModalLabel");
  startModal.setAttribute("aria-hidden", "true");
  startModal.setAttribute("data-bs-backdrop", "static");
  startModal.setAttribute("data-bs-keyboard", "false");

  const modalDialog = document.createElement("div");
  modalDialog.classList.add(
    "modal-dialog",
    "modal-lg",
    "modal-dialog-scrollable"
  );

  const modalContent = document.createElement("div");
  modalContent.classList.add(
    "modal-content",
    "bg-secondary",
    "bg-gradient",
    "text-light"
  );

  const modalBody = document.createElement("div");
  modalBody.classList.add("modal-body");

  const row1 = document.createElement("div");
  row1.classList.add("row");

  const col1 = document.createElement("div");
  col1.classList.add("col-lg-12");

  const img = document.createElement("img");
  img.src = "";
  img.id = "start-logo";
  img.classList.add("img-fluid", "mb-3", "rounded");
  img.alt = "";

  const startDesc = document.createElement("div");
  startDesc.id = "start-description";

  const row2 = document.createElement("div");
  row2.classList.add("row");
  row2.id = "chooseCharacterArea";

  col1.appendChild(img);
  col1.appendChild(startDesc);
  row1.appendChild(col1);

  const loadRow = document.createElement("div");
  loadRow.classList.add("row");
  const loadCol = document.createElement("div");
  loadCol.classList.add("col");
  const loadArea = document.createElement("p");
  loadArea.classList.add("text-center");
  loadArea.id = "loadArea";

  loadCol.appendChild(loadArea);
  loadRow.appendChild(loadCol);

  modalBody.appendChild(row1);
  modalBody.appendChild(row2);
  modalBody.appendChild(loadRow);

  modalContent.appendChild(modalBody);

  modalDialog.appendChild(modalContent);

  startModal.appendChild(modalDialog);

  document.body.appendChild(startModal);
}

function generateMapModal() {
  const mapModal = document.createElement("div");
  mapModal.className = "modal fade";
  mapModal.id = "mapModal";
  mapModal.tabIndex = "-1";
  mapModal.setAttribute("aria-labelledby", "mapModal");
  mapModal.setAttribute("aria-hidden", "true");
  mapModal.setAttribute("data-bs-keyboard", "true");

  const modalDialog = document.createElement("div");
  modalDialog.className = "modal-dialog modal-xl modal-dialog-centered";

  const modalContent = document.createElement("div");
  modalContent.className = "modal-content bg-secondary bg-gradient text-light";

  const modalBody = document.createElement("div");
  modalBody.className = "modal-body";

  const rowDiv = document.createElement("div");
  rowDiv.className = "row";

  const colDiv = document.createElement("div");
  colDiv.className = "col-12 text-center";

  const mapImage = document.createElement("img");
  mapImage.id = "mapImage";
  mapImage.src = "";
  mapImage.alt = "";
  mapImage.className = "img-fluid p-4";

  const closeButton = document.createElement("button");
  closeButton.type = "button";
  closeButton.className = "btn btn-outline-light";
  closeButton.setAttribute("data-bs-dismiss", "modal");
  closeButton.textContent = "Close";

  const buttonParagraph = document.createElement("p");
  buttonParagraph.className = "text-center";
  buttonParagraph.appendChild(closeButton);

  colDiv.appendChild(mapImage);
  colDiv.appendChild(buttonParagraph);

  rowDiv.appendChild(colDiv);
  modalBody.appendChild(rowDiv);

  modalContent.appendChild(modalBody);
  modalDialog.appendChild(modalContent);

  mapModal.appendChild(modalDialog);

  document.body.appendChild(mapModal);
}

function generatePlayerDiesModal() {
  // Create the HTML elements
  const modalDiv = document.createElement("div");
  modalDiv.className = "modal fade";
  modalDiv.id = "playerDiesModal";
  modalDiv.tabIndex = "-1";
  modalDiv.setAttribute("aria-labelledby", "playerDiesModal");
  modalDiv.setAttribute("aria-hidden", "true");
  modalDiv.setAttribute("data-bs-backdrop", "static");
  modalDiv.setAttribute("data-bs-keyboard", "false");

  const modalDialogDiv = document.createElement("div");
  modalDialogDiv.className = "modal-dialog modal-md modal-dialog-centered";

  const modalContentDiv = document.createElement("div");
  modalContentDiv.className = "modal-content bg-danger bg-gradient text-light";

  const modalBodyDiv = document.createElement("div");
  modalBodyDiv.className = "modal-body";

  const rowDiv = document.createElement("div");
  rowDiv.className = "row";

  const colDiv = document.createElement("div");
  colDiv.className = "col-12 text-center";

  const titleH2 = document.createElement("h2");
  titleH2.id = "playerDiesTitle";

  const messageDiv = document.createElement("p");
  messageDiv.id = "playerDiesMessageText";

  const restartBtn = document.createElement("button");
  restartBtn.type = "button";
  restartBtn.className = "btn btn-outline-light";
  restartBtn.textContent = "Restart Quest";
  restartBtn.setAttribute("data-bs-dismiss", "modal");

  const img = document.createElement("img");
  img.className = "w-100 object-fit-contain shadow rounded";
  img.src = "img/locations/image_ed3ad.jpg";

  // Append the elements to the DOM
  colDiv.appendChild(titleH2);
  colDiv.appendChild(messageDiv);
  colDiv.appendChild(document.createElement("br"));
  colDiv.appendChild(restartBtn);
  colDiv.appendChild(document.createElement("br"));
  colDiv.appendChild(document.createElement("br"));
  colDiv.appendChild(img);

  rowDiv.appendChild(colDiv);

  modalBodyDiv.appendChild(rowDiv);

  modalContentDiv.appendChild(modalBodyDiv);

  modalDialogDiv.appendChild(modalContentDiv);

  modalDiv.appendChild(modalDialogDiv);

  document.body.appendChild(modalDiv);

  restartBtn.addEventListener("click", () => {
    renderIntroduction(introduction, availableCharacters);
  });
}

function generateInventoryFullModal() {
  const inventoryFullModal = document.createElement("div");
  inventoryFullModal.className = "modal fade";
  inventoryFullModal.id = "inventoryFullModal";
  inventoryFullModal.tabIndex = "-1";
  inventoryFullModal.setAttribute("aria-labelledby", "inventoryFullModal");
  inventoryFullModal.setAttribute("aria-hidden", "true");
  inventoryFullModal.setAttribute("data-bs-keyboard", "true");

  const modalDialog = document.createElement("div");
  modalDialog.className = "modal-dialog modal-md modal-dialog-centered";

  const modalContent = document.createElement("div");
  modalContent.className = "modal-content bg-success bg-gradient text-light";

  const modalBody = document.createElement("div");
  modalBody.className = "modal-body";

  const rowDiv = document.createElement("div");
  rowDiv.className = "row";

  const colDiv = document.createElement("div");
  colDiv.className = "col-12 text-center";

  const title = document.createElement("h2");
  title.textContent = "No Room in Your Inventory";

  const message = document.createElement("p");
  message.textContent =
    "You can't carry any more items. You must drop something first.";

  const itemPickupMessage = document.createElement("p");
  itemPickupMessage.id = "item-pickup-message";

  const cancelButton = document.createElement("button");
  cancelButton.type = "button";
  cancelButton.className = "btn btn-outline-light";
  cancelButton.setAttribute("data-bs-dismiss", "modal");
  cancelButton.textContent = "Cancel";

  const buttonParagraph = document.createElement("p");
  buttonParagraph.className = "text-center";
  buttonParagraph.appendChild(cancelButton);

  colDiv.appendChild(title);
  colDiv.appendChild(message);
  colDiv.appendChild(itemPickupMessage);
  colDiv.appendChild(buttonParagraph);

  rowDiv.appendChild(colDiv);
  modalBody.appendChild(rowDiv);

  modalContent.appendChild(modalBody);
  modalDialog.appendChild(modalContent);

  inventoryFullModal.appendChild(modalDialog);
  document.body.appendChild(inventoryFullModal);
}

function generateNotificationsModal() {
  const notificationsModal = document.createElement("div");
  notificationsModal.classList.add("modal", "fade");
  notificationsModal.id = "notificationsModal";
  notificationsModal.tabIndex = "-1";
  notificationsModal.setAttribute("aria-labelledby", "notificationsModal");
  notificationsModal.setAttribute("aria-hidden", "true");
  notificationsModal.setAttribute("data-bs-keyboard", "true");

  const modalDialog = document.createElement("div");
  modalDialog.classList.add(
    "modal-dialog",
    "modal-md",
    "modal-dialog-centered"
  );

  const modalContent = document.createElement("div");
  modalContent.classList.add(
    "modal-content",
    "bg-success",
    "bg-gradient",
    "text-light"
  );

  const modalBody = document.createElement("div");
  modalBody.classList.add("modal-body");

  const row1 = document.createElement("div");
  row1.classList.add("row");

  const col1 = document.createElement("div");
  col1.classList.add("col-12", "text-center");

  const title = document.createElement("h2");
  title.id = "notifications-title";

  const message = document.createElement("p");
  message.id = "notifications-message";

  const closeButtonContainer = document.createElement("p");
  closeButtonContainer.classList.add("text-center");

  const closeButton = document.createElement("button");
  closeButton.type = "button";
  closeButton.classList.add("btn", "btn-outline-light");
  closeButton.setAttribute("data-bs-dismiss", "modal");
  closeButton.textContent = "Close";

  col1.appendChild(title);
  col1.appendChild(message);
  closeButtonContainer.appendChild(closeButton);
  col1.appendChild(closeButtonContainer);
  row1.appendChild(col1);

  modalBody.appendChild(row1);
  modalContent.appendChild(modalBody);
  modalDialog.appendChild(modalContent);
  notificationsModal.appendChild(modalDialog);

  document.body.appendChild(notificationsModal);
}

function generateDetailsModal() {
  // Create the modal element
  const modal = document.createElement("div");
  modal.classList.add("modal", "fade");
  modal.setAttribute("id", "detailsModal");
  modal.setAttribute("tabindex", "-1");
  modal.setAttribute("aria-labelledby", "detailsModalLabel");
  modal.setAttribute("aria-hidden", "true");
  modal.setAttribute("data-bs-keyboard", "true");

  // Create the modal dialog element
  const modalDialog = document.createElement("div");
  modalDialog.classList.add(
    "modal-dialog",
    "modal-lg",
    "modal-dialog-scrollable"
  );

  // Create the modal content element
  const modalContent = document.createElement("div");
  modalContent.classList.add(
    "modal-content",
    "bg-secondary",
    "bg-gradient",
    "text-light"
  );

  // Create the modal body element
  const modalBody = document.createElement("div");
  modalBody.classList.add("modal-body");

  // Create the first row
  const row1 = document.createElement("div");
  row1.classList.add("row");

  const col1 = document.createElement("div");
  col1.classList.add("col-12");

  const closeButton = document.createElement("button");
  closeButton.classList.add("btn", "btn-sm", "btn-outline-light");
  closeButton.setAttribute("data-bs-dismiss", "modal");
  closeButton.textContent = "Close";

  const p1 = document.createElement("p");
  p1.classList.add("text-end");
  p1.appendChild(closeButton);

  col1.appendChild(p1);
  row1.appendChild(col1);

  // Create the second row
  const row2 = document.createElement("div");
  row2.classList.add("row");

  const col2 = document.createElement("div");
  col2.classList.add("col-lg-6");

  const title = document.createElement("h2");
  title.classList.add("details-title");

  const description = document.createElement("p");
  description.classList.add("details-description");

  col2.appendChild(title);
  col2.appendChild(description);

  const col3 = document.createElement("div");
  col3.classList.add("col-lg-6", "text-center");

  const image = document.createElement("img");
  image.classList.add("img-fluid", "rounded");
  image.setAttribute("id", "details-image");
  image.setAttribute("src", "");

  col3.appendChild(image);

  row2.appendChild(col2);
  row2.appendChild(col3);

  // Assemble the modal
  modalBody.appendChild(row1);
  modalBody.appendChild(row2);
  modalContent.appendChild(modalBody);
  modalDialog.appendChild(modalContent);
  modal.appendChild(modalDialog);

  // Add the modal to the DOM
  document.body.appendChild(modal);
}

function generateCharacterSheet(character, showDetailsButton) {
  const characterCol = document.createElement("div");
  const characterAlert = document.createElement("div");
  const characterInventory = document.createElement("div");
  const characterLogoImage = document.createElement("img");
  const characterParagraph = document.createElement("p");
  const characterAgility = document.createElement("span");
  const characterEndurance = document.createElement("span");
  const characterFortune = document.createElement("span");
  const characterExperience = document.createElement("span");

  characterCol.classList.add("col");
  characterAlert.classList.add("alert");
  characterAlert.classList.add("alert-dark");
  characterAlert.classList.add("text-center");
  characterAlert.setAttribute("id", "playerInnerArea" + character.name);

  characterLogoImage.setAttribute("src", character.logo);
  characterLogoImage.setAttribute("alt", character.name);
  characterLogoImage.classList.add("img-fluid");

  characterAgility.classList.add("badge");
  characterAgility.classList.add("bg-primary");
  const characterAgilityValue = document.createTextNode(character.agility);
  const characterAgilityLabel = document.createTextNode("Agility: ");
  characterAgility.appendChild(characterAgilityLabel);
  characterAgility.appendChild(characterAgilityValue);

  characterEndurance.classList.add("badge");
  characterEndurance.classList.add("bg-primary");
  characterEndurance.classList.add("ms-1");
  const characterEnduranceValue = document.createTextNode(character.endurance);
  const characterEnduranceMax = document.createTextNode(character.enduranceMax);
  const characterEnduranceLabel = document.createTextNode("Endurance: ");
  const characterEnduranceSeparator = document.createTextNode(" / ");
  characterEndurance.appendChild(characterEnduranceLabel);
  characterEndurance.appendChild(characterEnduranceValue);
  characterEndurance.appendChild(characterEnduranceSeparator);
  characterEndurance.appendChild(characterEnduranceMax);

  characterFortune.classList.add("badge");
  characterFortune.classList.add("bg-primary");
  characterFortune.classList.add("ms-1");
  const characterFortuneValue = document.createTextNode(character.fortune);
  const characterFortuneLabel = document.createTextNode("Fortune: ");
  characterFortune.appendChild(characterFortuneLabel);
  characterFortune.appendChild(characterFortuneValue);

  characterExperience.classList.add("badge");
  characterExperience.classList.add("bg-success");
  characterExperience.classList.add("ms-1");
  const characterExperienceValue = document.createTextNode(
    character.experience
  );
  const characterExperienceLabel = document.createTextNode("Experience: ");
  characterExperience.appendChild(characterExperienceLabel);
  characterExperience.appendChild(characterExperienceValue);

  characterParagraph.appendChild(characterAgility);
  characterParagraph.appendChild(characterEndurance);
  characterParagraph.appendChild(characterFortune);
  characterParagraph.appendChild(characterExperience);

  characterInventory.setAttribute("id", "characterInventoryArea");
  characterInventory.classList.add("row");

  characterAlert.appendChild(characterLogoImage);
  characterAlert.appendChild(characterParagraph);

  if (showDetailsButton) {
    const characterDetailsButton = document.createElement("button");
    characterDetailsButton.classList.add("btn");
    characterDetailsButton.classList.add("btn-outline-secondary");
    characterDetailsButton.classList.add("mb-2");
    characterDetailsButton.setAttribute("data-bs-toggle", "modal");
    characterDetailsButton.setAttribute("data-bs-target", "#detailsModal");
    characterDetailsButton.setAttribute("data-bs-imagePath", character.logo);
    characterDetailsButton.setAttribute(
      "data-bs-title",
      "You are " + character.name
    );
    characterDetailsButton.setAttribute(
      "data-bs-description",
      character.description
    );
    const characterDetailsButtonText =
      document.createTextNode("Character Details");
    characterDetailsButton.appendChild(characterDetailsButtonText);
    characterAlert.appendChild(characterDetailsButton);
  }

  characterAlert.appendChild(characterInventory);

  characterCol.appendChild(characterAlert);

  return characterCol;
}
