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