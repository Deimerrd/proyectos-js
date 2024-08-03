/* cargamos el svg por url en un node usando promesas */
function getSVG(url) {
  return new Promise((resolve, reject) => {
    fetch(url)
      .then(function (response) {
        // procesamos la respuesta como texto
        return response.text();
      })
      .then(function (bodyText) {
        // creamos un elemento contenedor temporal
        var unDiv = document.createElement("div");
        // descartamos el xml coso que viene en algunos svg
        var svgString = bodyText.substring(bodyText.indexOf("<svg")).trim();
        // creamos el nodo a partir del html dentro del elemento temporal
        unDiv.innerHTML = svgString;
        // retornamos el node svg
        var svgNode = unDiv.firstChild;
        resolve(svgNode);
      })
      .catch((err) => {
        reject(err);
      });
  });
}

async function cambiaIMGxSVG(laClasedelosSVG) {
  var x = document.getElementsByClassName(laClasedelosSVG);
  i = x.length;
  while (i--) {
    var a = x[i];
    var svgSrc = a.getAttribute("src");
    var imgWidth = a.getAttribute("width");
    var imgHeight = a.getAttribute("height");

    // esperamos el fetch para manipular el svg como nodo
    var svgNode = await getSVG(svgSrc);

    // copiamos la lista de clases de la img original
    svgNode.classList.add(...a.classList);

    // si el svg no tiene un viewBox se lo creamos
    var svgWidth = svgNode.getAttribute("width");
    var svgHeight = svgNode.getAttribute("height");
    var svgViewBox = svgNode.getAttribute("viewBox");
    if (!svgViewBox) {
      svgNode.setAttribute("viewBox", `0 0 ${svgWidth} ${svgHeight}`);
    }

    // console.log(svgWidth, svgHeight, svgViewBox)

    svgNode.style.width = imgWidth ? imgWidth : svgWidth;
    svgNode.style.height = imgHeight ? imgHeight : imgHeight;

    svgNode.removeAttribute("width");
    svgNode.removeAttribute("height");
    // le decimos que escale proporcional al centro
    svgNode.setAttribute("preserveAspectRatio", "xMidYMid");
    // insertamos antes de la img
    a.parentNode.insertBefore(svgNode, a);
    // borramos la img
    a.remove();
  }
}
document.addEventListener("DOMContentLoaded", function () {
  cambiaIMGxSVG("color");
});
