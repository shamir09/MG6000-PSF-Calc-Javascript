// JavaScript source code

function ClearFields() {
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
        ClearFields();
        document.getElementById("reset_btn").click();
        document.getElementById("widthInput").focus();
    }
    if (evt.keyCode == 13) {
        CalculatePSF();
        }
};

function CalculatePSF() {
try {
    var width = (document.getElementById("widthInput").value)/(document.getElementById("horizLitesInput").value);
    var height = (document.getElementById("heightInput").value)/(document.getElementById("vertiLitesInput").value);
    var psfResult;

    if (width == "" || height == ""){
      alert('Please check the Input Fields! At least one is Blank :)')
      ClearFields();
      return;
      }

// Declare and Initialize PSF Mull Capacity for FULL VIEW PANELS
//Variable Declaration Format (PSF_{+positive pressure}_{negative pressure}_{JAMB OPTION}_{MULL OPTION})
var psf_62d1_62d1_J1_M1 = "   +62.1 /  -62.1 PSF  J1 / M1";
var psf_69d4_69d4_J1_M1 = "   +69.4 /  -69.4 PSF  J1 / M1";
var psf_69d9_69d9_J1_M1 = "   +69.9 /  -69.9 PSF  J1 / M1";
var psf_70_70_J1_M1     = "   +70.0 /  -70.0 PSF  J1 / M1";
var psf_98d2_98d2_J1_M1 = "   +98.2 /  -98.2 PSF  J1 / M1";
var psf_100_107d6_J1_M1 = "  +100.0 / -107.6 PSF  J1 / M1";
var psf_100_110_J1_M1   = "  +100.0 / -110.0 PSF  J1 / M1";

var psf_59d6_59d6_J2_M2 = "   +59.6 /  -59.6 PSF  J2 / M2 *Reinforced";
var psf_60d1_60d1_J2_M2 = "   +60.1 /  -60.1 PSF  J2 / M2 *Reinforced";
var psf_65_65_J2_M2     = "   +65.0 /  -65.0 PSF  J2 / M2 *Reinforced";

var psf_52d7_52d7_J2_M3 = "   +52.7 /  -52.7 PSF  J2 / M3 *Steel";
var psf_78d6_78d6_J2_M3 = "   +78.6 /  -78.6 PSF  J2 / M3 *Steel";
var psf_85_9_85d9_J2_M3 = "   +85.9 /  -85.9 PSF  J2 / M3 *Steel";
var psf_86d2_86d2_J2_M3 = "   +86.2 /  -86.2 PSF  J2 / M3 *Steel";
var psf_88d9_88d9_J2_M3 = "   +88.9 /  -88.9 PSF  J2 / M3 *Steel";
var psf_92d1_92d1_J2_M3 = "   +92.1 /  -92.1 PSF  J2 / M3 *Steel";
var psf_93d6_93d6_J2_M3 = "   +93.6 /  -93.6 PSF  J2 / M3 *Steel";
var psf_95d1_95d1_J2_M3 = "   +95.1 /  -95.1 PSF  J2 / M3 *Steel";
var psf_97d3_97d3_J2_M3 = "   +97.3 /  -97.3 PSF  J2 / M3 *Steel";
var psf_100_103d9_J2_M3 = "  +100.0 / -103.9 PSF  J2 / M3 *Steel";
var psf_100_110_J2_M3   = "  +100.0 / -110.0 PSF  J2 / M3 *Steel";
var psf_100_102d4_J2_M3 = "  +100.0 / -102.4 PSF  J2 / M3 *Steel";
var psf_100_102d8_J2_M3 = "  +100.0 / -102.8 PSF  J2 / M3 *Steel";
var psf_100_111d7_J2_M3 = "  +100.0 / -111.7 PSF  J2 / M3 *Steel";
var psf_100_115_J2_M3   = "  +100.0 / -115.0 PSF  J2 / M3 *Steel";

var psf_86_5_86d5_J2_M3_CRS ="  +86.5 /  -86.5 PSF  J2 / M3 *Cold Rolled";
var psf_94d3_94d3_J2_M3_CRS ="  +94.3 /  -94.3 PSF  J2 / M3 *Cold Rolled";
var psf_100_101d4_J2_M3_CRS =" +100.0 / -101.4 PSF  J2 / M3 *Cold Rolled";
var psf_100_105d9_J2_M3_CRS= " +100.0 / -105.9 PSF  J2 / M3 *Cold Rolled";
var psf_100_106d6_J2_M3_CRS= " +100.0 / -106.6 PSF  J2 / M3 *Cold Rolled";
var psf_100_107d_J2_M3_CRS = " +100.0 / -107.6 PSF  J2 / M3 *Cold Rolled";
var psf_100_110_J2_M3_CRS  = " +100.0 / -110.0 PSF  J2 / M3 *Cold Rolled";
var psf_100_115_J2_M3_CRS  = " +100.0 / -115.0 PSF  J2 / M3 *Cold Rolled";

var NotCompliant = "DOES NOT COMPLY WITH APPROVAL DOCUMENT";

  if (height <= 90) {                 // At Height of 90"   &   Width:  30", 36", 42", 48", 54", 55", 60"            M1 / J1
        if (width <= 55) { psfResult = psf_100_110_J1_M1; }
        else if (width < 60) { psfResult = psf_100_110_J1_M1; }
        else if (width <= 60) { psfResult = psf_70_70_J1_M1; }
        else if (width <= 72) { psfResult = psf_100_115_J2_M3; }
        else if (width > 72) { psfResult = NotCompliant; }
      }
  else if (height <= 96)                             // At Height of 96"   &   Width:  30", 36", 42", 48", 51", 54", 60"            M1 / J1
        {                                        // At Height of 120"   &   Width:  30", 36", 42", 48", 51", 54", 60" 66", 72"      J2 / M3
            if (width <= 48) { psfResult = psf_100_110_J1_M1 +         "<br/> " + psf_100_115_J2_M3; }
            else if (width <= 51) { psfResult = psf_100_107d6_J1_M1 +  "<br/> "  + psf_100_115_J2_M3; }
            else if (width <= 60) { psfResult = psf_70_70_J1_M1 +      "<br/> " + psf_100_115_J2_M3; }
            else if (width <= 72) { psfResult = psf_100_115_J2_M3; }
            else if (width > 73) { psfResult = NotCompliant; }
          }
    else if (height <= 102)            // At Height of 102"  &   Width:  30", 36", 42", 48", 54", 57"                       M1 / J1
        {                                                           // &   Width:  30", 36", 42", 48", 54", 60" 66", 71"    J2 / M3
        if (width <= 42) { psfResult = psf_100_110_J1_M1 +  "<br/> " + psf_100_115_J2_M3 ; }
        else if (width <= 48) { psfResult = psf_98d2_98d2_J1_M1 +  "<br/> " + psf_100_115_J2_M3; }
        else if (width <= 57) { psfResult = psf_70_70_J1_M1 +"<br/> " + psf_100_115_J2_M3; }
        else if (width <= 71) { psfResult = psf_100_115_J2_M3; }       // M2 / J2
        else if (width > 71)  { psfResult = NotCompliant; }
      }
    else if (height <= 108)            // At Height of 108"   &   Width:  30", 36", 42", 48", 54"                          M1 / J1
    {                                            // At Height of 108"   &   Width:  30", 36", 42", 48", 54" 60" 66" 67"    J2 / M3
        if      (width <= 54) { psfResult = psf_70_70_J1_M1 + "<br/> " + psf_100_115_J2_M3;}
        else if (width <= 60) { psfResult = psf_100_115_J2_M3;}                                                    // J2 / M3
        else if (width <= 66) { psfResult = psf_100_111d7_J2_M3;}                                                  // J2 / M3
        else if (width <= 67) { psfResult = psf_100_110d5_J2_M3;}                                                  // J2 / M3
        else if (width > 67)  { psfResult = NotCompliant; }
    }
    else if (height <= 114)            // At Height of 114"   &   Width:  30", 36", 42", 48", 51"                  M1 / J1
    {                                                            // &   Width:  30", 36", 42", 48", 54" 60" 63"    J2 / M3
        if (width <= 48)      { psfResult = psf_70_70_J1_M1     + "<br/> " + psf_100_115_J2_M3;}
        else if (width <= 51) { psfResult = psf_69d4_69d4_J1_M1 + "<br/> " + psf_100_115_J2_M3;}
        else if (width <= 54) { psfResult = psf_100_115_J2_M3;}
        else if (width <= 63) { psfResult = psf_100_102d4_J2_M3  + "<br/> " + psf_100_115_J2_M3_CRS ;}
        else if (width > 63)  { psfResult = NotCompliant;}
    }
    else if (height <= 120)            // At Height of 120"   &   Width:  30", 36", 42", 48"                 M1 / J1
                                       // At Height of 120"   &   Width:  48", 54", 58"                      M2 / J2
        {                               // At Height of 120"  &   Width:  54", 60"                           M2 / J2 *Reinforced Cold Rolled
        if (width <= 36)      { psfResult = psf_70_70_J1_M1     + "<br/> " + psf_100_115_J2_M3; }
        else if (width <= 42) { psfResult = psf_69d9_69d9_J1_M1 + "<br/> " + psf_100_115_J2_M3; }
        else if (width <= 48) { psfResult = psf_62d1_62d1_J1_M1 + "<br/> " + psf_100_115_J2_M3; }
        else if (width <= 54) { psfResult = psf_65_65_J2_M2     + "<br/> " + psf_100_103d9_J2_M3 + "<br/> " + psf_100_115_J2_M3_CRS;}
        else if (width <= 58) { psfResult = psf_65_65_J2_M2     + "<br/> " + psf_95d1_95d1_J2_M3 + "<br/> " + psf_100_115_J2_M3_CRS;}
        else if (width <= 60) { psfResult = psf_95d1_95d1_J2_M3 + "<br/> " + psf_100_115_J2_M3_CRS; }
        else if (width > 60)  { psfResult = NotCompliant; }
      }
    else if (height <= 126) {         // At Height of 126" &   Width:  30", 36", 42", 48", 54", 55"           M2 / J2
                                      // At Height of 126" &   Width:  30", 36", 42", 48", 54", 55"           J2 / M3
                                      // At Height of 126" &   Width:  30", 36", 42", 48", 54", 55"           J2 / M3  *Reinforced Cold Rolled
        if (width <= 42) { psfResult = psf_100_110_J2_M3;}
        else if (width <= 48) {psfResult = psf_100_103d9_J2_M3;
                               psfResult += "<br/> " + psf_100_110_J2_M3_CRS;}

        else if (width <= 54) {
            psfResult = psf_93d6_93d6_J2_M3;
            psfResult += "<br/> " + psf_100_107d_J2_M3_CRS;
        }
        else if (width <= 55) {
            psfResult = psf_65_65_J2_M2;
            psfResult += "<br/> " + psf_92d1_92d1_J2_M3;
            psfResult += "<br/> " + psf_100_105d9_J2_M3_CRS;
        }
        else if (width > 55) { psfResult = NotCompliant; }
}
      else if (height <= 132)                 // At Height of 132"   &   Width:  30", 36", 42", 48", 53"              M2 / J2
    {                                         // At Height of 132"   &   Width:  30", 36", 42", 48", 53"              J2 / M3
                                              // At Height of 132"   &   Width:  42"                                  J2 / M3 *Cold Rolled
        if (width <= 36) { psfResult = psf_100_110_M3_M2; }
        else if (width <= 42) {
            psfResult = psf_100_106d6_J2_M3_CRS;
            psfResult = psf_100_110_J2_M3;
        }
        else if (width <= 48) {
            psfResult = psf_65_65_J2_M2;
            psfResult = psf_94d3_94d3_J2_M3_CRS;
        }
        else if (width <= 53) { psfResult = psf_86d2_86d2_J2_M3; }
        else if (width > 53) { psfResult = NotCompliant; }
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
    }
    else if (height <= 144)                 // At Height of 144"   &   Width:  30", 36", 42", 48"                     M2 / J2
    {
        if (width <= 36) { psfResult = psf_100_110_M3_M2;}
        else if (width <= 36) { psfResult = psf_65_65_J2_M2 + "<br/> " + psf_100_102d8_J2_M3;}
        else if (width <= 42) { psfResult = psf_59d6_59d6_J2_M2 + "<br/> " +  psf_88d9_88d9_J2_M3;}
        else if (width <= 48) { psfResult =  psf_52d7_52d7_J2_M3 + "<br/> " + psf_78d6_78d6_J2_M3;}
        else if (width > 48) { psfResult = NotCompliant;}
    }
      ClearFields();
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





}
catch (error) {
  document.getElementById("PSF_Result").innerHTML = "You triggered an error";
              }
            }
