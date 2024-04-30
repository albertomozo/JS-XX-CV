// Función para obtener los repositorios de un usuario en GitHub
function obtenerRepositorios(usuario) {
    return fetch(`https://api.github.com/users/${usuario}/repos`)
      .then(response => response.json())
      .then(data => {
        console.log("Repositorios del usuario " + usuario + ":");
        data.forEach(repo => {
          console.log(repo.name);
        });
        return data;
      })
      .catch(error => {
        console.error("Hubo un error al obtener los repositorios:", error);
      });
  }
  
  // Llamar a la función con el nombre de usuario
  obtenerRepositorios("albertomozo")
    .then(repos => {
      console.log(repos); // Aquí puedes trabajar con los repositorios
    });
  