# Lab Test Booking System — updated anatomy demo

## Run on Windows PowerShell

1. Extract this ZIP.
2. Open the `lab-test-booking-demo` folder in VS Code.
3. In the VS Code terminal, run:

```powershell
npm.cmd install
npm.cmd run dev
```

4. Open the local URL printed by Vite (usually `http://localhost:5173`).

## What's included

- Nine health categories with matching high-detail anatomical artwork.
- Interactive Three.js / React Three Fiber viewer for the valid Liver and Heart GLB files.
- Auto-rotation, drag-to-rotate, and zoom for those GLB models.
- Responsive category, diagnostic-test, cart, patient-details, schedule, and booking-confirmation screens.
- Original test catalog and frontend booking flow retained.

## Important asset note

The uploaded project contained valid, non-empty `liver.glb` and `heart.glb` files. The other seven GLB files in the uploaded archive were zero bytes, so they could not load. Those categories now use matching high-quality anatomical image previews instead of broken GLB links. These are visual previews, not interactive 3D meshes. Replace them with valid GLB files when available.

This is a frontend demo. It does not submit real bookings or payments.
