var AgeHub = new UI.Window({

  location: {

    x: __config__.getNumber("x"),
    y: __config__.getNumber("y"),
    width: 84,
    height: 28
  },

  drawing: [
    { type: "background", color: android.graphics.Color.TRANSPARENT }
    ],

  elements: {
    "ages": { type: "text", x: 0, y: 0, text: "", font: { size: 320, color: android.graphics.Color.WHITE } }
  }
});

AgeHub.setAsGameOverlay(true);
AgeHub.setTouchable(false);


var AgeContainer = new UI.Container();

Callback.addCallback("NativeGuiChanged", function(screenName) {

  screenName == "in_game_play_screen" && AgeContainer.openAs(AgeHub);

  screenName != "in_game_play_screen" && AgeHub.close();
  screenName != "in_game_play_screen" && AgeContainer.close();

});
AgeContainer.setText("ages", "Your Age:" + age);