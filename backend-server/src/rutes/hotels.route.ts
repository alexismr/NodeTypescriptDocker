
import { Request, Response, Router } from 'express';
import HotelService  from '../services/hotel.service';
import { HotelModel } from '../model/hotel';

class HotelRouter {
  public router: Router;
  private _hotlService: HotelService;

  constructor() {
    this._hotlService = new HotelService();
    this.router = Router();
    this.routes();
  }

  all(req: Request, res: Response){
    res.status(200).json({
        ok: true,
        mensaje: 'Peticion realizada correctamente (Hoteles)',
        response:  this._hotlService.getAlldata()
    });
  }

  public filters(req: Request, res: Response): void {
    const star = req.params.star;
    const name = req.params.name;

    let responseFilter = this._hotlService.getDataFilters(star,name);
    if(!responseFilter && responseFilter.length < 1  ){
      res.status(400).json({
          ok: false,
          mensaje: 'ningun registro'
      });
   }
   else{
      res.status(200).json({
          ok: true,
          mensaje: 'Peticion realizada correctamente filters',
          response: responseFilter
      });
   }

  }

  public create(req: Request, res: Response): void {
     this._hotlService.create(req.body[0]);
  }

  public update(req: Request, res: Response): void {
    const id: string = req.params.id;
    let response = this._hotlService.update(id ,req.body[0]);

    if(response) {
      res.status(200).json({
        ok: true,
        mensaje: 'operacion exitosa'
      });
    }
    else{
      res.status(400).json({
        ok: true,
        mensaje: 'error al  actualizar el hotel'
      });
    }

    
  }

  public delete(req: Request, res: Response): void {
    const id: string = req.params.id;
    let resp = this._hotlService.deleteElement(id);
    if (resp) res.status(200).json({ ok: true, mensaje: 'se elimino correctamente' });
    else {
      res.status(500).json({
        ok: false,
        mensaje: 'operacion error'
      });
    }
  }

  // set up our routes
  public routes() {
    this.router.get('/',  (req, res) => this.all(req, res))
    .get('/:star/:name?', (req, res) => this.filters(req, res))
    .post('/',(req, res) => this.create(req, res))
    .put('/:id', (req, res) => this.update(req, res))
    .delete('/:id', (req, res) => this.delete(req, res));
  }

}

const hotelRouter = new HotelRouter();
hotelRouter.routes();

export default hotelRouter.router;
