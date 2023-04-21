
function OnBodyLoad() {
    let LLocalElement = document.getElementById("ID_HeaderLeftDD1_1");
    let LLocalValue = [0];

    LLocalElement.style.top = document.getElementById("ID_Header").offsetHeight + "px";
    LLocalElement.style.left = document.getElementById("ID_HeaderBTN1").offsetLeft + "px";
    LLocalElement.style.visibility = "hidden";

    LLocalElement = document.getElementById("ID_HeaderLeftDD1_2");
    LLocalElement.style.top = (document.getElementById("ID_HeaderDDBTN1_1_2").offsetTop - parseInt(getComputedStyle(document.getElementById("ID_HeaderDDBTN1_1_2")).marginTop, 10) - 2) + "px";
    LLocalElement.style.left = (document.getElementById("ID_HeaderLeftDD1_1").offsetWidth - 4) + "px";
    LLocalElement.style.visibility = "hidden";
}

function SetRightArrowScale(ElementID, Value) {
    document.getElementById(ElementID).style.transform = "scaleX(" + Value + ")";
}

function IsCursorInElemRangeY(ElementID) {
    let LElementPos = [
        document.getElementById(ElementID).getBoundingClientRect().left,
        document.getElementById(ElementID).getBoundingClientRect().top
    ];
    let LElementSize = [
        document.getElementById(ElementID).getBoundingClientRect().width,
        document.getElementById(ElementID).getBoundingClientRect().height
    ];

    return GMousePosition[1] >= LElementPos[1] && GMousePosition[1] <= (LElementPos[1] + LElementSize[1]);
}

window.onmousemove = function (Event) {
    GMousePosition[0] = Event.clientX;
    GMousePosition[1] = Event.clientY;
    console.log(document.getElementById("ID_HeaderDDBTN1_1_2").getBoundingClientRect().width, document.getElementById("ID_HeaderDDBTN1_1_2").getBoundingClientRect().height);
    console.log(GMousePosition);
}

window.mouseclick = function (Event) {
    if (Event.target.id !== "") {

    }
}