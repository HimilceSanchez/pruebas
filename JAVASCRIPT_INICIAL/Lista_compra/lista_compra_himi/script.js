// Agrega un botón de cierre ("x") a cada elemento de la lista actual
function addCloseButtonToListItems() {
  var myNodelist = document.getElementsByTagName("LI");
  for (var i = 0; i < myNodelist.length; i++) {
    var span = document.createElement("SPAN");
    var txt = document.createTextNode("x");
    span.className = "close";
    span.appendChild(txt);
    myNodelist[i].appendChild(span);
  }

  // Añadir eventos de clic a los botones "x"
  var close = document.getElementsByClassName("close");
  for (var i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
    };
  }
}

// Marcar los elementos como "checked" al hacer clic
var list = document.querySelector("ul");
list.addEventListener("click", function(ev) {
  if (ev.target.tagName === "LI") {
    ev.target.classList.toggle("checked");
  }
});

// Función para agregar un nuevo elemento
function newElement() {
  var li = document.createElement("li");
  var inputValue = document.getElementById("myInput").value;
  var t = document.createTextNode(inputValue);
  li.appendChild(t);
  if (inputValue === "") {
    alert("Por favor, introduce un artículo.");
  } else {
    document.getElementById("myUL").appendChild(li);
  }
  document.getElementById("myInput").value = "";

  // Añadir botón de cierre al nuevo elemento
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("x");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);

  // Añadir evento de clic al botón de cierre
  span.onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
  };
}

// Inicializar la lista para agregar botones de cierre a cualquier elemento existente
addCloseButtonToListItems();
