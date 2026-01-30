# Project Plan: Il Portale del Box 📦

Questo documento traccia la roadmap per lo sviluppo del portale "The BOX", un sistema gestionale per il box con logiche di prezzo differenziate, notifiche e assistenza AI.

## 🚀 Fase 1: Setup & Database (Settimana 1)
- [x] **Setup Ambiente**: Nuxt 3 + Prisma + Tailwind (Completato)
- [x] **Modellazione Database**:
    - [x] Utenti (Admin, Socio, Guest)
    - [x] Prodotti
    - [x] Ordini/Transazioni
    - [x] Tabella **News** per avvisi e bacheca
    - [x] Tabella **GuestKey** per accessi temporanei
- [x] **Popolamento (Seeding)**:
    - [x] Creazione file `prodotti_box.csv`
    - [x] Script di seeding per caricare i prodotti iniziali con prezzi e stock
- [x] **Sistema di Autenticazione**:
    - [x] Auth JWT per Soci e Admin (NuxtAuth + bcrypt)
    - [ ] Sistema "Key-based" per i Guest (accesso rapido via codice)

## 🏗️ Fase 2: Core Gestionale & Logica Prezzi (Settimana 2)
- [ ] **Dashboard Amministratore**:
    - [ ] Gestione inventario (update stock rapidi)
    - [ ] Modifica prezzi
- [ ] **Shopping एक्सपीरियंस (UX)**:
    - [ ] Carrello rapido "One-Click" per i soci
- [ ] **Logica Prezzi Dinamici**:
    - [ ] Implementazione automatica: Socio = Costo + 10%, Guest = Costo + 30%

## 🎨 Fase 3: Integrazioni & "Chicche" (Settimana 3)
- [ ] **Pagamenti**:
    - [ ] Integrazione PayPal "Paga ora"
- [ ] **Notifiche Real-time**:
    - [ ] Integrazione Bot Telegram per avvisi consumo (es: "Ultima Ichnusa presa!")
    - [ ] Alert stock basso (< 5 pezzi)
- [ ] **UI Fun & Premium**:
    - [ ] Cursore personalizzato (picche)
    - [ ] Effetto nevicata/particelle (particles.js)

## 🤖 Fase 4: AI Layer (Settimana 4)
- [ ] **Sarcastic AI Assistant**:
    - [ ] Integrazione Gemini API
    - [ ] Personalità sarcastica focalizzata sul "vibe" del box

## 📊 Analisi Operazioni Admin (Feature Extra)
- [ ] **Top Drinker**: Classifica consumi
- [ ] **Gestione News**: Editor per messaggi in bacheca
- [ ] **Key Generator**: Generatore codici temporanei per Guest

---
*Ultimo aggiornamento: 30/01/2026*
