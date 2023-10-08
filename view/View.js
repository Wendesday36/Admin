class View {
  constructor(szuloelem, kulcsok) {
    this.szuloelem = szuloelem;
    this.osszeallit(kulcsok);
  }
  osszeallit(kulcsok) {
    let txt = "";
    txt = "<div class = 'table-responsive'>";
    txt += "<table class = 'table table-striped table-bordered table-hover'>";

    for (let index = 0; index < kulcsok.length; index++) {
      txt += `<tr>`;

      // const object = kulcsok[index];
      for (const key in kulcsok) {
        const element = kulcsok[key];
        txt += `<form action="#">
          <input type="text" name="${element}"><br><br>`;
      }
      txt += `</tr>`;
    }
    txt += "</table>";
    txt += "</div>";
    this.szuloelem.append(txt);
  }
}

export default View;
