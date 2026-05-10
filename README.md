# Portfolio & CV - Ludovico Barberis

Benvenuto nel repository del mio sito web personale. Questo progetto serve come Portfolio digitale e Curriculum Vitae interattivo, progettato per mostrare i miei progetti, le mie competenze e il mio percorso professionale con un design moderno e minimalista.

## 🚀 Panoramica del Progetto

Il sito è un'applicazione web Single Page Application (SPA) che funge da vetrina per il mio lavoro come Software Developer. Il focus principale è sulla sezione **Progetti**, dove raccolgo e presento i lavori più significativi che ho sviluppato.

### Funzionalità Chiave

*   **Design Neo-brutalism**: Un'estetica minimalista estrema, pulita, con forte contrasto (bianco/nero) e tipografia audace.
*   **Portfolio Progetti**: Una griglia curata di card interattive che rimandano ai repository GitHub dei miei progetti.
*   **Navigazione Fluida**: Routing lato client per un'esperienza utente istantanea tra le sezioni "Home", "About Me" e "Gear".
*   **Animazioni Interattive**:
    *   Navbar con effetto "pillola" scorrevole che segue l'hover del mouse.
    *   Card dei progetti con effetti di elevazione e ombra al passaggio del mouse.
    *   Link contatti con stile a pillola e animazione di scaling.
    *   Menu a tendina per il selettore del tema con effetto *glassmorphism*.
*   **Sezione "About Me" Completa**: Include timeline delle esperienze lavorative, lista delle competenze tecniche e percorso formativo.
*   **Pagina "Gear"**: Una vetrina personale dedicata al mio setup quotidiano, divisa in categorie: Desk Setup, App Setup, AI Tools ed Everyday Carry.
*   **Supporto Dark Mode**: Un *Theme Switcher* integrato nella Navbar per alternare le modalità Chiaro, Scuro e Sistema (che si adatta alle preferenze dell'OS), gestito tramite Context API.

## 🛠️ Tecnologie e Framework

Il progetto è costruito utilizzando un moderno stack tecnologico per garantire performance, manutenibilità e scalabilità:

*   **[React](https://react.dev/)**: Libreria JavaScript per la costruzione dell'interfaccia utente.
*   **[Vite](https://vitejs.dev/)**: Build tool di nuova generazione per un ambiente di sviluppo rapido.
*   **[React Router](https://reactrouter.com/)**: Gestione del routing e della navigazione all'interno dell'applicazione.
*   **Vanilla CSS**: Styling personalizzato basato su variabili CSS per un controllo totale del design system e gestione fluida della Dark Mode senza dipendenze pesanti.
*   **[Lucide React](https://lucide.dev/)**: Libreria di icone SVG leggere e personalizzabili.

## 💻 Installazione e Avvio Locale

Se sei uno sviluppatore e vuoi clonare questo repository per vedere come funziona in locale, segui questi passaggi:

### Prerequisiti

Assicurati di avere installato sul tuo computer:
*   [Node.js](https://nodejs.org/) (versione 18 o superiore raccomandata)
*   npm (incluso con Node.js)

### Passaggi

1.  **Clona il repository**:
    ```bash
    git clone https://github.com/Ludovico-B/lb-web-CV.git
    cd lb-web-CV
    ```

2.  **Installa le dipendenze**:
    ```bash
    npm install
    ```

3.  **Avvia il server di sviluppo**:
    ```bash
    npm run dev
    ```

4.  **Visualizza il sito**:
    Apri il tuo browser e visita l'indirizzo mostrato nel terminale (solitamente `http://localhost:5173`).

### Build per Produzione

Per creare una versione ottimizzata per la produzione:

```bash
npm run build
```

I file compilati si troveranno nella cartella `dist`.

---

© 2026 Ludovico Barberis. All rights reserved.
