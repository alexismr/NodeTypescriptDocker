"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const hotel_service_1 = require("../services/hotel.service");
class HotelRouter {
    constructor() {
        this._hotlService = new hotel_service_1.default();
        this.router = express_1.Router();
        this.routes();
    }
    all(req, res) {
        res.status(200).json({
            ok: true,
            mensaje: 'Peticion realizada correctamente (Hoteles)',
            response: this._hotlService.getAlldata()
        });
    }
    filters(req, res) {
        const star = req.params.star;
        const name = req.params.name;
        let responseFilter = this._hotlService.getDataFilters(star, name);
        if (!responseFilter && responseFilter.length < 1) {
            res.status(400).json({
                ok: false,
                mensaje: 'ningun registro'
            });
        }
        else {
            res.status(200).json({
                ok: true,
                mensaje: 'Peticion realizada correctamente filters',
                response: responseFilter
            });
        }
    }
    create(req, res) {
        // const firstName: string = req.body.firstName;
        // const lastName: string = req.body.lastName;
        // const username: string = req.body.username;
        // const email: string = req.body.email;
        // const password: string = req.body.password;
        console.log(req.body);
        // const user = new User({
        //   firstName,
        //   lastName,
        //   username,
        //   email,
        //   password
        // });
        // user.save()
        // .then((data) => {
        //   res.status(201).json({ data });
        // })
        // .catch((error) => {
        //   res.status(500).json({ error });
        // });
    }
    update(req, res) {
        const id = req.params.id;
        console.log('rutas' + req.body);
        //let response = this._hotlService.update(id ,req.body);
    }
    delete(req, res) {
        const id = req.params.id;
        let resp = this._hotlService.deleteElement(id);
        if (resp)
            res.status(200).json({ ok: true, mensaje: 'se elimino correctamente' });
        else {
            res.status(500).json({
                ok: false,
                mensaje: 'operacion error'
            });
        }
    }
    // set up our routes
    routes() {
        this.router.get('/', (req, res) => this.all(req, res))
            .get('/:star/:name?', (req, res) => this.filters(req, res))
            .post('/', (req, res) => this.create(req, res))
            .put('/:id', (req, res) => this.update(req, res))
            .delete('/:id', (req, res) => this.delete(req, res));
    }
}
const hotelRouter = new HotelRouter();
hotelRouter.routes();
exports.default = hotelRouter.router;
//# sourceMappingURL=hotels.route.js.map