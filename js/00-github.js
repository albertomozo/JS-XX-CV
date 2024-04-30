// Función para obtener los repositorios de un usuario en GitHub
function obtenerRepositorios(usuario) {
    fetch(`https://api.github.com/users/${usuario}/repos`)
      .then(response => response.json())
      .then(data => {
        console.log("Repositorios del usuario " + usuario + ":");
        data.forEach(repo => {
          console.log(repo.name);
        });
       
      })
      .catch(error => {
        console.error("Hubo un error al obtener los repositorios:", error);
      });
  }
  
  // Llamar a la función con el nombre de usuario
 reposGithub = obtenerRepositorios("albertomozo");
  