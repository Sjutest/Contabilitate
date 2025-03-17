document.addEventListener('DOMContentLoaded', () => {
    // Gestionare formular factură
    document.getElementById('facturaForm').addEventListener('submit', function(event) {
        event.preventDefault();
        const tipFactura = document.getElementById('tipFactura').value;
        const client = document.getElementById('client').value;
        const suma = document.getElementById('suma').value;
        alert(`Factură emisă: ${tipFactura} pentru ${client} în valoare de ${suma} RON.`);
        this.reset();
    });

    // Gestionare formular contabilitate
    document.getElementById('contabilitateForm').addEventListener('submit', function(event) {
        event.preventDefault();
        const tipOperatiune = document.getElementById('tipOperatiune').value;
        const sumaOperatiune = document.getElementById('sumaOperatiune').value;
        alert(`Operațiune înregistrată: ${tipOperatiune} de ${sumaOperatiune} RON.`);
        this.reset();
    });

    // Gestionare formular clienți
    document.getElementById('clientForm').addEventListener('submit', function(event) {
        event.preventDefault();
        const numeClient = document.getElementById('numeClient').value;
        const tipClient = document.getElementById('tipClient').value;
        alert(`Client/Furnizor adăugat: ${numeClient} (${tipClient}).`);
        this.reset();
    });

    // Gestionare formular stocuri
    document.getElementById('stocForm').addEventListener('submit', function(event) {
        event.preventDefault();
        const produs = document.getElementById('produs').value;
        const cantitate = document.getElementById('cantitate').value;
        alert(`Produs adăugat: ${produs} cu cantitatea de ${cantitate}.`);
        this.reset();
    });

    // Gestionare formular salarii
    document.getElementById('salariiForm').addEventListener('submit', function(event) {
        event.preventDefault();
        const numeAngajat = document.getElementById('numeAngajat').value;
        const salariu = document.getElementById('salariu').value;
        alert(`Salariu calcul at pentru ${numeAngajat}: ${salariu} RON.`);
        this.reset();
    });

    // Gestionare formular rapoarte
    document.getElementById('rapoarteForm').addEventListener('submit', function(event) {
        event.preventDefault();
        const tipRaport = document.getElementById('tipRaport').value;
        alert(`Raport generat: ${tipRaport}.`);
        this.reset();
    });
});