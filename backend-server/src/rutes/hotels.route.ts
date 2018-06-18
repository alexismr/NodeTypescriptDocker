
import { Request, Response, Router } from 'express';
import HotelService  from '../services/hotel.service';

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

  public update(req: Request, res: Response): void {
    const id: string = req.params.id;

    console.log('rutas' + req.body )
    //let response = this._hotlService.update(id ,req.body);

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
