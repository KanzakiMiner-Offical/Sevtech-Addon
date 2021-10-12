SevtechCore.regAchi("AgeZero", "stick", "A Stick On Leave", "Break a leave to get Stick", 3, 1, VanillaItemID.stick);

SevtechCore.regAchiPa("AgeZero", "fibrousdiet", "Fibrous Diet", "Break some Grass to colect Plant Diet", "stick", 2, 1, ItemID.plant_fiber);

SevtechCore.regAchiPa("AgeZero", "flint", "Flint Sharpening", "Flake some Flint", "fibrousdiet", 1, 1, 318);

SevtechCore.regAchiPa("AgeZero", "flintflake", "Mash It To Small !", "Click Flint to Stone", "flint", 1, 2, ItemID.flint_flake);
SevtechCore.regAchiHi("AgeZero", "mainFlinthatchet", "It's Too Dangerous to Go Alone !", "Build a Flint Hatchet", "stick", 3, 2, ItemID.flint_hatchet);
SevtechCore.regAchiHi("AgeZero", "mainOak", "Caveman Hate A Tree", "Chop down a tree", "mainFlinthatchet", 3, 3, 17);
SevtechCore.regAchiPa("AgeZero", "mainSaw", "Saw Saw and Saw log!", "Create a flint saw", "mainOak", 3, 4, ItemID.flint_saw);
SevtechCore.regAchiHi("AgeZero", "mainCraft", "I'm Stumped !", "Make Stump Work", "mainSaw", 3, 5, BlockID.stump);
SevtechCore.regAchiHi("AgeZero", "mainPlank", "A cut board", "Use it to make plank better", "mainCraft", 3, 6, BlockID.chopper);
SevtechCore.regAchiHi("AgeZero", "mainPrimal", "A Place to Put My Stuff", "Craft a Chest.", "mainPrimal", 3, 7, BlockID.primalChestbasic);

SevtechCore.regAchiPa("AgeZero", "AdvanChest", "It Very Small!", "Create a Advanced Primal", "mainOak", 4, 7, BlockID.primalChestad);

SevtechCore.regAchiHi("AgeZero", "mainHeat", "Ace of Melter Base", "Craft A Heat", "mainPrimal", 3, 8, BlockID.Heater);
SevtechCore.regAchiHi("AgeZero", "mainMelter", "Let's Get Down and Melty", "Craft a Melter.", "mainHeat", 4, 8, BlockID.chopper);

SevtechCore.regAchiPa("AgeZero", "fire", "I HAVE CREATED FIRE", "Craft a Fire Bow.", "mainOak", 2, 3, ItemID.fire_bow);
SevtechCore.regAchiPa("AgeZero", "grill", "Hot Grill!", "Create a Grill", "fire", 2, 4, BlockID.grill);
SevtechCore.regAchiHi("AgeZero", "salt", "Salt of Your Labors", "Obtain some Salt", "grill", 2, 5, ItemID.salt);
SevtechCore.regAchiHi("AgeZero", "kiln", "Cook It Up!", "Create a Unfired Kiln", "grill", 1, 5, BlockID.unfiredKiln);
SevtechCore.regAchiHi("AgeZero", "charcoal", "Fire Forever", "Create a Block Of Charcoal", "kiln", 1, 6, BlockID.charcoal_stack);


SevtechCore.regAchi("AgeOne", "furnace", "It's Getting Hot in Here", "Make a Vanila Furnace", 3, 2, 61);
SevtechCore.regAchiPa("AgeOne", "hoe", "Can We Hoe It?", "Craft a Stone Hoe.", "furnace", 3, 2, 291);

SevtechCore.regAchiPa("AgeOne", "mainCopper", "Get To The Copper", "Find(y=0 to y=68) and mine Copper Ore, called Azurite.", "furnace", 3, 3, BlockID.oreCopper);

SevtechCore.regAchiPa("AgeOne", "mainKiln", "All Mixxed Up", "Make and Place Alloy Kiln", "mainCopper", 3, 4, BlockID.kiln);

SevtechCore.regAchiHi("AgeOne", "mainBronze", "Brains Over Bronze", "Smelt Bronze in the Alloy Kiln with 3 Copper Ingots and 1 Tin Ingot. ", "mainKiln", 3, 5, ItemID.ingotBronze);

SevtechCore.regAchiHi("AgeOne", "mainCrusher", "A Basic Crusher", "Make a Crusher", "mainBronze", 3, 6, BlockID.krusher);

SevtechCore.regAchiHi("AgeOne", "mainSaw", "A Basic Saw", "Make a Saw", "mainCrusher", 3, 8, BlockID.soou);

SevtechCore.regAchiPa("AgeOne", "prospector", "Prospecting", "Craft a Dowsing Rod.", "furnace", 2, 2, ItemID.prospector_lowest);
SevtechCore.regAchiHi("AgeOne", "coal", "Locate(y=0 to y=127) and Mine Coal", "Find and Mine Some Coal", "prospector", 1, 2, 263);
SevtechCore.regAchiHi("AgeOne", "tin", "Error404: Heart Not Found", "Find(y=0 to y=52) and Mine Tin, Called Cassiterite", "coal", 3, 8, BlockID.oreTin);

SevtechCore.regAchiHi("AgeOne", "baltar", "Altered State", "Craft a Blood Altar", "mainBronze", 2, 5, BlockID.bloodAltar);
SevtechCore.regAchiHi("AgeOne", "slate", "Blood and Stone, an interesting combination", "Make a Blank Slate with Blood Altar", "baltar", 2, 6, ItemID.blankSlate);
SevtechCore.regAchiHi("AgeOne", "bed", "Time to Sleeping zZzZ", "Make a Bed", "slate", 2, 7, 355);

// Age Two
SevtechCore.regAchi("AgeTwo", "paper", "Papers, Please", "Make The OG Minecraft Paper", 3, 1, VanillaItemID.paper);

SevtechCore.regAchiPa("AgeTwo", "mainTwight", "A Beautiful Sunset Forest", "Make a Twilight Forest Portal", "paper", 3, 2, BlockID.twBlockPortal);

SevtechCore.regAchiPa("AgeTwo", "grout", "I'M GROUT!!!!", "Make Some Grout", "paper", 2, 1, BlockID.tcon_grout);