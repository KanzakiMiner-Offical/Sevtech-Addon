
IMPORT("Inventory", "*");
IMPORT("RecipeTileEntityLib", "*");
IMPORT("SoundAPI", "*");

		           //table1
IDRegistry.genBlockID("stump");
Block.createBlock("stump", [
    {name: "Stump Work", texture: [["oak", 0]], inCreative: true}
]);


var stumpUI = new UI.StandartWindow({
	standart: {header: {text: {text: "Stump Work"}}},
	background: {color: android.graphics.Color.parseColor("#c6c6c6")},
	inventory: {standart: true},
	drawing: [],
	elements: {
		"inputSlot0": {type: "slot", x: 350, y: 150, size: 86},
		"inputSlot1": {type: "slot", x: 435, y: 150, size: 86},
		"inputSlot2": {type: "slot", x: 520, y: 150, size: 86},
		"inputSlot3": {type: "slot", x: 350, y: 235, size: 86},
		"inputSlot4": {type: "slot", x: 435, y: 235, size: 86},
		"inputSlot5": {type: "slot", x: 520, y: 235, size: 86},
		"inputSlot6": {type: "slot", x: 350, y: 320, size: 86},
		"inputSlot7": {type: "slot", x: 435, y: 320, size: 86},
		"inputSlot8": {type: "slot", x: 520, y: 320, size: 86},
		"scale_0": {type: "scale", x: 630, y: 239, direction: 0, bitmap: "arrow", scale: 5.099999999999997, value: 1},
		"outputSlot": {type: "slot", x: 775, y: 235, size: 86}
		}
		
});
		
RecipeTE.registerWorkbench("stump",{
    rows:3,
    cols:3,
    GuiScreen:stumpUI,
});

             
/*
RecipeTE.addShapeRecipe("Workbench_Grid", {
    id:280,
    count:1
    }, [
    "aa",
    "aa"
    ], {
    a:{
        id:5
    }
});

*/

RecipeTE.addShapeRecipe("stump", {
    id: ItemID.flint_shears,
    count:1}, [
	" f ",
    " tf",
    "   "
	],{
	f:{id: ItemID.flint_flake}, t:{id: ItemID.plant_twine}
	});

RecipeTE.addShapeRecipe("stump", {
    id:ItemID.flint_workblade,
    count:1}, [
    " fh", 
    "ftf",
    "sf "
    ],{
	f:{id:ItemID.flint_flake}, h:{id:318}, s:{id:280}, t:{id:ItemID.plant_twine}
	});

RecipeTE.addShapeRecipe("stump", {,
    id:ItemID.flint_pickaxe,
    count:1}, [
	"ftf", 
    "fsf",
    " s "
	],{
	f:{id:ItemID.flint_flake}, t:{id:ItemID.plant_twine}, s:{id:280}
	});

RecipeTE.addShapeRecipe("stump", {
    id:ItemID.flint_hatchet,
    count:1}, [
	" ft", 
    "  s",
	"   "
	],{
	f:{id:ItemID.flint_flake}, t:{id:ItemID.plant_twine}, s:{id:280}
	});

RecipeTE.addShapeRecipe("stump", {
    id:ItemID.flint_axe,
    count:1}, [
	"fht", 
    "fsf",
    " s "
	],{
	f:{id:ItemID.flint_flake}, t:{id:ItemID.plant_twine}, s:{id:280}, h:{id:318}
	});


// file: chop.js

IDRegistry.genBlockID("chop");
Block.createBlock("chop", [
    {name: "Chopping Block", texture: [["oak", 0]], inCreative: true}
]);

ToolAPI.registerBlockMaterial(BlockID.chop, "oak");
Block.setBlockShape(BlockID.chop, {x: 1 / 16, y: 0, z: 1 / 16}, {x: 15 / 16, y: 7 / 16, z: 15 / 16});
TileEntity.registerPrototype(BlockID.chop,{
	defaultValues:{
	    item: 0, data:0, run: false
  },
  initAnimation: function(){
		this.animation = new Animation.Item(this.x + .5, this.y, this.z + .5);
		if(this.data.item!=0){
		  this.animation.describeItem({
		    	id: this.data.item,
			   count: 1,
			   data: 0,
			   rotation: "y+1",
			   size: 1
	   	});
		    this.animation.load();
		  }
	 },
	 destroyAnimation: function(){
	  	if(this.animation){
		    	this.animation.destroy();
    }
	 },
	 updateAnimation: function(){
	  	this.destroyAnimation();
		 this.initAnimation();
	 },
	
	 init: function(){
	  	 this.initAnimation();
	 },
	 destroy: function(){
	   World.drop(this.x+.5, this.y+.5, this.z+.5, this.data.item, 1, 0);
		  this.destroyAnimation();
		  this.data.item = 0;
  	},
   
    checkLog: function(){
    	if(this.data.item==17 || this.data.item==162){
          return true;}
         else { return false;}
    },
    
	click: function(){
  	  Game.prevent();
  	  let item = Player.getCarriedItem();
  	  if(item.id == 271){
        this.data.run = true;
  	  }
       if(this.data.item==0 && ( item.id = 4 || item.id =162)){
  	    this.data.item = item.id;
          this.data.data = item.data;
  	    this.updateAnimation();
  	    Player.decreaseCarriedItem();
  	  } 
  	  if(this.data.item!=0&&Entity.getSneaking(Player.get())){
  	    World.drop(this.x+.5, this.y+.5, this.z+.5, this.data.item, 1, this.data.data);
      this.destroyAnimation();
      this.data.item = 0;
  	},
	
		},
	tick: function() {
			if(this.checkLog && this.data.run = true){
				  	    World.drop(this.x+.5, this.y+.5, this.z+.5, 5, 3, this.data.data);
				this.data.run = false;
      	  } else if(this.checkLog = false && this.data.run = true){
      	this.data.run = false;
           }
  	  if(this.animation&&this.data.item==0) this.destroyAnimation();
  	}
		}
})


Callback.addCallback('LevelLoaded', function () {

Recipes.addShapeless({id: BlockID.chop, count: 1, data: 0}, [{id: 17, data: -1}]);
Recipes.addShapeless({id: BlockID.stump, count: 1, data: 0}, [{id: 17, data: -1}, {id: BlockID.chop, data: 0}]);

});

// file: Achi.js
var Complete = new Sound("complete.ogg");


var age = 0;

const SevtechCore = {

regGroup: function(uni, nam, back, ico){
	ModAPI.addAPICallback("AchievementsAPI", function (api) {
AchievementAPI = api.AchievementAPI;
    api.AchievementAPI.registerGroup({
        unique: uni,
        name: nam,
        width: 1000,
        height: 1000,
        size: 100,
        bgTexture: back,
        icon: {
            id:icon
        }
    });
 }); 
	},
regAchi: function(group, uni, text1, text2, x, y, icon){
ModAPI.addAPICallback("AchievementsAPI", function (api) {
    api.AchievementAPI.register(group, {
        unique: uni,
        name: {
            text: text1,
            translate: "achievements." + group + uni + ".title"
        },
        description: {
            text: text2,
            translate: "achievements." + group + uni + "description"
        },
        column: x,
        row: y,
        item: {
            id: icon
        }
    });
  });
	},
regAchiPa: function(group, uni, text1, text2, x, y, icon, par){
	ModAPI.addAPICallback("AchievementsAPI", function (api) {
	
	api.AchievementAPI.register(group, {
        unique: uni,
        name: {
            text: text1,
            translate: "achievements." + group + uni + ".title"
        },
        description: {
            text: text2,
            translate: "achievements." + group + uni + "description"
        },
    parent: {
    unique: par
    },
        column: x,
        row: y,
        item: {
            id: icon
        }
    });
 });
	},
regAchiHi: function(group, uni, text1, text2, x, y, icon, par){
	ModAPI.addAPICallback("AchievementsAPI", function (api) {
	
	api.AchievementAPI.register(group, {
        unique: uni,
        name: {
            text: text1,
            translate: "achievements." + group + uni + ".title"
        },
        description: {
            text: text2,
            translate: "achievements." + group + uni + "description"
        },
    hidden: true,
    parent: {
    unique: par
    },
        column: x,
        row: y,
        item: {
            id: icon
        }
    });
 });
	},
	lockItem: function(id, ages){
	if ( age < ages ){
	Item.registerNameOverrideFunction(id, function(item, name){
			return name + "\n§4" + "Unfamiliar Item, You Can Not Use It";
			}
		}else if ( age == ages ){
	Item.registerNameOverrideFunction(id, function(item, name){
			return name - "\n§4Unfamiliar Item, You Can Not Use It";
	}
}
	},
	lockOre: function(input, output, ages, levelperore){
		Block.registerDropFunction(input, function (coords, id, data, diggingLevel) {
if(diggingLevel >= levelperore && age < ages){
	
return[[output,Random.Int(1,2), 0]];

Game.message("You cant break it now,plaese unlock Age" + ages);
}else if(diggingLevel >= levelperore && age >= ages){
return [[input,Random.Int(1,2), 0]];
}
});

	}
	
	
};

SevtechCore.regGroup("AgeZero", "Age One", "background_0", ItemID.rock_stone);
SevtechCore.regGroup("AgeOne", "Bronze Age", "background_1", BlockID.oreCopper);
SevtechCore.regGroup("AgeTwo", "Medieval Age", "background_2", BlockID.tcon_smeltery);
SevtechCore.regGroup("AgeThree", "Industrial Age", "background_3", ItemID.rubber);
SevtechCore.regGroup("AgeFour", "Modern Age", "background_4", ItemID.jetpack);

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

SevtechCore.regAchiPa("AgeZero", "AdvanChest", "It Very Small!", "Create a Advanced", "mainOak", 4, 7, BlockID.primalChestad);

SevtechCore.regAchiHi("AgeZero", "mainHeat", "Ace of Melter Base", "Craft A Heat", "mainPrimal", 3, 8, BlockID.Heater);
SevtechCore.regAchiHi("AgeZero", "mainMelter", "Let's Get Down and Melty", "Craft a Melter.", "mainHeat", 4, 8, BlockID.chopper);



SevtechCore.regAchiHi("AgeOne", "furnace", "It's Getting Hot in Here", "Make a Vanila Furnace", "mainMelter", 2, 3, 61);

SevtechCore.lockOre(15, 4, 2,  2);

Callback.addCallback("LevelLoaded", function(){
// delete age 1
Recipes.deleteRecipe({id: 61, count: 1, data: 0});  
Recipes.removeFurnaceRecipe({id: BlockID.oreTin, data: 0});
Recipes.removeFurnaceRecipe({id: BlockID.oreCopper, data: 0});
Recipes.removeFurnaceRecipe({id: 162, data: 0});
Recipes.deleteRecipe({id: BlockID.soou, count: 1, data: 0});
Recipes.deleteRecipe({id: BlockID.krucher, count: 1, data: 0});
Recipes.deleteRecipe({id: 355, count: 1, data: 0});
// delete age 2
Recipes.deleteRecipe({id: BlockID.tcon_smeltery, count: 1, data: 0});
Recipes.deleteRecipe({id: 339, count: 1, data: 0});
Recipes.removeFurnaceRecipe({id: 20, count: 1, data: 0});
Recipes.deleteRecipe({id: BlockID.tcon_grout, count: 1, data: 0});
Recipes.deleteRecipe({id: BlockID.twBlockPortal, count: 1, data: 0});
Recipes.removeFurnaceRecipe({id: ItemID.tcon_brick, count: 1, data: 0});
});

//AgeZero

Callback.addCallback("ItemUse", function(coords, item, block){
    if(item.id==VanillaItemID.stick){
        AchievementAPI.give("AgeZero", "stick");
    }
});

Callback.addCallback("ItemUse", function(coords, item, block){
    if(item.id==ItemID.plant_fiber){
        AchievementAPI.give("AgeZero", "fibrousdiet");
    }
});

Callback.addCallback("ItemUse", function(coords, item, block){
    if(item.id==318){
        AchievementAPI.give("AgeZero", "flint");
    }
});

Callback.addCallback("ItemUse", function(coords, item, block){
    if(item.id==ItemID.flint_hatchet){
        AchievementAPI.give("AgeZero", "mainFlinthatchet");
    }
});

Callback.addCallback("ItemUse", function(coords, item, block){
    if(item.id==17){
        AchievementAPI.give("AgeZero", "mainOak");
    }
});

Callback.addCallback("ItemUse", function(coords, item, block){
    if(item.id==ItemID.flint_saw){
        AchievementAPI.give("AgeZero", "mainSaw");
    }
});

Callback.addCallback("ItemUse", function(coords, item, block){
    if(item.id==BlockID.stump){
        AchievementAPI.give("AgeZero", "mainCraft");
    }
});

Callback.addCallback("ItemUse", function(coords, item, block){
    if(item.id==BlockID.primalChestbasic){
        AchievementAPI.give("AgeZero", "mainPrimal");
    }
});

Callback.addCallback("ItemUse", function(coords, item, block){
    if(item.id==BlockID.Heater){
        AchievementAPI.give("AgeZero", "mainHeat");
    }
});

Callback.addCallback("ItemUse", function(coords, item, block){
    if(item.id==BlockID.primalChestad){
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
Callback.addCallback("VanillaWorkbenchCraft", function (result) {
    switch (result.id) {
        case BlockID.Melter:
                AchievementAPI.give("AgeZero", "mainMelter");
                Complete.play();
           Game.message(Translation.translate("Welcome to Age One"));
             for(let i = 0; i<5; i++){
           Recipes.addShaped({id: 54, count: 1, data: 0}, 
             ["sss",
              "sas",
              "sss"],
             ["s", 5, i, "a", BlockID.primalChestad, 0
           ]);
           Recipes.addShaped({id: 61, count: 1, data: 0}, 
             ["sss",
              "s s",
              "sss"],
             ["s", 4, 0
           ]);
           Recipes.addShaped({id: BlockID.soou, count: 1, data: 0}, 
           ["ada", 
            "ccc",
            "bbb"],
           ["a", 5, 0, "b", 5, i, "c", 4, 0, "d", ItemID.gearStone, 0]);
           Recipes.addShaped({id: BlockID.krucher, count: 1, data: 0}, 
           ["cac", 
            "cdc",
            "bbb"],
           ["a", ItemID.flint_pickaxe, 0, "b", 5, i, "c", 4, 0, "d", ItemID.gearStone, 0]);
           Recipes.addShaped({id: BlockID.kilnbrick, count: 1, data: 0}, 
             ["   ",
              "sa ",
              "as "],
             ["s", 24, 0, "a", 336, 0
           ]);
           Recipes.addShaped({id: BlockID.kilnalloy, count: 1, data: 0}, 
             ["ss ",
              "sss",
              "sss"],
             ["s", BlockID.kilnbrick, 0
           ]);
           Recipes.addShaped({id: 355, count: 1, data: 0}, 
             ["   ",
              "aaa",
              "sss"],
             ["s", 5, i, "a", 35, 0
           ]);
             }
            break;
    }
});
  
// file: showAge.js
