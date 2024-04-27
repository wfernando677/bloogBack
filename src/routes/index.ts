import { Router } from "express";
import { readdirSync } from 'fs';

const PATH_ROUTER = `${__dirname}` //trae la ruta en donde estamos en este momento, en la carpeta que estamos

const router = Router();

const cleanFileName = (fileName: string) => {
    const file = fileName.split('.').shift(); // nos devuelve todo lo que tenga antes del punto eplo index, item
    return file;
}

//esta funcion me devuelve los archivos que hay en routes
readdirSync(PATH_ROUTER).filter((fileName) => {
    const cleanName = cleanFileName(fileName);
    if (cleanName !== 'index') {
        import(`./${cleanName}`).then((mododuleRouter) => {
            router.use(`/${cleanName}`, mododuleRouter.router)
        })
    }
})

export { router };