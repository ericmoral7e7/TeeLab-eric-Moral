import { camisetas } from '../data/camisetas.js';

// // TODO
// function validateNota(obj) {
//     if (!obj || typeof obj !== "object") return "Body inválido";
//     if (!obj.studentId || !obj.modulo || !obj.nota) return "Faltan campos, la petición debe contener: id, studentId, modulo, nota";
//     return null;
// }

// const existsStudent = (id) => students.some(s => s.id === id);

export function getCamisetas(filters) {
    let camisetasResultado = camisetas;

    console.log(filters.color)
    if (filters.color) {
        camisetasResultado = camisetasResultado.filter(c => c.colores.includes(filters.color))
    }

    if (filters.talla) {
        camisetasResultado = camisetasResultado.filter(c => c.talla === filters.talla);
    }

    if (filters.tag) {
        camisetasResultado = camisetasResultado.filter(c => c.tag === filters.tag);
    }

    return camisetasResultado
}

export function ordenarCamisetas(camisetasArray, sort) {
    switch (sort) {
        case "precio_asc":
            return [...camisetasArray].sort((a, b) => a.precioBase - b.precioBase);

        case "precio_desc":
            return [...camisetasArray].sort((a, b) => b.precioBase - a.precioBase);

        case "nombre_asc":
            return [...camisetasArray].sort((a, b) =>
                a.nombre.localeCompare(b.nombre, "es", { sensitivity: "base" })
            );

        case "nombre_desc":
            return [...camisetasArray].sort((a, b) =>
                b.nombre.localeCompare(a.nombre, "es", { sensitivity: "base" })
            );

        default:
            return { error: "sort no existente", status: 400 };
    }
}

export function getFiltered() { return camisetas; }

export function getById(id) { return camisetas.filter(camiseta => camiseta.id === id); }
