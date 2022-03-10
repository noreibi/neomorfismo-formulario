function formularioUsuario(usuario, contraseña) {
  const usuario = document.getElementById("mostrarUsuario()");
  const contraseña = document.getElementById("mostrarContraseña()");
}

function validadUsuario(usuario, contraseña) {
  if (!usuario)
    return { error: true, mensaje: "Escribir un correo electrónico" };
  if (!contraseña)
    return { error: true, mensaje: "Debe tener un máximo de 10 caracteres" };
  if (usuario < 1)
    return {
      error: true,
      mensaje: "Los lados del triangulo deben ser mayores a cero",
    };
  if (contraseña < 1)
    return {
      error: true,
      mensaje: "La base debe ser mayor a cero",
    };
  if (!parseInt(ladoA) || !parseInt(base))
    return { error: true, mensaje: "por favor introduzca un numero valido" };

  return { error: false, mensaje: "no hubo errores" };
}
