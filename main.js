//Programa que cuenta la cantidad de presentes y ausentes que tienen los alumnos en un lapso de 5 clases(Letra "P" significa presente, "otra cosa ausente")
let cantidad = prompt("¿Cuántos alumnos son?");
let alumnosTotales = [];
for (i = 0; i < cantidad; i++) {
    alumnosTotales[i] = [prompt("nombre del alumno" + (i + 1)), 0]
}
const tomarAsistencia = (nombre, p) => {
    let presente = prompt(nombre);
    if (presente == "p" || presente == "P") {
        alumnosTotales[p][1]++;
    }
}
for (i = 0; i < 5; i++) {
    for (alumno in alumnosTotales) {
        tomarAsistencia(alumnosTotales[alumno][0], alumno)
    }
}
for (alumno in alumnosTotales) {
    let resultado = `${alumnosTotales[alumno][0]}:<br>
    _______Asistencias: ${alumnosTotales[alumno][1]}<br>
    _______Ausencias:${5 - parseInt(alumnosTotales[alumno][1])}<br>
    `
    document.write(resultado)

}