const usuarios = [];

module.exports = class User {
    //Constructor de la clase. Sirve para crear un nuevo objeto, y en él se definen las propiedades del modelo
    constructor(nuevo_usario, nuevo_passwd, nuevo_nombre) {
        this.usuario = nuevo_usario;
        this.password = nuevo_passwd;
        this.nombre = nuevo_nombre;
    }

    //Este método servirá para guardar de manera persistente el nuevo objeto.
    save() {
        usuarios.push(this);
        console.log(usuarios);
    }

    //Este método servirá para devolver los objetos del almacenamiento persistente.
    static login(usuario, password) {
        return true;
    }
};
