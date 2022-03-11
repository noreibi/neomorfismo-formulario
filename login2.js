function formularioLogin(usuario, contraseña) {
  return usuario, contraseña;
}

function ButtonEnviarDatos() {
  inputUsuario = document.getElementById("InputUsuario");
  inputContraseña = document.getElementById("InputContraseña");

  const usuarioValue = inputUsuario.value;
  const contraseñaValue = inputUsuario.value;
}

function validadUsuario(usuario, contraseña) {
  if (!usuario)
    return { error: true, mensaje: "Debe escribir un correo electrónico" };
  if (!contraseña)
    return { error: true, mensaje: "Debe tener un máximo de 10 caracteres" };

  return { error: false, mensaje: "no hubo errores" };
}

//input.forEach((input) => {
//  input.addEventListener("keyup", validarFormulario);
//  input.addEventListener("blur", validarFormulario);
//});
