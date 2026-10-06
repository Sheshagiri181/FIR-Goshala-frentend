# FIR-Goshala Frontend

React frontend powered by Vite.

The backend API is in the sibling `FIR-Goshala--backend` folder. Start it on port 4000 before using case records; Vite forwards `/api` requests to it.

For a separately hosted frontend, set `VITE_API_BASE` to the backend's public URL before building the frontend, and set the backend's `WEB_ORIGIN` to the frontend's exact origin.

## Getting started

```sh
npm install
npm run dev
```

Create a production build with `npm run build`, or preview it with `npm run preview`.