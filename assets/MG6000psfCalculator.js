// JavaScript source code

function ResetFields() {
    var psfResult = "+ / -";
    document.getElementById("PSF_Result_Div").innerHTML = psfResult;
    document.getElementById("J1").style.display = "none";
    document.getElementById("M1").style.display = "none";
    document.getElementById("M2").style.display = "none";
    document.getElementById("M3_S").style.display = "none";
    document.getElementById("M3_CRS").style.display = "none";
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

function CalculatePSF(widthInputValue, heightInputValue, verticalLitesValue, horizontalLitesValue, reinforcementSelected) {

  // Declaration of Variables that will be needed to Determine Pressures
  var widthInputValue, heightInputValue, verticalLitesValue, horizontalLitesValue, reinforcementSelected, MaxExceeded;

  //Divide Total Dimensions by number of Lites
  // TO USE FUNCTION CalculatePSF DELETE Lines 32-35 removing the Declaration of said values from Specified Get Element by Id Values
  widthInputValue = document.getElementById("widthInput").value;
  heightInputValue = document.getElementById("heightInput").value;
  verticalLitesValue = document.getElementById("vertiLitesInput").value;
  horizontalLitesValue = document.getElementById("horizLitesInput").value;
  reinforcementSelected = document.getElementById("Reinforcement").value;

if (widthInputValue == undefined || widthInputValue == "") {alert("Please enter a Width"); return}
if (heightInputValue == undefined || heightInputValue == "") {alert("Please enter a height"); return}

  var width = widthInputValue / verticalLitesValue;
  var height = heightInputValue;
  var psf_M1, psf_M2, psf_M3, psf_M3_CRS;

  var MaxExceeded = "NOA Maximum Width per Panel at this height is ";

 //  M1 (No REINFORCMENT)  == FIRST Table in Page 3 of 12.
if (reinforcementSelected == 0)  {
    // FULL VIEW PANELS
    var psf_100_110_M1     = "  +100.0 / -110.0";
    var psf_70_70_M1       = "   +70.0 /  -70.0";
    var psf_100_107d6_M1   = "  +100.0 / -107.6";
    var psf_98d2_98d2_M1   = "   +98.2 /  -98.2";
    var psf_69d4_69d4_M1   = "   +69.4 /  -69.4";
    var psf_69d9_69d9_M1   = "   +69.9 /  -69.9";
    var psf_62d1_62d1_M1   = "   +62.1 /  -62.1";

    // HORIZONTAL DIVISION  PANELS == FIRST TABLE in Page 4 of 12
    var psf_100_106d0_M1   = "  +100.0 / -106.0";
    var psf_100_104d1_M1   = "  +100.0 / -104.1";
    var psf_100_103d8_M1   = " +100.0 / -103.8";
    var psf_97d7_97d7_M1   = "  +97.7 / -97.7 ";
    var psf_100_105d1_M1   = " +100.0 / -105.1";
    var psf_92d0_92d0_M1   = "  +92.0 / -92.0";
    var psf_68d1_68d1_M1   = "  +68.1 / -68.1";
    var psf_64d1_64d1_M1   = "  +64.1 / -64.1";
    var psf_66d7_66d7_M1   = "  +66.7 / -66.7";
    var psf_58d4_58d4_M1   = "  +58.4 / -58.4";

    if (horizontalLitesValue == 1) {
        if (height <= 90) {
            if (width <= 55) { psf_M1 = psf_100_110_M1; }
            else if (width <= 60) { psf_M1 = psf_70_70_M1; }
            else if (width > 60) { psf_M1 = MaxExceeded + 60 + '\"'; }
          }
    }
    if (horizontalLitesValue >= 2) {
         if (height <= 90) {                           // At Height of 90"   &   Width:  30", 36", 42", 48", 54", 55", 60"            M1 / J1
            if (width <= 48) { psf_M1 = psf_100_110_M1; }
            else if (width <= 54) { psf_M1 = psf_100_106_M1; }
            else if (width <= 55) { psf_M1 = psf_100_104d1_M1; }
            else if (width <= 60) { psf_M1 = psf_70_70_M1; }
            else if (width > 60) { psf_M1 = MaxExceeded + 60 + '\"'; }
          }
      }
}
//  M2 (ALUMINUM REINFORCMENT)  == SECOND Table in Page 3 of 12.   -line breaks indicate new table
if (reinforcementSelected == 1)  {
    // FULL VIEW PANELS
    var psf_65_65_M1     ="  +65.0 / -65.0";
    var psf_63d3_63d3_M1 ="  +63.3 / -63.3";
    var psf_60d1_60d1_M2 ="  +60.1 / -60.1;"
    var psf_58_58_M1     ="  +58.0 / -58.0";
    var psf_59d6_59d6_M1 ="  +59.6 / -59.6";
    var psf_52d7_52d7_M1 ="  +52.7 / -52.7";

    // HORIZONTAL DIVISION  PANELS == SECOND TABLE in Page 4 of 12 -Line breaks indicate a new row
    var psf_59d4_59d4_M2 = " +59.4 / -59.4";
    var psf_57d4_57d4_M2 = " +57.4 / -57.4";
    var psf_55d1_55d1_M2 = " +55.1 / -55.1";
    var psf_57d7_57d7_M2 = " +57.7 / -57.7";
    var psf_50d5_50d5_M2 = " +50.5 / -50.5";
    }

//  M3 (STEEL REINFORCMENT)  == THIRD Table in Page 3 of 12.   -line breaks indicate new table
if (reinforcementSelected == 2)  {   // If Reinforcement M3 is selected then Use the THIRD Table in Page 3 of 12.
    // FULL VIEW PANELS
    var psf_100_145_M3    = "  +100.0 / -145.0";
    var psf_100_115_M3    = "  +100.0 / -115.0";
    var psf_100_144_M3    = "  +100.0 / -144.0";
    var psf_100_115_M3    = "  +100.0 / -115.0";
    var psf_100_111d7_M3  = "  +100.0 / -111.7";
    var psf_100_110d5_M3  = "  +100.0 / -110.5";
    var psf_100_144d6_M3  = "  +100.0 / -144.6";
    var psf_100_128d3_M3  = "  +100.0 / -128.3";
    var psf_100_106d4_M3  = "  +100.0 / -106.4";
    var psf_100_102d4_M3  = "  +100.0 / -144.6";
    var psf_100_129d9_M3  = "  +100.0 / -129.9";
    var psf_100_115d1_M3  = "  +100.0 / -115.1";
    var psf_100_103d9_M3  = "  +100.0 / -103.9";
    var psf_95d1_95d1_M3  = "  +95.1 / -95.1";
    var psf_93d6_93d6_M3  = "  +93.6 / -93.6";
    var psf_92d1_92d1_M3  = "  +92.1 / -92.1";
    var psf_100_106d6_M3  = "  +100.0 / -106.6";
    var psf_94d3_94d3_M3  = "  +94.3 / -94.3";
    var psf_86d2_86d2_M3  = "  +86.2 / -86.2";
    var psf_100_112d6_M3  = "  +100.0 / -112.6";
    var psf_112d6_112d6_M3= "  +112.6/ -112.6";
    var psf_97d3_97d3_M3  = "  +97.3 / -97.3";
    var psf_82d8_82d8_M3  = "  +82.8 / -82.8";
    var psf_100_102d8_M3  = "  +100.0 / -102.8";










}

/*
    var psf_70_70_M1     = "   +70.0 /  -70.0";                 //Page 3 of 12
    var psf_100_110_M1   = "  +100.0 / -110.0";                 //M1

    var psf_52d7_52d7_M2 = "   +52.7 /  -52.7    M2 *Aluminum";
    var psf_58_58_J2_M2     = "   +58.0 /  -58.0    M2 *Aluminum";
    var psf_59d6_59d6_J2_M2 = "   +59.6 /  -59.6    M2 *Aluminum";
    var psf_65_65_J2_M2     = "   +65.0 /  -65.0    M2 *Aluminum";

    var psf_78d6_78d6_J2_M3 = "   +78.6 /  -78.6    M3 *Steel";
    var psf_82d8_82d8_J2_M3 = "   +82.8 /  -82.8    M3 *Steel";
    var psf_85_9_85d9_J2_M3 = "   +85.9 /  -85.9    M3 *Steel";
    var psf_86d2_86d2_J2_M3 = "   +86.2 /  -86.2    M3 *Steel";
    var psf_88d9_88d9_J2_M3 = "   +88.9 /  -88.9    M3 *Steel";
    var psf_92d1_92d1_J2_M3 = "   +92.1 /  -92.1    M3 *Steel";
    var psf_93d6_93d6_J2_M3 = "   +93.6 /  -93.6    M3 *Steel";
    var psf_94d3_94d3_J2_M3 = "   +94.3 /  -94.3    M3 *Steel";
    var psf_95d1_95d1_J2_M3 = "   +95.1 /  -95.1    M3 *Steel";
    var psf_97d3_97d3_J2_M3 = "   +97.3 /  -97.3    M3 *Steel";
    var psf_100_103d9_J2_M3 = "  +100.0 / -103.9    M3 *Steel";
    var psf_100_110_J2_M3   = "  +100.0 / -110.0    M3 *Steel";
    var psf_100_110d5_J2_M3 = "  +100.0 / -110.5    M3 *Steel";
    var psf_100_102d4_J2_M3 = "  +100.0 / -102.4    M3 *Steel";
    var psf_100_102d8_J2_M3 = "  +100.0 / -102.8    M3 *Steel";
    var psf_100_111d7_J2_M3 = "  +100.0 / -111.7    M3 *Steel";
    var psf_100_115_M3   = "  +100.0 / -115.0    M3 *Steel";

    var psf_86_5_86d5_J2_M3_CRS = "  +86.5 /  -86.5    M3 *Cold Rolled";
    var psf_100_101d4_J2_M3_CRS = " +100.0 / -101.4    M3 *Cold Rolled";
    var psf_100_105d9_J2_M3_CRS = " +100.0 / -105.9    M3 *Cold Rolled";
    var psf_100_106d6_J2_M3_CRS = " +100.0 / -106.6    M3 *Cold Rolled";
    var psf_100_107d6_J2_M3_CRS = " +100.0 / -107.6    M3 *Cold Rolled";
    var psf_100_110_J2_M3_CRS   = " +100.0 / -110.0    M3 *Cold Rolled";
    var psf_100_115_J2_M3_CRS   = " +100.0 / -115.0    M3 *Cold Rolled";
    // END OF FULL VIEW PANELS TABLE

    //START OF HORIZONTAL DIVISIONS TABLE   PAGE - 4 of 12
    var psf_58d4_58d4_M1 ="  +58.4 / -58.4 ";
    var psf_64d1_64d1_M1 ="  +64.1 / -64.1 ";

    var psf_68d1_68d1_M1 ="  +68.1 / -68.1 ";
    var psf_92_92_M1     ="  +92.0 / -92.0 ";
    var psf_97d7_97d7_M1 ="  +97.7 / -97.7 ";
    var psf_100_103d8_M1 =" +100.0 / -103.8";
    var psf_100_104d1_M1 =" +100.0 / -104.1";
    var psf_100_105d1_M1 =" +100.0 / -105.1";
    var psf_100_106_M1   =" +100.0 / -106.0";

    var psf_75d4_75d4_J2_M3 = "  +75.4 / -75.4    M3 *Steel";
    var psf_79d2_79d2_J2_M3 = "  +79.2 / -79.2    M3 *Steel";
    var psf_81d7_81d7_J2_M3 = "  +81.7 / -81.7    M3 *Steel";
    var psf_82d5_82d5_J2_M3 = "  +82.5 / -82.5    M3 *Steel";
    var psf_86d2_86d2_J2_M3 = "  +86.2 / -86.2    M3 *Steel";
    var psf_86d4_86d4_J2_M3 = "  +86.4 / -86.4    M3 *Steel";
    var psf_87d3_87d3_J2_M3 = "  +87.3 / -87.3    M3 *Steel";
    var psf_88_88_J2_M3     = "  +88.0 / -88.0    M3 *Steel";
    var psf_90d2_90d2_J2_M3 = "  +90.2 / -90.2    M3 *Steel";
    var psf_96d8_96d8_J2_M3 = "  +96.8 / -96.8    M3 *Steel";
    var psf_97_97_J2_M3     = "  +97.0 / -97.0    M3 *Steel";
    var psf_99_99_J2_M3     = "  +99.0 / -99.0    M3 *Steel";
    var psf_100_100d5_J2_M3 = " +100.0 /-100.5    M3 *Steel";
    var psf_100_107d5_J2_M3 = " +100.0 /-107.5    M3 *Steel";
    var psf_100_107d8_J2_M3 = " +100.0 /-107.8    M3 *Steel";
    var psf_100_109d2_J2_M3 = " +100.0 /-109.2    M3 *Steel";
    var psf_100_103d1_J2_M3 = " +100.0 /-103.1    M3 *Steel";

    // Reinforced Cold Steel with Horizontal Divisions page 4 of 12
    var psf_82d2_82d2_J2_M3_CRS = " +82.2 / -82.2     M3 *Cold Rolled";
    var psf_85d7_85d7_J2_M3_CRS = " +85.7 / -85.7     M3 *Cold Rolled";
    var psf_88d6_88d6_J2_M3_CRS = " +88.6 / -88.6     M3 *Cold Rolled";
    var psf_97d9_97d9_J2_M3_CRS = " +97.9 / -97.9     M3 *Cold Rolled";
    var psf_98d2_98d2_J2_M3_CRS = " +98.2 / -98.2     M3 *Cold Rolled";
    var psf_100_100_J2_M3_CRS =   " +100.0 / -100.0   M3 *Cold Rolled";
    var psf_100_104d2_J2_M3_CRS = " +100.0 / -104.2   M3 *Cold Rolled";



    //Check for Horizontal Divisions - If = 1 Use FULL VIEW TABLE BECAUSE THERE ARE NO DIVISIONS
    if (horizontalLitesValue == 1) {
        if (height <= 90) {                           // At Height of 90"   &   Width:  30", 36", 42", 48", 54", 55", 60"            M1 / J1
            if (width <= 55) { psf_M1 = psf_100_110_M1; }
            else if (width <= 60) { psf_M1 = psf_70_70_M1; }
            else if (width <= 72) { psf_M3 = psf_100_115_M3; }
            else if (width > 72) { MaxExceeded = MaxWidthPerPanel + 72 + "\""; }
          }


    else if (height <= 96)                         // At Height of 96"   &   Width:  30", 36", 42", 48", 51", 54", 60"                M1 / J1
        {                                        // At Height of 120"   &   Width:  30", 36", 42", 48", 51", 54", 60" 66", 72"      J1 / M3
            if (width <= 48) { psfResult = psf_100_110_M1 +         "<br/> " + psf_100_115_J2_M3; }
            else if (width <= 51) { psf_M1 = psf_100_107d6_M1; }
            else if (width <= 60) { psfResult = psf_70_70_M1 +      "<br/> " + psf_100_115_J2_M3; }
            else if (width <= 72) { psfResult = psf_100_115_J2_M3; }
            else if (width > 72) { MaxExceeded = MaxWidthPerPanel + 72 + "\""; }
          }
    else if (height <= 102)                      // At Height of 102"  &   Width:  30", 36", 42", 48", 54", 57"                       M1 / J1
        {                                        // &   Width:  30", 36", 42", 48", 54", 60" 66", 71"    J1 / M3
        if (width <= 42) { psfResult = psf_100_110_M1 +  "<br/> " + psf_100_115_J2_M3 ; }
        else if (width <= 48) { psfResult = psf_98d2_98d2_M1 +  "<br/> " + psf_100_115_J2_M3; }
        else if (width <= 57) { psfResult = psf_70_70_M1 +"<br/> " + psf_100_115_J2_M3; }
        else if (width <= 71) { psfResult = psf_100_115_J2_M3; }       // M2 / J2
        else if (width > 71)  { MaxExceeded = MaxWidthPerPanel + 71 + "\""; }
      }
    else if (height <= 108)                      // At Height of 108"   &   Width:  30", 36", 42", 48", 54"                          M1 / J1
    {                                            // At Height of 108"   &   Width:  30", 36", 42", 48", 54" 60" 66" 67"              J1 / M3
        if      (width <= 54) { psfResult = psf_70_70_M1 + "<br/> " + psf_100_115_J2_M3;}
        else if (width <= 60) { psfResult = psf_100_115_J2_M3;}                                                                    // J1 / M3
        else if (width <= 66) { psfResult = psf_100_111d7_J2_M3;}                                                                  // J1 / M3
        else if (width <= 67) { psfResult = psf_100_110d5_J2_M3;}                                                                  // J1 / M3
        else if (width > 67)  { MaxExceeded = MaxWidthPerPanel + 67 + "\""; }
    }
    else if (height <= 114)                      // At Height of 114"   &   Width:  30", 36", 42", 48", 51"                         M1 / J1
    {                                            // &   Width:  30", 36", 42", 48", 54" 60" 63"                                     J1 / M3
        if (width <= 48)      { psfResult = psf_70_70_M1     + "<br/> " + psf_100_115_J2_M3;}
        else if (width <= 51) { psfResult = psf_69d4_69d4_M1 + "<br/> " + psf_100_115_J2_M3;}
        else if (width <= 54) { psfResult = psf_100_115_J2_M3;}
        else if (width <= 63) { psfResult = psf_100_102d4_J2_M3  + "<br/> " + psf_100_115_J2_M3_CRS ;}
        else if (width > 63)  { MaxExceeded = MaxWidthPerPanel + 63 + "\""; }
    }
    else if (height <= 120)                     // At Height of 120"  &   Width:  30", 36", 42", 48"                             M1 / J1
                                                // At Height of 120"  &   Width:  48", 54", 58"                                  M2 / J2
        {                                       // At Height of 120"  &   Width:  54", 60"                                       M2 / J2 *Reinforced Cold Rolled
        if (width <= 36)      { psfResult = psf_70_70_M1     + "<br/> " + psf_100_115_J2_M3; }
        else if (width <= 42) { psfResult = psf_69d9_69d9_M1 + "<br/> " + psf_100_115_J2_M3; }
        else if (width <= 48) { psfResult = psf_62d1_62d1_M1 + "<br/> " + psf_100_115_J2_M3; }
        else if (width <= 54) { psfResult = psf_65_65_J2_M2     + "<br/> " + psf_100_103d9_J2_M3 + "<br/> " + psf_100_115_J2_M3_CRS;}
        else if (width <= 58) { psfResult = psf_65_65_J2_M2     + "<br/> " + psf_95d1_95d1_J2_M3 + "<br/> " + psf_100_115_J2_M3_CRS;}
        else if (width <= 60) { psfResult = psf_95d1_95d1_J2_M3 + "<br/> " + psf_100_115_J2_M3_CRS; }
        else if (width > 60)  { MaxExceeded = MaxWidthPerPanel + 60 + "\""; }
      }
    else if (height <= 126) {                   // At Height of 126" &   Width:  30", 36", 42", 48", 54", 55"                   J1 / M2
                                                // At Height of 126" &   Width:  30", 36", 42", 48", 54", 55"                   J1 / M3
                                                // At Height of 126" &   Width:  30", 36", 42", 48", 54", 55"                   J1 / M3  *Reinforced Cold Rolled
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
        else if (width > 55) { MaxExceeded = MaxWidthPerPanel + 55 + "\""; }
      }
      else if (height <= 132)                 // At Height of 132"   &   Width:  30", 36", 42", 48", 53"              J1 / M2
        {                                     // At Height of 132"   &   Width:  30", 36", 42", 48", 53"              J1 / M3
                                              // At Height of 132"   &   Width:  42"                                  J1 / M3 *Cold Rolled
        if (width <= 36) { psfResult = psf_100_110_J2_M3; }
        else if (width <= 42) {
            psfResult = psf_100_106d6_J2_M3_CRS;
            psfResult += "<br/> " + psf_100_110_J2_M3;
        }
        else if (width <= 48) {
            psfResult = psf_65_65_J2_M2;
            psfResult = psf_94d3_94d3_J2_M3;
        }
        else if (width <= 53) { psfResult = psf_86d2_86d2_J2_M3; }
        else if (width > 53) { psfResult = MaxWidthPerPanel + 53 + "\""; }
        }
    else if (height <= 138)                   // At Height of 138"   &   Width:  30", 36", 42", 48", 50"                J1/ M2
    {                                         // At Height of 132"   &   Width:  30", 36", 42", 48", 50"                J1 / M3
                                              // At Height of 132"   &   Width:  42", 48", 50"                          J1 / M3 *Cold Rolled
        if (width <= 36) { psfResult = psf_100_110_J2_M3; }
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

     else if (height <= 96) {                           // At Height of 90"   &   Width:  30", 36", 42", 48", 54", 55", 60"            M1 / J1
          if (width <= 42) { psfResult = psf_100_110_M1 + "<br/>" + psf_100_115_J2_M3; }
          else if (width <= 48) { psfResult = psf_100_103d8_M1  + "<br/>" + psf_100_115_J2_M3; }
          else if (width <= 51) { psfResult = psf_97d7_97d7_M1 + "<br/>" + psf_100_115_J2_M3; }
          else if (width <= 60) { psfResult = psf_70_70_M1  + "<br/>" + psf_100_115_J2_M3; }
          else if (width > 60) { psfResult = MaxWidthPerPanel + 60 + "\""; }
        }
      else if (height <= 102) {                           // At Height of 90"   &   Width:  30", 36", 42", 48", 54", 55", 60"            M1 / J1
            if (width <= 36) { psfResult = psf_100_110_M1 + "<br/>" + psf_100_115_J2_M3; }
            else if (width <= 42) { psfResult = psf_100_105d1_M1 + "<br/>" + psf_100_115_J2_M3; }
            else if (width <= 48) { psfResult = psf_92_92_M1 + "<br/>" + psf_100_115_J2_M3; }
            else if (width <= 57) { psfResult = psf_70_70_M1 + "<br/>" + psf_100_115_J2_M3; }
            else if (width <= 60) { psfResult = psf_100_115_J2_M3; }
            else if (width > 60) { psfResult = MaxWidthPerPanel + 60 + "\""; }
          }
      else if (height <= 108) {                           // At Height of 90"   &   Width:  30", 36", 42", 48", 54", 55", 60"            M1 / J1
              if (width <= 54) { psfResult = psf_70_70_M1 + "<br/>" + psf_100_115_J2_M3; }
              else if (width <= 60) { psfResult = psf_100_107d8_J2_M3;}
              else if (width > 60) { psfResult = MaxWidthPerPanel + 54 + "\""; }
            }
      else if (height <= 114) {                           // At Height of 90"   &   Width:  30", 36", 42", 48", 54", 55", 60"            M1 / J1
                if (width <= 42) { psfResult = psf_70_70_M1  + "<br/>" + psf_100_115_J2_M3; }
                else if (width <= 48) { psfResult = psf_68d1_68d1_M1  + "<br/>" + psf_100_115_J2_M3; }
                else if (width <= 51) { psfResult = psf_64d1_64d1_M1  + "<br/>" + psf_100_107d5_J2_M3  + "<br/>" + psf_100_115_J2_M3; }
                else if (width <= 54) {psf_100_107d5_J2_M3  + "<br/>" + psf_100_115_J2_M3_CRS; }
                else if (width <= 60) {psf_96d8_96d8_J2_M3  + "<br/>" + psf_100_115_J2_M3_CRS; }
                else if (width > 60) { psfResult = MaxWidthPerPanel + 60 + "\""; }
              }
      else if (height <= 120) {                           // At Height of 90"   &   Width:  30", 36", 42", 48", 54", 55", 60"            M1 / J1
                if (width <= 36) { psfResult = psf_70_70_M1; }
                else if (width <= 42) { psfResult = psf_66d7_66d7_M1 + "<br/>" + psf_100_115_J2_M3; }
                else if (width <= 48) { psfResult = psf_58d4_58d4_M1 + "<br/> " + psf_65_65_J2_M2 + "<br/>" + psf_100_109d2_J2_M3 + "<br/>" + psf_100_115_J2_M3_CRS ; }
                else if (width <= 54) { psfResult = psf_97_97_J2_M3 + "<br/>" + psf_100_115_J2_M3_CRS; }
                else if (width <= 58) { psfResult = psf_65_65_J2_M2; }
                else if (width <= 60) { psfResult = psf_87d3_87d3_J2_M3 + "<br/>" + psf_100_104d2_J2_M3_CRS; }
                else if (width > 60) { psfResult = MaxWidthPerPanel + 60 + "\""; }
              }
      else if (height <= 126) {                           // At Height of 90"   &   Width:  30", 36", 42", 48", 54", 55", 60"            M1 / J1
                if (width <= 42) { psfResult = psf_100_110_J2_M3; }
                else if (width <= 48) { psfResult = psf_99_99_J2_M3  + "<br/>" + psf_100_110_J2_M3_CRS; }
                else if (width <= 54) { psfResult = psf_88_88_J2_M3  + "<br/>" + psf_100_100_J2_M3_CRS; }
                else if (width <= 55) { psfResult = psf_65_65_J2_M2  + "<br/>" + psf_86d4_86d4_J2_M3  + "<br/>" + psf_98d2_98d2_J2_M3_CRS; }
                else if (width > 55) { psfResult = MaxWidthPerPanel + 55 + "\""; }
              }
      else if (height <= 132) {                           // At Height of 90"   &   Width:  30", 36", 42", 48", 54", 55", 60"            M1 / J1
                if (width <= 36) { psfResult = psf_100_110_J2_M3; }
                else if (width <= 42) { psfResult = psf_100_103d1_J2_M3 + "<br/>" + psf_100_110_J2_M3_CRS; }
                else if (width <= 48) { psfResult = psf_65_65_J2_M2 + "<br/>" + psf_90d2_90d2_J2_M3 + "<br/>" + psf_97d9_97d9_J2_M3_CRS; }
                else if(width <= 53) { psfResult = psf_59d4_59d4_J2_M2 + "<br/>" + psf_81d7_81d7_J2_M3 + "<br/>" + psf_88d6_88d6_J2_M3_CRS; }
                else if (width > 53) { psfResult = MaxWidthPerPanel + 53 + "\""; }
              }
      else if (height <= 138) {                           // At Height of 90"   &   Width:  30", 36", 42", 48", 54", 55", 60"            M1 / J1
                if (width <= 36) { psfResult = psf_100_110_J2_M3; }
                else if (width <= 42) { psfResult = psf_65_65_J2_M2 + "<br/> " + psf_94d3_94d3_J2_M3 + "<br/> " + psf_97d9_97d9_J2_M3_CRS; }
                else if (width <= 48) { psfResult = psf_57d4_57d4_J2_M2 + "<br/> " + psf_82d5_82d5_J2_M3 + "<br/> " + psf_85d7_85d7_J2_M3_CRS; }
                else if (width <= 50) { psfResult = psf_55d1_55d1_J2_M2 + "<br/> " + psf_79d2_79d2_J2_M3 + "<br/> " + psf_82d2_82d2_J2_M3_CRS; }
                else if (width > 50) { psfResult = MaxWidthPerPanel + 50 + "\""; }
              }
      else if (height <= 144) {                           // At Height of 90"   &   Width:  30", 36", 42", 48", 54", 55", 60"            M1 / J1
                if (width <= 30) { psfResult = psf_65_65_J2_M2 + "<br/> +" + psf_100_110_J2_M3; }
                else if (width <= 36) { psfResult = psf_65_65_J2_M2 + "<br/> " + psf_100_100d5_J2_M3; }
                else if (width <= 42) { psfResult = psf_57d7_57d7_J2_M2 + "<br/> " + psf_86d2_86d2_J2_M3; }
                else if (width <= 48) { psfResult = psf_50d5_50d5_J2_M2 + "<br/> " + psf_75d4_75d4_J2_M3; }
                else if (width > 48) { psfResult = MaxWidthPerPanel + 48 + "\""; }
              }

}
*/

    ResetFields();
    document.getElementById("PSF_Result_Div").innerHTML = psf_M1;          //Store Result Result Div

if (verticalLitesValue == 1) {document.getElementById("J1").style.display = "inline";}     // OPTION 1 - JAMB   - NO REINF

  if (verticalLitesValue > 1) {
      if(psf_M1 != undefined){                                                             // OPTION 1   - MULL -NO REINF
        document.getElementById("M1").style.display = "inline";
        }
      if(psf_M2 != undefined){                                                             // OPTION 2   - MULL -ALUMINUM
        document.getElementById("M2").style.display = "inline";
        }
      if(psf_M3 != undefined){                                                              // OPTION 3  - MULL -STEEL
        document.getElementById("M3_S").style.display = "inline";
        }
      if(psf_M3_CRS != undefined){                                                           // OPTION 4  - MULL -ALUM&COLD ROLLED STEEL
        document.getElementById("M3_CRS").style.display = "inline";
        }
      }
  //  var result = psfResult;
    //document.getElementById("widthInput").focus();
  }
