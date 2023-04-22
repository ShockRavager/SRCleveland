
/* DROPDOWNS */

function CheckHeaderButtonDDLoadOnClick(ButtonID, ChildDropdownID, UpArrowID) {
    if (GMousePositionItemID === ButtonID) {
        if (document.getElementById(ChildDropdownID).style.visibility !== "visible") {
            document.getElementById(ChildDropdownID).style.visibility = "visible";

            if (UpArrowID !== "none") {
                SetUpArrowScale(UpArrowID, -1);
            }
        }
        else {
            document.getElementById(ChildDropdownID).style.visibility = "hidden";

            if (UpArrowID !== "none") {
                SetUpArrowScale(UpArrowID, 1);
            }
        }
    }
    else {
        if (document.getElementById(ChildDropdownID).style.visibility !== "hidden" && !IsCursorInElemRangeXY(ChildDropdownID)) {
            document.getElementById(ChildDropdownID).style.visibility = "hidden";

            if (UpArrowID !== "none") {
                SetUpArrowScale(UpArrowID, 1);
            }
        }
    }
}

function CheckHeaderButtonDDChildLoadOnHover(ButtonID, ParentDropdownID, ChildDropdownID, RightArrowID) {
    if (document.getElementById(ChildDropdownID).style.visibility !== "visible") {
        if (GMousePositionItemID === ButtonID) {
            document.getElementById(ChildDropdownID).style.visibility = "visible";

            if (RightArrowID !== "none") {
                SetRightArrowScale(RightArrowID, -1);
            }
        }
    }
    else {
        if (document.getElementById(ParentDropdownID).style.visibility !== "visible" || IsCursorInElemAtLeft(ButtonID) || !IsCursorInElemRangeY(ChildDropdownID) || IsCursorInElemAtRight(ChildDropdownID) || (IsCursorInElemAtLeft(ChildDropdownID) && !IsCursorInElemRangeY(ButtonID))) {
            document.getElementById(ChildDropdownID).style.visibility = "hidden";

            if (RightArrowID !== "none") {
                SetRightArrowScale(RightArrowID, 1);
            }
        }
    }
}