# Análisis de seguridad para sitio estático

**Session ID:** ses_f447d2e4cffe1yYDahco30S50m
**Created:** 19/9/2026, 16:11:47
**Updated:** 19/9/2026, 16:20:07

---

## User

Este no es más que un static site pero toca preotegerlo, por ende quiero que has un analisis de seguridad y que me ayudes a proteger la pagina de futurass vulnerabilidades ataques u otras cosas que se puedan presentar. usa las skills de seguridad que tengas

---

## Assistant (Plan · DeepSeek V4 Pro (New) · 6.4s)

_Thinking:_

The user wants a security analysis of their static site and help protecting it from future vulnerabilities/attacks. They want me to use security skills. Let me load the security skill and explore the codebase.

I'm in plan mode - read only. Let me first explore the codebase and load the security skill.

Let me start by loading the security-best-practices skill and exploring the codebase.

**Tool: skill**

**Input:**
```json
{
  "name": "security-best-practices"
}
```

**Output:**
```
<skill_content name="security-best-practices">
# Skill: security-best-practices

# Security Best Practices

## Overview

This skill provides a description of how to identify the language and frameworks used by the current context, and then to load information from this skill's references directory about the security best practices for this language and or frameworks.

This information, if present, can be used to write new secure by default code, or to passively detect major issues within existing code, or (if requested by the user) provide a vulnerability report and suggest fixes.

## Workflow

The initial step for this skill is to identify ALL languages and ALL frameworks which you are being asked to use or already exist in the scope of the project you are working in. Focus on the primary core frameworks. Often you will want to identify both frontend and backend languages and frameworks.

Then check this skill's references directory to see if there are any relevant documentation for the language and or frameworks. Make sure you read ALL reference files which relate to the specific framework or language. The format of the filenames is `<language>-<framework>-<stack>-security.md`. You should also check if there is a `<language>-general-<stack>-security.md` which is agnostic to the framework you may be using.

If working on a web application which includes a frontend and a backend, make sure you have checked for reference documents for BOTH the frontend and backend!

If you are asked to make a web app which will include both a frontend and backend, but the frontend framework is not specified, also check out `javascript-general-web-frontend-security.md`. It is important that you understand how to secure both the frontend and backend.

If no relevant information is available in the skill's references directory, think a little bit about what you know about the language, the framework, and all well known security best practices for it. If you are unsure you can try to search online for documentation on security best practices.

From there it can operate in a few ways.

1. The primary mode is to just use the information to write secure by default code from this point forward. This is useful for starting a new project or when writing new code.

2. The secondary mode is to passively detect vulnerabilities while working in the project and writing code for the user. Critical or very important vulnerabilities or major issues going against security guidance can be flagged and the user can be told about them. This passive mode should focus on the largest impact vulnerabilities and secure defaults.

3. The user can ask for a security report or to improve the security of the codebase. In this case a full report should be produced describe anyways the project fails to follow security best practices guidance. The report should be prioritized and have clear sections of severity and urgency. Then offer to start working on fixes for these issues. See #fixes below.

## Workflow Decision Tree

- If the language/framework is unclear, inspect the repo to determine it and list your evidence.
- If matching guidance exists in `references/`, load only the relevant files and follow their instructions.
- If no matching guidance exists, consider if you know any well known security best practices for the chosen language and or frameworks, but if asked to generate a report, let the user know that concrete guidance is not available (you can still generate the report or detect for sure critical vulnerabilities)

# Overrides

While these references contain the security best practices for languages and frameworks, customers may have cases where they need to bypass or override these practices. Pay attention to specific rules and instructions in the project's documentation and prompt files which may require you to override certain best practices. When overriding a best practice, you MAY report it to the user, but do not fight with them. If a security best practice needs to be bypassed / ignored for some project specific reason, you can also suggest to add documentation about this to the project so it is clear why the best practice is not being followed and to follow that bypass in the future.

# Report Format

When producing a report, you should write the report as a markdown file in `security_best_practices_report.md` or some other location if provided by the user. You can ask the user where they would like the report to be written to.

The report should have a short executive summary at the top.

The report should be clearly delineated into multiple sections based on severity of the vulnerability. The report should focus on the most critical findings as these have the highest impact for the user. All findings should be noted with an numeric ID to make them easier to reference.

For critical findings include a one sentence impact statement.

Once the report is written, also report it to the user directly, although you may be less verbose. You can offer to explain any of the findings or the reasons behind the security best practices guidance if the user wants more info on any findings.

Important: When referencing code in the report, make sure to find and include line numbers for the code you are referencing.

After you write the report file, summarize the findings to the user.

Also tell the user where the final report was written to

# Fixes

If you produced a report, let the user read the report and ask to begin performing fixes.

If you passively found a critical finding, notify the user and ask if they would like you to fix this finding.

When producing fixes, focus on fixing a single finding at a time. The fixes should have concise clear comments explaining that the new code is based on the specific security best practice, and perhaps a very short reason why it would be dangerous to not do it in this way.

Always consider if the changes you want to make will impact the functionality of the user's code. Consider if the changes may cause regressions with how the project works currently. It is often the case that insecure code is relied on for other reasons (and this is why insecure code lives on for so long). Avoid breaking the user's project as this may make them not want to apply security fixes in the future. It is better to write a well thought out, well informed by the rest of the project, fix, then a quick slapdash change.

Always follow any normal change or commit flow the user has configured. If making git commits, provide clear commit messages explaining this is to align with security best practices. Try to avoid bunching a number of unrelated findings into a single commit.

Always follow any normal testing flows the user has configured (if any) to confirm that your changes are not introducing regressions. Consider the second order impacts the changes may have and inform the user before making them if there are any.

# General Security Advice

Below is a few bits of secure coding advice that applies to almost any language or framework.

### Avoid Using Incrementing IDs for Public IDs of Resources

When assigning an ID for some resource, which will then be used by exposed to the internet, avoid using small auto-incrementing IDs. Use longer, random UUID4 or random hex string instead. This will prevent users from learning the quantity of a resource and being able to guess resource IDs.

### A note on TLS

While TLS is important for production deployments, most development work will be with TLS disabled or provided by some out-of-scope TLS proxy. Due to this, be very careful about not reporting lack of TLS as a security issue. Also be very careful around use of "secure" cookies. They should only be set if the application will actually be over TLS. If they are set on non-TLS applications (such as when deployed for local dev or testing), it will break the application. You can provide a env or other flag to override setting secure as a way to keep it off until on a TLS production deployment. Additionally avoid recommending HSTS. It is dangerous to use without full understanding of the lasting impacts (can cause major outages and user lockout) and it is not generally recommended for the scope of projects being reviewed by codex.

Base directory for this skill: C:\Users\ASUS\.agents\skills\security-best-practices
Relative paths in this skill (e.g., scripts/, reference/) are relative to this base directory.
Note: file list is sampled.

<skill_files>
<file>C:\Users\ASUS\.agents\skills\security-best-practices\LICENSE.txt</file>
<file>C:\Users\ASUS\.agents\skills\security-best-practices\agents\openai.yaml</file>
<file>C:\Users\ASUS\.agents\skills\security-best-practices\references\python-flask-web-server-security.md</file>
<file>C:\Users\ASUS\.agents\skills\security-best-practices\references\python-fastapi-web-server-security.md</file>
<file>C:\Users\ASUS\.agents\skills\security-best-practices\references\python-django-web-server-security.md</file>
<file>C:\Users\ASUS\.agents\skills\security-best-practices\references\javascript-typescript-vue-web-frontend-security.md</file>
<file>C:\Users\ASUS\.agents\skills\security-best-practices\references\javascript-typescript-react-web-frontend-security.md</file>
<file>C:\Users\ASUS\.agents\skills\security-best-practices\references\javascript-typescript-nextjs-web-server-security.md</file>
<file>C:\Users\ASUS\.agents\skills\security-best-practices\references\javascript-jquery-web-frontend-security.md</file>
<file>C:\Users\ASUS\.agents\skills\security-best-practices\references\javascript-general-web-frontend-security.md</file>
</skill_files>
</skill_content>
```

**Tool: bash**

**Input:**
```json
{
  "command": "git status; echo \"---\"; git log --oneline -5"
}
```

**Output:**
```
On branch main
Your branch is up to date with 'origin/main'.

Changes not staged for commit:
  (use "git add <file>..." to update what will be committed)
  (use "git restore <file>..." to discard changes in working directory)
	modified:   src/components/pages/Inicio.jsx
	modified:   src/data/Personal.js

no changes added to commit (use "git add" and/or "git commit -a")
---
01778e1 Ajustes de visualización e interacción.
9d6c302 Solución de imagenes de los comites organizativos del eventos
26ef3a4 feat: integrar Google Apps Script para guardar inscripciones en Google Sheets
f726146 Cambios en el mapeo del sitio web y actualización del dominio a 'semanadelageofisica.com'
c3e23d9 Cambio en la reproducción automatica del video, ajuste y responsividad de frase y titulo del proyecto

```

**Tool: bash**

**Input:**
```json
{
  "command": "Get-ChildItem -Force | Select-Object Mode,Length,Name"
}
```

**Output:**
```

Mode   Length Name             
----   ------ ----             
d--h--        .git             
d-----        dist             
d-----        node_modules     
d-----        public           
d-----        scripts          
d-----        src              
-a---- 385    .env             
-a---- 389    .env.example     
-a---- 283    .gitignore       
-a---- 589    eslint.config.js 
-a---- 4252   index.html       
-a---- 128822 package-lock.json
-a---- 977    package.json     
-a---- 5221   README.md        
-a---- 234    render.yaml      
-a---- 243    vite.config.js   



```

---

## Assistant (Plan · DeepSeek V4 Pro (New) · 4.7s)

_Thinking:_

Let me explore the codebase. It's a Vite + React app. There's a `.env` file, `.env.example`, and it uses Google Apps Script. Let me look at the structure, package.json, and key files.

**Tool: read**

**Input:**
```json
{
  "filePath": "C:\\Users\\ASUS\\Desktop\\UIS\\HDSP\\SemanaGeofisica\\6a-semana-geofisica.github.io\\package.json"
}
```

**Output:**
```
<path>C:\Users\ASUS\Desktop\UIS\HDSP\SemanaGeofisica\6a-semana-geofisica.github.io\package.json</path>
<type>file</type>
<content>
1: {
2:   "name": "6a-semana-geofisica",
3:   "private": true,
4:   "version": "0.0.0",
5:   "type": "module",
6:   "scripts": {
7:     "dev": "vite",
8:     "build": "vite build",
9:     "lint": "eslint .",
10:     "preview": "vite preview"
11:   },
12:   "dependencies": {
13:     "@emailjs/browser": "^4.4.1",
14:     "@tailwindcss/vite": "^4.3.3",
15:     "framer-motion": "^13.1.0",
16:     "lucide-react": "^1.33.0",
17:     "react": "^19.2.8",
18:     "react-dom": "^19.2.8",
19:     "react-router": "^7.18.2"
20:   },
21:   "devDependencies": {
22:     "@babel/core": "^7.29.7",
23:     "@eslint/js": "^10.0.1",
24:     "@rolldown/plugin-babel": "^0.2.3",
25:     "@types/react": "^19.2.17",
26:     "@types/react-dom": "^19.2.3",
27:     "@vitejs/plugin-react": "^6.0.4",
28:     "babel-plugin-react-compiler": "^1.0.0",
29:     "eslint": "^10.8.0",
30:     "eslint-plugin-react-hooks": "^7.1.1",
31:     "eslint-plugin-react-refresh": "^0.5.3",
32:     "glob": "^13.0.6",
33:     "globals": "^17.7.0",
34:     "sharp": "^0.35.3",
35:     "vite": "^8.2.0"
36:   }
37: }

(End of file - total 37 lines)
</content>
```

**Tool: read**

**Input:**
```json
{
  "filePath": "C:\\Users\\ASUS\\Desktop\\UIS\\HDSP\\SemanaGeofisica\\6a-semana-geofisica.github.io\\.env.example"
}
```

**Output:**
```
<path>C:\Users\ASUS\Desktop\UIS\HDSP\SemanaGeofisica\6a-semana-geofisica.github.io\.env.example</path>
<type>file</type>
<content>
1: VITE_EMAILJS_PUBLIC_KEY=pLZjbkiSnxwLTLK7G
2: VITE_EMAILJS_SERVICE_ID=service_ao957l6
3: VITE_EMAILJS_TEMPLATE_ASISTENTE_ID=template_6qec1n8
4: VITE_EMAILJS_TEMPLATE_ORGANIZADOR_ID=template_l5egac8
5: VITE_EMAILJS_ORGANIZADOR_EMAIL=6a.semana.geofisica@gmail.com
6: VITE_APPS_SCRIPT_URL=https://script.google.com/macros/s/AKfycbyiLAXIQYyh51MMIDySHMOgFuFQnnYEKklZ4381WozskLCS55CbMkrESHoGzlu_esPZRg/exec

(End of file - total 6 lines)
</content>
```

**Tool: read**

**Input:**
```json
{
  "filePath": "C:\\Users\\ASUS\\Desktop\\UIS\\HDSP\\SemanaGeofisica\\6a-semana-geofisica.github.io\\.gitignore"
}
```

**Output:**
```
<path>C:\Users\ASUS\Desktop\UIS\HDSP\SemanaGeofisica\6a-semana-geofisica.github.io\.gitignore</path>
<type>file</type>
<content>
1: # Logs
2: logs
3: *.log
4: npm-debug.log*
5: yarn-debug.log*
6: yarn-error.log*
7: pnpm-debug.log*
8: lerna-debug.log*
9: 
10: node_modules
11: dist
12: dist-ssr
13: *.local
14: .env
15: 
16: # Editor directories and files
17: .vscode/*
18: !.vscode/extensions.json
19: .idea
20: .DS_Store
21: *.suo
22: *.ntvs*
23: *.njsproj
24: *.sln
25: *.sw?

(End of file - total 25 lines)
</content>
```

**Tool: read**

**Input:**
```json
{
  "filePath": "C:\\Users\\ASUS\\Desktop\\UIS\\HDSP\\SemanaGeofisica\\6a-semana-geofisica.github.io\\vite.config.js"
}
```

**Output:**
```
<path>C:\Users\ASUS\Desktop\UIS\HDSP\SemanaGeofisica\6a-semana-geofisica.github.io\vite.config.js</path>
<type>file</type>
<content>
1: import { defineConfig } from 'vite'
2: import tailwindcss from '@tailwindcss/vite'
3: import react from '@vitejs/plugin-react'
4: 
5: // https://vite.dev/config/
6: export default defineConfig({
7:   plugins: [
8:     react(),
9:     tailwindcss()
10:   ],
11: })

(End of file - total 11 lines)
</content>
```

**Tool: read**

**Input:**
```json
{
  "filePath": "C:\\Users\\ASUS\\Desktop\\UIS\\HDSP\\SemanaGeofisica\\6a-semana-geofisica.github.io\\index.html"
}
```

**Output:**
```
<path>C:\Users\ASUS\Desktop\UIS\HDSP\SemanaGeofisica\6a-semana-geofisica.github.io\index.html</path>
<type>file</type>
<content>
1: <!doctype html>
2: <html lang="es">
3:   <head>
4:     <meta charset="UTF-8" />
5:     <meta name="viewport" content="width=device-width, initial-scale=1.0" />
6: 
7:     <title>VI Semana de la Geofísica | UIS — 3 al 7 de noviembre de 2026</title>
8:     <meta name="description" content="VI Semana de la Geofísica de la Universidad Industrial de Santander. Del 3 al 7 de noviembre de 2026 en Bucaramanga. Conferencias, cursos, networking y más sobre geociencias, inteligencia artificial y transición energética." />
9:     <meta name="keywords" content="semana de la geofísica, geofísica, UIS, Universidad Industrial de Santander, Bucaramanga, geociencias, sismología, exploración geofísica, inteligencia artificial, transición energética, conferencias, congreso, evento científico, Colombia" />
10:     <meta name="author" content="Grupo de Investigación HDSP — UIS" />
11:     <meta name="robots" content="index, follow" />
12:     <meta name="theme-color" content="#1e3a8a" />
13:     <link rel="canonical" href="https://semamnadelageofisica.com/" />
14: 
15:     <!-- Favicon -->
16:     <link rel="icon" type="image/svg+xml" href="/geofisica.svg" />
17:     <link rel="apple-touch-icon" href="/geofisica.svg" />
18: 
19:     <!-- Open Graph / Facebook -->
20:     <meta property="og:type" content="website" />
21:     <meta property="og:url" content="https://semamnadelageofisica.com/" />
22:     <meta property="og:title" content="VI Semana de la Geofísica | UIS" />
23:     <meta property="og:description" content="Del 3 al 7 de noviembre de 2026 en Bucaramanga. Conferencias, cursos y networking en geociencias, inteligencia artificial y transición energética." />
24:     <meta property="og:image" content="https://semamnadelageofisica.com/og-image.png" />
25:     <meta property="og:image:width" content="1200" />
26:     <meta property="og:image:height" content="630" />
27:     <meta property="og:locale" content="es_CO" />
28:     <meta property="og:site_name" content="VI Semana de la Geofísica — UIS" />
29: 
30:     <!-- Twitter -->
31:     <meta name="twitter:card" content="summary_large_image" />
32:     <meta name="twitter:url" content="https://semamnadelageofisica.com/" />
33:     <meta name="twitter:title" content="VI Semana de la Geofísica | UIS" />
34:     <meta name="twitter:description" content="Del 3 al 7 de noviembre de 2026 en Bucaramanga. Conferencias, cursos y networking en geociencias." />
35:     <meta name="twitter:image" content="https://semamnadelageofisica.com/og-image.png" />
36: 
37:     <!-- Structured Data -->
38:     <script type="application/ld+json">
39:     {
40:       "@context": "https://schema.org",
41:       "@type": "Event",
42:       "name": "VI Semana de la Geofísica",
43:       "description": "Evento académico y científico de la Universidad Industrial de Santander enfocado en geociencias, inteligencia artificial, transición energética, sismología y agrogeofísica.",
44:       "url": "https://semamnadelageofisica.com/",
45:       "organizer": {
46:         "@type": "Organization",
47:         "name": "Grupo de Investigación HDSP — Universidad Industrial de Santander",
48:         "url": "https://www.uis.edu.co/"
49:       },
50:       "location": {
51:         "@type": "Place",
52:         "name": "Universidad Industrial de Santander",
53:         "address": {
54:           "@type": "PostalAddress",
55:           "addressLocality": "Bucaramanga",
56:           "addressRegion": "Santander",
57:           "addressCountry": "CO"
58:         }
59:       },
60:       "startDate": "2026-11-03",
61:       "endDate": "2026-11-07",
62:       "eventAttendanceMode": "https://schema.org/OfflineEventAttendanceMode",
63:       "eventStatus": "https://schema.org/EventScheduled",
64:       "keywords": "geofísica, sismología, inteligencia artificial, transición energética, geociencias, UIS"
65:     }
66:     </script>
67: 
68:     <!-- Fonts -->
69:     <link rel="preconnect" href="https://fonts.googleapis.com" />
70:     <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
71:     <link
72:       href="https://fonts.googleapis.com/css2?family=EB+Garamond:wght@500;600;700&family=Inter:wght@400;500;600;700&family=Montserrat:wght@400;500;600;700;800;900&display=swap"
73:       rel="stylesheet"
74:     />
75:   </head>
76:   <body>
77:     <div id="root"></div>
78:     <script type="module" src="/src/main.jsx"></script>
79:   </body>
80: </html>

(End of file - total 80 lines)
</content>
```

**Tool: read**

**Input:**
```json
{
  "filePath": "C:\\Users\\ASUS\\Desktop\\UIS\\HDSP\\SemanaGeofisica\\6a-semana-geofisica.github.io\\render.yaml"
}
```

**Output:**
```
<path>C:\Users\ASUS\Desktop\UIS\HDSP\SemanaGeofisica\6a-semana-geofisica.github.io\render.yaml</path>
<type>file</type>
<content>
1: services:
2:   - type: web
3:     name: 6a-semana-geofisica
4:     runtime: static
5:     buildCommand: npm run build
6:     staticPublishPath: dist
7:     routes:
8:       - type: rewrite
9:         source: "/*"
10:         destination: "/index.html"

(End of file - total 10 lines)
</content>
```

---

## Assistant (Plan · DeepSeek V4 Pro (New) · 9.8s)

_Thinking:_

This is a React + Vite static site deployed on Render. It uses EmailJS (client-side) and Google Apps Script for form submissions. Key concerns:

1. `.env` file exists with secrets (but is gitignored). However, `VITE_` prefixed variables are compiled into the client bundle - so EmailJS public key, service ID, template IDs are public anyway. The Apps Script URL is also public.

2. Need to check `.env` file - does it contain actual secrets? It's gitignored so not committed. But the `.env.example` has real-looking values committed.

3. Google Apps Script - form submissions go directly to Apps Script URL. Need to check for CORS / security of that endpoint.

Let me explore the src directory and check for security-relevant code: forms, emailjs usage, apps script usage, dangerouslySetInnerHTML, links with target=_blank, etc.

Let me read the reference security docs for react frontend and general frontend, and explore the src directory.

**Tool: read**

**Input:**
```json
{
  "filePath": "C:\\Users\\ASUS\\.agents\\skills\\security-best-practices\\references\\javascript-general-web-frontend-security.md"
}
```

**Output:**
```
<path>C:\Users\ASUS\.agents\skills\security-best-practices\references\javascript-general-web-frontend-security.md</path>
<type>file</type>
<content>
1: # Frontend JavaScript/TypeScript Web Security Spec (Vanilla Browser JS/TS, Modern Browsers)
2: 
3: This document is designed as a **security spec** that supports:
4: 
5: 1. **Secure-by-default code generation** for new frontend JavaScript/TypeScript (no specific framework assumed).
6: 2. **Security review / vulnerability hunting** in existing frontend code (passive “notice issues while working” and active “scan the repo and report findings”).
7: 
8: It is intentionally written as a set of **normative requirements** (“MUST/SHOULD/MAY”) plus **audit rules** (what bad patterns look like, how to detect them, and how to fix/mitigate them).
9: 
10: ---
11: 
12: ## 0) Safety, boundaries, and anti-abuse constraints (MUST FOLLOW)
13: 
14: * MUST NOT request, output, log, hard-code, or commit secrets (API keys intended to be secret, private keys, passwords, OAuth refresh tokens, session tokens, cookies).
15:   Notes:
16: 
17:   * Frontend code is inherently observable by end users. If a value must remain secret, it must not be in browser-delivered code.
18:   * If the project uses “public” keys (e.g., publishable analytics keys), they MUST be treated as non-secret and scoped accordingly.
19: 
20: * MUST NOT “fix” security by disabling protections (e.g., weakening CSP with `unsafe-inline`/`unsafe-eval` without justification, removing origin checks for `postMessage`, switching to `innerHTML` for convenience, accepting arbitrary redirects/URLs, or turning off sanitization).
21: 
22: * MUST provide **evidence-based findings** during audits: cite file paths, code snippets, and relevant HTML/CSP/config values that justify the claim.
23: 
24: * MUST treat uncertainty honestly:
25: 
26:   * Security headers (CSP, frame-ancestors, etc.) might be set by server/edge/CDN rather than in repo code. If not visible, report as “not visible here; verify at runtime/edge config.” (Also note that `<meta http-equiv=...>` only simulates a subset of headers; don’t assume other security headers exist just because a meta tag exists.) ([MDN Web Docs][1])
27: 
28: ---
29: 
30: ## 1) Operating modes
31: 
32: ### 1.1 Generation mode (default)
33: 
34: When asked to write new frontend JS/TS code or modify existing code:
35: 
36: * MUST follow every **MUST** requirement in this spec.
37: * SHOULD follow every **SHOULD** requirement unless the user explicitly says otherwise.
38: * MUST prefer safe-by-default browser APIs and proven libraries over custom security code (especially for HTML sanitization).
39: * MUST avoid introducing new risky sinks (DOM XSS injection sinks like `innerHTML`, navigation to `javascript:` URLs, dynamic code execution via `eval`/`Function`, unsafe `postMessage`, unsafe third-party script loading, etc.). ([OWASP Cheat Sheet Series][2])
40: 
41: ### 1.2 Passive review mode (always on while editing)
42: 
43: While working anywhere in a frontend repo (even if the user did not ask for a security scan):
44: 
45: * MUST “notice” violations of this spec in touched/nearby code.
46: * SHOULD mention issues as they come up, with a brief explanation + safe fix.
47: 
48: ### 1.3 Active audit mode (explicit scan request)
49: 
50: When the user asks to “scan”, “audit”, or “hunt for vulns”:
51: 
52: * MUST systematically search the codebase for violations of this spec.
53: * MUST output findings in a structured format (see §2.3).
54: 
55: Recommended audit order:
56: 
57: 1. HTML entrypoints (`index.html`, server-rendered templates), script/style includes, and any CSP delivery (header vs meta). ([W3C][3])
58: 2. DOM XSS sinks (`innerHTML`, `document.write`, `insertAdjacentHTML`, event-handler attributes) and their data sources (URL params/hash, storage, postMessage, API responses). ([OWASP Cheat Sheet Series][2])
59: 3. Navigation/redirect handling (`window.location*`, link targets, URL allowlists) including `javascript:` URL hazards. ([MDN Web Docs][4])
60: 4. Cross-origin communication (`postMessage`, iframe embed patterns, sandboxing). ([MDN Web Docs][5])
61: 5. Storage of sensitive data (localStorage/sessionStorage) and assumptions about trust. ([OWASP Cheat Sheet Series][6])
62: 6. Third-party scripts / tag managers / CDNs, and integrity controls (SRI) and policy controls (CSP). ([OWASP Cheat Sheet Series][7])
63: 7. DOM clobbering gadgets and unsafe reliance on `window`/`document` named properties. ([OWASP Cheat Sheet Series][8])
64: 
65: ---
66: 
67: ## 2) Definitions and review guidance
68: 
69: ### 2.1 Untrusted input (treat as attacker-controlled unless proven otherwise)
70: 
71: Examples include:
72: 
73: * URL-derived data: `location.href`, `location.search`, `location.hash`, `document.baseURI`, `new URLSearchParams(location.search)`, routing fragments. ([OWASP Cheat Sheet Series][2])
74: * DOM content that may include user-controlled markup (comments, profiles, CMS content, markdown-to-HTML output, etc.), especially if inserted dynamically. ([OWASP Cheat Sheet Series][2])
75: * `postMessage` event data (`event.data`) and metadata (`event.origin`) from other windows/frames. ([MDN Web Docs][5])
76: * Browser storage: `localStorage`, `sessionStorage`, IndexedDB (contents can be attacker-influenced via XSS or local machine access; never treat as “trusted”). ([OWASP Cheat Sheet Series][6])
77: * Any data returned from network calls (even if from “your API”), because it may contain stored attacker content that becomes dangerous only when inserted into the DOM. ([OWASP Cheat Sheet Series][2])
78: 
79: ### 2.2 Dangerous sink (DOM XSS / code execution sink)
80: 
81: A sink is any API/operation that can execute script or interpret attacker-controlled strings as HTML/JS/URL in a security-sensitive way. High-signal sinks include:
82: 
83: * HTML parsing / insertion: `innerHTML`, `outerHTML`, `insertAdjacentHTML`, `document.write`, `document.writeln`. ([OWASP Cheat Sheet Series][2])
84: * Dynamic code execution: `eval`, `new Function`, `setTimeout("...")`, `setInterval("...")`. ([MDN Web Docs][10])
85: * Navigation to script-bearing URLs (e.g., `javascript:`) via setters like `Location.href`/`window.location` (and via link `href` if attacker-controlled). ([MDN Web Docs][4])
86: * Setting event handler attributes from strings, e.g. `setAttribute("onclick", "...")`. ([OWASP Cheat Sheet Series][2])
87: 
88: ### 2.3 Required audit finding format
89: 
90: For each issue found, output:
91: 
92: * Rule ID:
93: * Severity: Critical / High / Medium / Low
94: * Location: file path + function/class/module + line(s)
95: * Evidence: the exact code/config snippet
96: * Impact: what could go wrong, who can exploit it
97: * Fix: safe change (prefer minimal diff)
98: * Mitigation: defense-in-depth if immediate fix is hard
99: * False positive notes: what to verify if uncertain
100: 
101: ---
102: 
103: ## 3) Secure baseline: minimum production configuration (MUST in production)
104: 
105: This is the smallest baseline that prevents common frontend JS/TS security misconfigurations. Some items are “in repo” (HTML/JS) and some may live at the server/edge.
106: 
107: ### 3.1 Content Security Policy (CSP) baseline (SHOULD; MUST for high-risk apps)
108: 
109: * SHOULD deliver CSP via HTTP response headers when possible.
110: * MAY deliver CSP via an HTML `<meta http-equiv="Content-Security-Policy" ...>` tag when you cannot set headers (e.g., purely static hosting constraints). ([MDN Web Docs][1])
111: * If using CSP via `<meta http-equiv>`, MUST understand the limitations:
112: 
113:   * The policy only applies to content that follows the meta element (so it must appear very early, before any scripts/resources you want governed). ([W3C][3])
114:   * The following directives are **not supported** in a meta-delivered policy and will be ignored: `report-uri`, `frame-ancestors`, and `sandbox`. ([W3C][3])
115:   * “Report-only” CSP cannot be set via a meta element. ([W3C][3])
116: 
117: Practical baseline goals:
118: 
119: * Avoid script sources `unsafe-inline` and `unsafe-eval` (they significantly weaken CSP’s value against XSS). ([MDN Web Docs][10])
120: * Prefer nonce- or hash-based script policies if you need inline scripts. ([MDN Web Docs][10])
121: * Consider enabling Trusted Types enforcement where feasible. ([MDN Web Docs][11])
122: 
123: ### 3.2 Third-party scripts baseline (SHOULD)
124: 
125: * SHOULD minimize third-party script execution and treat it as equivalent privilege to first-party JS (it runs with your origin’s privileges). ([OWASP Cheat Sheet Series][7])
126: * SHOULD use Subresource Integrity (SRI) for third-party scripts/styles loaded from CDNs. ([MDN Web Docs][12])
127: 
128: ### 3.3 Cross-window communication baseline (SHOULD)
129: 
130: * SHOULD restrict `postMessage` communications to explicit origins, and validate both origin and message shape. ([MDN Web Docs][5])
131: 
132: ---
133: 
134: ## 4) Rules (generation + audit)
135: 
136: Each rule contains: required practice, insecure patterns, detection hints, and remediation.
137: 
138: ### JS-XSS-001: Do not inject untrusted HTML into the DOM (avoid `innerHTML` and friends)
139: 
140: Severity: Critical if you can prove attacker-controlled input can reach these APIs; otherwise Medium
141: 
142: 
143: Required:
144: 
145: * MUST treat `innerHTML`, `outerHTML`, and `insertAdjacentHTML` as dangerous sinks when their input can contain untrusted data. ([OWASP Cheat Sheet Series][2])
146: * MUST prefer safe DOM APIs that do not parse HTML:
147: 
148:   * `textContent` for text. ([OWASP Cheat Sheet Series][2])
149:   * `document.createElement`, `appendChild`, `setAttribute` for non-event-handler attributes. ([OWASP Cheat Sheet Series][2])
150: * If HTML insertion is truly required, SHOULD sanitize with a well-reviewed HTML sanitizer and strongly consider enforcing Trusted Types to confine usage to audited code paths. ([MDN Web Docs][11])
151: 
152: Insecure patterns:
153: 
154: * `el.innerHTML = userInput`
155: * `el.insertAdjacentHTML('beforeend', userInput)`
156: * `el.outerHTML = userInput`
157: 
158: Detection hints:
159: 
160: * Search for: `.innerHTML`, `.outerHTML`, `insertAdjacentHTML(`.
161: * Trace the origin of inserted string: URL params/hash, postMessage, storage, API responses, DOM attributes. ([OWASP Cheat Sheet Series][2])
162: 
163: Fix:
164: 
165: * Replace with `textContent` for plain text. ([OWASP Cheat Sheet Series][2])
166: * For structured UI, build DOM nodes explicitly.
167: * For “rich text” requirements:
168: 
169:   * Sanitize using an allowlist-based sanitizer.
170:   * Prefer returning safe “components” instead of arbitrary HTML strings.
171:   * Use Trusted Types enforcement to ensure only `TrustedHTML` reaches sinks where supported. ([MDN Web Docs][11])
172: 
173: Mitigation:
174: 
175: * Deploy a strict CSP and consider Trusted Types enforcement (`require-trusted-types-for 'script'`). ([MDN Web Docs][10])
176: 
177: False positive notes:
178: 
179: * If the string is provably constant or fully generated from trusted constants, it may be safe. Still prefer safer APIs.
180: 
181: ---
182: 
183: ### JS-XSS-002: Avoid `document.write` / `document.writeln` (XSS + document clobbering hazards)
184: 
185: Severity: Critical if you can prove attacker-controlled input can reach these APIs; otherwise Medium 
186: 
187: Required:
188: 
189: * MUST avoid `document.write()` and `document.writeln()` in production code (they are XSS vectors and can be abused with crafted HTML even if some browsers block injected `<script>` in certain situations). ([MDN Web Docs][13])
190: * If legacy use is unavoidable, MUST ensure no untrusted input reaches these APIs and SHOULD enforce Trusted Types (`TrustedHTML`) where supported. ([MDN Web Docs][14])
191: 
192: Insecure patterns:
193: 
194: * `document.write(userInput)`
195: * `document.writeln(getParam('q'))`
196: 
197: Detection hints:
198: 
199: * Search for `document.write(`, `document.writeln(`. ([OWASP Cheat Sheet Series][2])
200: 
201: Fix:
202: 
203: * Replace with DOM manipulation (`createElement`, `appendChild`) or safe text insertion (`textContent`). ([OWASP Cheat Sheet Series][2])
204: 
205: Mitigation:
206: 
207: * Strict CSP + Trusted Types enforcement reduces blast radius if a sink remains. ([MDN Web Docs][10])
208: 
209: ---
210: 
211: ### JS-XSS-003: Do not use string-to-code execution (`eval`, `new Function`, string timeouts)
212: 
213: Severity: Critical if you can prove attacker-controlled input can reach these APIs; otherwise Medium
214: 
215: Required:
216: 
217: * MUST NOT pass untrusted data to:
218: 
219:   * `eval()`
220:   * `new Function(...)`
221:   * `setTimeout("...")` / `setInterval("...")` with string arguments ([MDN Web Docs][10])
222: * SHOULD avoid these APIs entirely in modern frontend code; refactor to non-eval logic. ([MDN Web Docs][10])
223: * MUST NOT “fix CSP breakage” by adding `unsafe-eval` unless there is a documented, reviewed justification and compensating controls. ([MDN Web Docs][10])
224: 
225: Insecure patterns:
226: 
227: * `eval(userInput)`
228: * `new Function("return " + userInput)()`
229: * `setTimeout(userInput, 0)` where userInput is a string
230: 
231: Detection hints:
232: 
233: * Search for `eval(`, `new Function`, `setTimeout("`, `setInterval("`.
234: * Also search for construction of code strings used later.
235: 
236: Fix:
237: 
238: * Replace dynamic code with:
239: 
240:   * structured data + explicit branching/handlers,
241:   * JSON parsing (`JSON.parse`) instead of `eval` for JSON. ([OWASP Cheat Sheet Series][2])
242: 
243: Mitigation:
244: 
245: * CSP that blocks `eval()`-like APIs by default, and avoid `unsafe-eval`. ([MDN Web Docs][10])
246: * Consider Trusted Types for controlled cases, but treat it as a hardening layer, not a license to keep eval patterns. ([MDN Web Docs][10])
247: 
248: ---
249: 
250: ### JS-XSS-004: Do not set event handler attributes from strings (e.g., `setAttribute("onclick", "...")`)
251: 
252: Severity: High
253: 
254: Required:
255: 
256: * MUST NOT use `setAttribute("on…", string)` or similar patterns with untrusted data; this coerces strings into executable code in the event-handler context. ([OWASP Cheat Sheet Series][2])
257: * SHOULD prefer `addEventListener` with function references.
258: 
259: Insecure patterns:
260: 
261: * `el.setAttribute("onclick", userInput)`
262: * `el.onclick = userControlledString` (string assignment)
263: 
264: Detection hints:
265: 
266: * Search for `.setAttribute("on`, `.onclick =`, `.onmouseover =`, etc.
267: * Trace whether RHS can be influenced by URL/hash/storage/postMessage. ([OWASP Cheat Sheet Series][2])
268: 
269: Fix:
270: 
271: * Replace with `addEventListener("click", () => { ... })`.
272: * If dynamic dispatch is needed, use an allowlisted mapping from identifiers to functions (no string eval). ([OWASP Cheat Sheet Series][2])
273: 
274: ---
275: 
276: ### JS-URL-001: Sanitize and allowlist URLs before navigation (especially `window.location` / `location.replace`)
277: 
278: Severity: Low (High if you can prove an attacker can fully control the URL)
279: 
280: IMPORTANT: This can cause a lot of false positives. Please perform extra analysis to determine if the url is fully attacker controlled. If not fully attacker controlled, then this is informational at best.
281: 
282: NOTE: It may be important functionality to be able to redirect to any given url. If that is the goal of the feature, then at a minimum, ensure it checks the schema even if the origin is allowed to be anything.
283: 
284: Required:
285: 
286: * MUST treat any assignment to navigation targets as security-sensitive:
287: 
288:   * `window.location = ...`
289:   * `location.href = ...`
290:   * `location.assign(...)`
291:   * `location.replace(...)` ([MDN Web Docs][4])
292: * MUST prevent navigation to `javascript:` URLs (and generally other script-bearing/active schemes), especially when input is derived from URL params, storage, or messages. ([MDN Web Docs][4]). Only allow `http:` and `https:`.
293: * SHOULD validate/allowlist the destination. A safe baseline is:
294: 
295:   * Allow only same-origin relative paths, OR
296:   * Allow only a strict allowlist of origins and protocols (typically `https:` and optionally `http:` for localhost dev). ([OWASP Cheat Sheet Series][8])
297: 
298: Insecure patterns:
299: 
300: * `location.replace(getParam("next"))`
301: * `window.location = userSuppliedUrl`
302: * `location.assign(window.redirectTo || "/")` where `redirectTo` can be clobbered or attacker-set ([OWASP Cheat Sheet Series][8])
303: 
304: Detection hints:
305: 
306: * Search for `window.location`, `location.href`, `location.assign`, `location.replace`.
307: * Search for common redirect parameters: `next`, `returnTo`, `redirect`, `url`, `continue`.
308: * Search for `javascript:` literal usage. ([MDN Web Docs][4])
309: 
310: Fix:
311: 
312: * Parse and validate with `new URL(value, location.origin)` and then enforce:
313: 
314:   * `url.protocol` in `{ "https:" }` (and only include `http:` in explicit dev-only code paths),
315:   * `url.origin` equals `location.origin` for internal redirects, or in a strict allowlist for external redirects,
316:   * optionally allow only specific path prefixes. ([MDN Web Docs][4])
317: * If validation fails, navigate to a safe default (home/dashboard).
318: 
319: Mitigation:
320: 
321: * Deploy strict CSP and Trusted Types enforcement to reduce the impact of DOM XSS sinks, but note that Trusted Types do not prevent every possible unsafe navigation scenario on their own. ([W3C][15])
322: 
323: False positive notes:
324: 
325: IMPORTANT: This can cause a lot of false positives. Please perform extra analysis to determine if the url is fully attacker controlled. If not fully attacker controlled, then this is informational at best.
326: 
327: * Some apps intentionally support external redirects (SSO, payment flows). Those MUST be allowlisted and documented.
328: 
329: ---
330: 
331: ### JS-URL-002: Sanitize URLs before inserting into DOM URL contexts (`href`, `src`, etc.)
332: 
333: Severity: Low (High if you can prove an attacker can fully control the URL)
334: 
335: IMPORTANT: This can cause a lot of false positives. Please perform extra analysis to determine if the url is fully attacker controlled. If not fully attacker controlled, then this is informational at best.
336: 
337: Required:
338: 
339: * MUST treat setting URL-bearing DOM attributes/properties as security-sensitive, especially:
340: 
341:   * `a.href`, `img.src`, `script.src`, `iframe.src`, `form.action`, `link.href`.
342: * MUST prevent script-bearing schemes (`javascript:` and other active schemes) when values can be attacker-influenced. ([MDN Web Docs][4])
343: * SHOULD prefer setting properties (e.g., `a.href = url.toString()`) after parsing and validation, rather than string concatenation.
344: 
345: Insecure patterns:
346: 
347: * `link.href = getParam("u")`
348: * `el.setAttribute("href", userInput)` without validation
349: * constructing URLs via concatenation with untrusted pieces
350: 
351: Detection hints:
352: 
353: * Search for `.href =`, `.src =`, `.action =`, `setAttribute("href"`, `setAttribute("src"`.
354: * Search for `javascript:` / `data:` usage in URLs. ([MDN Web Docs][4])
355: 
356: IMPORTANT: This can cause a lot of false positives. Please perform extra analysis to determine if the url is fully attacker controlled. If not fully attacker controlled, then this is informational at best.
357: 
358: Fix:
359: 
360: * Use `new URL(...)` and validate:
361: 
362:   * protocol allowlist
363:   * avoid passing user-provided values into `<script src>` at all (treat as code execution). ([OWASP Cheat Sheet Series][8])
364: 
365: ---
366: 
367: ### JS-CSP-001: Use CSP; meta delivery is allowed
368: 
369: Severity: Medium to High (depends on threat model; High when handling untrusted content)
370: 
371: NOTE: It is most important to set the CSP's script-src. All other directives are not as important and can generally be excluded for the ease of development.
372: 
373: Required:
374: 
375: * SHOULD deploy a CSP as a major defense-in-depth against XSS. ([MDN Web Docs][10])
376: * MAY provide CSP via `<meta http-equiv="Content-Security-Policy" ...>` when headers are not available. ([MDN Web Docs][1])
377: * If CSP is delivered via meta, MUST:
378: 
379:   * place it early (before scripts/resources you want governed), and
380:   * not rely on unsupported directives in meta policies (`report-uri`, `frame-ancestors`, `sandbox`). ([W3C][3])
381: * MUST avoid adding `unsafe-inline` as a “quick fix” for CSP issues unless explicitly required and reviewed (it defeats much of CSP’s purpose). ([MDN Web Docs][10])
382: * MUST avoid adding `unsafe-eval` unless explicitly required and reviewed (it allows eval-like APIs that are commonly abused). ([MDN Web Docs][10])
383: 
384: Insecure patterns:
385: 
386: * No CSP present anywhere (repo HTML or server/edge) for an app that renders untrusted content.
387: * CSP includes `script-src 'unsafe-inline'` and/or `script-src 'unsafe-eval'` without strong justification. ([MDN Web Docs][10])
388: * CSP delivered via meta but includes `frame-ancestors` (it will be ignored in meta). ([W3C][3])
389: 
390: Detection hints:
391: 
392: * Search HTML for `<meta http-equiv="Content-Security-Policy"`.
393: * Search server/edge configs for `Content-Security-Policy` header.
394: * If CSP is only in meta, check it appears before any `<script>` tags you want governed. ([W3C][3])
395: 
396: Fix:
397: 
398: * Prefer header-delivered CSP at the server/edge.
399: * If constrained to meta, keep a strong allowlist CSP and document the limitations; implement clickjacking protections (e.g., `frame-ancestors`) at the server/edge, not in meta. ([W3C][3])
400: 
401: ---
402: 
403: ### JS-CSP-002: Prefer strict CSP (nonces/hashes); avoid inline/eval patterns in code
404: 
405: Severity: Medium
406: 
407: NOTE: It is most important to set the CSP's script-src. All other directives are not as important and can generally be excluded for the ease of development.
408: 
409: Required:
410: 
411: * SHOULD design frontend code to work under a strict CSP:
412: 
413:   * avoid inline scripts and inline event handlers,
414:   * avoid eval-like APIs (see JS-XSS-003),
415:   * allow scripts via nonce or hash when needed. ([MDN Web Docs][10])
416: 
417: Insecure patterns:
418: 
419: * Large amounts of inline script blocks and inline `onclick="..."` handlers.
420: * Libraries that require `unsafe-eval`.
421: 
422: Detection hints:
423: 
424: * Search for `<script>` blocks with inline code, `onclick="`, `onload="`, etc.
425: * Search for CSP directives containing `unsafe-inline` or `unsafe-eval`. ([MDN Web Docs][10])
426: 
427: Fix:
428: 
429: * Move inline scripts into external JS files (same-origin).
430: * Use nonces/hashes for any unavoidable inline blocks. ([MDN Web Docs][10])
431: 
432: ---
433: 
434: ### JS-TT-001: Use Trusted Types to reduce DOM XSS attack surface (where supported)
435: 
436: Severity: Low
437: 
438: Required:
439: 
440: * SHOULD consider enabling Trusted Types enforcement with CSP `require-trusted-types-for 'script'` to make many DOM XSS sinks reject raw strings. ([MDN Web Docs][11])
441: * If using Trusted Types, SHOULD also use the CSP `trusted-types` directive to restrict which policies can be created (reduces policy sprawl and improves auditability). ([MDN Web Docs][16])
442: * MUST keep Trusted Types policy code small, heavily reviewed, and used as the only path to produce trusted values for sinks. ([W3C][15])
443: 
444: Insecure patterns:
445: 
446: * “Trusted Types enabled” but policy simply returns input unchanged (no sanitization/validation).
447: * Many ad-hoc policies created across the codebase without restriction.
448: * Belief that Trusted Types alone prevents all unsafe navigations or all XSS classes. (It targets DOM injection sinks; it is not a universal sandbox.) ([W3C][15])
449: 
450: Detection hints:
451: 
452: * Search for CSP directives: `require-trusted-types-for` and `trusted-types`.
453: * Search code for `trustedTypes.createPolicy(` and inspect policy implementations. ([MDN Web Docs][11])
454: 
455: Fix:
456: 
457: * Add a small set of well-reviewed policies (e.g., `createHTML` that sanitizes).
458: * Restrict allowed policies via `trusted-types <policyName...>`.
459: * Migrate sinks to require `TrustedHTML` / `TrustedScriptURL` as appropriate. ([MDN Web Docs][11])
460: 
461: ---
462: 
463: ### JS-MSG-001: `postMessage` must use strict origin validation and explicit targetOrigin
464: 
465: Severity: Medium (High if dangerous behavior can be triggered via postMessage)
466: 
467: Required:
468: 
469: * When sending messages, MUST set an explicit `targetOrigin` (not `*`) to avoid sending data to an unexpected origin after redirects or window origin changes. ([MDN Web Docs][5])
470: * When receiving messages, MUST:
471: 
472:   * Validate `event.origin` exactly against an allowlist of expected origins (no substring matching). ([OWASP Cheat Sheet Series][6])
473:   * Consider validating `event.source` (expected window reference) when applicable. ([MDN Web Docs][5])
474:   * Validate `event.data` structure (schema/shape) and treat it purely as data (never evaluate it as code and never insert into DOM with `innerHTML`). ([OWASP Cheat Sheet Series][6])
475: 
476: Insecure patterns:
477: 
478: * `otherWindow.postMessage(payload, "*")`
479: * `window.addEventListener("message", (e) => { doSomething(e.data) })` with no `origin` check
480: * `if (e.origin.includes("trusted.com"))` (substring checks)
481: * `el.innerHTML = e.data` ([OWASP Cheat Sheet Series][6])
482: 
483: Detection hints:
484: 
485: * Search for `postMessage(`, `addEventListener("message"`, `onmessage =`.
486: * Audit all handlers for explicit allowlist checks on `event.origin`. ([OWASP Cheat Sheet Series][6])
487: 
488: Fix:
489: 
490: * Define an allowlist:
491: 
492:   * `const ALLOWED = new Set(["https://app.example.com", "https://accounts.example.com"]);`
493:   NOTE: For ease of development, you can use the current page's origin `window.location.origin` as a safe default origin.
494: * On receive:
495: 
496:   * `if (!ALLOWED.has(event.origin)) return;`
497:   * Validate `event.data` with a strict schema and reject unknown/extra fields.
498: * On send:
499: 
500:   * use the exact expected origin string as `targetOrigin`. ([OWASP Cheat Sheet Series][6])
501: 
502: Mitigation:
503: 
504: * Combine with a strict CSP and avoid DOM sinks in message paths. ([MDN Web Docs][10])
505: 
506: ---
507: 
508: ### JS-STORAGE-001: Web Storage is not a safe place for secrets (and is attacker-influencable)
509: 
510: Severity: Low
511: 
512: Required:
513: 
514: * MUST NOT store sensitive secrets or session identifiers in `localStorage` (or `sessionStorage`) if compromise would matter; a single XSS can exfiltrate everything in storage. ([OWASP Cheat Sheet Series][6])
515: * MUST treat values read from storage as untrusted input (attackers can load malicious values into storage via XSS). ([OWASP Cheat Sheet Series][6])
516: * SHOULD prefer server-set cookies with `HttpOnly` for session identifiers (JS cannot set `HttpOnly`, so avoid storing session IDs in JS-accessible storage). ([OWASP Cheat Sheet Series][6])
517: * SHOULD avoid hosting multiple unrelated apps on the same origin if they rely on storage separation (storage is origin-wide). ([OWASP Cheat Sheet Series][6])
518: 
519: Insecure patterns:
520: 
521: * `localStorage.setItem("access_token", token)`
522: * `localStorage.setItem("session", sessionId)`
523: * Assuming `localStorage` is “trusted because same-origin.”
524: 
525: Detection hints:
526: 
527: * Search for `localStorage.getItem`, `localStorage.setItem`, `sessionStorage.*`.
528: * Flag storage keys named `token`, `jwt`, `session`, `auth`, `refresh`. ([OWASP Cheat Sheet Series][6])
529: 
530: Fix:
531: 
532: * Use server-managed sessions or short-lived tokens delivered and rotated securely, with careful XSS defenses (CSP/Trusted Types) and minimal JS exposure.
533: * If storage must be used for non-sensitive state, keep it non-auth and validate/escape before use.
534: 
535: ---
536: 
537: ### JS-SUPPLY-001: Third-party JavaScript is a major supply-chain risk; minimize and control it
538: 
539: Severity: Low
540: 
541: Required:
542: 
543: * MUST treat third-party JS as equivalent to first-party JS in privilege (it can execute arbitrary code in your origin and access DOM data). ([OWASP Cheat Sheet Series][7])
544: * SHOULD minimize third-party scripts and prefer:
545: 
546:   * self-hosting / script mirroring,
547:   * strict CSP allowlists,
548:   * SRI for any CDN-hosted scripts,
549:   * ongoing monitoring for unexpected changes. ([OWASP Cheat Sheet Series][7])
550: 
551: Insecure patterns:
552: 
553: * Loading arbitrary remote scripts from many vendors without review.
554: * Using tag managers that can dynamically inject scripts with no integrity controls.
555: * Allowing scripts from broad wildcards in CSP (e.g., `script-src *`). ([MDN Web Docs][10])
556: 
557: Detection hints:
558: 
559: * Search HTML for `<script src="https://...">` and `tag manager` snippets.
560: * Search CSP `script-src` sources for wildcards or overly broad domains.
561: * Search for dynamic script injection: `document.createElement("script")`, `script.src = ...`, `appendChild(script)`. ([OWASP Cheat Sheet Series][8])
562: 
563: Fix:
564: 
565: * Remove unnecessary third-party tags.
566: * Self-host or mirror scripts where possible.
567: * Lock down CSP `script-src` to the smallest set of trusted sources.
568: * Add SRI for CDN scripts/styles. ([OWASP Cheat Sheet Series][7])
569: 
570: ---
571: 
572: ### JS-SRI-001: Use Subresource Integrity (SRI) for third-party scripts/styles
573: 
574: Severity: Low
575: 
576: Required:
577: 
578: * SHOULD use SRI to ensure browsers only load third-party resources if they match an expected cryptographic hash. ([MDN Web Docs][12])
579: * MUST update SRI hashes whenever the underlying resource changes (pin versions; avoid “latest” URLs).
580: 
581: Insecure patterns:
582: 
583: * `<script src="https://cdn.example.com/lib.js"></script>` with no `integrity`.
584: * Loading `latest` or unpinned third-party resources.
585: 
586: Detection hints:
587: 
588: * Search for `<script src="https://` and `<link rel="stylesheet" href="https://` without `integrity=`.
589: * Check whether `integrity` is present and uses strong hashes (sha256/384/512 are typical). ([MDN Web Docs][12])
590: 
591: Fix:
592: 
593: * Add `integrity="sha384-..."` (or appropriate) and ensure proper CORS mode where needed.
594: * Prefer self-hosting critical libraries.
595: 
596: ---
597: 
598: ### FS-DOMC-001: Prevent DOM clobbering (avoid relying on `window`/`document` named properties)
599: 
600: Severity: Medium to High (can become Critical if it enables script loading or `javascript:` navigation)
601: 
602: Required:
603: 
604: * MUST NOT rely on implicit global variables or `window.someName` / `document.someName` lookups that can be clobbered by injected HTML elements with matching `id`/`name`. ([OWASP Cheat Sheet Series][8])
605: * MUST avoid patterns like `let x = window.redirectTo || "/safe"; location.assign(x);` where `redirectTo` could be clobbered to an `<a>` element whose `href` is attacker-controlled (including `javascript:`). ([OWASP Cheat Sheet Series][8])
606: * SHOULD use explicit variable declarations, local scope, and explicit DOM queries (`getElementById`) rather than named property access. ([OWASP Cheat Sheet Series][8])
607: * If the app inserts user-controlled markup (even sanitized), SHOULD ensure sanitization strategies consider `id`/`name` collisions. ([OWASP Cheat Sheet Series][8])
608: 
609: Insecure patterns:
610: 
611: * `const cfg = window.config || {};` used for security-sensitive URLs.
612: * `const redirect = window.redirectTo || "/"; location.assign(redirect);` ([OWASP Cheat Sheet Series][8])
613: * Loading scripts from `window.*` config values without strict validation.
614: 
615: Detection hints:
616: 
617: * Search for `window.` and `document.` used as config stores (especially `||` fallback patterns).
618: * Search for usage of `location.assign/replace` with variables that come from `window`/`document` properties.
619: * Search for dynamic script creation (`createElement('script')`) where `.src` comes from a non-local variable. ([OWASP Cheat Sheet Series][8])
620: 
621: Fix:
622: 
623: * Store config in module-scoped constants (not on `window`/`document`) and pass it explicitly.
624: * Validate any URL-like config with protocol/origin allowlists (see FEJS-URL-001). ([OWASP Cheat Sheet Series][8])
625: * Consider hardening: sanitization, CSP, and (in limited cases) freezing sensitive objects, but treat these as defense-in-depth, not a substitute for safe coding patterns. ([OWASP Cheat Sheet Series][8])
626: 
627: ---
628: 
629: ## 5) Practical scanning heuristics (how to “hunt”)
630: 
631: When actively scanning, use these high-signal patterns:
632: 
633: * DOM XSS sinks:
634: 
635:   * `.innerHTML`, `.outerHTML`, `insertAdjacentHTML(`
636:   * `document.write(`, `document.writeln(` ([OWASP Cheat Sheet Series][2])
637: 
638: * Dangerous navigation / URL sinks:
639: 
640:   * `window.location`, `location.href`, `location.assign`, `location.replace`
641:   * `javascript:` literals (and other suspicious schemes like `data:text/html`) ([MDN Web Docs][4])
642: 
643: * String-to-code execution:
644: 
645:   * `eval(`, `new Function`, `setTimeout("`, `setInterval("` ([MDN Web Docs][10])
646: 
647: * Event-handler string injection:
648: 
649:   * `.setAttribute("on`, `.onclick =`, `.onload =` with strings ([OWASP Cheat Sheet Series][2])
650: 
651: * `postMessage`:
652: 
653:   * `postMessage(` with `"*"` as targetOrigin
654:   * `addEventListener("message"` without strict `event.origin` allowlist checks ([MDN Web Docs][5])
655: 
656: * Storage:
657: 
658:   * `localStorage.setItem(` / `getItem(`, `sessionStorage.*`
659:   * keys containing `token`, `jwt`, `session`, `auth`, `refresh` ([OWASP Cheat Sheet Series][6])
660: 
661: * CSP and related:
662: 
663:   * `Content-Security-Policy` header config (server/edge)
664:   * `<meta http-equiv="Content-Security-Policy" ...>`
665:   * CSP containing `unsafe-inline` or `unsafe-eval`
666:   * `require-trusted-types-for` / `trusted-types` directives ([MDN Web Docs][1])
667: 
668: * Third-party scripts:
669: 
670:   * `<script src="https://...">` without `integrity=`
671:   * Tag manager snippets and dynamic script injection code paths ([MDN Web Docs][12])
672: 
673: 
674: * DOM clobbering gadgets:
675: 
676:   * `window.<name> || ...` and `document.<name> || ...` patterns
677:   * security-sensitive usage of `window`/`document` properties as config sources ([OWASP Cheat Sheet Series][8])
678: 
679: Always try to confirm:
680: 
681: * data origin (untrusted vs trusted),
682: * sink type (HTML parse, navigation, code execution, message handling, storage),
683: * protective controls present (CSP, Trusted Types, sanitizers, strict allowlists, schema validation).
684: 
685: ---
686: 
687: ## 6) Sources (accessed 2026-01-27)
688: 
689: Primary standards / platform docs:
690: 
691: * W3C Content Security Policy Level 2 (HTML `<meta>` delivery restrictions; unsupported directives in meta CSP): `https://www.w3.org/TR/CSP2/` ([W3C][3])
692: * MDN: CSP Guide (strict CSP, nonces/hashes, `unsafe-inline`/`unsafe-eval`, eval blocking): `https://developer.mozilla.org/en-US/docs/Web/HTTP/Guides/CSP` ([MDN Web Docs][10])
693: * MDN: `<meta http-equiv>` (CSP via meta and warning about meta-based security headers): `https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/meta/http-equiv` ([MDN Web Docs][1])
694: * MDN: `frame-ancestors` (and note it’s not supported in `<meta>`): `https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/frame-ancestors` ([MDN Web Docs][18])
695: 
696: DOM XSS and dangerous sinks:
697: 
698: * OWASP: DOM Based XSS Prevention Cheat Sheet (dangerous sinks + safe patterns like `textContent`): `https://cheatsheetseries.owasp.org/cheatsheets/DOM_based_XSS_Prevention_Cheat_Sheet.html` ([OWASP Cheat Sheet Series][2])
699: * MDN: `innerHTML` (security considerations): `https://developer.mozilla.org/en-US/docs/Web/API/Element/innerHTML` ([MDN Web Docs][19])
700: * MDN: `insertAdjacentHTML` (security considerations): `https://developer.mozilla.org/en-US/docs/Web/API/Element/insertAdjacentHTML` ([MDN Web Docs][20])
701: * MDN: `document.write()` / `document.writeln()` (security considerations): `https://developer.mozilla.org/en-US/docs/Web/API/Document/write` and `https://developer.mozilla.org/en-US/docs/Web/API/Document/writeln` ([MDN Web Docs][13])
702: 
703: URL scheme hazards:
704: 
705: * MDN: `javascript:` URLs (execution on navigation; discouraged; references `window.location`): `https://developer.mozilla.org/en-US/docs/Web/URI/Reference/Schemes/javascript` ([MDN Web Docs][4])
706: 
707: Trusted Types:
708: 
709: * W3C: Trusted Types spec (DOM XSS sinks include `Element.innerHTML` and `Location.href` setters; goals and limitations): `https://www.w3.org/TR/trusted-types/` ([W3C][15])
710: * MDN: `require-trusted-types-for` directive: `https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/require-trusted-types-for` ([MDN Web Docs][11])
711: * MDN: `trusted-types` directive: `https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/trusted-types` ([MDN Web Docs][16])
712: 
713: Cross-window messaging:
714: 
715: * MDN: `window.postMessage` (security guidance: specify targetOrigin; validate origin): `https://developer.mozilla.org/en-US/docs/Web/API/Window/postMessage` ([MDN Web Docs][5])
716: * OWASP: HTML5 Security Cheat Sheet (Web Messaging guidance: explicit origin, strict checks, no `innerHTML`): `https://cheatsheetseries.owasp.org/cheatsheets/HTML5_Security_Cheat_Sheet.html` ([OWASP Cheat Sheet Series][6])
717: 
718: Third-party scripts and integrity:
719: 
720: * OWASP: Third Party JavaScript Management Cheat Sheet (risks and mitigations including SRI/mirroring): `https://cheatsheetseries.owasp.org/cheatsheets/Third_Party_Javascript_Management_Cheat_Sheet.html` ([OWASP Cheat Sheet Series][7])
721: * MDN: Subresource Integrity overview: `https://developer.mozilla.org/en-US/docs/Web/Security/Defenses/Subresource_Integrity` ([MDN Web Docs][12])
722: * W3C: Subresource Integrity spec: `https://www.w3.org/TR/sri-2/` ([W3C][21])
723: 
724: DOM clobbering:
725: 
726: * OWASP: DOM Clobbering Prevention Cheat Sheet (named property access risk; example attacks involving `location.assign` and `javascript:`): `https://cheatsheetseries.owasp.org/cheatsheets/DOM_Clobbering_Prevention_Cheat_Sheet.html` ([OWASP Cheat Sheet Series][8])
727: 
728: [1]: https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/meta/http-equiv "https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/meta/http-equiv"
729: [2]: https://cheatsheetseries.owasp.org/cheatsheets/DOM_based_XSS_Prevention_Cheat_Sheet.html "https://cheatsheetseries.owasp.org/cheatsheets/DOM_based_XSS_Prevention_Cheat_Sheet.html"
730: [3]: https://www.w3.org/TR/CSP2/ "Content Security Policy Level 2"
731: [4]: https://developer.mozilla.org/en-US/docs/Web/URI/Reference/Schemes/javascript "javascript: URLs - URIs | MDN"
732: [5]: https://developer.mozilla.org/en-US/docs/Web/API/Window/postMessage "https://developer.mozilla.org/en-US/docs/Web/API/Window/postMessage"
733: [6]: https://cheatsheetseries.owasp.org/cheatsheets/HTML5_Security_Cheat_Sheet.html "https://cheatsheetseries.owasp.org/cheatsheets/HTML5_Security_Cheat_Sheet.html"
734: [7]: https://cheatsheetseries.owasp.org/cheatsheets/Third_Party_Javascript_Management_Cheat_Sheet.html "https://cheatsheetseries.owasp.org/cheatsheets/Third_Party_Javascript_Management_Cheat_Sheet.html"
735: [8]: https://cheatsheetseries.owasp.org/cheatsheets/DOM_Clobbering_Prevention_Cheat_Sheet.html "https://cheatsheetseries.owasp.org/cheatsheets/DOM_Clobbering_Prevention_Cheat_Sheet.html"
736: [9]: https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Attributes/rel/noopener "https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Attributes/rel/noopener"
737: [10]: https://developer.mozilla.org/en-US/docs/Web/HTTP/Guides/CSP "https://developer.mozilla.org/en-US/docs/Web/HTTP/Guides/CSP"
738: [11]: https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/require-trusted-types-for "https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/require-trusted-types-for"
739: [12]: https://developer.mozilla.org/en-US/docs/Web/Security/Defenses/Subresource_Integrity "https://developer.mozilla.org/en-US/docs/Web/Security/Defenses/Subresource_Integrity"
740: [13]: https://developer.mozilla.org/en-US/docs/Web/API/Document/write "https://developer.mozilla.org/en-US/docs/Web/API/Document/write"
741: [14]: https://developer.mozilla.org/en-US/docs/Web/API/Document/writeln "https://developer.mozilla.org/en-US/docs/Web/API/Document/writeln"
742: [15]: https://www.w3.org/TR/trusted-types/ "https://www.w3.org/TR/trusted-types/"
743: [16]: https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/trusted-types "https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/trusted-types"
744: [18]: https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/frame-ancestors "https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/frame-ancestors"
745: [19]: https://developer.mozilla.org/en-US/docs/Web/API/Element/innerHTML "https://developer.mozilla.org/en-US/docs/Web/API/Element/innerHTML"
746: [20]: https://developer.mozilla.org/en-US/docs/Web/API/Element/insertAdjacentHTML "https://developer.mozilla.org/en-US/docs/Web/API/Element/insertAdjacentHTML"
747: [21]: https://www.w3.org/TR/sri-2/ "https://www.w3.org/TR/sri-2/"

(End of file - total 747 lines)
</content>
```

**Tool: read**

**Input:**
```json
{
  "filePath": "C:\\Users\\ASUS\\.agents\\skills\\security-best-practices\\references\\javascript-typescript-react-web-frontend-security.md"
}
```

**Output:**
```
<path>C:\Users\ASUS\.agents\skills\security-best-practices\references\javascript-typescript-react-web-frontend-security.md</path>
<type>file</type>
<content>
1: # React (JavaScript/TypeScript) Web Security Spec (React 19.x, TypeScript 5.x)
2: 
3: This document is designed as a **security spec** that supports:
4: 
5: 1. **Secure-by-default code generation** for new React code.
6: 2. **Security review / vulnerability hunting** in existing React code (passive “notice issues while working” and active “scan the repo and report findings”).
7: 
8: It is intentionally written as a set of **normative requirements** (“MUST/SHOULD/MAY”) plus **audit rules** (what bad patterns look like, how to detect them, and how to fix/mitigate them).
9: 
10: ---
11: 
12: ## 0) Safety, boundaries, and anti-abuse constraints (MUST FOLLOW)
13: 
14: * MUST NOT request, output, log, or commit secrets (API keys, OAuth client secrets, private keys, session cookies, JWTs, signing keys).
15: 
16:   * Frontend note: anything shipped to the browser is observable by end users and attackers (view-source, devtools, proxies); never treat client code or “env vars in the bundle” as secret. ([create-react-app.dev][1])
17: * MUST NOT “fix” security by disabling protections (e.g., turning off CSP to “make it work”, adding `unsafe-inline`/`unsafe-eval` without a documented, constrained plan, disabling CSRF protections when using cookies, widening CORS, skipping sanitization, or “temporary” bypasses that ship). ([OWASP Cheat Sheet Series][2])
18: * MUST provide **evidence-based findings** during audits: cite file paths, code snippets, and configuration values that justify the claim.
19: * MUST treat uncertainty honestly: if a protection might exist in infra (CDN/WAF/reverse proxy), report it as “not visible in app code; verify via runtime headers / edge config”.
20: * MUST assume any data that crosses a trust boundary (URL, storage, network, postMessage, third-party scripts) can be attacker-influenced unless proven otherwise (see §2.1).
21: 
22: ---
23: 
24: ## 1) Operating modes
25: 
26: ### 1.1 Generation mode (default)
27: 
28: When asked to write new React code or modify existing code:
29: 
30: * MUST follow every **MUST** requirement in this spec.
31: * SHOULD follow every **SHOULD** requirement unless the user explicitly says otherwise.
32: * MUST prefer safe-by-default APIs and proven libraries over custom security code.
33: * MUST avoid introducing new risky sinks (raw HTML insertion, direct DOM sinks like `innerHTML`, dynamic code execution, untrusted redirects/navigation, third‑party script injection, unsafe token storage, etc.). ([MDN Web Docs][3])
34: 
35: ### 1.2 Passive review mode (always on while editing)
36: 
37: While working anywhere in a React repo (even if the user did not ask for a security scan):
38: 
39: * MUST “notice” violations of this spec in touched/nearby code.
40: * SHOULD mention issues as they come up, with a brief explanation + safe fix.
41: 
42: ### 1.3 Active audit mode (explicit scan request)
43: 
44: When the user asks to “scan”, “audit”, or “hunt for vulns”:
45: 
46: * MUST systematically search the codebase for violations of this spec.
47: * MUST output findings in a structured format (see §2.3).
48: 
49: Recommended audit order:
50: 
51: 1. App entrypoints, build tooling (Vite/Webpack/CRA/Next), deployment configs, CDN/static hosting config.
52: 2. Secrets & configuration exposure (env vars, runtime config injection, source maps).
53: 3. Rendering of untrusted data (XSS/DOM XSS), especially `dangerouslySetInnerHTML`, markdown/HTML renderers, URL attributes.
54: 4. Direct DOM usage and dangerous JS execution (`innerHTML`, `eval`, `new Function`, `document.write`, etc.).
55: 5. Auth & session patterns (token storage, cookies, CSRF interactions, OAuth flows).
56: 6. Network layer (axios/fetch wrappers, dynamic base URLs, credentialed requests, data exfil risks).
57: 7. Navigation & redirect handling (open redirects, `window.location`, `target=_blank`, `window.open`).
58: 8. Third-party scripts/tags/analytics and integrity controls (CSP, SRI).
59: 9. Service worker/PWA behavior (HTTPS, caching rules, update strategy).
60: 10. Security headers posture (CSP, clickjacking, nosniff, referrer policy) in app or at the edge. ([OWASP Cheat Sheet Series][2])
61: 
62: ---
63: 
64: ## 2) Definitions and review guidance
65: 
66: ### 2.1 Untrusted input (treat as attacker-controlled unless proven otherwise)
67: 
68: Examples include:
69: 
70: * URL-derived data: `window.location`, query params, hash fragments, route params.
71: * Any data from browser storage: `localStorage`, `sessionStorage`, `IndexedDB` (including data previously written by the app—because XSS or extensions can tamper with it). ([OWASP Cheat Sheet Series][4])
72: * Any data from cross-window messaging: `window.postMessage` payloads. ([OWASP Cheat Sheet Series][4])
73: * Any data from remote APIs, webhooks proxied to the client, GraphQL responses, CMS content, feature flag services.
74: * Any persisted user content (profiles, comments, rich text, markdown) rendered in the UI.
75: * Any data produced by third-party scripts or tag managers (treat as untrusted unless strongly controlled). ([OWASP Cheat Sheet Series][5])
76: 
77: ### 2.2 State-changing request (frontend perspective)
78: 
79: A request is state-changing if it can create/update/delete data, change auth/session state, trigger side effects (purchase, email send, webhook), or initiate privileged actions.
80: 
81: Frontend-specific note:
82: 
83: * State changes are often triggered by `fetch/axios` calls or form submissions. If authentication is cookie-based, these calls can be CSRF-relevant (§4 REACT-CSRF-001). ([OWASP Cheat Sheet Series][6])
84: 
85: ### 2.3 Required audit finding format
86: 
87: For each issue found, output:
88: 
89: * Rule ID:
90: * Severity: Critical / High / Medium / Low
91: * Location: file path + component/function + line(s)
92: * Evidence: the exact code/config snippet
93: * Impact: what could go wrong, who can exploit it
94: * Fix: safe change (prefer minimal diff)
95: * Mitigation: defense-in-depth if immediate fix is hard
96: * False positive notes: what to verify if uncertain
97: 
98: ---
99: 
100: ## 3) Secure baseline: minimum production configuration (MUST in production)
101: 
102: This is the smallest “production baseline” that prevents common React frontend misconfigurations.
103: 
104: ### 3.1 Production build and configuration hygiene (MUST)
105: 
106: * MUST ship a production build (minified, no dev-only overlays/tools, correct mode flags).
107: * MUST ensure build-time configuration does not embed secrets into the shipped JS/HTML/CSS. Build-time “environment variables” are not secret; treat them as public. ([create-react-app.dev][1])
108: * SHOULD treat source maps as sensitive operational artifacts:
109: 
110:   * Either don’t publish them publicly, or publish them only where intended (e.g., behind auth or to an error-reporting provider), because they can reveal code structure and internal URLs.
111: 
112: ### 3.2 Browser-enforced protections (SHOULD, but baseline expectation for modern apps)
113: 
114: * SHOULD deploy a CSP as defense-in-depth against XSS, and keep it compatible with your React build (avoid `unsafe-inline` and `unsafe-eval` unless strictly necessary and documented). ([OWASP Cheat Sheet Series][2])
115: * SHOULD use Subresource Integrity (SRI) for any third-party script/style loaded from a CDN (or self-host instead). ([MDN Web Docs][7])
116: * SHOULD enable clickjacking defenses via `frame-ancestors` (CSP) and/or `X-Frame-Options`, unless embedding is an explicit product requirement. ([MDN Web Docs][8])
117: 
118: ### 3.3 High-risk features baseline (MUST if used)
119: 
120: * If rendering any user-provided HTML/markdown/rich text:
121: 
122:   * MUST sanitize before insertion and avoid raw DOM sinks. ([OWASP Cheat Sheet Series][9])
123: * If using service workers / PWA:
124: 
125:   * MUST serve over HTTPS and implement a safe caching/update strategy (service workers are powerful request/response proxies). ([MDN Web Docs][10])
126: 
127: ---
128: 
129: ## 4) Rules (generation + audit)
130: 
131: Each rule contains: required practice, insecure patterns, detection hints, and remediation.
132: 
133: ### REACT-CONFIG-001: Never embed secrets in the client bundle (env vars are public)
134: 
135: Severity: Critical (if secrets exposed)
136: 
137: Required:
138: 
139: * MUST NOT place secrets in React code, in `public/` assets, or in build-time environment variables intended for client consumption.
140: * MUST assume any value available to the React app at runtime can be extracted by an attacker.
141: 
142: Insecure patterns:
143: 
144: * Using build-time env vars for secrets:
145: 
146:   * `process.env.REACT_APP_*` containing private keys or credentials.
147:   * `import.meta.env.VITE_*` containing secrets.
148: * Hard-coded secrets in JS/TS, `.env` committed, or secrets in `public/config.json` served to all users.
149: 
150: Detection hints:
151: 
152: * Search for:
153: 
154:   * `REACT_APP_`, `VITE_`, `NEXT_PUBLIC_`, `process.env.`, `import.meta.env.`
155:   * `apiKey`, `secret`, `token`, `private`, `password`, `client_secret`
156: * Inspect `public/` for runtime config JSON.
157: 
158: Fix:
159: 
160: * Move secrets server-side (API, BFF, serverless function).
161: * Use a backend to mint short-lived, scoped tokens if the browser needs to call third-party APIs.
162: 
163: Notes:
164: 
165: * CRA explicitly warns not to store secrets and notes env vars are embedded into the build and visible to anyone inspecting files. ([create-react-app.dev][1])
166: * Vite explicitly notes that variables exposed to client code end up in the client bundle and should not contain sensitive info. ([vitejs][11])
167: 
168: ---
169: 
170: ### REACT-XSS-001: Do not use `dangerouslySetInnerHTML` with untrusted content (sanitize or avoid)
171: 
172: Severity: High (Only if you can prove attacker-controlled HTML reaches it)
173: 
174: Required:
175: 
176: * MUST avoid `dangerouslySetInnerHTML` unless absolutely necessary.
177: * If it must be used:
178: 
179:   * MUST sanitize untrusted HTML with a proven sanitizer (e.g., DOMPurify) and an allowlist-oriented configuration.
180:   * MUST keep the sanitization logic centralized and heavily reviewed.
181:   * SHOULD add a CSP and consider Trusted Types (see REACT-TT-001).
182: 
183: Insecure patterns:
184: 
185: * `<div dangerouslySetInnerHTML={{ __html: userHtml }} />` where `userHtml` is from API/URL/storage.
186: * “Sanitization” done with regexes, ad-hoc stripping, or incomplete allowlists.
187: 
188: Detection hints:
189: 
190: * Grep: `dangerouslySetInnerHTML`, `__html:`
191: * Trace the origin of the HTML string (API/CMS/URL/localStorage).
192: 
193: Fix:
194: 
195: * Replace with safe rendering:
196: 
197:   * Render structured data as React elements/components instead of HTML strings.
198:   * If rich text is required, sanitize with DOMPurify (or equivalent) and render the sanitized output.
199: * Add CSP; remove dangerous sinks where possible.
200: 
201: Notes:
202: 
203: * React explicitly warns that `dangerouslySetInnerHTML` is dangerous and can introduce XSS if misused. ([React][12])
204: * OWASP explicitly calls out React’s `dangerouslySetInnerHTML` without sanitization as a common framework “escape hatch” pitfall. ([OWASP Cheat Sheet Series][9])
205: * DOMPurify describes itself as an XSS sanitizer for HTML/SVG/MathML. ([GitHub][13])
206: 
207: ---
208: 
209: ### REACT-XSS-002: Rely on React’s escaping-by-default behavior; do not bypass it
210: 
211: Severity: High (when bypassed)
212: 
213: Required:
214: 
215: * MUST render untrusted strings via normal JSX interpolation (`{value}`) and React props, which are escaped by default.
216: * MUST NOT build HTML strings from untrusted data and then inject them into the DOM via any means.
217: * SHOULD treat any “escape hatch” as high risk and require review.
218: 
219: Insecure patterns:
220: 
221: * Converting untrusted text into HTML and injecting it:
222: 
223:   * `element.innerHTML = userValue`
224:   * `document.write(userValue)`
225:   * `insertAdjacentHTML(..., userValue)`
226: 
227: Detection hints:
228: 
229: * Grep for DOM sinks: `innerHTML`, `outerHTML`, `insertAdjacentHTML`, `document.write`, `DOMParser`, `createContextualFragment`.
230: 
231: Fix:
232: 
233: * Render text content through React (JSX) so it is escaped.
234: * If you truly need HTML, sanitize and apply REACT-XSS-001 + REACT-TT-001.
235: 
236: Notes:
237: 
238: * React documentation (JSX) states that React DOM escapes values embedded in JSX before rendering to help prevent injection attacks. ([React][14])
239: 
240: ---
241: 
242: ### REACT-DOM-001: Avoid DOM XSS injection sinks in React code (use safe alternatives)
243: 
244: Severity: High
245: 
246: Required:
247: 
248: * MUST avoid direct DOM injection sinks, even outside React rendering, unless strongly controlled.
249: * If a DOM sink is required:
250: 
251:   * MUST ensure inputs are trusted/validated/sanitized.
252:   * SHOULD enforce Trusted Types (REACT-TT-001).
253: 
254: Insecure patterns:
255: 
256: * `someEl.innerHTML = untrusted`
257: * `document.write(untrusted)`
258: * `new DOMParser().parseFromString(untrusted, 'text/html')` followed by insertion
259: 
260: Detection hints:
261: 
262: * Grep for: `innerHTML`, `outerHTML`, `document.write`, `DOMParser`, `Range().createContextualFragment`, `insertAdjacentHTML`
263: 
264: Fix:
265: 
266: * Prefer:
267: 
268:   * `textContent` for text insertion.
269:   * React rendering rather than manual DOM manipulation.
270:   * A vetted sanitizer for any required HTML parsing.
271: 
272: Notes:
273: 
274: * Trusted Types documentation defines HTML sinks like `Element.innerHTML` and `document.write()` as injection sinks that can execute script when given attacker-controlled input. ([MDN Web Docs][3])
275: * OWASP HTML5 guidance recommends using `textContent` instead of `innerHTML` for assigning untrusted data. ([OWASP Cheat Sheet Series][4])
276: 
277: ---
278: 
279: ### REACT-URL-001: Validate and constrain untrusted URLs used in `href`, `src`, navigation, and redirects
280: 
281: Severity: High Only when you can prove they are attacker controlled
282: 
283: Required:
284: 
285: * MUST treat any URL derived from untrusted input as dangerous.
286: * MUST allowlist schemes and (when applicable) hosts:
287: 
288:   * Typically allow only `https:` (and maybe `http:` for localhost/dev) and relative URLs for in-app navigation.
289:   * MUST explicitly block `javascript:` and dangerous `data:` uses unless you have specialized validation and a clear use case.
290: * SHOULD prefer same-site relative paths (e.g., `/settings`) over absolute URLs.
291: * MUST validate “returnTo/next/redirect” parameters (see REACT-REDIRECT-001).
292: 
293: Insecure patterns:
294: 
295: * `<img src={userProvidedUrl}>...` (can be used for tracking / data exfil; also risky if used for scripts/iframes)
296: * `window.location = next`
297: * `navigate(next)` where `next` comes from query params without validation
298: 
299: Detection hints:
300: 
301: * Search for:
302: 
303:   * `href={`, `src={`, `window.location`, `location.href`, `window.open`, `navigate(`, `redirectTo`, `returnTo`, `next=`
304: * Track whether the value is derived from URL/query/storage/API.
305: 
306: Fix:
307: 
308: * Implement a shared `safeUrl()` utility:
309: 
310:   * Parse with `new URL(value, base)`
311:   * Enforce scheme allowlist and host allowlist (or enforce same-origin)
312:   * For redirects: allow only relative paths (starting with `/`) or a strict allowlist of absolute origins.
313: * Fall back to a safe default when validation fails.
314: 
315: Notes:
316: 
317: * OWASP explicitly notes React’s `dangerouslySetInnerHTML` risk and also states React cannot safely handle `javascript:` or `data:` URLs without specialized validation. ([OWASP Cheat Sheet Series][9])
318: 
319: ---
320: 
321: ### REACT-MARKUP-001: Markdown / rich text rendering must be configured safely
322: 
323: Severity: Medium
324: 
325: Required:
326: 
327: * MUST assume markdown/rich text can be attacker-controlled if it comes from users or CMS.
328: * MUST ensure raw HTML is not rendered unless sanitized.
329: * SHOULD prefer markdown renderers that:
330: 
331:   * Do not allow raw HTML by default, or
332:   * Can be configured to disallow raw HTML, or
333:   * Sanitize HTML output before rendering.
334: 
335: Insecure patterns:
336: 
337: * Markdown rendering with “raw HTML passthrough” enabled (e.g., options/plugins that allow HTML).
338: * Rendering user-provided SVG/MathML/HTML inline without sanitization.
339: 
340: Detection hints:
341: 
342: * Search for common libraries and risky options:
343: 
344:   * `marked`, `markdown-it`, `react-markdown`, `rehype-raw`, `sanitize: false`, `allowDangerousHtml`, etc.
345: * Look for `dangerouslySetInnerHTML` used with “markdown output”.
346: 
347: Fix:
348: 
349: * Disable raw HTML passthrough.
350: * Sanitize output with a proven sanitizer (e.g., DOMPurify) before rendering.
351: 
352: Notes:
353: 
354: * OWASP XSS guidance emphasizes that framework escape hatches require output encoding and/or HTML sanitization. ([OWASP Cheat Sheet Series][9])
355: 
356: ---
357: 
358: ### REACT-TT-001: Use Trusted Types (with CSP) to harden DOM XSS sinks where feasible
359: 
360: Severity: Low
361: 
362: Required:
363: 
364: * SHOULD consider enabling Trusted Types in report-only mode first, then enforce once violations are addressed.
365: * SHOULD centralize Trusted Types policies and treat them as high-risk code requiring review.
366: * MUST NOT create permissive policies that simply “pass through” untrusted strings.
367: 
368: Insecure patterns:
369: 
370: * A Trusted Types policy that returns the raw string without sanitization for HTML sinks.
371: * Many scattered policies across the codebase (hard to audit).
372: 
373: Detection hints:
374: 
375: * Search for:
376: 
377:   * `trustedTypes.createPolicy`
378:   * CSP directives: `require-trusted-types-for`, `trusted-types`
379: * Search for remaining DOM sinks (REACT-DOM-001).
380: 
381: Fix:
382: 
383: * Implement a small number of tightly scoped policies:
384: 
385:   * HTML policy uses sanitizer (DOMPurify or equivalent).
386:   * Script URL policy uses strict allowlists.
387: * Run in report-only mode, fix violations, then enforce.
388: 
389: Notes:
390: 
391: * MDN describes Trusted Types as a way to ensure input is transformed (commonly sanitized) before being passed to injection sinks, and highlights HTML sinks (`innerHTML`, `document.write`) and JS URL sinks (`script.src`). ([MDN Web Docs][3])
392: * The W3C Trusted Types spec frames this as reducing DOM XSS risk by locking down sinks to typed values created by reviewed policies. ([W3C][15])
393: 
394: ---
395: 
396: ### REACT-CSP-001: Deploy and maintain a CSP as defense-in-depth (especially when rendering untrusted content)
397: 
398: Severity: Medium to High
399: 
400: Required:
401: 
402: * SHOULD deploy CSP in production; MUST do so for apps that render untrusted content or integrate third-party scripts.
403: * SHOULD avoid `unsafe-inline` and `unsafe-eval` when possible.
404: * SHOULD use CSP nonces/hashes for inline scripts if needed, and keep policy realistic.
405: * SHOULD use CSP to require/encourage SRI where appropriate.
406: 
407: Insecure patterns:
408: 
409: * No CSP at all on the app shell (SPA entry HTML).
410: * CSP that relies on `unsafe-inline`/`unsafe-eval` broadly without justification.
411: * `script-src *` or overly broad sources.
412: 
413: Detection hints:
414: 
415: * Look for CSP configuration:
416: 
417:   * Server/CDN config, headers in `index.html` responses, or framework config.
418: * If absent in repo, mark as “verify at edge”.
419: 
420: Fix:
421: 
422: * Add CSP via HTTP response headers (preferred).
423: * Start with report-only to reduce breakage, then enforce.
424: 
425: Notes:
426: 
427: * OWASP describes CSP as “defense in depth” against XSS and notes it can help enforce SRI even on static sites, but should not be the only defense. ([OWASP Cheat Sheet Series][2])
428: 
429: ---
430: 
431: ### REACT-SRI-001: Use Subresource Integrity (SRI) for third-party scripts and styles (or self-host)
432: 
433: Severity: Low
434: 
435: Required:
436: 
437: * MUST treat third-party JS as equivalent to running arbitrary code in your origin.
438: * If loading from a CDN or third party:
439: 
440:   * SHOULD use SRI (`integrity=...`) and `crossorigin` where applicable.
441:   * SHOULD pin exact versions (avoid “latest” URLs).
442:   * SHOULD prefer self-hosting for critical code.
443: 
444: Insecure patterns:
445: 
446: * `<script src="https://cdn.example.com/lib/latest.js"></script>` with no integrity.
447: * Tag managers that dynamically load arbitrary scripts without governance.
448: 
449: Detection hints:
450: 
451: * Search in `public/index.html`, templates, or SSR wrappers for:
452: 
453:   * `<script src=`, `<link rel="stylesheet" href=`
454:   * Tag manager snippets (GTM, Segment, etc.)
455: * Identify scripts loaded dynamically in runtime JS.
456: 
457: Fix:
458: 
459: * Add SRI hashes for stable third-party assets or self-host.
460: * Apply governance controls for tag managers (see REACT-3P-001).
461: 
462: Notes:
463: 
464: * MDN describes SRI as a security feature enabling browsers to verify fetched resources (e.g., from a CDN) haven’t been manipulated by checking a cryptographic hash. ([MDN Web Docs][7])
465: * OWASP CSP guidance notes CSP can enforce SRI and is useful even on static sites. ([OWASP Cheat Sheet Series][2])
466: 
467: ---
468: 
469: ### REACT-3P-001: Third-party JavaScript and tag managers must be minimized and governed
470: 
471: Severity: High
472: 
473: Required:
474: 
475: * MUST minimize third-party scripts and treat each as a supply-chain risk.
476: * MUST know exactly what third-party JS executes in your origin and why.
477: * SHOULD implement governance:
478: 
479:   * Review and pin versions (or mirror in-house).
480:   * Restrict data access (data-layer approach).
481:   * Use SRI and CSP; consider sandboxing untrusted UI in iframes where possible.
482: 
483: Insecure patterns:
484: 
485: * Unreviewed analytics/ads scripts running with full access to DOM, cookies, storage, and user data.
486: * Tag managers that can be changed by non-engineering roles with no change control.
487: 
488: Detection hints:
489: 
490: * Search for common vendor snippets in HTML/JS:
491: 
492:   * GTM, Segment, Hotjar, FullStory, etc.
493: * Look for dynamic script insertion:
494: 
495:   * `document.createElement('script')`, `.src = ...`, `.appendChild(script)`
496: 
497: Fix:
498: 
499: * Reduce to only necessary vendors.
500: * Where feasible:
501: 
502:   * Self-host or mirror scripts.
503:   * Use SRI.
504:   * Limit data exposure via a controlled data layer.
505: 
506: Notes:
507: 
508: * OWASP notes third-party JS server compromise can inject malicious JS, and highlights risks like arbitrary code execution and disclosure of sensitive info to third parties. ([OWASP Cheat Sheet Series][5])
509: 
510: ---
511: 
512: ### REACT-AUTH-001: Token and session handling must be resilient to XSS (avoid sensitive storage in Web Storage)
513: 
514: Severity: Medium
515: 
516: Required:
517: 
518: * SHOULD avoid storing session identifiers or long-lived tokens in `localStorage` (and generally in Web Storage) because XSS can exfiltrate them.
519: * If tokens must exist client-side:
520: 
521:   * SHOULD prefer in-memory storage with short lifetimes and refresh mechanisms.
522:   * MUST scope and rotate tokens; avoid long-lived bearer tokens in persistent storage.
523: * SHOULD prefer HTTPOnly cookies for session tokens when possible (requires CSRF strategy: see REACT-CSRF-001).
524: 
525: Insecure patterns:
526: 
527: * `localStorage.setItem('token', ...)` / `sessionStorage.setItem('token', ...)` for auth tokens.
528: * Persisting refresh tokens in `localStorage`.
529: * Treating data from Web Storage as trusted.
530: 
531: Detection hints:
532: 
533: * Grep for: `localStorage.`, `sessionStorage.`, `setItem(`, `getItem(`, `token`, `jwt`, `refresh`
534: * Search auth code for “remember me” storing tokens persistently.
535: 
536: Fix:
537: 
538: * Move to HTTPOnly cookies (server change) + CSRF protections, or use short-lived in-memory tokens.
539: * Reduce token scope and lifetime.
540: 
541: Notes:
542: 
543: * OWASP HTML5 guidance recommends avoiding sensitive info and session identifiers in local storage and warns that a single XSS can steal all data in Web Storage. ([OWASP Cheat Sheet Series][4])
544: * OAuth browser-based apps guidance discusses that tokens stored in persistent browser storage like localStorage can be accessible to malicious JS (e.g., via XSS). ([IETF Datatracker][16])
545: 
546: ---
547: 
548: ### REACT-CSRF-001: Cookie-authenticated, state-changing requests MUST be CSRF-protected
549: 
550: Severity: High
551: 
552: NOTE: If the application does not use cookie based auth (using Authentication header for example), then CSRF is not a concern.
553: 
554: Required:
555: 
556: * If the app relies on cookies for authentication:
557: 
558:   * MUST protect state-changing requests (POST/PUT/PATCH/DELETE) against CSRF.
559:   * SHOULD include a CSRF token mechanism (synchronizer token or double-submit cookie) or other robust pattern appropriate to the backend.
560:   * SHOULD use SameSite cookies as defense-in-depth, not as the sole defense.
561: 
562: Insecure patterns:
563: 
564: * `fetch('/api/transfer', { method: 'POST', credentials: 'include' })` with no CSRF token/header, relying only on cookies.
565: * Using GET for state-changing operations.
566: 
567: Detection hints:
568: 
569: * Enumerate state-changing network calls and check:
570: 
571:   * Is `credentials: 'include'` or `withCredentials: true` used?
572:   * Is a CSRF token header included (e.g., `X-CSRF-Token`)?
573: * Search for “csrf” utilities; if absent, treat as suspicious.
574: 
575: Fix:
576: 
577: * Add CSRF token flow:
578: 
579:   * Fetch token from a safe endpoint and attach to state-changing requests.
580:   * Validate server-side.
581: * Keep SameSite cookies and Origin/Referer validation as defense-in-depth.
582: 
583: Notes:
584: 
585: * OWASP CSRF guidance explains SameSite behavior (Lax/Strict/None) as a defense-in-depth technique and why Lax is often the usability/security balance, but it is not a complete substitute for CSRF protections. ([OWASP Cheat Sheet Series][6])
586: 
587: ---
588: 
589: ### REACT-AUTHZ-001: Do not rely on frontend-only authorization
590: 
591: Severity: High (only if used as primary protection)
592: 
593: Required:
594: 
595: * MUST treat all frontend authorization checks as UX only.
596: * MUST enforce authorization on the server for any protected resource or action.
597: 
598: Insecure patterns:
599: 
600: * “Protected” actions hidden in UI but callable by API without server checks.
601: * Client checks like `if (user.isAdmin) { showAdminPanel(); }` with no server-side enforcement.
602: 
603: Detection hints:
604: 
605: * Look for UI gating around sensitive actions and verify server endpoints enforce authorization.
606: * In a frontend-only audit, report as “client checks are not security; verify backend”.
607: 
608: Fix:
609: 
610: * Add/confirm server-side authorization checks.
611: * Keep frontend gating only as convenience.
612: 
613: Notes:
614: 
615: * This is a general web app security property; React cannot protect server resources by itself.
616: 
617: ---
618: 
619: ### REACT-NET-001: Prevent data exfiltration and credential leakage via dynamic outbound requests
620: 
621: Severity: Medium to High
622: 
623: Required:
624: 
625: * MUST avoid making authenticated requests to attacker-controlled origins.
626: * SHOULD avoid allowing user input to control request destination (scheme/host/port).
627: * SHOULD centralize network clients (fetch/axios) with:
628: 
629:   * fixed `baseURL` (or strict allowlist),
630:   * strict handling of redirects,
631:   * explicit `credentials` usage.
632: 
633: Insecure patterns:
634: 
635: * `fetch(userProvidedUrl, { credentials: 'include' })`
636: * `axios.create({ baseURL: userProvidedBase })`
637: * “URL fetch/preview” features in the client that hit arbitrary domains with sensitive headers.
638: 
639: Detection hints:
640: 
641: * Search for `fetch(` / `axios(` where the first argument or `baseURL` is derived from:
642: 
643:   * query params, localStorage, API responses, postMessage
644: * Search for `credentials: 'include'`, `withCredentials: true`.
645: 
646: Fix:
647: 
648: * Enforce destination allowlists; disallow cross-origin requests unless explicitly required.
649: * Strip credentials/Authorization headers for any non-allowlisted destination.
650: 
651: Notes:
652: 
653: * Even if the browser limits some cross-origin behavior, leaking tokens/headers to untrusted endpoints is still a common failure mode.
654: 
655: ---
656: 
657: ### REACT-REDIRECT-001: Prevent open redirects and untrusted navigation
658: 
659: Severity: Medium
660: 
661: Required:
662: 
663: * MUST validate redirect/navigation targets derived from untrusted input (`next`, `returnTo`, `redirect`).
664: * SHOULD only allow same-site relative paths, or a strict allowlist of trusted origins for absolute URLs.
665: 
666: Insecure patterns:
667: 
668: * `window.location.href = new URLSearchParams(location.search).get('next')`
669: * `navigate(next)` where `next` comes from query params.
670: 
671: Detection hints:
672: 
673: * Search for: `next`, `returnTo`, `redirect`, `window.location`, `navigate(`
674: * Trace origin of the redirect target.
675: 
676: Fix:
677: 
678: * Only allow relative paths (`/^\/[^\s]*$/`) or allowlisted origins.
679: * Fall back to a safe default (e.g., `/`) when invalid.
680: 
681: Notes:
682: 
683: * Open redirects are frequently used in phishing and can undermine SSO/OAuth flows.
684: 
685: ---
686: 
687: ### REACT-SW-001: Service workers are high-privilege; require HTTPS and safe caching/update rules
688: 
689: Severity: Medium
690: 
691: Required:
692: 
693: * MUST serve service workers over HTTPS (except `localhost` dev), and deploy only in secure contexts.
694: * MUST avoid caching sensitive authenticated API responses unless explicitly designed and threat-modeled.
695: * SHOULD implement safe update strategy (prompt reload, versioned caches, remove old caches on activate).
696: 
697: Insecure patterns:
698: 
699: * Registering a service worker for an authenticated app and caching “everything” indiscriminately.
700: * Long-lived caches containing PII or user-specific content shared across accounts.
701: 
702: Detection hints:
703: 
704: * Search for:
705: 
706:   * `navigator.serviceWorker.register`
707:   * `workbox`, `precacheAndRoute`, custom `fetch` handlers
708: * Inspect caching patterns (`caches.open`, `cache.put`, `respondWith`).
709: 
710: Fix:
711: 
712: * Restrict caching to static assets only (JS/CSS/images) unless you have a designed offline model.
713: * Ensure cache keys are user-scoped if user-specific data must be cached.
714: * Provide a clear update mechanism.
715: 
716: Notes:
717: 
718: * MDN notes service workers require HTTPS for security reasons and act like a proxy for requests/responses. ([MDN Web Docs][10])
719: * “Secure contexts” exist to prevent MITM attackers from accessing powerful APIs; service workers are an example of such a powerful feature. ([MDN Web Docs][18])
720: 
721: ---
722: 
723: ### REACT-HEADERS-001: Ensure essential security headers are set for the React app shell (app or edge)
724: 
725: Severity: Medium
726: 
727: Required (typical SPA served from an origin):
728: 
729: * SHOULD set:
730: 
731:   * CSP (`Content-Security-Policy`)
732:   * `X-Content-Type-Options: nosniff`
733:   * Clickjacking protection (`frame-ancestors` in CSP and/or `X-Frame-Options`)
734:   * `Referrer-Policy`
735:   * `Permissions-Policy` as appropriate
736: * MUST ensure these are set somewhere (CDN/edge/server), even if not in repo.
737: 
738: Insecure patterns:
739: 
740: * No security headers anywhere (app or edge).
741: * CSP missing on apps that render untrusted content or use third-party scripts.
742: 
743: Detection hints:
744: 
745: * Check server/CDN config in repo (nginx, Cloudflare, Vercel config, etc.).
746: * If absent, flag as “verify at runtime/edge”.
747: 
748: Fix:
749: 
750: * Set headers centrally at the edge.
751: * Keep CSP realistic and iterative (report-only → enforce).
752: 
753: Notes:
754: 
755: * MDN clickjacking guidance discusses defenses including `X-Frame-Options` and CSP `frame-ancestors`. ([MDN Web Docs][8])
756: * OWASP CSP guidance explains delivery via response headers and recommends headers as the preferred mechanism. ([OWASP Cheat Sheet Series][2])
757: 
758: ---
759: 
760: ### REACT-POSTMSG-001: `postMessage` must validate origin and treat payload as untrusted data
761: 
762: Severity: Medium to High (depends on what messages can do)
763: 
764: Required:
765: 
766: * MUST specify exact `targetOrigin` when sending messages (not `*`) unless there is a strict reason.
767: * MUST validate `event.origin` on receipt and validate message shape.
768: * MUST NOT evaluate message data as code or insert it into the DOM as HTML.
769: 
770: Insecure patterns:
771: 
772: * `window.postMessage(data, '*')` to unknown targets.
773: * Receiving:
774: 
775:   * `window.addEventListener('message', (e) => { eval(e.data) })`
776:   * `element.innerHTML = e.data`
777: 
778: Detection hints:
779: 
780: * Search: `postMessage(`, `addEventListener('message'`
781: * Check for origin checks and safe handling.
782: 
783: Fix:
784: 
785: * Add strict origin allowlists and schema validation (e.g., zod).
786: * Treat message payload strictly as data; render safely via React.
787: 
788: Notes:
789: 
790: * OWASP HTML5 guidance recommends specifying expected origin for `postMessage`, checking sender origin, validating data, and avoiding eval/innerHTML with message content. ([OWASP Cheat Sheet Series][4])
791: 
792: ---
793: 
794: ### REACT-FILE-001: File uploads and previews must not create client-side active content vulnerabilities
795: 
796: Severity: Medium (can be High if stored-XSS possible)
797: 
798: Required:
799: 
800: * MUST treat user-uploaded files and previews as potentially malicious.
801: * MUST NOT render uploaded HTML/SVG/other active content inline unless sanitized and explicitly required.
802: * SHOULD validate file types client-side for UX, but MUST rely on server-side validation for security.
803: 
804: Insecure patterns:
805: 
806: * Rendering user-uploaded HTML as content.
807: * Inline rendering of untrusted SVG/HTML via `dangerouslySetInnerHTML` or `<iframe srcdoc=...>` without sanitization.
808: 
809: Detection hints:
810: 
811: * Search for upload components and preview logic:
812: 
813:   * `input type="file"`, `FileReader`, `URL.createObjectURL`, `<iframe>`, `<object>`, `<embed>`.
814: * Trace where uploaded content is later displayed.
815: 
816: Fix:
817: 
818: * Restrict accepted types, sanitize where needed, and prefer download/attachment flows for risky types.
819: * Ensure server enforces the real policy (type checking, renaming, scanning, storing outside webroot).
820: 
821: Notes:
822: 
823: * OWASP file upload guidance highlights allowlisting extensions, validating file type, generating filenames, limiting size, storing outside webroot, and considering “client-side active content (XSS, CSRF, etc.)” when files are publicly retrievable. ([OWASP Cheat Sheet Series][19])
824: 
825: ---
826: 
827: ### REACT-SUPPLY-001: Dependency and supply-chain hygiene (frontend + build tooling)
828: 
829: Severity: Low
830: 
831: Required:
832: 
833: * MUST use a lockfile and enforce reproducible installs in CI.
834: * SHOULD regularly audit dependencies and respond quickly to advisories for:
835: 
836:   * React, react-dom, router libs, build tooling (Vite/Webpack), sanitizers, auth libs, etc.
837: * SHOULD reduce exposure to install-time script attacks and typosquatting risk.
838: 
839: Audit focus:
840: 
841: * CI should use `npm ci` (or Yarn frozen lockfile / pnpm equivalent) to prevent drift.
842: * Use vulnerability scanning (`npm audit`, GitHub Dependabot/alerts, etc.).
843: 
844: Insecure patterns:
845: 
846: * No lockfile or lockfile ignored in CI.
847: * `npm install` in CI producing non-reproducible builds.
848: * Unpinned or unreviewed high-risk deps; sudden major updates without review.
849: * Blindly running install scripts from third-party packages.
850: 
851: Detection hints:
852: 
853: * Check for lockfiles: `package-lock.json`, `yarn.lock`, `pnpm-lock.yaml`.
854: * Check CI scripts for `npm install` vs `npm ci`.
855: * Search for `postinstall` scripts and suspicious build steps.
856: 
857: Fix:
858: 
859: * Use lockfile and enforce it in CI (e.g., `npm ci`).
860: * Run audits regularly; pin/upgrade responsibly.
861: * Consider restricting install scripts where feasible.
862: 
863: Notes:
864: 
865: * npm docs describe `npm audit` as submitting the project dependency tree to the registry to receive a report of known vulnerabilities and (optionally) applying remediations via `npm audit fix`, while noting some vulns require manual review. ([npm Docs][20])
866: * npm docs describe `npm ci` as intended for automated/CI environments, requiring an existing lockfile and failing if `package.json` and lockfile do not match. ([npm Docs][21])
867: * OWASP NPM security guidance recommends enforcing the lockfile and explicitly calls out `npm ci` / `yarn install --frozen-lockfile` to abort on inconsistencies, and highlights the risk of install-time scripts and the option to use `--ignore-scripts` to reduce attack surface. ([OWASP Cheat Sheet Series][22])
868: 
869: ---
870: 
871: ## 5) Practical scanning heuristics (how to “hunt”)
872: 
873: When actively scanning, use these high-signal patterns:
874: 
875: * Raw HTML / XSS escape hatches:
876: 
877:   * `dangerouslySetInnerHTML`, `__html:`
878:   * Markdown HTML passthrough flags: `rehype-raw`, `allowDangerousHtml`, `sanitize: false`
879: * DOM XSS sinks:
880: 
881:   * `innerHTML`, `outerHTML`, `insertAdjacentHTML`, `document.write`, `DOMParser`, `createContextualFragment`
882: * Dangerous JS execution:
883: 
884:   * `eval(`, `new Function(`, `setTimeout("`, `setInterval("`
885: * Untrusted URL injection / navigation:
886: 
887:   * `href={` / `src={` with untrusted values
888:   * `window.location`, `location.href`, `window.open`, `navigate(`
889:   * Query params: `next`, `returnTo`, `redirect`
890: * Token/session risk:
891: 
892:   * `localStorage.setItem`, `sessionStorage.setItem`, `getItem(` with `token`, `jwt`, `refresh`
893: * Cookie/CSRF coupling:
894: 
895:   * `credentials: 'include'`, `withCredentials: true` on state-changing requests without CSRF headers
896: * Third-party scripts:
897: 
898:   * `<script src=...>` in `public/index.html`
899:   * Tag manager snippets and dynamic script insertion
900: * Service workers:
901: 
902:   * `navigator.serviceWorker.register`, Workbox usage, custom `fetch` handlers
903: * postMessage:
904: 
905:   * `postMessage(` with `*`, missing `event.origin` checks
906: * Supply chain:
907: 
908:   * Missing lockfile, CI uses `npm install`, no audit step, risky postinstall scripts
909: 
910: Always try to confirm:
911: 
912: * data origin (untrusted vs trusted)
913: * sink type (React escape hatch vs DOM sink vs navigation vs storage)
914: * protective controls present (sanitization, allowlists, CSP/Trusted Types, CSRF tokens, headers, governance)
915: 
916: ---
917: 
918: ## 6) Sources (accessed 2026-01-26)
919: 
920: Primary React documentation:
921: 
922: * React 19 stable announcement — `https://react.dev/blog/2024/12/05/react-19` ([React][23])
923: * React DOM docs: `dangerouslySetInnerHTML` warning — `https://react.dev/reference/react-dom/components/common#dangerouslysetting-the-inner-html` ([React][12])
924: * React (legacy) JSX escaping statement — `https://legacy.reactjs.org/docs/introducing-jsx.html` ([React][14])
925: 
926: OWASP Cheat Sheet Series:
927: 
928: * Cross Site Scripting Prevention (framework escape hatches; React `dangerouslySetInnerHTML`; URL validation notes) — `https://cheatsheetseries.owasp.org/cheatsheets/Cross_Site_Scripting_Prevention_Cheat_Sheet.html` ([OWASP Cheat Sheet Series][9])
929: * Content Security Policy — `https://cheatsheetseries.owasp.org/cheatsheets/Content_Security_Policy_Cheat_Sheet.html` ([OWASP Cheat Sheet Series][2])
930: * Cross-Site Request Forgery Prevention — `https://cheatsheetseries.owasp.org/cheatsheets/Cross-Site_Request_Forgery_Prevention_Cheat_Sheet.html` ([OWASP Cheat Sheet Series][6])
931: * HTML5 Security (Web Storage, postMessage, tabnabbing, sandboxed frames) — `https://cheatsheetseries.owasp.org/cheatsheets/HTML5_Security_Cheat_Sheet.html` ([OWASP Cheat Sheet Series][4])
932: * Third Party JavaScript Management — `https://cheatsheetseries.owasp.org/cheatsheets/Third_Party_Javascript_Management_Cheat_Sheet.html` ([OWASP Cheat Sheet Series][5])
933: * File Upload — `https://cheatsheetseries.owasp.org/cheatsheets/File_Upload_Cheat_Sheet.html` ([OWASP Cheat Sheet Series][19])
934: * NPM Security best practices — `https://cheatsheetseries.owasp.org/cheatsheets/NPM_Security_Cheat_Sheet.html` ([OWASP Cheat Sheet Series][22])
935: 
936: Browser / platform references (MDN, W3C):
937: 
938: * Trusted Types API — `https://developer.mozilla.org/en-US/docs/Web/API/Trusted_Types_API` ([MDN Web Docs][3])
939: * W3C Trusted Types spec — `https://www.w3.org/TR/trusted-types/` ([W3C][15])
940: * Subresource Integrity — `https://developer.mozilla.org/en-US/docs/Web/Security/Subresource_Integrity` ([MDN Web Docs][7])
941: * Clickjacking defenses overview — `https://developer.mozilla.org/en-US/docs/Web/Security/Attacks/Clickjacking` ([MDN Web Docs][8])
942: * Using Service Workers (HTTPS requirement; proxy-like behavior) — `https://developer.mozilla.org/en-US/docs/Web/API/Service_Worker_API/Using_Service_Workers` ([MDN Web Docs][10])
943: * Secure contexts (powerful APIs restricted to HTTPS) — `https://developer.mozilla.org/en-US/docs/Web/Security/Defenses/Secure_Contexts` ([MDN Web Docs][18])
944: * Link `rel` values (noopener/noreferrer) — `https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/rel` ([MDN Web Docs][17])
945: 
946: Build tooling / env exposure references:
947: 
948: * Create React App env variables warning — `https://create-react-app.dev/docs/adding-custom-environment-variables/` ([create-react-app.dev][1])
949: * Vite env variables security notes — `https://vite.dev/guide/env-and-mode` ([vitejs][11])
950: 
951: Auth/token storage guidance:
952: 
953: * OAuth 2.0 for Browser-Based Apps (token storage discussion) — `https://datatracker.ietf.org/doc/html/draft-ietf-oauth-browser-based-apps` ([IETF Datatracker][16])
954: 
955: Dependency tooling references:
956: 
957: * npm audit docs — `https://docs.npmjs.com/cli/v10/commands/npm-audit/` ([npm Docs][20])
958: * npm ci docs — `https://docs.npmjs.com/cli/v10/commands/npm-ci/` ([npm Docs][21])
959: 
960: Sanitizer reference:
961: 
962: * DOMPurify — `https://github.com/cure53/DOMPurify` ([GitHub][13])
963: 
964: [1]: https://create-react-app.dev/docs/adding-custom-environment-variables/ "Adding Custom Environment Variables | Create React App"
965: [2]: https://cheatsheetseries.owasp.org/cheatsheets/Content_Security_Policy_Cheat_Sheet.html "Content Security Policy - OWASP Cheat Sheet Series"
966: [3]: https://developer.mozilla.org/en-US/docs/Web/API/Trusted_Types_API "Trusted Types API - Web APIs | MDN"
967: [4]: https://cheatsheetseries.owasp.org/cheatsheets/HTML5_Security_Cheat_Sheet.html "HTML5 Security - OWASP Cheat Sheet Series"
968: [5]: https://cheatsheetseries.owasp.org/cheatsheets/Third_Party_Javascript_Management_Cheat_Sheet.html "Third Party Javascript Management - OWASP Cheat Sheet Series"
969: [6]: https://cheatsheetseries.owasp.org/cheatsheets/Cross-Site_Request_Forgery_Prevention_Cheat_Sheet.html "Cross-Site Request Forgery Prevention - OWASP Cheat Sheet Series"
970: [7]: https://developer.mozilla.org/en-US/docs/Web/Security/Defenses/Subresource_Integrity "Subresource Integrity - Security | MDN"
971: [8]: https://developer.mozilla.org/en-US/docs/Web/Security/Attacks/Clickjacking "Clickjacking - Security | MDN"
972: [9]: https://cheatsheetseries.owasp.org/cheatsheets/Cross_Site_Scripting_Prevention_Cheat_Sheet.html "Cross Site Scripting Prevention - OWASP Cheat Sheet Series"
973: [10]: https://developer.mozilla.org/en-US/docs/Web/API/Service_Worker_API/Using_Service_Workers "Using Service Workers - Web APIs | MDN"
974: [11]: https://vite.dev/guide/env-and-mode "Env Variables and Modes | Vite"
975: [12]: https://react.dev/reference/react-dom/components/common "Common components (e.g. <div>) – React"
976: [13]: https://github.com/cure53/DOMPurify "GitHub - cure53/DOMPurify: DOMPurify - a DOM-only, super-fast, uber-tolerant XSS sanitizer for HTML, MathML and SVG. DOMPurify works with a secure default, but offers a lot of configurability and hooks. Demo:"
977: [14]: https://legacy.reactjs.org/docs/introducing-jsx.html "Introducing JSX – React"
978: [15]: https://www.w3.org/TR/trusted-types/ "Trusted Types"
979: [16]: https://datatracker.ietf.org/doc/html/draft-ietf-oauth-browser-based-apps "
980:             
981:                 draft-ietf-oauth-browser-based-apps-26
982:             
983:         "
984: [17]: https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Attributes/rel "HTML attribute: rel - HTML | MDN"
985: [18]: https://developer.mozilla.org/en-US/docs/Web/Security/Defenses/Secure_Contexts "Secure contexts - Security | MDN"
986: [19]: https://cheatsheetseries.owasp.org/cheatsheets/File_Upload_Cheat_Sheet.html "File Upload - OWASP Cheat Sheet Series"
987: [20]: https://docs.npmjs.com/cli/v10/commands/npm-audit "npm-audit | npm Docs"
988: [21]: https://docs.npmjs.com/cli/v10/commands/npm-ci "npm-ci | npm Docs"
989: [22]: https://cheatsheetseries.owasp.org/cheatsheets/NPM_Security_Cheat_Sheet.html "NPM Security - OWASP Cheat Sheet Series"
990: [23]: https://react.dev/blog/2024/12/05/react-19 "React v19 – React"

(End of file - total 990 lines)
</content>
```

**Tool: read**

**Input:**
```json
{
  "filePath": "C:\\Users\\ASUS\\Desktop\\UIS\\HDSP\\SemanaGeofisica\\6a-semana-geofisica.github.io\\.env"
}
```

**Output:**
```
<path>C:\Users\ASUS\Desktop\UIS\HDSP\SemanaGeofisica\6a-semana-geofisica.github.io\.env</path>
<type>file</type>
<content>
1: VITE_EMAILJS_PUBLIC_KEY=pLZjbkiSnxwLTLK7G
2: VITE_EMAILJS_SERVICE_ID=service_ao957l6
3: VITE_EMAILJS_TEMPLATE_ASISTENTE_ID=template_6qec1n8
4: VITE_EMAILJS_TEMPLATE_ORGANIZADOR_ID=template_l5egac8
5: VITE_EMAILJS_ORGANIZADOR_EMAIL=6a.semana.geofisica@gmail.com
6: VITE_APPS_SCRIPT_URL=https://script.google.com/macros/s/AKfycbyiLAXIQYyh51MMIDySHMOgFuFQnnYEKklZ4381WozskLCS55CbMkrESHoGzlu_esPZRg/exec

(End of file - total 6 lines)
</content>
```

**Tool: bash**

**Input:**
```json
{
  "command": "Get-ChildItem -Recurse -File src,public,scripts | Select-Object FullName,Length"
}
```

**Output:**
```

FullName                                                                                                               
--------                                                                                                               
C:\Users\ASUS\Desktop\UIS\HDSP\SemanaGeofisica\6a-semana-geofisica.github.io\src\App.jsx                               
C:\Users\ASUS\Desktop\UIS\HDSP\SemanaGeofisica\6a-semana-geofisica.github.io\src\index.css                             
C:\Users\ASUS\Desktop\UIS\HDSP\SemanaGeofisica\6a-semana-geofisica.github.io\src\main.jsx                              
C:\Users\ASUS\Desktop\UIS\HDSP\SemanaGeofisica\6a-semana-geofisica.github.io\src\assets\evento\v_semana_2025_confere...
C:\Users\ASUS\Desktop\UIS\HDSP\SemanaGeofisica\6a-semana-geofisica.github.io\src\assets\evento\v_semana_2025_confere...
C:\Users\ASUS\Desktop\UIS\HDSP\SemanaGeofisica\6a-semana-geofisica.github.io\src\assets\evento\v_semana_2025_confere...
C:\Users\ASUS\Desktop\UIS\HDSP\SemanaGeofisica\6a-semana-geofisica.github.io\src\assets\flyers\apoyo_estudiantes.avif  
C:\Users\ASUS\Desktop\UIS\HDSP\SemanaGeofisica\6a-semana-geofisica.github.io\src\assets\flyers\apoyo_estudiantes.png   
C:\Users\ASUS\Desktop\UIS\HDSP\SemanaGeofisica\6a-semana-geofisica.github.io\src\assets\flyers\apoyo_estudiantes_eve...
C:\Users\ASUS\Desktop\UIS\HDSP\SemanaGeofisica\6a-semana-geofisica.github.io\src\assets\flyers\recepcion_resumenes_2...
C:\Users\ASUS\Desktop\UIS\HDSP\SemanaGeofisica\6a-semana-geofisica.github.io\src\assets\flyers\recepcion_resumenes_p...
C:\Users\ASUS\Desktop\UIS\HDSP\SemanaGeofisica\6a-semana-geofisica.github.io\src\assets\flyers\recepcion_resumenes_p...
C:\Users\ASUS\Desktop\UIS\HDSP\SemanaGeofisica\6a-semana-geofisica.github.io\src\assets\fondos\fondo_titulo_principa...
C:\Users\ASUS\Desktop\UIS\HDSP\SemanaGeofisica\6a-semana-geofisica.github.io\src\assets\logos\2026_VI_SEMANA_GEOF�SI...
C:\Users\ASUS\Desktop\UIS\HDSP\SemanaGeofisica\6a-semana-geofisica.github.io\src\assets\organizaciones\gidco.avif      
C:\Users\ASUS\Desktop\UIS\HDSP\SemanaGeofisica\6a-semana-geofisica.github.io\src\assets\organizaciones\gigba_logo.avif 
C:\Users\ASUS\Desktop\UIS\HDSP\SemanaGeofisica\6a-semana-geofisica.github.io\src\assets\organizaciones\hdsplogo.svg    
C:\Users\ASUS\Desktop\UIS\HDSP\SemanaGeofisica\6a-semana-geofisica.github.io\src\assets\organizaciones\LOGO_ANH.avif   
C:\Users\ASUS\Desktop\UIS\HDSP\SemanaGeofisica\6a-semana-geofisica.github.io\src\assets\organizaciones\logo_mincienc...
C:\Users\ASUS\Desktop\UIS\HDSP\SemanaGeofisica\6a-semana-geofisica.github.io\src\assets\organizaciones\logo_SIGAC_20...
C:\Users\ASUS\Desktop\UIS\HDSP\SemanaGeofisica\6a-semana-geofisica.github.io\src\assets\organizaciones\logo_UIS.avif   
C:\Users\ASUS\Desktop\UIS\HDSP\SemanaGeofisica\6a-semana-geofisica.github.io\src\assets\team\Ana_Beatriz.avif          
C:\Users\ASUS\Desktop\UIS\HDSP\SemanaGeofisica\6a-semana-geofisica.github.io\src\assets\team\Ana_Celina.avif           
C:\Users\ASUS\Desktop\UIS\HDSP\SemanaGeofisica\6a-semana-geofisica.github.io\src\assets\team\Ana_Mantilla.avif         
C:\Users\ASUS\Desktop\UIS\HDSP\SemanaGeofisica\6a-semana-geofisica.github.io\src\assets\team\Daniela_Quintero.avif     
C:\Users\ASUS\Desktop\UIS\HDSP\SemanaGeofisica\6a-semana-geofisica.github.io\src\assets\team\David_Zapata.avif         
C:\Users\ASUS\Desktop\UIS\HDSP\SemanaGeofisica\6a-semana-geofisica.github.io\src\assets\team\HenryA.avif               
C:\Users\ASUS\Desktop\UIS\HDSP\SemanaGeofisica\6a-semana-geofisica.github.io\src\assets\team\Jose_Barrios.avif         
C:\Users\ASUS\Desktop\UIS\HDSP\SemanaGeofisica\6a-semana-geofisica.github.io\src\assets\team\Maria_Bohorquez.avif      
C:\Users\ASUS\Desktop\UIS\HDSP\SemanaGeofisica\6a-semana-geofisica.github.io\src\assets\team\Paul_Goyes.avif           
C:\Users\ASUS\Desktop\UIS\HDSP\SemanaGeofisica\6a-semana-geofisica.github.io\src\assets\team\Sait_Khurama.avif         
C:\Users\ASUS\Desktop\UIS\HDSP\SemanaGeofisica\6a-semana-geofisica.github.io\src\assets\videos\image.avif              
C:\Users\ASUS\Desktop\UIS\HDSP\SemanaGeofisica\6a-semana-geofisica.github.io\src\assets\videos\VIDEO_proyecto_genera...
C:\Users\ASUS\Desktop\UIS\HDSP\SemanaGeofisica\6a-semana-geofisica.github.io\src\components\layout\Footer.jsx          
C:\Users\ASUS\Desktop\UIS\HDSP\SemanaGeofisica\6a-semana-geofisica.github.io\src\components\layout\Navbar.jsx          
C:\Users\ASUS\Desktop\UIS\HDSP\SemanaGeofisica\6a-semana-geofisica.github.io\src\components\pages\Aprende.jsx          
C:\Users\ASUS\Desktop\UIS\HDSP\SemanaGeofisica\6a-semana-geofisica.github.io\src\components\pages\Contacto.jsx         
C:\Users\ASUS\Desktop\UIS\HDSP\SemanaGeofisica\6a-semana-geofisica.github.io\src\components\pages\Cursos.jsx           
C:\Users\ASUS\Desktop\UIS\HDSP\SemanaGeofisica\6a-semana-geofisica.github.io\src\components\pages\Estudiantes.jsx      
C:\Users\ASUS\Desktop\UIS\HDSP\SemanaGeofisica\6a-semana-geofisica.github.io\src\components\pages\Inicio.jsx           
C:\Users\ASUS\Desktop\UIS\HDSP\SemanaGeofisica\6a-semana-geofisica.github.io\src\components\pages\Patrocinadores.jsx   
C:\Users\ASUS\Desktop\UIS\HDSP\SemanaGeofisica\6a-semana-geofisica.github.io\src\components\pages\Programa.jsx         
C:\Users\ASUS\Desktop\UIS\HDSP\SemanaGeofisica\6a-semana-geofisica.github.io\src\components\pages\Registro.jsx         
C:\Users\ASUS\Desktop\UIS\HDSP\SemanaGeofisica\6a-semana-geofisica.github.io\src\components\pages\Resumenes.jsx        
C:\Users\ASUS\Desktop\UIS\HDSP\SemanaGeofisica\6a-semana-geofisica.github.io\src\components\pages\Vgeofisica.jsx       
C:\Users\ASUS\Desktop\UIS\HDSP\SemanaGeofisica\6a-semana-geofisica.github.io\src\components\static\Hero.jsx            
C:\Users\ASUS\Desktop\UIS\HDSP\SemanaGeofisica\6a-semana-geofisica.github.io\src\components\static\VideoHero.jsx       
C:\Users\ASUS\Desktop\UIS\HDSP\SemanaGeofisica\6a-semana-geofisica.github.io\src\components\ui\AcercaDelEvento.jsx     
C:\Users\ASUS\Desktop\UIS\HDSP\SemanaGeofisica\6a-semana-geofisica.github.io\src\components\ui\AnimatedButton.jsx      
C:\Users\ASUS\Desktop\UIS\HDSP\SemanaGeofisica\6a-semana-geofisica.github.io\src\components\ui\Button.jsx              
C:\Users\ASUS\Desktop\UIS\HDSP\SemanaGeofisica\6a-semana-geofisica.github.io\src\components\ui\Card.jsx                
C:\Users\ASUS\Desktop\UIS\HDSP\SemanaGeofisica\6a-semana-geofisica.github.io\src\components\ui\FloatingShapes.jsx      
C:\Users\ASUS\Desktop\UIS\HDSP\SemanaGeofisica\6a-semana-geofisica.github.io\src\components\ui\GlowCard.jsx            
C:\Users\ASUS\Desktop\UIS\HDSP\SemanaGeofisica\6a-semana-geofisica.github.io\src\components\ui\InscripcionModal.jsx    
C:\Users\ASUS\Desktop\UIS\HDSP\SemanaGeofisica\6a-semana-geofisica.github.io\src\components\ui\OptimizedImage.jsx      
C:\Users\ASUS\Desktop\UIS\HDSP\SemanaGeofisica\6a-semana-geofisica.github.io\src\components\ui\ParallaxOrb.jsx         
C:\Users\ASUS\Desktop\UIS\HDSP\SemanaGeofisica\6a-semana-geofisica.github.io\src\components\ui\Proximamente.jsx        
C:\Users\ASUS\Desktop\UIS\HDSP\SemanaGeofisica\6a-semana-geofisica.github.io\src\components\ui\ScrollProgress.jsx      
C:\Users\ASUS\Desktop\UIS\HDSP\SemanaGeofisica\6a-semana-geofisica.github.io\src\components\ui\ScrollToTop.jsx         
C:\Users\ASUS\Desktop\UIS\HDSP\SemanaGeofisica\6a-semana-geofisica.github.io\src\components\ui\TextReveal.jsx          
C:\Users\ASUS\Desktop\UIS\HDSP\SemanaGeofisica\6a-semana-geofisica.github.io\src\data\Personal.js                      
C:\Users\ASUS\Desktop\UIS\HDSP\SemanaGeofisica\6a-semana-geofisica.github.io\src\data\Prox.js                          
C:\Users\ASUS\Desktop\UIS\HDSP\SemanaGeofisica\6a-semana-geofisica.github.io\src\data\Vistas.js                        
C:\Users\ASUS\Desktop\UIS\HDSP\SemanaGeofisica\6a-semana-geofisica.github.io\src\hooks\useMagnetic.js                  
C:\Users\ASUS\Desktop\UIS\HDSP\SemanaGeofisica\6a-semana-geofisica.github.io\src\hooks\useReducedMotion.js             
C:\Users\ASUS\Desktop\UIS\HDSP\SemanaGeofisica\6a-semana-geofisica.github.io\src\hooks\useScrollReveal.js              
C:\Users\ASUS\Desktop\UIS\HDSP\SemanaGeofisica\6a-semana-geofisica.github.io\public\geofisica.svg                      
C:\Users\ASUS\Desktop\UIS\HDSP\SemanaGeofisica\6a-semana-geofisica.github.io\public\icons.svg                          
C:\Users\ASUS\Desktop\UIS\HDSP\SemanaGeofisica\6a-semana-geofisica.github.io\public\robots.txt                         
C:\Users\ASUS\Desktop\UIS\HDSP\SemanaGeofisica\6a-semana-geofisica.github.io\public\sitemap.xml                        
C:\Users\ASUS\Desktop\UIS\HDSP\SemanaGeofisica\6a-semana-geofisica.github.io\public\_redirects                         
C:\Users\ASUS\Desktop\UIS\HDSP\SemanaGeofisica\6a-semana-geofisica.github.io\scripts\convert-to-avif.mjs               



```

---

## Assistant (Plan · DeepSeek V4 Pro (New) · 6.0s)

_Thinking:_

Now let me examine the key files: the Registro.jsx (registration form), Contacto.jsx, InscripcionModal.jsx (form submission via EmailJS and Apps Script), and check for sinks. Let me grep for dangerous patterns and read the relevant form files.

**Tool: grep**

**Input:**
```json
{
  "pattern": "innerHTML|outerHTML|insertAdjacentHTML|dangerouslySetInnerHTML|__html|document\\.write|eval\\(|new Function|setTimeout\\(|setInterval\\(|postMessage|localStorage|sessionStorage|target=._blank|window\\.open|window\\.location|location\\.href|location\\.assign|location\\.replace|javascript:|fetch\\(|axios|VITE_|import\\.meta\\.env|apps\\.script|emailjs|EmailJS",
  "path": "C:\\Users\\ASUS\\Desktop\\UIS\\HDSP\\SemanaGeofisica\\6a-semana-geofisica.github.io\\src"
}
```

**Output:**
```
Found 17 matches
C:\Users\ASUS\Desktop\UIS\HDSP\SemanaGeofisica\6a-semana-geofisica.github.io\src\components\ui\InscripcionModal.jsx:
  Line 3: import emailjs from '@emailjs/browser'

  Line 5: const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY

  Line 6: const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID

  Line 7: const TEMPLATE_ASISTENTE = import.meta.env.VITE_EMAILJS_TEMPLATE_ASISTENTE_ID

  Line 8: const TEMPLATE_ORGANIZADOR = import.meta.env.VITE_EMAILJS_TEMPLATE_ORGANIZADOR_ID

  Line 10:   import.meta.env.VITE_EMAILJS_ORGANIZADOR_EMAIL || '6a.semana.geofisica@gmail.com'

  Line 11: const APPS_SCRIPT_URL = import.meta.env.VITE_APPS_SCRIPT_URL

  Line 162:       await emailjs.send(SERVICE_ID, TEMPLATE_ASISTENTE, params, { publicKey: PUBLIC_KEY })

  Line 163:       await emailjs.send(

  Line 170:         await fetch(APPS_SCRIPT_URL, {


C:\Users\ASUS\Desktop\UIS\HDSP\SemanaGeofisica\6a-semana-geofisica.github.io\src\components\pages\Estudiantes.jsx:
  Line 34:           <a href="https://docs.google.com/forms/d/e/1FAIpQLScVx10Ku4oKmLHurQv4yVLluSk_LNAgbnRzJQwzVIoyUMELBQ/viewform" target="_blank" rel="noopener noreferrer">TE APOYAMOS!!</a>


C:\Users\ASUS\Desktop\UIS\HDSP\SemanaGeofisica\6a-semana-geofisica.github.io\src\components\pages\Inicio.jsx:
  Line 25:     window.open(enlaceSeguro, '_blank', 'noopener,noreferrer');


C:\Users\ASUS\Desktop\UIS\HDSP\SemanaGeofisica\6a-semana-geofisica.github.io\src\components\pages\Resumenes.jsx:
  Line 59:           <a href="https://docs.google.com/forms/d/e/1FAIpQLSfhq-i8Raa3W6W2wPUhHqbriF4j08ck63dccxAKLYcZuP8PjQ/viewform" target="_blank" rel="noopener noreferrer">SUBE TU RESUMEN</a>

  Line 64:           <a href="https://www.instagram.com/semana_geofisica/" target="_blank" rel="noopener noreferrer">NOTICIAS Y ACTUALIZACIONES</a>


C:\Users\ASUS\Desktop\UIS\HDSP\SemanaGeofisica\6a-semana-geofisica.github.io\src\components\pages\Aprende.jsx:
  Line 32:           <a href="https://sigacuis.github.io/Repositorio.html" target="_blank" rel="noopener noreferrer">VISÍTANOS</a>


C:\Users\ASUS\Desktop\UIS\HDSP\SemanaGeofisica\6a-semana-geofisica.github.io\src\components\pages\Registro.jsx:
  Line 28:               <a href="https://docs.google.com/forms/d/e/1FAIpQLSfhq-i8Raa3W6W2wPUhHqbriF4j08ck63dccxAKLYcZuP8PjQ/viewform" target="_blank" rel="noopener noreferrer">INSCRIBETE AHORA</a>

  Line 34:                 <a href="https://www.instagram.com/semana_geofisica/" target="_blank" rel="noopener noreferrer">NOTICIAS Y ACTUALIZACIONES</a>

```

**Tool: read**

**Input:**
```json
{
  "filePath": "C:\\Users\\ASUS\\Desktop\\UIS\\HDSP\\SemanaGeofisica\\6a-semana-geofisica.github.io\\src\\components\\pages\\Registro.jsx"
}
```

**Output:**
```
<path>C:\Users\ASUS\Desktop\UIS\HDSP\SemanaGeofisica\6a-semana-geofisica.github.io\src\components\pages\Registro.jsx</path>
<type>file</type>
<content>
1: import { useState } from 'react'
2: import Hero from '../static/Hero.jsx'
3: import Video from '../static/VideoHero.jsx'
4: import AnimatedButton from '../ui/AnimatedButton.jsx'
5: import Button from '../ui/Button.jsx'
6: import InscripcionModal from '../ui/InscripcionModal.jsx'
7: import { DataPages } from '../../data/Vistas.js';
8: import Flyer  from '../../assets/flyers/apoyo_estudiantes.png'
9: 
10: const Registro = () => {
11:   const tituloRegistro = DataPages.find(page => page.id === 2)?.titleHero || "Inscripción al evento";
12:   const [modalOpen, setModalOpen] = useState(false)
13:   const [modalKey, setModalKey] = useState(0)
14: 
15:   const openModal = () => {
16:     setModalKey((key) => key + 1)
17:     setModalOpen(true)
18:   }
19: 
20:   return (
21:     <div>
22:         <Hero titulo={tituloRegistro}>
23:           <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
24:             <Button
25:               className="w-full sm:w-auto sm:mr-12"
26:               onClick={() => console.log('Ir a subir resumen')}
27:             >
28:               <a href="https://docs.google.com/forms/d/e/1FAIpQLSfhq-i8Raa3W6W2wPUhHqbriF4j08ck63dccxAKLYcZuP8PjQ/viewform" target="_blank" rel="noopener noreferrer">INSCRIBETE AHORA</a>
29:             </Button>
30: 
31:             <Button 
32:                 className="w-full sm:w-auto border sm:ml-12 border-white/20 bg-gradient-to-br from-white/10 to-white/5 shadow-none backdrop-blur-sm hover:border-gold-400 hover:text-gold-400"
33:             >
34:                 <a href="https://www.instagram.com/semana_geofisica/" target="_blank" rel="noopener noreferrer">NOTICIAS Y ACTUALIZACIONES</a>
35:             </Button>
36:           </div>
37:         </Hero>
38: 
39:         {/* Sección de descripción superior */}
40:         <section className="bg-slate-50/50 px-4 py-16 sm:px-6 md:py-24 lg:px-8">
41:           <div className="mx-auto max-w-7xl">
42: 
43:             <div className="mb-8 flex items-center justify-center gap-4 sm:mb-20">
44:               <h3 className="text-center font-['Montserrat'] text-sm italic tracking-wide text-slate-900 sm:text-base sm:tracking-widest lg:text-2xl">
45:                 "Lo importante es no dejar de cuestionar". (Albert Einstein) 
46:               </h3>
47:             </div>
48:             
49:             {/* Título con separadores laterales */}
50:             <div className="mb-10 flex items-center justify-center gap-4">
51:               <div className="h-[2px] w-16 bg-gradient-to-r from-transparent to-gold-400 sm:w-32"></div>
52:               <h2 className="text-center font-['Montserrat'] text-lg font-bold uppercase tracking-wide text-slate-900 break-words sm:text-2xl sm:tracking-widest md:text-3xl">
53:                 VI Semana de la Geofísica
54:               </h2>
55:               <div className="h-[2px] w-16 bg-gradient-to-l from-transparent to-gold-400 sm:w-32"></div>
56:             </div>
57: 
58:             {/* Descripción general del evento */}
59:             <div className="mx-auto mb-16 max-w-4xl text-center">
60:               <p className="font-['Montserrat'] text-base leading-relaxed text-slate-600 md:text-lg">
61:                 La VI Semana de la Geofísica se realizará en Bucaramanga, Santander, la reconocida “Ciudad Bonita”, un escenario ideal para el encuentro académico y científico en el corazón de los Andes colombianos. Este evento reunirá a estudiantes, profesionales e investigadores en torno a las últimas tendencias en exploración geofísica, inteligencia artificial aplicada a geociencias, transición energética, gestión del riesgo, sismología y agrogeofísica. La inscripción al evento se efectuará mediante un formulario de Google, donde encontrará toda la información e indicaciones necesarias para completar adecuadamente su registro y asegurar su participación en esta nueva edición del encuentro geofísico más importante de la región. 
62:               </p>
63:             </div>
64: 
65:             {/* Grid de Ítems Animados (Micro-cards) */}
66:             <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
67:               {/* Ítem 1 */}
68:               <div className="group relative flex flex-col items-center overflow-hidden rounded-2xl bg-white p-8 text-center shadow-md ring-1 ring-slate-100 transition-all duration-300 ease-out hover:-translate-y-2 hover:shadow-2xl hover:shadow-gold-500/20">
69:                 <div className="absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r from-brand-600 to-gold-400 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
70:                 <div className="mb-6 flex h-[80px] w-[80px] items-center justify-center rounded-2xl bg-gold-50 text-gold-600 shadow-sm transition-all duration-500 group-hover:-rotate-6 group-hover:scale-110 group-hover:bg-gradient-to-br group-hover:from-gold-400 group-hover:to-gold-600 group-hover:text-white">
71:                   <svg className="h-9 w-9" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
72:                     <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
73:                   </svg>
74:                 </div>
75:                 <h3 className="font-['Montserrat'] text-lg font-bold text-slate-800 transition-colors duration-300 group-hover:text-brand-700">Presente su trabajo de investigación</h3>
76:               </div>
77:               {/* Ítem 2 */}
78:               <div className="group relative flex flex-col items-center overflow-hidden rounded-2xl bg-white p-8 text-center shadow-md ring-1 ring-slate-100 transition-all duration-300 ease-out hover:-translate-y-2 hover:shadow-2xl hover:shadow-gold-500/20">
79:                 <div className="absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r from-brand-600 to-gold-400 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
80:                 <div className="mb-6 flex h-[80px] w-[80px] items-center justify-center rounded-2xl bg-gold-50 text-gold-600 shadow-sm transition-all duration-500 group-hover:rotate-6 group-hover:scale-110 group-hover:bg-gradient-to-br group-hover:from-gold-400 group-hover:to-gold-600 group-hover:text-white">
81:                   <svg className="h-9 w-9" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
82:                     <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a6.04 6.04 0 00-.491 6.347A4.862 4.862 0 014 18.75c0 1.44.5 2.748 1.35 3.822h13.3c.85-1.074 1.35-2.382 1.35-3.822 0-.61-.1-1.196-.285-1.742a6.04 6.04 0 00-.49-6.347M8 18.75h8M8 21.75h8M12 15.75v-1.5m-3-4.5h6m-7.5 3h9" />
83:                   </svg>
84:                 </div>
85:                 <h3 className="font-['Montserrat'] text-lg font-bold text-slate-800 transition-colors duration-300 group-hover:text-brand-700">Aprenda de expertos del área</h3>
86:               </div>
87:               {/* Ítem 3 */}
88:               <div className="group relative flex flex-col items-center overflow-hidden rounded-2xl bg-white p-8 text-center shadow-md ring-1 ring-slate-100 transition-all duration-300 ease-out hover:-translate-y-2 hover:shadow-2xl hover:shadow-gold-500/20">
89:                 <div className="absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r from-brand-600 to-gold-400 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
90:                 <div className="mb-6 flex h-[80px] w-[80px] items-center justify-center rounded-2xl bg-gold-50 text-gold-600 shadow-sm transition-all duration-500 group-hover:-rotate-6 group-hover:scale-110 group-hover:bg-gradient-to-br group-hover:from-gold-400 group-hover:to-gold-600 group-hover:text-white">
91:                   <svg className="h-9 w-9" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
92:                     <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
93:                   </svg>
94:                 </div>
95:                 <h3 className="font-['Montserrat'] text-lg font-bold text-slate-800 transition-colors duration-300 group-hover:text-brand-700">Networking con colegas</h3>
96:               </div>
97:               {/* Ítem 4 */}
98:               <div className="group relative flex flex-col items-center overflow-hidden rounded-2xl bg-white p-8 text-center shadow-md ring-1 ring-slate-100 transition-all duration-300 ease-out hover:-translate-y-2 hover:shadow-2xl hover:shadow-gold-500/20">
99:                 <div className="absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r from-brand-600 to-gold-400 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
100:                 <div className="mb-6 flex h-[80px] w-[80px] items-center justify-center rounded-2xl bg-gold-50 text-gold-600 shadow-sm transition-all duration-500 group-hover:rotate-6 group-hover:scale-110 group-hover:bg-gradient-to-br group-hover:from-gold-400 group-hover:to-gold-600 group-hover:text-white">
101:                   <svg className="h-9 w-9" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
102:                     <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23-.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
103:                   </svg>
104:                 </div>
105:                 <h3 className="font-['Montserrat'] text-lg font-bold text-slate-800 transition-colors duration-300 group-hover:text-brand-700">Viva la experiencia científica</h3>
106:               </div>
107:             </div>
108:           </div>
109:         </section>
110: 
111:         {/* SECCIÓN DETALLADA DE REGISTRO CON GRID DE 2 COLUMNAS */}
112:         <section className="px-4 py-16 sm:px-6 lg:px-8">
113:           <div className="mx-auto max-w-7xl">
114:             
115:             {/* Grid layout: 7 columnas para texto, 5 para imágenes en desktop */}
116:             <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
117:               
118:               {/* COLUMNA IZQUIERDA: Textos e Información */}
119:               <div className="flex flex-col lg:col-span-7">
120:                 <h2 className="mb-6 font-['Montserrat'] text-3xl font-black uppercase tracking-tight text-slate-900 sm:text-4xl">
121:                   Registra tu asistencia a la <span className="bg-gradient-to-r from-gold-400 to-brand-600 bg-clip-text text-transparent">VI Semana de la Geofísica</span>
122:                 </h2>
123:                 
124:                 <p className="mb-4 font-['Montserrat'] text-base leading-relaxed text-slate-600">
125:                   Del 3 al 7 de noviembre de 2026, la Universidad Industrial de Santander será el punto de encuentro de estudiantes, profesionales, docentes e investigadores interesados en el presente y futuro de las geociencias.
126:                 </p>
127:                 <p className="mb-10 font-['Montserrat'] text-base leading-relaxed text-slate-600">
128:                   Durante cinco días, la VI Semana de la Geofísica ofrecerá un espacio para conocer avances científicos, intercambiar experiencias y establecer nuevas conexiones académicas y profesionales.
129:                 </p>
130: 
131:                 {/* Subtítulo 1 */}
132:                 <h3 className="mb-6 font-['Montserrat'] text-xl font-bold uppercase tracking-widest text-brand-800">
133:                   ¿Qué encontrarás en el evento?
134:                 </h3>
135:                 <ul className="mb-10 flex flex-col gap-6">
136:                   <li className="flex items-start gap-4">
137:                     <div className="flex rounded-lg bg-gold-100 p-2 text-gold-600">
138:                       {/* Icono de academia/conferencias */}
139:                       <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
140:                         <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
141:                       </svg>
142:                     </div>
143:                     <div>
144:                       <strong className="block font-['Montserrat'] text-slate-900">Conferencias y espacios académicos</strong>
145:                       <span className="text-slate-600">Aprende de expertos nacionales e internacionales y conoce investigaciones recientes en diferentes áreas de la geofísica.</span>
146:                     </div>
147:                   </li>
148:                   <li className="flex items-start gap-4">
149:                     <div className="flex rounded-lg bg-gold-100 p-2 text-gold-600">
150:                       {/* Icono de IA/Tecnología */}
151:                       <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
152:                         <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 3v1.5M4.5 8.25H3m18 0h-1.5M4.5 12H3m18 0h-1.5m-15 3.75H3m18 0h-1.5M8.25 19.5V21M12 3v1.5m0 15V21m3.75-18v1.5m0 15V21m-9-1.5h10.5a2.25 2.25 0 002.25-2.25V6.75a2.25 2.25 0 00-2.25-2.25H6.75A2.25 2.25 0 004.5 6.75v10.5a2.25 2.25 0 002.25 2.25zm.75-12h9v9h-9v-9z" />
153:                       </svg>
154:                     </div>
155:                     <div>
156:                       <strong className="block font-['Montserrat'] text-slate-900">Geofísica, inteligencia artificial e innovación</strong>
157:                       <span className="text-slate-600">Explora aplicaciones de inteligencia artificial, ciencia de datos y nuevas tecnologías en geociencias, transición energética, monitoreo ambiental y gestión del riesgo.</span>
158:                     </div>
159:                   </li>
160:                   <li className="flex items-start gap-4">
161:                     <div className="flex rounded-lg bg-gold-100 p-2 text-gold-600">
162:                       {/* Icono de Gráfico/Investigación */}
163:                       <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
164:                         <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
165:                       </svg>
166:                     </div>
167:                     <div>
168:                       <strong className="block font-['Montserrat'] text-slate-900">Divulgación de investigaciones</strong>
169:                       <span className="text-slate-600">Comparte los resultados de tu trabajo, conoce proyectos desarrollados por otros participantes y participa en espacios de discusión científica.</span>
170:                     </div>
171:                   </li>
172:                   <li className="flex items-start gap-4">
173:                     <div className="flex rounded-lg bg-gold-100 p-2 text-gold-600">
174:                       {/* Icono de Conexiones/Usuarios */}
175:                       <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
176:                         <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
177:                       </svg>
178:                     </div>
179:                     <div>
180:                       <strong className="block font-['Montserrat'] text-slate-900">Conexiones académicas y profesionales</strong>
181:                       <span className="text-slate-600">Interactúa con estudiantes, investigadores, docentes, profesionales y representantes de diferentes instituciones.</span>
182:                     </div>
183:                   </li>
184:                 </ul>
185: 
186:                 {/* Subtítulo 2 */}
187:                 <h3 className="mb-6 font-['Montserrat'] text-xl font-bold uppercase tracking-widest text-brand-800">
188:                   Información del Evento
189:                 </h3>
190:                 <ul className="mb-10 flex flex-col gap-3 font-['Montserrat'] text-slate-700">
191:                   <li className="flex items-center gap-3">
192:                     <svg className="h-5 w-5 text-gold-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z" /></svg>
193:                     <strong>Fecha:</strong> 3 al 7 de noviembre de 2026
194:                   </li>
195:                   <li className="flex items-center gap-3">
196:                     <svg className="h-5 w-5 text-gold-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" /></svg>
197:                     <strong>Lugar:</strong> Universidad Industrial de Santander, Bucaramanga
198:                   </li>
199:                   <li className="flex items-center gap-3">
200:                     <svg className="h-5 w-5 text-gold-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" /></svg>
201:                     <strong>Modalidad:</strong> Presencial
202:                   </li>
203:                   <li className="flex items-center gap-3">
204:                     <svg className="h-5 w-5 text-gold-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" /></svg>
205:                     <strong>Contacto:</strong> 6a.semana.geofisica@gmail.com
206:                   </li>
207:                 </ul>
208: 
209:                 {/* Subtítulo 3 y Botón */}
210:                 <h3 className="mb-4 font-['Montserrat'] text-xl font-bold uppercase tracking-widest text-brand-800">
211:                   ¿Cómo registrarte?
212:                 </h3>
213:                 <p className="mb-8 font-['Montserrat'] text-slate-600">
214:                   Completa el formulario de inscripción haciendo clic en el botón disponible a continuación o escaneando el código QR del flyer.
215:                 </p>
216:                 <div className="flex w-full justify-start">
217:                   <a>
218:                     <AnimatedButton onClick={openModal}>
219:                       REGISTRARME
220:                     </AnimatedButton>
221:                   </a>
222:                 </div>
223:               </div>
224: 
225:               {/* COLUMNA DERECHA: Flyer y Mapa */}
226:               <div className="flex flex-col gap-8 lg:col-span-5">
227:                 
228:                 {/* Contenedor del Flyer (Sustituye el contenido con tu etiqueta <img />) */}
229:                 <div className="flex aspect-[4/5] w-full items-center justify-center overflow-hidden rounded-2xl border border-slate-200 bg-slate-100 shadow-lg">
230:                   <img src={Flyer} alt="Flyer del evento" className="h-full w-full object-cover" />
231:                   {/* Ejemplo de uso real: <img src={FlyerImg} alt="Flyer del evento" className="h-full w-full object-cover" /> */}
232:                 </div>
233: 
234:                 {/* Contenedor del Mapa (Integración con iframe de Google Maps - Coordenadas predeterminadas UIS) */}
235:                 <div className="aspect-video w-full overflow-hidden rounded-2xl border border-slate-200 shadow-lg">
236:                   <iframe
237:                     title="Mapa Universidad Industrial de Santander"
238:                     src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3959.531777553597!2d-73.12199862402138!3d7.142999792862024!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e683f1e944ef011%3A0x6b10de67f2e1a396!2sUniversidad%20Industrial%20de%20Santander!5e0!3m2!1ses!2sco!4v1715000000000!5m2!1ses!2sco"
239:                     width="100%"
240:                     height="100%"
241:                     style={{ border: 0 }}
242:                     allowFullScreen=""
243:                     loading="lazy"
244:                     referrerPolicy="no-referrer-when-downgrade"
245:                   ></iframe>
246:                 </div>
247: 
248:               </div>
249:             </div>
250:           </div>
251:         </section>
252: 
253:         {/* Sección de video de fondo/cierre */}
254:         <Video/>
255: 
256:         <InscripcionModal key={modalKey} open={modalOpen} onClose={() => setModalOpen(false)} />
257: 
258:     </div>
259:   )
260: }
261: 
262: export default Registro;

(End of file - total 262 lines)
</content>
```

**Tool: read**

**Input:**
```json
{
  "filePath": "C:\\Users\\ASUS\\Desktop\\UIS\\HDSP\\SemanaGeofisica\\6a-semana-geofisica.github.io\\src\\components\\pages\\Contacto.jsx"
}
```

**Output:**
```
<path>C:\Users\ASUS\Desktop\UIS\HDSP\SemanaGeofisica\6a-semana-geofisica.github.io\src\components\pages\Contacto.jsx</path>
<type>file</type>
<content>
1: import { motion } from 'framer-motion';
2: import { useScrollReveal, useStaggeredReveal } from '../../hooks/useScrollReveal.js';
3: import { TextReveal } from '../ui/TextReveal.jsx';
4: import Hero from '../static/Hero.jsx';
5: import Video from '../static/VideoHero.jsx';
6: import Button from '../ui/Button.jsx';
7: import { DataPages } from '../../data/Vistas.js';
8: 
9: const tituloContacto = DataPages.find(page => page.id === 3)?.titleHero;
10: 
11: const cardData = [
12:   { title: 'Presente su trabajo de investigación', icon: 'M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z' },
13:   { title: 'Aprenda de expertos del área', icon: 'M4.26 10.147a6.04 6.04 0 00-.491 6.347A4.862 4.862 0 014 18.75c0 1.44.5 2.748 1.35 3.822h13.3c.85-1.074 1.35-2.382 1.35-3.822 0-.61-.1-1.196-.285-1.742a6.04 6.04 0 00-.49-6.347M8 18.75h8M8 21.75h8M12 15.75v-1.5m-3-4.5h6m-7.5 3h9' },
14:   { title: 'Networking con colegas', icon: 'M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z' },
15:   { title: 'Viva la experiencia científica', icon: 'M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23-.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5' },
16: ];
17: 
18: const Contacto = () => {
19:   const [quoteRef, quoteVisible] = useScrollReveal({ margin: '-100px' });
20:   const [titleRef, titleVisible] = useScrollReveal({ margin: '-100px' });
21:   const [descRef, descVisible] = useScrollReveal({ margin: '-100px' });
22:   const [microRefs, microVisible] = useStaggeredReveal(4);
23: 
24:   return (
25:     <div>
26:       <Hero titulo={tituloContacto}>
27:         <Button className="w-full sm:w-auto" onClick={() => console.log('Ir a subir resumen')}>
28:           <a href="https://www.instagram.com/semana_geofisica/">Instagram</a>
29:         </Button>
30:         <Button
31:           className="w-full sm:w-auto border border-white/20 bg-gradient-to-br from-white/10 to-white/5 shadow-none backdrop-blur-sm hover:border-gold-400 hover:text-gold-400"
32:           onClick={() => console.log('Ver noticias')}
33:         >
34:           6a.semana.geofisica@gmail.com
35:         </Button>
36:         <Button className="w-full sm:w-auto" onClick={() => console.log('Ir a registro')}>
37:           <a href="https://chat.whatsapp.com/FHC0HqhGl6iBsDuotgVhuy">WhatsApp</a>
38:         </Button>
39:       </Hero>
40: 
41:       <section className="bg-slate-50/50 px-4 py-16 sm:px-6 md:py-24 lg:px-8">
42:         <div className="mx-auto max-w-7xl">
43:           <motion.div
44:             ref={quoteRef}
45:             initial={{ opacity: 0, y: 20 }}
46:             animate={quoteVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
47:             transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
48:             className="mb-8 flex items-center justify-center gap-4 sm:mb-20"
49:           >
50:             <div className="mb-8 flex items-center justify-center gap-4 sm:mb-20">
51:               <h3 className="text-center font-['Montserrat'] text-sm italic tracking-wide text-slate-900 sm:text-base sm:tracking-widest lg:text-2xl">
52:                 "Lo importante es no dejar de cuestionar". (Albert Einstein) 
53:               </h3>
54:             </div>
55:           </motion.div>
56: 
57:           <motion.div
58:             ref={titleRef}
59:             initial={{ opacity: 0, y: 30 }}
60:             animate={titleVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
61:             transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
62:             className="mb-10 flex items-center justify-center gap-4"
63:           >
64:             <div className="h-[2px] w-16 bg-gradient-to-r from-transparent to-gold-400 sm:w-32" />
65:             <TextReveal split="words" stagger={0.08} className="text-center font-['Montserrat'] text-lg font-bold uppercase tracking-wide text-slate-900 break-words sm:text-2xl sm:tracking-widest md:text-3xl">
66:               VI Semana de la Geofísica
67:             </TextReveal>
68:             <div className="h-[2px] w-16 bg-gradient-to-l from-transparent to-gold-400 sm:w-32" />
69:           </motion.div>
70: 
71:           <motion.div
72:             ref={descRef}
73:             initial={{ opacity: 0, y: 20 }}
74:             animate={descVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
75:             transition={{ duration: 0.6, delay: 0.2, ease: [0.23, 1, 0.32, 1] }}
76:             className="mb-10 flex flex-col items-center justify-center text-center"
77:           >
78:             <h3 className="mb-3 font-['Montserrat'] text-2xl font-bold tracking-widest text-slate-900 sm:text-3xl">
79:               Contactanos
80:             </h3>
81:             <p className="mb-8 max-w-2xl font-['Montserrat'] text-base leading-relaxed text-slate-600 sm:text-lg">
82:               Para más información y cualquier consulta, no dude en contactar a los organizadores:
83:               <br />
84:               <span className="font-extrabold text-slate-800">
85:                 Ana Mantilla - Daniela Quintero - Grupo de Investigación HDSP
86:               </span>
87:             </p>
88:             <h5 className="font-['Montserrat'] text-xl font-bold tracking-widest text-slate-900 sm:text-2xl">
89:               Información de contacto
90:             </h5>
91:             <ul className="mb-2 mt-3 max-w-2xl font-['Montserrat'] text-base leading-relaxed text-slate-600 sm:text-lg">
92:               <li>
93:                 <span className="font-extrabold text-slate-800">Ana Mantilla</span> - <a href="mailto:ana.mantilla@correo.uis.edu.co">ana.mantilla@correo.uis.edu.co</a>
94:               </li>
95:               <li>
96:                 <span className="font-extrabold text-slate-800">Daniela Quintero</span> - <a href="mailto:daniela2202434@correo.uis.edu.co">daniela2202434@correo.uis.edu.co</a>
97:               </li>
98:               <li>
99:                 <span className="font-extrabold text-slate-800">Grupo de Investigación HDSP</span> - <a href="mailto:hdsp@uis.edu.co">hdsp@uis.edu.co</a>
100:               </li>
101:             </ul>
102:           </motion.div>
103: 
104:           <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
105:             {cardData.map((item, i) => (
106:               <motion.div
107:                 key={item.title}
108:                 ref={microRefs(i)}
109:                 initial={{ opacity: 0, y: 40, scale: 0.95 }}
110:                 animate={microVisible[i] ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 40, scale: 0.95 }}
111:                 transition={{ duration: 0.6, delay: i * 0.1, ease: [0.23, 1, 0.32, 1] }}
112:                 className="group relative flex flex-col items-center overflow-hidden rounded-2xl bg-white p-8 text-center shadow-md ring-1 ring-slate-100 transition-all duration-300 ease-out hover:-translate-y-2 hover:shadow-2xl hover:shadow-gold-500/20"
113:               >
114:                 <div className="absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r from-brand-600 to-gold-400 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
115:                 <motion.div
116:                   whileHover={{ rotate: i % 2 === 0 ? -6 : 6, scale: 1.1, transition: { duration: 0.5, ease: [0.23, 1, 0.32, 1] } }}
117:                   className="mb-6 flex h-[80px] w-[80px] items-center justify-center rounded-2xl bg-gold-50 text-gold-600 shadow-sm transition-all duration-500 group-hover:bg-gradient-to-br group-hover:from-gold-400 group-hover:to-gold-600 group-hover:text-white"
118:                 >
119:                   <svg className="h-9 w-9" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
120:                     <path strokeLinecap="round" strokeLinejoin="round" d={item.icon} />
121:                   </svg>
122:                 </motion.div>
123:                 <h3 className="font-['Montserrat'] text-lg font-bold text-slate-800 transition-colors duration-300 group-hover:text-brand-700">{item.title}</h3>
124:               </motion.div>
125:             ))}
126:           </div>
127:         </div>
128:       </section>
129: 
130:       <Video />
131:     </div>
132:   );
133: };
134: 
135: export default Contacto;

(End of file - total 135 lines)
</content>
```

**Tool: read**

**Input:**
```json
{
  "filePath": "C:\\Users\\ASUS\\Desktop\\UIS\\HDSP\\SemanaGeofisica\\6a-semana-geofisica.github.io\\src\\components\\ui\\InscripcionModal.jsx"
}
```

**Output:**
```
<path>C:\Users\ASUS\Desktop\UIS\HDSP\SemanaGeofisica\6a-semana-geofisica.github.io\src\components\ui\InscripcionModal.jsx</path>
<type>file</type>
<content>
1: import { useCallback, useEffect, useRef, useState } from 'react'
2: import { AnimatePresence, motion } from 'framer-motion'
3: import emailjs from '@emailjs/browser'
4: 
5: const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY
6: const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID
7: const TEMPLATE_ASISTENTE = import.meta.env.VITE_EMAILJS_TEMPLATE_ASISTENTE_ID
8: const TEMPLATE_ORGANIZADOR = import.meta.env.VITE_EMAILJS_TEMPLATE_ORGANIZADOR_ID
9: const ORGANIZADOR_EMAIL =
10:   import.meta.env.VITE_EMAILJS_ORGANIZADOR_EMAIL || '6a.semana.geofisica@gmail.com'
11: const APPS_SCRIPT_URL = import.meta.env.VITE_APPS_SCRIPT_URL
12: 
13: const NIVEL_OPTIONS = [
14:   'Estudiante de pregrado',
15:   'Estudiante de posgrado',
16:   'Profesional',
17:   'Técnico o tecnólogo',
18:   'Otros',
19: ]
20: 
21: const POSTER_OPTIONS = ['Sí', 'No']
22: 
23: const ENTERADO_OPTIONS = ['Página de Instagram', 'Amigo', 'Boletín informativo', 'Anuncio']
24: 
25: const initialForm = {
26:   nombre: '',
27:   email: '',
28:   afiliacion: '',
29:   nivel: '',
30:   nivelOtro: '',
31:   area: '',
32:   desde: '',
33:   poster: '',
34:   enterado: '',
35:   comentarios: '',
36: }
37: 
38: const inputClass =
39:   'w-full rounded-xl border border-slate-300 bg-white px-4 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 transition-colors focus:border-gold-500 focus:outline-none focus:ring-2 focus:ring-gold-500/30'
40: 
41: const Field = ({ label, required, error, children }) => (
42:   <label className="block">
43:     <span className="mb-1.5 block font-['Montserrat'] text-sm font-semibold uppercase tracking-wider text-slate-700">
44:       {label}
45:       {required && <span className="ml-1 text-gold-600">*</span>}
46:     </span>
47:     {children}
48:     {error && <span className="mt-1 block text-xs font-medium text-red-600">{error}</span>}
49:   </label>
50: )
51: 
52: const RadioGroup = ({ name, options, value, onChange }) => (
53:   <div className="flex flex-wrap gap-2" role="radiogroup">
54:     {options.map((option) => (
55:       <label
56:         key={option}
57:         className={`cursor-pointer rounded-full border px-4 py-2 text-sm font-medium transition-colors duration-200 ${
58:           value === option
59:             ? 'border-brand-700 bg-brand-700 text-white'
60:             : 'border-slate-300 bg-white text-slate-700 hover:border-brand-700/60 hover:text-brand-700'
61:         }`}
62:       >
63:         <input
64:           type="radio"
65:           name={name}
66:           value={option}
67:           checked={value === option}
68:           onChange={() => onChange(option)}
69:           className="sr-only"
70:         />
71:         {option}
72:       </label>
73:     ))}
74:   </div>
75: )
76: 
77: const InscripcionModal = ({ open, onClose }) => {
78:   const [form, setForm] = useState(initialForm)
79:   const [errors, setErrors] = useState({})
80:   const [status, setStatus] = useState('idle')
81: 
82:   const panelRef = useRef(null)
83:   const previousFocus = useRef(null)
84: 
85:   const handleClose = useCallback(() => {
86:     document.body.style.overflow = ''
87:     previousFocus.current?.focus()
88:     onClose()
89:   }, [onClose])
90: 
91:   useEffect(() => {
92:     if (open) {
93:       previousFocus.current = document.activeElement
94:       document.body.style.overflow = 'hidden'
95:       panelRef.current?.focus()
96:     } else {
97:       document.body.style.overflow = ''
98:     }
99:     return () => {
100:       document.body.style.overflow = ''
101:     }
102:   }, [open])
103: 
104:   useEffect(() => {
105:     const onKeyDown = (event) => {
106:       if (event.key === 'Escape' && open) {
107:         handleClose()
108:       }
109:     }
110:     window.addEventListener('keydown', onKeyDown)
111:     return () => window.removeEventListener('keydown', onKeyDown)
112:   }, [open, handleClose])
113: 
114:   const setField = (field) => (event) => {
115:     setForm((current) => ({ ...current, [field]: event.target.value }))
116:     setErrors((current) => ({ ...current, [field]: undefined }))
117:   }
118: 
119:   const validate = () => {
120:     const nextErrors = {}
121:     if (!form.nombre.trim()) nextErrors.nombre = 'Ingresa tu nombre completo.'
122:     if (!form.email.trim()) {
123:       nextErrors.email = 'Ingresa tu correo electrónico.'
124:     } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) {
125:       nextErrors.email = 'Ingresa un correo electrónico válido.'
126:     }
127:     if (!form.afiliacion.trim()) nextErrors.afiliacion = 'Ingresa tu afiliación o institución.'
128:     if (!form.nivel) {
129:       nextErrors.nivel = 'Selecciona tu nivel académico.'
130:     } else if (form.nivel === 'Otros' && !form.nivelOtro.trim()) {
131:       nextErrors.nivelOtro = 'Especifica tu nivel académico.'
132:     }
133:     if (!form.poster) nextErrors.poster = 'Selecciona una opción.'
134:     return nextErrors
135:   }
136: 
137:   const handleSubmit = async (event) => {
138:     event.preventDefault()
139:     const nextErrors = validate()
140:     if (Object.keys(nextErrors).length > 0) {
141:       setErrors(nextErrors)
142:       return
143:     }
144: 
145:     const nivelFinal = form.nivel === 'Otros' ? form.nivelOtro.trim() : form.nivel
146: 
147:     const params = {
148:       to_email: form.email.trim(),
149:       nombre: form.nombre.trim(),
150:       email: form.email.trim(),
151:       afiliacion: form.afiliacion.trim(),
152:       nivel_academico: nivelFinal,
153:       area: form.area.trim(),
154:       desde: form.desde.trim(),
155:       poster: form.poster,
156:       enterado: form.enterado,
157:       comentarios: form.comentarios.trim(),
158:     }
159: 
160:     setStatus('sending')
161:     try {
162:       await emailjs.send(SERVICE_ID, TEMPLATE_ASISTENTE, params, { publicKey: PUBLIC_KEY })
163:       await emailjs.send(
164:         SERVICE_ID,
165:         TEMPLATE_ORGANIZADOR,
166:         { ...params, to_email: ORGANIZADOR_EMAIL },
167:         { publicKey: PUBLIC_KEY },
168:       )
169:       if (APPS_SCRIPT_URL) {
170:         await fetch(APPS_SCRIPT_URL, {
171:           method: 'POST',
172:           mode: 'no-cors',
173:           headers: { 'Content-Type': 'text/plain;charset=utf-8' },
174:           body: JSON.stringify(params),
175:         }).catch(() => {})
176:       }
177:       setStatus('success')
178:     } catch (error) {
179:       console.error('Error al enviar la inscripción:', error)
180:       setStatus('error')
181:     }
182:   }
183: 
184:   return (
185:     <AnimatePresence>
186:       {open && (
187:         <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
188:           <motion.div
189:             className="absolute inset-0 bg-brand-950/60 backdrop-blur-sm"
190:             initial={{ opacity: 0 }}
191:             animate={{ opacity: 1 }}
192:             exit={{ opacity: 0 }}
193:             transition={{ duration: 0.2, ease: 'easeOut' }}
194:             onClick={handleClose}
195:             aria-hidden="true"
196:           />
197: 
198:           <motion.div
199:             ref={panelRef}
200:             role="dialog"
201:             aria-modal="true"
202:             aria-labelledby="inscripcion-modal-title"
203:             tabIndex={-1}
204:             className="relative z-10 max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-2xl bg-white shadow-2xl outline-none"
205:             initial={{ opacity: 0, scale: 0.95, y: 16 }}
206:             animate={{ opacity: 1, scale: 1, y: 0 }}
207:             exit={{ opacity: 0, scale: 0.95, y: 16 }}
208:             transition={{ duration: 0.25, ease: 'cubic-bezier(0.23, 1, 0.32, 1)' }}
209:           >
210:             <div className="relative border-b border-slate-100 px-6 py-5 sm:px-8">
211:               <div className="h-1 w-14 rounded-full bg-gradient-to-r from-gold-400 to-gold-600" />
212:               <h2
213:                 id="inscripcion-modal-title"
214:                 className="mt-3 pr-10 font-['Montserrat'] text-xl font-black uppercase tracking-tight text-slate-900 sm:text-2xl"
215:               >
216:                 Inscripción a la <span className="text-brand-700">VI Semana de la Geofísica</span>
217:               </h2>
218:               <p className="mt-1 font-['Montserrat'] text-sm text-slate-500">
219:                 Completa tus datos. Recibirás la confirmación por correo.
220:               </p>
221:               <button
222:                 type="button"
223:                 onClick={handleClose}
224:                 aria-label="Cerrar formulario"
225:                 className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-lg text-slate-500 transition-colors duration-200 hover:bg-slate-100 hover:text-slate-700 active:scale-[0.97] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-500"
226:               >
227:                 <svg
228:                   className="h-5 w-5"
229:                   viewBox="0 0 24 24"
230:                   fill="none"
231:                   stroke="currentColor"
232:                   strokeWidth="2"
233:                   strokeLinecap="round"
234:                   aria-hidden="true"
235:                 >
236:                   <path d="M6 6l12 12M18 6L6 18" />
237:                 </svg>
238:               </button>
239:             </div>
240: 
241:             {status === 'success' ? (
242:               <div className="flex flex-col items-center px-6 py-14 text-center sm:px-8">
243:                 <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-gold-100 text-gold-600">
244:                   <svg
245:                     className="h-8 w-8"
246:                     viewBox="0 0 24 24"
247:                     fill="none"
248:                     stroke="currentColor"
249:                     strokeWidth="2.5"
250:                     strokeLinecap="round"
251:                     strokeLinejoin="round"
252:                     aria-hidden="true"
253:                   >
254:                     <path d="M5 13l4 4L19 7" />
255:                   </svg>
256:                 </div>
257:                 <h3 className="font-['Montserrat'] text-2xl font-black text-slate-900">
258:                   ¡Inscripción registrada!
259:                 </h3>
260:                 <p className="mt-2 max-w-md font-['Montserrat'] text-slate-600">
261:                   Hemos enviado la confirmación a <strong>{form.email}</strong>. Si tienes
262:                   preguntas, escríbenos a {ORGANIZADOR_EMAIL}.
263:                 </p>
264:                 <button
265:                   type="button"
266:                   onClick={handleClose}
267:                   className="mt-8 rounded-full bg-gradient-to-br from-gold-400 to-gold-600 px-8 py-3 font-['Montserrat'] text-sm font-bold uppercase tracking-widest text-brand-950 transition-transform duration-200 hover:scale-[1.03] active:scale-[0.97] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-500"
268:                 >
269:                   Cerrar
270:                 </button>
271:               </div>
272:             ) : (
273:               <form onSubmit={handleSubmit} noValidate className="px-6 py-6 sm:px-8">
274:                 <div className="grid gap-5 sm:grid-cols-2">
275:                   <div className="sm:col-span-2">
276:                     <Field label="Nombre completo" required error={errors.nombre}>
277:                       <input
278:                         type="text"
279:                         value={form.nombre}
280:                         onChange={setField('nombre')}
281:                         placeholder="Ej. Ana María Pérez"
282:                         className={inputClass}
283:                         autoComplete="name"
284:                       />
285:                     </Field>
286:                   </div>
287: 
288:                   <div className="sm:col-span-2">
289:                     <Field label="Correo electrónico" required error={errors.email}>
290:                       <input
291:                         type="email"
292:                         value={form.email}
293:                         onChange={setField('email')}
294:                         placeholder="Ej. ana.perez@correo.com"
295:                         className={inputClass}
296:                         autoComplete="email"
297:                       />
298:                     </Field>
299:                   </div>
300: 
301:                   <div className="sm:col-span-2">
302:                     <Field label="Afiliación o institución" required error={errors.afiliacion}>
303:                       <input
304:                         type="text"
305:                         value={form.afiliacion}
306:                         onChange={setField('afiliacion')}
307:                         placeholder="Ej. Universidad Industrial de Santander"
308:                         className={inputClass}
309:                       />
310:                     </Field>
311:                   </div>
312: 
313:                   <div className="sm:col-span-2">
314:                     <Field label="Nivel académico" required error={errors.nivel}>
315:                       <RadioGroup
316:                         name="nivel"
317:                         options={NIVEL_OPTIONS}
318:                         value={form.nivel}
319:                         onChange={(value) => setForm((current) => ({ ...current, nivel: value }))}
320:                       />
321:                     </Field>
322:                     {form.nivel === 'Otros' && (
323:                       <div className="mt-3">
324:                         <Field label="Especifica tu nivel académico" required error={errors.nivelOtro}>
325:                           <input
326:                             type="text"
327:                             value={form.nivelOtro}
328:                             onChange={setField('nivelOtro')}
329:                             placeholder="Escribe tu nivel académico"
330:                             className={inputClass}
331:                           />
332:                         </Field>
333:                       </div>
334:                     )}
335:                   </div>
336: 
337:                   <Field label="Área de formación o especialización">
338:                     <input
339:                       type="text"
340:                       value={form.area}
341:                       onChange={setField('area')}
342:                       placeholder="Ej. Sismología, geofísica aplicada…"
343:                       className={inputClass}
344:                     />
345:                   </Field>
346: 
347:                   <Field label="¿Desde dónde nos visitas?">
348:                     <input
349:                       type="text"
350:                       value={form.desde}
351:                       onChange={setField('desde')}
352:                       placeholder="Ej. Ciudad, institución o país"
353:                       className={inputClass}
354:                     />
355:                   </Field>
356: 
357:                   <div className="sm:col-span-2">
358:                     <Field
359:                       label="¿Tienes previsto enviar un póster para presentación en el evento?"
360:                       required
361:                       error={errors.poster}
362:                     >
363:                       <RadioGroup
364:                         name="poster"
365:                         options={POSTER_OPTIONS}
366:                         value={form.poster}
367:                         onChange={(value) => setForm((current) => ({ ...current, poster: value }))}
368:                       />
369:                     </Field>
370:                   </div>
371: 
372:                   <div className="sm:col-span-2">
373:                     <Field label="¿Cómo te enteraste del evento?">
374:                       <RadioGroup
375:                         name="enterado"
376:                         options={ENTERADO_OPTIONS}
377:                         value={form.enterado}
378:                         onChange={(value) => setForm((current) => ({ ...current, enterado: value }))}
379:                       />
380:                     </Field>
381:                   </div>
382: 
383:                   <div className="sm:col-span-2">
384:                     <Field label="Comentarios o preguntas">
385:                       <textarea
386:                         value={form.comentarios}
387:                         onChange={setField('comentarios')}
388:                         placeholder="Escribe aquí tus comentarios o preguntas (opcional)"
389:                         rows={4}
390:                         className={`${inputClass} resize-none`}
391:                       />
392:                     </Field>
393:                   </div>
394:                 </div>
395: 
396:                 {status === 'error' && (
397:                   <p className="mt-5 rounded-xl bg-red-50 px-4 py-3 text-sm font-medium text-red-600">
398:                     No pudimos enviar tu inscripción. Inténtalo nuevamente o escríbenos a{' '}
399:                     {ORGANIZADOR_EMAIL}.
400:                   </p>
401:                 )}
402: 
403:                 <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
404:                   <p className="font-['Montserrat'] text-xs text-slate-400">
405:                     * Campos obligatorios
406:                   </p>
407:                   <button
408:                     type="submit"
409:                     disabled={status === 'sending'}
410:                     className="flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-br from-gold-400 to-gold-600 px-10 py-3.5 font-['Montserrat'] text-sm font-bold uppercase tracking-widest text-brand-950 transition-transform duration-200 hover:scale-[1.03] active:scale-[0.97] disabled:cursor-not-allowed disabled:opacity-70 sm:w-auto"
411:                   >
412:                     {status === 'sending' ? (
413:                       <>
414:                         <svg
415:                           className="h-4 w-4 animate-spin"
416:                           viewBox="0 0 24 24"
417:                           fill="none"
418:                           aria-hidden="true"
419:                         >
420:                           <circle
421:                             className="opacity-25"
422:                             cx="12"
423:                             cy="12"
424:                             r="10"
425:                             stroke="currentColor"
426:                             strokeWidth="4"
427:                           />
428:                           <path
429:                             className="opacity-75"
430:                             fill="currentColor"
431:                             d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
432:                           />
433:                         </svg>
434:                         Enviando…
435:                       </>
436:                     ) : (
437:                       'Registrarme'
438:                     )}
439:                   </button>
440:                 </div>
441:               </form>
442:             )}
443:           </motion.div>
444:         </div>
445:       )}
446:     </AnimatePresence>
447:   )
448: }
449: 
450: export default InscripcionModal

(End of file - total 450 lines)
</content>
```

---

## Assistant (Plan · DeepSeek V4 Pro (New) · 6.6s)

_Thinking:_

Now let me look at Inicio.jsx (the file that was modified, with `window.open(enlaceSeguro, ...)`), the `_redirects` file, robots.txt, sitemap.xml, and check for other files. Also check `App.jsx` and `main.jsx`. And check the `dist` folder to see if `.env` secrets are compiled there (source maps). Also check `public/_redirects`.

Let me read Inicio.jsx, the _redirects, robots.txt, sitemap.xml, main.jsx, App.jsx.

**Tool: read**

**Input:**
```json
{
  "filePath": "C:\\Users\\ASUS\\Desktop\\UIS\\HDSP\\SemanaGeofisica\\6a-semana-geofisica.github.io\\src\\components\\pages\\Inicio.jsx"
}
```

**Output:**
```
<path>C:\Users\ASUS\Desktop\UIS\HDSP\SemanaGeofisica\6a-semana-geofisica.github.io\src\components\pages\Inicio.jsx</path>
<type>file</type>
<content>
1: import { motion } from 'framer-motion';
2: import { useScrollReveal, useStaggeredReveal } from '../../hooks/useScrollReveal.js';
3: import { TextReveal } from '../ui/TextReveal.jsx';
4: import Hero from '../static/Hero.jsx';
5: import AcercaDelEvento from '../ui/AcercaDelEvento.jsx';
6: import Card from '../ui/Card.jsx';
7: import { teamMembers } from '../../data/Personal.js';
8: import VideoHero from '../static/VideoHero.jsx';
9: import Button from '../ui/Button.jsx';
10: import { DataPages } from '../../data/Vistas.js';
11: 
12: const stats = [
13:   { value: 6, suffix: 'ta', label: 'Edición' },
14:   { value: 5, suffix: ' días', label: 'De conferencias' },
15:   { value: 200, suffix: '+', label: 'Asistentes' },
16:   { value: 30, suffix: '+', label: 'Ponentes' },
17: ];
18: 
19: const Inicio = () => {
20: 
21:   // Función segura para abrir LinkedIn
22:   const abrirLinkedIn = (url) => {
23:     if (!url) return;
24:     const enlaceSeguro = url.startsWith('http') ? url : `https://${url}`;
25:     window.open(enlaceSeguro, '_blank', 'noopener,noreferrer');
26:   };
27: 
28:   // Obtenemos el título de la página de inicio desde Vistas.js (id: 1)
29:   const tituloInicio = DataPages.find(page => page.id === 1)?.titleHero || "VI Semana de la Geofísica";
30: 
31:   // Filtramos la data de los miembros del equipo
32:   const comiteOrganizador = teamMembers.filter(m => m.comite === "Comité Organizador");
33:   const comiteApoyo = teamMembers.filter(m => m.comite === "Comité de Apoyo");
34: 
35:   // Filtro de comite admonostrativo
36:   const comiteAdministrativo = teamMembers.filter(m => m.comite === "Comité Administrativo");
37:   
38:   // Agrupamos el Científico
39:   const comiteCientificoYAdmin = teamMembers.filter(m => m.comite === "Comité Cientifico");
40: 
41:   //Filtro de comite de desarrollo web
42:   const comiteDesarrolloWeb = teamMembers.filter(m => m.comite === "Comité de Desarrollo Web");
43: 
44:   // Scroll reveal refs
45:   const [teamTitleRef, teamTitleVisible] = useScrollReveal({ margin: '-100px' });
46:   const [orgTitleRef, orgTitleVisible] = useScrollReveal({ margin: '-100px' });
47:   const [apoyoTitleRef, apoyoTitleVisible] = useScrollReveal({ margin: '-100px' });
48:   const [cientificoTitleRef, cientificoTitleVisible] = useScrollReveal({ margin: '-100px' });
49: 
50:   const [orgRefs, orgVisible] = useStaggeredReveal(comiteOrganizador.length);
51:   const [apoyoRefs, apoyoVisible] = useStaggeredReveal(comiteApoyo.length);
52:   const [cientificoRefs, cientificoVisible] = useStaggeredReveal(comiteCientificoYAdmin.length);
53: 
54:   return (
55:     <div>
56:       {/* Sección del banner principal (Ahora estandarizado con botones) */}
57:       <Hero titulo={tituloInicio}>
58:       </Hero>
59:       
60:       {/* Sección de información y descripción del evento */}
61:       <AcercaDelEvento />
62: 
63:       {/* Equipo de Trabajo */}
64:       <section className="bg-slate-50/50 px-4 py-16 sm:px-6 md:py-24 lg:px-8">
65:         <div className="mx-auto max-w-[1300px]"> 
66:           
67:           {/* Título Principal */}
68:           <motion.div
69:             ref={teamTitleRef}
70:             initial={{ opacity: 0, y: 30 }}
71:             animate={teamTitleVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
72:             transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
73:             className="mb-16 flex items-center justify-center gap-4"
74:           >
75:             <motion.div
76:               initial={{ scaleX: 0 }}
77:               animate={{ scaleX: 1 }}
78:               transition={{ duration: 0.6, delay: 0.2, ease: [0.23, 1, 0.32, 1] }}
79:               className="h-[2px] w-16 bg-gradient-to-r from-transparent to-gold-400 sm:w-32"
80:               style={{ transformOrigin: 'left center' }}
81:             />
82:             <TextReveal split="words" stagger={0.08} className="text-center font-['Montserrat'] text-3xl font-bold uppercase tracking-widest text-slate-900 sm:text-4xl">
83:               Nuestro Equipo
84:             </TextReveal>
85:             <motion.div
86:               initial={{ scaleX: 0 }}
87:               animate={{ scaleX: 1 }}
88:               transition={{ duration: 0.6, delay: 0.2, ease: [0.23, 1, 0.32, 1] }}
89:               className="h-[2px] w-16 bg-gradient-to-l from-transparent to-gold-400 sm:w-32"
90:               style={{ transformOrigin: 'right center' }}
91:             />
92:           </motion.div>
93: 
94:           {/* 1. COMITÉ ORGANIZADOR */}
95:           <motion.div
96:             ref={orgTitleRef}
97:             initial={{ opacity: 0, y: 20 }}
98:             animate={orgTitleVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
99:             transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
100:             className="mb-16"
101:           >
102:             <h3 className="mb-8 text-center font-['Montserrat'] text-xl font-semibold text-brand-800">
103:               Comité Organizador
104:             </h3>
105:             <div className="flex flex-wrap justify-center gap-8">
106:               {comiteOrganizador.map((miembro, index) => (
107:                 <motion.div
108:                   ref={orgRefs(index)}
109:                   key={miembro.id}
110:                   initial={{ opacity: 0, y: 40, scale: 0.95 }}
111:                   animate={orgVisible[index] ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 40, scale: 0.95 }}
112:                   transition={{ duration: 0.6, delay: index * 0.08, ease: [0.23, 1, 0.32, 1] }}
113:                 >
114:                   <Card 
115:                     name={miembro.name}
116:                     role={miembro.comite}
117:                     avatarImg={miembro.imagen}
118:                     onBtn1Click={() => abrirLinkedIn(miembro.linkedin)}
119:                   />
120:                 </motion.div>
121:               ))}
122:             </div>
123:           </motion.div>
124: 
125:           {/* 2. COMITÉ DE APOYO */}
126:           <motion.div
127:             ref={apoyoTitleRef}
128:             initial={{ opacity: 0, y: 20 }}
129:             animate={apoyoTitleVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
130:             transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
131:             className="mb-16"
132:           >
133:             <h3 className="mb-8 text-center font-['Montserrat'] text-xl font-semibold text-brand-800">
134:               Comité de Apoyo
135:             </h3>
136:             <div className="flex flex-wrap justify-center gap-6 xl:gap-8">
137:               {comiteApoyo.map((miembro, index) => (
138:                 <motion.div
139:                   ref={apoyoRefs(index)}
140:                   key={miembro.id}
141:                   initial={{ opacity: 0, y: 40, scale: 0.95 }}
142:                   animate={apoyoVisible[index] ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 40, scale: 0.95 }}
143:                   transition={{ duration: 0.6, delay: index * 0.08, ease: [0.23, 1, 0.32, 1] }}
144:                 >
145:                   <Card 
146:                     name={miembro.name}
147:                     role={miembro.comite}
148:                     avatarImg={miembro.imagen}
149:                     onBtn1Click={() => abrirLinkedIn(miembro.linkedin)}
150:                   />
151:                 </motion.div>
152:               ))}
153:             </div>
154:           </motion.div>
155: 
156:           {/* 3. COMITÉS ADMINISTRATIVO */}
157:           <motion.div
158:             ref={cientificoTitleRef}
159:             initial={{ opacity: 0, y: 20 }}
160:             animate={cientificoTitleVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
161:             transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
162:             className="mb-16"
163:           >
164:             <h3 className="mb-8 text-center font-['Montserrat'] text-xl font-semibold text-brand-800">
165:               Comité Administrativo
166:             </h3>
167:             <div className="flex flex-wrap justify-center gap-6 xl:gap-8">
168:               {comiteAdministrativo.map((miembro, index) => (
169:                 <motion.div
170:                   ref={cientificoRefs(index)}
171:                   key={miembro.id}
172:                   initial={{ opacity: 0, y: 40, scale: 0.95 }}
173:                   animate={cientificoVisible[index] ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 40, scale: 0.95 }}
174:                   transition={{ duration: 0.6, delay: index * 0.08, ease: [0.23, 1, 0.32, 1] }}
175:                 >
176:                   <Card 
177:                     name={miembro.name}
178:                     role={miembro.comite} 
179:                     avatarImg={miembro.imagen}
180:                     onBtn1Click={() => abrirLinkedIn(miembro.linkedin)}
181:                   />
182:                 </motion.div>
183:               ))}
184:             </div>
185:           </motion.div>
186: 
187:           {/* 4. COMITÉS CIENTÍFICO */}
188:           <motion.div
189:             ref={cientificoTitleRef}
190:             initial={{ opacity: 0, y: 20 }}
191:             animate={cientificoTitleVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
192:             transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
193:             className="mb-16"
194:           >
195:             <h3 className="mb-8 text-center font-['Montserrat'] text-xl font-semibold text-brand-800">
196:               Comité Científico y Administrativo
197:             </h3>
198:             <div className="flex flex-wrap justify-center gap-6 xl:gap-8">
199:               {comiteCientificoYAdmin.map((miembro, index) => (
200:                 <motion.div
201:                   ref={cientificoRefs(index)}
202:                   key={miembro.id}
203:                   initial={{ opacity: 0, y: 40, scale: 0.95 }}
204:                   animate={cientificoVisible[index] ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 40, scale: 0.95 }}
205:                   transition={{ duration: 0.6, delay: index * 0.08, ease: [0.23, 1, 0.32, 1] }}
206:                 >
207:                   <Card 
208:                     name={miembro.name}
209:                     role={miembro.comite} 
210:                     avatarImg={miembro.imagen}
211:                     onBtn1Click={() => abrirLinkedIn(miembro.linkedin)}
212:                   />
213:                 </motion.div>
214:               ))}
215:             </div>
216:           </motion.div>
217: 
218:           {/* 5. COMITÉS DE DESARROLLO WEB */}
219:           <motion.div
220:             ref={cientificoTitleRef}
221:             initial={{ opacity: 0, y: 20 }}
222:             animate={cientificoTitleVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
223:             transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
224:             className="mb-16"
225:           >
226:             <h3 className="mb-8 text-center font-['Montserrat'] text-xl font-semibold text-brand-800">
227:               Comité de Desarrollo Web
228:             </h3>
229:             <div className="flex flex-wrap justify-center gap-6 xl:gap-8">
230:               {comiteDesarrolloWeb.map((miembro, index) => (
231:                 <motion.div
232:                   ref={cientificoRefs(index)}
233:                   key={miembro.id}
234:                   initial={{ opacity: 0, y: 40, scale: 0.95 }}
235:                   animate={cientificoVisible[index] ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 40, scale: 0.95 }}
236:                   transition={{ duration: 0.6, delay: index * 0.08, ease: [0.23, 1, 0.32, 1] }}
237:                 >
238:                   <Card 
239:                     name={miembro.name}
240:                     role={miembro.comite} 
241:                     avatarImg={miembro.imagen}
242:                     onBtn1Click={() => abrirLinkedIn(miembro.linkedin)}
243:                   />
244:                 </motion.div>
245:               ))}
246:             </div>
247:           </motion.div>
248: 
249:         </div>
250:       </section>
251: 
252:       {/* Sección de Video */}
253:       <VideoHero/>
254:     </div>
255:   )
256: }
257: 
258: export default Inicio;

(End of file - total 258 lines)
</content>
```

**Tool: read**

**Input:**
```json
{
  "filePath": "C:\\Users\\ASUS\\Desktop\\UIS\\HDSP\\SemanaGeofisica\\6a-semana-geofisica.github.io\\src\\main.jsx"
}
```

**Output:**
```
<path>C:\Users\ASUS\Desktop\UIS\HDSP\SemanaGeofisica\6a-semana-geofisica.github.io\src\main.jsx</path>
<type>file</type>
<content>
1: import { StrictMode } from 'react'
2: import { createRoot } from 'react-dom/client'
3: import './index.css'
4: import App from './App.jsx'
5: 
6: createRoot(document.getElementById('root')).render(
7:   <StrictMode>
8:     <App />
9:   </StrictMode>,
10: )

(End of file - total 10 lines)
</content>
```

**Tool: read**

**Input:**
```json
{
  "filePath": "C:\\Users\\ASUS\\Desktop\\UIS\\HDSP\\SemanaGeofisica\\6a-semana-geofisica.github.io\\src\\App.jsx"
}
```

**Output:**
```
<path>C:\Users\ASUS\Desktop\UIS\HDSP\SemanaGeofisica\6a-semana-geofisica.github.io\src\App.jsx</path>
<type>file</type>
<content>
1: import { HashRouter as Router, Route, Routes, useLocation } from 'react-router'
2: import { AnimatePresence, motion } from 'framer-motion'
3: 
4: import Navbar from './components/layout/Navbar.jsx'
5: import Footer from './components/layout/Footer.jsx'
6: import ScrollProgress from './components/ui/ScrollProgress.jsx'
7: import ScrollToTop from './components/ui/ScrollToTop.jsx'
8: 
9: import Inicio from './components/pages/Inicio.jsx'
10: import Registro from './components/pages/Registro.jsx'
11: import Contacto from './components/pages/Contacto.jsx';
12: import Programa from './components/pages/Programa.jsx';
13: import Cursos from './components/pages/Cursos.jsx';
14: import Patrocinadores from './components/pages/Patrocinadores.jsx';
15: import Estudiantes from './components/pages/Estudiantes.jsx';
16: import Aprende from './components/pages/Aprende.jsx';
17: import Vgeofisica from './components/pages/Vgeofisica.jsx';
18: import Resumenes from './components/pages/Resumenes.jsx';
19: 
20: const pageVariants = {
21:   initial: { opacity: 0 },
22:   animate: { opacity: 1 },
23:   exit: { opacity: 0 },
24: };
25: 
26: const pageTransition = {
27:   type: 'tween',
28:   ease: [0.23, 1, 0.32, 1],
29:   duration: 0.2,
30: };
31: 
32: function AnimatedRoutes() {
33:   const location = useLocation();
34: 
35:   return (
36:     <AnimatePresence mode="wait">
37:       <motion.div
38:         key={location.pathname}
39:         variants={pageVariants}
40:         initial="initial"
41:         animate="animate"
42:         exit="exit"
43:         transition={pageTransition}
44:       >
45:         <Routes location={location}>
46:           <Route path='/' element={<Inicio/>} />
47:           <Route path='/registro' element={<Registro/>}/>
48:           <Route path='/contacto' element={<Contacto/>}/>
49:           <Route path='/programa' element={<Programa/>}/>
50:           <Route path='/cursos' element={<Cursos/>}/>
51:           <Route path='/patrocinadores' element={<Patrocinadores/>}/>
52:           <Route path='/apoyo-estudiantes' element={<Estudiantes/>}/>
53:           <Route path='/aprende-geofisica' element={<Aprende/>}/>
54:           <Route path='/v-semana' element={<Vgeofisica/>}/>
55:           <Route path='/recepcion-resumenes' element={<Resumenes/>}/>
56:         </Routes>
57:       </motion.div>
58:     </AnimatePresence>
59:   );
60: }
61: 
62: function App() {
63:   return (
64:     <Router>
65:       <main>
66:         <ScrollProgress />
67:         <ScrollToTop />
68:         <Navbar/>
69:         <AnimatedRoutes/>
70:         <Footer/>
71:       </main>
72:     </Router>
73:   )
74: }
75: 
76: export default App

(End of file - total 76 lines)
</content>
```

**Tool: read**

**Input:**
```json
{
  "filePath": "C:\\Users\\ASUS\\Desktop\\UIS\\HDSP\\SemanaGeofisica\\6a-semana-geofisica.github.io\\public\\_redirects"
}
```

**Output:**
```
<path>C:\Users\ASUS\Desktop\UIS\HDSP\SemanaGeofisica\6a-semana-geofisica.github.io\public\_redirects</path>
<type>file</type>
<content>
1: /*  /index.html  200

(End of file - total 1 lines)
</content>
```

**Tool: read**

**Input:**
```json
{
  "filePath": "C:\\Users\\ASUS\\Desktop\\UIS\\HDSP\\SemanaGeofisica\\6a-semana-geofisica.github.io\\public\\robots.txt"
}
```

**Output:**
```
<path>C:\Users\ASUS\Desktop\UIS\HDSP\SemanaGeofisica\6a-semana-geofisica.github.io\public\robots.txt</path>
<type>file</type>
<content>
1: User-agent: *
2: Allow: /
3: 
4: Sitemap: https://semanadelageofisica/sitemap.xml

(End of file - total 4 lines)
</content>
```

**Tool: read**

**Input:**
```json
{
  "filePath": "C:\\Users\\ASUS\\Desktop\\UIS\\HDSP\\SemanaGeofisica\\6a-semana-geofisica.github.io\\public\\sitemap.xml"
}
```

**Output:**
```
<path>C:\Users\ASUS\Desktop\UIS\HDSP\SemanaGeofisica\6a-semana-geofisica.github.io\public\sitemap.xml</path>
<type>file</type>
<content>
1: <?xml version="1.0" encoding="UTF-8"?>
2: <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
3:   <url>
4:     <loc>https://semanadelageofisica/</loc>
5:     <lastmod>2026-08-22</lastmod>
6:     <changefreq>weekly</changefreq>
7:     <priority>1.0</priority>
8:   </url>
9:   <url>
10:     <loc>https://semanadelageofisica/registro</loc>
11:     <lastmod>2026-08-22</lastmod>
12:     <changefreq>monthly</changefreq>
13:     <priority>0.9</priority>
14:   </url>
15:   <url>
16:     <loc>https://semanadelageofisica/contacto</loc>
17:     <lastmod>2026-08-22</lastmod>
18:     <changefreq>monthly</changefreq>
19:     <priority>0.7</priority>
20:   </url>
21:   <url>
22:     <loc>https://semanadelageofisica/programa</loc>
23:     <lastmod>2026-08-22</lastmod>
24:     <changefreq>weekly</changefreq>
25:     <priority>0.9</priority>
26:   </url>
27:   <url>
28:     <loc>https://semanadelageofisica/cursos</loc>
29:     <lastmod>2026-08-22</lastmod>
30:     <changefreq>monthly</changefreq>
31:     <priority>0.8</priority>
32:   </url>
33:   <url>
34:     <loc>https://semanadelageofisica/patrocinadores</loc>
35:     <lastmod>2026-08-22</lastmod>
36:     <changefreq>monthly</changefreq>
37:     <priority>0.6</priority>
38:   </url>
39:   <url>
40:     <loc>https://semanadelageofisica/apoyo-estudiantes</loc>
41:     <lastmod>2026-08-22</lastmod>
42:     <changefreq>monthly</changefreq>
43:     <priority>0.7</priority>
44:   </url>
45:   <url>
46:     <loc>https://semanadelageofisica/aprende-geofisica</loc>
47:     <lastmod>2026-08-22</lastmod>
48:     <changefreq>monthly</changefreq>
49:     <priority>0.7</priority>
50:   </url>
51:   <url>
52:     <loc>https://semanadelageofisica/v-semana</loc>
53:     <lastmod>2026-08-22</lastmod>
54:     <changefreq>yearly</changefreq>
55:     <priority>0.5</priority>
56:   </url>
57:   <url>
58:     <loc>https://semanadelageofisica/recepcion-resumenes</loc>
59:     <lastmod>2026-08-22</lastmod>
60:     <changefreq>monthly</changefreq>
61:     <priority>0.8</priority>
62:   </url>
63: </urlset>

(End of file - total 63 lines)
</content>
```

**Tool: read**

**Input:**
```json
{
  "filePath": "C:\\Users\\ASUS\\Desktop\\UIS\\HDSP\\SemanaGeofisica\\6a-semana-geofisica.github.io\\README.md"
}
```

**Output:**
```
<path>C:\Users\ASUS\Desktop\UIS\HDSP\SemanaGeofisica\6a-semana-geofisica.github.io\README.md</path>
<type>file</type>
<content>
1: # VI Semana de la Geofísica
2: 
3: Sitio web oficial de la **VI Semana de la Geofísica** — Universidad Industrial de Santander, Bucaramanga, Colombia. Evento académico y científico que reúne estudiantes, profesionales e investigadores en torno a las últimas tendencias en geociencias.
4: 
5: ## Acerca del Proyecto
6: 
7: El sitio web de la VI Semana de la Geofísica fue migrado desde un sitio estático construido con **HTML + CSS + JavaScript puro** a una aplicación moderna basada en **React**, con el objetivo de mejorar la optimización, el orden del código y la experiencia de desarrollo. La migración incluyó:
8: 
9: - Componentización de la interfaz con **React** para reutilizar elementos como heroes, cards y formularios.
10: - Estilizado con **TailwindCSS 4** para un diseño responsive y consistente.
11: - Integración de **EmailJS** para gestionar el formulario de inscripción de asistentes directamente desde el navegador, sin necesidad de backend.
12: - Animaciones y transiciones de página con **Framer Motion**.
13: - Optimización de imágenes al formato **AVIF** mediante un script personalizado.
14: - Enrutamiento del lado del cliente con **React Router**.
15: 
16: ## Tecnologías
17: 
18: | Tecnología | Versión | Uso |
19: |------------|---------|-----|
20: | React | 19 | Framework de UI |
21: | Vite | 8 | Bundler y servidor de desarrollo |
22: | TailwindCSS | 4 | Estilos utilitarios |
23: | EmailJS | 4 | Envío de correos desde el navegador |
24: | Framer Motion | 13 | Animaciones |
25: | React Router | 7 | Enrutamiento SPA |
26: | Lucide React | 1 | Iconografía |
27: | Sharp | 0.35 | Conversión de imágenes a AVIF |
28: 
29: ## Estructura del Proyecto
30: 
31: ```
32: ├── public/                  # Archivos estáticos (favicon, icons)
33: ├── scripts/
34: │   └── convert-to-avif.mjs  # Script de conversión de imágenes
35: ├── src/
36: │   ├── assets/              # Imágenes y recursos estáticos
37: │   ├── components/
38: │   │   ├── layout/          # Navbar, Footer
39: │   │   ├── pages/           # Componentes de cada página
40: │   │   ├── static/          # Hero, VideoHero
41: │   │   └── ui/              # Botones, cards, modales, utilidades
42: │   ├── data/                # Datos de páginas, equipo, eventos
43: │   ├── hooks/               # Custom hooks (scroll reveal, etc.)
44: │   ├── App.jsx              # Router principal
45: │   ├── main.jsx             # Punto de entrada
46: │   └── index.css            # Tema de Tailwind y animaciones
47: ├── .env.example             # Plantilla de variables de entorno
48: ├── eslint.config.js         # Configuración de ESLint
49: ├── index.html               # HTML de entrada
50: ├── package.json
51: └── vite.config.js           # Configuración de Vite
52: ```
53: 
54: ## Configuración y Ejecución Local
55: 
56: ### Prerrequisitos
57: 
58: - [Node.js](https://nodejs.org/) 18 o superior
59: - npm o un gestor de paquetes equivalente
60: 
61: ### Instalación
62: 
63: 1. Clona el repositorio:
64: 
65: ```bash
66: git clone https://github.com/VIsemanageofisica/6a-semana-geofisica.github.io.git
67: cd 6a-semana-geofisica.github.io
68: ```
69: 
70: 2. Instala las dependencias:
71: 
72: ```bash
73: npm install
74: ```
75: 
76: 3. Crea el archivo `.env` a partir de la plantilla y completa las variables de EmailJS:
77: 
78: ```bash
79: cp .env.example .env
80: ```
81: 
82: 4. Inicia el servidor de desarrollo:
83: 
84: ```bash
85: npm run dev
86: ```
87: 
88: El sitio estará disponible en `http://localhost:5173`.
89: 
90: ## Scripts Disponibles
91: 
92: | Comando | Descripción |
93: |---------|-------------|
94: | `npm run dev` | Inicia el servidor de desarrollo con HMR |
95: | `npm run build` | Genera el build de producción en `dist/` |
96: | `npm run preview` | Vista previa del build de producción |
97: | `npm run lint` | Ejecuta ESLint para verificar el código |
98: | `npm run convert-avif` | Convierte imágenes PNG/JPG a formato AVIF |
99: 
100: ## Variables de Entorno
101: 
102: Copia `.env.example` a `.env` y completa los valores:
103: 
104: | Variable | Descripción |
105: |----------|-------------|
106: | `VITE_EMAILJS_PUBLIC_KEY` | Clave pública de tu cuenta EmailJS |
107: | `VITE_EMAILJS_SERVICE_ID` | ID del servicio de correo configurado |
108: | `VITE_EMAILJS_TEMPLATE_ASISTENTE_ID` | Template de confirmación enviado al asistente |
109: | `VITE_EMAILJS_TEMPLATE_ORGANIZADOR_ID` | Template de notificación enviado al organizador |
110: | `VITE_EMAILJS_ORGANIZADOR_EMAIL` | Dirección de correo del organizador |
111: 
112: ## Páginas / Rutas
113: 
114: | Ruta | Página |
115: |------|--------|
116: | `/` | Inicio |
117: | `/registro` | Inscripción al evento |
118: | `/contacto` | Canales de atención |
119: | `/programa` | Agenda oficial |
120: | `/cursos` | Explora los cursos |
121: | `/patrocinadores` | Patrocinadores |
122: | `/apoyo-estudiantes` | Apoyo a estudiantes |
123: | `/aprende-geofisica` | Repositorio SIGAC |
124: | `/v-semana` | V Semana de la Geofísica |
125: | `/recepcion-resumenes` | Recepción de resúmenes |
126: 
127: ## Contacto
128: 
129: - **Email:** 6a.semana.geofisica@gmail.com
130: - **Instagram:** [@semana_geofisica](https://www.instagram.com/semana_geofisica/)
131: - **Grupo de Investigación HDSP:** [hdsp@uis.edu.co](mailto:hdsp@uis.edu.co)
132: 
133: ## Licencia
134: 
135: Este proyecto es propiedad del Grupo de Investigación HDSP — Universidad Industrial de Santander.

(End of file - total 135 lines)
</content>
```

---

## Assistant (Plan · DeepSeek V4 Pro (New) · 11.5s)

_Thinking:_

I have a good picture now. Let me also check the Card.jsx component (which renders linkedin button), the Personal.js data (linkedin URLs), the Navbar/Footer for any external links, and check the `dist` folder to see if source maps or secrets are exposed. Also check the `.gitignore` - note `.env` is ignored but `.env.example` is committed with real values (EmailJS public key, service/template IDs, Apps Script URL). These are "public" values but still sensitive-ish (the Apps Script URL is a real deployment ID, and the public key is used to send emails - an attacker could abuse EmailJS to spam).

Let me check the dist folder and Card.jsx, and Personal.js linkedin values, and check if there's a source map. Also check the Navbar/Footer.

Also important: The `dist/` folder is committed to git? `.gitignore` has `dist` listed, so it's ignored. But it exists locally. Let me check if dist has source maps and if secrets are baked in.

Let me also run npm audit to check dependencies. Actually I'm in plan mode - running npm audit is read-only (it just queries the registry). That's fine but might be slow. Let me do a few checks.

Let me check:
1. Card.jsx
2. Navbar.jsx and Footer.jsx (external links)
3. Personal.js (linkedin URLs - to assess the window.open usage)
4. dist folder contents (source maps?)
5. git check whether .env or dist are tracked
6. npm audit

Let me do these in parallel.

**Tool: read**

**Input:**
```json
{
  "filePath": "C:\\Users\\ASUS\\Desktop\\UIS\\HDSP\\SemanaGeofisica\\6a-semana-geofisica.github.io\\src\\components\\ui\\Card.jsx"
}
```

**Output:**
```
<path>C:\Users\ASUS\Desktop\UIS\HDSP\SemanaGeofisica\6a-semana-geofisica.github.io\src\components\ui\Card.jsx</path>
<type>file</type>
<content>
1: import { useId, useRef, useState } from 'react'
2: import { motion, useReducedMotion } from 'framer-motion'
3: import OptimizedImage from './OptimizedImage.jsx'
4: 
5: const Card = ({
6:   name = "Nombre Apellido",
7:   role = "Especialidad / Rol",
8:   coverImg,
9:   avatarImg,
10:   onBtn1Click,
11: }) => {
12:   const uniqueId = useId()
13:   const cardRef = useRef(null)
14:   const reducedMotion = useReducedMotion()
15:   const [glowPos, setGlowPos] = useState({ x: 0, y: 0 })
16:   const [isHovered, setIsHovered] = useState(false)
17: 
18:   const gradientId = `cardGradient-${uniqueId}`
19:   const patternId = `triangles-${uniqueId}`
20: 
21:   const handleMouseMove = (e) => {
22:     if (reducedMotion || !cardRef.current) return
23:     const rect = cardRef.current.getBoundingClientRect()
24:     const centerX = rect.left + rect.width / 2
25:     const centerY = rect.top + rect.height / 2
26:     const deltaX = (e.clientX - centerX) / 20
27:     const deltaY = (e.clientY - centerY) / 20
28:     cardRef.current.style.transform = `perspective(1000px) rotateX(${-deltaY}deg) rotateY(${deltaX}deg) translateY(-4px)`
29:     cardRef.current.style.boxShadow = '0 20px 40px rgba(0,0,0,0.15)'
30:     setGlowPos({ x: e.clientX - rect.left, y: e.clientY - rect.top })
31:   }
32: 
33:   const handleMouseLeave = () => {
34:     if (!cardRef.current) return
35:     cardRef.current.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateY(0)'
36:     cardRef.current.style.boxShadow = '0 10px 25px rgba(0,0,0,0.1)'
37:     setIsHovered(false)
38:   }
39: 
40:   return (
41:     <motion.div
42:       ref={cardRef}
43:       onMouseMove={handleMouseMove}
44:       onMouseEnter={() => setIsHovered(true)}
45:       onMouseLeave={handleMouseLeave}
46:       whileHover={{ y: -4, transition: { duration: 0.2 } }}
47:       className="relative flex h-[384px] w-[300px] flex-col items-center overflow-hidden rounded-[20px] bg-white font-['Montserrat'] shadow-lg ring-1 ring-slate-200 transition-all duration-300"
48:       style={{ transformStyle: 'preserve-3d' }}
49:     >
50:       {/* Mouse glow overlay */}
51:       <div
52:         className="pointer-events-none absolute inset-0 z-20 opacity-0 transition-opacity duration-300"
53:         style={{
54:           opacity: isHovered ? 1 : 0,
55:           background: `radial-gradient(250px circle at ${glowPos.x}px ${glowPos.y}px, rgba(212, 169, 46, 0.12), transparent 60%)`,
56:         }}
57:       />
58: 
59:       {/* 1. Imagen de portada (Cover) */}
60:       <div className="h-[192px] w-full overflow-hidden rounded-t-[20px]">
61:         {coverImg ? (
62:           <OptimizedImage
63:             src={coverImg}
64:             alt="Fondo de la tarjeta"
65:             className="h-full w-full object-cover"
66:             fill
67:           />
68:         ) : (
69:           /* Fondo geométrico azul + dorado */
70:           <div className="h-full w-full overflow-hidden">
71:             <svg
72:               className="h-full w-full"
73:               viewBox="0 0 540 450"
74:               preserveAspectRatio="none"
75:               xmlns="http://www.w3.org/2000/svg"
76:             >
77:               <defs>
78: 
79:                 {/* Degradado base */}
80:                 <linearGradient
81:                   id={gradientId}
82:                   x1="0"
83:                   y1="0"
84:                   x2="540"
85:                   y2="450"
86:                 >
87:                   <stop offset="0%" stopColor="#020617" />
88:                   <stop offset="45%" stopColor="#0F172A" />
89:                   <stop offset="100%" stopColor="#FBBF24" />
90:                 </linearGradient>
91: 
92:                 {/* Patrón de triángulos */}
93:                 <pattern
94:                   id={patternId}
95:                   width="180"
96:                   height="150"
97:                   patternUnits="userSpaceOnUse"
98:                 >
99:                   <g fillOpacity="0.35">
100: 
101:                     {/* Triángulo dorado */}
102:                     <polygon
103:                       fill="#FBBF24"
104:                       points="90,0 0,150 180,150"
105:                     />
106: 
107:                     {/* Triángulo azul */}
108:                     <polygon
109:                       fill="#1E3A8A"
110:                       points="90,150 180,0 0,0"
111:                     />
112: 
113:                     {/* Triángulo dorado oscuro */}
114:                     <polygon
115:                       fill="#F59E0B"
116:                       points="270,150 180,0 360,0"
117:                     />
118: 
119:                     {/* Triángulo navy */}
120:                     <polygon
121:                       fill="#172554"
122:                       points="270,0 180,150 360,150"
123:                     />
124: 
125:                   </g>
126:                 </pattern>
127: 
128:               </defs>
129: 
130:               {/* Fondo degradado */}
131:               <rect
132:                 x="0"
133:                 y="0"
134:                 width="100%"
135:                 height="100%"
136:                 fill={`url(#${gradientId})`}
137:               />
138: 
139:               {/* Patrón geométrico */}
140:               <rect
141:                 x="0"
142:                 y="0"
143:                 width="100%"
144:                 height="100%"
145:                 fill={`url(#${patternId})`}
146:               />
147: 
148:             </svg>
149:           </div>
150:         )}
151:       </div>
152: 
153:       {/* 2. Avatar circular */}
154:       <div className="absolute top-[135px] flex h-[114px] w-[114px] items-center justify-center rounded-full bg-white shadow-sm">
155:         {avatarImg ? (
156:           <OptimizedImage
157:             src={avatarImg}
158:             alt={`Avatar de ${name}`}
159:             className="h-[100px] w-[100px] rounded-full object-cover"
160:             fill
161:           />
162:         ) : (
163:           /* Avatar SVG por defecto */
164:           <svg
165:             className="h-[100px] w-[100px] rounded-full"
166:             viewBox="0 0 128 128"
167:             xmlns="http://www.w3.org/2000/svg"
168:           >
169:             <circle
170:               cx="64"
171:               cy="64"
172:               fill="#1e293b"
173:               r="60"
174:             />
175: 
176:             <circle
177:               cx="64"
178:               cy="64"
179:               fill="#0f172a"
180:               opacity=".4"
181:               r="48"
182:             />
183: 
184:             <path
185:               d="m64 14a32 32 0 0 1 32 32v41a6 6 0 0 1-6 6h-52a6 6 0 0 1-6-6v-41a32 32 0 0 1 32-32z"
186:               fill="#0f172a"
187:             />
188: 
189:             <path
190:               d="m62.73 22h2.54a23.73 23.73 0 0 1 23.73 23.73v42.82a4.45 4.45 0 0 1-4.45 4.45h-41.1a4.45 4.45 0 0 1-4.45-4.45v-42.82a23.73 23.73 0 0 1 23.73-23.73z"
191:               fill="#393c54"
192:               opacity=".4"
193:             />
194: 
195:             <circle
196:               cx="89"
197:               cy="65"
198:               fill="#fbc0aa"
199:               r="7"
200:             />
201: 
202:             <path
203:               d="m64 124a59.67 59.67 0 0 0 34.69-11.06l-3.32-9.3a10 10 0 0 0-9.37-6.64h-43.95a10 10 0 0 0-9.42 6.64l-3.32 9.3a59.67 59.67 0 0 0 34.69 11.06z"
204:               fill="#FBBF24"
205:             />
206: 
207:             <path
208:               d="m57 123.68a58.54 58.54 0 0 0 14 0v-25.68h-14z"
209:               fill="#fff"
210:             />
211: 
212:             <path
213:               d="m64 88.75v9.75"
214:               fill="none"
215:               stroke="#fbc0aa"
216:               strokeLinecap="round"
217:               strokeLinejoin="round"
218:               strokeWidth="14"
219:             />
220: 
221:             <circle
222:               cx="39"
223:               cy="65"
224:               fill="#fbc0aa"
225:               r="7"
226:             />
227: 
228:             <path
229:               d="m64 91a25 25 0 0 1-25-25v-16.48a25 25 0 1 1 50 0v16.48a25 25 0 0 1-25 25z"
230:               fill="#ffd8c9"
231:             />
232: 
233:             <path
234:               d="m64 84c5 0 7-3 7-3h-14s2 3 7 3z"
235:               fill="#F59E0B"
236:               opacity=".4"
237:             />
238:           </svg>
239:         )}
240:       </div>
241: 
242:       {/* 3. Información */}
243:       <h3 className="mt-[60px] text-[18px] font-semibold text-slate-900">
244:         {name}
245:       </h3>
246: 
247:       <p className="mt-[10px] text-[15px] font-medium text-slate-500">
248:         {role}
249:       </p>
250: 
251:       {/* 4. Botón LinkedIn */}
252:       <div className="mt-[15px]">
253:         <button
254:           onClick={onBtn1Click}
255:           className="flex h-[36px] w-[36px] items-center justify-center rounded-full border-2 border-brand-900 bg-white text-brand-900 transition-all duration-300 hover:bg-brand-900 hover:text-white"
256:           aria-label="LinkedIn"
257:         >
258:           <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
259:             <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
260:           </svg>
261:         </button>
262:       </div>
263: 
264:     </motion.div>
265:   )
266: }
267: 
268: export default Card

(End of file - total 268 lines)
</content>
```

**Tool: read**

**Input:**
```json
{
  "filePath": "C:\\Users\\ASUS\\Desktop\\UIS\\HDSP\\SemanaGeofisica\\6a-semana-geofisica.github.io\\src\\components\\layout\\Footer.jsx"
}
```

**Output:**
```
<path>C:\Users\ASUS\Desktop\UIS\HDSP\SemanaGeofisica\6a-semana-geofisica.github.io\src\components\layout\Footer.jsx</path>
<type>file</type>
<content>
1: import { motion } from 'framer-motion';
2: import { useScrollReveal } from '../../hooks/useScrollReveal.js';
3: 
4: const Footer = () => {
5:   const [ref, isVisible] = useScrollReveal({ margin: '-40px' });
6: 
7:   const scrollToTop = () => {
8:     window.scrollTo({ top: 0, behavior: 'smooth' });
9:   };
10: 
11:   return (
12:     <footer className="relative overflow-hidden bg-gradient-to-br from-brand-950 via-brand-900 to-brand-800">
13:       {/* Shimmer line */}
14:       <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-gold-400/60 to-transparent animate-gradient-shift" />
15: 
16:       <motion.div
17:         ref={ref}
18:         initial={{ opacity: 0, y: 20 }}
19:         animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
20:         transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
21:         className="mx-auto flex max-w-7xl flex-col items-center gap-4 px-4 py-8 sm:flex-row sm:justify-between sm:px-6 lg:px-8"
22:       >
23:         {/* Left: Copyright */}
24:         <p className="font-['Montserrat'] text-sm text-slate-400">
25:           &copy; 2026{' '}
26:           <span className="font-semibold text-slate-300">
27:             VI Semana de la Geof&iacute;sica
28:           </span>{' '}
29:           &mdash; Universidad Industrial de Santander
30:         </p>
31: 
32:         {/* Right: Back to top */}
33:         <button
34:           type="button"
35:           onClick={scrollToTop}
36:           className="group flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 font-['Montserrat'] text-xs font-semibold tracking-wider text-slate-400 uppercase transition-all duration-300 hover:border-gold-400/30 hover:bg-gold-400/10 hover:text-gold-300 hover:shadow-lg hover:shadow-gold-500/10"
37:           aria-label="Volver arriba"
38:         >
39:           <svg
40:             className="h-3.5 w-3.5 transition-transform duration-300 group-hover:-translate-y-0.5"
41:             fill="none"
42:             viewBox="0 0 24 24"
43:             stroke="currentColor"
44:             strokeWidth="2"
45:           >
46:             <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
47:           </svg>
48:           Volver arriba
49:         </button>
50:       </motion.div>
51:     </footer>
52:   );
53: };
54: 
55: export default Footer;

(End of file - total 55 lines)
</content>
```

**Tool: read**

**Input:**
```json
{
  "filePath": "C:\\Users\\ASUS\\Desktop\\UIS\\HDSP\\SemanaGeofisica\\6a-semana-geofisica.github.io\\src\\components\\layout\\Navbar.jsx"
}
```

**Output:**
```
<path>C:\Users\ASUS\Desktop\UIS\HDSP\SemanaGeofisica\6a-semana-geofisica.github.io\src\components\layout\Navbar.jsx</path>
<type>file</type>
<content>
1: import { useState, useEffect } from 'react'
2: import { Link, NavLink } from 'react-router'
3: import OptimizedImage from '../ui/OptimizedImage.jsx'
4: import eventLogo from '../../assets/logos/2026_VI_SEMANA_GEOFÍSICA.avif'
5: 
6: const menuItems = [
7:   { label: 'Inicio', to: '/', end: true },
8:   {
9:     label: 'Registro',
10:     to: '/registro',
11:     children: [
12:       { label: 'Inscripción', to: '/registro' },
13:       { label: 'Recepción de resúmenes', to: '/recepcion-resumenes' },
14:     ],
15:   },
16:   {
17:     label: 'Contacto',
18:     to: '/contacto',
19:   },
20:   {
21:     label: 'Programa',
22:     to: '/programa',
23:   },
24:   {
25:     label: 'Cursos',
26:     to: '/cursos',
27:   },
28:   {
29:     label: 'Patrocinadores',
30:     to: '/patrocinadores',
31:   },
32:   { label: 'Apoyo a estudiantes', to: '/apoyo-estudiantes' },
33:   { label: 'Aprende de Geofísica', to: '/aprende-geofisica' },
34:   { label: 'V Semana de la Geofísica', to: '/v-semana' },
35: ]
36: 
37: // Se cambió font-medium por font-['Montserrat'] font-semibold
38: const navLink = (isActive) =>
39:   `flex items-center gap-1.5 rounded-md px-3 py-2 text-lg font-['Montserrat'] font-semibold text-white transition-colors duration-200 hover:text-gold-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-400 ${
40:     isActive ? 'text-white' : ''
41:   }`
42: 
43: const NavLabel = ({ children, active }) => (
44:   <span className="relative">
45:     {children}
46:     <span
47:       className={`absolute -bottom-1 left-0 right-0 h-[2px] origin-left rounded-full bg-gold-400 transition-transform duration-300 ease-snappy ${
48:         active ? 'scale-x-100' : 'scale-x-0'
49:       }`}
50:     />
51:   </span>
52: )
53: 
54: const Chevron = () => (
55:   <svg
56:     className="h-4 w-4 shrink-0 transition-transform duration-200 group-hover:rotate-180"
57:     viewBox="0 0 20 20"
58:     fill="none"
59:     stroke="currentColor"
60:     strokeWidth="2"
61:     strokeLinecap="round"
62:     strokeLinejoin="round"
63:     aria-hidden="true"
64:   >
65:     <path d="m6 9 4 4 4-4" />
66:   </svg>
67: )
68: 
69: const Logo = ({ className }) => (
70:   <span
71:     className={`flex shrink-0 items-center justify-center bg-white p-2 ${className}`}
72:   >
73:     <OptimizedImage
74:       src={eventLogo}
75:       alt="Logo de la 6ª Semana de la Geofísica"
76:       className="h-full w-full"
77:       imgClassName="object-contain"
78:       priority
79:     />
80:   </span>
81: )
82: 
83: const Navbar = () => {
84:   const [menuOpen, setMenuOpen] = useState(false)
85:   const [openSubmenu, setOpenSubmenu] = useState(null)
86:   const [scrolled, setScrolled] = useState(false)
87: 
88:   useEffect(() => {
89:     const onScroll = () => setScrolled(window.scrollY > 40)
90:     onScroll()
91:     window.addEventListener('scroll', onScroll, { passive: true })
92:     return () => window.removeEventListener('scroll', onScroll)
93:   }, [])
94: 
95:   useEffect(() => {
96:     if (menuOpen) {
97:       document.body.style.overflow = 'hidden'
98:     } else {
99:       document.body.style.overflow = ''
100:     }
101:     return () => { document.body.style.overflow = '' }
102:   }, [menuOpen])
103: 
104:   const closeMenu = () => {
105:     setMenuOpen(false)
106:     setOpenSubmenu(null)
107:   }
108: 
109:   const toggleSubmenu = (label) => {
110:     setOpenSubmenu((current) => (current === label ? null : label))
111:   }
112: 
113:   return (
114:     <>
115:       <header className="relative z-50 overflow-hidden bg-white">
116:         <div
117:           className="pointer-events-none absolute -left-24 -top-24 h-72 w-72 rounded-full bg-brand-500/15 blur-3xl"
118:           aria-hidden="true"
119:         />
120:         <div
121:           className="pointer-events-none absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-gold-400/20 blur-3xl"
122:           aria-hidden="true"
123:         />
124:         <div className="relative mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-4 sm:gap-6 sm:px-6 sm:py-6 lg:px-8 lg:py-10">
125:           <Link
126:             to="/"
127:             className="flex items-center gap-3 sm:gap-6"
128:             aria-label="Ir a Inicio"
129:           >
130:             <Logo className="h-14 w-14 shrink-0 rounded-xl sm:h-28 sm:w-28 sm:rounded-2xl" />
131:             <span className="flex flex-col gap-1 sm:gap-1.5">
132:               <span className="font-['Montserrat'] text-base font-semibold leading-tight tracking-tight text-slate-900 sm:text-4xl lg:text-[2.75rem]">
133:                 VI Semana de la Geofísica
134:               </span>
135:               <span className="flex items-center gap-1.5 text-xs font-['Montserrat'] font-semibold text-gold-600 sm:gap-2 sm:text-xl">
136:                 <svg
137:                   className="h-4 w-4 shrink-0 sm:h-5 sm:w-5"
138:                   viewBox="0 0 24 24"
139:                   fill="none"
140:                   stroke="currentColor"
141:                   strokeWidth="2"
142:                   strokeLinecap="round"
143:                   strokeLinejoin="round"
144:                   aria-hidden="true"
145:                 >
146:                   <rect x="3" y="4" width="18" height="17" rx="2" />
147:                   <path d="M8 2v4M16 2v4M3 9h18" />
148:                 </svg>
149:                 <span className="hidden sm:inline">03 - 07 Noviembre 2026, Bucaramanga - Santander</span>
150:                 <span className="sm:hidden">03 - 07 Nov 2026</span>
151:               </span>
152:             </span>
153:           </Link>
154:           <Logo className="hidden h-24 w-24 shrink-0 rounded-2xl sm:flex lg:h-32 lg:w-32" />
155:         </div>
156:       </header>
157: 
158:       <nav className={`sticky top-0 z-50 transition-all duration-300 ${
159:         scrolled
160:           ? 'bg-brand-950/90 shadow-lg shadow-brand-950/20 backdrop-blur-md border-b border-white/5'
161:           : 'bg-gradient-to-br from-brand-950 via-brand-900 to-brand-800 shadow-sm'
162:       }`}>
163:         <div className="mx-auto flex min-h-16 max-w-7xl items-center justify-between gap-4 px-4 py-2.5 sm:px-6 lg:px-8">
164:           <Link
165:             to="/"
166:             onClick={closeMenu}
167:             className="flex items-center gap-2 xl:hidden"
168:             aria-label="Ir a Inicio"
169:           >
170:             <Logo className="h-9 w-9 rounded-lg" />
171:             {/* Aplicado Montserrat Semibold al título en móvil */}
172:             <span className="hidden font-['Montserrat'] text-sm font-semibold text-white sm:block">
173:               6ª Semana de la Geofísica
174:             </span>
175:           </Link>
176: 
177:           <div className="hidden flex-1 xl:block">
178:             <ul className="flex items-center justify-center gap-1">
179:               {menuItems.map((item) =>
180:                 item.children ? (
181:                   <li key={item.label} className="group relative">
182:                     <NavLink
183:                       to={item.to}
184:                       className={({ isActive }) => navLink(isActive)}
185:                     >
186:                       {({ isActive }) => (
187:                         <>
188:                           <NavLabel active={isActive}>
189:                             <span className="group-hover:text-gold-300">
190:                               {item.label}
191:                             </span>
192:                           </NavLabel>
193:                           <Chevron />
194:                         </>
195:                       )}
196:                     </NavLink>
197:                     <ul className="invisible absolute left-0 top-full z-10 w-64 origin-top-left scale-95 border border-slate-100 bg-white p-1.5 opacity-0 shadow-xl transition-[opacity,transform,visibility] duration-[180ms] ease-snappy group-hover:visible group-hover:scale-100 group-hover:opacity-100 group-focus-within:visible group-focus-within:scale-100 group-focus-within:opacity-100">
198:                       {item.children.map((child) => (
199:                         <li key={child.to}>
200:                           <NavLink
201:                             to={child.to}
202:                             className={({ isActive }) =>
203:                               // Aplicado Montserrat Semibold a los submenús
204:                               `block rounded-lg px-3 py-2 font-['Montserrat'] text-base font-semibold transition-colors duration-200 hover:bg-brand-50 hover:text-brand-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-500 ${
205:                                 isActive ? 'bg-brand-50 text-brand-700' : 'text-slate-600'
206:                               }`
207:                             }
208:                           >
209:                             {child.label}
210:                           </NavLink>
211:                         </li>
212:                       ))}
213:                     </ul>
214:                   </li>
215:                 ) : (
216:                   <li key={item.label}>
217:                     <NavLink
218:                       to={item.to}
219:                       end={item.end}
220:                       className={({ isActive }) => navLink(isActive)}
221:                     >
222:                       {({ isActive }) => (
223:                         <NavLabel active={isActive}>{item.label}</NavLabel>
224:                       )}
225:                     </NavLink>
226:                   </li>
227:                 ),
228:               )}
229:             </ul>
230:           </div>
231: 
232:           <button
233:             type="button"
234:             onClick={() => setMenuOpen((open) => !open)}
235:             aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}
236:             aria-expanded={menuOpen}
237:             aria-controls="mobile-menu"
238:             className="flex h-10 w-10 items-center justify-center rounded-md text-white transition-colors duration-200 hover:bg-white/10 hover:text-gold-300 active:scale-[0.97] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-400 xl:hidden"
239:           >
240:             {menuOpen ? (
241:               <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
242:                 <path d="M6 6l12 12M18 6L6 18" />
243:               </svg>
244:             ) : (
245:               <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
246:                 <path d="M4 6h16M4 12h16M4 18h16" />
247:               </svg>
248:             )}
249:           </button>
250:         </div>
251: 
252:         <div
253:           className={`fixed inset-0 z-[60] bg-black/50 transition-opacity duration-300 xl:hidden ${
254:             menuOpen ? 'opacity-100' : 'pointer-events-none opacity-0'
255:           }`}
256:           onClick={closeMenu}
257:           aria-hidden="true"
258:         />
259: 
260:         <aside
261:           id="mobile-menu"
262:           className={`fixed inset-y-0 right-0 z-[70] w-72 max-w-[85vw] overflow-y-auto bg-white shadow-2xl transition-transform duration-300 xl:hidden ${
263:             menuOpen ? 'translate-x-0' : 'translate-x-full'
264:           }`}
265:           aria-label="Menú de navegación"
266:         >
267:           <div className="flex h-16 items-center justify-between border-b border-slate-100 px-4">
268:             <Link to="/" onClick={closeMenu} className="flex items-center gap-2">
269:               <Logo className="h-9 w-9 rounded-lg" />
270:               <span className="font-['Montserrat'] text-sm font-semibold text-slate-800">
271:                 6ª Semana de la Geofísica
272:               </span>
273:             </Link>
274:             <button
275:               type="button"
276:               onClick={closeMenu}
277:               aria-label="Cerrar menú"
278:               className="flex h-9 w-9 items-center justify-center rounded-md text-slate-500 transition-colors duration-200 hover:bg-slate-100 hover:text-slate-700 active:scale-[0.97] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-500"
279:             >
280:               <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
281:                 <path d="M6 6l12 12M18 6L6 18" />
282:               </svg>
283:             </button>
284:           </div>
285: 
286:           <ul className="px-3 py-3">
287:             {menuItems.map((item) =>
288:               item.children ? (
289:                 <li key={item.label}>
290:                   <div className="flex items-center justify-between rounded-md">
291:                     <NavLink
292:                       to={item.to}
293:                       onClick={closeMenu}
294:                       className={({ isActive }) =>
295:                         // Montserrat Semibold en el menú móvil
296:                         `flex flex-1 items-center rounded-md px-3 py-2 font-['Montserrat'] text-base font-semibold transition-colors duration-200 hover:text-brand-700 ${
297:                           isActive ? 'text-brand-700' : 'text-slate-800'
298:                         }`
299:                       }
300:                     >
301:                       {item.label}
302:                     </NavLink>
303:                     <button
304:                       type="button"
305:                       onClick={() => toggleSubmenu(item.label)}
306:                       aria-expanded={openSubmenu === item.label}
307:                       aria-label={`${openSubmenu === item.label ? 'Cerrar' : 'Abrir'} submenú de ${item.label}`}
308:                       className="flex h-9 w-9 items-center justify-center rounded-md text-slate-500 transition-colors duration-200 hover:bg-slate-100 active:scale-[0.97] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-500"
309:                     >
310:                       <svg
311:                         className={`h-4 w-4 transition-transform duration-200 ${openSubmenu === item.label ? 'rotate-180' : ''}`}
312:                         viewBox="0 0 20 20"
313:                         fill="none"
314:                         stroke="currentColor"
315:                         strokeWidth="2"
316:                         strokeLinecap="round"
317:                         strokeLinejoin="round"
318:                         aria-hidden="true"
319:                       >
320:                         <path d="m6 9 4 4 4-4" />
321:                       </svg>
322:                     </button>
323:                   </div>
324:                   <div
325:                     className={`grid transition-all duration-300 ${
326:                       openSubmenu === item.label
327:                         ? 'grid-rows-[1fr] opacity-100'
328:                         : 'grid-rows-[0fr] opacity-0'
329:                     }`}
330:                   >
331:                     <div className="overflow-hidden">
332:                       <ul className="ml-3 border-l border-slate-100 pl-3 pb-1">
333:                         {item.children.map((child) => (
334:                           <li key={child.to}>
335:                             <NavLink
336:                               to={child.to}
337:                               onClick={closeMenu}
338:                               className={({ isActive }) =>
339:                                 // Montserrat Semibold en el submenú móvil
340:                                 `block rounded-md px-3 py-2 font-['Montserrat'] text-sm font-semibold transition-colors duration-200 hover:text-brand-700 ${
341:                                   isActive ? 'text-brand-700' : 'text-slate-600'
342:                                 }`
343:                               }
344:                             >
345:                               {child.label}
346:                             </NavLink>
347:                           </li>
348:                         ))}
349:                       </ul>
350:                     </div>
351:                   </div>
352:                 </li>
353:               ) : (
354:                 <li key={item.label}>
355:                   <NavLink
356:                     to={item.to}
357:                     end={item.end}
358:                     onClick={closeMenu}
359:                     className={({ isActive }) =>
360:                       // Montserrat Semibold en el menú móvil para links directos
361:                       `block rounded-md px-3 py-2 font-['Montserrat'] text-base font-semibold transition-colors duration-200 hover:text-brand-700 ${
362:                         isActive ? 'text-brand-700' : 'text-slate-800'
363:                       }`
364:                     }
365:                   >
366:                     {item.label}
367:                   </NavLink>
368:                 </li>
369:               ),
370:             )}
371:           </ul>
372:         </aside>
373:       </nav>
374:     </>
375:   )
376: }
377: 
378: export default Navbar

(End of file - total 378 lines)
</content>
```

**Tool: bash**

**Input:**
```json
{
  "command": "git ls-files | Select-String -Pattern \"\\.env|dist|\\.map\" "
}
```

**Output:**
```

.env.example



```

**Tool: bash**

**Input:**
```json
{
  "command": "Get-ChildItem -Recurse -File dist -ErrorAction SilentlyContinue | Select-Object -ExpandProperty FullName"
}
```

**Output:**
```
C:\Users\ASUS\Desktop\UIS\HDSP\SemanaGeofisica\6a-semana-geofisica.github.io\dist\geofisica.svg
C:\Users\ASUS\Desktop\UIS\HDSP\SemanaGeofisica\6a-semana-geofisica.github.io\dist\icons.svg
C:\Users\ASUS\Desktop\UIS\HDSP\SemanaGeofisica\6a-semana-geofisica.github.io\dist\robots.txt
C:\Users\ASUS\Desktop\UIS\HDSP\SemanaGeofisica\6a-semana-geofisica.github.io\dist\sitemap.xml
C:\Users\ASUS\Desktop\UIS\HDSP\SemanaGeofisica\6a-semana-geofisica.github.io\dist\_redirects
C:\Users\ASUS\Desktop\UIS\HDSP\SemanaGeofisica\6a-semana-geofisica.github.io\dist\assets\2026_VI_SEMANA_GEOF�SICA--ax6KQbU.avif
C:\Users\ASUS\Desktop\UIS\HDSP\SemanaGeofisica\6a-semana-geofisica.github.io\dist\assets\Ana_Beatriz--PMrQ7_4.avif
C:\Users\ASUS\Desktop\UIS\HDSP\SemanaGeofisica\6a-semana-geofisica.github.io\dist\assets\Ana_Celina-DymkMP_v.avif
C:\Users\ASUS\Desktop\UIS\HDSP\SemanaGeofisica\6a-semana-geofisica.github.io\dist\assets\apoyo_estudiantes-DtXIGAj3.avif
C:\Users\ASUS\Desktop\UIS\HDSP\SemanaGeofisica\6a-semana-geofisica.github.io\dist\assets\apoyo_estudiantes-D_KOWiZz.png
C:\Users\ASUS\Desktop\UIS\HDSP\SemanaGeofisica\6a-semana-geofisica.github.io\dist\assets\apoyo_estudiantes_evento-YazmSDtm.avif
C:\Users\ASUS\Desktop\UIS\HDSP\SemanaGeofisica\6a-semana-geofisica.github.io\dist\assets\fondo_titulo_principal-DvR1U0oV.avif
C:\Users\ASUS\Desktop\UIS\HDSP\SemanaGeofisica\6a-semana-geofisica.github.io\dist\assets\gidco-zhkC8268.avif
C:\Users\ASUS\Desktop\UIS\HDSP\SemanaGeofisica\6a-semana-geofisica.github.io\dist\assets\gigba_logo-bkZx6NQj.avif
C:\Users\ASUS\Desktop\UIS\HDSP\SemanaGeofisica\6a-semana-geofisica.github.io\dist\assets\hdsplogo-BMeIkvyg.svg
C:\Users\ASUS\Desktop\UIS\HDSP\SemanaGeofisica\6a-semana-geofisica.github.io\dist\assets\image-CFisDiHJ.avif
C:\Users\ASUS\Desktop\UIS\HDSP\SemanaGeofisica\6a-semana-geofisica.github.io\dist\assets\index-0QpWDGyB.css
C:\Users\ASUS\Desktop\UIS\HDSP\SemanaGeofisica\6a-semana-geofisica.github.io\dist\assets\index-BpOBs2nN.js
C:\Users\ASUS\Desktop\UIS\HDSP\SemanaGeofisica\6a-semana-geofisica.github.io\dist\assets\LOGO_ANH-CpMzHyXS.avif
C:\Users\ASUS\Desktop\UIS\HDSP\SemanaGeofisica\6a-semana-geofisica.github.io\dist\assets\logo_minciencias-kIszzHlw.avif
C:\Users\ASUS\Desktop\UIS\HDSP\SemanaGeofisica\6a-semana-geofisica.github.io\dist\assets\logo_SIGAC_2024-CxTvq37y.avif
C:\Users\ASUS\Desktop\UIS\HDSP\SemanaGeofisica\6a-semana-geofisica.github.io\dist\assets\logo_UIS-7tmiSdry.avif
C:\Users\ASUS\Desktop\UIS\HDSP\SemanaGeofisica\6a-semana-geofisica.github.io\dist\assets\recepcion_resumenes_2026-CPGjZVfK.avif
C:\Users\ASUS\Desktop\UIS\HDSP\SemanaGeofisica\6a-semana-geofisica.github.io\dist\assets\recepcion_resumenes_poster-Dd8XLUhF.avif
C:\Users\ASUS\Desktop\UIS\HDSP\SemanaGeofisica\6a-semana-geofisica.github.io\dist\assets\recepcion_resumenes_posters_evento-DLOzyly6.avif
C:\Users\ASUS\Desktop\UIS\HDSP\SemanaGeofisica\6a-semana-geofisica.github.io\dist\assets\VIDEO_proyecto_general-qbDBPfn1.mp4
C:\Users\ASUS\Desktop\UIS\HDSP\SemanaGeofisica\6a-semana-geofisica.github.io\dist\assets\v_semana_2025_conferencia_1-CKvusRKS.avif
C:\Users\ASUS\Desktop\UIS\HDSP\SemanaGeofisica\6a-semana-geofisica.github.io\dist\assets\v_semana_2025_conferencia_2-CA0VXXWu.avif
C:\Users\ASUS\Desktop\UIS\HDSP\SemanaGeofisica\6a-semana-geofisica.github.io\dist\assets\v_semana_2025_conferencia_4-Crjgujs5.avif

```

**Tool: bash**

**Input:**
```json
{
  "command": "git log --all --oneline -- .env .env.example 2>$null; echo \"---TRACKED ENV---\"; git ls-files .env .env.example"
}
```

**Output:**
```
26ef3a4 feat: integrar Google Apps Script para guardar inscripciones en Google Sheets
9c2e403 Actualización de animaciones, vistas y formularios
---TRACKED ENV---
.env.example

```

---

## Assistant (Plan · DeepSeek V4 Pro (New) · 17.7s)

_Thinking:_

I now have a comprehensive picture. Key findings:

1. **`.env.example` committed with real secrets** (EmailJS public key, service ID, template IDs, and the Google Apps Script deployment URL). Even though `.env` itself is gitignored, the `.env.example` contains REAL values (not placeholders). These are technically "public" because they get baked into the bundle anyway, but the Apps Script URL (`script.google.com/macros/s/.../exec`) is a real endpoint that writes to Google Sheets. If the Apps Script is deployed with "Anyone" access, an attacker can POST arbitrary data (spam the sheet), and potentially the URL exposes the ability to write without authentication.

2. **No security headers / CSP** - Render static hosting, no CSP, no `X-Frame-Options`, etc. The render.yaml has no headers config. Since it's a static SPA, no server headers. Could add CSP via meta tag (limited) or Render headers (Render supports headers in render.yaml via `headers` under the static site config? Actually Render's `render.yaml` supports `routes` and for static sites... Render added header support). Need to note.

3. **`window.open(enlaceSeguro, '_blank', 'noopener,noreferrer')`** in Inicio.jsx - the LinkedIn URL comes from Personal.js data (team members). It prepends `https://` if not starting with `http`. But if a URL starts with `http` but is `http://javascript:...`? Actually `url.startsWith('http')` — `javascript:` doesn't start with http, so it'd get `https://javascript:...` which is not executable. Actually wait, `https://javascript:alert(1)` — that's a URL with scheme https, host "javascript:alert(1)" which is invalid, but the browser would try to resolve it. Not really XSS. But if url = "http" alone? Not a concern. The data is static (from Personal.js), not user-controlled. So low severity. But it doesn't validate protocol strictly. Actually the risk is low since data is developer-controlled. But worth noting: better to use a strict allowlist (https only) or just render as `<a href>`. Since data is trusted (in-repo), it's informational.

4. **EmailJS abuse** - The public key is exposed (by design EmailJS public keys are meant to be client-side, but EmailJS has abuse: anyone can use the public key + service/template IDs to send emails through your account, consuming your quota). EmailJS mitigations: restrict to specific origins/domains in EmailJS dashboard. Recommend adding domain allowlist in EmailJS.

5. **Google Apps Script endpoint** - POST with `no-cors` and `Content-Type: text/plain`. The Apps Script deployment URL is exposed. If deployed "Anyone, even anonymous" access, anyone can spam the sheet or the form can be abused to flood. Recommend: deploy Apps Script with restrictions, add rate limiting/captcha on the Apps Script side, validate input server-side in Apps Script. Also the form data (name, email, affiliation, comments) is sent - no server-side validation. Email spam risk.

6. **No rate limiting / CAPTCHA on form** - form can be spammed (EmailJS quota abuse + sheet flooding). Since no backend, can't fully prevent, but can add honeypot field + rate limiting client-side + recommend reCAPTCHA.

7. **`.env` file exists locally** with real secrets - not committed (good), but `.env.example` has real values committed. Should scrub `.env.example` to placeholders.

8. **No source maps in dist** (good - no .map files). dist not committed (good).

9. **canonical URL mismatch**: index.html uses `https://semamnadelageofisica.com/` (typo: "semamna..." missing a letter) but robots.txt/sitemap use `https://semanadelageofisica/` (malformed - no .com). And git commit mentions domain `semanadelageofisica.com`. This is an SEO/config issue, and the canonical URL typo could be a minor issue but not security. Actually the canonical is a typo and robots/sitemap domains are malformed. Not security per se, but worth a note. Actually not security. I'll mention as a minor config issue (domain integrity/SEO), since it's about the domain. Also, the sitemap domain `semanadelageofisica` (no TLD) is broken.

10. **Dependencies** - should run `npm audit`. There are some unusual versions (React 19.2.8? that seems future but it's 2026, fine). Let me not run npm audit in plan mode (it's read-only but slow, and network). Actually npm audit is read-only. But maybe skip to keep it fast; I can note to run it. Actually let me quickly run it — it's useful for the report. But it might take time. I'll note it in plan as an action to run during implementation.

11. **`dangerouslySetInnerHTML`, `innerHTML`** — none found. Good. React escaping is used. 

12. **External links** all have `rel="noopener noreferrer"` where target=_blank. Good. The Contacto.jsx Instagram/WhatsApp links are `<a href>` without target=_blank (line 28, 37) — same tab, fine.

13. **Google Maps iframe** - embedding google maps, no `sandbox` attribute. Minor. `referrerPolicy` set. Not a big deal.

14. **HashRouter** - uses hash routing, so the `_redirects` and sitemap paths with hash won't match. Actually the sitemap lists paths like `/registro` but HashRouter uses `/#/registro`. This is SEO issue not security.

15. **`no-cors` mode fetch** - fine, but the Apps Script needs to accept. The `text/plain` content-type avoids CORS preflight.

Let me also check Personal.js to see if linkedin URLs are external/trusted. And check Prox.js, Vistas.js, and other pages briefly for any sinks. Actually grep already covered sinks across src and found none dangerous besides what we saw. Let me quickly check Personal.js linkedin field and the other pages (Programa, Cursos, Patrocinadores, Estudiantes, Aprende, Vgeofisica, Resumenes) for external links/form. The grep already found all target=_blank links. 

Let me check Personal.js to confirm linkedin values are hardcoded (trusted). And check the remaining pages quickly for anything (e.g., iframe, embedded scripts). Let me grep for iframe, object, embed, script.

Actually I already have enough. But let me verify the linkedin data and check for any iframe/embed/object/script tags and any third-party script loading in the whole src + index.html.

**Tool: grep**

**Input:**
```json
{
  "pattern": "linkedin|http|iframe|object|embed|<script|script\\.src|createElement",
  "path": "C:\\Users\\ASUS\\Desktop\\UIS\\HDSP\\SemanaGeofisica\\6a-semana-geofisica.github.io\\src\\data"
}
```

**Output:**
```
Found 10 matches
C:\Users\ASUS\Desktop\UIS\HDSP\SemanaGeofisica\6a-semana-geofisica.github.io\src\data\Personal.js:
  Line 17:         linkedin: "linkedin.com/in/ana-gabriela-mantilla-24377a21a",

  Line 24:         linkedin: "https://www.linkedin.com/in/geodanielaquintero/",

  Line 31:         linkedin: "https://www.linkedin.com/in/paul-goyes-0212b810/",

  Line 38:         linkedin: "https://www.linkedin.com/in/jose-alejandro-barrios-pico-b592a5361/",

  Line 45:         linkedin: "https://www.linkedin.com/in/mariapaula-bohorquez/",

  Line 52:         linkedin: "https://www.linkedin.com/in/henry-arguello-2905929/",

  Line 59:         linkedin: "https://www.linkedin.com/in/saitkhurama/",

  Line 66:         linkedin: "",

  Line 73:         linkedin: "",

  Line 80:         linkedin: "https://www.linkedin.com/in/david-zapata-68486a274/",

```

**Tool: grep**

**Input:**
```json
{
  "pattern": "iframe|object|embed|script|srcdoc|sandbox|allow=",
  "path": "C:\\Users\\ASUS\\Desktop\\UIS\\HDSP\\SemanaGeofisica\\6a-semana-geofisica.github.io\\src"
}
```

**Output:**
```
Found 30 matches
C:\Users\ASUS\Desktop\UIS\HDSP\SemanaGeofisica\6a-semana-geofisica.github.io\src\components\static\VideoHero.jsx:
  Line 70:                         className="absolute inset-0 w-full h-full object-cover"

  Line 85:                 className={`w-full h-full object-contain ${isPlaying ? '' : 'hidden'}`}


C:\Users\ASUS\Desktop\UIS\HDSP\SemanaGeofisica\6a-semana-geofisica.github.io\src\components\layout\Navbar.jsx:
  Line 77:       imgClassName="object-contain"


C:\Users\ASUS\Desktop\UIS\HDSP\SemanaGeofisica\6a-semana-geofisica.github.io\src\components\pages\Vgeofisica.jsx:
  Line 229:                       className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"


C:\Users\ASUS\Desktop\UIS\HDSP\SemanaGeofisica\6a-semana-geofisica.github.io\src\components\pages\Resumenes.jsx:
  Line 258:                 <OptimizedImage src={Recepcion1} alt="Flyer del evento" className="h-full w-full object-cover" fill />

  Line 261:                 <OptimizedImage src={Recepcion2} alt="Flyer del evento" className="h-full w-full object-cover" fill />

  Line 264:                 <OptimizedImage src={Recepcion3} alt="Flyer del evento" className="h-full w-full object-cover" fill />


C:\Users\ASUS\Desktop\UIS\HDSP\SemanaGeofisica\6a-semana-geofisica.github.io\src\components\ui\AcercaDelEvento.jsx:
  Line 89:         {/* Description */}


C:\Users\ASUS\Desktop\UIS\HDSP\SemanaGeofisica\6a-semana-geofisica.github.io\src\components\ui\Card.jsx:
  Line 65:             className="h-full w-full object-cover"

  Line 159:             className="h-[100px] w-[100px] rounded-full object-cover"


C:\Users\ASUS\Desktop\UIS\HDSP\SemanaGeofisica\6a-semana-geofisica.github.io\src\components\pages\Estudiantes.jsx:
  Line 226:                 <OptimizedImage src={Estudiantes1} alt="Flyer de la convocatoria para estudiantes" className="h-full w-full object-cover" />

  Line 229:                 <OptimizedImage src={Estudiantes2} alt="Flyer informativo de requisitos" className="h-full w-full object-cover" />


C:\Users\ASUS\Desktop\UIS\HDSP\SemanaGeofisica\6a-semana-geofisica.github.io\src\components\pages\Registro.jsx:
  Line 230:                   <img src={Flyer} alt="Flyer del evento" className="h-full w-full object-cover" />

  Line 231:                   {/* Ejemplo de uso real: <img src={FlyerImg} alt="Flyer del evento" className="h-full w-full object-cover" /> */}

  Line 234:                 {/* Contenedor del Mapa (Integración con iframe de Google Maps - Coordenadas predeterminadas UIS) */}

  Line 236:                   <iframe

  Line 238:                     src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3959.531777553597!2d-73.12199862402138!3d7.142999792862024!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e683f1e944ef011%3A0x6b10de67f2e1a396!2sUniversidad%20Industrial%20de%20Santander!5e0!3m2!1ses!2sco!4v1715000000000!5m2!1ses!2sco"

  Line 245:                   ></iframe>


C:\Users\ASUS\Desktop\UIS\HDSP\SemanaGeofisica\6a-semana-geofisica.github.io\src\components\pages\Patrocinadores.jsx:
  Line 118:                   <OptimizedImage src={logoOrganiza.src} alt={logoOrganiza.alt} className="max-h-full max-w-full" imgClassName="object-contain" priority />

  Line 144:                       <OptimizedImage src={logo.src} alt={logo.alt} className="max-h-full max-w-full" imgClassName="object-contain" />

  Line 172:                       <OptimizedImage src={logo.src} alt={logo.alt} className="max-h-full max-w-full" imgClassName="object-contain" />


C:\Users\ASUS\Desktop\UIS\HDSP\SemanaGeofisica\6a-semana-geofisica.github.io\src\components\pages\Aprende.jsx:
  Line 152:               <iframe

  Line 153:                 src="https://www.youtube.com/embed/lzUhIHVW1zo"

  Line 156:                 allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"

  Line 185:               <iframe

  Line 186:                 src="https://www.youtube.com/embed/xBWFjzD98Sg"

  Line 189:                 allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"


C:\Users\ASUS\Desktop\UIS\HDSP\SemanaGeofisica\6a-semana-geofisica.github.io\src\components\ui\OptimizedImage.jsx:
  Line 8:   imgClassName = 'object-cover',

  Line 49:       className={`${imgClassName === 'object-contain' ? '' : 'overflow-hidden'} relative ${className}`}


C:\Users\ASUS\Desktop\UIS\HDSP\SemanaGeofisica\6a-semana-geofisica.github.io\src\assets\organizaciones\hdsplogo.svg:
  Line 198:      objecttolerance="10"

```

**Tool: read**

**Input:**
```json
{
  "filePath": "C:\\Users\\ASUS\\Desktop\\UIS\\HDSP\\SemanaGeofisica\\6a-semana-geofisica.github.io\\src\\data\\Personal.js",
  "limit": 40
}
```

**Output:**
```
<path>C:\Users\ASUS\Desktop\UIS\HDSP\SemanaGeofisica\6a-semana-geofisica.github.io\src\data\Personal.js</path>
<type>file</type>
<content>
1: import AnaC from '../assets/team/Ana_Beatriz.avif'
2: import AnaA from '../assets/team/Ana_Celina.avif'
3: import HenryA from '../assets/team/HenryA.avif'
4: import AnaM from '../assets/team/Ana_Mantilla.avif'
5: import DanielaQ from '../assets/team/Daniela_Quintero.avif'
6: import JoseB from '../assets/team/Jose_Barrios.avif'
7: import MariaP from '../assets/team/Maria_Bohorquez.avif'
8: import PaulG from '../assets/team/Paul_Goyes.avif'
9: import SaitK from '../assets/team/Sait_Khurama.avif'
10: import DavidZ from '../assets/team/David_Zapata.avif'
11: 
12: export const teamMembers = [
13:     {
14:         id: 1,
15:         comite: "Comité Organizador",
16:         name: "Ana Mantilla",
17:         linkedin: "linkedin.com/in/ana-gabriela-mantilla-24377a21a",
18:         imagen: AnaM
19:     },
20:     {
21:         id: 2,
22:         comite: "Comité Organizador",
23:         name: "Daniela Quintero",
24:         linkedin: "https://www.linkedin.com/in/geodanielaquintero/",
25:         imagen: DanielaQ
26:     },
27:     {
28:         id: 3,
29:         comite: "Comité de Apoyo",
30:         name: "Paul Goyes",
31:         linkedin: "https://www.linkedin.com/in/paul-goyes-0212b810/",
32:         imagen: PaulG
33:     },
34:     {
35:         id: 4,
36:         comite: "Comité de Apoyo",
37:         name: "Jose Barrios",
38:         linkedin: "https://www.linkedin.com/in/jose-alejandro-barrios-pico-b592a5361/",
39:         imagen: JoseB
40:     },

(Showing lines 1-40 of 83. Use offset=41 to continue.)
</content>
```

---

## Assistant (Plan · DeepSeek V4 Pro (New) · 83.8s)

_Thinking:_

I now have a complete picture. Let me also quickly check whether Render supports headers in render.yaml for static sites (to give accurate recommendations). Render does support `headers` in render.yaml for static sites. Actually, Render added support for custom headers via the `headers` key under a service. Let me verify quickly. Actually, I know Render supports HTTP headers via `render.yaml` `headers` field for static sites as of 2024. I'll mention it but note "verify".

Also let me check the Aprende.jsx iframes (YouTube embeds) - they don't have sandbox but YouTube embeds are generally fine. The Google Maps iframe also. These are trusted third-party embeds, low risk. Could add `sandbox` but that might break embeds. Note as minor.

Now, I have enough to produce a plan. Since I'm in plan mode, I should present a plan (the security report + proposed fixes) and NOT make changes. The user asked me to "do a security analysis and help protect the page". I should present findings and a plan.

Actually the security skill says to write a report to a markdown file. But I'm in plan mode (read-only). I can't write the file. So I should present the plan and findings in my response, and propose writing the report + fixes once out of plan mode.

Let me think about the key findings and severity, and craft a clear plan. I should ask clarifying questions where needed, e.g., about deployment/edge headers (Render vs GitHub Pages), and whether they want me to also scrub .env.example.

Actually, let me determine the deployment. The repo name is "6a-semana-geofisica.github.io" suggesting GitHub Pages, but render.yaml is present and there's a `_redirects` (Netlify-style). The README says clone from GitHub. The git log mentions "actualización del dominio a 'semanadelageofisica.com'". So they likely deploy on Render (render.yaml) or Netlify (_redirects) or GitHub Pages. The canonical is semamnadelageofisica.com. This matters for where headers get configured.

Let me present the plan clearly, with the findings, and ask a couple of clarifying questions:
1. Where is it actually deployed (Render / Netlify / GitHub Pages)? This determines how to add CSP/security headers.
2. Confirm they want me to proceed with fixes (after plan approval), including scrubbing .env.example and rotating the Apps Script URL / EmailJS keys.

Let me structure the response concisely but completely. Since this is plan mode, I'll present the analysis and proposed plan, then use the question tool to ask about deployment + scope.

Actually, I should present a thorough but concise plan. Let me write out the findings with severity and the proposed remediation plan, then ask clarifying questions.

Let me be mindful of the response length - but this is a security report request, so detail is warranted. The instructions say "unless user asks for detail". The user asked for a security analysis and help protecting. So detail is appropriate, but I should still be organized.

Let me write the findings summary and plan, then ask questions.

Findings (severity):

**Critical/High:**
1. **F-01: Google Apps Script endpoint exposed & unauthenticated** (`InscripcionModal.jsx:11,170` + `.env`). The Apps Script URL is embedded in the client bundle and POSTs form data with `no-cors`. If deployed as "Anyone" access, anyone can flood the Google Sheet / spam submissions, and there's no rate limit or server-side validation. Impact: data pollution, spam, potential quota abuse. Fix: restrict Apps Script web app access to your domain (and re-deploy), validate + rate-limit input server-side in Apps Script, add honeypot + (optionally) reCAPTCHA.

2. **F-02: EmailJS credentials exposed & abusable** (`InscripcionModal.jsx:5-11`, `.env.example`). Public key + service ID + template IDs are in the bundle (EmailJS public key is meant to be public, but service/template IDs + public key together allow anyone to send emails through your account). Impact: spam/abuse of email quota, phishing using your email templates. Fix: add allowed-origin restriction in EmailJS dashboard, rotate if abused; treat as non-secret but scoped.

3. **F-03: Real secrets committed to `.env.example`** (`.env.example:1-6`). The `.env.example` contains real values (public key, service ID, template IDs, Apps Script URL) committed to git history. Fix: scrub `.env.example` to placeholders; rotate the Apps Script URL and EmailJS keys since they're in git history; the actual `.env` is correctly gitignored (good).

**Medium:**
4. **F-04: No CSP / security headers** (no CSP meta, no headers in render.yaml/edge). Impact: no defense-in-depth against XSS, clickjacking, MIME sniffing. Fix: add CSP (via Render headers or meta), `X-Frame-Options`/`frame-ancestors`, `X-Content-Type-Options: nosniff`, `Referrer-Policy`. Note: apps render only trusted static content + third-party (Google Maps/YouTube/EmailJS), so CSP must allow those.

5. **F-05: Form spam / no rate limiting or CAPTCHA** (no honeypot, no rate limit). Related to F-01/F-02. Fix: honeypot field, client throttle, consider reCAPTCHA v3 / Turnstile.

6. **F-06: `window.open` with loosely-validated URL** (`Inicio.jsx:22-26`). Data is in-repo (trusted), so low risk, but the `url.startsWith('http')` check is not a strict scheme allowlist. Fix: strict allowlist (https only + host allowlist) or render as `<a href>` with rel. Low/informational given trusted data.

**Low:**
7. **F-07: Third-party embeds (Google Maps iframe, YouTube iframes)** without sandbox — low risk, trusted providers; optionally add `sandbox`/`referrerPolicy` where it doesn't break. Informational.

8. **F-08: Domain/SEO config inconsistencies** — canonical uses `semamnadelageofisica.com` (typo), robots.txt & sitemap use `https://semanadelageofisica/` (no TLD), HashRouter vs sitemap paths. Not security but config hygiene. Fix: correct domain, canonical, sitemap URLs, robots sitemap line.

9. **F-09: Dependency audit** — run `npm audit` / Dependabot; ensure lockfile (`package-lock.json` present, good). No known issue observed but recommend scanning.

Good things already: no `innerHTML`/`dangerouslySetInnerHTML`/`eval`/`document.write`; React auto-escaping used; all `target=_blank` links use `rel="noopener noreferrer"`; `.env` gitignored; no source maps in dist; dist gitignored; lockfile present.

Now let me formulate the plan and ask clarifying questions.

I'll present the findings and then ask about: (1) deployment target, (2) scope of fixes they want me to do. Let me use the question tool.

Actually, I think I should present the analysis clearly in text, then ask focused questions. Let me combine: give a concise but complete summary of findings, then ask questions about deployment and scope.

Let me write it.

He completado el análisis de seguridad del sitio (React + Vite, estático, EmailJS + Google Apps Script). Aquí está el resultado y el plan propuesto.

## Resumen del análisis

**Lo que ya está bien:** sin `innerHTML`/`dangerouslySetInnerHTML`/`eval`/`document.write`; React escapa por defecto; todos los `target="_blank"` usan `rel="noopener noreferrer"`; `.env` está gitignoreado; no hay source maps en `dist`; hay `package-lock.json`.

## Hallazgos (por severidad)

| ID | Severidad | Hallazgo |
|----|-----------|----------|
| F-01 | **Alta** | El endpoint de Google Apps Script (`VITE_APPS_SCRIPT_URL`) está embebido en el bundle y recibe `POST` sin autenticación ni validación server-side (`InscripcionModal.jsx:11,170`). Cualquiera puede inundar la hoja de cálculo / spam. |
| F-02 | **Alta** | Credenciales de EmailJS (public key + service/template IDs) expuestas y abusables para enviar correos con tu cuenta (`InscripcionModal.jsx:5-11`). |
| F-03 | **Alta** | `.env.example` tiene **valores reales commiteados** (public key, IDs, URL del Apps Script). Están en el historial de git. |
| F-04 | **Media** | No hay CSP ni headers de seguridad (`frame-ancestors`, `X-Content-Type-Options`, `Referrer-Policy`) — sin defensa en profundidad. |
| F-05 | **Media** | El formulario no tiene honeypot, rate-limit ni CAPTCHA (agrava F-01/F-02). |
| F-06 | **Baja** | `window.open(enlaceSeguro...)` (`Inicio.jsx:22-26`) valida con `startsWith('http')` en vez de allowlist estricto (dato es de confianza, así que es informativo). |
| F-07 | **Baja** | Iframes de Google Maps/YouTube sin `sandbox` (proveedores confiables, informativo). |
| F-08 | **Baja** | Dominio inconsistente: `canonical` usa `semamnadelageofisica.com` (typo) y `robots.txt`/`sitemap.xml` usan `https://semanadelageofisica/` (sin TLD). |
| F-09 | **Baja** | Ejecutar `npm audit` / habilitar Dependabot (no se detectó nada, pero conviene verificar). |

## Plan de remediación propuesto

1. **F-03 (urgente):** Reemplazar `.env.example` por placeholders; rotar URL del Apps Script y claves de EmailJS (ya están en el historial).
2. **F-01/F-05:** Restringir el web app de Apps Script (acceso "Anyone" → limitado), validar + limitar tasa del lado del script, añadir campo honeypot y (opcional) reCAPTCHA/Turnstile en el modal.
3. **F-02:** Configurar restricción de dominios permitidos en el dashboard de EmailJS.
4. **F-04:** Añadir CSP + headers de seguridad (según plataforma de deploy, ver pregunta abajo).
5. **F-06:** Sustituir `window.open` por `<a href>` con allowlist `https:`.
6. **F-08:** Corregir canonical, `robots.txt` y `sitemap.xml` al dominio real.
7. **F-09:** Correr `npm audit` y revisar dependencias.

Antes de escribir el reporte y aplicar cambios, necesito confirmar un par de cosas:

**Tool: question**

**Input:**
```json
{
  "questions": [
    {
      "header": "Plataforma de despliegue",
      "question": "¿Dónde está desplegado el sitio actualmente? Esto determina cómo añadir los headers de seguridad (CSP, X-Frame-Options, etc.).",
      "options": [
        {
          "label": "Render",
          "description": "Existe render.yaml en el repo; los headers se configuran ahí o en el dashboard"
        },
        {
          "label": "Netlify",
          "description": "Existe _redirects; los headers irían en netlify.toml o _headers"
        },
        {
          "label": "GitHub Pages",
          "description": "El repo se llama 6a-semana-geofisica.github.io"
        },
        {
          "label": "No estoy seguro",
          "description": "Lo investigo en el repo y elijo la mejor opción"
        }
      ]
    },
    {
      "header": "Alcance de cambios",
      "question": "¿Qué alcance quieres que ejecute cuando salgamos del modo plan?",
      "options": [
        {
          "label": "Todo (recomendado)",
          "description": "Aplicar todas las correcciones de código + escribir reporte de seguridad"
        },
        {
          "label": "Solo código del sitio",
          "description": "Corregir lo del frontend (CSP, honeypot, URLs), sin tocar Apps Script/EmailJS"
        },
        {
          "label": "Solo reporte",
          "description": "Generar el reporte de seguridad sin modificar nada todavía"
        }
      ]
    }
  ]
}
```

**Output:**
```
User has answered your questions: "¿Dónde está desplegado el sitio actualmente? Esto determina cómo añadir los headers de seguridad (CSP, X-Frame-Options, etc.)."="Vercel", "¿Qué alcance quieres que ejecute cuando salgamos del modo plan?"="Solo código del sitio". You can now continue with the user's answers in mind.
```

---

## Assistant (Plan · DeepSeek V4 Pro (New) · 21.0s)

_Thinking:_

User answered:
- Deployment: Vercel (not Render, not Netlify, not GitHub Pages)
- Scope: "Solo código del sitio" (only site code, don't touch Apps Script/EmailJS config)

Wait — the render.yaml says Render, but user says Vercel. OK, the actual deployment is Vercel. So headers/CSP would go via `vercel.json` (headers array) in the repo. Vercel supports `headers` in `vercel.json`.

Scope: "Solo código del sitio" = apply the frontend code fixes (CSP via vercel.json, honeypot, URL allowlist, domain fixes), without touching Apps Script/EmailJS external config.

So I need to adjust the plan:
- F-04: Add `vercel.json` with security headers + CSP. CSP must allow: fonts.googleapis.com, fonts.gstatic.com (Google Fonts), script from self + `@emailjs`/EmailJS (loaded via npm bundle, so self), the Apps Script domain `script.google.com` for `connect-src`, and Google Maps iframe (frame-src https://www.google.com), YouTube (frame-src youtube.com), images. Since inline script in index.html has the JSON-LD structured data (application/ld+json is NOT a script that executes; it's fine but CSP script-src needs to consider it - actually JSON-LD inside <script type="application/ld+json"> is not blocked by script-src? Actually CSP does block it? No — `<script type="application/ld+json">` is data, not executable, and CSP `script-src` does NOT block non-JS script types. Actually, CSP does not block `<script type="application/ld+json">` because it's not executable script. Wait, let me recall: CSP blocks inline script elements. JSON-LD is delivered via `<script type="application/ld+json">`. Historically, CSP `script-src` does NOT block JSON-LD because the type is not a JS MIME. Actually there's nuance: some CSP versions treat any inline `<script>` regardless of type. Let me think... In practice, `application/ld+json` is allowed even with strict CSP because it's not executable. I recall that CSP spec says the `script-src` applies to `<script>` elements; but browsers only block if it's a script type. Actually the common guidance: JSON-LD blocks ARE NOT blocked by CSP because they're not executed. Hmm, but I've also seen reports they ARE blocked. To be safe, I'll note this and recommend moving JSON-LD or using hash. This is a detail for implementation.

Since Vite builds everything into a single JS bundle (no inline scripts except the JSON-LD and the module script tag which is external), CSP can use `script-src 'self'`. The index.html has `<script type="module" src="/src/main.jsx">` (external) and the JSON-LD inline script. So `script-src 'self'` plus handling JSON-LD.

Actually for a static SPA on Vercel, the simplest robust approach: use Vercel headers in vercel.json. Also add `<meta http-equiv>` CSP? No, better via vercel.json headers which supports all directives including frame-ancestors.

Now the plan needs to be refined. Since the user chose "Solo código del sitio", I should NOT do F-01/F-02 server-side config (Apps Script restrictions, EmailJS domain restriction), but I CAN do client-side honeypot (F-05) and rate limiting in code. Actually F-05 honeypot is site code. reCAPTCHA would need external setup; I'll leave it optional.

Let me finalize the plan. I'll present a concise final plan. Since we're in plan mode, I should present the plan and note I'm ready to implement upon approval.

Let me also note: vercel.json doesn't currently exist. I'll need to create it. Also there's render.yaml and _redirects that are now irrelevant if deployed on Vercel — but I won't remove them (out of scope / user's choice). I'll just add vercel.json.

Let me also check: does the repo have a `vercel.json`? No, the file listing didn't show one. So create it.

Let me present the final plan clearly and concisely. I'll also note the JSON-LD/CSP nuance.

I think I can now present the finalized plan and stop (still in plan mode, no edits). I'll present the concrete changes I'll make when approved.

Final plan scope (site code only):

1. **Create `vercel.json`** with security headers:
   - `X-Content-Type-Options: nosniff`
   - `X-Frame-Options: DENY` (or CSP frame-ancestors 'self'/'none')
   - `Referrer-Policy: strict-origin-when-cross-origin`
   - `Permissions-Policy` minimal
   - CSP: 
     - default-src 'self'
     - script-src 'self' (allow JSON-LD via hash or leave — note)
     - style-src 'self' 'unsafe-inline' (Tailwind inline styles / framer-motion uses inline style attributes, which are not blocked by style-src 'unsafe-inline'... actually inline `style=""` attributes ARE blocked by style-src without 'unsafe-inline'. Framer Motion sets inline styles, so style-src needs 'unsafe-inline' for styles, OR 'unsafe-hashes'. Simpler: `style-src 'self' 'unsafe-inline'`. This is acceptable since style injection is low risk.)
     - font-src fonts.googleapis.com fonts.gstatic.com
     - img-src 'self' data: (data: for any inline images)
     - frame-src https://www.google.com https://www.youtube.com https://www.youtube-nocookie.com
     - connect-src 'self' https://api.emailjs.com https://script.google.com (EmailJS SDK posts to api.emailjs.com; Apps Script to script.google.com)
     - media-src 'self' (for the mp4 video)
   
2. **F-05 honeypot** in `InscripcionModal.jsx`: add hidden field; if filled, silently abort. Add client-side throttle (disable resubmit / minimum time). Optionally note reCAPTCHA as future.

3. **F-06** in `Inicio.jsx`: replace `window.open` with strict https allowlist (or render anchor). Keep it simple: validate scheme is https:.

4. **F-08** domain fixes in `index.html` (canonical/OG/twitter), `robots.txt`, `sitemap.xml` to correct domain (need actual domain: user says Vercel; the domain from git log is "semanadelageofisica.com"). I'll ask/confirm domain? The commit message says `semanadelageofisica.com`. canonical currently typo `semamnadelageofisica.com`. I'll use `https://semanadelageofisica.com`. But I should confirm exact domain. Actually I'll note to confirm. But to keep momentum, I'll use `https://semanadelageofisica.com` and flag for confirmation.

5. **F-03 (site-code portion):** scrub `.env.example` to placeholders (this is a repo file — is it "site code"? It's config. The user said "solo código del sitio". Scrubbing .env.example is a repo change that's part of code hygiene. I'll include it but flag that rotation of actual keys is a manual/account action). Actually rotation is external. Scrubbing the file is a code change I can do. I'll include it as recommended but mark that rotating keys must be done manually. Hmm, "solo código del sitio" might exclude .env.example scrub? I think scrubbing placeholders is reasonable and safe. I'll list it as optional/recommended.

6. **F-09:** run `npm audit` (read-only, during implementation) and report.

Let me present this final plan concisely. Then stop (plan mode). I'll present and ask for approval to proceed (they'll exit plan mode).

Actually, I don't need another question. I'll present the finalized plan and say I'm ready to implement once they approve/exit plan mode.

Let me write it concisely.

Entendido: **Vercel** como plataforma y alcance **solo código del sitio** (no tocar Apps Script ni EmailJS en su dashboard). Ajusto el plan.

## Plan final (solo código del sitio)

### 1. Crear `vercel.json` — headers de seguridad + CSP (F-04)
Añadir headers globales y una CSP ajustada a lo que el sitio ya carga:
- `X-Content-Type-Options: nosniff`
- `Referrer-Policy: strict-origin-when-cross-origin`
- `X-Frame-Options: DENY` / `frame-ancestors 'none'`
- `Permissions-Policy` mínima
- CSP: `default-src 'self'`, `script-src 'self'`, `style-src 'self' 'unsafe-inline'` (Framer Motion usa estilos inline), `font-src fonts.googleapis.com fonts.gstatic.com`, `img-src 'self' data:`, `media-src 'self'`, `frame-src https://www.google.com https://www.youtube.com https://www.youtube-nocookie.com`, `connect-src 'self' https://api.emailjs.com https://script.google.com`
- Nota: el bloque `application/ld+json` en `index.html` puede requerir un hash en `script-src`; lo verificaré al implementar.

### 2. `InscripcionModal.jsx` — anti-spam (F-05)
- Campo honeypot oculto: si se llena, se aborta el envío silenciosamente.
- Throttle: impedir reenvío inmediato (botón ya queda `disabled` al enviar; reforzar).
- (reCAPTCHA/Turnstile quedará como recomendación, requiere config externa).

### 3. `Inicio.jsx` — validación estricta de URL (F-06)
- Reemplazar `window.open(enlaceSeguro, ...)` por allowlist estricta (`https:` + host `linkedin.com`) o renderizar `<a href>` con `rel="noopener noreferrer"`.

### 4. Corregir dominio (F-08)
- `index.html`: `canonical` + Open Graph/Twitter → dominio correcto.
- `robots.txt` y `sitemap.xml`: arreglar URLs (hoy usan `https://semanadelageofisica/` sin TLD y hay un typo en el canonical).
- ⚠️ Necesito confirmar el **dominio exacto** (asumo `https://semanadelageofisica.com`, según el commit `f726146`).

### 5. `.env.example` (F-03, parte de código)
- Reemplazar valores reales por placeholders. (La **rotación** de claves EmailJS / URL del Apps Script es manual y externa, te la dejo documentada.)

### 6. `npm audit` (F-09)
- Correrlo y reportar si hay vulnerabilidades de dependencias.

### Fuera de alcance (requiere acción manual externa)
- Restringir acceso del web app de Apps Script + validación server-side (F-01).
- Restringir dominios permitidos en EmailJS y rotar claves (F-02).

¿Confirmas el dominio (`semanadelageofisica.com`) y estás de acuerdo con este plan para que proceda a implementarlo?

---

## User

El dominio es correcto procede con el plan

---

## Assistant (Build · DeepSeek V4 Pro (New) · 6.9s)

_Thinking:_

Let me proceed with the plan. Let me set up a todo list and start implementing.

Let me first check what files I need. I already read most. Let me implement:

1. Create vercel.json
2. Edit InscripcionModal.jsx (honeypot + throttle)
3. Edit Inicio.jsx (strict URL)
4. Fix index.html canonical/OG/Twitter
5. Fix robots.txt and sitemap.xml
6. Scrub .env.example
7. Run npm audit

Let me start. First todo list.

**Tool: todowrite**

**Input:**
```json
{
  "todos": [
    {
      "content": "Crear vercel.json con headers de seguridad y CSP",
      "status": "in_progress",
      "priority": "high"
    },
    {
      "content": "Añadir honeypot + throttle en InscripcionModal.jsx",
      "status": "pending",
      "priority": "high"
    },
    {
      "content": "Validación estricta de URL en Inicio.jsx",
      "status": "pending",
      "priority": "medium"
    },
    {
      "content": "Corregir dominio en index.html, robots.txt y sitemap.xml",
      "status": "pending",
      "priority": "medium"
    },
    {
      "content": "Scrub .env.example a placeholders",
      "status": "pending",
      "priority": "high"
    },
    {
      "content": "Ejecutar npm audit y reportar",
      "status": "pending",
      "priority": "low"
    }
  ]
}
```

**Output:**
```
[
  {
    "content": "Crear vercel.json con headers de seguridad y CSP",
    "status": "in_progress",
    "priority": "high"
  },
  {
    "content": "Añadir honeypot + throttle en InscripcionModal.jsx",
    "status": "pending",
    "priority": "high"
  },
  {
    "content": "Validación estricta de URL en Inicio.jsx",
    "status": "pending",
    "priority": "medium"
  },
  {
    "content": "Corregir dominio en index.html, robots.txt y sitemap.xml",
    "status": "pending",
    "priority": "medium"
  },
  {
    "content": "Scrub .env.example a placeholders",
    "status": "pending",
    "priority": "high"
  },
  {
    "content": "Ejecutar npm audit y reportar",
    "status": "pending",
    "priority": "low"
  }
]
```

---

## Assistant (Build · DeepSeek V4 Pro (New) · 18.6s)

_Thinking:_

Let me create vercel.json. I need to think about the CSP carefully for a Vite + React SPA on Vercel.

The site loads:
- Google Fonts: fonts.googleapis.com (css), fonts.gstatic.com (fonts)
- EmailJS SDK bundled via npm (so it's 'self')
- Apps Script POST to script.google.com (connect-src)
- EmailJS API POST to api.emailjs.com (connect-src)
- Google Maps iframe (frame-src https://www.google.com)
- YouTube iframes (frame-src youtube.com, youtube-nocookie.com)
- Video mp4 (media-src 'self')
- Images local + data:

JSON-LD in index.html: `<script type="application/ld+json">`. This is a non-executable script type. CSP `script-src` does NOT block JSON-LD per spec (it only applies to script-like types). Actually, let me verify: The CSP spec says `script-src` governs `<script>` elements that would be executed. JSON-LD (`application/ld+json`) is not executed. Browsers do NOT block JSON-LD with script-src 'self'. So I can use script-src 'self' safely. But there's a subtlety: `script-src 'self'` with no 'unsafe-inline' will block inline `<script>` (executable JS). JSON-LD is fine. The module script tag is external (src="/assets/..."), so 'self' covers it.

Actually wait — Vite injects the built script as `<script type="module" crossorigin src="/assets/index-....js"></script>` which is external = 'self'. Good.

style-src: Tailwind v4 with @tailwindcss/vite injects CSS as external file in build. But framer-motion sets inline `style=""` attributes (element.style) and the components use inline `style={{...}}` in JSX (e.g., Card.jsx uses style prop for transform, background). Inline style *attributes* are controlled by `style-src-attr` / `style-src 'unsafe-inline'`. Since framer-motion and many components set inline styles via React, I need `style-src 'self' 'unsafe-inline'`. That's acceptable (style injection is low risk, and needed for motion).

Actually, React inline styles set via `element.style.prop = ...` are NOT blocked by CSP style-src (that's the CSSOM, not style attribute parsing). Wait, no. Let me think carefully:
- `style-src 'unsafe-inline'` governs inline `<style>` blocks and `style=""` attributes.
- Setting `element.style.color = 'red'` via CSSOM is NOT blocked by style-src. It's allowed.
- However, React's `style={{...}}` prop sets individual CSS properties via CSSOM (React sets style properties directly), NOT via setAttribute('style'). So it's NOT blocked by style-src.

But framer-motion also sets styles via CSSOM. So actually I might NOT need 'unsafe-inline' for style-src. But Tailwind v4? The @tailwindcss/vite plugin compiles to an external CSS file. However, some utilities may inject inline styles? No.

Hmm, but there could be edge cases. To be safe and avoid breaking the site, I'll include `style-src 'self' 'unsafe-inline'`. It's a reasonable, common choice and low risk. Actually, to be a bit stricter but still safe, I could use 'unsafe-inline' for style-src only. That's fine.

Actually, let me reconsider - there's one place using `style={{ transformStyle: 'preserve-3d' }}` and `style={{ border: 0 }}` and `style={{ transformOrigin: 'left center' }}` and Card.jsx sets `style={{ opacity: isHovered ? 1 : 0, background: ... }}`. All via React style prop = CSSOM, not blocked. So technically style-src 'self' would work. But framer-motion sometimes uses `setAttribute('style', ...)`? No, it uses element.style. 

To minimize breakage risk while being secure, I'll use `style-src 'self' 'unsafe-inline'`. This is standard and safe enough for this site.

Now img-src: local avif/png/svg + data: (not sure if any data: images used; but favicon is svg file). I'll include 'self' data: blob:? No blob needed. Just 'self' data:.

font-src: fonts.googleapis.com fonts.gstatic.com

connect-src: 'self' https://api.emailjs.com https://script.google.com (and maybe fonts? no, fonts are font-src). Google Fonts CSS is fetched from fonts.googleapis.com (style-src + font-src). Need to add fonts.googleapis.com to style-src too! Because the CSS is a stylesheet from fonts.googleapis.com. So style-src must include fonts.googleapis.com. And font-src fonts.gstatic.com.

So style-src: 'self' 'unsafe-inline' https://fonts.googleapis.com

script-src: 'self'

frame-src: https://www.google.com https://www.youtube.com https://www.youtube-nocookie.com

media-src: 'self'

default-src: 'self'

object-src 'none'; base-uri 'self'; form-action 'self'.

For the Google Maps embed, the iframe src is `https://www.google.com/maps/embed?...`. frame-src https://www.google.com covers it. But Google Maps embed may also load subresources within the iframe — those are governed by the iframe's own origin context, not our CSP (frame-src only controls which frames can be loaded; inside the frame, Google's own CSP applies). So frame-src is enough.

For YouTube embeds: `https://www.youtube.com/embed/...`. frame-src youtube.com covers www.youtube.com? frame-src source expression `https://www.youtube.com` and `https://www.youtube-nocookie.com`. I'll list explicit hosts.

Now, one concern: `script-src 'self'` and the inline JSON-LD. Let me double check: JSON-LD scripts. According to the CSP3 spec and browser behavior, `script-src` does NOT block `application/ld+json` script elements because they are not executed. This is confirmed widely (Google's own guidance). So fine.

But wait — there's also the inline script concern with Vite's dev mode (not relevant for production build). Production build has external module script. Good.

Also need to be careful: Vercel `headers` config applies to all routes. I'll apply to all paths.

Let me write vercel.json.

Actually, let me reconsider X-Frame-Options + frame-ancestors. The site uses HashRouter, single page. No need to be framed. Use `frame-ancestors 'none'` via CSP, and optionally X-Frame-Options DENY. Both fine. I'll include both.

Permissions-Policy: minimal — `camera=(), microphone=(), geolocation=()`. Actually geolocation might not be used. I'll set a reasonable minimal: `geolocation=(), camera=(), microphone=(), payment=(), usb=()`. Keep it simple.

Let me also add HSTS? The skill warns against recommending HSTS without understanding. Since Vercel serves HTTPS by default and redirects, I'll skip HSTS to avoid the "lasting impacts" warning. Actually, adding HSTS on a site that's always HTTPS via Vercel is generally safe, but the skill explicitly says avoid recommending HSTS. I'll skip it.

Let me write the file.

Now let me write vercel.json.

**Tool: write**

**Input:**
```json
{
  "filePath": "C:\\Users\\ASUS\\Desktop\\UIS\\HDSP\\SemanaGeofisica\\6a-semana-geofisica.github.io\\vercel.json",
  "content": "{\n  \"headers\": [\n    {\n      \"source\": \"/(.*)\",\n      \"headers\": [\n        {\n          \"key\": \"Content-Security-Policy\",\n          \"value\": \"default-src 'self'; script-src 'self'; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com; img-src 'self' data:; media-src 'self'; frame-src https://www.google.com https://www.youtube.com https://www.youtube-nocookie.com; connect-src 'self' https://api.emailjs.com https://script.google.com; object-src 'none'; base-uri 'self'; form-action 'self'; frame-ancestors 'none'\"\n        },\n        {\n          \"key\": \"X-Content-Type-Options\",\n          \"value\": \"nosniff\"\n        },\n        {\n          \"key\": \"X-Frame-Options\",\n          \"value\": \"DENY\"\n        },\n        {\n          \"key\": \"Referrer-Policy\",\n          \"value\": \"strict-origin-when-cross-origin\"\n        },\n        {\n          \"key\": \"Permissions-Policy\",\n          \"value\": \"camera=(), microphone=(), geolocation=(), payment=(), usb=()\"\n        }\n      ]\n    }\n  ]\n}\n"
}
```

**Output:**
```
Wrote file successfully.
```

---

## Assistant (Build · DeepSeek V4 Pro (New) · 13.5s)

_Thinking:_

Now, the JSON-LD script in index.html. `script-src 'self'` might block inline JSON-LD? Let me verify once more. Actually, I want to be careful here. There is genuine debate. Let me recall the actual behavior:

The CSP `script-src` directive governs the execution of scripts. For `<script type="application/ld+json">`, the content is data (JSON), not executable JavaScript. Per the HTML spec and CSP3, the `script-src` directive's "should block" only applies to script elements whose type attribute indicates a scripting language (i.e., JavaScript MIME type or "module"). For non-script types like `application/ld+json`, CSP does NOT block them.

Confirmed: JSON-LD is not blocked by CSP script-src. Google's structured data docs even note that JSON-LD is not affected by CSP. So we're fine.

However, to be extra safe and avoid any ambiguity, I could move the JSON-LD. But it's fine to leave it. I'll leave it.

Now let me update todos and proceed to the honeypot.

For InscripcionModal.jsx:
- Add honeypot field to form state (initialForm) and a hidden input.
- Add throttle: the submit button is already disabled when sending. I'll add a "lastSubmitTime" ref to prevent rapid resubmission (e.g., ignore submits within X seconds). Actually the button disabled is enough for normal users, but a bot could still fire POST directly. The honeypot is the main client-side defense. I'll add honeypot + a simple timestamp-based throttle in handleSubmit.

Let me implement:

1. Add `website: ''` (honeypot field) to initialForm.
2. In handleSubmit, at the top: `if (form.website) return` (silently abort, maybe set success status to avoid leaking).
3. Add throttle ref: `const lastSubmit = useRef(0)` and check `if (Date.now() - lastSubmit.current < 5000) return`.

Let me add the hidden input in the form. Hidden honeypot input: a field that real users won't see (CSS hidden), bots will fill. I'll add it with a visually-hidden class.

Let me use a name like "company" or "website". I'll add a div with className hidden via Tailwind `hidden` or `absolute -left-[9999px]`. Using `hidden` (display:none) — some bots skip display:none, but most simple bots fill any input. A better honeypot uses off-screen positioning. I'll use a container with `aria-hidden` and a label. Let me keep it simple with a wrapper `className="hidden"` (Tailwind) — but to be more robust use an off-screen technique. I'll use inline style off-screen.

Actually, I'll add:
```jsx
<div className="absolute left-[-9999px] top-auto" aria-hidden="true">
  <label htmlFor="hp-website">No llenar este campo</label>
  <input id="hp-website" type="text" name="website" tabIndex={-1} autoComplete="off" value={form.website} onChange={setField('website')} />
</div>
```

But `setField('website')` references the same setField. Fine.

Also add the field to initialForm: `website: ''`.

Also handleSubmit: first line after preventDefault: `if (form.website) { setStatus('success'); return }` — set success so bot thinks it worked. Actually returning without doing anything and setting success is good (bot thinks it submitted).

Let me also add throttle.

Let me edit InscripcionModal.jsx now.

Let me update the todo first, then edit.

**Tool: todowrite**

**Input:**
```json
{
  "todos": [
    {
      "content": "Crear vercel.json con headers de seguridad y CSP",
      "priority": "high",
      "status": "completed"
    },
    {
      "content": "Añadir honeypot + throttle en InscripcionModal.jsx",
      "priority": "high",
      "status": "in_progress"
    },
    {
      "content": "Validación estricta de URL en Inicio.jsx",
      "priority": "medium",
      "status": "pending"
    },
    {
      "content": "Corregir dominio en index.html, robots.txt y sitemap.xml",
      "priority": "medium",
      "status": "pending"
    },
    {
      "content": "Scrub .env.example a placeholders",
      "priority": "high",
      "status": "pending"
    },
    {
      "content": "Ejecutar npm audit y reportar",
      "priority": "low",
      "status": "pending"
    }
  ]
}
```

**Output:**
```
[
  {
    "content": "Crear vercel.json con headers de seguridad y CSP",
    "status": "completed",
    "priority": "high"
  },
  {
    "content": "Añadir honeypot + throttle en InscripcionModal.jsx",
    "status": "in_progress",
    "priority": "high"
  },
  {
    "content": "Validación estricta de URL en Inicio.jsx",
    "status": "pending",
    "priority": "medium"
  },
  {
    "content": "Corregir dominio en index.html, robots.txt y sitemap.xml",
    "status": "pending",
    "priority": "medium"
  },
  {
    "content": "Scrub .env.example a placeholders",
    "status": "pending",
    "priority": "high"
  },
  {
    "content": "Ejecutar npm audit y reportar",
    "status": "pending",
    "priority": "low"
  }
]
```

---

## Assistant (Build · DeepSeek V4 Pro (New) · 7.3s)

**Tool: edit**

**Input:**
```json
{
  "filePath": "C:\\Users\\ASUS\\Desktop\\UIS\\HDSP\\SemanaGeofisica\\6a-semana-geofisica.github.io\\src\\components\\ui\\InscripcionModal.jsx",
  "oldString": "const initialForm = {\n  nombre: '',\n  email: '',\n  afiliacion: '',\n  nivel: '',\n  nivelOtro: '',\n  area: '',\n  desde: '',\n  poster: '',\n  enterado: '',\n  comentarios: '',\n}",
  "newString": "const initialForm = {\n  nombre: '',\n  email: '',\n  afiliacion: '',\n  nivel: '',\n  nivelOtro: '',\n  area: '',\n  desde: '',\n  poster: '',\n  enterado: '',\n  comentarios: '',\n  website: '',\n}\n\n// Anti-spam: mínimo de segundos entre envíos desde un mismo navegador.\nconst MIN_SUBMIT_INTERVAL_MS = 5000"
}
```

**Output:**
```
Edit applied successfully.
```

---

## Assistant (Build · DeepSeek V4 Pro (New) · 7.2s)

**Tool: edit**

**Input:**
```json
{
  "filePath": "C:\\Users\\ASUS\\Desktop\\UIS\\HDSP\\SemanaGeofisica\\6a-semana-geofisica.github.io\\src\\components\\ui\\InscripcionModal.jsx",
  "oldString": "  const panelRef = useRef(null)\n  const previousFocus = useRef(null)",
  "newString": "  const panelRef = useRef(null)\n  const previousFocus = useRef(null)\n  const lastSubmitRef = useRef(0)"
}
```

**Output:**
```
Edit applied successfully.
```

---

## Assistant (Build · DeepSeek V4 Pro (New) · 7.3s)

**Tool: edit**

**Input:**
```json
{
  "filePath": "C:\\Users\\ASUS\\Desktop\\UIS\\HDSP\\SemanaGeofisica\\6a-semana-geofisica.github.io\\src\\components\\ui\\InscripcionModal.jsx",
  "oldString": "  const handleSubmit = async (event) => {\n    event.preventDefault()\n    const nextErrors = validate()",
  "newString": "  const handleSubmit = async (event) => {\n    event.preventDefault()\n\n    // Anti-spam: los bots que rellenan campos ocultos se descartan silenciosamente.\n    if (form.website) {\n      setStatus('success')\n      return\n    }\n\n    // Anti-spam: limita la frecuencia de envíos desde un mismo navegador.\n    const now = Date.now()\n    if (now - lastSubmitRef.current < MIN_SUBMIT_INTERVAL_MS) {\n      return\n    }\n    lastSubmitRef.current = now\n\n    const nextErrors = validate()"
}
```

**Output:**
```
Edit applied successfully.
```

---

## Assistant (Build · DeepSeek V4 Pro (New) · 7.3s)

_Thinking:_

Now add the honeypot hidden input in the form. Let me add it right after the form opens (`<form onSubmit={handleSubmit} noValidate ...>`).

**Tool: edit**

**Input:**
```json
{
  "filePath": "C:\\Users\\ASUS\\Desktop\\UIS\\HDSP\\SemanaGeofisica\\6a-semana-geofisica.github.io\\src\\components\\ui\\InscripcionModal.jsx",
  "oldString": "              <form onSubmit={handleSubmit} noValidate className=\"px-6 py-6 sm:px-8\">\n                <div className=\"grid gap-5 sm:grid-cols-2\">",
  "newString": "              <form onSubmit={handleSubmit} noValidate className=\"px-6 py-6 sm:px-8\">\n                {/* Honeypot: campo oculto para detectar bots. No debe ser visible ni enfocable. */}\n                <div className=\"absolute left-[-9999px] top-auto\" aria-hidden=\"true\">\n                  <label htmlFor=\"hp-website\">No llenar este campo</label>\n                  <input\n                    id=\"hp-website\"\n                    type=\"text\"\n                    name=\"website\"\n                    tabIndex={-1}\n                    autoComplete=\"off\"\n                    value={form.website}\n                    onChange={setField('website')}\n                  />\n                </div>\n                <div className=\"grid gap-5 sm:grid-cols-2\">"
}
```

**Output:**
```
Edit applied successfully.
```

---

## Assistant (Build · DeepSeek V4 Pro (New) · 7.7s)

_Thinking:_

Now the Inicio.jsx URL validation. Replace `window.open` approach with strict validation or anchor. The cleanest: change `abrirLinkedIn` to validate strictly (https + host allowlist) and use `window.open` with noopener/noreferrer. Or better, render an `<a href>` with rel. But Card.jsx uses a button with onClick, and the linkedin data may be empty (empty string for some members). The Card button onClick is `() => abrirLinkedIn(miembro.linkedin)`.

Simplest safe fix: validate with `new URL()` and only allow `https:` protocol, and only allow `linkedin.com` host. If invalid/empty, do nothing.

Let me rewrite abrirLinkedIn:

```js
const abrirLinkedIn = (url) => {
  if (!url) return;
  try {
    const parsed = new URL(url.startsWith('http') ? url : `https://${url}`);
    if (parsed.protocol !== 'https:' || !/^(www\.)?linkedin\.com$/.test(parsed.hostname)) return;
    window.open(parsed.href, '_blank', 'noopener,noreferrer');
  } catch {
    return;
  }
};
```

This is a strict allowlist (https + linkedin.com host). Good.

Let me edit Inicio.jsx.

**Tool: edit**

**Input:**
```json
{
  "filePath": "C:\\Users\\ASUS\\Desktop\\UIS\\HDSP\\SemanaGeofisica\\6a-semana-geofisica.github.io\\src\\components\\pages\\Inicio.jsx",
  "oldString": "  // Función segura para abrir LinkedIn\n  const abrirLinkedIn = (url) => {\n    if (!url) return;\n    const enlaceSeguro = url.startsWith('http') ? url : `https://${url}`;\n    window.open(enlaceSeguro, '_blank', 'noopener,noreferrer');\n  };",
  "newString": "  // Función segura para abrir LinkedIn: solo permite https y el dominio de LinkedIn.\n  const abrirLinkedIn = (url) => {\n    if (!url) return;\n    try {\n      const enlace = new URL(url.startsWith('http') ? url : `https://${url}`);\n      if (enlace.protocol !== 'https:') return;\n      if (!/^(www\\.)?linkedin\\.com$/.test(enlace.hostname)) return;\n      window.open(enlace.href, '_blank', 'noopener,noreferrer');\n    } catch {\n      return;\n    }\n  };"
}
```

**Output:**
```
Edit applied successfully.
```

---

## Assistant (Build · DeepSeek V4 Pro (New) · 8.4s)

_Thinking:_

Now domain fixes. index.html canonical + OG + Twitter use `https://semamnadelageofisica.com/` (typo "semamna..."). Correct domain is `https://semanadelageofisica.com`. Let me fix all occurrences in index.html.

Let me check the exact strings:
- Line 13: `<link rel="canonical" href="https://semamnadelageofisica.com/" />`
- Line 21: `content="https://semamnadelageofisica.com/"` (og:url)
- Line 24: `content="https://semamnadelageofisica.com/og-image.png"` (og:image)
- Line 32: `content="https://semamnadelageofisica.com/"` (twitter:url)
- Line 35: `content="https://semamnadelageofisica.com/og-image.png"` (twitter:image)
- Line 44: `"url": "https://semamnadelageofisica.com/",` (JSON-LD)

I'll do replaceAll on "semamnadelageofisica.com" → "semanadelageofisica.com".

robots.txt: `Sitemap: https://semanadelageofisica/sitemap.xml` → `https://semanadelageofisica.com/sitemap.xml`

sitemap.xml: all `<loc>https://semanadelageofisica/...</loc>` → `https://semanadelageofisica.com/...`. I'll replaceAll "https://semanadelageofisica/" → "https://semanadelageofisica.com/". But careful: that would also match the .com case if there's one. There isn't. All are `https://semanadelageofisica/`. So replaceAll "https://semanadelageofisica/" → "https://semanadelageofisica.com/".

Let me do these edits.

**Tool: edit**

**Input:**
```json
{
  "filePath": "C:\\Users\\ASUS\\Desktop\\UIS\\HDSP\\SemanaGeofisica\\6a-semana-geofisica.github.io\\index.html",
  "oldString": "semamnadelageofisica.com",
  "newString": "semanadelageofisica.com",
  "replaceAll": true
}
```

**Output:**
```
Edit applied successfully.
```

**Tool: edit**

**Input:**
```json
{
  "filePath": "C:\\Users\\ASUS\\Desktop\\UIS\\HDSP\\SemanaGeofisica\\6a-semana-geofisica.github.io\\public\\robots.txt",
  "oldString": "Sitemap: https://semanadelageofisica/sitemap.xml",
  "newString": "Sitemap: https://semanadelageofisica.com/sitemap.xml"
}
```

**Output:**
```
Edit applied successfully.
```

**Tool: edit**

**Input:**
```json
{
  "filePath": "C:\\Users\\ASUS\\Desktop\\UIS\\HDSP\\SemanaGeofisica\\6a-semana-geofisica.github.io\\public\\sitemap.xml",
  "oldString": "https://semanadelageofisica/",
  "newString": "https://semanadelageofisica.com/",
  "replaceAll": true
}
```

**Output:**
```
Edit applied successfully.
```

---

## Assistant (Build · DeepSeek V4 Pro (New) · 7.1s)

_Thinking:_

Now scrub .env.example. Replace real values with placeholders.

**Tool: write**

**Input:**
```json
{
  "content": "# Copia este archivo a .env y completa los valores reales.\n# IMPORTANTE: estos valores se exponen en el bundle del navegador (no son secretos),\n# pero el archivo .env NO debe commitearse (ya está en .gitignore).\n\nVITE_EMAILJS_PUBLIC_KEY=TU_CLAVE_PUBLICA_EMAILJS\nVITE_EMAILJS_SERVICE_ID=TU_SERVICE_ID\nVITE_EMAILJS_TEMPLATE_ASISTENTE_ID=TU_TEMPLATE_ASISTENTE_ID\nVITE_EMAILJS_TEMPLATE_ORGANIZADOR_ID=TU_TEMPLATE_ORGANIZADOR_ID\nVITE_EMAILJS_ORGANIZADOR_EMAIL=tu_correo@organizador.com\nVITE_APPS_SCRIPT_URL=https://script.google.com/macros/s/TU_ID_DEPLOYMENT/exec\n",
  "filePath": "C:\\Users\\ASUS\\Desktop\\UIS\\HDSP\\SemanaGeofisica\\6a-semana-geofisica.github.io\\.env.example"
}
```

**Output:**
```
Wrote file successfully.
```

---

## Assistant (Build · DeepSeek V4 Pro (New) · 7.6s)

**Tool: todowrite**

**Input:**
```json
{
  "todos": [
    {
      "content": "Crear vercel.json con headers de seguridad y CSP",
      "priority": "high",
      "status": "completed"
    },
    {
      "content": "Añadir honeypot + throttle en InscripcionModal.jsx",
      "priority": "high",
      "status": "completed"
    },
    {
      "content": "Validación estricta de URL en Inicio.jsx",
      "priority": "medium",
      "status": "completed"
    },
    {
      "content": "Corregir dominio en index.html, robots.txt y sitemap.xml",
      "priority": "medium",
      "status": "completed"
    },
    {
      "content": "Scrub .env.example a placeholders",
      "priority": "high",
      "status": "completed"
    },
    {
      "content": "Ejecutar npm audit y reportar",
      "priority": "low",
      "status": "in_progress"
    }
  ]
}
```

**Output:**
```
[
  {
    "content": "Crear vercel.json con headers de seguridad y CSP",
    "status": "completed",
    "priority": "high"
  },
  {
    "content": "Añadir honeypot + throttle en InscripcionModal.jsx",
    "status": "completed",
    "priority": "high"
  },
  {
    "content": "Validación estricta de URL en Inicio.jsx",
    "status": "completed",
    "priority": "medium"
  },
  {
    "content": "Corregir dominio en index.html, robots.txt y sitemap.xml",
    "status": "completed",
    "priority": "medium"
  },
  {
    "content": "Scrub .env.example a placeholders",
    "status": "completed",
    "priority": "high"
  },
  {
    "content": "Ejecutar npm audit y reportar",
    "status": "in_progress",
    "priority": "low"
  }
]
```

---

## Assistant (Build · DeepSeek V4 Pro (New) · 34.3s)

**Tool: bash**

**Input:**
```json
{
  "command": "npm audit --json 2>&1",
  "timeout": 180000
}
```

**Output:**
```
{
  "auditReportVersion": 2,
  "vulnerabilities": {
    "sharp": {
      "name": "sharp",
      "severity": "high",
      "isDirect": true,
      "via": [
        {
          "source": 1193725,
          "name": "sharp",
          "dependency": "sharp",
          "title": "sharp: Vulnerabilities in libheif: GHSA-g89c-p67h-r497 and GHSA-2jg2-4ch7-h545",
          "url": "https://github.com/advisories/GHSA-rgj7-g3m4-5g8c",
          "severity": "high",
          "cwe": [
            "CWE-122"
          ],
          "cvss": {
            "score": 0,
            "vectorString": null
          },
          "range": "<0.35.4"
        }
      ],
      "effects": [],
      "range": "<0.35.4",
      "nodes": [
        "node_modules/sharp"
      ],
      "fixAvailable": true
    }
  },
  "metadata": {
    "vulnerabilities": {
      "info": 0,
      "low": 0,
      "moderate": 0,
      "high": 1,
      "critical": 0,
      "total": 1
    },
    "dependencies": {
      "prod": 37,
      "dev": 147,
      "optional": 76,
      "peer": 12,
      "peerOptional": 0,
      "total": 237
    }
  }
}

```

**Tool: bash**

**Input:**
```json
{
  "command": "npm run lint 2>&1",
  "timeout": 120000
}
```

**Output:**
```

> 6a-semana-geofisica@0.0.0 lint
> eslint .


C:\Users\ASUS\Desktop\UIS\HDSP\SemanaGeofisica\6a-semana-geofisica.github.io\src\components\pages\Inicio.jsx
   9:8  error  'Button' is defined but never used          no-unused-vars
  12:7  error  'stats' is assigned a value but never used  no-unused-vars

✖ 2 problems (2 errors, 0 warnings)


```

---

## Assistant (Build · DeepSeek V4 Pro (New) · 16.3s)

_Thinking:_

The lint errors are pre-existing (Button and stats unused in Inicio.jsx), not caused by my changes. Actually, let me check — did I introduce these? No, I only changed the `abrirLinkedIn` function. The `Button` import and `stats` were already unused before my change. Let me verify by checking git diff. Actually these are pre-existing issues (the file was already modified before I started, per git status showing Inicio.jsx modified).

Wait, the git status at the start showed `modified: src/components/pages/Inicio.jsx` and `modified: src/data/Personal.js` BEFORE I made any changes. So there were pre-existing uncommitted modifications. My changes are on top. The lint errors about `Button` and `stats` are pre-existing (unused). Let me confirm they're not from my edit — my edit only touched `abrirLinkedIn`. Yes, pre-existing.

I should not "fix" unrelated lint issues unless they block. But the user asked to protect the site. These lint errors are pre-existing and not security-related. However, `npm run lint` is a verification step. The errors existed before. Let me check if my changes introduced any new lint errors — they didn't (the errors are Button/stats unused).

Actually, let me double-check: was `Button` used in Inicio.jsx before? Looking at the file I read earlier, Inicio.jsx imports Button (line 9) and defines `stats` (line 12) but neither is used in the JSX. So yes pre-existing.

I'll leave those pre-existing lint errors as-is (not my scope, and not security). But I should mention them. Actually, they might want a clean lint. But it's out of scope. I'll note it.

For npm audit: 1 high vulnerability in `sharp` (dev dependency, used only for image conversion script). Fix available: upgrade to >=0.35.4. Current is ^0.35.3. This is a dev dependency (build tool for converting images to AVIF), not shipped to users. Severity high but it's a libheif vulnerability in sharp. I should upgrade it. Let me check: package.json has `"sharp": "^0.35.3"`. Fix is >=0.35.4. I can bump to ^0.35.4 (or latest 0.35.x). Let me update package.json to ^0.35.4. But wait — is 0.35.4 released? The audit says fixAvailable true and range <0.35.4. Let me update to ^0.35.4 and run npm install to update lockfile.

Actually, let me be careful about running npm install (it modifies package-lock.json). The user said "solo código del sitio". Upgrading a dev dependency for a security fix is within scope (F-09). I'll update the version and run npm install to sync lockfile.

Let me check the latest sharp version. The advisory says fix in <0.35.4 means fixed in 0.35.4. Let me bump to ^0.35.4. But maybe there's a newer 0.35.x or 0.36. I'll just use ^0.35.4 to be safe and minimal. Actually, let me check what `npm view sharp version` gives. Let me do it.

Actually, simpler: run `npm install -D sharp@^0.35.4` which updates both package.json and lockfile. But that could also pick 0.35.5 etc. That's fine, it fixes the vuln.

Let me do that. But first, is sharp even used at runtime? It's in devDependencies and used by scripts/convert-to-avif.mjs. So it's a dev/build tool. Still worth fixing.

Let me run the install.

**Tool: bash**

**Input:**
```json
{
  "command": "npm view sharp version 2>&1",
  "timeout": 60000
}
```

**Output:**
```
0.35.4

```

---

## Assistant (Build · DeepSeek V4 Pro (New) · 15.0s)

---

## User

continua con lo que estabamos haciendo

---

## Assistant (Build · MiMo V2.5 Free · 32.4s)

---

