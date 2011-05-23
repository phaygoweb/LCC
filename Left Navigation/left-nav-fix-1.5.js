/*
   Kyle A. Matheny
   Lansing Community College
   2011/05/23
*/

var cleanup = (/equator/.test(window.location.href.toLowerCase())) ? false : cleanupMenu();

function cleanupMenu() {
   var lcc = {
         leftNav: {
            menuItems: document.getElementById("ct100_ct100_ct100_LeftCol_leftNav").getElementsByTagName("a"),
            rxBadItem: /[_|>]/
         },
         classes: {
            hiddenClass: "textOnly",
            showClass: ""
         }
      },
      i = lcc.leftNav.menuItems.length,
      tempElement = "",
      tempString = "";
   
   while (i--) {
      tempElement = lcc.leftNav.menuItems[i];
      tempString = tempElement.firstChild.nodeValue;
      
      if (lcc.leftNav.rxBadItem.test(tempString) || tempString === tempString.toLowerCase()) {
         tempElement.className = lcc.classes.hiddenClass;
      }
   }
}