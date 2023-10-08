import { LISTA } from "../adat.js";
import { KULCSLISTA } from "../adat.js";

class Model {
  #lista = [];
  #kulcs=[]

  constructor() {
    this.#lista = LISTA;
    this.#kulcs=KULCSLISTA
  }
  ujAdat(OBJ) {
    this.#lista.push(OBJ);
  }
  getList() {
    return this.#lista;
  }
  getKulcs(){
    return this.#kulcs
  }
}
export default Model;
