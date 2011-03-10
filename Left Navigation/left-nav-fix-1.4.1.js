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

/* Compiled: 275 bytes
    if(!/equator/.test(window.location.href.toLowerCase()))for(var a=document.getElementById("ctl00_ctl00_ctl00_LeftCol_leftNav").getElementsByTagName("a"),b=/[_|>]/,c=a.length,d,e="";c--;){d=a[c];e=d.firstChild.nodeValue;if(b.test(e)||e==e.toLowerCase())d.className="textOnly"};
*/

/* Simple Compile: 343 bytes
    var url=window.location.href.toLowerCase(),isEquator=/equator/.test(url);function cleanLeftNav(){for(var c=document.getElementById("ctl00_ctl00_ctl00_LeftCol_leftNav").getElementsByTagName("a"),e=/[_|>]/,d=c.length,b,a="";d--;){b=c[d];a=b.firstChild.nodeValue;if(e.test(a)||a==a.toLowerCase())b.className="textOnly"}}isEquator||cleanLeftNav();
*/

/* Minified: 497 bytes
    var url=window.location.href.toLowerCase(),isEquator=/equator/.test(url);function cleanLeftNav(){var objMenuItems=document.getElementById("ctl00_ctl00_ctl00_LeftCol_leftNav").getElementsByTagName("a"),rxBadItem=/[_|>]/,hiddenClass="textOnly",i=objMenuItems.length,tempChild,testString="";while(i--){tempChild=objMenuItems[i],testString=tempChild.firstChild.nodeValue;if(rxBadItem.test(testString)||testString==testString.toLowerCase())tempChild.className=hiddenClass}}if(!isEquator)cleanLeftNav();
*/