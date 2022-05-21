const changecolMenu = document.getElementsByClassName("changecol-menu");
function ChangeThemes() {
    for (var i = 0; i < changecolMenu.length; i++) {
        if (changecolMenu[i].style.display === "none") {
          changecolMenu[i].style.display= "block" ;
        } else {
          changecolMenu[i].style.display= "none" ;
        }

    }
}
export default ChangeThemes;
