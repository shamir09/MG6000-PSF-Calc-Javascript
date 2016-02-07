// JavaScript source code

function ClearFields() {
    var psfResult = "";
    document.getElementById("PSF_Result").innerHTML = psfResult;
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
    var width = document.getElementById("widthInput").value;
    var height = document.getElementById("heightInput").value;
    var psfResult;

    if (width == "" || height == ""){
      alert('Please check the Input Fields! At least one is Blank :)')
      ClearFields();
      return;
      }
// Declare and Initialize PSF Mull Capacity for FULL VIEW PANELS
//Variable Declaration Format (PSF_{+positive pressure}_{negative pressure}_{MULL OPTION}_{JAMB})
var psf_62d1_62d1_M1_J1 = "=   +62.1 /  -62.1 PSF  M1 / J1";
var psf_69d4_69d4_M1_J1 = "=   +69.4 /  -69.4 PSF  M1 / J1";
var psf_69d9_69d9_M1_J1 = "=   +69.9 /  -69.9 PSF  M1 / J1";
var psf_70_70_M1_J1     = "=   +70.0 /  -70.0 PSF  M1 / J1";
var psf_98d2_98d2       = "=   +98.2 /  -98.2 PSF  M1 / J1";
var psf_100_107d6_M1_J1 = "=  +100.0 / -107.6 PSF  M1 / J1";
var psf_100_110_M1_J1   = "=  +100.0 / -110.0 PSF  M1 / J1";

var psf_60d1_60d1_M2_J2 = "=   +60.1 /  -60.1 PSF  M2 / J2";
var psf_65_65_M2_J2     = "=   +65.0 /  -65.0 PSF  M2 / J2 *Reinforced";

var psf_52d7_52d7_M3_J2 = "=   +52.7 /  -52.7 PSF  M3 / J2 *Reinforced";
var psf_59d6_59d6_M3_J2 = "=   +59.6 /  -59.6 PSF  M3 / J2 *Reinforced";
var psf_78d6_78d6_M3_J2 = "=   +78.6 /  -78.6 PSF  M3 / J2 *Reinforced";
var psf_85_9_85d9_M3_J2 = "=   +85.9 /  -85.9 PSF  M3 / J2 *Reinforced";
var psf_86d2_86d2_M3_J2 = "=   +86.2 /  -86.2 PSF  M3 / J2 *Reinforced";
var psf_88d9_88d9_M3_J2 = "=   +88.9 /  -88.9 PSF  M3 / J2 *Reinforced";
var psf_92d1_92d1_M3_J2 = "=   +92.1 /  -92.1 PSF  M3 / J2 *Reinforced";
var psf_93d6_93d6_M3_J2 = "=   +93.6 /  -93.6 PSF  M3 / J2 *Reinforced";
var psf_95d1_95d1_M3_J2 = "=   +95.1 /  -95.1 PSF  M3 / J2 *Reinforced";
var psf_97d3_97d3_M3_J2 = "=   +97.3 /  -97.3 PSF  M3 / J2 *Reinforced";
var psf_100_103d9_M3_J2 = "=  +100.0 / -103.9 PSF  M3 / J2 *Reinforced";
var psf_100_110_M3_M2   = "=  +100.0 / -110.0 PSF  M3 / J2 *Reinforced";
var psf_100_102d4_M3_J2 = "=  +100.0 / -102.4 PSF  M3 / J2 *Reinforced";
var psf_100_102d8_M3_J2 = "=  +100.0 / -102.8 PSF  M3 / J2 *Reinforced";
var psf_100_111d7_M3_J2 = "=  +100.0 / -111.7 PSF  M3 / J2 *Reinforced";
var psf_100_115_M3_J2   = "=  +100.0 / -115.0 PSF  M3 / J2 *Reinforced";

var psf_86_5_86d5_M3_J2_CRS ="=  +86.5 /  -86.5 PSF  M3 / J2 *Reinforced Cold Rolled";
var psf_94d3_94d3_M3_J2_CRS ="=  +94.3 /  -94.3 PSF  M3 / J2 *Reinforced Cold Rolled";
var psf_100_101d4_M3_J2_CRS ="= +100.0 / -101.4 PSF  M3 / J2 *Reinforced Cold Rolled";
var psf_100_105d9_M3_J2_CRS= "= +100.0 / -105.9 PSF  M3 / J2 *Reinforced Cold Rolled";
var psf_100_106d6_M3_J2_CRS= "= +100.0 / -106.6 PSF  M3 / J2 *Reinforced Cold Rolled";
var psf_100_107d_M3_J2_CRS = "= +100.0 / -107.6 PSF  M3 / J2 *Reinforced Cold Rolled";
var psf_100_110_M3_J2_CRS  = "= +100.0 / -110.0 PSF  M3 / J2 *Reinforced Cold Rolled";
var psf_100_115_M3_J2_CRS  = "= +100.0 / -115.0 PSF  M3 / J2 *Reinforced Cold Rolled";

function M1J1() {
  var img = document.createElement('img');
  img.src = "assets/J1_M1.jpg";
  document.getElementById("PSF_Result").appendChild(img);
}

var NotCompliant = NotCompliant;

  if (height <= 90) {                 // At Height of 90"   &   Width:  30", 36", 42", 48", 54", 55", 60"            M1 / J1
        if (width <= 55) { psfResult = psf_100_110_M1_J1; }
        else if (width <= 60) { psfResult = psf_100_110_M1_J1; }
        else if (width > 60) { psfResult = psf_70_70_M1_J1; }
      }
  else if (height <= 96)                             // At Height of 96"   &   Width:  30", 36", 42", 48", 51", 54", 60"            M1 / J1
        {                                        // At Height of 120"   &   Width:  30", 36", 42", 48", 51", 54", 60" 66", 72"      M3 / J2
            if (width <= 48) { psfResult = psf_100_110_M1_J1 +         "<br/> " + psf_100_115_M3_J2; }
            else if (width <= 51) { psfResult = psf_100_107d6_M1_J1 +  "<br/> "  + psf_100_115_M3_J2; }
            else if (width <= 60) { psfResult = psf_70_70_M1_J1 +      "<br/> " + psf_100_115_M3_J2; }
            else if (width <= 72) { psfResult = psf_100_115_M3_J2; }
            else if (width >= 73) { psfResult = NotCompliant; }
          }
    else if (height <= 102)            // At Height of 102"  &   Width:  30", 36", 42", 48", 54", 57"                       M1 / J1
        {                                                           // &   Width:  30", 36", 42", 48", 54", 60" 66", 71"    M3 / J2
        if (width <= 42) { psfResult = psf_100_110_M1_J1 +  "<br/> " + psf_100_115_M3_J2 ; }
        else if (width <= 48) { psfResult = psf_98d2_98d2 +  "<br/> " + psf_100_115_M3_J2; }
        else if (width <= 57) { psfResult = psf_70_70_M1_J1 +"<br/> " + psf_100_115_M3_J2; }
        else if (width <= 71) { psfResult = psf_100_115_M3_J2; }       // M2 / J2
        else if (width > 71)  { psfResult = NotCompliant; }
      }
    else if (height <= 108)            // At Height of 108"   &   Width:  30", 36", 42", 48", 54"                          M1 / J1
    {                                            // At Height of 108"   &   Width:  30", 36", 42", 48", 54" 60" 66" 67"    M3 / J2
        if      (width <= 54) { psfResult = psf_70_70_M1_J1 + "<br/> " + psf_100_115_M3_J2;}
        else if (width <= 60) { psfResult = psf_100_115_M3_J2;}                                                    // M3 / J2
        else if (width <= 66) { psfResult = psf_100_111d7_M3_J2;}                                                  // M3 / J2
        else if (width <= 67) { psfResult = psf_100_110d5_M3_J2;}                                                  // M3 / J2
        else if (width > 67)  { psfResult = NotCompliant; }
    }
    else if (height <= 114)            // At Height of 114"   &   Width:  30", 36", 42", 48", 51"                  M1 / J1
    {                                                            // &   Width:  30", 36", 42", 48", 54" 60" 63"    M3 / J2
        if (width <= 48)      { psfResult = psf_70_70_M1_J1     + "<br/> " + psf_100_115_M3_J2;}
        else if (width <= 51) { psfResult = psf_69d4_69d4_M1_J1 + "<br/> " + psf_100_115_M3_J2;}
        else if (width <= 54) { psfResult = psf_100_115_M3_J2;}
        else if (width <= 63) { psfResult = psf_100_102d4_M3_J2       + "<br/> " + psf_100_115_M3_J2_CRS ;}
        else if (width > 63)  { psfResult = NotCompliant;}
    }
    else if (height <= 120)            // At Height of 120"   &   Width:  30", 36", 42", 48"                 M1 / J1
                                       // At Height of 120"   &   Width:  48", 54", 58"                      M2 / J2
        {                               // At Height of 120"  &   Width:  54", 60"                           M2 / J2 *Reinforced Cold Rolled
        if (width <= 36)      { psfResult = psf_70_70_M1_J1     + "<br/> " + psf_100_115_M3_J2; }
        else if (width <= 42) { psfResult = psf_69d9_69d9_M1_J1 + "<br/> " + psf_100_115_M3_J2; }
        else if (width <= 48) { psfResult = psf_62d1_62d1_M1_J1 + "<br/> " + psf_100_115_M3_J2; }
        else if (width <= 54) { psfResult = psf_65_65_M2_J2     + "<br/> " + psf_100_103d9_M3_J2 + "<br/> " + psf_100_115_M3_J2_CRS;}
        else if (width <= 58) { psfResult = psf_65_65_M2_J2     + "<br/> " + psf_95d1_95d1_M3_J2 + "<br/> " + psf_100_115_M3_J2_CRS;}
        else if (width <= 60) { psfResult = psf_95d1_95d1_M3_J2 + "<br/> " + psf_100_115_M3_J2_CRS; }
        else if (width > 60)  { psfResult = NotCompliant; }
      }
    else if (height <= 126) {         // At Height of 126" &   Width:  30", 36", 42", 48", 54", 55"           M2 / J2
                                      // At Height of 126" &   Width:  30", 36", 42", 48", 54", 55"           M3 / J2
                                      // At Height of 126" &   Width:  30", 36", 42", 48", 54", 55"           M3 / J2  *Reinforced Cold Rolled
        if (width <= 42) { psfResult = psf_100_110;}
        else if (width <= 48) {psfResult = psf_100_103d9_M3_J2;
                               psfResult += "<br/> " + psf_100_110_M3_J2_CRS;}

        else if (width <= 54) {
            psfResult = psf_93d6_93d6_M3_J2;
            psfResult += "<br/> " + psf_100_107d_M3_J2_CRS;
        }
        else if (width <= 55) {
            psfResult = psf_65_65_M2_J2;
            psfResult += "<br/> " + psf_92d1_92d1_M3_J2;
            psfResult += "<br/> " + psf_100_105d9_M3_J2_CRS;
        }
        else if (width > 55) { psfResult = NotCompliant; }
}
      else if (height <= 132)                 // At Height of 132"   &   Width:  30", 36", 42", 48", 53"              M2 / J2
    {                                         // At Height of 132"   &   Width:  30", 36", 42", 48", 53"              M3 / J2
                                              // At Height of 132"   &   Width:  42"                                  M3 / J2 *Cold Rolled
        if (width <= 36) { psfResult = psf_100_110_M3_M2; }
        else if (width <= 42) {
            psfResult = psf_100_106d6_M3_J2_CRS;
            psfResult = psf_100_110_M3_M2;
        }
        else if (width <= 48) {
            psfResult = psf_65_65_M2_J2;
            psfResult = psf_94d3_94d3_M3_J2_CRS;
        }
        else if (width <= 53) { psfResult = psf_86d2_86d2_M3_J2; }
        else if (width > 53) { psfResult = NotCompliant; }
    }
    else if (height <= 138)                   // At Height of 138"   &   Width:  30", 36", 42", 48", 50"                M2 / J2
    {                                         // At Height of 132"   &   Width:  30", 36", 42", 48", 50"                M3 / J2
                                              // At Height of 132"   &   Width:  42", 48", 50"                          M3 / J2 *Cold Rolled
        if (width <= 36) { psfResult = psf_100_110_M3_M2; }
        else if (width <= 42) {
            psfResult = psf_65_65_M2_J2;
            psfResult += "<br/> " + psf_97d3_97d3_M3_J2;
            psfResult += "<br/> " + psf_100_101d4_M3_J2_CRS;
        }
        else if (width <= 48) {
            psfResult = (psf_60d1_60d1_M2_J2);
            psfResult += "<br/> " + psf_85_9_85d9_M3_J2;
            psfResult += "<br/> " + psf_86_5_86d5_M3_J2_CRS;
        }
    }
    else if (height <= 144)                 // At Height of 144"   &   Width:  30", 36", 42", 48"                     M2 / J2
    {
        if (width <= 36) { psfResult = psf_100_110_M3_M2;}
        else if (width <= 36) { psfResult = psf_65_65_M2_J2 + "<br/> " + psf_100_102d8_M3_J2;}
        else if (width <= 42) { psfResult = psf_59d6_59d6_M3_J2 + "<br/> " +  psf_88d9_88d9_M3_J2;}
        else if (width <= 48) { psfResult =  psf_52d7_52d7_M3_J2 + "<br/> " + psf_78d6_78d6_M3_J2;}
        else if (width > 48) { psfResult = NotCompliant;}
    }
    document.getElementById("PSF_Result").innerHTML = psfResult;
}
catch (error) {
  document.getElementById("PSF_Result").innerHTML = "You triggered an error";
              }
            }
