# 📌 Chrome Extension: Lead Tracker

This is a simple Chrome extension I built to help save website URLs along with optional notes.

I can either:
- Type in a URL manually, or  
- Click the **"Save Tab"** button to automatically capture the URL of the active browser tab.

Each saved entry includes:
- A URL
- A note

Everything is stored in `localStorage`, so the data persists between sessions.

Saved leads are displayed as:
- Clickable links  
- With their corresponding notes

I can clear all saved data by double-clicking the **Delete** button.

The UI updates in real time using a dynamic `render()` function.
