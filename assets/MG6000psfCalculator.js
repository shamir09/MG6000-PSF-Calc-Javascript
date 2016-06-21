// JavaScript source code
function YellowWarningCSS() {
    document.getElementById("PSF_Result_Div").classList.remove("PSF_Result_Div");
    document.getElementById("PSF_Result_Div").classList.add("activeWarning");      // OPTION 1 - JAMB   - ALUM REINF   after 120" Height as per Page 9 of 12.
    document.getElementById("warningIcon").style.display = "inline";
    document.getElementById("J1_Alum").style.display = "none";
    document.getElementById("J1").style.display = "none";
  }


function ResetFields() {
    var psfResult = "+ / -";
    document.getElementById("PSF_Result_Div").innerHTML = psfResult;
    document.getElementById("J1").style.display = "none";
    document.getElementById("J1_Alum").style.display = "none";
    document.getElementById("M1").style.display = "none";
    document.getElementById("M2").style.display = "none";
    document.getElementById("M3_S").style.display = "none";
    document.getElementById("M3_CRS").style.display = "none";
    document.getElementById("warningIcon").style.display = "none";
    document.getElementById("PSF_Result_Div").classList.add("PSF_Result_Div");
    }

document.onkeydown = function (evt) {
    evt = evt || window.event;
    if (evt.keyCode == 27) {             /////// IF ESC KEY IS PRESSED (TRIGGER RESET BUTTON & SEND FOCUS TO WIDTH INPUT)
        ResetFields();
        document.getElementById("reset_btn").click();
        document.getElementById("widthInput").focus();
    }
    if (evt.keyCode == 13) {             /////// IF ENTER KEY IS PRESSED (TRIGGER CALCULATE BUTTON)
        CalculatePSF.apply(this, RetrieveInput());
    }
};


function RetrieveInput(){
  // Declaration of Variables that will be needed to Determine Pressures
  var widthInputValue, heightInputValue, verticalLitesValue, horizontalLitesValue, reinforcementSelected, MaxExceeded;

  //Divide Total Dimensions by number of Lites
  // TO USE FUNCTION CalculatePSF DELETE Lines 32-35 removing the Declaration of said values from Specified Get Element by Id Values
  widthInputValue = document.getElementById("widthInput").value;
  heightInputValue = document.getElementById("heightInput").value;
  verticalLitesValue = document.getElementById("vertiLitesInput").value;
  horizontalLitesValue = document.getElementById("horizLitesInput").value;
  reinforcementSelected = document.getElementById("Reinforcement").value;


  return [widthInputValue, heightInputValue, verticalLitesValue, horizontalLitesValue, reinforcementSelected];
}

function CalculatePSF(widthInputValue, heightInputValue, verticalLitesValue, horizontalLitesValue, reinforcementSelected) {
//if (widthInputValue == undefined || widthInputValue == "") {alert("Please enter a Width"); return}
var MG6000 = {
//  height: heightInputValue,
  //reinfSelected: reinforcementSelected,-->
};
function Reinf0() {
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
            if (height <= 90)
              {
                if (width <= 55) { psf_M1 = psf_100_110_M1; }
                else if (width <= 60) { psf_M1 = psf_70_70_M1; }
                else if (width > 60) { psf_M1 = MaxExceeded + 60 + '\"';
              YellowWarningCSS();}
              }
                else if (height <= 96)                         // At Height of 96"   &   Width:  30", 36", 42", 48", 51", 54", 60"                M1 / J1
                  {                                        // At Height of 120"   &   Width:  30", 36", 42", 48", 51", 54", 60" 66", 72"      J1 / M3
                      if (width <= 48) { psf_M1 = psf_100_110_M1; }
                      else if (width <= 51) { psf_M1 = psf_100_107d6_M1; }
                      else if (width <= 60) { psf_M1 = psf_70_70_M1; }
                      else if (width > 60) { psf_M1 = MaxExceeded + 60 + '\"'; }
                  }
                      else if (height <= 102)                      // At Height of 102"  &   Width:  30", 36", 42", 48", 54", 57"                       M1 / J1
                        {                                        // &   Width:  30", 36", 42", 48", 54", 60" 66", 71"    J1 / M3
                          if (width <= 42) { psf_M1 = psf_100_110_M1; }
                          else if (width <= 48) { psf_M1 = psf_98d2_98d2_M1; }
                          else if (width <= 57) { psf_M1 = psf_70_70_M1; }
                          else if (width > 57)  { psf_M1 = MaxExceeded + 57 + "\""; }
                        }
                          else if (height <= 108)                      // At Height of 108"   &   Width:  30", 36", 42", 48", 54"                          M1 / J1
                          {                                            // At Height of 108"   &   Width:  30", 36", 42", 48", 54" 60" 66" 67"              J1 / M3
                              if      (width <= 54) { psf_M1 = psf_70_70_M1;}
                              else if (width > 54)  { psf_M1 = MaxExceeded + 54 + "\""; }
                          }
                              else if (height <= 114)                      // At Height of 114"   &   Width:  30", 36", 42", 48", 51"                         M1 / J1
                              {                                            // &   Width:  30", 36", 42", 48", 54" 60" 63"                                     J1 / M3
                                  if (width <= 48)      { psf_M1 = psf_70_70_M1;}
                                  else if (width <= 51) { psf_M1 = psf_69d4_69d4_M1;}
                                  else if (width > 51)  { psf_M1 = MaxExceeded + 51 + "\""; }
                              }
                                  else if (height <= 120)
                                    {
                                      if (width <= 36)      { psf_M1 = psf_70_70_M1; }
                                      else if (width <= 42) { psf_M1 = psf_69d9_69d9_M1; }
                                      else if (width <= 48) { psf_M1 = psf_62d1_62d1_M1; }
                                      else if (width > 48)  { psf_M1 = MaxExceeded + 48 + "\""; }
                                    }
                                      else if (height > 120)
                                      {
                                        psf_M1 = "To exceed 120\" height consider Aluminum Reinforcement";
                                      }
    }
    else if (horizontalLitesValue >= 2) {
         if (height <= 90)
          {                           // At Height of 90"   &   Width:  30", 36", 42", 48", 54", 55", 60"            M1 / J1
            if (width <= 48) { psf_M1 = psf_100_110_M1; }
            else if (width <= 54) { psf_M1 = psf_100_106_M1; }
            else if (width <= 55) { psf_M1 = psf_100_104d1_M1; }
            else if (width <= 60) { psf_M1 = psf_70_70_M1; }
            else if (width > 60) { psf_M1 = MaxExceeded + 60 + '\"'; }
          }
            else if (height <= 96)
             {
               if (width <= 42) { psf_M1 = psf_100_110_M1; }
               else if (width <= 48) { psf_M1 = psf_100_103d8_M1; }
               else if (width <= 51) { psf_M1 = psf_97d7_97d7_M1; }
               else if (width <= 60) { psf_M1 = psf_70_70_M1; }
               else if (width > 60) { psf_M1 = MaxExceeded + 60 + '\"'; }
             }
               else if (height <= 102)
                {
                  if (width <= 36) { psf_M1 = psf_100_110_M1; }
                  else if (width <= 42) { psf_M1 = psf_100_105d1_M1; }
                  else if (width <= 48) { psf_M1 = psf_92_92_M1; }
                  else if (width <= 57) { psf_M1 = psf_70_70_M1; }
                  else if (width > 57) { psf_M1 = MaxExceeded + 57 + '\"'; }
                }
                  else if (height <= 108)
                 {
                   if (width <= 54) { psf_M1 = psf_70_70_M1; }
                   else if (width > 54) { psf_M1 = MaxExceeded + 54 + '\"'; }
                 }
                    else if (height <= 114)
                      {
                        if (width <= 42) { psf_M1 = psf_70_70_M1; }
                        else if (width <= 48) { psf_M1 = psf_68d1_68d1_M1; }
                        else if (width <= 51) { psf_M1 = psf_64d1_64d1_M1; }
                        else if (width > 51) { psf_M1 = MaxExceeded + 51 + '\"'; }
                      }
                        else if (height <= 120)
                          {
                            if (width <= 36) { psf_M1 = psf_70_70_M1; }
                            else if (width <= 42) { psf_M1 = psf_66d7_66d7_M1; }
                            else if (width <= 48) { psf_M1 = psf_58d4_58d4_M1; }
                            else if (width > 48) { psf_M1 = MaxExceeded + 48 + '\"'; }
                          }
                          else if (height > 120)
                          {
                              psf_M1 = "The system has a max height of 120\"";
                          }
      }
  }
function Reinf1() {

  // FULL VIEW PANELS
  var psf_65_65_M2     ="  +65.0 / -65.0";
  var psf_63d3_63d3_M2 ="  +63.3 / -63.3";
  var psf_60d1_60d1_M2 ="  +60.1 / -60.1";
  var psf_58_58_M2     ="  +58.0 / -58.0";
  var psf_59d6_59d6_M2 ="  +59.6 / -59.6";
  var psf_52d7_52d7_M2 ="  +52.7 / -52.7";

  // HORIZONTAL DIVISION  PANELS == SECOND TABLE in Page 4 of 12 -Line breaks indicate a new row
  var psf_59d4_59d4_M2 = " +59.4 / -59.4";
  var psf_57d4_57d4_M2 = " +57.4 / -57.4";
  var psf_55d1_55d1_M2 = " +55.1 / -55.1";
  var psf_57d7_57d7_M2 = " +57.7 / -57.7";
  var psf_50d5_50d5_M2 = " +50.5 / -50.5";

  if (horizontalLitesValue == 1) {
          if (height <= 120)
           {
              if (width <= 58) { psf_M2 = psf_65_65_M2; }
              else if (width > 58) { psf_M2 = MaxExceeded + 58 + '\"'; }
            }
              else if (height <= 126)
                {
                    if (width <= 55)  { psf_M2 = psf_65_65_M2; }
                    else if (width > 55) { psf_M2 = MaxExceeded + 55 + '\"'; }
                  }
                    else if (height <= 132)                      // At Height of 102"  &   Width:  30", 36", 42", 48", 54", 57"                       M1 / J1
                      {                                        // &   Width:  30", 36", 42", 48", 54", 60" 66", 71"    J1 / M3
                        if (width <= 48) { psf_M2 = psf_65_65_M2; }
                        else if (width <= 53) { psf_M2 = psf_63d3_63d3_M2; }
                        else if (width > 53)  { psf_M2 = MaxExceeded + 53 + "\""; }
                      }
                        else if (height <= 138)                      // At Height of 108"   &   Width:  30", 36", 42", 48", 54"                          M1 / J1
                        {                                            // At Height of 108"   &   Width:  30", 36", 42", 48", 54" 60" 66" 67"              J1 / M3
                            if      (width <= 42) { psf_M2 = psf_65_65_M2; }
                            else if (width <= 48) { psf_M2 = psf_60d1_60d1_M2; }
                            else if (width <= 50) { psf_M2 = psf_58_58_M2; }
                            else if (width > 50)  { psf_M2 = MaxExceeded + 50 + "\""; }
                        }
                            else if (height <= 144)                      // At Height of 114"   &   Width:  30", 36", 42", 48", 51"                         M1 / J1
                            {                                            // &   Width:  30", 36", 42", 48", 54" 60" 63"                                     J1 / M3
                                if (width <= 48)     { psf_M2 = psf_65_65_M2; }
                                else if (width <= 42) { psf_M2 = psf_59d6_59d6_M2;}
                                else if (width <= 48) { psf_M2 = psf_52d7_52d7_M2;}
                                else if (width > 48)  { psf_M2 = MaxExceeded + 48 + "\""; }
                            }
                                else if (height > 144)
                                 {
                                      psf_M1 = "The system has a max height of 144\"";
                                 }
  }
  else if (horizontalLitesValue >=2) {
          if (height <= 120)
            {
              if (width <= 58) { psf_M2 = psf_65_65_M2; }
              else if (width > 58) { psf_M2 = MaxExceeded + 58 + '\"'; }
            }
              else if (height <= 126)
                 {
                    if (width <= 55)  { psf_M2 = psf_65_65_M2; }
                    else if (width > 55) { psf_M2 = MaxExceeded + 55 + '\"'; }
                  }
                    else if (height <= 132)                      // At Height of 102"  &   Width:  30", 36", 42", 48", 54", 57"                       M1 / J1
                        {                                        // &   Width:  30", 36", 42", 48", 54", 60" 66", 71"    J1 / M3
                        if (width <= 48) { psf_M2 = psf_65_65_M2; }
                        else if (width <= 53) { psf_M2 = psf_59d4_59d4_M2; }
                        else if (width > 53)  { psf_M2 = MaxExceeded + 53 + "\""; }
                      }
                        else if (height <= 138)                      // At Height of 108"   &   Width:  30", 36", 42", 48", 54"                          M1 / J1
                        {                                            // At Height of 108"   &   Width:  30", 36", 42", 48", 54" 60" 66" 67"              J1 / M3
                            if      (width <= 42) { psf_M2 = psf_65_65_M2; }
                            else if (width <= 48) { psf_M2 = psf_57d4_57d4_M2; }
                            else if (width <= 50) { psf_M2 = psf_55d1_55d1_M2; }
                            else if (width > 50)  { psf_M2 = MaxExceeded + 50 + "\""; }
                        }
                            else if (height <= 144)                      // At Height of 114"   &   Width:  30", 36", 42", 48", 51"                         M1 / J1
                            {                                            // &   Width:  30", 36", 42", 48", 54" 60" 63"                                     J1 / M3
                                if (width <= 48)     { psf_M2 = psf_65_65_M2; }
                                else if (width <= 42) { psf_M2 = psf_57d7_57d7_M2;}
                                else if (width <= 48) { psf_M2 = psf_50d5_50d5_M2;}
                                else if (width > 48)  { psf_M2 = MaxExceeded + 48 + "\""; }
                            }
                                else if (height > 144)
                                  {
                                    psf_M1 = "The system has a max height of 144\"";
                                  }
              }
}
function Reinf2() {
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
  var psf_85d9_85d9_M3  = "  +85.9 / -85.9";
  var psf_82d8_82d8_M3  = "  +82.8 / -82.8";
  var psf_100_102d8_M3  = "  +100.0 / -102.8";
  var psf_85d9_85d9_M3  = "  +85.9 / -85.9 ";
  var psf_78d6_78d6_M3  = "  +78.6 / -78.6 ";
   // M3 HORIZONTAL PANELS
  var psf_100_136d5_M3    = "  +100.0 / -136.5";
  var psf_100_134d3_M3    = "  +100.0 / -134.3";
  var psf_100_134d8_M3    = "  +100.0 / -134.8";
  var psf_100_107d8_M3    = "  +100.0 / -107.8";
  var psf_100_138d2_M3    = "  +100.0 / -138.2";
  var psf_100_121_M3      = "  +100.0 / -121.0";
  var psf_100_107d5_M3    = "  +100.0 / -107.5";
  var psf_96d8_96d8_M3    = "  +96.8 / -96.8";
  var psf_100_124d8_M3    = "  +100.0 / -124.8";
  var psf_100_109d2_M3    = "  +100.0 / -109.2";
  var psf_97_97_M3        = "  +97.0 / -97.0";
  var psf_87d3_87d3_M3    = "  +87.3 / -87.3";
  var psf_100_113d2_M3    = "  +100.0 / -113.2";
  var psf_99_99_M3        = "  +99.0 / -99.0";
  var psf_88_88_M3        = "  +88.0 / -88.0";
  var psf_86d4_86d4_M3    = "  +86.4 / -86.4";
  var psf_100_103d1_M3    = "  +100.0 / -103.1";
  var psf_90d2_90d2_M3    = "  +90.2 / -90.2";
  var psf_81d7_81d7_M3    = "  +81d7 / -81d7";
  var psf_100_110d1_M3    = "  +100.0 / -110.1";
  var psf_82d5_82d5_M3    = "  +82.5 / -82.5";
  var psf_79d2_79d2_M3    = "  +79.2 / -79.2";
  var psf_100_100d5_M3    = "  +100.0 / -100.5";
  var psf_86d2_86d2_M3    = "  +86.2 / -86.2";
  var psf_75d4_75d4_M3    = "  +75.4 / -75.4";

  if (horizontalLitesValue == 1)
  {
          if (height <= 96)
          {
              if (width <= 60) { psf_M3 = psf_100_145_M3; }
              else if (width <= 72) { psf_M3 = psf_100_115_M3; }
              else if (width > 72) { psf_M3 = MaxExceeded + 72 + '\"'; }
          }
              else if (height <= 102)
              {
                    if (width <= 54) { psf_M3 = psf_100_145_M3; }
                    else if (width <= 71) { psf_M3 = psf_100_115_M3; }
                    else if (width > 71) { psf_M3 = MaxExceeded + 71 + '\"'; }
              }
                    else if (height <= 108)
                    {
                            if (width <= 42) { psf_M3 = psf_100_145_M3; }
                            else if (width <= 48) { psf_M3 = psf_100_144_M3; }
                            else if (width <= 60) { psf_M3 = psf_100_115_M3; }
                            else if (width <= 66) { psf_M3 = psf_100_111d7_M3; }
                            else if (width <= 67) { psf_M3 = psf_100_110d5_M3; }
                            else if (width > 67) { psf_M3 = MaxExceeded + 67 + '\"'; }
                    }
                            else if (height <= 114)
                            {
                                    if (width <= 36) { psf_M3 = psf_100_145_M3; }
                                    else if (width <= 42) { psf_M3 = psf_100_144d6_M3; }
                                    else if (width <= 48) { psf_M3 = psf_100_128d3_M3; }
                                    else if (width <= 54) { psf_M3 = psf_100_115_M3; }
                                    else if (width <= 60) { psf_M3 = psf_100_106d4_M3; }
                                    else if (width <= 63) { psf_M3 = psf_100_102d4_M3; }
                                    else if (width > 63) { psf_M3 = MaxExceeded + 63 + '\"'; }
                            }
                                    else if (height <= 120)
                                    {
                                            if (width <= 36) { psf_M3 = psf_100_145_M3; }
                                            else if (width <= 42) { psf_M3 = psf_100_129d9_M3; }
                                            else if (width <= 48) { psf_M3 = psf_100_115d1_M3; }
                                            else if (width <= 54) { psf_M3 = psf_100_103d9_M3; }
                                            else if (width <= 60) { psf_M3 = psf_95d1_95d1_M3; }
                                            else if (width > 60) { psf_M3 = MaxExceeded + 60 + '\"'; }
                                    }
                                      else if (height <= 126)
                                      {
                                              if (width <= 42) { psf_M3 = psf_100_115_M3; }
                                              else if (width <= 48) { psf_M3 = psf_100_103d9_M3; }
                                              else if (width <= 54) { psf_M3 = psf_93d6_93d6_M3; }
                                              else if (width <= 55) { psf_M3 = psf_92d1_92d1_M3; }
                                              else if (width > 55) { psf_M3 = MaxExceeded + 55 + '\"'; }
                                      }
                                            else if (height <= 132)
                                            {
                                                    if (width <= 36) { psf_M3 = psf_100_115_M3; }
                                                    else if (width <= 42) { psf_M3 = psf_100_106d6_M3; }
                                                    else if (width <= 48) { psf_M3 = psf_94d3_94d3_M3; }
                                                    else if (width <= 53) { psf_M3 = psf_86d2_86d2_M3; }
                                                    else if (width > 53) { psf_M3 = MaxExceeded + 53 + '\"'; }
                                            }
                                                    else if (height <= 138)
                                                    {
                                                          if (width <= 30) { psf_M3 = psf_100_115_M3; }
                                                          else if (width <= 36) { psf_M3 = psf_100_112d6_M3; }
                                                          else if (width <= 42) { psf_M3 = psf_97d3_97d3_M3; }
                                                          else if (width <= 48) { psf_M3 = psf_85d9_85d9_M3; }
                                                          else if (width <= 50) { psf_M3 = psf_82d8_82d8_M3; }
                                                          else if (width > 50) { psf_M3 = MaxExceeded + 50 + '\"'; }
                                                    }
                                                        else if (height <= 144)
                                                        {
                                                              if (width <= 30) { psf_M3 = psf_100_115_M3; }
                                                              else if (width <= 36) { psf_M3 = psf_100_102d8_M3; }
                                                              else if (width <= 42) { psf_M3 = psf_85d9_85d9_M3; }
                                                              else if (width <= 48) { psf_M3 = psf_78d6_78d6_M3; }
                                                              else if (width > 48) { psf_M3 = MaxExceeded + 48 + '\"'; }
                                                        }

                                                          else if (height > 144)
                                                          {
                                                              psf_M1 = "The system has a max height of 144\"";
                                                          }
  }
  if (horizontalLitesValue >= 2)
  {
          if (height <= 96)
          {
              if (width <= 54) { psf_M3 = psf_100_145_M3; }
              else if (width <= 60) { psf_M3 = psf_100_136d5_M3; }
              else if (width > 60) { psf_M3 = MaxExceeded + 60 + '\"'; }
          }
              else if (height <= 102)
              {
                    if (width <= 48) { psf_M3 = psf_100_145_M3; }
                    else if (width <= 54) { psf_M3 = psf_100_134d3_M3; }
                    else if (width <= 60) { psf_M3 = psf_100_115_M3; }
                    else if (width > 60) { psf_M3 = MaxExceeded + 60 + '\"'; }
              }
                    else if (height <= 108)
                    {
                          if (width <= 42) { psf_M3 = psf_100_145_M3; }
                          else if (width <= 48) { psf_M3 = psf_100_134d8_M3; }
                          else if (width <= 54) { psf_M3 = psf_100_115_M3; }
                          else if (width <= 60) { psf_M3 = psf_100_107d8_M3; }
                          else if (width > 60) { psf_M3 = MaxExceeded + 60 + '\"'; }
                    }
                          else if (height <= 114)
                          {
                                if (width <= 36) { psf_M3 = psf_100_145_M3; }
                                else if (width <= 42) { psf_M3 = psf_100_138d2_M3; }
                                else if (width <= 48) { psf_M3 = psf_100_121_M3; }
                                else if (width <= 54) { psf_M3 = psf_100_107d5_M3; }
                                else if (width <= 60) { psf_M3 = psf_96d8_96d8_M3; }
                                else if (width > 60) { psf_M3 = MaxExceeded + 60 + '\"'; }
                          }
                                else if (height <= 120)
                                {
                                      if (width <= 36) { psf_M3 = psf_100_145_M3; }
                                      else if (width <= 42) { psf_M3 = psf_100_124d8_M3; }
                                      else if (width <= 48) { psf_M3 = psf_100_109d2_M3; }
                                      else if (width <= 54) { psf_M3 = psf_97_97_M3; }
                                      else if (width <= 60) { psf_M3 = psf_87d3_87d3_M3; }
                                      else if (width > 60) { psf_M3 = MaxExceeded + 60 + '\"'; }
                                }
                                      else if (height <= 126)
                                      {
                                            if (width <= 36) { psf_M3 = psf_100_115_M3; }
                                            else if (width <= 42) { psf_M3 = psf_100_113d2_M3; }
                                            else if (width <= 48) { psf_M3 = psf_99_99_M3; }
                                            else if (width <= 54) { psf_M3 = psf_88_88_M3; }
                                            else if (width <= 55) { psf_M3 = psf_86d4_86d4_M3; }
                                            else if (width > 55) { psf_M3 = MaxExceeded + 55 + '\"'; }
                                      }
                                            else if (height <= 132)
                                            {
                                                  if (width <= 36) { psf_M3 = psf_100_115_M3; }
                                                  else if (width <= 42) { psf_M3 = psf_100_103d1_M3; }
                                                  else if (width <= 48) { psf_M3 = psf_90d2_90d2_M3; }
                                                  else if (width <= 53) { psf_M3 = psf_81d7_81d7_M3; }
                                                  else if (width > 53) { psf_M3 = MaxExceeded + 53 + '\"'; }
                                            }
                                                  else if (height <= 144)
                                                  {
                                                        if (width <= 30) { psf_M3 = psf_100_115_M3; }
                                                        else if (width <= 36) { psf_M3 = psf_100_100d5_M3; }
                                                        else if (width <= 42) { psf_M3 = psf_86d2_86d2_M3; }
                                                        else if (width <= 48) { psf_M3 = psf_75d4_75d4_M3; }
                                                        else if (width > 48) { psf_M3 = MaxExceeded + 48 + '\"'; }
                                                  }
                                                        else if (height > 144)
                                                        {
                                                            psf_M1 = "The system has a max height of 144\"";
                                                        }
    }
}
function Reinf3() {
      ///PRESSURES FOR FULL VIEW PANELS
      var psf_100_145_M3_CRS    = "  +100.0 / -145.0";
      var psf_100_115_M3_CRS    = "  +100.0 / -115.0";
      var psf_100_138d7_M3_CRS  = "  +100.0 / -138.7";
      var psf_100_107d6_M3_CRS  = "  +100.0 / -107.6";
      var psf_100_105d9_M3_CRS  = "  +100.0 / -105.9";
      var psf_100_101d4_M3_CRS  = "  +100.0 / -101.4";
      var psf_89d7_89d7_M3_CRS  = "  +89.7 / -89.7";
      var psf_86d5_86d5_M3_CRS  = "  +86.5 / -86.5";

      //PRESSURES FOR HORIZONTAL DIVISIONS
      var psf_100_130d3_M3_CRS  = "  +100.0 / -130.3";
      var psf_100_104d2_M3_CRS  = "  +100.0 / -104.2";
      var psf_100_110_M3_CRS    = "  +100.0 / -110.0";
      var psf_100_100_M3_CRS    = "  +100.0 / -100.0";
      var psf_98d2_98d2_M3_CRS  = "  +98.2 / -98.2";
      var psf_100_111d9_M3_CRS  = "  +100.0 / -111.9";
      var psf_97d9_97d9_M3_CRS  = "  +97.9 / -97.9";
      var psf_88d6_88d6_M3_CRS  = "  +88.6 / -88.6";
      var psf_100_114d2_M3_CRS  = "  +100.0 / -114d2";
      var psf_97d9_97d9_M3_CRS  = "  +97.9/ -97.9";
      var psf_85d7_85d7_M3_CRS  = "  +85.7 / -85.7";
      var psf_82d2_82d2_M3_CRS  = "  +82.2 / -82.2";

          if (horizontalLitesValue == 1)
          {
                if (height <= 114)
                {
                    if (width <= 48) { psf_M3_CRS = psf_100_145_M3_CRS; }
                    else if (width <= 63) { psf_M3_CRS = psf_100_115_M3_CRS; }
                    else if (width > 63) { psf_M3_CRS = MaxExceeded + 63 + '\"'; }
                }
                else if (height <= 120)
                {
                    if (width <= 42) { psf_M3_CRS = psf_100_145_M3_CRS; }
                    else if (width <= 48) { psf_M3_CRS = psf_100_138d7_M3_CRS; }
                    else if (width <= 60) { psf_M3_CRS = psf_100_115_M3_CRS; }
                    else if (width > 60) { psf_M3_CRS = MaxExceeded + 60 + '\"'; }
                }
                else if (height <= 126)
                {
                    if (width <= 48) { psf_M3_CRS = psf_100_110_M3_CRS; }
                    else if (width <= 54) { psf_M3_CRS = psf_100_107d6_M3_CRS; }
                    else if (width <= 55) { psf_M3_CRS = psf_100_105d9_M3_CRS; }
                    else if (width > 55) { psf_M3_CRS = MaxExceeded + 55 + '\"'; }
                }
                else if (height <= 132)
                {
                    if (width <= 53) { psf_M3_CRS = psf_100_115_M3_CRS; }
                    else if (width > 53) { psf_M3_CRS = MaxExceeded + 53 + '\"'; }
                }
                else if (height <= 138)
                {
                    if (width <= 36) { psf_M3_CRS = psf_100_115_M3_CRS; }
                    else if (width <= 42) { psf_M3_CRS = psf_100_101d4_M3_CRS; }
                    else if (width <= 48) { psf_M3_CRS = psf_89d7_89d7_M3_CRS; }
                    else if (width <= 50) { psf_M3_CRS = psf_86d5_86d5_M3_CRS; }
                    else if (width > 50) { psf_M3_CRS = MaxExceeded + 50 + '\"'; }
                }



                if (horizontalLitesValue == 2)
                {
                      if (height <= 96)
                      {
                          if (width <= 60) { psf_M3_CRS = psf_100_145_M3_CRS; }
                          else if (width > 60) { psf_M3_CRS = MaxExceeded + 60 + '\"'; }
                      }
                      else if (height <= 102)
                      {
                          if (width <= 60) { psf_M3_CRS = psf_100_145_M3_CRS; }
                          else if (width > 60) { psf_M3_CRS = MaxExceeded + 60 + '\"'; }
                      }
                      else if (height <= 108)
                      {
                          if (width <= 60) { psf_M3_CRS = psf_100_145_M3_CRS; }
                          else if (width > 60) { psf_M3_CRS = MaxExceeded + 60 + '\"'; }
                      }
                      else if (height <= 114)
                      {
                          if (width <= 48) { psf_M3_CRS = psf_100_145_M3_CRS; }
                          else if (width <= 60) { psf_M3_CRS = psf_100_115_M3_CRS; }
                          else if (width > 60) { psf_M3_CRS = MaxExceeded + 60 + '\"'; }
                      }
                      else if (height <= 120)
                      {
                          if (width <= 42) { psf_M3_CRS = psf_100_145_M3_CRS; }
                          else if (width <= 48) { psf_M3_CRS = psf_100_130d3_M3_CRS; }
                          else if (width <= 54) { psf_M3_CRS = psf_100_115_M3_CRS; }
                          else if (width <= 50) { psf_M3_CRS = psf_100_104d2_M3_CRS; }
                          else if (width > 50) { psf_M3_CRS = MaxExceeded + 50 + '\"'; }
                      }
                      else if (height <= 126)
                      {
                          if (width <= 42) { psf_M3_CRS = psf_100_115_M3_CRS; }
                          else if (width <= 48) { psf_M3_CRS = psf_100_110_M3_CRS; }
                          else if (width <= 54) { psf_M3_CRS = psf_100_100_M3_CRS; }
                          else if (width <= 55) { psf_M3_CRS = psf_98d2_98d2_M3_CRS; }
                          else if (width > 55) { psf_M3_CRS = MaxExceeded + 55 + '\"'; }
                      }
                      else if (height <= 132)
                      {
                          if (width <= 42) { psf_M3_CRS = psf_100_111d9_M3_CRS; }
                          else if (width <= 48) { psf_M3_CRS = psf_97d9_97d9_M3_CRS; }
                          else if (width <= 53) { psf_M3_CRS = psf_88d6_88d6_M3_CRS; }
                          else if (width > 53) { psf_M3_CRS = MaxExceeded + 53 + '\"'; }
                      }
                      else if (height <= 138)
                      {
                          if (width <= 36) { psf_M3_CRS = psf_100_114d2_M3_CRS; }
                          else if (width <= 42) { psf_M3_CRS = psf_97d9_97d9_M3_CRS; }
                          else if (width <= 48) { psf_M3_CRS = psf_85d7_85d7_M3_CRS; }
                          else if (width <= 50) { psf_M3_CRS = psf_82d2_82d2_M3_CRS; }
                          else if (width > 50) { psf_M3_CRS = MaxExceeded + 50 + '\"'; }
                      }
                      else if (height <= 144)
                      {
                          if (width <= 36) { psf_M3_CRS = psf_100_110_M3_CRS; }
                          else if (width <= 48) { psf_M3_CRS = psf_82d2_82d2_M3_CRS; }
                          else if (width > 48) { psf_M3_CRS = MaxExceeded + 48 + '\"'; }
                      }



          }
      }
}

      //if (heightInputValue == undefined || heightInputValue == "") {alert("Please enter a height"); return}

    var width = widthInputValue / verticalLitesValue;
    var height = heightInputValue;
    var psf_M1, psf_M2, psf_M3, psf_M3_CRS;

    var MaxExceeded = "NOA Maximum Width per Panel at this height is ";


  //  M1 (No REINFORCMENT)  == FIRST Table in Page 3 of 12.
  if (reinforcementSelected == 0)  {
    Reinf0();
  }

  //  M2 (ALUMINUM REINFORCMENT)  == SECOND Table in Page 3 of 12.   -line breaks indicate new table
  if (reinforcementSelected == 1)  {
      if ( height <= 120) { Reinf0();  }
      else if (height > 120) {Reinf1();  }
  }

  //  M3 (STEEL REINFORCMENT)  == THIRD Table in Page 3 of 12.   -line breaks indicate new table
  if (reinforcementSelected == 2)  {   // If Reinforcement M3 is selected then Use the THIRD Table in Page 3 of 12.
      Reinf2();
  }
  //  M3 (COLD ROLLED STEEL REINFORCMENT)  == THIRD Table in Page 3 of 12.   -line breaks indicate new table
  if (reinforcementSelected == 3)  {   // If Reinforcement M3 is selected then Use the THIRD Table in Page 3 of 12.
      Reinf3();
  }

if(psf_M1 != undefined || psf_M2 != undefined || psf_M3 != undefined || psf_M3_CRS != undefined) {                                         // If PSF1 & PSF2 have values assigned show IMG ALUM or ALUM REINF
          if(height <= 120) {ResetFields();
                             document.getElementById("PSF_Result_Div").innerHTML = psf_M1;
                             document.getElementById("J1").style.display = "inline";                   // OPTION 1 - JAMB   - NO REINF
                           }
          else if(height > 120 && height <= 144)
           {                ResetFields();
                            document.getElementById("PSF_Result_Div").innerHTML = psf_M1
                            document.getElementById("J1_Alum").style.display = "inline";}      // OPTION 1 - JAMB   - ALUM REINF   after 120" Height as per Page 9 of 12.
            }
if(psf_M1 == undefined || psf_M2 == undefined || psf_M3 == undefined || psf_M3_CRS == undefined ) {
            if(height > 144 ||
                (reinforcementSelected == 0 && (width > 60 && height > 96)) ||
                (reinforcementSelected == 0 && height > 120))
                YellowWarningCSS();
}

/////////////// PRINT THE RESULT TO THE WINDLOAD CALCULATION ID ELEMENT  //////////////////////
    if(psf_M1 != undefined) {  document.getElementById("PSF_Result_Div").innerHTML = psf_M1     }
    if(psf_M2 != undefined) {  document.getElementById("PSF_Result_Div").innerHTML = psf_M2;    }
    if(psf_M3 != undefined) {  document.getElementById("PSF_Result_Div").innerHTML = psf_M3;    }
    if(psf_M3_CRS != undefined) {  document.getElementById("PSF_Result_Div").innerHTML = psf_M3_CRS;    }

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



}
  //  var result = psfResult;
    //document.getElementById("widthInput").focus();
