//your JS code here. If required.
var select = document.getElementById('colorSelect');


function removecolor() {
  const opt  = select.options[select.selectedIndex];
  if (opt) opt.remove()
}