# Auth Test React App

This small React app provides two pages: Login and Register. It's intended to help you quickly test a backend's /api/login and /api/register endpoints.

How to run (Windows PowerShell):

```powershell
cd "d:\GitHub\Test apllication"
npm install
npm run dev
```

Open the URL shown by Vite (typically http://localhost:5173) and use the Login and Register forms.

Configuring the backend URL

- By default the frontend will call relative endpoints: `/api/login` and `/api/register` on the same origin.
- If your backend runs on another port or host, open `src/api.js` and set the `API_BASE` constant to something like `http://localhost:4000`.

Notes

- No authentication or token storage is implemented — this is intentionally minimal for testing.
- If you want CORS or proxying configured, either enable CORS on your backend or run a local proxy. Vite proxying can be added if needed.
