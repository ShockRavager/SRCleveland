
/* DROPDOWNS */

function LoadHeaderLeftDD1_1() {
    if (GHeaderLeftDD1_1_Status) {
        document.getElementById("ID_HeaderLeftDD1_1").style.visibility = "hidden";
        GHeaderLeftDD1_1_Status = false;
    }
    else {
        document.getElementById("ID_HeaderLeftDD1_1").style.visibility = "visible";
        GHeaderLeftDD1_1_Status = true;
    }
}

function ResetHeaderLeftDD1_1() {
    document.getElementById("ID_HeaderLeftDD1_1").style.visibility = "hidden";
    GHeaderLeftDD1_1_Status = false;
}

function LoadHeaderLeftDD1_2() {
    if (GHeaderLeftDD1_2_Status) {
        document.getElementById("ID_HeaderLeftDD1_2").style.visibility = "hidden";
        SetRightArrowScale("ID_RightArrowIMG1", 1);
        GHeaderLeftDD1_2_Status = false;
    }
    else {
        document.getElementById("ID_HeaderLeftDD1_2").style.visibility = "visible";
        SetRightArrowScale("ID_RightArrowIMG1", -1);
        GHeaderLeftDD1_2_Status = true;
    }
}

function ResetHeaderLeftDD1_2() {
    if (GHeaderLeftDD1_2_MouseStatus !== "hover" && !IsCursorInElemRangeY("ID_HeaderDDBTN1_1_2")) {
        document.getElementById("ID_HeaderLeftDD1_2").style.visibility = "hidden";
        SetRightArrowScale("ID_RightArrowIMG1", 1);
        GHeaderLeftDD1_2_Status = false;
    }
}

function SetHeaderLeftDD1_2_Hovered(Status) {
    GHeaderLeftDD1_2_MouseStatus = Status;
}