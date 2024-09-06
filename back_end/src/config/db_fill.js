import { Vote, Idea, User } from '../models/model_config.js'; // senza questo import, la creazione fallisce

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
    { userFK: "johnDoe123", title: 'Sistema di Raccomandazione', description: '<p>Un sistema che suggerisce articoli in base alle preferenze dell\'utente.</p>' },
    { userFK: "johnDoe123", title: 'App di Ricette', description: '<p>Una <em>app mobile</em> che offre <strong>ricette personalizzate</strong> in base agli ingredienti disponibili.</p>' },
    { userFK: "johnDoe123", title: 'Piattaforma di E-learning', description: '<p><strong>Una piattaforma</strong> per la creazione e la condivisione di corsi online.</p>' },
    { userFK: "johnDoe123", title: 'Servizio di Car Sharing', description: '<p>Un servizio che permette agli utenti di noleggiare auto a breve termine in città.</p>' },
    { userFK: "johnDoe123", title: 'Social Network per Animali', description: '<p>Un social network dedicato agli amanti degli <span style="text-decoration: underline;">animali domestici</span>.</p>' },
    { userFK: "johnDoe123", title: 'App per la Gestione delle Finanze', description: '<p>Una <em>app</em> per tracciare e gestire le proprie <strong>finanze personali</strong>.</p>' },
    { userFK: "jane_smith", title: 'Piattaforma di Crowdfunding', description: '<p>Una piattaforma che consente agli utenti di finanziare progetti creativi.</p>' },
    { userFK: "jane_smith", title: 'Sistema di Monitoraggio della Salute', description: '<p>Un sistema che <span style="text-decoration: underline;">monitora</span> e analizza i dati sulla salute degli utenti.</p>' },
    { userFK: "jane_smith", title: 'App per il Monitoraggio del Sonno', description: '<p>Una <em>app</em> che analizza e migliora la qualità del sonno.</p>' },
    { userFK: "jane_smith", title: 'Marketplace di Artigianato', description: '<p>Un marketplace online per vendere e acquistare <strong>prodotti artigianali</strong>.</p>' },
    { userFK: "jane_smith", title: 'App per la Prenotazione di Ristoranti', description: '<p>Una <em>app</em> che consente agli utenti di prenotare tavoli nei ristoranti.</p>' },
    { userFK: "jane_smith", title: 'Sistema di Gestione del Progetto', description: '<p>Un software per la pianificazione e il monitoraggio dei progetti aziendali.</p>' },
    { userFK: "jane_smith", title: 'Piattaforma di Noleggio di Attrezzature', description: '<p>Un sito web per noleggiare attrezzature da lavoro o da hobby.</p>' },
    { userFK: "jane_smith", title: 'App per il Monitoraggio del Fitness', description: '<p>Una <em>app</em> che traccia le <strong>attività fisiche</strong> e il progresso degli utenti.</p>' },
    { userFK: "jane_smith", title: 'Servizio di Consegna di Cibo', description: '<p>Un servizio che consegna pasti dai ristoranti direttamente a casa degli utenti.</p>' },
    { userFK: "jane_smith", title: 'Piattaforma di Scambio di Lingue', description: '<p>Un sito web per praticare <span style="text-decoration: underline;">lingue straniere</span> con madrelingua.</p>' },
    { userFK: "davidClark", title: 'App per la Condivisione di Foto', description: '<p>Una <em>app</em> che permette agli utenti di condividere e commentare foto.</p>' },
    { userFK: "davidClark", title: 'Sistema di Gestione degli Inventari', description: '<p>Un software per tracciare e gestire gli <strong>inventari aziendali</strong>.</p>' },
    { userFK: "davidClark", title: 'App per la Pianificazione dei Viaggi', description: '<p>Una <em>app</em> che aiuta a pianificare itinerari di <strong>viaggio personalizzati</strong>.</p>' },
    { userFK: "davidClark", title: 'Piattaforma di Vendita di Biglietti', description: '<p>Un sito web per acquistare e vendere <span style="text-decoration: underline;">biglietti per eventi</span>.</p>' },
    { userFK: "grace_martin", title: 'Servizio di Consulenza Finanziaria', description: '<p>Un servizio online che offre <strong>consulenze finanziarie personalizzate</strong>.</p>' },
    { userFK: "grace_martin", title: 'App per la Gestione delle Abitudini', description: '<p>Una <em>app</em> che aiuta gli utenti a creare e mantenere <span style="text-decoration: underline;">abitudini positive</span>.</p>' },
    { userFK: "grace_martin", title: 'Piattaforma di Condivisione di Conoscenze', description: '<p>Un sito web per condividere e accedere a <strong>risorse educative</strong>.</p>' },
    { userFK: "grace_martin", title: 'Sistema di Gestione dei Clienti', description: '<p>Un software per gestire le relazioni con i clienti e le vendite.</p>' },
    { userFK: "grace_martin", title: 'App di Meditazione', description: '<p>Una <em>app</em> che guida gli utenti attraverso sessioni di <strong>meditazione e rilassamento</strong>.</p>' },
    { userFK: "grace_martin", title: 'Piattaforma di Scambio di Libri', description: '<p>Un sito web per scambiare e donare <span style="text-decoration: underline;">libri usati</span>.</p>' },
    { userFK: "grace_martin", title: 'Sistema di Gestione delle Risorse Umane', description: '<p>Un software per gestire le <strong>risorse umane</strong> e i processi di assunzione.</p>' },
    { userFK: "harry_potter", title: 'App per il Monitoraggio delle Spese', description: '<p>Una <em>app</em> che traccia le spese quotidiane e aiuta a gestire il budget.</p>' },
    { userFK: "harry_potter", title: 'Piattaforma di Riciclaggio', description: '<p>Un sito web che facilita il riciclaggio di <strong>materiali e rifiuti</strong>.</p>' },
    { userFK: "harry_potter", title: 'Servizio di Abbonamento a Prodotti', description: '<p>Un servizio che fornisce prodotti mensili in abbonamento, come <span style="text-decoration: underline;">snack o cosmetici</span>.</p>' }
];


const votes = [
    { userFK: "johnDoe123", ideaFK: 7, isUpvote: true },
    { userFK: "johnDoe123", ideaFK: 8, isUpvote: true },
    { userFK: "johnDoe123", ideaFK: 9, isUpvote: true },
    { userFK: "johnDoe123", ideaFK: 10, isUpvote: true },
    { userFK: "johnDoe123", ideaFK: 11, isUpvote: true },
    { userFK: "johnDoe123", ideaFK: 12, isUpvote: true },
    { userFK: "johnDoe123", ideaFK: 13, isUpvote: true },
    { userFK: "jane_smith", ideaFK: 17, isUpvote: true },
    { userFK: "jane_smith", ideaFK: 18, isUpvote: true },
    { userFK: "jane_smith", ideaFK: 19, isUpvote: true },
    { userFK: "jane_smith", ideaFK: 20, isUpvote: true },
    { userFK: "alice1987", ideaFK: 21, isUpvote: true },
    { userFK: "alice1987", ideaFK: 22, isUpvote: true },
    { userFK: "alice1987", ideaFK: 23, isUpvote: true },
    { userFK: "alice1987", ideaFK: 24, isUpvote: true },
    { userFK: "alice1987", ideaFK: 25, isUpvote: true },
    { userFK: "alice1987", ideaFK: 26, isUpvote: true },
    { userFK: "alice1987", ideaFK: 27, isUpvote: true },
    { userFK: "alice1987", ideaFK: 28, isUpvote: true },
    { userFK: "bob_brown", ideaFK: 29, isUpvote: true },
    { userFK: "bob_brown", ideaFK: 20, isUpvote: true },
    { userFK: "bob_brown", ideaFK: 21, isUpvote: true },
    { userFK: "bob_brown", ideaFK: 22, isUpvote: true },
    { userFK: "bob_brown", ideaFK: 23, isUpvote: true },
    { userFK: "bob_brown", ideaFK: 24, isUpvote: true },
    { userFK: "bob_brown", ideaFK: 25, isUpvote: true },
    { userFK: "charlie_Miller", ideaFK: 6, isUpvote: true },
    { userFK: "charlie_Miller", ideaFK: 7, isUpvote: true },
    { userFK: "charlie_Miller", ideaFK: 8, isUpvote: true },
    { userFK: "charlie_Miller", ideaFK: 9, isUpvote: true },
    { userFK: "charlie_Miller", ideaFK: 10, isUpvote: true },
    { userFK: "charlie_Miller", ideaFK: 11, isUpvote: true },
    { userFK: "charlie_Miller", ideaFK: 12, isUpvote: true },
    { userFK: "charlie_Miller", ideaFK: 13, isUpvote: true },
    { userFK: "davidClark", ideaFK: 14, isUpvote: true },
    { userFK: "davidClark", ideaFK: 15, isUpvote: true },
    { userFK: "davidClark", ideaFK: 16, isUpvote: true },
    { userFK: "davidClark", ideaFK: 21, isUpvote: true },
    { userFK: "emily_Jones", ideaFK: 22, isUpvote: true },
    { userFK: "emily_Jones", ideaFK: 23, isUpvote: true },
    { userFK: "emily_Jones", ideaFK: 24, isUpvote: true },
    { userFK: "emily_Jones", ideaFK: 25, isUpvote: true },
    { userFK: "emily_Jones", ideaFK: 26, isUpvote: true },
    { userFK: "emily_Jones", ideaFK: 27, isUpvote: true },
    { userFK: "emily_Jones", ideaFK: 28, isUpvote: true },
    { userFK: "emily_Jones", ideaFK: 29, isUpvote: true },
    { userFK: "frank1984", ideaFK: 30, isUpvote: true },
    { userFK: "frank1984", ideaFK: 21, isUpvote: true },
    { userFK: "frank1984", ideaFK: 22, isUpvote: true },
    { userFK: "frank1984", ideaFK: 23, isUpvote: true },
    { userFK: "frank1984", ideaFK: 24, isUpvote: true },
    { userFK: "frank1984", ideaFK: 25, isUpvote: true },
    { userFK: "grace_martin", ideaFK: 6, isUpvote: true },
    { userFK: "grace_martin", ideaFK: 7, isUpvote: true },
    { userFK: "grace_martin", ideaFK: 8, isUpvote: true },
    { userFK: "grace_martin", ideaFK: 9, isUpvote: true },
    { userFK: "grace_martin", ideaFK: 10, isUpvote: true },
    { userFK: "grace_martin", ideaFK: 11, isUpvote: true },
    { userFK: "grace_martin", ideaFK: 12, isUpvote: true },
    { userFK: "grace_martin", ideaFK: 13, isUpvote: true },
    { userFK: "harry_potter", ideaFK: 14, isUpvote: true },
    { userFK: "harry_potter", ideaFK: 15, isUpvote: true },
    { userFK: "harry_potter", ideaFK: 16, isUpvote: true },
    { userFK: "harry_potter", ideaFK: 17, isUpvote: true },
    { userFK: "harry_potter", ideaFK: 18, isUpvote: true },
    { userFK: "harry_potter", ideaFK: 19, isUpvote: true },
    { userFK: "harry_potter", ideaFK: 20, isUpvote: true },
    { userFK: "harry_potter", ideaFK: 21, isUpvote: true },
    { userFK: "johnDoe123", ideaFK: 22, isUpvote: true },
    { userFK: "jane_smith", ideaFK: 23, isUpvote: true },
    { userFK: "alice1987", ideaFK: 29, isUpvote: false },
    { userFK: "bob_brown", ideaFK: 26, isUpvote: false },
    { userFK: "charlie_Miller", ideaFK: 26, isUpvote: false },
    { userFK: "davidClark", ideaFK: 27, isUpvote: false },
    { userFK: "emily_Jones", ideaFK: 30, isUpvote: false },
    { userFK: "frank1984", ideaFK: 29, isUpvote: false },
    { userFK: "grace_martin", ideaFK: 30, isUpvote: false },
    { userFK: "harry_potter", ideaFK: 12, isUpvote: false },
    { userFK: "alice1987", ideaFK: 16, isUpvote: false },
    { userFK: "bob_brown", ideaFK: 15, isUpvote: false },
    { userFK: "charlie_Miller", ideaFK: 14, isUpvote: false },
    { userFK: "charlie_Miller", ideaFK: 15, isUpvote: false },
    { userFK: "charlie_Miller", ideaFK: 16, isUpvote: false },
    { userFK: "charlie_Miller", ideaFK: 17, isUpvote: false },
    { userFK: "charlie_Miller", ideaFK: 18, isUpvote: false },
    { userFK: "charlie_Miller", ideaFK: 19, isUpvote: false },
    { userFK: "charlie_Miller", ideaFK: 20, isUpvote: false },
    { userFK: "charlie_Miller", ideaFK: 21, isUpvote: false },
    { userFK: "davidClark", ideaFK: 22, isUpvote: false },
    { userFK: "davidClark", ideaFK: 23, isUpvote: false },
    { userFK: "davidClark", ideaFK: 24, isUpvote: false },
    { userFK: "davidClark", ideaFK: 25, isUpvote: false },
    { userFK: "davidClark", ideaFK: 26, isUpvote: false },
    { userFK: "davidClark", ideaFK: 28, isUpvote: false },
    { userFK: "davidClark", ideaFK: 29, isUpvote: false },
    { userFK: "frank1984", ideaFK: 6, isUpvote: false },
    { userFK: "frank1984", ideaFK: 7, isUpvote: false },
    { userFK: "frank1984", ideaFK: 8, isUpvote: false },
    { userFK: "frank1984", ideaFK: 9, isUpvote: false },
    { userFK: "frank1984", ideaFK: 10, isUpvote: false },
    { userFK: "frank1984", ideaFK: 11, isUpvote: false },
    { userFK: "frank1984", ideaFK: 12, isUpvote: false },
    { userFK: "frank1984", ideaFK: 13, isUpvote: false },
    { userFK: "grace_martin", ideaFK: 14, isUpvote: false },
    { userFK: "grace_martin", ideaFK: 15, isUpvote: false },
    { userFK: "grace_martin", ideaFK: 16, isUpvote: false },
    { userFK: "grace_martin", ideaFK: 17, isUpvote: false },
    { userFK: "grace_martin", ideaFK: 18, isUpvote: false },
    { userFK: "grace_martin", ideaFK: 19, isUpvote: false },
    { userFK: "grace_martin", ideaFK: 20, isUpvote: false },
    { userFK: "harry_potter", ideaFK: 22, isUpvote: false },
    { userFK: "harry_potter", ideaFK: 23, isUpvote: false },
    { userFK: "harry_potter", ideaFK: 24, isUpvote: false },
    { userFK: "harry_potter", ideaFK: 25, isUpvote: false },
    { userFK: "harry_potter", ideaFK: 26, isUpvote: false },
    { userFK: "harry_potter", ideaFK: 27, isUpvote: false },
    { userFK: "emily_Jones", ideaFK: 6, isUpvote: false },
    { userFK: "harry_potter", ideaFK: 9, isUpvote: false },
    { userFK: "alice1987", ideaFK: 12, isUpvote: false },
    { userFK: "bob_brown", ideaFK: 13, isUpvote: false },
];

await User.bulkCreate(users);

await Idea.bulkCreate(ideas);

await Vote.bulkCreate(votes);


// npm install;node ./config/db_init.js;sleep 10;node ./back_end/src/config/db_fill.js;
// NqcKX2K2OjDpNGtl