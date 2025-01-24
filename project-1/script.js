// JS for Menu

var menuItems = document.getElementById("menuItems");

menuItems.style.maxHeight = "0px";

function toggleMenu() {
  if (menuItems.style.maxHeight == "0px") {
    menuItems.style.maxHeight = "155px";
  } else {
    menuItems.style.maxHeight = "0px";
  }
}

var myname = document.getElementById("myname");

function remove() {
  if (myname.style.display == "none") {
    myname.style.display = "flex";
  } else {
    myname.style.display = "none";
  }
}
