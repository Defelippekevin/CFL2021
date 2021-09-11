var Dvd = /** @class */ (function () {
    function Dvd(prendido, play, marca, minutos) {
        this.estaPrendido = prendido;
        this.play_pause = play;
        this.marca = marca;
        this.minutoActual = minutos;
    }
    Dvd.prototype.prenderOApagarDVD = function () {
        if (this.estaPrendido)
            this.estaPrendido = false;
        else
            this.estaPrendido = true;
    };
    Dvd.prototype.correrOPausar = function () {
        if (this.play_pause)
            this.estaPrendido = false;
        else
            this.estaPrendido = true;
    };
    Dvd.prototype.adelantarPelicula = function (minutos) {
        this.minutoActual += minutos;
    };
    Dvd.prototype.retrocederPelicula = function (minutos) {
        this.minutoActual -= minutos;
    };
    return Dvd;
}());
var MiDvd = new Dvd(false, false, "sony", 70);
var Dvd1 = new Dvd(true, true, "samsung", 80);
MiDvd.prenderOApagarDVD();
Dvd1.correrOPausar();
console.log(MiDvd);
console.log(Dvd1);
MiDvd.adelantarPelicula(40);
Dvd1.retrocederPelicula(50);
console.log(MiDvd);
console.log(Dvd1);
