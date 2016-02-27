// JavaScript source code

function ResetFields() {
    var psfResult = "";
    document.getElementById("PSF_Result").innerHTML = psfResult;
    document.getElementById("J1_M1").style.display = "none";
    document.getElementById("J2_M2").style.display = "none";
    document.getElementById("J2_M3_S").style.display = "none";
    document.getElementById("J2_M3_CRS").style.display = "none";
    }

document.onkeydown = function (evt) {
    evt = evt || window.event;
    if (evt.keyCode == 27) {
        ResetFields();
        document.getElementById("reset_btn").click();
        document.getElementById("widthInput").focus();
    }
    if (evt.keyCode == 13) {
        CalculatePSF();
        }
};

function CalculatePSF(widthInputValue, heightInputValue, verticalLitesValue, horizontalLitesValue) {
try {
  // Declaration of Variables that will be needed to Determine Pressures
  var widthInputValue, heightInputValue, verticalLitesValue, horizontalLitesValue;

  //Divide Total Dimensions by number of Lites
  // TO USE FUNCTION CalculatePSF DELETE Lines 32-35 removing the Declaration of said values from Specified Get Element by Id Values
  widthInputValue = document.getElementById("widthInput").value;
  heightInputValue = document.getElementById("heightInput").value;
  verticalLitesValue = document.getElementById("vertiLitesInput").value;
  horizontalLitesValue = document.getElementById("horizLitesInput").value;

  var width = widthInputValue / verticalLitesValue;
  var height = heightInputValue / horizontalLitesValue;
  var psfResult;

// Declare and Initialize PSF Mull Capacity for FULL VIEW PANELS
    //Variable Declaration Format (PSF_{+positive pressure}_{negative pressure}_{JAMB OPTION}_{MULL OPTION})
    //START OF VERTICAL FULL VIEW PANELS TABLE       Page 3 of 12
var psf_62d1_62d1_J1_M1 = "   +62.1 /  -62.1   J1 / M1";
var psf_69d4_69d4_J1_M1 = "   +69.4 /  -69.4   J1 / M1";
var psf_69d9_69d9_J1_M1 = "   +69.9 /  -69.9   J1 / M1";
var psf_70_70_J1_M1     = "   +70.0 /  -70.0   J1 / M1";
var psf_98d2_98d2_J1_M1 = "   +98.2 /  -98.2   J1 / M1";
var psf_100_107d6_J1_M1 = "  +100.0 / -107.6   J1 / M1";
var psf_100_110_J1_M1   = "  +100.0 / -110.0   J1 / M1";

var psf_52d7_52d7_J2_M2 = "   +52.7 /  -52.7   J2 / M2 *Aluminum";
var psf_58_58_J2_M2     = "   +58.0 /  -58.0   J2 / M2 *Aluminum";
var psf_59d6_59d6_J2_M2 = "   +59.6 /  -59.6   J2 / M2 *Aluminum";
var psf_60d1_60d1_J2_M2 = "   +60.1 /  -60.1   J2 / M2 *Aluminum";
var psf_65_65_J2_M2     = "   +65.0 /  -65.0   J2 / M2 *Aluminum";

var psf_78d6_78d6_J2_M3 = "   +78.6 /  -78.6   J2 / M3 *Steel";
var psf_82d8_82d8_J2_M3 = "   +82.8 /  -82.8   J2 / M3 *Steel";
var psf_85_9_85d9_J2_M3 = "   +85.9 /  -85.9   J2 / M3 *Steel";
var psf_86d2_86d2_J2_M3 = "   +86.2 /  -86.2   J2 / M3 *Steel";
var psf_88d9_88d9_J2_M3 = "   +88.9 /  -88.9   J2 / M3 *Steel";
var psf_92d1_92d1_J2_M3 = "   +92.1 /  -92.1   J2 / M3 *Steel";
var psf_93d6_93d6_J2_M3 = "   +93.6 /  -93.6   J2 / M3 *Steel";
var psf_95d1_95d1_J2_M3 = "   +95.1 /  -95.1   J2 / M3 *Steel";
var psf_97d3_97d3_J2_M3 = "   +97.3 /  -97.3   J2 / M3 *Steel";
var psf_100_103d9_J2_M3 = "  +100.0 / -103.9   J2 / M3 *Steel";
var psf_100_110_J2_M3   = "  +100.0 / -110.0   J2 / M3 *Steel";
var psf_100_110d5_J2_M3 = "  +100.0 / -110.5   J2 / M3 *Steel";
var psf_100_102d4_J2_M3 = "  +100.0 / -102.4   J2 / M3 *Steel";
var psf_100_102d8_J2_M3 = "  +100.0 / -102.8   J2 / M3 *Steel";
var psf_100_111d7_J2_M3 = "  +100.0 / -111.7   J2 / M3 *Steel";
var psf_100_115_J2_M3   = "  +100.0 / -115.0   J2 / M3 *Steel";

var psf_86_5_86d5_J2_M3_CRS = "  +86.5 /  -86.5   J2 / M3 *Cold Rolled";
var psf_94d3_94d3_J2_M3_CRS = "  +94.3 /  -94.3   J2 / M3 *Cold Rolled";
var psf_100_101d4_J2_M3_CRS = " +100.0 / -101.4   J2 / M3 *Cold Rolled";
var psf_100_105d9_J2_M3_CRS = " +100.0 / -105.9   J2 / M3 *Cold Rolled";
var psf_100_106d6_J2_M3_CRS = " +100.0 / -106.6   J2 / M3 *Cold Rolled";
var psf_100_107d6_J2_M3_CRS = " +100.0 / -107.6   J2 / M3 *Cold Rolled";
var psf_100_110_J2_M3_CRS   = " +100.0 / -110.0   J2 / M3 *Cold Rolled";
var psf_100_115_J2_M3_CRS   = " +100.0 / -115.0   J2 / M3 *Cold Rolled";
// END OF FULL VIEW PANELS TABLE

//START OF HORIZONTAL DIVISIONS TABLE   PAGE - 4 of 12
var psf_58d4_58d4_J1_M1 ="  +58.4 / -58.4    J1 / M1";
var psf_64d1_64d1_J1_M1 ="  +64.1 / -64.1    J1 / M1";
var psf_66d7_66d7_J1_M1 ="  +66.7 / -66.7    J1 / M1";
var psf_68d1_68d1_J1_M1 ="  +68.1 / -68.1    J1 / M1";
var psf_92_92_J1_M1     ="  +92.0 / -92.0    J1 / M1";
var psf_97d7_97d7_J1_M1 ="  +97.7 / -97.7    J1 / M1";
var psf_100_103d8_J1_M1 =" +100.0 / -103.8   J1 / M1";
var psf_100_104d1_J1_M1 =" +100.0 / -104.1   J1 / M1";
var psf_100_105d1_J1_M1 =" +100.0 / -105.1   J1 / M1";
var psf_100_106_J1_M1   =" +100.0 / -106.0   J1 / M1";

var psf_50d5_50d5_J2_M2 = " +50.5 / -50.5    J2 / M2 *Aluminum";
var psf_55d1_55d1_J2_M2 = " +55.1 / -55.1    J2 / M2 *Aluminum";
var psf_57d4_57d4_J2_M2 = " +57.4 / -57.4    J2 / M2 *Aluminum";
var psf_57d7_57d7_J2_M2 = " +57.7 / -57.7    J2 / M2 *Aluminum";
var psf_59d4_59d4_J2_M2 = " +59.4 / -59.4    J2 / M2 *Aluminum";

var psf_75d4_75d4_J2_M3 = "  +75d4 / -75d4   J2 / M3 *Steel";
var psf_79d2_79d2_J2_M3 = "  +79.2 / -79.2   J2 / M3 *Steel";
var psf_82d5_82d5_J2_M3 = "  +82.5 / -82.5   J2 / M3 *Steel";
var psf_86d2_86d2_J2_M3 = "  +86.2 / -86.2   J2 / M3 *Steel";
var psf_86d4_86d4_J2_M3 = "  +86.4 / -86.4   J2 / M3 *Steel";
var psf_87d3_87d3_J2_M3 = "  +87.3 / -87.3   J2 / M3 *Steel";
var psf_88_88_J2_M3     = "  +88.0 / -88.0   J2 / M3 *Steel";
var psf_96d8_96d8_J2_M3 = "  +96.8 / -96.8   J2 / M3 *Steel";
var psf_97_97_J2_M3     = "  +97.0 / -97.0   J2 / M3 *Steel";
var psf_99_99_J2_M3     = "  +99.0 / -99.0   J2 / M3 *Steel";
var psf_100_107d5_J2_M3 = " +100.0 /-107.5   J2 / M3 *Steel";
var psf_100_107d8_J2_M3 = " +100.0 /-107.8   J2 / M3 *Steel";

// Reinforced Cold Steel with Horizontal Divisions page 4 of 12
var psf_82d2_82d2_J2_M3_CRS = " +82.2 / -82.2    J2 / M3 *Cold Rolled";
var psf_85d7_85d7_J2_M3_CRS = " +85.7 / -85.7    J2 / M3 *Cold Rolled";
var psf_88d6_88d6_J2_M3_CRS = " +88.6 / -88.6    J2 / M3 *Cold Rolled";
var psf_97d9_97d9_J2_M3_CRS = " +97.9 / -97.9    J2 / M3 *Cold Rolled";
var psf_98d2_98d2_J2_M3_CRS = " +98.2 / -98.2    J2 / M3 *Cold Rolled";
var psf_100_100_J2_M3_CRS =   " +100.0 / -100.0  J2 / M3 *Cold Rolled";
var psf_100_104d2_J2_M3_CRS = " +100.0 / -104.2  J2 / M3 *Cold Rolled";

var MaxWidthPerPanel = "NOA Maximum Width per Panel at this height is ";

//Check for Horizontal Divisions - If = 1 Use FULL VIEW TABLE BECAUSE THERE ARE NO DIVISIONS
if (horizontalLitesValue == 1) {
    if (height <= 90) {                           // At Height of 90"   &   Width:  30", 36", 42", 48", 54", 55", 60"            M1 / J1
        if (width <= 55) { psfResult = psf_100_110_J1_M1; }
        else if (width <= 60) { psfResult = psf_70_70_J1_M1; }
        else if (width <= 72) { psfResult = psf_100_115_J2_M3; }
        else if (width > 72) { psfResult = MaxWidthPerPanel + 72 + "\""; }
      }
    else if (height <= 96)                         // At Height of 96"   &   Width:  30", 36", 42", 48", 51", 54", 60"                M1 / J1
        {                                        // At Height of 120"   &   Width:  30", 36", 42", 48", 51", 54", 60" 66", 72"      J2 / M3
            if (width <= 48) { psfResult = psf_100_110_J1_M1 +         "<br/> " + psf_100_115_J2_M3; }
            else if (width <= 51) { psfResult = psf_100_107d6_J1_M1 +  "<br/> "  + psf_100_115_J2_M3; }
            else if (width <= 60) { psfResult = psf_70_70_J1_M1 +      "<br/> " + psf_100_115_J2_M3; }
            else if (width <= 72) { psfResult = psf_100_115_J2_M3; }
            else if (width > 72) { psfResult = MaxWidthPerPanel + 72 + "\""; }
          }
    else if (height <= 102)                      // At Height of 102"  &   Width:  30", 36", 42", 48", 54", 57"                       M1 / J1
        {                                        // &   Width:  30", 36", 42", 48", 54", 60" 66", 71"    J2 / M3
        if (width <= 42) { psfResult = psf_100_110_J1_M1 +  "<br/> " + psf_100_115_J2_M3 ; }
        else if (width <= 48) { psfResult = psf_98d2_98d2_J1_M1 +  "<br/> " + psf_100_115_J2_M3; }
        else if (width <= 57) { psfResult = psf_70_70_J1_M1 +"<br/> " + psf_100_115_J2_M3; }
        else if (width <= 71) { psfResult = psf_100_115_J2_M3; }       // M2 / J2
        else if (width > 71)  { psfResult = MaxWidthPerPanel + 71 + "\""; }
      }
    else if (height <= 108)                      // At Height of 108"   &   Width:  30", 36", 42", 48", 54"                          M1 / J1
    {                                            // At Height of 108"   &   Width:  30", 36", 42", 48", 54" 60" 66" 67"              J2 / M3
        if      (width <= 54) { psfResult = psf_70_70_J1_M1 + "<br/> " + psf_100_115_J2_M3;}
        else if (width <= 60) { psfResult = psf_100_115_J2_M3;}                                                                    // J2 / M3
        else if (width <= 66) { psfResult = psf_100_111d7_J2_M3;}                                                                  // J2 / M3
        else if (width <= 67) { psfResult = psf_100_110d5_J2_M3;}                                                                  // J2 / M3
        else if (width > 67)  { psfResult = MaxWidthPerPanel + 67 + "\""; }
    }
    else if (height <= 114)                      // At Height of 114"   &   Width:  30", 36", 42", 48", 51"                         M1 / J1
    {                                            // &   Width:  30", 36", 42", 48", 54" 60" 63"                                     J2 / M3
        if (width <= 48)      { psfResult = psf_70_70_J1_M1     + "<br/> " + psf_100_115_J2_M3;}
        else if (width <= 51) { psfResult = psf_69d4_69d4_J1_M1 + "<br/> " + psf_100_115_J2_M3;}
        else if (width <= 54) { psfResult = psf_100_115_J2_M3;}
        else if (width <= 63) { psfResult = psf_100_102d4_J2_M3  + "<br/> " + psf_100_115_J2_M3_CRS ;}
        else if (width > 63)  { psfResult = MaxWidthPerPanel + 63 + "\""; }
    }
    else if (height <= 120)                     // At Height of 120"  &   Width:  30", 36", 42", 48"                             M1 / J1
                                                // At Height of 120"  &   Width:  48", 54", 58"                                  M2 / J2
        {                                       // At Height of 120"  &   Width:  54", 60"                                       M2 / J2 *Reinforced Cold Rolled
        if (width <= 36)      { psfResult = psf_70_70_J1_M1     + "<br/> " + psf_100_115_J2_M3; }
        else if (width <= 42) { psfResult = psf_69d9_69d9_J1_M1 + "<br/> " + psf_100_115_J2_M3; }
        else if (width <= 48) { psfResult = psf_62d1_62d1_J1_M1 + "<br/> " + psf_100_115_J2_M3; }
        else if (width <= 54) { psfResult = psf_65_65_J2_M2     + "<br/> " + psf_100_103d9_J2_M3 + "<br/> " + psf_100_115_J2_M3_CRS;}
        else if (width <= 58) { psfResult = psf_65_65_J2_M2     + "<br/> " + psf_95d1_95d1_J2_M3 + "<br/> " + psf_100_115_J2_M3_CRS;}
        else if (width <= 60) { psfResult = psf_95d1_95d1_J2_M3 + "<br/> " + psf_100_115_J2_M3_CRS; }
        else if (width > 60)  { psfResult = MaxWidthPerPanel + 60 + "\""; }
      }
    else if (height <= 126) {                   // At Height of 126" &   Width:  30", 36", 42", 48", 54", 55"                   M2 / J2
                                                // At Height of 126" &   Width:  30", 36", 42", 48", 54", 55"                   J2 / M3
                                                // At Height of 126" &   Width:  30", 36", 42", 48", 54", 55"                   J2 / M3  *Reinforced Cold Rolled
        if (width <= 42) { psfResult = psf_100_110_J2_M3;}
        else if (width <= 48) {psfResult = psf_100_103d9_J2_M3;
                               psfResult += "<br/> " + psf_100_110_J2_M3_CRS;}
        else if (width <= 54) {
            psfResult = psf_93d6_93d6_J2_M3;
            psfResult += "<br/> " + psf_100_107d6_J2_M3_CRS;
        }
        else if (width <= 55) { psfResult = psf_65_65_J2_M2;
            psfResult += "<br/> " + psf_92d1_92d1_J2_M3;
            psfResult += "<br/> " + psf_100_105d9_J2_M3_CRS;
        }
        else if (width > 55) { psfResult = MaxWidthPerPanel + 55 + "\""; }
      }
      else if (height <= 132)                 // At Height of 132"   &   Width:  30", 36", 42", 48", 53"              M2 / J2
        {                                     // At Height of 132"   &   Width:  30", 36", 42", 48", 53"              J2 / M3
                                              // At Height of 132"   &   Width:  42"                                  J2 / M3 *Cold Rolled
        if (width <= 36) { psfResult = psf_100_110_M3_M2; }
        else if (width <= 42) {
            psfResult = psf_100_106d6_J2_M3_CRS;
            psfResult += "<br/> " + psf_100_110_J2_M3;
        }
        else if (width <= 48) {
            psfResult = psf_65_65_J2_M2;
            psfResult = psf_94d3_94d3_J2_M3_CRS;
        }
        else if (width <= 53) { psfResult = psf_86d2_86d2_J2_M3; }
        else if (width > 53) { psfResult = MaxWidthPerPanel + 53 + "\""; }
        }
    else if (height <= 138)                   // At Height of 138"   &   Width:  30", 36", 42", 48", 50"                M2 / J2
    {                                         // At Height of 132"   &   Width:  30", 36", 42", 48", 50"                J2 / M3
                                              // At Height of 132"   &   Width:  42", 48", 50"                          J2 / M3 *Cold Rolled
        if (width <= 36) { psfResult = psf_100_110_M3_M2; }
        else if (width <= 42) {
            psfResult = psf_65_65_J2_M2;
            psfResult += "<br/> " + psf_97d3_97d3_J2_M3;
            psfResult += "<br/> " + psf_100_101d4_J2_M3_CRS;
        }
        else if (width <= 48) {
            psfResult = (psf_60d1_60d1_J2_M2);
            psfResult += "<br/> " + psf_85_9_85d9_J2_M3;
            psfResult += "<br/> " + psf_86_5_86d5_J2_M3_CRS;
        }
        else if (width <= 50) {
            psfResult = (psf_58_58_J2_M2);
            psfResult += "<br/> " + psf_82d8_82d8_J2_M3;
            psfResult += "<br/> " + psf_86_5_86d5_J2_M3_CRS;
            }
        else if (width > 50) { psfResult = MaxWidthPerPanel + 50 + "\""; }
    }
    else if (height <= 144)                 // At Height of 144"   &   Width:  30", 36", 42", 48"                     M2 / J2
    {
        if (width <= 36) { psfResult = psf_65_65_J2_M2 + "<br/> " + psf_100_102d8_J2_M3;}
        else if (width <= 42) { psfResult = psf_59d6_59d6_J2_M2 + "<br/> " +  psf_88d9_88d9_J2_M3;}
        else if (width <= 48) { psfResult =  psf_52d7_52d7_J2_M2 + "<br/> " + psf_78d6_78d6_J2_M3;}
        else if (width > 48) { psfResult = MaxWidthPerPanel + 48 + "\""; }
    }
    else if (height > 144) {
        psfResult = "Exceeds Max height of 144\" consider using Steel beam or Aluminum Mull for bigger openings.";}
}

//Check for Horizontal Divisions - If > 1 Use HORIZONTAL DIVISIONS TABLE BECAUSE THERE ARE LITES STACKED
if (horizontalLitesValue > 1) {
    if (height <= 90) {                           // At Height of 90"   &   Width:  30", 36", 42", 48", 54", 55", 60"            M1 / J1
        if (width <= 48) { psfResult = psf_100_110_J1_M1; }
        else if (width <= 54) { psfResult = psf_100_106_J1_M1; }
        else if (width <= 55) { psfResult = psf_100_104d1_J1_M1; }
        else if (width <= 60) { psfResult = psf_70_70_J1_M1; }
        else if (width > 60) { psfResult = MaxWidthPerPanel + 60 + "\""; }
      }
      if (height <= 96) {                           // At Height of 90"   &   Width:  30", 36", 42", 48", 54", 55", 60"            M1 / J1
          if (width <= 42) { psfResult = psf_100_110_J1_M1 + "<br/>" + psf_100_115_J2_M3; }
          else if (width <= 48) { psfResult = psf_100_103d8_J1_M1  + "<br/>" + psf_100_115_J2_M3; }
          else if (width <= 51) { psfResult = psf_97d7_97d7_J1_M1 + "<br/>" + psf_100_115_J2_M3; }
          else if (width <= 60) { psfResult = psf_70_70_J1_M1  + "<br/>" + psf_100_115_J2_M3; }
          else if (width > 60) { psfResult = MaxWidthPerPanel + 60 + "\""; }
        }
        if (height <= 102) {                           // At Height of 90"   &   Width:  30", 36", 42", 48", 54", 55", 60"            M1 / J1
            if (width <= 36) { psfResult = psf_100_110_J1_M1 + "<br/>" + psf_100_115_J2_M3; }
            else if (width <= 42) { psfResult = psf_100_105d1_J1_M1 + "<br/>" + psf_100_115_J2_M3; }
            else if (width <= 48) { psfResult = psf_92_92_J1_M1 + "<br/>" + psf_100_115_J2_M3; }
            else if (width <= 57) { psfResult = psf_70_70_J1_M1;}
            else if (width <= 60) { psfResult = psf_100_115_J2_M3; }
            else if (width > 60) { psfResult = MaxWidthPerPanel + 60 + "\""; }
          }
        if (height <= 108) {                           // At Height of 90"   &   Width:  30", 36", 42", 48", 54", 55", 60"            M1 / J1
              if (width <= 54) { psfResult = psf_70_70_J1_M1 + "<br/>" + psf_100_115_J2_M3; }
              else if (width <= 60) { psfResult = psf_100_107d8_J2_M3; }
              else if (width > 60) { psfResult = MaxWidthPerPanel + 54 + "\""; }
            }
        if (height <= 114) {                           // At Height of 90"   &   Width:  30", 36", 42", 48", 54", 55", 60"            M1 / J1
                if (width <= 42) { psfResult = psf_70_70_J1_M1  + "<br/>" + psf_100_115_J2_M3; }
                else if (width <= 48) { psfResult = psf_68d1_68d1_J1_M1  + "<br/>" + psf_100_115_J2_M3; }
                else if (width <= 51) { psfResult = psf_64d1_64d1_J1_M1  + "<br/>" + psf_100_107d5_J2_M3  + "<br/>" + psf_100_115_J2_M3; }
                else if (width <= 54) {psf_100_107d5_J2_M3  + "<br/>" + psf_100_115_J2_M3; }
                else if (width <= 60) {psf_96d8_96d8_J2_M3  + "<br/>" + psf_100_115_J2_M3_CRS; }
                else if (width > 60) { psfResult = MaxWidthPerPanel + 60 + "\""; }
              }
        if (height <= 120) {                           // At Height of 90"   &   Width:  30", 36", 42", 48", 54", 55", 60"            M1 / J1
                if (width <= 36) { psfResult = psf_70_70_J1_M1; }
                else if (width <= 42) { psfResult = psf_66d7_66d7_J1_M1; }
                else if (width <= 48) { psfResult = psf_58d4_58d4_J1_M1 + "<br/> " + psf_65_65_J2_M2; }
                else if (width <= 58) { psfResult = psf_65_65_J2_M2; }
                else if (width > 58) { psfResult = MaxWidthPerPanel + 58 + "\""; }
              }
        if (height <= 126) {                           // At Height of 90"   &   Width:  30", 36", 42", 48", 54", 55", 60"            M1 / J1
                if (width <= 55) { psfResult = psf_65_65_J2_M2; }
                else if (width > 55) { psfResult = MaxWidthPerPanel + 55 + "\""; }
              }
        if (height <= 132) {                           // At Height of 90"   &   Width:  30", 36", 42", 48", 54", 55", 60"            M1 / J1
                if (width <= 48) { psfResult = psf_65_65_J2_M2; }
                else if(width <= 53) { psfResult = psf_59d4_59d4_J2_M2; }
                else if (width > 53) { psfResult = MaxWidthPerPanel + 53 + "\""; }
              }
        if (height <= 138) {                           // At Height of 90"   &   Width:  30", 36", 42", 48", 54", 55", 60"            M1 / J1
                if (width <= 42) { psfResult = psf_65_65_J2_M2; }
                else if (width <= 48) { psfResult = psf_57d4_57d4_J2_M2; }
                else if (width <= 50) { psfResult = psf_55d1_55d1_J2_M2 + "<br/> " + psf_82d2_82d2_J2_M3_CRS; }
                else if (width > 50) { psfResult = MaxWidthPerPanel + 50 + "\""; }
              }
        if (height <= 144) {                           // At Height of 90"   &   Width:  30", 36", 42", 48", 54", 55", 60"            M1 / J1
                if (width <= 36) { psfResult = psf_65_65_J2_M2; }
                else if (width <= 42) { psfResult = psf_57d7_57d7_J2_M2; }
                else if (width <= 48) { psfResult = psf_50d5_50d5_J2_M2; }
                else if (width > 48) { psfResult = MaxWidthPerPanel + 48 + "\""; }
              }




}

    ResetFields();
    document.getElementById("PSF_Result").innerHTML = psfResult;

    if(psfResult.indexOf("J1 / M1") > -1){
      document.getElementById("J1_M1").style.display = "inline";
    }
    if(psfResult.indexOf("J2 / M2") > -1){
      document.getElementById("J2_M2").style.display = "inline";
    }
    if(psfResult.indexOf("J2 / M3 *Steel") > -1){
      document.getElementById("J2_M3_S").style.display = "inline";
    }
    if(psfResult.indexOf("J2 / M3 *Cold Rolled") > -1){
      document.getElementById("J2_M3_CRS").style.display = "inline";
    }
    var result = psfResult;
    return result;
}
catch (err) {
  message.innerHTML = "Input " + err;
              }
            }
