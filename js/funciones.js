var tabButtons=document.querySelectorAll(".contenedor-tab .botones-tab button");
var tabPanels=document.querySelectorAll(".contenedor-tab .tabPanel");

function showPanel(panelIndex,colorCode) {
    tabButtons.forEach(function(node){
        node.style.backgroundColor="";
        node.style.color="";
    });
    tabButtons[panelIndex].style.backgroundColor=colorCode;
    tabButtons[panelIndex].style.color="black";
    tabPanels.forEach(function(node){
        node.style.display="none";
    });
    tabPanels[panelIndex].style.display="block";
    tabPanels[panelIndex].style.backgroundColor=colorCode;
}
showPanel(0,'#F4F4F4');
showPanel(1,'#F4F4F4');
showPanel(2,'#F4F4F4');
showPanel(3,'#F4F4F4');
showPanel(4,'#F4F4F4');
showPanel(5,'#F4F4F4');