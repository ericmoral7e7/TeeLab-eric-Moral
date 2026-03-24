import * as comandasService from '../services/comandas.service.js';


export function create(req, res) {
    let result = comandasService.create(req.body);

    if (result.error) {
        const status = result.status || 400;
        return res.status(status).json({ message: result.error });
    }

    res.json(result);
}

export function getAll(req, res) {
    console.log(comandasService.getAll())
    res.json(comandasService.getAll());
}

export function getById(req, res) {
    res.json(comandasService.getById(req.params.id));
}