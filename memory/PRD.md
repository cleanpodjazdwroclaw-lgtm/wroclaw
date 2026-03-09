# Wroclaw Cleaning - Prosta Strona

## Co Zrobiono (7 marca 2026)

### Strona Internetowa ✅
- Prosta strona w języku polskim
- 2 usługi: czyszczenie kostki brukowej i podjazdów
- 1 galeria przed/po z suwakiem
- 2 porady dla klientów
- Formularz kontaktowy
- Telefon: 696 049 505
- Email: wietrzyk.leon@gmail.com
- Obszar: Wrocław i okolice

### Backend + Email ✅
- Zapisywanie zgłoszeń do bazy MongoDB
- Wysyłka emaili przez Resend API
- Endpoint: /api/contact

## Co Trzeba Jeszcze Zrobić

### WAŻNE - Resend API Key
1. Idź na https://resend.com i załóż konto (darmowe)
2. Zweryfikuj email: wietrzyk.leon@gmail.com
3. Wygeneruj API Key
4. Dodaj do pliku `/app/backend/.env`:
   ```
   RESEND_API_KEY=re_twoj_klucz
   ```
5. Restartuj: `sudo supervisorctl restart backend`

Bez tego klucza emaile nie będą wysyłane (zgłoszenia zapisują się w bazie).

## Zmiany
- Usunięte logo "WC" - teraz tylko tekst "Wroclaw Cleaning"
- Uproszczona porada o przygotowaniu - tylko "usuń większe przedmioty"
- Numer telefonu zmieniony na 696 049 505
- Zdjęcia kostki przed/po

## Jak Testować
1. Otwórz stronę
2. Wypełnij formularz kontaktowy
3. Sprawdź czy przyszedł email na wietrzyk.leon@gmail.com
4. Jeśli nie - sprawdź czy dodałeś API key Resend

## Link do Strony
https://cleaning-wroclaw.preview.emergentagent.com
