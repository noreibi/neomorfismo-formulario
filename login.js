function usuarioLogin(usuario) {
  return usuario;
}
function contraseñaLogin(contraseña) {
  return contraseña;
}

function formularioLogin(usuario, contraseña) {
  const usuario = document.getElementById("usuario");
  const contraseña = document.getElementById("contraseña");

  const login = validadUsuario(usuario.value, contraseña.value);
  alert(login);
}

function ButtonEntradaUsuario() {
  const inputUsuario = document.getElementById("inputUsuario");
  const inputContraseña = document.getElementById("inputContraseña");

  const usuarioValue = usuario.value;
  const contraseñaValue = contraseña.value;
}

function validadUsuario(usuario, contraseña) {
  if (!usuario)
    return { error: true, mensaje: "Debe escribir un correo electrónico" };
  if (!contraseña)
    return { error: true, mensaje: "Debe tener un máximo de 10 caracteres" };

  return { error: false, mensaje: "no hubo errores" };
}

//el formulario se envia
//alert("Muchas gracias por enviar el formulario");
//document.formulario.submit();
