export const usuarios = async () => {
  const lista = await fetch("http://localhost:3000/users");
  console.log(lista);
  const listado = await lista.json();
  console.log(listado);
  return listado
};



