window.onload = function() {
  var viewer = document.getElementById("viewer");
  viewer.style.height = screen.availHeight + "px";
  viewer.style.width = screen.availWidth + "px";

  console.log(viewer.getCameraOrbit())
};