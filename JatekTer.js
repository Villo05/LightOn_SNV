import { Lampa } from './Lampa.js';

export class JatekTer {
    constructor() {
        this.meret = 3; 
        this.lampak = [];
        this.szuloElem = document.querySelector(".palya");
        this.uzenetElem = document.querySelector(".uzenet");
        
        this.jatekInditas();

        window.addEventListener("kattintas", (event) => {
            const kattintott = event.detail.index;
            this.szomszedokKezelese(kattintott);
            this.gyozelemEllenorzes();
        });

        document.querySelector(".gomb").addEventListener("click", () => this.jatekInditas());
    }

    jatekInditas() {
        this.szuloElem.innerHTML = "";
        this.lampak = [];
        this.uzenetElem.innerText = "";

        for (let i = 0; i < this.meret * this.meret; i++) {
            const kezdoAllapot = Math.random() < 0.2;
            const ujLampa = new Lampa(i, kezdoAllapot, this.szuloElem);
            this.lampak.push(ujLampa);
        }
    }

    szomszedokKezelese(id) {
        const sor = Math.floor(id / this.meret);
        const oszlop = id % this.meret;

        const celpontok = [id];
        if (sor > 0) celpontok.push(id - this.meret);
        if (sor < this.meret - 1) celpontok.push(id + this.meret);
        if (oszlop > 0) celpontok.push(id - 1);
        if (oszlop < this.meret - 1) celpontok.push(id + 1);

        celpontok.forEach(idx => {
            if (this.lampak[idx]) {
                this.lampak[idx].setAllapot();
            }
        });
    }

    gyozelemEllenorzes() {
        const vanEEgo = this.lampak.some(l => l.allapot);
        if (!vanEEgo) {
            this.uzenetElem.innerText = "Hurrá, meghosszabítottad a Föld életét!";
        }
    }
}
