export class Lampa {
    constructor(index, allapot, szuloElem) {
        this.index = index;
        this.allapot = allapot;
        
        this.elem = document.createElement("div");
        this.elem.classList.add("lampa");
        
        szuloElem.appendChild(this.elem);
        this.megjelenites();

        this.elem.addEventListener("click", () => {
            this.kattintasTrigger();
        });
    }

    megjelenites() {
        if (this.allapot) {
            this.elem.classList.add("felkapcsolva");
            this.elem.classList.remove("lekapcsolva");
        } else {
            this.elem.classList.add("lekapcsolva");
            this.elem.classList.remove("felkapcsolva");
        }
    }

    setAllapot() {
        this.allapot = !this.allapot;
        this.megjelenites();
    }

    kattintasTrigger() {
        const esemeny = new CustomEvent("kattintas", { 
            detail: { index: this.index } 
        });
        window.dispatchEvent(esemeny);
    }
}
