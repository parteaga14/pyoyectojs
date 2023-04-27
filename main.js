for (let butaca = 1; butaca <= 3; butaca++) {
    let nombre = prompt("Bienvenido ingrese nombre");
    let apellido = prompt("ingrese apellido");
    let persona = prompt("Ingrese su DNI");
    function solicitarNombre() {
        alert(`Gracias por viajar con nosotros ${nombre} ${apellido}`);}
    if ((nombre != "") && (apellido != "")) {
        alert(`Bienvenido ${nombre}  ${apellido} ${persona}`)
    } else {
        alert("Error por favor ingrese nombre y apellido");
        nombre = prompt("Bienvenido ingrese nombre");
        apellido = prompt("ingrese apellido");
        persona = prompt("Ingrese su DNI");
    }
    alert(`Butaca #${butaca} Persona: ${persona} ${nombre} ${apellido}`);
    solicitarNombre(); 
}
alert("Se acabaron las butacas");







