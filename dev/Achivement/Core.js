var Complete = new Sound("complete.ogg");

var age = 0;

const SevtechCore = {

  regGroup: function(uni, nam, back, ico) {
    ModAPI.addAPICallback("AchievementsAPI", function(api) {
      AchievementAPI = api.AchievementAPI;
      api.AchievementAPI.registerGroup({
        unique: uni,
        name: nam,
        width: 2000,
        height: 2000,
        size: 100,
        bgTexture: back,
        icon: {
          id: icon
        }
      });
    });
  },

  regAchi: function(group, uni, text1, text2, x, y, icon) {
    ModAPI.addAPICallback("AchievementsAPI", function(api) {
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

  regAchiPa: function(group, uni, text1, text2, x, y, icon, par) {
    ModAPI.addAPICallback("AchievementsAPI", function(api) {

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

  regAchiHi: function(group, uni, text1, text2, x, y, icon, par) {
    ModAPI.addAPICallback("AchievementsAPI", function(api) {

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
  lockItem: function(ids, ages) {
    if (age < ages) {
      Item.registerNameOverrideFunction(ids, function(item, name) {
        return name + "\n§4Unfamiliar Item, You Can Not Use It";
      });
    } else if (age >= ages) {
      Item.registerNameOverrideFunction(id, function(item, name) {
        return name - "\n§4Unfamiliar Item, You Can Not Use It";
      });
    }

  },

  lockOre: function(input, output, ages, levelperore) {
    Block.registerDropFunction(input, function(coords, id, data, diggingLevel) {
      if (diggingLevel >= levelperore && age < ages) {
        Game.message("You cant break it now,plaese unlock Age" + ages);
        return [[output, Random.Int(1, 2), 0]];

      } else if (diggingLevel >= levelperore && age >= ages) {
        return [[input, Random.Int(1, 2), 0]];
      }
    });

  }


};