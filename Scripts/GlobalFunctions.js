
function OnBodyLoad() {
    let LLocalPanel = document.getElementById("ID_HeaderLeftDD1");

    LLocalPanel.style.top = document.getElementById("ID_Header").offsetHeight + "px";
    LLocalPanel.style.left = document.getElementById("ID_HeaderBTN1").offsetLeft + "px";
}