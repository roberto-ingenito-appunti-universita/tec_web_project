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
1. Avvia il server

    `sudo service postgresql start`

    altre opzioni sono `start | stop | restart | reload | force-reload | status`
1. Modifica la password dell'utente *postgres* (utente sul database)

    impostiamo *admin* come password

    `sudo -u postgres psql -c "ALTER USER postgres PASSWORD 'admin';"`
1. Inizializza il database eseguendo il file `back_end/src/config/db_init.js` con `node`

## Font & Colors
- Azeret Mono
- Fragment Mono

https://uicolors.app/create

200 background 600 sopra, colore del testo 900/950

BOTTONE:
- 500 background
- 600 hover
- 700 active
- disabilitato: 100 background e 400 text
