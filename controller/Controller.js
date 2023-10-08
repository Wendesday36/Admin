import { LISTA } from "../adat.js";
import Model from "../model/Model.js";
import { KULCSLISTA } from "../adat.js";
import View from "../view/View.js";

class Controller {
  constructor() {
    const MODEL = new Model(LISTA,KULCSLISTA);
    const VIEW = new View(MODEL.getList(),$("article"),MODEL.getKulcs())
    
  }
}

export default Controller;
