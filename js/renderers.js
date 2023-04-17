// Initialize DOM Elements
let textOutput = document.getElementById("textOutput");
let encounter = document.getElementById("encounter");
let incidentArea = document.getElementById("incident");
let itemsOnLocation = document.getElementById("itemsOnLocation");
let npcArea = document.getElementById("npcArea");
let choices = document.getElementById("choices");
let locationTitleArea = document.getElementById("locationTitle");
let locationImage = document.getElementById("locationImage");
let showCurrentEntry = document.getElementById("currentEntry");

function renderIntroduction(introduction, availableCharacters) {
  const detailsModal = document.getElementById("detailsModal");
  detailsModal.addEventListener("show.bs.modal", renderDetailsModal);

  const playerCharacterArea = document.getElementById("playerCharacterArea");

  if (playerCharacterArea) {
    clearDisplayArea(playerCharacterArea);
  }

  const introductionModal = new bootstrap.Modal(
    document.getElementById("startModal")
  );

  const chooseCharacterArea = document.getElementById("chooseCharacterArea");

  clearDisplayArea(chooseCharacterArea);

  document.getElementById("start-logo").src = adventureLogo;
  document.getElementById("start-logo").alt = adventureTitle;

  const introductionTextArea = document.getElementById("start-description");
  clearDisplayArea(introductionTextArea);

  introduction.text.forEach((introductionLine) => {
    const introductionItem = document.createElement("p");
    const introductionText = document.createTextNode(introductionLine);
    introductionItem.appendChild(introductionText);
    introductionTextArea.appendChild(introductionItem);
  });

  for (const key in availableCharacters) {
    if (availableCharacters.hasOwnProperty(key)) {
      const characterSheet = generateCharacterSheet(availableCharacters[key]);
      chooseCharacterArea.appendChild(characterSheet);
      introductionModal.show();

      const characterAlert = document.getElementById(
        "playerInnerArea" + availableCharacters[key].name
      );
      const characterButton = document.createElement("button");

      characterButton.classList.add("btn");
      characterButton.classList.add("btn-outline-primary");

      const characterButtonText = document.createTextNode(
        "Start Adventure as "
      );
      const characterButtonName = document.createTextNode(key);
      characterButton.appendChild(characterButtonText);
      characterButton.appendChild(characterButtonName);
      characterButton.dataset.bsDismiss = "modal";
      characterButton.setAttribute("id", key);
      characterAlert.appendChild(characterButton);
    }
  }

  for (const key in availableCharacters) {
    const startGameButton = document.getElementById(key);
    startGameButton.addEventListener("click", startNewGame);
  }
}

function renderPlayerArea() {
  clearDisplayArea(playerCharacterArea);

  const playerStats = generateCharacterSheet(playerCharacter);
  playerCharacterArea.appendChild(playerStats);

  let characterInventoryArea = document.getElementById(
    "characterInventoryArea"
  );

  if (Object.values(playerCharacter.inventory).length > 0) {
    const divRow = document.createElement("div");
    divRow.classList.add("row");

    for (const itemKey in playerCharacter.inventory) {
      // Create a new div with the class "col"
      const invDiv = document.createElement("div");
      invDiv.classList.add("col");

      // Create a new paragraph and append it to the div
      const invParagraph = document.createElement("p");
      invDiv.appendChild(invParagraph);

      // Create a new text node with the name of the item and append it to the paragraph
      const itemName = document.createTextNode(
        playerCharacter.inventory[itemKey].name
      );
      invParagraph.appendChild(itemName);

      // Create a new image and append it to the div
      const itemImg = document.createElement("img");
      itemImg.src = playerCharacter.inventory[itemKey].image;
      itemImg.alt = playerCharacter.inventory[itemKey].name;
      itemImg.classList.add("img-fluid", "rounded");
      itemImg.setAttribute("data-bs-toggle", "modal");
      itemImg.setAttribute("data-bs-target", "#detailsModal");
      itemImg.setAttribute(
        "data-bs-title",
        playerCharacter.inventory[itemKey].name
      );
      itemImg.setAttribute(
        "data-bs-description",
        playerCharacter.inventory[itemKey].description
      );
      itemImg.setAttribute(
        "data-bs-imagepath",
        playerCharacter.inventory[itemKey].image
      );
      invDiv.appendChild(itemImg);

      // Create a new "Use" button and append it to the div
      const useButton = document.createElement("button");
      useButton.classList.add("btn", "btn-sm", "btn-outline-primary", "m-1");
      useButton.id = `useItemButton-${itemKey}`;
      useButton.setAttribute(
        "data-item-type",
        playerCharacter.inventory[itemKey].type
      );
      useButton.setAttribute(
        "data-item-value",
        playerCharacter.inventory[itemKey].value
      );
      useButton.setAttribute("data-itemToUse", itemKey);
      useButton.setAttribute(
        "data-itemValue",
        playerCharacter.inventory[itemKey].value
      );
      useButton.setAttribute(
        "data-relevantReference",
        playerCharacter.inventory[itemKey].relevantReference
      );
      const useButtonText = document.createTextNode("Use");
      useButton.appendChild(useButtonText);
      invDiv.appendChild(useButton);

      // Create a new "Drop" button and append it to the div
      const dropButton = document.createElement("button");
      dropButton.classList.add("btn", "btn-sm", "btn-outline-danger", "m-1");
      dropButton.id = `dropItemButton-${itemKey}`;
      dropButton.setAttribute("data-itemToDrop", itemKey);
      dropButton.setAttribute(
        "data-item-value",
        playerCharacter.inventory[itemKey].value
      );
      const dropButtonText = document.createTextNode("Drop");
      dropButton.appendChild(dropButtonText);
      invDiv.appendChild(dropButton);

      characterInventoryArea.appendChild(invDiv);
    }

    for (itemKey in playerCharacter.inventory) {
      const useItemButton = document.getElementById(`useItemButton-${itemKey}`);
      useItemButton.addEventListener("click", useItem);
      const dropItemButton = document.getElementById(
        `dropItemButton-${itemKey}`
      );
      dropItemButton.addEventListener("click", dropItem);
    }
  } else {
    clearDisplayArea(characterInventoryArea);
  }

  const characterAlert = document.getElementById(
    "playerInnerArea" + playerCharacter.name
  );

  const gameButtonArea = document.createElement("p");

  const characterButton = document.createElement("button");

  characterButton.classList.add("btn");
  characterButton.classList.add("btn-outline-primary");
  characterButton.classList.add("m-1");

  const characterButtonText = document.createTextNode("Restart Adventure");
  characterButton.appendChild(characterButtonText);

  gameButtonArea.appendChild(characterButton);

  const mapButton = document.createElement("button");

  mapButton.classList.add("btn");
  mapButton.classList.add("btn-outline-success");
  mapButton.classList.add("m-1");

  const mapButtonText = document.createTextNode("Show Map");
  mapButton.appendChild(mapButtonText);
  mapButton.setAttribute("id", "mapButton");

  gameButtonArea.appendChild(mapButton);

  characterAlert.appendChild(gameButtonArea);

  characterButton.addEventListener("click", () => {
    renderIntroduction(introduction, availableCharacters);
  });
  mapButton.addEventListener("click", renderMap);
}

function renderMap() {
  const mapModal = new bootstrap.Modal(document.getElementById("mapModal"));

  const mapImage = document.getElementById("mapImage");
  mapImage.src = adventureMap;
  mapImage.alt = adventureTitle;

  mapModal.show();
}

function renderEntry(currentEntryId) {
  currentEntry = currentEntryId;

  console.log("currentEntryId");
  console.log(currentEntryId);

  // Clear all areas
  clearDisplayArea(textOutput);
  clearDisplayArea(locationTitleArea);
  clearDisplayArea(incidentArea);
  clearDisplayArea(itemsOnLocation);
  clearDisplayArea(encounter);
  clearDisplayArea(npcArea);
  clearDisplayArea(choices);

  entryToShow = currentAdventure[currentEntryId];
  //  showCurrentEntry.innerHTML = currentEntryId;

  entryToShow.text.forEach((textElement) => {
    const textEntry = document.createElement("p");
    const textEntryText = document.createTextNode(textElement);
    textEntry.appendChild(textEntryText);
    textOutput.appendChild(textEntry);
  });

  if (entryToShow.specialText) {
    entryToShow.specialText.forEach((specialTextElement) => {
      const specialTextEntry = document.createElement("p");
      specialTextEntry.classList.add("alert");
      specialTextEntry.classList.add("alert-info");
      const specialTextEntryText = document.createTextNode(specialTextElement);
      specialTextEntry.appendChild(specialTextEntryText);
      textOutput.appendChild(specialTextEntry);
    });
  }

  if (entryToShow.encounter.encounterId) {
    currentOpponent = entryToShow.encounter;
    renderEncounter(currentOpponent);
  }

  if (entryToShow.items) {
    for (const itemKey in entryToShow.items) {
      renderItemOnLocation(itemKey, entryToShow);
    }

    for (const itemKey in entryToShow.items) {
      let getItemButton = document.getElementById(`button-getItem-${itemKey}`);
      getItemButton.addEventListener("click", getItem);
    }
  }

  if (entryToShow.incident.text) {
    renderIncidentOnLocation(entryToShow);
  }

  if (entryToShow.npc.npcId) {
    renderNpcEntry(entryToShow);
  }

  entryToShow.connections.forEach((option) => {
    renderOptions(option.text, option.reference);
  });

  const locationTitleText = document.createTextNode(entryToShow.title);
  locationTitleArea.appendChild(locationTitleText);
  locationImage.src = `img/locations/image_${currentEntryId}.jpg`;
}

function renderOptions(text, reference) {
  const optionItem = document.createElement("li");
  const optionImage = document.createElement("img");
  optionImage.setAttribute("src", "img/utilities/medallion.png");
  optionImage.setAttribute("alt", "Go to");
  optionImage.setAttribute("width", 40);
  optionImage.classList.add("m-2");

  const optionText = document.createTextNode(text);
  optionItem.appendChild(optionImage);
  optionItem.appendChild(optionText);
  optionItem.classList.add("list-group-item");
  optionItem.classList.add("list-group-item-action");
  optionItem.classList.add("list-group-item-primary");
  optionItem.setAttribute("data-entrytogoto", `${reference}`);
  choices.appendChild(optionItem);
  optionItem.addEventListener("click", goToEntry);
  updateAdventure();
}

function renderDetailsModal(event) {
  const button = event.relatedTarget;
  const imagePath = button.getAttribute("data-bs-imagePath");
  const title = button.getAttribute("data-bs-title");
  const imageDescription = button.getAttribute("data-bs-description");

  const detailsImage = document.getElementById("details-image");
  detailsImage.src = imagePath;

  const modalTitle = document.querySelector(".details-title");
  modalTitle.textContent = title;

  const modalDescription = document.querySelector(".details-description");
  modalDescription.textContent = imageDescription;
}

function renderEncounter(encounterData) {
  const encounterDiv = document.createElement("div");
  encounterDiv.classList.add("alert", "alert-danger");

  const rowDiv1 = document.createElement("div");
  rowDiv1.classList.add("row");

  const colDiv1 = document.createElement("div");
  colDiv1.classList.add("col-md-8");

  const encounterTitle = document.createElement("h3");
  encounterTitle.textContent = encounterData.name;

  const encounterDescription = document.createElement("p");
  encounterDescription.textContent = encounterData.description;

  colDiv1.appendChild(encounterTitle);
  colDiv1.appendChild(encounterDescription);

  const colDiv2 = document.createElement("div");
  colDiv2.classList.add("col-md-4");

  const encounterImage = document.createElement("img");
  encounterImage.src = encounterData.image;
  encounterImage.alt = encounterData.name;
  encounterImage.classList.add("img-fluid", "border", "border-dark", "rounded");

  colDiv2.appendChild(encounterImage);

  rowDiv1.appendChild(colDiv1);
  rowDiv1.appendChild(colDiv2);

  const rowDiv2 = document.createElement("div");
  rowDiv2.classList.add("row");

  const colDiv3 = document.createElement("div");
  colDiv3.classList.add("col-md-12");
  colDiv3.classList.add("m-1");
  colDiv3.classList.add("text-center");

  const agilityBtn = document.createElement("button");
  agilityBtn.classList.add("btn", "btn-outline-danger", "me-2");
  agilityBtn.textContent = "Agility: " + encounterData.agility;

  const enduranceSpan = document.createElement("span");
  enduranceSpan.id = "opponentEnduranceArea";
  enduranceSpan.textContent = encounterData.endurance;

  const enduranceBtn = document.createElement("button");
  enduranceBtn.classList.add("btn", "btn-outline-danger", "me-2");
  enduranceBtn.textContent = "Endurance: ";
  enduranceBtn.appendChild(enduranceSpan);

  const fightBtn = document.createElement("button");
  fightBtn.classList.add("btn", "btn-lg", "btn-danger", "me-3");
  fightBtn.textContent = "Fight";
  fightBtn.onclick = function () {
    fight();
  };

  const opponentDieRollSpan = document.createElement("span");
  opponentDieRollSpan.id = "opponentDieArea";
  opponentDieRollSpan.classList.add(
    "bg-dark",
    "text-light",
    "py-1",
    "px-2",
    "rounded"
  );
  opponentDieRollSpan.textContent = "0";

  const playerDieRollSpan = document.createElement("span");
  playerDieRollSpan.id = "playerDieArea";
  playerDieRollSpan.classList.add(
    "bg-secondary",
    "text-light",
    "py-1",
    "px-2",
    "rounded"
  );
  playerDieRollSpan.textContent = "0";

  const fightResultDiv = document.createElement("div");
  fightResultDiv.classList.add(
    "text-light",
    "text-center",
    "my-2",
    "p-1",
    "mx-2",
    "rounded"
  );
  fightResultDiv.id = "fightResult";

  const fightControl = document.createElement("div");
  fightControl.classList.add("mt-2");
  fightControl.appendChild(fightBtn);

  const fightInfo = document.createElement("div");
  fightInfo.classList.add("mt-4");
  fightInfo.appendChild(document.createTextNode("Opponent's die roll: "));
  fightInfo.appendChild(opponentDieRollSpan);
  fightInfo.appendChild(document.createTextNode(" Your die roll: "));
  fightInfo.appendChild(playerDieRollSpan);
  fightInfo.appendChild(fightResultDiv);

  colDiv3.appendChild(agilityBtn);
  colDiv3.appendChild(enduranceBtn);
  colDiv3.appendChild(fightControl);
  colDiv3.appendChild(fightInfo);

  rowDiv2.appendChild(colDiv3);

  encounterDiv.appendChild(rowDiv1);
  encounterDiv.appendChild(rowDiv2);

  clearDisplayArea(encounter);
  encounter.appendChild(encounterDiv);
}

function renderInfoNotificationModal(titleText, notificationText) {
  const modalNotification = new bootstrap.Modal(
    document.getElementById("notificationsModal")
  );
  modalNotification.show();

  const modalTitle = document.createTextNode(titleText);
  const modalTitleArea = document.getElementById("notifications-title");

  clearDisplayArea(modalTitleArea);

  modalTitleArea.appendChild(modalTitle);

  const modalDescription = document.createTextNode(notificationText);
  const modalDescriptionArea = document.getElementById("notifications-message");

  clearDisplayArea(modalDescriptionArea);

  modalDescriptionArea.appendChild(modalDescription);
}

function renderItemOnLocation(itemKey, entryToShow) {
  const itemOnLocationDiv = document.createElement("div");
  itemOnLocationDiv.classList.add("alert", "alert-info");
  const itemOnLocationRow = document.createElement("div");
  itemOnLocationRow.classList.add("row");

  const itemOnLocationCol1 = document.createElement("div");
  itemOnLocationCol1.classList.add("col-md-8");

  const itemOnLocationCol1Title = document.createElement("h3");
  const itemOnLocationCol1TitleText = document.createTextNode(
    entryToShow.items[itemKey].name
  );
  itemOnLocationCol1Title.appendChild(itemOnLocationCol1TitleText);

  const itemOnLocationCol1Description = document.createElement("p");
  const itemOnLocationCol1DescriptionText = document.createTextNode(
    entryToShow.items[itemKey].description
  );
  itemOnLocationCol1Description.appendChild(itemOnLocationCol1DescriptionText);

  itemOnLocationCol1.appendChild(itemOnLocationCol1Title);
  itemOnLocationCol1.appendChild(itemOnLocationCol1Description);

  const itemOnLocationCol1ItemParagraph = document.createElement("p");

  const itemOnLocationCol1ItemButton = document.createElement("button");
  itemOnLocationCol1ItemButton.classList.add("btn", "btn-info");
  itemOnLocationCol1ItemButton.setAttribute("id", `button-getItem-${itemKey}`);
  itemOnLocationCol1ItemButton.setAttribute("data-itemToGet", itemKey);
  itemOnLocationCol1ItemButton.setAttribute(
    "data-itemValue",
    entryToShow.items[itemKey].value
  );
  const itemOnLocationCol1ItemButtonText = document.createTextNode("Get Item");
  itemOnLocationCol1ItemButton.appendChild(itemOnLocationCol1ItemButtonText);
  itemOnLocationCol1ItemParagraph.appendChild(itemOnLocationCol1ItemButton);

  itemOnLocationCol1.appendChild(itemOnLocationCol1ItemParagraph);

  const itemOnLocationCol2 = document.createElement("div");
  itemOnLocationCol2.classList.add("col-md-4");
  const itemOnLocationCol2Image = document.createElement("img");
  itemOnLocationCol2Image.classList.add(
    "img-fluid",
    "border",
    "border-dark",
    "rounded"
  );
  itemOnLocationCol2Image.setAttribute("src", entryToShow.items[itemKey].image);
  itemOnLocationCol2Image.setAttribute("alt", entryToShow.items[itemKey].name);

  itemOnLocationCol2.appendChild(itemOnLocationCol2Image);

  itemOnLocationRow.appendChild(itemOnLocationCol1);
  itemOnLocationRow.appendChild(itemOnLocationCol2);
  itemOnLocationDiv.appendChild(itemOnLocationRow);

  itemsOnLocation.appendChild(itemOnLocationDiv);
}

function renderIncidentOnLocation(entryToShow) {
  const incidentDiv = document.createElement("div");
  incidentDiv.classList.add("alert", "alert-warning");

  const incidentRow = document.createElement("div");
  incidentRow.classList.add("row");

  const incidentCol = document.createElement("div");
  incidentCol.classList.add("col-md-12");

  const incidentParagraph = document.createElement("p");
  const incidentText = document.createTextNode(entryToShow.incident.text);
  incidentParagraph.appendChild(incidentText);

  const incidentButtonParagraph = document.createElement("p");
  const incidentTestButton = document.createElement("button");
  incidentTestButton.classList.add("btn", "btn-warning");
  const incidentTestButtonText = document.createTextNode(
    "Test " + entryToShow.incident.condition
  );
  incidentTestButton.appendChild(incidentTestButtonText);

  incidentButtonParagraph.appendChild(incidentTestButton);

  incidentCol.appendChild(incidentParagraph);
  incidentCol.appendChild(incidentButtonParagraph);
  incidentRow.appendChild(incidentCol);
  incidentDiv.appendChild(incidentRow);
  incidentArea.appendChild(incidentDiv);

  incidentTestButton.addEventListener("click", () => {
    testRoll(entryToShow.incident.condition);
  });
}

function renderIncidentResult(incidentResult) {
  clearDisplayArea(incidentArea);

  const incidentDiv = document.createElement("div");
  incidentDiv.classList.add("alert", "alert-warning");

  const incidentRow = document.createElement("div");
  incidentRow.classList.add("row");

  const incidentCol = document.createElement("div");
  incidentCol.classList.add("col-md-12");

  const incidentParagraph = document.createElement("p");
  const incidentResultText = document.createTextNode(incidentResult);

  incidentParagraph.appendChild(incidentResultText);

  incidentCol.appendChild(incidentParagraph);
  incidentRow.appendChild(incidentCol);

  incidentDiv.appendChild(incidentRow);

  incidentArea.appendChild(incidentDiv);
}

function renderNpcEntry(entryToShow) {
  const npcDiv = document.createElement("div");
  npcDiv.classList.add("alert", "alert-info");

  const npcRow = document.createElement("div");
  npcRow.classList.add("row");

  const npcCol1 = document.createElement("div");
  npcCol1.classList.add("col-md-8");

  const npcCol1Title = document.createElement("h3");
  const npcCol1TitleText = document.createTextNode(entryToShow.npc.name);

  npcCol1Title.appendChild(npcCol1TitleText);

  const npcCol1Description = document.createElement("p");
  const npcCol1DescriptionText = document.createTextNode(
    entryToShow.npc.description
  );
  npcCol1Description.appendChild(npcCol1DescriptionText);

  const npcCol1ButtonParagraph = document.createElement("p");

  const npcCol1Button1 = document.createElement("button");
  npcCol1Button1.classList.add("btn", "btn-primary");
  npcCol1Button1.setAttribute("id", `npc-${entryToShow.npc.npcId}`);
  npcCol1Button1.setAttribute("data-entrytogoto", entryToShow.npc.reference);
  npcCol1Button1.onclick = goToEntry;
  const npcCol1Button1Text = document.createTextNode("Talk");
  npcCol1Button1.appendChild(npcCol1Button1Text);

  npcCol1ButtonParagraph.appendChild(npcCol1Button1);

  const npcCol1Button2 = document.createElement("button");
  npcCol1Button2.classList.add("btn", "btn-danger", "mx-1");
  npcCol1Button2.setAttribute("id", `npc-fight-${entryToShow.npc.npcId}`);
  npcCol1Button2.onclick = playerDies;

  const npcCol1Button2Text = document.createTextNode("Fight");
  npcCol1Button2.appendChild(npcCol1Button2Text);

  npcCol1ButtonParagraph.appendChild(npcCol1Button2);

  npcCol1.appendChild(npcCol1Title);
  npcCol1.appendChild(npcCol1Description);
  npcCol1.appendChild(npcCol1ButtonParagraph);

  const npcCol2 = document.createElement("div");
  npcCol2.classList.add("col-md-4");

  const npcCol2Image = document.createElement("img");
  npcCol2Image.classList.add("img-fluid", "border", "border-dark", "rounded");
  npcCol2Image.setAttribute("src", entryToShow.npc.image);
  npcCol2Image.setAttribute("alt", entryToShow.npc.name);

  npcCol2.appendChild(npcCol2Image);

  npcRow.appendChild(npcCol1);
  npcRow.appendChild(npcCol2);

  npcDiv.appendChild(npcRow);

  npcArea.appendChild(npcDiv);
}

function clearDisplayArea(areaName) {
  while (areaName.firstChild) {
    areaName.removeChild(areaName.firstChild);
  }
}

function renderFightResult(whoGotHit) {
  const fightResultArea = document.getElementById("fightResult");

  if (whoGotHit === "opponentHit") {
    fightResultArea.classList.remove("bg-danger");
    fightResultArea.classList.add("bg-success");
    fightResultArea.textContent = "You hit your opponent!";
  } else if (whoGotHit === "playerHit") {
    fightResultArea.classList.remove("bg-success");
    fightResultArea.classList.add("bg-danger");
    fightResultArea.textContent = "Your opponent hit you!";
  }
}

function renderDieRolls(playerDie, opponentDie) {
  const opponentDieArea = document.getElementById("opponentDieArea");
  const playerDieArea = document.getElementById("playerDieArea");

  const playerDieValue = document.createTextNode(playerDie);
  const opponentDieValue = document.createTextNode(opponentDie);

  opponentDieArea.removeChild(opponentDieArea.firstChild);
  playerDieArea.removeChild(playerDieArea.firstChild);

  opponentDieArea.appendChild(opponentDieValue);
  playerDieArea.appendChild(playerDieValue);
}

function renderOpponentEnduranceArea(endurance) {
  const opponentEnduranceArea = document.getElementById(
    "opponentEnduranceArea"
  );
  opponentEnduranceArea.textContent = endurance;
}

function renderPlayerDiesModal(title, message) {
  const modalPlayerDeath = new bootstrap.Modal(
    document.getElementById("playerDiesModal")
  );

  const playerDiesTitleArea = document.getElementById("playerDiesTitle");
  const playerDiesMessageTextArea = document.getElementById(
    "playerDiesMessageText"
  );

  clearDisplayArea(playerDiesTitleArea);
  clearDisplayArea(playerDiesMessageTextArea);

  playerDiesTitleArea.textContent = title;

  message.forEach((messageText) => {
    const messageTextParagraph = document.createElement("p");
    const messageTextContent = document.createTextNode(messageText);
    messageTextParagraph.appendChild(messageTextContent);
    playerDiesMessageTextArea.appendChild(messageTextParagraph);
  });

  modalPlayerDeath.show();
}

function renderInventoryFullModal() {
  const modalInventoryFull = new bootstrap.Modal(
    document.getElementById("inventoryFullModal")
  );
  modalInventoryFull.show();
}

function renderNoGameSaved() {
  const detailsModal = new bootstrap.Modal(
    document.getElementById("detailsModal")
  );

  const detailsImage = document.getElementById("details-image");
  detailsImage.src = "img/utilities/no-game-saved.jpg";

  const modalTitle = document.querySelector(".details-title");
  modalTitle.textContent = "No Saved Game Found!";

  const modalDescription = document.querySelector(".details-description");
  modalDescription.textContent =
    "The games are saved in your local storage. No saved game was found. Please note that sometimes your local storage can be cleared by your browser and the saved game will be lost.";
  detailsModal.show();
}

function renderGameLoaded() {
  const detailsModal = new bootstrap.Modal(
    document.getElementById("detailsModal")
  );

  const detailsImage = document.getElementById("details-image");
  detailsImage.src = "img/utilities/game-loaded.jpg";

  const modalTitle = document.querySelector(".details-title");
  modalTitle.textContent = "Your game was successfully loaded!";

  const modalDescription = document.querySelector(".details-description");
  modalDescription.textContent =
    "Your saved game was loaded. You can continue playing from where you left off. Your character, your chracters inventory and your current location will be restored.";
  detailsModal.show();
}

function renderLoadSaveArea(areaToAddTo, includeSaveButton) {
  const loadSaveArea = document.getElementById(areaToAddTo);
  clearDisplayArea(loadSaveArea);

  const loadButton = document.createElement("button");

  loadButton.classList.add("btn");
  loadButton.classList.add("btn-sm");
  loadButton.classList.add("btn-outline-light");
  loadButton.classList.add("m-1");

  const loadButtonText = document.createTextNode("Load Game");
  loadButton.appendChild(loadButtonText);
  loadButton.setAttribute("id", "loadButton");
  loadButton.setAttribute("data-bs-dismiss", "modal");

  loadSaveArea.appendChild(loadButton);

  loadButton.addEventListener("click", () => {
    loadGame();
  });

  if (includeSaveButton) {
    const saveButton = document.createElement("button");

    saveButton.classList.add("btn");
    saveButton.classList.add("btn-sm");
    saveButton.classList.add("btn-outline-light");
    saveButton.classList.add("m-1");

    const saveButtonText = document.createTextNode("Save Game");
    saveButton.appendChild(saveButtonText);
    saveButton.setAttribute("id", "saveButton");

    loadSaveArea.appendChild(saveButton);

    saveButton.addEventListener("click", () => {
      saveGame(playerCharacter, currentEntry, currentAdventure);
    });
  }
}
