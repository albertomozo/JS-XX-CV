titulo.innerHTML = '09 -Propiedad Object.values ';
document.getElementById('curso').style.display='none';
let info = document.getElementById('info');

info.innerHTML =  '<P>Object.values </p>';


for(const [key, value] of Object.entries(curso)){
    console.log(`📙 Key : ${key}` );
    console.log(key)
    console.log(value);
    // typeof devuelve el tipo de dato
    console.log ('typeof ' + typeof value);


}


///////////////////////////


for(const [key, value] of Object.entries(curso)){
     // typeof devuelve el tipo de dato
    tipo = typeof value;
    console.log(`📙 Key : ${key} | tipo :  ${tipo}`  );
    if (tipo === 'object'){
      //console.log(`     📒 Object `);
      for(const [key1, value1] of Object.entries(value)){
        console.log(`     📒 key : ${key1}`);
        console.log(`      ${key1}`)
        console.log(`      ${value1}`)
       
      }

    } else {
      console.log(key)
      console.log(value);


    }


}


// recursiva 

console.log('🟪 RECURSIVIDAD');


recorrerObjeto(curso);

function recorrerObjeto(objeto) {
  for (let propiedad in objeto) {
    if (typeof objeto[propiedad] === 'object') {
      console.log(`🔵 Objeto recursiva ${
        propiedad}`)
      recorrerObjeto(objeto[propiedad]); // llamada recursiva
    } else {
      console.log(propiedad + ': ' + objeto[propiedad]);
    }
  }
}





























