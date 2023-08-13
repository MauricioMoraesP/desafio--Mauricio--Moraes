//Classe itens do cardápio
 class Itens {

    constructor(codigo, description, value ) {
        this.codigo = codigo;
        this.description=description;
        this.value=value;
    }
}
//Lista de itens dos principais e dos que não são principais, porém não são extras.
export const LISTAITENS= [
    new Itens("cafe", "Café", 3.00),
    new Itens("sanduiche", "Sanduíche", 6.50),
    new Itens("suco", "Suco Natural ", 6.20),
    new Itens("combo1", " 1 Suco e 1 Sanduíche    ", 9.50),
    new Itens("combo2", "1 Café e 1 Sanduíche", 7.50),
    ];

    //Lista de itens extras
export   const LISTADEITENSEXTRAS= [
    new Itens("queijo", "(extra do Sanduíche)", 2.00),
    new Itens("chantily", "Chantily (extra do Café)", 1.50),
    ];
