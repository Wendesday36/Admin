class ListaView{
    #lista={}
    #kulcsok={}
    constructor(szuloelem,lista,kulcsok){
        this.szuloelem = szuloelem
        this.#lista=lista
        this.#kulcsok=kulcsok
        this.#osszeallit()
    }
    #osszeallit() {
        let txt = "";
        txt = "<div class = 'table-responsive'>";
        txt += "<table class = 'table table-striped table-bordered table-hover'>";
        txt += "<thead class = 'table-dark'> <tr>";
        for (const key in this.#kulcsok) {
            //const element = this.kulcsok[key];
          txt += `<th id = '${key}' > ${this.#kulcsok[key]} ⇅ </th>`;
        }
        txt += "<th></th></tr></thead>";
        
        for (let index = 0; index < this.#lista.length; index++) {
            txt+="<th>"
          txt += `<tr>`;
            
          for (const key in this.#kulcsok) {
            const element = this.#kulcsok[key];
            txt += `<form action="#">
            <input type="text" name="${element}">`
          }
          txt += `</tr>`;
          txt+="</th>"
        }
        txt += "</table>";
        txt += "</div>";
        this.szuloelem.append(txt)
      }
      
}
export default ListaView