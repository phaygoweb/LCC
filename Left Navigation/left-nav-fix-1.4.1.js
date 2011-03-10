/*
    Kyle A. Matheny
    Lansing Community College
*/

var url = window.location.href.toLowerCase(), // Not every browser converts the url to lowercase automatically;
    isEquator = /equator/.test(url);

function cleanLeftNav() {
    var objMenuItems = document.getElementById('ctl00_ctl00_ctl00_LeftCol_leftNav').getElementsByTagName('a'),
        rxBadItem = /[_|>]/, // Reg Ex with characters to look for
        hiddenClass = "textOnly", // Class containing display:none
        i = objMenuItems.length, // Number of menu items
        tempChild,
        testString = ''; // Empty variables for While loop

    while (i--) {
        tempChild = objMenuItems[i];
        testString = tempChild.firstChild.nodeValue;
        
        if (rxBadItem.test(testString) || testString == testString.toLowerCase()) {
            tempChild.className = hiddenClass;
        }
    }
}

if (!isEquator) {
    cleanLeftNav();
}