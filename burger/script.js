function toggleBurger() {
  burger = document.getElementById('assembled-burger');
  topBread = document.getElementById('top-bread');
  mainMenu = document.getElementById('main-menu');

  if (burger.style.display != "none") {
    burger.style.display = "none";
    topBread.style.display = "inline";
    mainMenu.style.visibility = "inherit";
  } else {
    burger.style.display = "inline";
    topBread.style.display = "none";
    mainMenu.style.visibility = "hidden";
  }

}