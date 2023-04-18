// Initialize Game
let currentEntry = startingEntry;
let entryToShow = {};
let playerCharacter = {};
let currentAdventure = JSON.parse(JSON.stringify(adventure));
let currentOpponent = {};

function startNewGame(event) {
  currentAdventure = JSON.parse(JSON.stringify(adventure));
  const chosenCharacter = event.target.id;
  playerCharacter = JSON.parse(
    JSON.stringify(availableCharacters[chosenCharacter])
  );
  renderEntry(startingEntry);
  renderPlayerArea();
  renderLoadSaveArea("loadSaveArea", true);
}

function startSavedGame(savedCharacter, savedLocation, savedAdventure) {
  currentAdventure = savedAdventure;
  playerCharacter = savedCharacter;
  renderEntry(savedLocation);
  renderPlayerArea();
  renderLoadSaveArea("loadSaveArea", true);
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

  playerCharacter.experience += currentOpponent.value;

  renderInfoNotificationModal(
    "Victory!",
    "You have defeated your opponent! You gain " +
      currentOpponent.value +
      " experience points. Also see the new options to choose from."
  );

  renderPlayerArea();

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

  currentOpponent = {};
}

function playerDies() {
  clearDisplayArea(encounter);

  let displayMessage = playerDiesMessage.text;

  if (entryToShow.npc.npcId) {
    displayMessage = playerDiesMessage[entryToShow.npc.npcId];
  }

  renderPlayerDiesModal(playerDiesMessage.title, displayMessage);
}

function rollDie() {
  return Math.ceil(Math.random() * 6);
}

function fight() {
  const playerDie = rollDie();
  const opponentDie = rollDie();

  renderDieRolls(playerDie, opponentDie);

  if (
    currentOpponent.agility + opponentDie <
    playerCharacter.agility + playerDie
  ) {
    currentOpponent.endurance--;

    renderFightResult("opponentHit");
    renderOpponentEnduranceArea(currentOpponent.endurance);
  } else {
    playerCharacter.endurance--;
    renderPlayerArea();

    renderFightResult("playerHit");
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
    playerCharacter.inventory[itemId] = entryToShow.items[itemId];
    playerCharacter.experience += entryToShow.items[itemId].value;
    delete entryToShow.items[itemId];
    updateAdventure();
    renderPlayerArea();
    renderEntry(currentEntry);
  } else {
    renderInventoryFullModal();
  }
}

function dropItem(event) {
  const clickedItem = event.target;
  const itemId = clickedItem.getAttribute("data-itemToDrop");
  const itemValue = clickedItem.getAttribute("data-item-value");
  playerCharacter.experience -= itemValue;

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
  const itemValue = clickedItem.getAttribute("data-item-value");
  const relevantReference = clickedItem.getAttribute("data-relevantReference");

  if (itemType === "provisions") {
    if (playerCharacter.endurance + itemValue <= playerCharacter.enduranceMax) {
      playerCharacter.endurance += itemValue;
    } else {
      playerCharacter.endurance = playerCharacter.enduranceMax;
    }

    delete playerCharacter.inventory[itemToUse];

    renderPlayerArea();

    renderInfoNotificationModal(
      "Yummy!",
      "You've just eaten the provisions and gained up to " +
        itemValue +
        " endurance points."
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
      "This is not the right location to use this item. You might want to try again at this location: " +
        currentAdventure[relevantReference].title +
        "."
    );
  }
}

function updateAdventure() {
  currentAdventure[currentEntry] = entryToShow;
}

function saveGame(characterData, locationData, adventureData) {
  const savedGame = {
    character: characterData,
    location: locationData,
    adventure: adventureData,
  };

  localStorage.setItem(adventureTitle, JSON.stringify(savedGame));
  renderGameSaved();
}

function loadGame() {
  const savedGame = JSON.parse(localStorage.getItem(adventureTitle));
  if (savedGame) {
    startSavedGame(
      savedGame.character,
      savedGame.location,
      savedGame.adventure
    );
    renderGameLoaded();
  } else {
    renderNoGameSaved();
  }
}
