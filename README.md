# TEC-WEB Project

## Versioni
Angular CLI: 18.0.7

Node: 20.14.0

Package Manager: npm 10.8.1

## Installazione del database
1. Installa postgres

    `sudo apt-get install postgresql`
1. Modifica la password dell'utente *postgres* (utente sulla macchina)

    per il nostro scopo, assegneremo la password *admin*

    `sudo passwd postgres`
   - Su Arch: inizializza il DB `su -l postgres -c "initdb --locale=C.UTF-8 --encoding=UTF8 -D '/var/lib/postgres/data'"`
1. Avvia il server

    `sudo service postgresql start`

    altre opzioni sono `start | stop | restart | reload | force-reload | status`
   - Su Arch: `sudo systemctl start postgresql.service`
        
1. Modifica la password dell'utente *postgres* (utente sul database)

    impostiamo *admin* come password

    `sudo -u postgres psql -c "ALTER USER postgres PASSWORD 'admin';"`
1. esegui `npm install` in entrambe le cartelle `back_end` e `front_end`
1. Inizializza il database con `node back_end/src/config/db_init.js`

    Successivamente esegui `node back_end/src/config/db_fill.js` per riempire il DB con dati di test.
1. esegui `npm start` in entrambe le cartelle `back_end` e `front_end` per avviare il server e l'applicazione
