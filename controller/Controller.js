import { LISTA } from "../adat.js";
import Model from "../model/Model.js";
import { KULCSLISTA } from "../adat.js";
import View from "../view/View.js";
import ListaView from "../view/ListaView.js";

class Controller {
  constructor() {
    const MODEL = new Model(LISTA,KULCSLISTA);
    new View($("article"),MODEL.getKulcs())
    const LISTAVIEW = new ListaView($("article"),MODEL.getList(),MODEL.getKulcs())
    //this.megjelenit(MODEL.getList())
  
  }
  /* megjelenit(lista) {
    lista.forEach((elem,index) => {
      this.LISTAVIEW.osszeallitsor(elem,index);
    });
  } */
}

export default Controller;
