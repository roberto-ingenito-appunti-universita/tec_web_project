import Idea from "../models/idea.js";
import User from "../models/user.js"
import { } from '../models/model_config.js'; // senza questo import, la creazione fallisce

const users = [
    { username: 'johnDoe123', password: 'password123!', firstName: 'John', lastName: 'Doe' },
    { username: 'jane_smith', password: 'securePass45', firstName: 'Jane', lastName: 'Smith' },
    { username: 'alice1987', password: 'aliceSecure*87', firstName: 'Alice', lastName: 'Johnson' },
    { username: 'bob_brown', password: 'bobIsTheBest!9', firstName: 'Bob', lastName: 'Brown' },
    { username: 'charlie_Miller', password: 'charlieM123!', firstName: 'Charlie', lastName: 'Miller' },
    { username: 'davidClark', password: 'davidC_pass4', firstName: 'David', lastName: 'Clark' },
    { username: 'emily_Jones', password: 'emilyJones_56', firstName: 'Emily', lastName: 'Jones' },
    { username: 'frank1984', password: 'frankSecure*84', firstName: 'Frank', lastName: 'White' },
    { username: 'grace_martin', password: 'graceSecure9', firstName: 'Grace', lastName: 'Martin' },
    { username: 'harry_potter', password: 'harryMagic!', firstName: 'Harry', lastName: 'Potter' }
];

const ideas = [
    { userFK: "johnDoe123", title: 'Sistema di Raccomandazione', description: 'Un sistema che suggerisce articoli in base alle preferenze dell\'utente.' },
    { userFK: "johnDoe123", title: 'App di Ricette', description: 'Una app mobile che offre ricette personalizzate in base agli ingredienti disponibili.' },
    { userFK: "johnDoe123", title: 'Piattaforma di E-learning', description: 'Una piattaforma per la creazione e la condivisione di corsi online.' },
    { userFK: "johnDoe123", title: 'Servizio di Car Sharing', description: 'Un servizio che permette agli utenti di noleggiare auto a breve termine in città.' },
    { userFK: "johnDoe123", title: 'Social Network per Animali', description: 'Un social network dedicato agli amanti degli animali domestici.' },
    { userFK: "johnDoe123", title: 'App per la Gestione delle Finanze', description: 'Una app per tracciare e gestire le proprie finanze personali.' },
    { userFK: "jane_smith", title: 'Piattaforma di Crowdfunding', description: 'Una piattaforma che consente agli utenti di finanziare progetti creativi.' },
    { userFK: "jane_smith", title: 'Sistema di Monitoraggio della Salute', description: 'Un sistema che monitora e analizza i dati sulla salute degli utenti.' },
    { userFK: "jane_smith", title: 'App per il Monitoraggio del Sonno', description: 'Una app che analizza e migliora la qualità del sonno.' },
    { userFK: "jane_smith", title: 'Marketplace di Artigianato', description: 'Un marketplace online per vendere e acquistare prodotti artigianali.' },
    { userFK: "jane_smith", title: 'App per la Prenotazione di Ristoranti', description: 'Una app che consente agli utenti di prenotare tavoli nei ristoranti.' },
    { userFK: "jane_smith", title: 'Sistema di Gestione del Progetto', description: 'Un software per la pianificazione e il monitoraggio dei progetti aziendali.' },
    { userFK: "jane_smith", title: 'Piattaforma di Noleggio di Attrezzature', description: 'Un sito web per noleggiare attrezzature da lavoro o da hobby.' },
    { userFK: "jane_smith", title: 'App per il Monitoraggio del Fitness', description: 'Una app che traccia le attività fisiche e il progresso degli utenti.' },
    { userFK: "jane_smith", title: 'Servizio di Consegna di Cibo', description: 'Un servizio che consegna pasti dai ristoranti direttamente a casa degli utenti.' },
    { userFK: "jane_smith", title: 'Piattaforma di Scambio di Lingue', description: 'Un sito web per praticare lingue straniere con madrelingua.' },
    { userFK: "davidClark", title: 'App per la Condivisione di Foto', description: 'Una app che permette agli utenti di condividere e commentare foto.' },
    { userFK: "davidClark", title: 'Sistema di Gestione degli Inventari', description: 'Un software per tracciare e gestire gli inventari aziendali.' },
    { userFK: "davidClark", title: 'App per la Pianificazione dei Viaggi', description: 'Una app che aiuta a pianificare itinerari di viaggio personalizzati.' },
    { userFK: "davidClark", title: 'Piattaforma di Vendita di Biglietti', description: 'Un sito web per acquistare e vendere biglietti per eventi.' },
    { userFK: "grace_martin", title: 'Servizio di Consulenza Finanziaria', description: 'Un servizio online che offre consulenze finanziarie personalizzate.' },
    { userFK: "grace_martin", title: 'App per la Gestione delle Abitudini', description: 'Una app che aiuta gli utenti a creare e mantenere abitudini positive.' },
    { userFK: "grace_martin", title: 'Piattaforma di Condivisione di Conoscenze', description: 'Un sito web per condividere e accedere a risorse educative.' },
    { userFK: "grace_martin", title: 'Sistema di Gestione dei Clienti', description: 'Un software per gestire le relazioni con i clienti e le vendite.' },
    { userFK: "grace_martin", title: 'App di Meditazione', description: 'Una app che guida gli utenti attraverso sessioni di meditazione e rilassamento.' },
    { userFK: "grace_martin", title: 'Piattaforma di Scambio di Libri', description: 'Un sito web per scambiare e donare libri usati.' },
    { userFK: "grace_martin", title: 'Sistema di Gestione delle Risorse Umane', description: 'Un software per gestire le risorse umane e i processi di assunzione.' },
    { userFK: "harry_potter", title: 'App per il Monitoraggio delle Spese', description: 'Una app che traccia le spese quotidiane e aiuta a gestire il budget.' },
    { userFK: "harry_potter", title: 'Piattaforma di Riciclaggio', description: 'Un sito web che facilita il riciclaggio di materiali e rifiuti.' },
    { userFK: "harry_potter", title: 'Servizio di Abbonamento a Prodotti', description: 'Un servizio che fornisce prodotti mensili in abbonamento, come snack o cosmetici.' }
];

await User.bulkCreate(users);

await Idea.bulkCreate(ideas);
