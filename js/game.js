// Initialize Game
let currentEntry = "";
let entryToShow = {};
let playerCharacter = {};
let currentAdventure = JSON.parse(JSON.stringify(adventure));
let currentOpponent = {};

function startGame(event) {
  currentAdventure = JSON.parse(JSON.stringify(adventure));
  const chosenCharacter = event.target.id;
  playerCharacter = JSON.parse(
    JSON.stringify(availableCharacters[chosenCharacter])
  );
  renderEntry(startingEntry);
  renderPlayerArea();
}

// For debugging
function jumpToEntryId() {
  const entryId = document.querySelector("#entryId").value;
  renderEntry(entryId);
}

function goToEntry(event) {
  const optionLink = event.target;
  const entryId = optionLink.getAttribute("data-entrytogoto");
  renderEntry(entryId);
  renderPlayerArea();
  location.hash = "#top";
}

function testRoll(value) {
  const dieRoll = rollDie();

  if (playerCharacter[value] > dieRoll) {
    renderIncidentResult(entryToShow.incident.success.text);

    entryToShow.incident.success.connections.forEach((connection) => {
      renderOptions(connection.text, connection.reference);
      entryToShow.connections.push({
        text: connection.text,
        reference: connection.reference,
      });
    });
    entryToShow.incident = {};
    updateAdventure();
  } else {
    renderIncidentResult(entryToShow.incident.fail.text);

    playerCharacter.endurance -= entryToShow.incident.fail.enduranceDeducted;
    renderPlayerArea();

    entryToShow.incident.fail.connections.forEach((connection) => {
      renderOptions(connection.text, connection.reference);
      entryToShow.connections.push({
        text: connection.text,
        reference: connection.reference,
      });
    });

    if (playerCharacter.endurance <= 0) {
      playerDies();
    }

    entryToShow.incident = {};
    updateAdventure();
  }
}

function opponentDies() {
  clearDisplayArea(encounter);
  clearDisplayArea(choices);

  renderInfoNotificationModal(
    "Victory!",
    "You have defeated your opponent! See the new options to choose from."
  );

  if (currentOpponent.onDeath) {
    currentOpponent.onDeath.forEach((eachOption) => {
      renderOptions(eachOption.text, eachOption.reference);
      entryToShow.connections.push({
        text: eachOption.text,
        reference: eachOption.reference,
      });
    });

    entryToShow.encounter = {};
    updateAdventure();
  }

  currentOpponent.name = "";
  currentOpponent.agility = 0;
  currentOpponent.endurance = 0;
}

function playerDies() {
  clearDisplayArea(encounter);

  const modalPlayerDeath = new bootstrap.Modal(
    document.getElementById("playerDiesModal")
  );

  const playerDiesTitleArea = document.getElementById("playerDiesTitle");
  const playerDiesMessageTextArea = document.getElementById(
    "playerDiesMessageText"
  );

  clearDisplayArea(playerDiesTitleArea);
  clearDisplayArea(playerDiesMessageTextArea);

  playerDiesTitleArea.textContent = playerDiesMessage.title;

  if (entryToShow.npc.npcId) {
    playerDiesMessageTextArea.textContent =
      playerDiesMessage[entryToShow.npc.npcId];
  }

  playerDiesMessage.text.forEach((messageText) => {
    const messageTextParagraph = document.createElement("p");
    const messageTextContent = document.createTextNode(messageText);
    messageTextParagraph.appendChild(messageTextContent);
    playerDiesMessageTextArea.appendChild(messageTextParagraph);
  });

  modalPlayerDeath.show();
}

function rollDie() {
  return Math.ceil(Math.random() * 6);
}

function fight() {
  const playerDie = rollDie();
  const opponentDie = rollDie();

  const opponentDieArea = document.getElementById("opponentDieArea");
  const playerDieArea = document.getElementById("playerDieArea");

  const playerDieValue = document.createTextNode(playerDie);
  const opponentDieValue = document.createTextNode(opponentDie);

  opponentDieArea.removeChild(opponentDieArea.firstChild);
  playerDieArea.removeChild(playerDieArea.firstChild);

  opponentDieArea.appendChild(opponentDieValue);
  playerDieArea.appendChild(playerDieValue);

  const opponentEnduranceArea = document.getElementById(
    "opponentEnduranceArea"
  );

  const fightResultArea = document.getElementById("fightResult");
  fightResultArea.classList.add(
    "text-light",
    "text-center",
    "my-2",
    "p-1",
    "mx-2",
    "rounded"
  );

  if (
    currentOpponent.agility + opponentDie <
    playerCharacter.agility + playerDie
  ) {
    currentOpponent.endurance--;

    fightResultArea.classList.remove("bg-danger");
    fightResultArea.classList.add("bg-success");
    fightResultArea.textContent = "You hit your opponent!";

    opponentEnduranceArea.textContent = currentOpponent.endurance;
  } else {
    playerCharacter.endurance--;
    renderPlayerArea();

    fightResultArea.classList.remove("bg-success");
    fightResultArea.classList.add("bg-danger");

    fightResultArea.textContent = "Your opponent hit you!";
  }

  if (currentOpponent.endurance <= 0) {
    opponentDies();
  }

  if (playerCharacter.endurance <= 0) {
    playerDies();
  }
}

function getItem(event) {
  const clickedItem = event.target;
  const itemId = clickedItem.getAttribute("data-itemToGet");
  if (Object.values(playerCharacter.inventory).length < 3) {
    const gottenItem = entryToShow.items[itemId];
    playerCharacter.inventory[itemId] = gottenItem;
    delete entryToShow.items[itemId];
    updateAdventure();
    renderPlayerArea();
    renderEntry(currentEntry);
  } else {
    const modalInventoryFull = new bootstrap.Modal(
      document.getElementById("inventoryFullModal")
    );
    modalInventoryFull.show();
  }
}

function dropItem(event) {
  const clickedItem = event.target;
  const itemId = clickedItem.getAttribute("data-itemToDrop");

  entryToShow.items[itemId] = playerCharacter.inventory[itemId];

  updateAdventure();

  delete playerCharacter.inventory[itemId];

  renderEntry(currentEntry);
  renderPlayerArea();
}

function useItem(event) {
  const clickedItem = event.target;
  const itemToUse = clickedItem.getAttribute("data-itemToUse");
  const itemType = clickedItem.getAttribute("data-item-type");
  const relevantReference = clickedItem.getAttribute("data-relevantReference");

  if (itemType === "provisions") {
    if (playerCharacter.endurance + 2 <= playerCharacter.enduranceMax) {
      playerCharacter.endurance += 2;
    } else {
      playerCharacter.endurance = playerCharacter.enduranceMax;
    }

    delete playerCharacter.inventory[itemToUse];

    renderPlayerArea();

    renderInfoNotificationModal(
      "Yummy!",
      "You've just eaten the provisions and gained endurance."
    );
  }

  if (itemType === "tool" && currentEntry === relevantReference) {
    playerCharacter.inventory[itemToUse].addedChoices.forEach((option) => {
      entryToShow.connections.push({
        text: option.text,
        reference: option.reference,
      });
    });

    delete playerCharacter.inventory[itemToUse];

    updateAdventure();
    renderPlayerArea();
    renderEntry(currentEntry);
  } else if (itemType === "tool" && currentEntry !== relevantReference) {
    renderInfoNotificationModal(
      "Oops!",
      "This is not the right location to use this item."
    );
  }
}

function updateAdventure() {
  currentAdventure[currentEntry] = entryToShow;
}
