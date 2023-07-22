import express, { Request, Response }  from 'express';


class App {
  public app: express.Express;

  constructor() {
    this.app = express();
    this.app.use(express.json());
    this.config();

    this.app.get(
      '/',
      async (_req: Request, res: Response): Promise<Response> => res.status(200).json(
        { message: 'Yeeeiiiii'} ),
    );
    // this.routes();
  }

  // private routes(): void {
  //   this.app.use(router);
  // }

  private config(): void {
      const accessControl: express.RequestHandler = (_req, res, next) => {
        res.header('Access-Control-Allow-Origin', '*');
        res.header('Access-Control-Allow-Methods', 'GET,POST,DELETE,OPTIONS,PUT,PATCH');
        res.header('Access-Control-Allow-Headers', '*');
        next();
      };
  
      this.app.use(express.json());
      this.app.use(accessControl);
    }
 
  public start(PORT: string | number): void {
    this.app.listen(PORT,
      () => console.log(`backend de EventHall up and running on PORT ${PORT} 🚀`));
  }
}

export { App };