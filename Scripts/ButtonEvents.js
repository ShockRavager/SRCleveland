
function HeaderBTN2_EventClick() {
    if (GHeaderBTN2_Status) {
        document.getElementById("ID_UpArrowIMG1").style.transform = "scaleY(1)";
        GHeaderBTN2_Status = false;
    }
    else {
        document.getElementById("ID_UpArrowIMG1").style.transform = "scaleY(-1)";
        GHeaderBTN2_Status = true;
    }
}

function HeaderBTN2_Reset() {
    document.getElementById("ID_UpArrowIMG1").style.transform = "scaleY(1)";
    GHeaderBTN2_Status = false;
}