let nota, suma, promedio, contador: number;
suma = 0;
for (contador = 1; contador <= 5; contador++) {
  nota = Number(prompt("Ingrese una nota: "));
  suma += nota;
}
promedio = suma / 5;
console.log("El promedio de las notas es: " + promedio);
