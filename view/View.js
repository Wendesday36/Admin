class View{
    
    constructor(lista,szuloelem,kulcsok){
        this.szuloelem = szuloelem
        this.osszeallit(lista,kulcsok)
    }
    osszeallit(lista, kulcsok) {
        let txt = "";
        txt = "<div class = 'table-responsive'>";
        txt += "<table class = 'table table-striped table-bordered table-hover'>";
        txt += "<thead class = 'table-dark'> <tr>";
        for (const key in kulcsok) {
            //const element = this.kulcsok[key];
          txt += `<th id = '${key}' > ${kulcsok[key]} ⇅ </th>`;
        }
        txt += "<th></th></tr></thead>";

        for (let index = 0; index < lista.length; index++) {
          txt += `<tr>`;

        const object = lista[index];
          for (const key in object) {
            const element = object[key];
            txt += `<form action="#">
            <input type="text" name="${key}"><br><br>`
          }
          txt += `</tr>`;
        }
        txt += "</table>";
        txt += "</div>";
        this.szuloelem.append(txt)
      }
}

export default View