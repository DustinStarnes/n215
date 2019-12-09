function buttonPressed(buttonID, sectionID) {
  console.log("pressed " + buttonID + " - " + sectionID);
}

function addListener() {
  var sectionShowing = "homeSection";

  //function trargeting the nav a
  $("nav a").click(function(event) {
    //var for button id that grabs onclick vie event and makes it "id"
    var buttonID = event.currentTarget.id;

    //var that makes the button id into ____Section
    var sectionID = buttonID + "Section";

    //dynamic view that takes sectionID and displays it
    //this turns off the old section
    $("#" + sectionShowing).attr("class", "hide");
    //we switch the name to the section we want to show
    sectionShowing = sectionID;
    //then we show it
    $("#" + sectionShowing).attr("class", "show");

    //$("section").html(buttonID);
    buttonPressed(buttonID, sectionID);
  });
}

$(document).ready(function() {
  addListener();
});
