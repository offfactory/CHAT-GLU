# Chat Glu

Chat Glu is a calm, Claude-inspired AI workspace built with Vite and vanilla JavaScript.

## Run locally

```bash
npm install
npm run dev
```

The interface includes:

- Dark and light themes with optional tap sounds
- Local chat history, profile, progress, and 900-credit starter balance
- Model switching for Methusos 5, DeepSeek, Claude, Gemini, OpenAI, Llama, and Mistral
- Methusos 5 modes for chat, code, image concepts, and study sessions
- File upload library for notes, images, and documents
- Notebook creation and editing with study guide, flashcard, quiz, summary, and image actions
- Settings for provider keys, model connections, appearance, and sound
- Puter.js client integration for live AI responses when the Puter SDK is available
- Browser text-to-speech controls and chat deletion
- Local arithmetic reasoning for common expressions, with a safe expression whitelist
- Profile usernames and uploaded avatar pictures persisted in the browser
- Roblox Studio creator workspace with MCP setup guidance
- Official Roblox Studio MCP setup panel with Windows `mcp.json`, copy, and download actions
- Secure `.env.example` placeholders with no real tokens
- Responsive sidebar inspired by modern AI workspaces

Puter.js is loaded from its official browser SDK and used as a client-side provider when available. GitHub Pages cannot safely host Discord OAuth secrets, Roblox tokens, or arbitrary server commands. Roblox Studio connectivity should use the local Studio MCP bridge or a secure backend endpoint. Methusos 5's command mode is intentionally browser-safe; it does not execute untrusted shell commands on a visitor's machine.

The Roblox Studio MCP server uses local stdio transport. Enable it in Studio under **Assistant → Manage MCP Servers**, then add the Windows `Roblox_Studio` entry shown in Chat Glu to your MCP client's configuration and restart that client. A static GitHub Pages website cannot launch local stdio processes directly.

If a token was accidentally pasted into chat, revoke and rotate it immediately. This project never includes user-provided secrets.
