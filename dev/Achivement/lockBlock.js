/*          lockOre: function(input, output, ages, levelperore) {
            Block.registerDropFunction(input, function(coords, id, data, diggingLevel) {
              if (diggingLevel >= levelperore && age < ages) {

                return [[output, Random.Int(1, 2), 0]];

                Game.message("You cant break it now,plaese unlock Age" + ages);
              } else if (diggingLevel >= levelperore && age >= ages) {
                return [[input, Random.Int(1, 2), 0]];
              }
            });

          }

*/

SevtechCore.lockOre(16, 4, 1, 1);

SevtechCore.lockOre(BlockID.oreTin, 4, 1, 1);

SevtechCore.lockOre(BlockID.oreCopper, 4, 1, 1);

SevtechCore.lockOre(15, 4, 2, 2);

SevtechCore.lockOre(14, 4, 2, 2);

SevtechCore.lockOre(21, 4, 2, 2);

SevtechCore.lockOre(169, 4, 2, 2);

