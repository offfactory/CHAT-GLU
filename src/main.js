import './styles.css';

const models = [
  { id: 'methusos', name: 'Methusos 5.1', provider: 'Chat Glu', detail: 'Custom reasoning and coding model', color: '#39ff88', modes: ['Chat', 'Code', 'Image', 'Study'], puterModel: 'gpt-4o-mini' },
  { id: 'deepseek', name: 'DeepSeek Chat', provider: 'DeepSeek', detail: 'Reasoning and coding', color: '#7ca8ff', modes: ['Chat', 'Code'], puterModel: 'deepseek-chat' },
  { id: 'claude', name: 'Claude Sonnet', provider: 'Anthropic', detail: 'Writing and analysis', color: '#e0a27d', modes: ['Chat', 'Code'], puterModel: 'claude-3-5-sonnet' },
  { id: 'gemini', name: 'Gemini Flash', provider: 'Google', detail: 'Fast multimodal model', color: '#91a9ff', modes: ['Chat', 'Image'], puterModel: 'gemini-2.0-flash' },
  { id: 'openai', name: 'GPT-4o mini', provider: 'OpenAI', detail: 'Reliable general purpose', color: '#ffffff', modes: ['Chat', 'Code'], puterModel: 'gpt-4o-mini' },
  { id: 'llama', name: 'Llama 3.1 8B', provider: 'Meta', detail: 'Open model', color: '#bd9cff', modes: ['Chat', 'Code'], puterModel: 'meta-llama/Meta-Llama-3.1-8B-Instruct' },
  { id: 'mistral', name: 'Mistral Small', provider: 'Mistral', detail: 'Efficient assistant', color: '#f0b76b', modes: ['Chat', 'Code'], puterModel: 'mistral-small' }
];

const starterChats = [
  { id: 'welcome', title: 'Welcome to Chat Glu', updated: 'Just now', messages: [] },
  { id: 'ideas', title: 'Creative ideas', updated: 'Yesterday', messages: [{ role: 'user', text: 'Give me three product ideas.' }, { role: 'assistant', text: 'Here are three directions worth exploring: a quiet daily planner, a collaborative research board, and a personal learning studio.' }] },
  { id: 'website', title: 'Building a website', updated: 'Aug 30', messages: [{ role: 'user', text: 'How should I plan a landing page?' }, { role: 'assistant', text: 'Start with one clear promise, then support it with proof, a simple workflow, and one focused call to action.' }] }
];

const icons = {
  plus: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 5v14M5 12h14"/></svg>',
  search: '<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="11" cy="11" r="6.5"/><path d="m16 16 4 4"/></svg>',
  sun: '<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.93 4.93l1.42 1.42M17.65 17.65l1.42 1.42M2 12h2M20 12h2M4.93 19.07l1.42-1.42M17.65 6.35l1.42-1.42"/></svg>',
  moon: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20.5 15.5A8.5 8.5 0 0 1 8.5 3.5 8.5 8.5 0 1 0 20.5 15.5Z"/></svg>',
  settings: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 8.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7Z"/><path d="m19 13.5 1.2 1-.1 1.8-1.7 1-1.5-.7-1.4.8-.3 1.8-1.6.7-1.5-1-1.5 1-1.6-.7-.3-1.8-1.4-.8-1.6.7-1.7-1-.1-1.8 1.2-1-.1-1.6-1.2-1 .1-1.8 1.7-1 1.6.7 1.4-.8.3-1.8 1.6-.7 1.5 1 1.5-1 1.6.7.3 1.8 1.4.8 1.6-.7 1.7 1 .1 1.8-1.2 1 .1 1.6Z"/></svg>',
  chevron: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="m7 10 5 5 5-5"/></svg>',
  send: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="m4 4 16 8-16 8 3-8-3-8Z"/><path d="M7 12h13"/></svg>',
  menu: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 6h16M4 12h16M4 18h16"/></svg>',
  file: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 3h8l4 4v14H6z"/><path d="M14 3v5h4M9 13h6M9 17h6"/></svg>',
  image: '<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="4" y="4" width="16" height="16" rx="2"/><circle cx="9" cy="9" r="1.5"/><path d="m5 17 4-4 3 3 2-2 5 5"/></svg>',
  book: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 4.5A2.5 2.5 0 0 1 7.5 2H19v17H7.5A2.5 2.5 0 0 0 5 21.5z"/><path d="M5 4.5v17M8 6h7M8 10h7"/></svg>',
  user: '<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="8" r="3"/><path d="M5 20c.8-3.2 3.1-5 7-5s6.2 1.8 7 5"/></svg>'
  ,volume: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 10v4h4l5 4V6l-5 4H4Z"/><path d="M17 9a4 4 0 0 1 0 6M19.5 6.5a8 8 0 0 1 0 11"/></svg>'
  ,code: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="m8 8-4 4 4 4M16 8l4 4-4 4M14 5l-4 14"/></svg>'
  ,discord: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7 7.5A13 13 0 0 1 12 6a13 13 0 0 1 5 1.5c1.6 2.3 2.2 5.1 1.7 8.5-1.7 1.3-3.3 2-5 2.3l-1-1.4M7 7.5c-1.6 2.3-2.2 5.1-1.7 8.5 1.7 1.3 3.3 2 5 2.3l1-1.4M8.5 15c1.8 1 5.2 1 7 0"/><circle cx="9" cy="12" r=".6"/><circle cx="15" cy="12" r=".6"/></svg>'
  ,roblox: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="m5 5 14-2-2 14-14 2z"/><path d="m10 10 4-1-1 4-4 1z"/></svg>'
};

const saved = (key, fallback) => {
  try { return JSON.parse(localStorage.getItem(key)) ?? fallback; } catch { return fallback; }
};

const state = {
  chats: saved('chat-glu-chats', starterChats),
  notebooks: saved('chat-glu-notebooks', [{ id: 'study-starter', title: 'AI study notes', body: 'Ask Methusos 5 to turn a topic into a lesson plan, flashcards, and a visual study guide.' }]),
  activeChatId: localStorage.getItem('chat-glu-active') || 'welcome',
  modelId: localStorage.getItem('chat-glu-model') || 'methusos',
  mode: localStorage.getItem('chat-glu-mode') || 'Chat',
  theme: localStorage.getItem('chat-glu-theme') || 'dark',
  credits: Number(localStorage.getItem('chat-glu-credits') || 900),
  profile: saved('chat-glu-profile', { name: 'My account', email: 'Local profile', avatar: 'M', photo: '' }),
  files: saved('chat-glu-files', []),
  activePanel: 'chat',
  sidebarOpen: true,
  sound: localStorage.getItem('chat-glu-sound') !== 'off'
  ,puterSignedIn: false,
  authenticated: localStorage.getItem('chat-glu-authenticated') === 'true',
  authMode: 'signin'
};

const app = document.querySelector('#app');
const activeChat = () => state.chats.find((chat) => chat.id === state.activeChatId) || state.chats[0];
const currentModel = () => models.find((model) => model.id === state.modelId) || models[0];

function save() {
  localStorage.setItem('chat-glu-chats', JSON.stringify(state.chats));
  localStorage.setItem('chat-glu-notebooks', JSON.stringify(state.notebooks));
  localStorage.setItem('chat-glu-active', state.activeChatId);
  localStorage.setItem('chat-glu-model', state.modelId);
  localStorage.setItem('chat-glu-mode', state.mode);
  localStorage.setItem('chat-glu-theme', state.theme);
  localStorage.setItem('chat-glu-credits', String(state.credits));
  localStorage.setItem('chat-glu-profile', JSON.stringify(state.profile));
  localStorage.setItem('chat-glu-files', JSON.stringify(state.files));
  localStorage.setItem('chat-glu-sound', state.sound ? 'on' : 'off');
}

function clickSound() {
  if (!state.sound) return;
  const context = new (window.AudioContext || window.webkitAudioContext)();
  const oscillator = context.createOscillator();
  const gain = context.createGain();
  oscillator.frequency.value = 430;
  gain.gain.setValueAtTime(0.045, context.currentTime);
  gain.gain.exponentialRampToValueAtTime(0.001, context.currentTime + 0.07);
  oscillator.connect(gain).connect(context.destination);
  oscillator.start();
  oscillator.stop(context.currentTime + 0.07);
}

function providerMark(model) {
  return `<span class="provider-mark" style="--mark:${model.color}">${model.id === 'openai' ? 'O' : model.id === 'llama' ? 'L' : model.id === 'mistral' ? 'M' : model.id === 'gemini' ? 'G' : 'M5'}</span>`;
}

function render() {
  if (!state.authenticated) {
    app.innerHTML = renderAuth();
    bindAuthEvents();
    return;
  }
  const chat = activeChat();
  const model = currentModel();
  document.documentElement.dataset.theme = state.theme;
  app.innerHTML = `
    <div class="app-shell ${state.sidebarOpen ? '' : 'sidebar-collapsed'}">
      <aside class="sidebar">
        <div class="brand"><span class="brand-star">G</span><span>Chat Glu</span></div>
        <button class="new-chat button-primary" data-action="new-chat">${icons.plus}<span>New chat</span><kbd>Ctrl ⇧ O</kbd></button>
        <nav class="primary-nav">
          <button class="nav-item ${state.activePanel === 'chat' ? 'active' : ''}" data-panel="chat">${icons.search}<span>Search chats</span></button>
          <button class="nav-item ${state.activePanel === 'images' ? 'active' : ''}" data-panel="images">${icons.image}<span>Images</span></button>
          <button class="nav-item ${state.activePanel === 'files' ? 'active' : ''}" data-panel="files">${icons.file}<span>Library</span></button>
          <button class="nav-item ${state.activePanel === 'coder' ? 'active' : ''}" data-panel="coder">${icons.code}<span>Coder</span></button>
          <button class="nav-item ${state.activePanel === 'roblox' ? 'active' : ''}" data-panel="roblox">${icons.roblox}<span>Roblox Studio</span></button>
        </nav>
        <div class="sidebar-section notebooks-nav">
          <div class="section-heading">Notebooks <button class="icon-button small" data-action="new-notebook" aria-label="New notebook">${icons.plus}</button></div>
          ${state.notebooks.map((notebook) => `<button class="nav-item notebook-link" data-notebook="${notebook.id}">${icons.book}<span>${escapeHtml(notebook.title)}</span></button>`).join('')}
        </div>
        <div class="sidebar-section history-section">
          <div class="section-heading">Recents <span class="muted-count">${state.chats.length}</span></div>
          <div class="chat-list">${state.chats.map((item) => `<div class="chat-row"><button class="chat-item ${item.id === chat.id && state.activePanel === 'chat' ? 'active' : ''}" data-chat="${item.id}"><span class="chat-dot"></span><span class="chat-title">${escapeHtml(item.title)}</span><span class="chat-date">${item.updated}</span></button><button class="delete-chat" data-delete-chat="${item.id}" aria-label="Delete ${escapeHtml(item.title)}">×</button></div>`).join('')}</div>
        </div>
        <div class="sidebar-bottom">
          <button class="profile-row" data-action="profile"><span class="avatar">${state.profile.photo ? `<img src="${state.profile.photo}" alt="" />` : escapeHtml(state.profile.avatar)}</span><span><strong>${escapeHtml(state.profile.name)}</strong><small>Local profile</small></span><span class="more">•••</span></button>
          <button class="theme-row" data-action="theme">${state.theme === 'dark' ? icons.sun : icons.moon}<span>Switch to ${state.theme === 'dark' ? 'light' : state.theme === 'light' ? 'green neon' : 'dark'} mode</span></button>
        </div>
      </aside>
      <main class="main">
        <header class="topbar"><button class="icon-button menu-button" data-action="toggle-sidebar" aria-label="Toggle sidebar">${icons.menu}</button><div class="mobile-title">Chat Glu</div><div class="topbar-actions"><span class="model-status">${providerMark(model)} Methusos 5 online</span><button class="icon-button" data-action="settings" aria-label="Open settings">${icons.settings}</button></div></header>
        ${renderPanel(chat, model)}
      </main>
    </div>
    ${renderSettingsModal()}
    ${renderProfileModal()}
    <input type="file" id="file-input" class="hidden" multiple accept=".txt,.md,.pdf,.doc,.docx,.png,.jpg,.jpeg,.webp" />
  `;
  bindEvents();
}

function renderAuth() {
  const signUp = state.authMode === 'signup';
  return `<main class="auth-shell"><section class="auth-card"><div class="auth-brand"><span class="brand-star">G</span><span>Chat Glu</span></div><span class="eyebrow">Your creative AI workspace</span><h1>${signUp ? 'Create your free account' : 'Welcome back'}</h1><p class="auth-subtitle">Chat, code, study, and create with Methusos 5.1 in one calm workspace.</p><button class="auth-provider discord-button" data-auth="discord">${icons.discord} Continue with Discord</button><button class="auth-provider roblox-button" data-auth="roblox">${icons.roblox} Continue with Roblox</button><div class="auth-divider"><span>or use a free Chat Glu account</span></div><form id="auth-form"><label>Display name<input id="auth-name" required placeholder="Your name" /></label><label>Email<input id="auth-email" type="email" required placeholder="you@example.com" /></label><label>Password<input id="auth-password" type="password" minlength="8" required placeholder="At least 8 characters" /></label><button class="button-primary auth-submit" type="submit">${signUp ? 'Create account' : 'Sign in'}</button></form><p class="auth-legal">Your local demo profile stays in this browser. Secure Discord and Roblox OAuth requires a backend callback; Chat Glu never asks for API keys here.</p><button class="auth-switch" data-auth-mode="${signUp ? 'signin' : 'signup'}">${signUp ? 'Already have an account? Sign in' : 'New here? Create a free account'}</button></section><aside class="auth-art"><div class="art-orb"></div><div class="art-card art-card-one">Build Roblox worlds<br /><small>Methusos 5.1 · Lua ready</small></div><div class="art-card art-card-two">Generate ideas<br /><small>Images · code · study</small></div><div class="art-card art-card-three">900 starter credits</div></aside></main>`;
}

function bindAuthEvents() {
  app.querySelector('[data-auth-mode]')?.addEventListener('click', () => { state.authMode = app.querySelector('[data-auth-mode]').dataset.authMode; render(); });
  app.querySelector('[data-auth="discord"]')?.addEventListener('click', () => {
    if (window.puter?.auth?.signIn) loginWithDiscord();
    else window.open('https://discord.com/oauth2/authorize', '_blank', 'noopener,noreferrer');
  });
  app.querySelector('[data-auth="roblox"]')?.addEventListener('click', () => {
    window.open('https://create.roblox.com/dashboard/credentials', '_blank', 'noopener,noreferrer');
    alert('Roblox authorization needs a configured server-side OAuth callback. The public site never accepts Roblox API keys.');
  });
  app.querySelector('#auth-form')?.addEventListener('submit', (event) => {
    event.preventDefault();
    const name = app.querySelector('#auth-name').value.trim();
    const email = app.querySelector('#auth-email').value.trim();
    state.profile = { ...state.profile, name, email, avatar: name.slice(0, 1).toUpperCase() || 'M' };
    state.authenticated = true;
    localStorage.setItem('chat-glu-authenticated', 'true');
    save();
    render();
  });
}

function renderPanel(chat, model) {
  if (state.activePanel === 'images') return `<section class="content-panel glow-panel"><div class="panel-title"><div><span class="eyebrow">Creative studio</span><h1>Images</h1><p>Generate visual concepts with Methusos 5 through Puter.</p></div><button class="button-primary" data-action="image-prompt">${icons.image} Create image</button></div><div class="empty-grid"><div class="empty-card"><div class="empty-icon">${icons.image}</div><strong>Image generation</strong><span>Ask Methusos 5 to create a visual and save it here.</span><button class="text-button" data-action="image-prompt">Start creating</button></div></div></section>`;
  if (state.activePanel === 'files') return `<section class="content-panel"><div class="panel-title"><div><span class="eyebrow">Your workspace</span><h1>Library</h1><p>Files you upload become context for your chats and notebooks.</p></div><button class="button-primary" data-action="upload">${icons.plus} Upload files</button></div><div class="file-grid">${state.files.length ? state.files.map((file) => `<div class="file-card">${icons.file}<strong>${escapeHtml(file.name)}</strong><small>${file.size}</small></div>`).join('') : '<div class="empty-card"><div class="empty-icon">' + icons.file + '</div><strong>Your library is empty</strong><span>Upload notes, images, or documents to use them in chat.</span><button class="text-button" data-action="upload">Upload a file</button></div>'}</div></section>`;
  if (state.activePanel === 'coder') return `<section class="content-panel glow-panel"><div class="panel-title"><div><span class="eyebrow">Methusos 5 workspace</span><h1>Coder</h1><p>Build with chat, files, code plans, and safe browser previews.</p></div><button class="button-primary" data-action="coder-chat">${icons.code} Start coding</button></div><div class="coder-grid"><div class="empty-card"><div class="empty-icon">${icons.code}</div><strong>Chat with your code</strong><span>Upload a project file, ask for a fix, or generate a starter component.</span><button class="text-button" data-action="coder-chat">Open code mode</button></div><div class="empty-card"><div class="empty-icon">${icons.file}</div><strong>Safe command notes</strong><span>Methusos 5 can explain commands and generate scripts. It does not run unknown shell commands in your browser.</span></div></div></section>`;
  if (state.activePanel === 'roblox') {
    const mcpConfig = JSON.stringify({ mcpServers: { Roblox_Studio: { command: 'cmd.exe', args: ['/c', '%LOCALAPPDATA%\\\\Roblox\\\\mcp.bat'] } } }, null, 2);
    return `<section class="content-panel glow-panel"><div class="panel-title"><div><span class="eyebrow">Creator connection</span><h1>Roblox Studio MCP</h1><p>Connect Methusos 5.1 to your open Studio session with Roblox's local MCP server.</p></div><button class="button-primary" data-action="roblox-connect">${icons.roblox} Open setup</button></div><div class="coder-grid"><div class="empty-card"><div class="empty-icon">${icons.roblox}</div><strong>1. Enable Studio MCP</strong><span>In Roblox Studio open Assistant, choose … → Manage MCP Servers, then enable Studio as an MCP server.</span><button class="text-button" data-action="roblox-connect">Open connection settings</button></div><div class="empty-card"><div class="empty-icon">${icons.code}</div><strong>2. Add this client config</strong><span>Use this JSON in your MCP client's configuration, then restart the client.</span><div class="mcp-code"><pre id="roblox-mcp-config">${escapeHtml(mcpConfig)}</pre><div class="code-toolbar"><span>Windows</span><div><button data-copy-code="${encodeURIComponent(mcpConfig)}">Copy JSON</button><button data-download-code="${encodeURIComponent(mcpConfig)}" data-filename="roblox-mcp.json">Download</button></div></div></div></div><div class="empty-card"><div class="empty-icon">${icons.settings}</div><strong>3. Verify the connection</strong><span>Keep Roblox Studio open, restart the MCP client, and check for the green connected-client indicator in Manage MCP Servers.</span><button class="text-button" data-action="roblox-test">Test local bridge</button></div><div class="empty-card"><div class="empty-icon">${icons.user}</div><strong>Account access</strong><span>Chat Glu does not request or store Roblox API keys. Use Roblox's official permissions screen and only connect clients you trust.</span><a class="text-button" href="https://create.roblox.com/dashboard/credentials" target="_blank" rel="noreferrer">Open Roblox access page</a></div></div></section>`;
  }
  if (state.activePanel === 'notebook') {
    const notebook = state.notebooks.find((item) => item.id === state.activeNotebookId) || state.notebooks[0];
    return `<section class="notebook-panel"><div class="panel-title"><div><span class="eyebrow">Study workspace</span><h1>${escapeHtml(notebook.title)}</h1><p>Write, edit, and ask Methusos 5 to turn notes into study material.</p></div><div class="panel-actions"><button class="button-secondary" data-action="study-guide">Generate study guide</button><button class="button-primary" data-action="image-prompt">${icons.image} Generate image</button></div></div><textarea class="notebook-editor" data-notebook-editor="${notebook.id}">${escapeHtml(notebook.body)}</textarea><div class="study-tools"><button data-action="flashcards">Make flashcards</button><button data-action="quiz">Make a quiz</button><button data-action="summarize">Summarize notes</button></div></section>`;
  }
  return `<section class="chat-view ${chat.messages.length ? 'has-messages' : ''}">${chat.messages.length ? `<div class="message-stack">${chat.messages.map((message, index) => { const text = messageText(message.text); const media = typeof message.media === 'string' ? message.media : message.media?.url || message.media?.src; return `<article class="message ${message.role}"><div class="message-avatar">${message.role === 'user' ? (state.profile.photo ? `<img src="${state.profile.photo}" alt="" />` : escapeHtml(state.profile.avatar)) : providerMark(model)}</div><div class="message-body"><div class="message-label">${message.role === 'user' ? 'You' : model.name}</div>${message.image ? `<div class="generated-image">${media ? `<img src="${escapeHtml(media)}" alt="${escapeHtml(text)}" />` : '<div class="image-spark">M5</div>'}<span>${escapeHtml(text)}</span>${media ? `<a class="download-image" href="${escapeHtml(media)}" download="chat-glu-image.png" target="_blank" rel="noreferrer">Download image</a>` : ''}</div>` : renderMessageContent(text)}<button class="speak-button" data-speak="${escapeHtml(text)}">${icons.volume} Read aloud</button></div></article>`; }).join('')}</div>` : `<div class="welcome"><div class="welcome-mark">M5</div><h1>What can I help you explore?</h1><p>Methusos 5.1 can reason, calculate, code, and create.</p></div>`}<div class="composer-wrap"><form class="composer" id="composer">${state.files.length ? `<div class="attachment-strip">${state.files.slice(-3).map((file) => `<span>${icons.file}${escapeHtml(file.name)}</span>`).join('')}</div>` : ''}<textarea id="prompt" rows="1" placeholder="${state.mode === 'Image' ? 'Describe an image to create...' : state.mode === 'Code' ? 'Describe code you want to build...' : 'Ask Methusos 5.1 anything...'}" aria-label="Message Chat Glu"></textarea><div class="composer-toolbar"><div class="toolbar-left"><button type="button" class="icon-button add-button" data-action="upload" aria-label="Add attachment">${icons.plus}</button><button type="button" class="mode-button" data-action="mode-menu">${state.mode} ${icons.chevron}</button><span class="composer-hint">Methusos 5.1 · Puter optional</span></div><div class="toolbar-right"><button type="button" class="model-selector" data-action="model-menu">${providerMark(model)}<span>${model.name}</span>${icons.chevron}</button><button class="send-button" type="submit" aria-label="Send message">${icons.send}</button></div></div></form><div class="model-menu hidden">${models.map((item) => `<button class="model-option ${item.id === model.id ? 'selected' : ''}" data-model="${item.id}">${providerMark(item)}<span><strong>${item.name}</strong><small>${item.provider} · ${item.detail}</small></span>${item.id === model.id ? '<span class="check">✓</span>' : ''}</button>`).join('')}</div><div class="mode-menu hidden">${model.modes.map((mode) => `<button data-mode="${mode}" class="${mode === state.mode ? 'selected' : ''}">${mode}</button>`).join('')}</div><p class="privacy-note">Puter powers live AI when connected. Methusos 5.1 also works in local demo mode.</p></div></section>`;
}

function renderSettingsModal() {
  return `<div class="modal-layer hidden" id="settings-modal"><div class="modal wide-modal"><div class="modal-head"><div><span class="eyebrow">Workspace controls</span><h2>Settings</h2></div><button class="icon-button" data-action="close-settings">×</button></div><div class="settings-tabs"><button class="selected">Models</button><button>Appearance</button><button>Sound</button></div><p class="modal-copy">Methusos 5.1 uses Puter when available. Provider keys below stay in this browser and should never be committed.</p><label>Google Gemini API key<input type="password" id="gemini-key" placeholder="AIza..." /></label><label>OpenAI API key<input type="password" id="openai-key" placeholder="sk-..." /></label><label>OpenRouter / DeepSeek API key<input type="password" id="openrouter-key" placeholder="sk-or-..." /></label><label>Local Roblox MCP bridge URL<input type="url" id="roblox-endpoint" placeholder="http://127.0.0.1:39200" /></label><div class="secure-note">${icons.roblox}<span>Roblox credentials are never accepted here. Use the local Studio bridge and keep its secret in Roblox Studio or a secure backend.</span></div><div class="settings-row"><div><strong>Tap sounds</strong><small>Play a soft sound when controls are clicked.</small></div><button class="toggle ${state.sound ? 'on' : ''}" data-action="toggle-sound"><span></span></button></div><div class="settings-row"><div><strong>Speech controls</strong><small>Read Methusos 5.1 answers aloud with your browser voice.</small></div><button class="button-secondary" data-action="test-speech">Test voice</button></div><div class="modal-footer"><span class="saved-message" id="saved-message"></span><button class="button-primary" data-action="save-settings">Save settings</button></div></div></div>`;
}

function renderProfileModal() {
  return `<div class="modal-layer hidden" id="profile-modal"><div class="modal"><div class="modal-head"><div><span class="eyebrow">Your account</span><h2>Profile</h2></div><button class="icon-button" data-action="close-profile">×</button></div><div class="profile-hero"><span class="large-avatar">${state.profile.photo ? `<img src="${state.profile.photo}" alt="" />` : escapeHtml(state.profile.avatar)}</span><div><strong>${escapeHtml(state.profile.name)}</strong><span>${escapeHtml(state.profile.email)}</span></div></div><button class="discord-button" data-action="discord-login">${icons.discord} Connect Discord</button><label>Display name<input id="profile-name" value="${escapeHtml(state.profile.name)}" /></label><label>Avatar letter<input id="profile-avatar" maxlength="2" value="${escapeHtml(state.profile.avatar)}" /></label><label>Profile picture<input id="profile-photo" type="file" accept="image/png,image/jpeg,image/webp" /></label><div class="modal-footer"><span class="saved-message" id="profile-message"></span><button class="button-primary" data-action="save-profile">Save profile</button></div></div></div>`;
}

function bindEvents() {
  app.querySelectorAll('button').forEach((button) => button.addEventListener('click', clickSound));
  app.querySelectorAll('[data-panel]').forEach((button) => button.addEventListener('click', () => { state.activePanel = button.dataset.panel; render(); }));
  app.querySelector('[data-action="coder-chat"]')?.addEventListener('click', () => { state.activePanel = 'chat'; state.mode = 'Code'; save(); render(); document.querySelector('#prompt')?.focus(); });
  app.querySelectorAll('[data-action="roblox-connect"]').forEach((button) => button.addEventListener('click', () => {
    openSettings();
    window.open('https://create.roblox.com/docs/studio/mcp', '_blank', 'noopener,noreferrer');
  }));
  app.querySelector('[data-action="roblox-test"]')?.addEventListener('click', testRobloxBridge);
  app.querySelectorAll('[data-chat]').forEach((button) => button.addEventListener('click', () => { state.activeChatId = button.dataset.chat; state.activePanel = 'chat'; save(); render(); }));
  app.querySelectorAll('[data-delete-chat]').forEach((button) => button.addEventListener('click', (event) => { event.stopPropagation(); deleteChat(button.dataset.deleteChat); }));
  app.querySelectorAll('[data-notebook]').forEach((button) => button.addEventListener('click', () => { state.activeNotebookId = button.dataset.notebook; state.activePanel = 'notebook'; render(); }));
  app.querySelectorAll('[data-action="new-chat"]').forEach((button) => button.addEventListener('click', createChat));
  app.querySelector('[data-action="new-notebook"]')?.addEventListener('click', createNotebook);
  app.querySelector('[data-action="toggle-sidebar"]')?.addEventListener('click', () => { state.sidebarOpen = !state.sidebarOpen; render(); });
  app.querySelector('[data-action="theme"]')?.addEventListener('click', () => {
    state.theme = state.theme === 'dark' ? 'light' : state.theme === 'light' ? 'green' : 'dark';
    save();
    render();
  });
  app.querySelectorAll('[data-action="settings"]').forEach((button) => button.addEventListener('click', openSettings));
  app.querySelector('[data-action="close-settings"]')?.addEventListener('click', closeModals);
  app.querySelector('[data-action="close-profile"]')?.addEventListener('click', closeModals);
  app.querySelector('[data-action="save-settings"]')?.addEventListener('click', saveSettings);
  app.querySelector('[data-action="test-speech"]')?.addEventListener('click', () => speak('Methusos 5 voice controls are ready.'));
  app.querySelector('[data-action="discord-login"]')?.addEventListener('click', loginWithDiscord);
  app.querySelector('[data-action="toggle-sound"]')?.addEventListener('click', () => { state.sound = !state.sound; save(); render(); openSettings(); });
  app.querySelector('[data-action="profile"]')?.addEventListener('click', () => document.querySelector('#profile-modal').classList.remove('hidden'));
  app.querySelector('[data-action="save-profile"]')?.addEventListener('click', saveProfile);
  app.querySelector('#profile-photo')?.addEventListener('change', handleProfilePhoto);
  app.querySelectorAll('[data-action="credits"]').forEach((button) => button.addEventListener('click', () => { state.credits += 300; save(); render(); }));
  app.querySelector('[data-action="upload"]')?.addEventListener('click', () => document.querySelector('#file-input').click());
  app.querySelector('#file-input')?.addEventListener('change', handleFiles);
  app.querySelector('[data-action="model-menu"]')?.addEventListener('click', () => app.querySelector('.model-menu').classList.toggle('hidden'));
  app.querySelector('[data-action="mode-menu"]')?.addEventListener('click', () => app.querySelector('.mode-menu').classList.toggle('hidden'));
  app.querySelectorAll('[data-model]').forEach((button) => button.addEventListener('click', () => { state.modelId = button.dataset.model; state.mode = currentModel().modes[0]; save(); render(); }));
  app.querySelectorAll('[data-mode]').forEach((button) => button.addEventListener('click', () => { state.mode = button.dataset.mode; save(); render(); }));
  app.querySelectorAll('[data-speak]').forEach((button) => button.addEventListener('click', () => speak(button.dataset.speak)));
  app.querySelectorAll('[data-copy-code]').forEach((button) => button.addEventListener('click', async () => {
    await navigator.clipboard.writeText(decodeURIComponent(button.dataset.copyCode));
    button.textContent = 'Copied';
    setTimeout(() => { button.textContent = 'Copy'; }, 1200);
  }));
  app.querySelectorAll('[data-download-code]').forEach((button) => button.addEventListener('click', () => downloadCode(decodeURIComponent(button.dataset.downloadCode), button.dataset.filename || 'methusos-script.lua')));
  app.querySelector('#composer')?.addEventListener('submit', sendMessage);
  app.querySelector('#prompt')?.addEventListener('keydown', (event) => { if (event.key === 'Enter' && !event.shiftKey) { event.preventDefault(); app.querySelector('#composer').requestSubmit(); } });
  app.querySelectorAll('[data-action="image-prompt"]').forEach((button) => button.addEventListener('click', () => { state.activePanel = 'chat'; state.mode = 'Image'; save(); render(); document.querySelector('#prompt')?.focus(); }));
  app.querySelector('[data-action="study-guide"]')?.addEventListener('click', () => addNotebookText('Study guide generated: define the topic, learn the key terms, test yourself without notes, then explain the concept in your own words.'));
  app.querySelector('[data-action="flashcards"]')?.addEventListener('click', () => addNotebookText('Flashcards: 1) What is the main idea? 2) Which terms need definitions? 3) What example proves the idea?'));
  app.querySelector('[data-action="quiz"]')?.addEventListener('click', () => addNotebookText('Practice quiz: write five questions about these notes, answer from memory, then check your work.'));
  app.querySelector('[data-action="summarize"]')?.addEventListener('click', () => addNotebookText('Summary: this notebook is ready for a focused study session with review, practice, and visual memory aids.'));
  app.querySelectorAll('[data-notebook-editor]').forEach((editor) => editor.addEventListener('input', () => { const notebook = state.notebooks.find((item) => item.id === editor.dataset.notebookEditor); notebook.body = editor.value; save(); }));
}

function createChat() { const id = `chat-${Date.now()}`; state.chats.unshift({ id, title: 'New conversation', updated: 'Just now', messages: [] }); state.activeChatId = id; state.activePanel = 'chat'; save(); render(); document.querySelector('#prompt')?.focus(); }
function deleteChat(id) {
  if (state.chats.length === 1) return;
  state.chats = state.chats.filter((chat) => chat.id !== id);
  if (state.activeChatId === id) state.activeChatId = state.chats[0].id;
  save();
  render();
}
function createNotebook() { const id = `notebook-${Date.now()}`; state.notebooks.unshift({ id, title: 'New notebook', body: '' }); state.activeNotebookId = id; state.activePanel = 'notebook'; save(); render(); }
function addNotebookText(text) { const notebook = state.notebooks.find((item) => item.id === state.activeNotebookId) || state.notebooks[0]; notebook.body += `${notebook.body ? '\n\n' : ''}${text}`; save(); render(); }
function handleFiles(event) { const incoming = Array.from(event.target.files).map((file) => ({ name: file.name, size: `${Math.max(1, Math.round(file.size / 1024))} KB` })); state.files.push(...incoming); save(); render(); }
function handleProfilePhoto(event) {
  const file = event.target.files?.[0];
  if (!file) return;
  const reader = new FileReader();
  reader.addEventListener('load', () => { state.profile.photo = String(reader.result); save(); render(); document.querySelector('#profile-modal')?.classList.remove('hidden'); });
  reader.readAsDataURL(file);
}
function sendMessage(event) {
  event.preventDefault();
  const input = document.querySelector('#prompt');
  const text = input.value.trim();
  if (!text) return;
  if (text.toLowerCase() === '/fire') {
    if (window.confirm('Delete all Chat Glu chats, notebooks, files, profile data, and settings from this browser?')) wipeLocalData();
    return;
  }
  if (text.toLowerCase() === '/coder') { state.activePanel = 'chat'; state.mode = 'Code'; input.value = ''; save(); render(); return; }
  if (text.toLowerCase() === '/image') { state.activePanel = 'chat'; state.mode = 'Image'; input.value = ''; save(); render(); return; }
  const chat = activeChat();
  const isImage = state.mode === 'Image';
  chat.messages.push({ role: 'user', text });
  if (chat.title === 'New conversation' || chat.title === 'Welcome to Chat Glu') chat.title = text.slice(0, 32) + (text.length > 32 ? '…' : '');
  chat.updated = 'Just now';
  save();
  render();
  setTimeout(async () => {
    const current = activeChat();
    const response = (await awaitPuter(text, isImage)) || solveLocally(text, state.mode, isImage);
    current.messages.push({ role: 'assistant', text: response.text, image: response.image, media: response.media });
    save();
    render();
  }, 450);
}

function speak(text) {
  if (!('speechSynthesis' in window)) return;
  window.speechSynthesis.cancel();
  window.speechSynthesis.speak(new SpeechSynthesisUtterance(text));
}

async function awaitPuter(prompt, imageMode) {
  if (!window.puter?.ai?.chat) return null;
  const model = currentModel();
  try {
    if (imageMode && window.puter.ai.txt2img) {
      const image = await window.puter.ai.txt2img(prompt, false);
      return { text: `Low-quality image generated for “${prompt}”.`, image: true, media: image };
    }
    const result = await window.puter.ai.chat(prompt, { model: model.puterModel, stream: false });
    const text = typeof result === 'string' ? result : result?.message?.content || result?.text || '';
    if (text) return { text, image: false };
  } catch {
    return null;
  }

  function wipeLocalData() {
    Object.keys(localStorage).filter((key) => key.startsWith('chat-glu-')).forEach((key) => localStorage.removeItem(key));
    window.location.reload();
  }
  return null;
}

function solveLocally(prompt, mode, image) {
  if (image) return { text: `Low-quality visual concept created for “${prompt}”. Connect Puter to generate the actual image asset.`, image: true };
  const expression = prompt.replace(/[^0-9+\-*/().%\s]/g, '').trim();
  if (expression && /[+\-*/%]/.test(expression) && /^[0-9+\-*/().%\s]+$/.test(expression)) {
    try {
      const answer = Function(`"use strict"; return (${expression})`)();
      if (Number.isFinite(answer)) return { text: `Methusos 5 calculation\n\n${expression} = ${answer}`, image: false };
    } catch {}
  }
  if (mode === 'Code') return { text: `Methusos 5.1 code mode\n\nPlan:\n1. Define the inputs and expected output.\n2. Choose the smallest safe implementation.\n3. Add validation and tests.\n\nStarter Roblox Lua script:\n\n\`\`\`lua\nlocal Players = game:GetService("Players")\nlocal player = Players.LocalPlayer\n\nlocal function describeCharacter(character)\n    local humanoid = character:WaitForChild("Humanoid")\n    print(("Ready: %s (WalkSpeed %d)"):format(player.Name, humanoid.WalkSpeed))\nend\n\nif player.Character then\n    describeCharacter(player.Character)\nend\nplayer.CharacterAdded:Connect(describeCharacter)\n\`\`\`\n\nConnect Puter for a live generated implementation.`, image: false };
  if (mode === 'Study') return { text: `Methusos 5 study mode\n\nTopic: ${prompt}\n\nStart with a plain-language explanation, list the key terms, create three recall questions, then explain the idea without notes.`, image: false };
  return { text: `Methusos 5 is ready for “${prompt}”. Puter can provide a live answer when connected; local mode still handles arithmetic, profiles, files, notebooks, and speech.`, image: false };
}

async function loginWithDiscord() {
  if (window.puter?.auth?.signIn) {
    await window.puter.auth.signIn();
    state.profile.email = 'Connected with Puter';
    save();
    render();
    return;
  }
  alert('Discord login needs a server-side OAuth callback. Puter login is available when the Puter SDK is connected.');
}

function openSettings() {
  document.querySelector('#settings-modal').classList.remove('hidden');
  ['openai', 'gemini', 'openrouter'].forEach((key) => { const input = document.querySelector(`#${key}-key`); if (input) input.value = localStorage.getItem(`chat-glu-key-${key}`) || ''; });
  const endpoint = document.querySelector('#roblox-endpoint');
  if (endpoint) endpoint.value = localStorage.getItem('chat-glu-roblox-endpoint') || '';
}
async function testRobloxBridge() {
  const endpoint = localStorage.getItem('chat-glu-roblox-endpoint')?.replace(/\/+$/, '');
  if (!endpoint) {
    openSettings();
    alert('The built-in Roblox Studio MCP server uses local stdio. Configure it in your MCP client with the JSON shown in the Roblox Studio panel.');
    return;
  }
  try {
    const response = await fetch(`${endpoint}/health`, { method: 'GET', signal: AbortSignal.timeout(5000) });
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    alert('Roblox Studio bridge is reachable.');
  } catch (error) {
    alert(`Roblox bridge connection failed: ${error.message}`);
  }
}
function closeModals() { document.querySelectorAll('.modal-layer').forEach((modal) => modal.classList.add('hidden')); }
function saveSettings() {
  ['openai', 'gemini', 'openrouter'].forEach((key) => localStorage.setItem(`chat-glu-key-${key}`, document.querySelector(`#${key}-key`).value.trim()));
  localStorage.setItem('chat-glu-roblox-endpoint', document.querySelector('#roblox-endpoint').value.trim());
  const message = document.querySelector('#saved-message');
  if (message) message.textContent = 'Saved locally';
  setTimeout(closeModals, 700);
}
function saveProfile() { state.profile.name = document.querySelector('#profile-name').value.trim() || 'My account'; state.profile.avatar = document.querySelector('#profile-avatar').value.trim() || 'M'; save(); render(); }
function escapeHtml(value) { return String(value).replace(/[&<>"']/g, (char) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#039;' })[char]); }
function renderMessageContent(value) {
  const text = messageText(value);
  const parts = [];
  let cursor = 0;
  const pattern = /```([a-zA-Z0-9#+._-]*)\r?\n([\s\S]*?)```/g;
  let match;
  while ((match = pattern.exec(text))) {
    const prose = text.slice(cursor, match.index).trim();
    if (prose) parts.push(`<p>${escapeHtml(prose).replace(/\r?\n/g, '<br>')}</p>`);
    const language = match[1] || 'text';
    const code = match[2].replace(/\r?\n$/, '');
    const encoded = encodeURIComponent(code);
    const filename = language.toLowerCase() === 'lua' ? 'methusos-script.lua' : `methusos-code.${language.toLowerCase() === 'javascript' ? 'js' : language.toLowerCase()}`;
    parts.push(`<div class="code-card"><div class="code-toolbar"><span>${escapeHtml(language)}</span><div><button data-copy-code="${encoded}">Copy</button><button data-download-code="${encoded}" data-filename="${filename}">Download</button></div></div><pre><code>${escapeHtml(code)}</code></pre></div>`);
    cursor = match.index + match[0].length;
  }
  const remainder = text.slice(cursor).trim();
  if (remainder) parts.push(`<p>${escapeHtml(remainder).replace(/\r?\n/g, '<br>')}</p>`);
  return parts.join('') || '<p></p>';
}
function downloadCode(code, filename) {
  const blob = new Blob([code], { type: 'text/plain;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = filename;
  link.click();
  URL.revokeObjectURL(url);
}
function messageText(value) {
  if (typeof value === 'string') return value;
  if (value && typeof value === 'object') return value.text || value.content || 'Methusos 5 returned a response.';
  return value == null ? '' : String(value);
}

render();
