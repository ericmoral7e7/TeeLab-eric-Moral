import * as camisetasService from '../services/camisetas.service.js';

export function get(req, res) {

    const filters = req.query; // Aquí llegan los query params

    let camisetas = camisetasService.getCamisetas(filters);

    if (req.query.sort) {
        camisetas = camisetasService.ordenarCamisetas(camisetas, req.query.sort)
    }
    
    res.json(camisetas);
}

export function getById(req, res) {
    const camiseta = camisetasService.getById(Number(req.params.id));
    if (!camiseta) return res.status(404).json({ message: "Camiseta no trobada" });

    res.json(camiseta);
}