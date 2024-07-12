# FUNZIONALITA
- SignUp / SignIn
- pubblicare una nuova "idea"

# Oggetti
### UTENTE
- Campi:
    - nome (facoltativo)
    - cognome (facoltativo)
    - username (obbligatorio) (unico) (usato per il login) 
    
        Lunghezza: min. 3 - max. 20
    - password (obbligatorio) (criptata) (usato per il login) 
- Funzionalità:

### IDEA
- Campi:
	- titolo, max. 50 caratteri
	- descrizione, testo formattato con markdown (max. 400 caratteri)
- Funzionalità:
    - upvote (+1) / downvote (-1)
        - l'utente può assegnare un singolo voto, upvote oppure downvote
        - l'utente può assegnare un voto SOLO alle idee proposte da altri
### COMMENTO
- Campi:
- Funzionalità:

# PAGINE
## HomePage
Pagina *scrollable* dove vengono mostrate le idee.

Il sistema mostra le idee che hanno avuto il più alto numero di upvote e downvote, e hanno un saldo complessivo di upvote e downvote prossimo allo zero. 
<br/>
Ossia l'ordinamento viene fatto prima per `abs(#upvote - #downvote)` crescente e poi per `(#upvote + #downvote)` decrescente.

Le idee sono paginate, con 10 elementi per pagina.

---

Tramite un pulsante è possibile visualizzare le idee più *unpopular* e quelle più *mainstream*.
<br/>
Magari farlo con una checkbox dove è possibile selezionare una sola delle due opzioni per volta, oppure nessuna.

**Unpopular**: idee che nell’ultima settimana hanno ricevuto più pareri di disaccordo (quelle con il saldo di upvote/downvote più basso)
<br/>
Ordinamento `(#downvote - #upvote)` decrescente

**Mainstream**: idee che hanno ricevuto più pareri di accordo (quelle con il saldo di upvote/downvote più alto).
<br/>
Ordinamento `(#upvote - #downvote)` decrescente

## Idea
Pagina che viene mostrata quando si clicca su un'idea oppure sul tasto "commenti" di un'idea.

# Palette colori
Primary: #141413
<br/>
Secondary: #CC785C
<br/>
Tertiary: #6050A6
<br/>
Background: #FAFAF8

