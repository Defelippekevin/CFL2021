import { Injectable } from '@nestjs/common';

@Injectable()
export class ProductoService {
    public getProductos(): any{
        let arrayCompras=[
            {
                "producto": "Pera",
                "precio": 50,
                "descripcion": "muy rica pera"
            },
            {
                "producto": "mandarina",
                "precio": 70,
                "descripcion": "medias agrias"
            },
            {
                "producto": "naranja",
                "precio": 60,
                "descripcion": "bien jugosas"
            },
            {
                "producto": "bananas",
                "precio": 40,
                "descripcion": "riquisimas"
            },
            {
                "producto": "kiwi",
                "precio": 80,
                "descripcion": "ideal para una ensalada de fruta"
            },
            {
                "producto": "sandia",
                "precio": 190,
                "descripcion": "re contra dulces0"
            }
        ]; 
        return arrayCompras;
    }
}
