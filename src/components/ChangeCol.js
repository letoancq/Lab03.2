const col = document.getElementsByClassName("span-list");
export function ChangeCol2() {
  for (var i = 0; i < col.length; i++) {
    col[i].style.width = "15%";
  }
}
export function ChangeCol3() {
  for (var i = 0; i < col.length; i++) {
    col[i].style.width = "30%";
  }
}
export function ChangeCol6() {
  for (var i = 0; i < col.length; i++) {
    col[i].style.width = "45%";
  }
}
