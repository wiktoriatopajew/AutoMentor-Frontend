# AutoMentor Frontend

Frontend aplikacji AutoMentor zbudowany w React + Vite + TypeScript.

## 🚀 Deploy na Railway

1. **Utwórz nowy projekt na Railway**
   - Wejdź na https://railway.app
   - Kliknij "New Project" → "Deploy from GitHub" 
   - Wybierz to repozytorium (`AutoMentor-Frontend`)

2. **Railway automatycznie:**
   - Wykryje `railway.toml`
   - Uruchomi `npm install && npm run build`
   - Udostępni pliki z `dist/` jako statyczny hosting

3. **Gotowe!**
   - Frontend będzie dostępny pod adresem Railway
   - Połącz z backendem poprzez zmianę API URL w kodzie

## Lokalne uruchomienie

```bash
npm install
npm run dev
```

Aplikacja będzie dostępna pod http://localhost:5173

## Konfiguracja API

Zmień URL API w kodzie na adres backendu Railway:

```typescript
const API_URL = "https://your-backend.up.railway.app";
```