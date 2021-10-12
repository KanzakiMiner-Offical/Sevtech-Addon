IDRegistry.genBlockID("chop");

Block.createBlock("chop", [

  { name: "Chopping Block", texture: [["oak", 0]], inCreative: true }
]);

ToolAPI.registerBlockMaterial(BlockID.chop, "oak");
Block.setBlockShape(BlockID.chop, { x: 1 / 16, y: 0, z: 1 / 16 }, { x: 15 / 16, y: 7 / 16, z: 15 / 16 });

TileEntity.registerPrototype(BlockID.chop, {
  defaultValues: {
    item: 0,
    data: 0,
    run: false
  },

  initAnimation: function() {
    this.animation = new Animation.Item(this.x + .5, this.y, this.z + .5);
    if (this.data.item != 0) {
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
  destroyAnimation: function() {
    if (this.animation) {
      this.animation.destroy();
    }
  },
  updateAnimation: function() {
    this.destroyAnimation();
    this.initAnimation();
  },

  init: function() {
    this.initAnimation();
  },

  destroy: function() {
    World.drop(this.x + .5, this.y + .5, this.z + .5, this.data.item, 1, 0);
    this.destroyAnimation();
    this.data.item = 0;
  },

  checkLog: function() {
    if (this.data.item == 17 || this.data.item == 162) {
      return true;
    } else {
      return false;
    }
  },

  click: function() {
    Game.prevent();
    var item = Player.getCarriedItem();
    if (item.id == 271) {
      this.data.run = true;
    }

    if (this.data.item == 0 && (item.id == 17 || item.id == 162)) {
      this.data.item = item.id;
      this.data.data = item.data;
      this.updateAnimation();
      Player.decreaseCarriedItem();
    }
    if (this.data.item != 0 && Entity.getSneaking(Player.get())) {
      World.drop(this.x + .5, this.y + .5, this.z + .5, this.data.item, 1, this.data.data);
      this.destroyAnimation();
      this.data.item = 0;
    }

  },

  tick: function() {
    if (this.data.run == true)
    {
      if (this.checkLog() == true) {
        World.drop(this.x + 0.5, this.y + 0.5, this.z + 0.5, 5, 3, this.data.data);
        this.data.run = false;
      } else if (this.checkLog == false) {
        this.data.run = false;
      }
    } /*else {
      alert("Cho Gỗ vô bạn ey /n Put Oak Log Please")
    }*/
    if (this.animation && this.data.item == 0) {
      this.destroyAnimation();
    }

  }

});


Callback.addCallback('LevelLoaded', function() {

  Recipes.addShapeless({ id: BlockID.chop, count: 1, data: 0 }, [{ id: 17, data: -1 }]);
  Recipes.addShapeless({ id: BlockID.stump, count: 1, data: 0 }, [{ id: 17, data: -1 }, { id: BlockID.chop, data: 0 }]);

});