// This is the data of the actual adventure with all the rooms, items, encounters, etc.

const adventureTitle = "Mansion of Trepidation";
const adventureLogo = "img/utilities/mansion-logo-3d.jpg";
const adventureMap = "img/utilities/mansion-map.svg";
const startingEntry = "e8f2c";

const playerDiesMessage = {
  title: "Your Character Dies!",
  text: [
    "You feel the last spark of life leave your body and you fall to the ground, a sudden realization overcomes you. Your adventure has come to an end. You fought valiantly, but in the end, it was not enough. Your quest has ended in defeat, and your story will be remembered as a cautionary tale to thoseswho dared to follow in your footsteps.",
    "You can restart your quest.",
  ],
  np01: [
    "You attack Melancholy, the singing cat, but miss. She throws her head back and produces a high pitched note. Her singing becomes so overpowering that your head shatters and you perish. It is all very unnecessary, you should not have attacked her. She wanted to help you and was only defending herself.",
  ],
  np02: [
    "You attack the Ghost of the Cat Girl but can't even land a blow. She is ethereal and powerful far beyond your fighting abilities. She touches you and you perish. It is all very unnecessary, you should not have attacked her. She wanted to help you.",
  ],
  np03: [
    "You attack the Bokemin but can't even land a blow. He grabs you by the arm and starts spinning you around himself. When you gathered sufficient speed, the Bokemin lets go. You crash through the Mansion's roof and continue flying toward the sky until you reach planetary orbit. You perish. It is all very unnecessary, you should not have attacked him. The Bokemin wanted to help you.",
  ],
};

const introduction = {
  title: adventureTitle,
  text: [
    "Welcome to the Mansion of Trepidation role-playing game. This is a choice-based solo fantasy adventure in the style of the 'Choose Your Own Adventure' and 'Fighting Fantasy' books.",
    "The necromancer Mortacion has abducted William, your five year old nephew. Mortacion wants to harness William's youthful energy to rejuvinate himself. This would cause William's death.",
    "Armed with your sword, shield and cunning, you have to search Mortacion's mansion and rescue William before it's too late.",
    "At the end of each entry you are presented with the options you can choose from.",
    "On your journey you will encounter vile foes, monsters, and demons to fight but also benevolent characters who will help you on your way. You will find items vital to completing your quest and provisions to replenish you.",
    "Explore each room in the mansion and use the items in the right rooms to defeat Mortacion and find William.",
  ],
};

const adventure = {
  e71f0: {
    title: "Servants' Quarters",
    text: [
      "These are the Servants' Quarters, a stark contrast to the opulence and grandeur of the rest of the house.",
      "Tucked away in a corner of the lower floors, the quarters are small and cramped, with rows of narrow beds and sparse furnishings. The walls are plain and unadorned, and the floors are made of bricks.",
    ],
    connections: [],
    encounter: {
      encounterId: "a7b9",
      name: "Box Critter",
      description:
        "A strange Box Critter crawls out of one of the chests. It looks like a cross between a frog and only the head of a dragon. It has rough, bumpy skin that is a dull green color, with razor-sharp teeth that are too large for its mouth. Its beady black eyes muster you menacingly. With a howling scream the box critter attacks you with its razor sharp teeth!",
      agility: 2,
      endurance: 1,
      value: 5,
      onDeath: [
        {
          text: "Go south to the Kitchen.",
          reference: "e53b4",
        },
      ],
      image: "img/encounters/box_critter.jpg",
    },
    items: {},
    incident: {},
    npc: {},
  },
  e756a: {
    title: "Cloud Room",
    text: [
      "You behold a breathtaking sight, the Cloud Room with tall, elegant windows that stretch from floor to ceiling, offering a stunning view of the sky outside. But what's truly remarkable about the room is the floor - it's covered in actual clouds, soft and pillowy as though you're walking on air.",
      "As you step into the room, you feel as though you're walking on a dream, the clouds shifting and molding beneath your feet as though they were alive. The room is filled with a soft, diffused light that seems to be emanating from the clouds themselves, casting a serene and peaceful atmosphere over everything within.",
      "In the corner of the room sits a plush couch that appears to grow out of the clouds themselves. The cushions are covered in a soft, velvety fabric that seems to blend seamlessly with the clouds around it. It's a place where you can sink in and relax, surrounded by the gentle rustling of the clouds and the soothing calm of the room.",
    ],
    connections: [
      { reference: "e76c8", text: "Go downstairs east to the Dungeon." },
      { reference: "e67d2", text: "Go west to the Hall of Chess." },
    ],
    encounter: {},
    items: {
      i21f8: {
        name: "Crystal Key",
        type: "tool",
        value: 20,
        description:
          "This Crystal Key of the Ancients is a thing of pure beauty, crafted from a single, flawless piece of crystal that sparkled and glimmered in the light. Its edges were sharp and precise, and as you held it in your hand, you could feel the power and magic that it contained.",
        image: "img/items/crystal-key.jpg",
        relevantReference: "efi32",
        addedChoices: [
          {
            reference: "efi33",
            text: "Enter the portal formed by the algae (thanks to the Crystal Key).",
          },
        ],
      },
    },
    incident: {},
    npc: {},
  },
  e77e0: {
    title: "Mortacion's Altar Room",
    text: [
      "You have reached Mortacion's sinister Altar Room, shadowy figures loom from twisted, grotesque statues, their malevolent gazes fixed on intruders. Flickering candlelight casts eerie, elongated shadows on the walls, intensifying the unsettling atmosphere. At the far end of the room, an ominous pentagram window dominates the space, its blood-red stained glass casting a crimson glow over the ritual altar below.",
      "Upon the cold, stone altar, remnants of dark ceremonies linger: scattered bones, dried bloodstains, and mysterious, forbidden artifacts. The air is thick with tension, and a palpable sense of dread lingers, as if the very walls bear witness to the unspeakable acts that have transpired within this unhallowed chamber.",
      "From where you stand, you can see William's Bubble Cell. But first, you must defeat Mortacion.",
    ],
    connections: [{ reference: "efi33", text: "Return to Quantum Realm" }],
    encounter: {
      encounterId: "a7b9",
      name: "Mortacion, the Mad Necromancer",
      description:
        "The mad necromancer stands tall before you, a menacing figure of darkness and malevolence. His bald head, adorned with twisted horns, serves as a sinister crown, signaling his unholy power. His glowing red eyes pierce the shadows, radiating malice and an insatiable thirst for forbidden knowledge. Enveloped in a flowing purple cloak with a dramatic high collar, the necromancer casts an imposing silhouette. The cloak is held together by an ancient amulet on his chest, pulsating with dark energy and adorned with cryptic symbols. With every step and incantation, the necromancer exudes an aura of dread, leaving no doubt as to his mastery over death and decay.",
      agility: 4,
      endurance: 6,
      value: 50,
      onDeath: [
        {
          text: "Open the William's Bubble Cell.",
          reference: "efin3",
        },
      ],
      image: "img/encounters/mortacion.jpg",
    },
    items: {},
    incident: {},
    npc: {},
  },
  e7312: {
    title: "Treasure Room",
    text: [
      "You are startled when you enter the Treasure Room with rows of wooden chests lining the walls, each one overflowing with gold coins, precious jewels, and other priceless treasures.",
      "As you move through the room, you're struck by the sheer amount of wealth that surrounds you. The coins glint in the dim light, and the jewels sparkle and dance, casting intricate patterns of color on the walls and floor, a reminder that even the greatest riches can become nothing more than a burden and a curse.",
    ],
    connections: [
      {
        reference: "e6642",
        text: "Return west to the Inner Sanctum.",
      },
    ],
    encounter: {},
    items: {
      i51ft: {
        name: "Pouch of Treasures",
        type: "tool",
        value: 100,
        description:
          "A purple pouch, crafted from rich, supple leather, overflows with gleaming gold coins and sparkling jewels. The treasures within catch the light, casting a tantalizing glow that promises wealth and adventure in a fantastical world.",
        image: "img/items/pouch-of-treasures.jpg",
        relevantReference: "x",
        addedChoices: [],
      },
    },
    incident: {},
    npc: {},
  },
  e7434: {
    title: "Holding Pens",
    text: [
      "These are the Holding Pens of the laboratory, a place of wonder and mystery, filled with strange instruments, flickering gas lamps, and the pungent smell of chemicals. But amidst the gleaming brass and bubbling flasks, there are also the cages and holding pens for the laboratory animals - a stark reminder of the cost of scientific progress.",
      "The cages are cramped and small, made of rusted iron bars that clanged and rattled with each movement of the frightened creatures inside. There are rats scurrying along the walls, their beady eyes darting fearfully as they sniffed the air for any sign of danger.",
    ],
    connections: [],
    encounter: {
      encounterId: "fa92",
      name: "Skeletal Warrior",
      description:
        "The Skeletal Warrior stands tall and imposing, its bleached bones gleaming in the flickering torchlight. Its empty dark eye sockets hint at the malevolent intelligence that lurked within its ancient frame. Clad in a cloak and wielding an ornate sword, the SKELETON WARRIOR moves with a fluid grace that belies its skeletal form. Its bones creak and groan with each movement, but it seemed to feel no pain or fatigue - for it was already dead, animated by some dark magic or foul necromancy. Prepare for battle.",
      agility: 3,
      endurance: 2,
      value: 5,
      onDeath: [
        { reference: "e5d14", text: "Go west to the Infirmary." },
        { reference: "e59d6", text: "Go south to the Stables." },
      ],
      image: "img/encounters/skeletal_warrior.jpg",
    },

    items: {},
    incident: {},
    npc: {},
  },
  e76c8: {
    title: "Dungeon",
    text: [
      "The foul Dungeon of the mansion is a dark and foreboding space, with musty air and crumbling walls. The stairs are steep and creaky, and the only light comes from a few feeble rays that filter in through the windows in the ceiling.",
      "As you descend into the basement, you're struck by the sense of decay and neglect that pervades the space. The air is thick with the scent of mildew and dampness, and the sound of dripping water echoes through the empty chambers reminding you that the darkness itself hides unspeakable horror. You seek to unlock its secrets and discover the hidden truths that lie within.",
    ],
    connections: [],
    encounter: {
      encounterId: "97d2",
      name: "Mozaku Guardian",
      description:
        "The dungeon is guarded by a Mozaku Guardian. It has two faces, one of a beautiful geisha and the other of an infernal demon. Despite being blood stained, the geisha face is alluring and enchanting, with porcelain skin, delicate features, and seductive eyes. Meanwhile, the demonic face is grotesque and terrifying, with fiery eyes, sharp fangs, and twisted horns. The Mozaku Guardian attacks you.",
      agility: 4,
      endurance: 3,
      value: 5,
      onDeath: [
        { reference: "e5d14", text: "Go upstairs north to the Infirmary" },
        { reference: "e756a", text: "Go upstairs east to the Cloud Room" },
      ],
      image: "img/encounters/mozaku_guardian.jpg",
    },
    items: {},
    incident: {},
    npc: {},
  },
  e8f2c: {
    title: "Front of Mansion",
    text: [
      "Your Quest Begins...",
      "Having reached Mortacion's mansion, it looms before you like a dark and foreboding presence. Its tall spires and steeply pitched roofs silhouetted against the moonlit sky. The building's facade is covered in ivy and other creeping vines, which seem to writhe and twist in the breeze, as though they are alive.",
      "The windows of the mansion are dark and empty, like the eyes of some monstrous creature, and the front door is massive and imposing, with intricate carvings and ornate brass handles that seem to beckon you closer, even as they warn you away.",
      "The sinister manor is a place of darkness and danger, all crafted by Mortacion's magic over the centuries from the bones of his helpless victims.",
      "You are ready to embark on your quest to find William.",
    ],
    connections: [
      {
        reference: "e4f2c",
        text: "Enter through the main entrance.",
      },
      {
        reference: "e6048",
        text: "Go east along a trail.",
      },
    ],
    encounter: {},
    items: {},
    incident: {},
    npc: {},
  },
  e4f2c: {
    title: "Grand Entrance Hall",
    text: [
      "As you step through the front doors of the mansion, you find yourself in a Grand Entrance Hall. The air is thick with the musty scent of neglect, and dust dances in the filtered light that spills in through the stained glass windows above. The walls are adorned with ornate wallpaper, peeling and faded with age, and the ceiling soars high overhead, featuring intricate moldings and a massive chandelier that hangs ominously overhead, now covered in cobwebs.",
      "The floor is made of polished wood, but years of disuse have left it scuffed and scratched, and in places, the boards creak beneath your feet. In one corner, a grand staircase ascends to the upper floors, its steps worn smooth from countless footsteps. Despite the neglect and decay, the grandeur of the entrance hall is still evident, a haunting reminder of a bygone era.",
    ],
    connections: [],
    items: {},
    incident: {},
    encounter: {
      encounterId: "e34a",
      name: "Gargoyle",
      description:
        "A putrid Gargoyle crouches low, its muscles tensed and ready to pounce. Its eyes gleam with a feral intensity, and its claws are bared, glinting in the dim light. The gargoyle seems to be coiled like a spring, waiting for the perfect moment to strike, a fierce and formidable opponent that brooks no challenge.",
      agility: 3,
      endurance: 3,
      value: 5,
      onDeath: [
        { reference: "e67d2", text: "Go north to the Hall of Chess." },
        { reference: "e6d90", text: "Go east to the Plant Atrium." },
        { reference: "e54cc", text: "Go west to the Gambling Room." },
        {
          reference: "e8f2c",
          text: "Go south to the front of the Mansion.",
        },
      ],
      image: "img/encounters/gargoyle.jpg",
    },
    npc: {},
  },
  e5256: {
    title: "Outer Sanctum",
    text: [
      "As you step into the Outer Sanctum, you're greeted by a series of burnished bronze idols, each perched atop a marble plinth that rises from the lush greenery below. The idols are intricate and detailed, depicting a range of mythical creatures and gods, and seem to glow with an inexplicable inner light.",
      "Celadon jars line the walkway, each one overflowing with exotic plants and flowers that spill over the edges in a riot of color and texture. The scents of jasmine, orchids, and other tropical blooms fill the air, mingling with the sweet aroma of damp earth and sun-warmed stone.",
      "The outer Sanctum exudes a sense of mystery and enchantment, as though you've stumbled upon a hidden garden of ancient gods and sacred rituals. The celadon jars and exotic plants add a touch of life and vibrancy to the space, providing a contrast to the cold stone and metal of the statues.",
    ],
    connections: [],
    encounter: {
      encounterId: "97e3",
      name: "Blazing Hello Pony",
      description:
        "You see a little Pony in the corner of the sanctum gritting its teeth as its muscles start to bulge and bubbles. You hear its bones cracking and snapping. The horse transforms into something else. Its face contorts into a snarling muzzle. Before you no longer stands a mere horse. Instead, you are attacked by a massive smokebelching Blazing Hello Pony.",
      agility: 5,
      endurance: 2,
      value: 8,
      onDeath: [
        { reference: "e6642", text: "Go east to the Inner Sanctum." },
        { reference: "e5b02", text: "Go west to the Laboratory." },
        { reference: "e5f26", text: "Go south to the Chamber of Summoning." },
      ],
      image: "img/encounters/blazing_hell_pony.jpg",
    },
    items: {},
    incident: {},
    npc: {},
  },
  e53b4: {
    title: "Kitchen",
    text: [
      "The Kitchen is dimly lit, the sunlight struggling to penetrate the grime that coats the windows and cobwebs that drape from the ceiling. The air is heavy with the musty scent of mold and damp wood.",
      "Rows of rusted appliances and dusty countertops stretching out into the gloom. Pots and pans hang from hooks along the walls, their surfaces tarnished and dented from years of disuse.",
      "The cabinets, once polished and gleaming, now sag from their hinges, their doors warped and splintered. The sinks are stained and chipped, their drains clogged with debris and decaying matter.",
    ],
    connections: [
      { reference: "e71f0", text: "Go north to the Servants' Quarters." },
      { reference: "e5e22", text: "Go east to the Dining Room." },
      { reference: "e6a0c", text: "Go south to the Ethereal Mirror." },
    ],
    encounter: {},
    items: {
      p47e0: {
        name: "Bag of Provisions",
        type: "provisions",
        value: 2,
        description:
          "A worn, leather bag bulges with hearty provisions fit for your adventure: crusty loaves of bread, wedges of aromatic cheese, and thick slices of savory ham, promising nourishment and sustenance for the journey ahead.",
        image: "img/items/provisions.jpg",
        relevantReference: "",
        addedChoices: [],
      },
    },
    incident: {},
    npc: {},
  },
  e54cf: {
    title: "Bedroom Oak",
    text: [
      "In the the northern corner of the bedroom stands a strange Bed Room Oak tree, its gnarled branches stretching out in all directions as if seeking something beyond the confines of the room. The tree is not like any other oak tree one might see in a forest, for it seems to be made entirely of a shimmering, otherworldly material that glows with a faint, ethereal light.",
      "The light seems to emanate from behind the tree, as if the tree were a portal to some mystical realm beyond our own.",
    ],
    connections: [
      { reference: "e6160", text: "Go west to the Sleeping Chamber." },
    ],
    encounter: {},
    items: {},
    incident: {},
    npc: {
      npcId: "np03",
      name: "The Bokemin",
      image: "img/locations/image_es1c4.jpg",
      description:
        "Infront of the oak you see the Bokemin. Standing scarcely taller than a human child, the Bokemin is a figure of unassuming stature, yet it possesses a presence that belies its size. Its body is stout and compact, built for traversing the forest's undergrowth with ease.",
      reference: "es1c4",
    },
  },
  e54cc: {
    title: "Gambling Room",
    text: [
      "You enter the Gambling Room, a tranquil and luxurious space, with walls covered in rich wood and plush carpeting underfoot. The center of the room is adorned with a green gambling table.",
      "You hear a faint, haunting, spectral music, a sad tune that seems to have no source. It's as though the very walls themselves are singing, their hidden depths echoing with the strains of the otherworldly melody.",
      "Despite the eerie nature of the music, the green room exudes a sense of comfort and serenity.",
    ],
    connections: [
      { reference: "e5e22", text: "Go north to the Dining Room." },
      { reference: "e4f2c", text: "Go east to the Entrance Hall." },
    ],
    encounter: {},
    items: {
      a0d1: {
        name: "Jewelled Dagger",
        type: "tool",
        value: 20,
        description:
          "The ornate Ancient Dagger gleams with a dark, mysterious allure. Its blade, etched with enigmatic runes, whispers of forgotten power. You realize that you can use this to enter a forbidden realm when you are in the right place.",
        image: "img/items/dagger-of-separation.jpg",
        relevantReference: "efi33",
        addedChoices: [
          {
            reference: "e77e0",
            text: "Float to your final destination (thanks to the Dagger).",
          },
        ],
      },
    },
    incident: {},
    npc: {},
  },
  e59d6: {
    title: "Stables",
    text: [
      "These are the Stables where Mortacion keeps his magnificent horses.",
      "The air inside is thick with the rich, earthy smell of straw and manure, mingled with the sweet fragrance of polished leather and the musky scent of horses. The stalls are spacious and well-appointed, yet with dark shadows concealing their contents from you.",
      "A row of wooden cabinets lines one wall, each one filled with an array of brushes, combs, and other grooming tools, while a small door at the back led to a paddock where the horses could stretch their legs and graze on fresh grass.",
    ],
    connections: [
      {
        reference: "e7434",
        text: "Go through the stables into the Holding Pens in the mansion.",
      },
      { reference: "e6048", text: "Go west along trail." },
    ],
    encounter: {},
    items: {},
    incident: {},
    npc: {
      npcId: "np01",
      name: "Melancholy, the Singing Cat",
      image: "img/locations/image_es1c2.jpg",
      description:
        "There is a strange creature here... a fluffy cat holding a miniature guitar seated before you singing a song about gold. Perched on her hind legs, Melancholy gently cradles her tiny guitar, her dainty paws plucking at the strings with remarkable finesse.",
      reference: "es1c2",
    },
  },
  e5b02: {
    title: "Laboratory",
    text: [
      "You enter Mortacion's Laboratory. It is a haunting space, with dusty shelves and cluttered workbenches lining the walls. Beakers and glassware sit atop the surfaces, filled with bubbling concoctions and strange, otherworldly substances.",
      "The air is thick with the scent of chemicals and decay, and the room seems frozen in time, as though the scientists who once worked here simply vanished into thin air.",
    ],
    connections: [
      { reference: "ef3b7", text: "Go north to the Observatory." },
      { reference: "e5256", text: "Go east to the Outer Sanctum." },
      { reference: "e6b38", text: "Go south to the Study." },
    ],
    encounter: {},
    items: {},
    incident: {},
    npc: {
      npcId: "np02",
      name: "Ghost of the Cat Girl",
      image: "img/locations/image_es1c3.jpg",
      description:
        "An eerie Ghost of the Cat Girl haunts the laboratory, drifting through the room like a whisper on the wind. Clad completely in elegant black, she glides through the air with an eerie grace. In one gloved hand, she holds a mysterious red box, its contents unknown, wrapped with intricate precision and sealed with a crimson ribbon that flutters softly in the spectral breeze.",
      reference: "es1c3",
    },
  },
  e5c06: {
    title: "Green Maze",
    text: [
      "You step into an enormous indoor Green Maze, and your eyes are immediately drawn upward to the glass ceiling overhead, which floods the room with natural light. The room is filled with an array of vibrant greenery, arranged in a maze-like formation of hedges and privet bushes that twist and turn in a seemingly endless pattern. The air is filled with the scent of blooming flowers and fresh-cut grass.",
      "As you walk through the maze, the sound of your footsteps echoes throughout the chamber. The hedges are tall and perfectly manicured, forming walls that rise high overhead, while the privet bushes are trimmed into intricate shapes that resemble works of art. Small birds flit through the branches and dart in and out of hidden nooks, adding a touch of life to the otherwise static scenery.",
      "In the center of the maze, you come across a small clearing, where a stone bench rests beneath a towering hedge. The bench is worn and weathered, but still sturdy enough to support your weight. As you sit and take in the beauty of the room, you can't help but feel as though you've stumbled upon a hidden oasis, a tranquil haven in the midst of the bustling city outside.",
    ],
    specialText: [
      "You are lost! You feel that you might be able to get through the maze if you had a compass.",
    ],
    connections: [
      {
        reference: "e6d90",
        text: "Go west to the Plant Atrium.",
      },
    ],
    encounter: {},
    items: {},
    incident: {},
    npc: {},
  },
  e5d14: {
    title: "Infirmary",
    text: [
      "This is the Infirmary is a simple and austere space, with stone walls and a polished floor. A narrow workbench graces the center of the room, flanked by a small wooden bench.",
      "Despite the simplicity of the space, there's a sense of community and healing that pervades the room, as though the shared experience of allaying sickness has forged a deep bond between those who gather here.",
    ],
    connections: [
      { reference: "e5f26", text: "Go west to the Chamber of Summoning." },
      { reference: "e7434", text: "Go east to the Holding Pens." },
      { reference: "e76c8", text: "Go downstairs south to the Dungeon." },
    ],
    encounter: {},
    items: {
      i42f3: {
        name: "Healing Potion",
        type: "provisions",
        value: 10,
        description:
          "The flask with the Potion of Healing is intricately designed, with glowing runes etched into its surface. Its contents are a potion of crushed dragon scales, mermaid tears, mandrake root, and moonflower petals that can reinvigorate you when consumed.",
        image: "img/items/potion.jpg",
        relevantReference: "",
        addedChoices: [],
      },
    },
    incident: {},
    npc: {},
  },
  e5e22: {
    title: "Dining Room",
    text: [
      "This is the Dining Room. It is an imposing yet at the same time comfortable space, with polished hardwood floors and ornate wallpaper adorning the walls. A rectangular table dominates the center of the room, surrounded by high-backed chairs and set with fine china and silverware.",
      "The room exudes an air of formality and elegance, a space reserved for good meals and cordial events.",
    ],
    connections: [],
    encounter: {},
    items: {},
    incident: {
      text: "You cross a beam of light and suddenly an arrow shoots out of a trap in the wall! Test your agility! If you are unsuccessful you will take damage.",
      condition: "agility",
      success: {
        text: "You managed to dodge the arrow.",
        connections: [
          { reference: "e70ce", text: "Go north to the Library." },
          { reference: "e54cc", text: "Go south to the Gambling Room." },
          { reference: "e67d2", text: "Go east to the Hall of Chess." },
          { reference: "e53b4", text: "Go west to the Kitchen." },
        ],
        value: 2,
      },
      fail: {
        text: "You fail to evade the arrow and take 2 endurance points of damage.",
        enduranceDeducted: 2,
        connections: [
          { reference: "e70ce", text: "Go north to the Library." },
          { reference: "e54cc", text: "Go south to the Gambling Room." },
          { reference: "e67d2", text: "Go east to the Hall of Chess." },
          { reference: "e53b4", text: "Go west to the Kitchen." },
        ],
      },
    },
    npc: {},
  },
  e5f26: {
    title: "Chamber of Summoning",
    text: [
      "You find your way to a place of unspeakable horrors: the Chamber of Summoning. The room is dimly lit, the air thick with the scent of burning incense and the sound of chanting that echoes through the space.",
      "In the center of the room, a pentagram has been etched into the floor, surrounded by arcane symbols and glyphs. Candles flicker on every surface, casting grotesque shadows on the walls, while a blood-stained altar sits - barely visibly - in one corner, its surface adorned with rusty knives and other sinister implements.",
      "The very air seems charged with malevolent energy, and the faint sound of whispers and moans can be heard just at the edge of hearing. The chamber is a place of terror and darkness, a space reserved for those who would delve into the darkest depths of the occult and the macabre.",
    ],
    connections: [],
    encounter: {
      name: "Piranha Demon",
      encounterId: "98a1",
      description:
        "In the center of the pentagram, a Piranha Demon materializes, a fearsome creature, with spiky scales that seem to gleam in the light, and red eyes that burn with a fiery intensity. Its teeth are like blades, razor-sharp and capable of tearing through flesh with ease, and its horns jut out from its forehead, giving it an even more menacing appearance. Despite its fearsome appearance, the piranha demon is simply a creature of its environment, shaped by the harsh and unforgiving waters that it calls home. Its insatiable appetite drives it to attack you.",
      agility: 4,
      endurance: 3,
      value: 5,
      onDeath: [
        { reference: "e5256", text: "Go north to the Outer Sanctum." },
        { reference: "e5d14", text: "Go east to the Infirmary." },
        { reference: "e6b38", text: "Go west to the Study." },
        { reference: "e6c64", text: "Go south to the Conservatory." },
      ],
      image: "img/encounters/piranha_demon.jpg",
    },
    items: {},
    incident: {},
    npc: {},
  },
  e6048: {
    title: "Greenhouse",
    text: [
      "The greenhouse looks to be an architectural marvel of glass and intricate ironwork. It resides amidst a verdant garden with its elegant, curving lines harmonize with nature creating a serene haven for horticultural enthusiasts and dreamers alike.",
    ],
    connections: [
      { reference: "e8f2c", text: "Go west to the front of the Mansion." },
      { reference: "e11f4", text: "Enter the Greenhouse." },
      {
        reference: "e59d6",
        text: "Enter the mansion east through the Stable door.",
      },
    ],
    encounter: {},
    items: {},
    incident: {},
    npc: {},
  },
  e11f4: {
    title: "Inside the Greenhouse",
    text: [
      "Inside the greenhouse, a symphony of verdant hues and delicate fragrances captivates the senses. Sunbeams stream through the ornate glass, illuminating a verdant oasis of lush foliage and vibrant blooms. Graceful ferns brush against the whimsical ironwork, while exotic orchids, delicate roses, and citrus trees mingle in this botanical haven, transporting visitors to an enchanting world of nature's finest masterpieces.",
    ],
    connections: [{ reference: "e6048", text: "Leave Greenhouse." }],
    encounter: {},
    items: {
      i91d9: {
        name: "Magnifying Glass",
        type: "tool",
        value: 10,
        description:
          "The Magnifying Glass, a mystical glass imbued with the essence of a thousand scrutinizing eyes, unveils hidden secrets and obscure details, empowering its wielder with unparalleled perception and an unerring gaze into the arcane.",
        image: "img/items/magnifying-glass.jpg",
        relevantReference: "e6b38",
        addedChoices: [
          {
            reference: "ebo13",
            text: "Read the book (thanks to the Magnifying Glass).",
          },
        ],
      },
    },
    incident: {},
    npc: {},
  },
  e6160: {
    title: "Sleeping Chamber",
    text: [
      "This is Mortacion's Sleeping Chamber, a luxurious space, with richly patterned wallpaper and polished hardwood floors. The centerpiece of the room is a massive four-poster bed, its ornate wooden frame towering overhead and draped with silken blankets in a state of disarray.",
      "The bed itself seems almost otherworldly, a vast expanse of soft pillows and plush linens that invite you to sink in and relax.",
    ],
    connections: [
      { reference: "e6c64", text: "Go west to the Conservatory." },
      { reference: "e54cf", text: "Go east to the Bedroom Oak." },
    ],
    encounter: {},
    items: {},
    incident: {},
    npc: {},
  },
  e6b38: {
    title: "Study",
    text: [
      "Mortacion's Study is a space of intellectual curiosity and sophistication. The walls are lined with bookshelves, their surfaces crammed with leather-bound tomes and dusty volumes that speak to the erudition of the room's owner.",
      "A large set of windows dominates the space, casting their light on a reading desk.",
      "Despite the air of learnedness and intellectualism that pervades the space, there's a sense of dread and uneasiness about it. The forbidden knowledge that Mortacion has amassed over the years seems to have been warped the room itself.",
    ],
    specialText: [
      "You see an old leather-bound book open on a table. It's covered in dust and cobwebs, but you can still make out the title History of Necromancy. If you have a mystical Magnifying Glass, you can read the arcane language in the book.",
    ],
    connections: [
      { reference: "e5b02", text: "Go north to the Laboratory." },
      { reference: "e5f26", text: "Go east to the Chamber of Summoning." },
      { reference: "e70ce", text: "Go south to the Library." },
    ],
    encounter: {},
    items: {},
    incident: {},
    npc: {},
  },
  e70ce: {
    title: "Library",
    text: [
      "You have entered the Library. Leather bound books neatly line the shelves. The only sound that breaks the silence is the occasional creaking of the floorboards and the distant sound of wind whistling through the cracks in the walls.",
      "Despite the emptiness of the room, there's a sense of history and mystery that pervades the space, as though the very walls themselves are whispering secrets of the past.",
      "As you walk through the empty library, you can't help but feel a sense of sadness and loss, as though the books and knowledge that once filled this space have been lost to the ages.",
    ],
    connections: [],
    encounter: {},
    items: {},
    incident: {
      text: "You step on the wrong magical symbol on the floor one and are threatened to be struck down by a column of flame! You will need to prove your agility to evade this threat.",
      condition: "agility",
      success: {
        text: "You managed to dodge the column of flame.",
        connections: [
          { reference: "e6b38", text: "Go north to the Study." },
          { reference: "e5e22", text: "Go south to the Dining Room." },
        ],
        value: 2,
      },
      fail: {
        text: "You fail to evade the column of flame and take 2 endurance points of damage.",
        enduranceDeducted: 2,
        repeat: false,
        connections: [
          { reference: "e6b38", text: "Go north to the Study." },
          { reference: "e5e22", text: "Go south to the Dining Room." },
        ],
      },
    },
    npc: {},
  },
  efi32: {
    title: "Dimension of Madness",
    text: [
      "In the Dimension of Madness, the very foundations of reality unravel, revealing a realm where logic holds no sway. Here, amorphous blobs of vibrant, ever-shifting colors float aimlessly through the void, their surfaces roiling with mesmerizing patterns that bewilder the senses and confound the mind.",
      "In this realm of chaos, magical light suffuses the air, casting an iridescent haze that refracts and disperses, painting the abyss with a dazzling, yet disorienting, spectrum of hues. The ethereal glow seems to possess a life of its own, pulsing and flickering like the heartbeat of the dimension itself.",
    ],
    specialText: [
      "Despite the line between fantasy and nightmare blurring, you recognize that you can pass through to the next cosmic realm by stepping through a knot of cosmic algae using a Crystal Key.",
    ],
    connections: [{ reference: "e6642", text: "Return to Inner Sanctum." }],
    encounter: {},
    items: {},
    incident: {},
    npc: {},
  },
  e6c64: {
    title: "Conservatory",
    text: [
      "You have entered the Conservatory. Its arches and ornate details exude a sense of elegance and refinement, while the lush greenery that fills the space lends a feeling of tranquility and natural beauty. Large windows line the walls, allowing sunlight to flood the space and providing unobstructed views of the surrounding gardens.",
      "The conservatory is home to a vast collection of plants, arranged in a carefully curated display that showcases the diversity of the natural world. Towering palms and ferns create a verdant canopy overhead, while exotic orchids and blooming tropical flowers provide bursts of vibrant color throughout the space.",
      "As you stroll through the conservatory, you can't help but feel as though you've been transported to a lush, verdant paradise, far removed from the bustle of the outside world.",
    ],
    connections: [
      { reference: "e5f26", text: "Go north to the Chamber of Summoning." },
      { reference: "e6160", text: "Go east to the Sleeping Chamber." },
      { reference: "e67d2", text: "Go south to the Hall of Chess." },
    ],
    encounter: {},
    items: {
      p47e1: {
        name: "Bag of Provisions",
        type: "provisions",
        value: 2,
        description:
          "A worn, leather bag bulges with hearty provisions fit for your adventure: crusty loaves of bread, wedges of aromatic cheese, and thick slices of savory ham, promising nourishment and sustenance for the journey ahead.",
        image: "img/items/provisions.jpg",
        relevantReference: "",
        addedChoices: [],
      },
    },
    incident: {},
    npc: {},
  },
  e6d90: {
    title: "Plant Atrium",
    text: [
      "The Plant Atrium is a breathtaking space, with tall trees and lush greenery stretching up towards the glass ceiling above. The warm sunlight filters in, casting intricate patterns of light and shadow on the verdant foliage below.",
      "Despite the beauty of the space, there's an eerie stillness that hangs in the air, as though the once-bustling arboretum has been abandoned for decades. The sound of rustling leaves and distant birdcalls are the only sounds that break the silence, adding to the sense of mystery and enchantment that pervades the space.",
    ],
    connections: [],
    encounter: {
      encounterId: "29a1",
      name: "Beholding Petal-Head",
      description:
        "As you make your way through the foliage, you are attacked a Beholding Petal-Head, a creature of nightmares, with a delicate exterior that belies its deadly nature. At first glance, it appears to be nothing more than a beautiful rosebud, with soft, velvety petals that shine with a lustrous sheen. But upon closer inspection, one can see that there is an eye nestled between the petals, gleaming with a sinister intelligence. The razor-sharp thorns that line the stem of the rosebud are a warning of the creature's ferocity, a reminder that even the most beautiful things in life can be deadly.",
      agility: 2,
      endurance: 2,
      value: 5,
      onDeath: [
        {
          text: "Go north to the Cloud Room.",
          reference: "e756a",
        },
        { reference: "e5c06", text: "Go east to the Green Maze." },
        { reference: "e4f2c", text: "Go west to the Entrance Hall." },
      ],
      image: "img/encounters/beholding_petal_head.jpg",
    },
    items: {},
    incident: {},
    npc: {},
  },
  e6642: {
    title: "Inner Sanctum",
    text: [
      "You enter the Inner Sanctum of the mansion, a dimly-lit room with an ornate window adorning the northern wall. Flickering candles cast eerie shadows across the room. In one corner, there is a small ornate fireplace with a crackling fire. In the center of the room, there is an ornate pedestal.",
      "You feel a range of emotions when entering the sanctum, including fear, discomfort, and a sense of spiritual unease. This may be due to the conflict between your own beliefs and the opposing practices of this accursed place.",
    ],
    specialText: [
      "The windows on the north wall looks like it leads to another sinister room, yet you feel that you will encounter your final foe should you manage to traverse it. The window is shut tight and enforced by mystic steel. It has an indendations in the glass with a small symbol next to it. You will need an amulet to open the window.",
    ],
    connections: [
      { reference: "e7312", text: "Go east to the Treasure Room." },
      { reference: "e5256", text: "Go west to the Outer Sanctum." },
    ],
    encounter: {},
    items: {},
    incident: {},
    npc: {},
  },
  e67d2: {
    title: "Hall of Chess",
    text: [
      "This is the Hall of Chess is an impressive sight, with its checkered squares stretching out across the grassy lawn. The pieces themselves are crafted from gleaming marble, each one standing several feet tall and weighing hundreds of pounds.",
      "As you approach the board, you can't help but feel dwarfed by the sheer size of the pieces, their intricate details and polished surfaces gleaming in the sunlight. The board seems to be frozen in time, as though the players who once moved the massive pieces have long since vanished, leaving behind only their silent, imposing legacy.",
    ],
    connections: [],
    encounter: {},
    items: {},
    incident: {
      text: "You step on a pressure plate and poison darts suddenly shoot out from the wall! Test your agility! If you are unsuccessful you will take damage.",
      condition: "agility",
      success: {
        text: "You managed to dodge the poison darts.",
        connections: [
          { reference: "e6c64", text: "Go north to the Conservatory." },
          { reference: "e756a", text: "Go east to the Cloud Room." },
          { reference: "e5e22", text: "Go west to the Dining Room." },
          { reference: "e4f2c", text: "Go south to the Entrance Hall." },
        ],
        value: 2,
      },
      fail: {
        text: "You fail to evade the poison darts and take 2 endurance points of damage.",
        enduranceDeducted: 2,
        connections: [
          { reference: "e6c64", text: "Go north to the Conservatory." },
          { reference: "e756a", text: "Go east to the Cloud Room." },
          { reference: "e5e22", text: "Go west to the Dining Room." },
          { reference: "e4f2c", text: "Go south to the Entrance Hall." },
        ],
      },
    },
    npc: {},
  },
  efi33: {
    title: "Enigmatic Quantum Realm",
    text: [
      "In the enigmatic quantum realm, the very fabric of reality bends and shifts, creating an otherworldly dreamscape that defies conventional logic. Suspended in this ethereal void, strange alien plants drift like cosmic algae, their luminescent tendrils undulating in the ever-changing kaleidoscope of colors.",
      "These fantastical flora seem to exist beyond the confines of time and space, pulsating with an energy that resonates with the very essence of the universe. The translucent leaves and iridescent blooms emit a soft, hypnotic glow, casting ephemeral patterns of light and shadow in a mesmerizing dance.",
    ],
    specialText: [
      "Amidst the swirling eddies of quantum energy, these alien plants intertwine and float gracefully, you see that a Jewelled Dagger would let you magically cut through the unreality of this realm to your final destination.",
    ],
    connections: [
      {
        reference: "efi32",
        text: "Return to the Dimension of Madness.",
      },
    ],
    encounter: {},
    items: {},
    incident: {},
    npc: {},
  },
  e68f4: {
    title: "Cave of Chasms",
    text: [
      "The Cave of Chasms is a place of eerie darkness, where the only light comes from the faint glow of phosphorescent moss clinging to the jagged stalagmites and stalactites that line the walls. The air is thick with the scent of damp earth and ancient stone, and the sound of dripping water echoes through the cavern like the footsteps of ghosts.",
      "In the heart of the cave lies a deep chasm, with a seemingly bottomless drop that falls for hundreds of feet into the abyss. The edges of the chasm are jagged and rough, as though the rock itself has been twisted and contorted by some terrible force.",
      "The darkness seems to grow even deeper around the chasm, as though it's a void that's devouring the light. You can hear the sound of rushing water far below, carried up on a cold, damp wind that seems to blow up from the depths.",
      "It's a place of bone-chilling fear, where you can feel the weight of the centuries bearing down on you like a heavy cloak. The cave seems to have a life of its own, and you can't help but feel as though you're a trespasser in a world that you were never meant to enter.",
    ],
    connections: [{ reference: "e5c06", text: "Go west to the Green Maze." }],
    encounter: {},
    items: {
      i9e1f: {
        name: "Amulet of Stone",
        type: "tool",
        value: 20,
        description:
          "This amulet is an ancient talisman forged from the heart of a fallen mountain. It grants its wearer the ability to open a portal when in the right chamber.",
        image: "img/items/amulet-of-stone.jpg",
        relevantReference: "e6642",
        addedChoices: [
          {
            reference: "efi32",
            text: "Traverse through the window (thanks to the Amulet).",
          },
        ],
      },
    },
    incident: {},
    npc: {},
  },
  e6a0c: {
    title: "Ethereal Mirror",
    text: [
      "In the corner of the room stands an Ethereal Mirror, its frame made of frozen wood that seems to glisten with a faint blue light. The mirror is like no other, for as one looks into it, they see not their own reflection, but rather a window into another realm. Through the mirror, one can see a mystical world filled with gnarly white trees, their branches stretching out towards the sky as if trying to touch the heavens",
      "The ethereal realm beyond the mirror is bathed in a soft, otherworldly light, casting everything in a pale glow that seems to come from within. The air is thick with the scent of ancient forests and magic, and the sound of rustling leaves and distant whispers can be heard echoing through the trees.",
    ],
    connections: [],
    encounter: {
      encounterId: "94c0",
      name: "Wobblin' Goblin",
      description:
        "A Wobblin' Goblin stands guard infronte of the Ethereal Mirror. There are no two ways about it, this creature is drunk. He staggers about with a wild abandon, his movements clumsy and erratic. His eyes are bleary and unfocused, and his speech is slurred and incoherent. Despite his inebriation, the goblin is still quick and nimble, able to attack you with surprising speed. He seems to be enjoying himself immensely, relishing in the feeling of havoc and carelessness that comes with drunkenness.",
      agility: 3,
      endurance: 3,
      value: 5,
      onDeath: [
        { reference: "e53b4", text: "Go north to the Kitchen." },
        { reference: "e21c9", text: "Enter the strange world in the mirror." },
      ],
      image: "img/encounters/wobblin_goblin.jpg",
    },
    items: {},
    incident: {},
    npc: {},
  },
  efin3: {
    title: "William's Bubble Cell",
    text: [
      "William's bubble prison is a shimmering, translucent sphere suspended on wooden wheels. Within this delicate cosmic orb resides William, unhurt and as yet blissfully unaware of you. His eyes wide with wonder as he squates on a floating platform of clouds, gently playing with the cosmic fabric of the pocket universe around him.",
      "As you open the bubble prison, William turns to you with an expression of surprise and joy. He leaps off the platform and runs to you, embracing you in a tight hug. He's so happy to see you, and you're so happy to see him. You take his little hand and help him out of the bubble prison.",
    ],
    specialText: [
      "You have successfully completed your quest! The moment had arrived, a culmination of your journey. You lead young William out of the acursed Mortacion's Mansion of Trepidation and into safety of the real world. And you can finally live happily ever after...",
    ],
    connections: [],
    encounter: {},
    items: {},
    incident: {},
    npc: {},
  },
  e21c9: {
    title: "Lost in the Wastelands",
    text: [
      "You step through the ethereal mirror and find yourself transported to a strange, unfamiliar world. You are Lost in the Wastelands, a desolate and barren landscape, with rolling dunes of fine sand stretching out in all directions. Strange rock formations jut up from the ground, twisted and contorted into bizarre shapes that seem to defy logic. The sky above is a kaleidoscope of unfamiliar stars and planets, casting an eerie and alien light over the stark landscape.",
      "The ethereal realm beyond the mirror is bathed in a soft, otherworldly light, casting everything in a pale glow that seems to come from within. The air is thick with the scent of ancient forests and magic, and the sound of rustling leaves and distant whispers can be heard echoing through the trees.",
      "As you walk through the wasteland, the sand crunches beneath your feet, and the wind whips through your hair, carrying with it a sense of otherworldly danger. It's a place where you feel small and insignificant, surrounded by a world that is both beautiful and terrifying in equal measure.",
      "The rocks and dunes seem to shift and change before your very eyes, as though they're alive and aware of your presence. The colors of the sky seem to shift and dance, pulsing with an unearthly energy that sends shivers down your spine. It's a place where you feel as though you've stepped into a different reality entirely, one that is both fascinating and dangerous.",
      "As you navigate the wasteland, you can't help but wonder what secrets it holds and what mysteries lie hidden beneath its shifting sands and strange rock formations.",
    ],
    specialText: [
      "You will never know because you are forever lost in the wastelands with no way to return to your own world, destined to roam the desolation until your life expires!",
    ],
    connections: [],
    encounter: {},
    items: {},
    incident: {},
    npc: {},
  },
  ef3b7: {
    title: "Observatory",
    text: [
      "In the heart of the Victorian Observatory, dimly illuminated by flickering candlelight and moonlight filtering through tall, arched windows, stands a majestic brass telescope. Mounted on a polished wooden tripod, the telescope is the centerpiece of the room, its long barrel pointing skyward, ready to unveil celestial secrets.",
      "Walls adorned with intricately carved wood paneling and antique celestial maps reflect the golden glow of the candlelight. A large, round table dominates the space beneath the telescope's gaze, scattered with ancient leather-bound books, tattered scrolls, and astronomical charts. A quill pen and inkwell sit patiently at the ready, waiting for the next astronomical discovery to be recorded.",
      "The scent of old parchment, polished wood, and the faintest hint of stardust fills the air, a testament to the countless hours spent studying the heavens. Delicate, velvet curtains drape the windows, occasionally revealing a glint of the stars outside.",
    ],
    connections: [{ reference: "e5b02", text: "Go south to the Laboratory." }],
    encounter: {},
    items: {
      i52e0: {
        name: "Star Compass",
        type: "tool",
        value: 20,
        description:
          "The exquisite Star Compass, housed in an intricately engraved brass casing, features a delicately balanced magnetic needle at its center. On closer inspection the compass face reveals elegantly scripted cardinal directions and ornate decorative flourishes.",
        image: "img/items/compass.jpg",
        relevantReference: "e5c06",
        addedChoices: [
          {
            reference: "e68f4",
            text: "Through the Maze to the Secret Cave of Chasms (thanks to the Star Compass)",
          },
        ],
      },
    },
    incident: {},
    npc: {},
  },
  ebo13: {
    title: "History of Necromancy",
    text: [
      "You brush aside the cobwebs and hold the book up to the light. The pages are yellowed and brittle, and the ink is faded and smudged, but thanks to the Magnifying Glass you understand the words. Particularly one section peaks your interest:",
      "'Mortacion, the notorious necromancer, is a figure shrouded in mystery and dark magic. His seemingly infinite power has allowed him to connect different planes of existence and dimensions, making his mansion a nexus of the multiverse. The estate itself is a sprawling, sinister structure, with an ominous presence that hangs heavy in the air. Its walls are adorned with intricate carvings and arcane symbols that pulse with an eerie energy, hinting at the unspeakable power contained within.'",
      "'The mansion is labyrinthine in nature, with its corridors twisting and turning, defying the very laws of physics. One room holds the gateway to another dimension, filled with otherworldly artifacts and creatures that would send shivers down the spine of even the most hardened adventurer: Mortacion's Altar Room'",
      "'There is only one way into the Altar Room: through the Inner Sanctum. It's window is no mere opening into the outside, but a gateway to another plane of existence. It can only be entered using three objects: the Amulet of Stone, the Jewelled Dagger, and the Crystal Key of the Ancients. They are hidden in different chambers in Mortacion's mansion.'",
    ],
    connections: [
      { reference: "e6b38", text: "Go north to the Study." },
      { reference: "e5e22", text: "Go south to the Dining Room." },
    ],
    encounter: {},
    items: {},
    incident: {},
    npc: {},
  },
  es1c2: {
    title: "Melancholy, the Singing Cat",
    text: [
      "Melancholy, the singing cat, is a captivating vision of fluffiness and charm. Her silky fur, a delicate shade of gray, ripples gracefully with each movement, enchanting you immediately. Her wide, expressive eyes sparkle with an endearing innocence, drawing you in and capture your hearts with a single glance.",
      "Perched on her hind legs, Melancholy gently cradles her tiny guitar, her dainty paws plucking at the strings with remarkable finesse. As she sings, her fluffy tail sways gently to the rhythm, adding a touch of playfulness to her performance.",
      "When she finishes her song, she bows gracefully, her eyes twinkling with a mischievous glint. You pet her tenderly and tell her about your quest to find William. She looks you deeply in the eyes and decides to help you by telling you the secret location of one of the objects you need to complete your quest.",
    ],
    specialText: [
      "'Mortacion is hidden in his Altar Room. I cannot tell you how to get there, but I do know that you will need to seek out the Jewelled Dagger. It is hidden in the Gambling Room, west of the Grand Entrance Hall. I wish you good fortune and bid you godspeed on your quest to find your nephew.'",
    ],
    connections: [{ reference: "e59d6", text: "Focus back on the Stables" }],
    encounter: {},
    items: {},
    incident: {},
    npc: {},
  },
  es1c3: {
    title: "Ghost of the Cat Girl",
    text: [
      "The Ghost of the Cat Girl is a hauntingly enigmatic figure, drifting through the laboratory like a whisper on the wind. Her pale face, framed by cascading black hair, is a striking contrast, drawing attention to the curious cat ears that protrude from her tresses. These feline features lend her an ethereal, otherworldly beauty that is both captivating and unsettling.",
      "Clad completely in elegant black, she glides through the air with an eerie grace. In one gloved hand, she holds a mysterious red box, its contents unknown, wrapped with intricate precision and sealed with a crimson ribbon that flutters softly in the spectral breeze. The parcel seems to emanate a quiet power, hinting at a story yet untold, a secret yearning to be revealed.",
      "In her other hand, she tenderly holds her constant companion: a red-eyed black cat that gazes upon the world with an inscrutable expression. Together, they are an enigmatic pair, bound by a bond that transcends the divide between life and death.",
      "You tell her of your quest to find your nephew William. As a response she holds up one finger to her lips to indicate that she will not speak, or perhaps she cannot speak. Instead she opens the red box to show you a message, as though she was expecting you.",
    ],
    specialText: [
      "The message reads: 'I wish you the best on your quest to find William. You can only reach his prison by first finding the Crystal Key of the Ancients. It is located in the Cloud Room east of the Hall of Chess. The Crystal Key is only one of the three items you will need to when you go to Mortacion's Inner Sanctum.'",
    ],
    connections: [
      { reference: "e5b02", text: "Focus back on the Laboratory." },
    ],
    encounter: {},
    items: {},
    incident: {},
    npc: {},
  },
  es1c4: {
    title: "Bokemin",
    text: [
      "Infront of the Greenhouse you see the Bokemin. Standing scarcely taller than a human child, the Bokemin is a figure of unassuming stature, yet it possesses a presence that belies its size. Its body is stout and compact, built for traversing the forest's undergrowth with ease. A cap of vibrantly green leaves sits atop its head, a whimsical touch that serves to accentuate its enigmatic charm.",
      "The Bokemin's face is a canvas of age and wisdom, with expressive, large eyes that seem to hold the knowledge of a thousand lifetimes. In one of its tiny hands it holds a gnarled branch like a cane.",
      "You tell the Bokemin about your quest to find your nephew William. The Bokemin nods and tells you that it will help you on your quest.",
    ],
    specialText: [
      "The Bokemin speaks with a surprisingly deep voice: 'Your nephew is imprisoned by Mortacion in the Altar Room. You will need three items to traverse the dimensions to it. One of the items is the Amulet of Stone. Now pay attention. You will need to find the amulet by passing through the Green Maze east of the Entrance Hall. You will immediately get lost in this labyrinth unless you first get the Star Compass. It is in the far north of the mansion in the Observatory. So hurry on, dear friend, I bid you farewell.'",
    ],
    connections: [
      { reference: "e54cf", text: "Focus back on the Bedroom Oak" },
    ],
    encounter: {},
    items: {},
    incident: {},
    npc: {},
  },
};
