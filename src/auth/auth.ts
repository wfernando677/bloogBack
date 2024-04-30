import { Request, Response, NextFunction } from 'express';

const auth = (req: Request, res: Response, next: NextFunction) => {
    if (req.headers.authorization === process.env.TOKEN) {
        next();
    }
    else {
        res.json({ msg: 'No auth' })
    }

};

export { auth };
