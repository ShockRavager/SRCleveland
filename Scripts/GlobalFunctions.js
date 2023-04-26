
function OnBodyLoad() {
    let LLocalElement = document.getElementById("ID_HeaderLeftDD1_1");

    LLocalElement.style.top = document.getElementById("ID_Header").offsetHeight + "px";
    LLocalElement.style.left = document.getElementById("ID_HeaderBTN1").offsetLeft + "px";
    LLocalElement.style.visibility = "hidden";

    LLocalElement = document.getElementById("ID_HeaderLeftDD1_1_1");
    LLocalElement.style.top = (document.getElementById("ID_HeaderDDBTN1_1_2").offsetTop - parseInt(getComputedStyle(document.getElementById("ID_HeaderDDBTN1_1_2")).marginTop, 10) - 2) + "px";
    LLocalElement.style.left = (document.getElementById("ID_HeaderLeftDD1_1").offsetWidth - 4) + "px";
    LLocalElement.style.visibility = "hidden";

    LLocalElement = document.getElementById("ID_HeaderLeftDD1_1_2");
    LLocalElement.style.top = (document.getElementById("ID_HeaderDDBTN1_1_5").offsetTop - parseInt(getComputedStyle(document.getElementById("ID_HeaderDDBTN1_1_5")).marginTop, 10) - 2) + "px";
    LLocalElement.style.left = (document.getElementById("ID_HeaderLeftDD1_1").offsetWidth - 4) + "px";
    LLocalElement.style.visibility = "hidden";

    LLocalElement = document.getElementById("ID_HeaderLeftDD2");
    LLocalElement.style.top = document.getElementById("ID_Header").offsetHeight + "px";
    LLocalElement.style.left = document.getElementById("ID_HeaderBTN2").offsetLeft + "px";
    LLocalElement.style.visibility = "hidden";

    LLocalElement = document.getElementById("ID_HeaderRightDD1");
    LLocalElement.style.top = document.getElementById("ID_Header").offsetHeight + "px";
    LLocalElement.style.right = parseInt(document.getElementById("ID_HeaderBTN4").style.marginRight, 10) + "px";
    LLocalElement.style.visibility = "hidden";
}

function SetUpArrowScale(ElementID, Value) {
    document.getElementById(ElementID).style.transform = "scaleY(" + Value + ")";
}

function SetRightArrowScale(ElementID, Value) {
    document.getElementById(ElementID).style.transform = "scaleX(" + Value + ")";
}

function IsCursorInElemAtLeft(ElementID) {
    let LElementPosX = document.getElementById(ElementID).getBoundingClientRect().left;

    return GMousePosition[0] <= (LElementPosX + 2);
}

function IsCursorInElemAtRight(ElementID) {
    let LElementPosX = document.getElementById(ElementID).getBoundingClientRect().left;
    let LElementSizeX = document.getElementById(ElementID).getBoundingClientRect().width;

    return GMousePosition[0] >= (LElementPosX + LElementSizeX - 2);
}

function IsCursorInElemRangeX(ElementID) {
    let LElementPosX = document.getElementById(ElementID).getBoundingClientRect().left;
    let LElementSizeX = document.getElementById(ElementID).getBoundingClientRect().width;

    return GMousePosition[0] >= (LElementPosX + 2) && GMousePosition[0] <= (LElementPosX + LElementSizeX - 2);
}

function IsCursorInElemRangeY(ElementID) {
    let LElementPosY = document.getElementById(ElementID).getBoundingClientRect().top;
    let LElementSizeY = document.getElementById(ElementID).getBoundingClientRect().height;

    return GMousePosition[1] >= (LElementPosY + 2) && GMousePosition[1] <= (LElementPosY + LElementSizeY - 2);
}

function IsCursorInElemRangeXY(ElementID) {
    let LElementPos = [
        document.getElementById(ElementID).getBoundingClientRect().left,
        document.getElementById(ElementID).getBoundingClientRect().top];
    let LElementSize = [
        document.getElementById(ElementID).getBoundingClientRect().width,
        document.getElementById(ElementID).getBoundingClientRect().height
    ];

    return (GMousePosition[0] >= (LElementPos[0] + 2) && GMousePosition[0] <= (LElementPos[0] + LElementSize[0] - 2))
        && (GMousePosition[1] >= (LElementPos[1] + 2) && GMousePosition[1] <= (LElementPos[1] + LElementSize[1] - 2));
}

window.onmousemove = function (Event) {
    GMousePosition[0] = Event.clientX;
    GMousePosition[1] = Event.clientY;
    GMousePositionItemID = Event.target.id;
    CheckHeaderButtonDDChildLoadOnHover("ID_HeaderDDBTN1_1_2", "ID_HeaderLeftDD1_1", "ID_HeaderLeftDD1_1_1", "ID_RightArrowIMG1");
    CheckHeaderButtonDDChildLoadOnHover("ID_HeaderDDBTN1_1_5", "ID_HeaderLeftDD1_1", "ID_HeaderLeftDD1_1_2", "ID_RightArrowIMG2");
}

window.onclick = function (Event) {
    CheckHeaderButtonDDLoadOnClick("ID_HeaderBTN1", "ID_HeaderLeftDD1_1", "none");
    CheckHeaderButtonDDLoadOnClick("ID_HeaderBTN2", "ID_HeaderLeftDD2", "ID_UpArrowIMG1");
    CheckHeaderButtonDDLoadOnClick("ID_HeaderBTN4", "ID_HeaderRightDD1", "ID_UpArrowIMG2");
}