Callback.addCallback("LevelLoaded", function() {

  // delete age 1
  if (age << 1) {
    Recipes.deleteRecipe({ id: 61, count: 1, data: 0 });
    Recipes.removeFurnaceRecipe({ id: BlockID.oreTin, data: 0 });
    Recipes.removeFurnaceRecipe({ id: BlockID.oreCopper, data: 0 });
    Recipes.removeFurnaceRecipe({ id: 162, data: 0 });
    Recipes.deleteRecipe({ id: BlockID.soou, count: 1, data: 0 });
    Recipes.deleteRecipe({ id: BlockID.krucher, count: 1, data: 0 });
    Recipes.deleteRecipe({ id: 355, count: 1, data: 0 });
  } else if (age << 2) {
    // delete age 2
    Recipes.deleteRecipe({ id: BlockID.tcon_smeltery, count: 1, data: 0 });
    Recipes.deleteRecipe({ id: 339, count: 1, data: 0 });
    Recipes.removeFurnaceRecipe({ id: 20, count: 1, data: 0 });
    Recipes.deleteRecipe({ id: BlockID.tcon_grout, count: 1, data: 0 });
    Recipes.deleteRecipe({ id: BlockID.twBlockPortal, count: 1, data: 0 });
    Recipes.removeFurnaceRecipe({ id: ItemID.tcon_brick, count: 1, data: 0 });
  } else if (age << 3) {

  } else if (age << 4) {

  } else if (age << 5) {

  }

  if (age >= 1) {
    for (let i = 0; i < 5; i++) {

      Recipes.addShaped({ id: 54, count: 1, data: 0 },

             ["sss",
              "sas",
              "sss"],
             ["s", 5, i, "a", BlockID.primalChestad, 0
           ]);
      Recipes.addShaped({ id: 61, count: 1, data: 0 },
             ["sss",
              "s s",
              "sss"],
             ["s", 4, 0
           ]);
      Recipes.addShaped({ id: BlockID.soou, count: 1, data: 0 },
           ["ada",
            "ccc",
            "bbb"],
           ["a", 5, 0, "b", 5, i, "c", 4, 0, "d", ItemID.gearStone, 0]);
      Recipes.addShaped({ id: BlockID.krucher, count: 1, data: 0 },
           ["cac",
            "cdc",
            "bbb"],
           ["a", ItemID.flint_pickaxe, 0, "b", 5, i, "c", 4, 0, "d", ItemID.gearStone, 0]);
      Recipes.addShaped({ id: BlockID.kilnbrick, count: 1, data: 0 },
             ["   ",
              "sa ",
              "as "],
             ["s", 24, 0, "a", 336, 0
           ]);
      Recipes.addShaped({ id: BlockID.kilnalloy, count: 1, data: 0 },
             ["ss ",
              "sss",
              "sss"],
             ["s", BlockID.kilnbrick, 0
           ]);
      Recipes.addShaped({ id: 355, count: 1, data: 0 },
             ["   ",
              "aaa",
              "sss"],
             ["s", 5, i, "a", 35, 0
           ]);
    }
  } else if (age >= 2) {

  }
});

//AgeZero

Callback.addCallback("ItemUse", function(coords, item, block) {
  if (item.id == VanillaItemID.stick) {
    AchievementAPI.give("AgeZero", "stick");
  }
});

Callback.addCallback("ItemUse", function(coords, item, block) {
  if (item.id == ItemID.plant_fiber) {
    AchievementAPI.give("AgeZero", "fibrousdiet");
  }
});

Callback.addCallback("ItemUse", function(coords, item, block) {
  if (item.id == 318) {
    AchievementAPI.give("AgeZero", "flint");
  }
});

Callback.addCallback("ItemUse", function(coords, item, block) {
  if (item.id == ItemID.flint_hatchet) {
    AchievementAPI.give("AgeZero", "mainFlinthatchet");
  }
});

Callback.addCallback("ItemUse", function(coords, item, block) {
  if (item.id == 17) {
    AchievementAPI.give("AgeZero", "mainOak");
  }
});

Callback.addCallback("ItemUse", function(coords, item, block) {
  if (item.id == ItemID.flint_saw) {
    AchievementAPI.give("AgeZero", "mainSaw");
  }
});

Callback.addCallback("ItemUse", function(coords, item, block) {
  if (item.id == BlockID.stump) {
    AchievementAPI.give("AgeZero", "mainCraft");
  }
});

Callback.addCallback("ItemUse", function(coords, item, block) {
  if (item.id == BlockID.primalChestbasic) {
    AchievementAPI.give("AgeZero", "mainPrimal");
  }
});

Callback.addCallback("ItemUse", function(coords, item, block) {
  if (item.id == BlockID.Heater) {
    AchievementAPI.give("AgeZero", "mainHeat");
  }
});

Callback.addCallback("ItemUse", function(coords, item, block) {
  if (item.id == BlockID.primalChestad) {
    AchievementAPI.give("AgeZero", "AdvanChest");
  }
});



/*
Callback.addCallback("ItemUse", function(coords, item, block){
    if(item.id==ItemID.flint_pickaxe){
        AchievementAPI.give("AgeZero", "flintPic");
    }
});

Callback.addCallback("ItemUse", function(coords, item, block){
    if(item.id==ItemID.flint_workblade){
        AchievementAPI.give("AgeZero", "flintWB");
    }
});

Callback.addCallback("ItemUse", function(coords, item, block){
    if(item.id==274){
        AchievementAPI.give("AgeZero", "cobbPic");
    }
});

  
Callback.addCallback("ItemUse", function(coords, item, block){
    if(item.id==BlockID.unfiredKiln){
        AchievementAPI.give("AgeZero", "kiln");
    }
});
Callback.addCallback("ItemUse", function(coords, item, block){
    if(item.id==BlockID.grill){
        AchievementAPI.give("AgeZero", "grill");
    }
});

Callback.addCallback("ItemUse", function(coords, item, block){
    if(item.id==ItemID.firebow){
        AchievementAPI.give("AgeZero", "fire");
    }
});


Callback.addCallback("ItemUse", function(coords, item, block){
    if(item.id==ItemID.salt){
        AchievementAPI.give("AgeZero", "salt");
    }
});

Callback.addCallback("ItemUse", function(coords, item, block){
    if(item.id==ItemID.firebow){
        AchievementAPI.give("AgeZero", "fire");
    }
});


Callback.addCallback("ItemUse", function(coords, item, block){
    if(item.id==BlockID.charcoal_stack){
        AchievementAPI.give("AgeZero", "charcoal");
    }
});
*/
Callback.addCallback("VanillaWorkbenchCraft", function(result) {
  switch (result.id) {
    case BlockID.Melter:
      AchievementAPI.give("AgeZero", "mainMelter");
      Complete.play();
      Game.message(Translation.translate("Welcome to Age One"));
      age = 1;
      break;
    /*
    case BlockID.soou:
      AchievementAPI.give("AgeOne", "mainSaw");
      Complete.play();
      Game.message(Translation.translate("Welcome to Age Two"));
      age = 2;
    */
  }
});