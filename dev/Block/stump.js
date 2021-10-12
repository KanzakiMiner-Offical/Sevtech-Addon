IDRegistry.genBlockID("stump");

Block.createBlock("stump", [
  { name: "Stump Work", texture: [["oak", 0]], inCreative: true }
]);


var stumpUI = new UI.StandartWindow({
  standart: { header: { text: { text: "Stump Work" } } },
  background: { color: android.graphics.Color.parseColor("#c6c6c6") },
  inventory: { standart: true },
  drawing: [],
  elements: {
    "inputSlot0": { type: "slot", x: 350, y: 150, size: 86 },
    "inputSlot1": { type: "slot", x: 435, y: 150, size: 86 },
    "inputSlot2": { type: "slot", x: 520, y: 150, size: 86 },
    "inputSlot3": { type: "slot", x: 350, y: 235, size: 86 },
    "inputSlot4": { type: "slot", x: 435, y: 235, size: 86 },
    "inputSlot5": { type: "slot", x: 520, y: 235, size: 86 },
    "inputSlot6": { type: "slot", x: 350, y: 320, size: 86 },
    "inputSlot7": { type: "slot", x: 435, y: 320, size: 86 },
    "inputSlot8": { type: "slot", x: 520, y: 320, size: 86 },
    "scale_0": { type: "scale", x: 630, y: 239, direction: 0, bitmap: "arrow", scale: 5.099999999999997, value: 1 },
    "outputSlot": { type: "slot", x: 775, y: 235, size: 86 }
  }

});

RecipeTE.registerWorkbench("stump", {
  rows: 3,
  cols: 3,
  GuiScreen: stumpUI,
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
  count: 1
}, [
	" f ",
    " tf",
    "   "
	], {
  f: { id: ItemID.flint_flake },
  t: { id: ItemID.plant_twine }
});

RecipeTE.addShapeRecipe("stump", {
  id: ItemID.flint_workblade,
  count: 1
}, [
    " fh",
    "ftf",
    "sf "
    ], {
  f: { id: ItemID.flint_flake },
  h: { id: 318 },
  s: { id: 280 },
  t: { id: ItemID.plant_twine }
});

RecipeTE.addShapeRecipe("stump", {
  id: ItemID.flint_pickaxe,
  count: 1
}, [
	"ftf",
    "fsf",
    " s "
	], {
  f: { id: ItemID.flint_flake },
  t: { id: ItemID.plant_twine },
  s: { id: 280 }
});

RecipeTE.addShapeRecipe("stump", {
  id: ItemID.flint_hatchet,
  count: 1
}, [
	" ft",
    "  s",
	"   "
	], {
  f: { id: ItemID.flint_flake },
  t: { id: ItemID.plant_twine },
  s: { id: 280 }
});

RecipeTE.addShapeRecipe("stump", {
  id: ItemID.flint_axe,
  count: 1
}, [
	"fht",
    "fsf",
    " s "
	], {
  f: { id: ItemID.flint_flake },
  t: { id: ItemID.plant_twine },
  s: { id: 280 },
  h: { id: 318 }
});