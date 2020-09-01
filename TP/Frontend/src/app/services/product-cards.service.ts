import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductCardsService {
 

  constructor(private http: HttpClient) { }

  readonly baseURL = 'http://localhost:3000/api/productos';

  getProductos() {
    const URL = this.baseURL; 
    return this.http.get(URL);
  }

  getProducto(idProducto){
    const URL = this.baseURL+'/'+idProducto;
    return this.http.get(URL);
  }

  getProductosByDescripcion(searchKey) {
    const URL = this.baseURL + '/descripcion/' + searchKey;
    return this.http.get(URL);
  }

  getProductosByRubro(id_rubro) {
    const URL = this.baseURL; 
    return this.http.get(URL + '/rubro/' + id_rubro)
  }

  getProductosByEmpresa(id_vendedor) {
    const URL = this.baseURL + '/empresas/' + id_vendedor;
    return this.http.get(URL);

  }

  deleteProducto(producto:any) {
    const URL = this.baseURL +'/' + producto._id;
    return this.http.delete(URL);
  }

  createProducto(producto: any) {
    const body = {
      url: producto.url,
      nombre: producto.nombre,
      rubro: producto.rubro,
      idVendedor: producto.idVendedor,
      descripcion: producto.descripcion,
      stock: producto.stock,
      precio: producto.precio,
    };
    return this.http.post(this.baseURL, body, {});
  }

  editProducto(producto: any) {
    const URL = this.baseURL +'/'+ producto.idProducto;
    const body = {
      url: producto.url,
      _id: producto.idProducto,
      nombre: producto.nombre,
      rubro: producto.rubro,
      idVendedor: producto.idVendedor,
      descripcion: producto.descripcion,
      stock: producto.stock,
      precio: producto.precio,
    };
    return this.http.put(URL, body, {});
  }


  editUser(producto:any) {
    const URL = this.baseURL +'/' + producto.id;
    const body = {
      url: producto.url,
      _id: producto._id,
      nombre: producto.nombre,
      rubro: producto.rubro,
      idVendedor: producto.idVendedor,
      descripcion: producto.descripcion,
      stock: producto.stock,
      precio: producto.precio,
    };
    return this.http.put(URL, body, {});
  }

}
/*
  getProducts(idRubroBuscado){
  //acá debería llamar a un procedimiento que recupere de la BD
  this.list = [{  idProducto: 1, idRubro: idRubroBuscado,  idEmpresa: 1, nombre: "Notebook", imagen: "https://http2.mlstatic.com/notebook-lenovo-i3-8130u-4gb-1tb-156-pulgadas-dvdrw-D_NQ_NP_872956-MLA42418883269_062020-F.webp", precio: 50000,  descripcion: "Es una notebook, un producto muy bueno y de alta calidad.", stock: 25 },
          {  idProducto: 2, idRubro: idRubroBuscado,  idEmpresa: 1, nombre: "Bicicleta", imagen: "https://http2.mlstatic.com/mountain-bike-top-mega-rodado26-modelo-rowen-envios-gratis-D_NQ_NP_947011-MLA40463784361_012020-F.webp", precio: 5000,  descripcion: "Es una bicicleta super rápida, para andar a altas velocidades.", stock: 3 },
          {  idProducto: 3, idRubro: idRubroBuscado,  idEmpresa: 1, nombre: "Celular", imagen: "https://http2.mlstatic.com/D_NQ_NP_2X_961664-MLA31964654932_082019-F.webp", precio: 21000,  descripcion: "Es una bicicleta super rápida, para andar a altas velocidades.", stock: 3 },
          {  idProducto: 3, idRubro: idRubroBuscado,  idEmpresa: 1, nombre: "Consola de videojuegos zarpada", imagen: "https://http2.mlstatic.com/D_NQ_NP_2X_743314-MLA40175756183_122019-F.webp  ", precio: 17999, descripcion: "Es una bicicleta super rápida, para andar a altas velocidades.", stock: 3 },
          {  idProducto: 1, idRubro: idRubroBuscado,  idEmpresa: 1, nombre: "Notebook", imagen: "https://http2.mlstatic.com/notebook-intel-cloudbook-4gb-64gb-enova-windows-cuotas-D_NQ_NP_978770-MLA42361518173_062020-F.webp", precio: 53200,  descripcion: "Es una bicicleta super rápida, para andar a altas velocidades.", stock: 3 },
          {  idProducto: 2, idRubro: idRubroBuscado,  idEmpresa: 1, nombre: "Bicicleta", imagen: "https://http2.mlstatic.com/mountain-bike-rodado-26-neptune-topmega-envios-gratis--D_NQ_NP_979529-MLA40849435663_022020-F.webp", precio: 25000,  descripcion: "Es una bicicleta super rápida, para andar a altas velocidades.", stock: 3 },
          {  idProducto: 3, idRubro: idRubroBuscado,  idEmpresa: 1, nombre: "Celular", imagen: "https://cnet1.cbsistatic.com/img/_RKt08nA2AkU4hgTJHtoOwsuKAI=/980x0/2020/05/02/f7bad802-c8c5-4a3d-8977-d5848a515c48/galaxy-a51.jpg", precio: 32199,  descripcion: "Es una bicicleta super rápida, para andar a altas velocidades.", stock: 3 },
          {  idProducto: 2, idRubro: idRubroBuscado,  idEmpresa: 1, nombre: "Bicicleta", imagen: "https://http2.mlstatic.com/mountain-bike-rodado-26-neptune-topmega-envios-gratis--D_NQ_NP_979529-MLA40849435663_022020-F.webp", precio: 15000,  descripcion: "Es una bicicleta super rápida, para andar a altas velocidades.", stock: 3 },
          {  idProducto: 2, idRubro: idRubroBuscado,  idEmpresa: 1, nombre: "Bicicleta", imagen: "https://http2.mlstatic.com/bicicleta-mountain-bike-rodado-26-doble-suspension-forest-cuadro-y-llantas-reforzados-cambios-colores-happy-buy-D_NQ_NP_744114-MLA32928926620_112019-F.webp",  precio: 25000, descripcion: "Es una bicicleta super rápida, para andar a altas velocidades.", stock: 3 },
          {  idProducto: 3, idRubro: idRubroBuscado,  idEmpresa: 1, nombre: "Celular", imagen: "https://cnet1.cbsistatic.com/img/_RKt08nA2AkU4hgTJHtoOwsuKAI=/980x0/2020/05/02/f7bad802-c8c5-4a3d-8977-d5848a515c48/galaxy-a51.jpg",  precio: 35000, descripcion: "Es una bicicleta super rápida, para andar a altas velocidades.", stock: 3 },
          {  idProducto: 2, idRubro: idRubroBuscado,  idEmpresa: 1, nombre: "Bicicleta", imagen: "https://http2.mlstatic.com/mountain-bike-top-mega-rodado26-modelo-rowen-envios-gratis-D_NQ_NP_947011-MLA40463784361_012020-F.webp",  precio: 17888, descripcion: "Es una bicicleta super rápida, para andar a altas velocidades.", stock: 3 },
          {  idProducto: 2, idRubro: idRubroBuscado,  idEmpresa: 1, nombre: "Bicicleta", imagen: "https://http2.mlstatic.com/mountain-bike-top-mega-rodado26-modelo-rowen-envios-gratis-D_NQ_NP_947011-MLA40463784361_012020-F.webp",  precio: 17888, descripcion: "Es una bicicleta super rápida, para andar a altas velocidades.", stock: 3 },
          {  idProducto: 2, idRubro: idRubroBuscado,  idEmpresa: 1, nombre: "Bicicleta", imagen: "https://http2.mlstatic.com/bicicleta-mountain-bike-rodado-26-doble-suspension-forest-cuadro-y-llantas-reforzados-cambios-colores-happy-buy-D_NQ_NP_744114-MLA32928926620_112019-F.webp",  precio: 25000, descripcion: "Es una bicicleta super rápida, para andar a altas velocidades.", stock: 3 },
          {  idProducto: 3, idRubro: idRubroBuscado,  idEmpresa: 1, nombre: "Celular", imagen: "https://cnet1.cbsistatic.com/img/_RKt08nA2AkU4hgTJHtoOwsuKAI=/980x0/2020/05/02/f7bad802-c8c5-4a3d-8977-d5848a515c48/galaxy-a51.jpg",  precio: 35000, descripcion: "Es una bicicleta super rápida, para andar a altas velocidades.", stock: 3 },
          {  idProducto: 2, idRubro: idRubroBuscado,  idEmpresa: 1, nombre: "Bicicleta", imagen: "https://http2.mlstatic.com/mountain-bike-top-mega-rodado26-modelo-rowen-envios-gratis-D_NQ_NP_947011-MLA40463784361_012020-F.webp",  precio: 17888, descripcion: "Es una bicicleta super rápida, para andar a altas velocidades.", stock: 3 },
          {  idProducto: 2, idRubro: idRubroBuscado,  idEmpresa: 1, nombre: "Bicicleta", imagen: "https://http2.mlstatic.com/mountain-bike-top-mega-rodado26-modelo-rowen-envios-gratis-D_NQ_NP_947011-MLA40463784361_012020-F.webp",  precio: 17888, descripcion: "Es una bicicleta super rápida, para andar a altas velocidades.", stock: 3 },
        ]

  return this.list;
  }
*/