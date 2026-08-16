Crie o **front-end mobile completo do aplicativo ELEMENT CORE**, seguindo a identidade visual e o fluxo apresentados na referência fornecida.

O produto é um aplicativo de treinamento físico focado em **performance funcional, força, mobilidade, equilíbrio e controle corporal**, com aplicação em esportes como grappling, surf, snowboard, wake, kite e preparação física geral.

A experiência deve transmitir:

**DISCIPLINA · PERFORMANCE · PROGRESSÃO · CONTROLE · FORÇA**

O aplicativo não deve parecer uma academia genérica ou um app fitness tradicional. Deve ter estética de **sistema de performance premium**, inspirado em interfaces esportivas, equipamentos técnicos, HUDs discretos, produtos outdoor de alto nível e dashboards de performance.

---

# 1. IDENTIDADE VISUAL

## Conceito geral

Nome:

**ELEMENT CORE**

Tagline principal:

**Train. Evolve. Become.**

Tagline institucional:

**Built on the elements. Engineered for performance.**

A interface deve combinar:

* fundo predominantemente preto;
* superfícies em grafite muito escuro;
* dourado/âmbar metálico como cor de destaque;
* branco levemente quebrado para textos;
* detalhes inspirados em metal, pedra, fogo, montanha e materiais técnicos;
* linhas geométricas discretas;
* hexágonos como elemento recorrente;
* bordas finas;
* sombras suaves;
* gradientes escuros;
* textura extremamente discreta.

Evitar aparência excessivamente gamer.

O resultado deve ser:

**premium + técnico + atlético + minimalista.**

---

# 2. PALETA

Utilizar aproximadamente:

**Background principal**
`#080909`

**Surface**
`#101112`

**Surface elevada**
`#151617`

**Border**
`#2A2A28`

**Primary Gold**
`#C58A22`

**Gold Highlight**
`#E2A93B`

**Gold Dark**
`#765015`

**Primary Text**
`#F1EFE9`

**Secondary Text**
`#A6A39C`

**Muted Text**
`#6D6C68`

**Success**
`#81A66B`

**Warning**
`#D5A642`

**Danger**
`#A4473D`

Usar o dourado principalmente para:

* CTAs;
* progresso;
* seleção;
* ícones ativos;
* indicadores;
* score;
* elementos importantes.

Nunca transformar toda a interface em dourado.

---

# 3. TIPOGRAFIA

A tipografia deve ter aspecto moderno e técnico.

Para headings:

* uppercase;
* peso 600–700;
* letter spacing entre `0.08em` e `0.16em`.

Exemplo:

**TODAY'S TRAINING**

Para textos:

* fonte sans-serif limpa;
* alta legibilidade;
* peso 400–500.

Criar hierarquia clara:

### Display

32–36 px

### H1

26–30 px

### H2

20–24 px

### H3

16–18 px

### Body

14–16 px

### Caption

11–13 px

### Micro label

10–11 px uppercase

---

# 4. GRID E ESPAÇAMENTO

O projeto é **mobile first**.

Frame-base:

**390 × 844 px**

Também garantir adaptação para:

* 375 × 812;
* 393 × 852;
* 430 × 932.

Utilizar sistema de spacing de 4 px.

Valores principais:

`4 / 8 / 12 / 16 / 20 / 24 / 32 / 40 / 48`

Margem lateral padrão:

**20 px**

Cards:

* border radius entre 12 e 16 px;
* borda de 1 px;
* background levemente mais claro que o fundo.

Botões:

* altura entre 48 e 52 px;
* radius de 8–10 px.

---

# 5. COMPONENTES DO DESIGN SYSTEM

Criar componentes reutilizáveis.

## Button

Variantes:

### Primary

Fundo dourado.

Texto preto.

### Secondary

Fundo transparente.

Border `#45433E`.

Texto branco.

### Ghost

Sem borda.

Texto secundário.

### Icon Button

Formato quadrado ou circular.

---

## Card

Criar variantes:

* Default Card
* Interactive Card
* Selected Card
* Training Card
* Metric Card
* Challenge Card
* Assessment Card

Estado selecionado:

* border dourada;
* leve glow interno;
* ícone dourado.

---

## Input

Campos escuros com:

* label superior;
* placeholder;
* focus dourado;
* estado error;
* suporte para password visibility.

---

## Progress

Criar:

* progress bar;
* circular score;
* segmented progress;
* weekly bars;
* XP progress.

---

## Chips

Usar para:

* nível;
* dificuldade;
* músculos;
* categorias;
* duração;
* status.

---

## Navigation

Bottom navigation fixa com:

**Home
Training
Mobility
Progress
Challenges
Profile**

Usar cinco itens principais visíveis e permitir que Profile apareça conforme a estrutura final.

O item ativo usa dourado.

---

# 6. FLUXO DE ENTRADA

Criar o fluxo completo:

**Splash → Welcome → Account Setup → Goal → Discipline → Assessment → Training Profile → Personalized Plan → Dashboard**

Adicionar indicador discreto de progressão no onboarding quando necessário.

---

# 7. SCREEN 01 — SPLASH

Tela extremamente minimalista.

Centro:

**logo ELEMENT CORE**

Abaixo:

**Built on the elements.
Engineered for performance.**

Background quase preto.

Pode existir uma textura abstrata muito discreta no fundo lembrando:

* rocha;
* montanha;
* metal;
* fumaça.

Criar animação conceitual de entrada:

logo aparece → símbolo recebe highlight dourado → transição.

---

# 8. SCREEN 02 — WELCOME

Topo:

**WELCOME TO
ELEMENT CORE**

Subtítulo:

**Train. Evolve. Become.**

No centro colocar uma imagem hero de atleta em preto e branco, parcialmente integrada ao fundo.

Texto:

**Built on the elements.
Engineered for performance.**

CTA:

**CREATE ACCOUNT**

Secondary:

**SIGN IN**

Rodapé:

**Already part of Element Core? Sign in**

---

# 9. SCREEN 03 — CREATE ACCOUNT

Título:

**CREATE ACCOUNT**

Campos:

* Full name
* Email
* Password

Checkbox:

**I agree to the Terms of Use and Privacy Policy**

CTA:

**CREATE ACCOUNT**

Separador:

**OR CONTINUE WITH**

Botões sociais:

* Apple
* Google

Evitar Facebook se possível para manter interface mais premium.

Link inferior:

**Already have an account? Sign in**

---

# 10. SCREEN 04 — PRIMARY GOAL

Título:

**WHAT IS YOUR PRIMARY FOCUS?**

Subtítulo:

**Select up to 2 areas**

Criar grid 2 × 2.

## POWER

Ícone:
halter/barbell.

Descrição:

**Strength · Explosiveness**

## FLEX

Ícone:
movimento/articulação.

Descrição:

**Mobility · Range**

## BALANCE

Ícone:
stack/balance.

Descrição:

**Stability · Coordination**

## CORE

Ícone:
hexágono/core.

Descrição:

**Control · Foundation**

Selecionar cards altera border para dourado.

CTA:

**CONTINUE**

---

# 11. SCREEN 05 — TRAINING PATH

Título:

**WHAT'S YOUR TRAINING PATH?**

Subtítulo:

**Choose the discipline that best represents your training.**

Criar três grandes cards horizontais.

### GRAPPLING

Imagem:
atleta de luta agarrada.

Descrição:

**Control. Pressure. Dominate.**

Modalidades:

BJJ · Wrestling · Sambo

---

### BOARD-RIDE

Imagem:
atleta de surf / board.

Descrição:

**Flow. Balance. Adapt.**

Modalidades:

Surf · Snow · Wake · Kite

---

### GENERAL

Imagem:
atleta funcional.

Descrição:

**Build complete performance.**

Cada card deve ter imagem escura, overlay e texto sobreposto.

CTA:

**CONTINUE**

---

# 12. SCREEN 06 — BASELINE ASSESSMENT

Título:

**BASELINE ASSESSMENT**

Descrição:

**Let's understand your starting point.**

Mostrar quatro módulos:

### MOBILITY

Range & movement

### STABILITY

Control & balance

### CONTROL

Body awareness

### STRENGTH

Force & endurance

Cada módulo possui:

* ícone;
* nome;
* descrição;
* chevron.

CTA:

**START ASSESSMENT**

Mostrar:

**Approximately 5–7 minutes**

---

# 13. TESTES DO ASSESSMENT

Criar telas individuais para avaliação.

## Mobility Test

Exemplo:

**Deep Squat Mobility**

Mostrar ilustração/vídeo do exercício.

Pergunta:

**How comfortably can you perform this movement?**

Opções:

1. Unable
2. Limited
3. Comfortable
4. Full range

---

## Stability Test

**Single-Leg Balance**

Timer:

`00:30`

Botão:

**START TIMER**

Depois solicitar resultado.

---

## Control Test

**Dead Bug Control**

Mostrar número de repetições controladas.

---

## Strength Test

**Push-Up Assessment**

Pergunta:

**How many clean repetitions can you perform?**

Input numérico.

---

# 14. SCREEN 07 — TRAINING PROFILE

Título:

**TELL US ABOUT YOUR TRAINING**

Campos:

### EXPERIENCE LEVEL

Dropdown:

* Beginner
* Intermediate
* Advanced
* Athlete

### WEEKLY AVAILABILITY

* 2–3 hours
* 3–4 hours
* 4–5 hours
* 5+ hours

### SESSION LENGTH

* 20 min
* 30 min
* 45 min
* 60 min

### PREFERRED DAYS

Mostrar:

`S M T W T F S`

Usuário pode selecionar vários dias.

CTA:

**CONTINUE**

---

# 15. SCREEN 08 — PERSONALIZED PLAN

Tela de loading inicial:

**BUILDING YOUR PLAN**

Criar etapas animadas:

`Analyzing assessment`

`Mapping your weaknesses`

`Balancing Power / Flex / Balance`

`Creating your weekly structure`

Finalizar com:

**YOUR PLAN IS READY**

---

Mostrar card:

**STARTING LEVEL**

**FOUNDATION I**

Ícone hexagonal.

Mensagem:

**Your training plan was built around your goals, assessment and availability.**

---

## WEEKLY ROUTINE

Exemplo:

M T W T F S S

Mostrar barras verticais representando carga.

Exemplo:

Monday — Strength
Tuesday — Mobility
Wednesday — Control
Thursday — Recovery
Friday — Performance

CTA:

**VIEW PLAN**

Secondary:

**START FIRST SESSION**

---

# 16. HOME / DASHBOARD

Essa é a tela mais importante.

Header:

**WELCOME BACK,
ALEX**

À direita:

* notificações;
* avatar.

---

## CORE SCORE

Card grande central.

Mostrar indicador circular:

**78%**

Label:

**CORE SCORE**

Status:

**STRONG**

Abaixo:

`+3% this week`

---

## SCORE BREAKDOWN

Quatro métricas:

**POWER 76**

**FLEX 68**

**BALANCE 81**

**CORE 84**

Usar mini progress bars.

---

## STREAK

Card:

ícone fire.

**WEEKLY STREAK**

**12 DAYS**

Texto secundário:

**Best: 18 days**

---

## TODAY'S TRAINING

Card hero.

Imagem escura de atleta.

Título:

**UPPER BODY POWER**

Categoria:

**Strength Focus**

Duração:

**42 MIN**

Dificuldade:

**INTERMEDIATE**

Texto:

**6 exercises · 3 rounds**

CTA:

**START TRAINING**

---

## WEEKLY PROGRESS

Mostrar dias da semana.

Exemplo:

M ✓
T ✓
W ✓
T ●
F ○
S ○
S ○

Indicador:

**3 / 5 sessions completed**

---

## NEXT OBJECTIVE

Card:

**NEXT CHECKPOINT**

**Foundation I → Foundation II**

Progress:

`72%`

Texto:

**Complete 4 more sessions and pass your mobility checkpoint.**

---

# 17. TRAINING TAB

Header:

**TRAINING**

Subtítulo:

**Build your performance.**

Filtros:

* Today
* Programs
* Strength
* Core
* Conditioning
* Recovery

---

## Today's Session

Card destacado.

---

## PROGRAMS

Mostrar:

### FOUNDATION

**Build the base.**

Progress:
`7 / 12 sessions`

---

### POWER DEVELOPMENT

Locked.

Texto:

**Complete Foundation II**

---

### CORE CONTROL

Progress.

---

## Training library

Cards menores por categoria.

---

# 18. WORKOUT DETAIL

Título:

**UPPER BODY POWER**

Informações:

**42 MIN**

**INTERMEDIATE**

**STRENGTH**

Objetivos:

* explosive strength;
* shoulder control;
* core stabilization.

---

## Exercise List

Exemplo:

1. Scapular Push-Up
2. Pike Push-Up
3. Explosive Push-Up
4. Plank Shoulder Tap
5. Hollow Body Hold
6. Bear Crawl

Cada item mostra:

* duração/reps;
* número de sets;
* target muscle.

CTA sticky:

**START WORKOUT**

---

# 19. WORKOUT PLAYER

Criar uma interface extremamente focada.

Topo:

`Exercise 3 / 6`

Progress bar.

Imagem/vídeo grande.

Título:

**EXPLOSIVE PUSH-UP**

Metadata:

`8 REPS`

`SET 2 OF 3`

---

## TIMER

Grande:

`00:37`

---

## Coaching

Card:

**COACHING CUE**

**Drive through the floor and keep your core locked throughout the movement.**

---

## Target

Chips:

CHEST

SHOULDERS

CORE

---

Controles:

Previous

Pause

Next

Botão secundário:

**VIEW TECHNIQUE**

---

# 20. WORKOUT COMPLETE

Tela de conclusão.

Headline:

**SESSION COMPLETE**

Mostrar:

**+320 XP**

**42 min**

**6 exercises**

**428 kcal** — somente se esse dado realmente fizer parte do produto.

Mostrar evolução:

**CORE SCORE**

`78 → 79`

Mensagem:

**Consistency builds capacity.**

CTA:

**VIEW PERFORMANCE**

Secondary:

**DONE**

---

# 21. MOBILITY TAB

Header:

**MOBILITY**

Subtítulo:

**Move better. Perform longer.**

Criar:

## DAILY MOBILITY

Card:

**8 MIN RESET**

CTA:

**START**

---

## BODY AREAS

Grid:

* Shoulders
* Spine
* Hips
* Knees
* Ankles
* Full Body

---

## Mobility Score

Mostrar:

**68 / 100**

Texto:

**Moderate**

Sugestão:

**Hip and ankle mobility require attention.**

---

# 22. PROGRESS TAB

Header:

**PROGRESS**

Criar seletor:

`7D / 30D / 90D / ALL`

---

## CORE SCORE TREND

Gráfico de linha.

---

## PERFORMANCE METRICS

Power

Flex

Balance

Core

Cada métrica mostra:

valor atual;

diferença;

mini chart.

---

## TRAINING VOLUME

Card:

**14 sessions**

**8h 42m**

**+18% vs last month**

---

## PERSONAL BESTS

Exemplo:

Push-Ups
`42 reps`

Single-Leg Balance
`1m 28s`

Hollow Hold
`1m 02s`

---

# 23. CHALLENGES TAB

Header:

**CHALLENGES**

Hero:

**30 DAY CORE CONTROL**

Progress:

`18 / 30`

Reward:

`+2,000 XP`

---

Criar categorias:

**ACTIVE**

**WEEKLY**

**COMMUNITY**

**COMPLETED**

Exemplos:

### POWER WEEK

Complete 3 power sessions.

### MOBILITY MASTER

Complete 5 mobility sessions.

### PERFECT WEEK

Train every scheduled day.

---

# 24. PROFILE TAB

Header:

avatar.

**ALEX MORGAN**

Level:

**LEVEL 12**

XP:

`8,420 / 10,000 XP`

---

Menu:

* Training Profile
* Goals
* Assessment History
* Notifications
* Connected Devices
* Subscription
* Settings
* Help
* Privacy
* Sign Out

---

# 25. GAMIFICATION

Criar sistema visual consistente.

## XP

Mostrar ganho depois de ações.

Exemplo:

`+120 XP`

---

## LEVELS

Exemplo:

Level 1–10:

**Foundation**

Level 11–20:

**Control**

Level 21–30:

**Performance**

Level 31–40:

**Mastery**

---

## ACHIEVEMENTS

Badges hexagonais.

Exemplo:

### FIRST STEP

Complete your first session.

### CONSISTENCY

7-day streak.

### CORE BUILDER

Complete 20 core sessions.

### BALANCED

Reach 75+ in all metrics.

---

# 26. SISTEMA DE NÍVEIS DE TREINO

Usar progressão em cinco estágios.

### LEVEL 1

FOUNDATION

### LEVEL 2

CONTROL

### LEVEL 3

BUILD

### LEVEL 4

PERFORMANCE

### LEVEL 5

MASTERY

Não liberar automaticamente por XP.

O usuário precisa completar checkpoints.

Exemplo:

**CHECKPOINT REQUIRED**

* Strength ✓
* Mobility ✓
* Balance ✓
* Control pending

CTA:

**START CONTROL TEST**

---

# 27. NOTIFICATIONS

Criar notification center.

Exemplos:

**Training Reminder**

Your Upper Body Power session is ready.

**Checkpoint Available**

You've unlocked the Foundation II assessment.

**Streak**

One more session to reach a 14-day streak.

---

# 28. EMPTY STATES

Criar empty states.

Exemplo:

**NO TRAINING HISTORY YET**

Complete your first session to begin tracking performance.

CTA:

**START TRAINING**

---

# 29. LOADING STATES

Criar skeletons.

Evitar spinners grandes.

Skeleton cards devem preservar a estrutura do layout.

---

# 30. ERROR STATES

Exemplo:

**WE COULDN'T LOAD YOUR TRAINING**

Check your connection and try again.

CTA:

**TRY AGAIN**

---

# 31. MICROINTERAÇÕES

Criar especificações visuais para:

* button press;
* card selection;
* progress animation;
* XP gain;
* workout completed;
* checkpoint unlocked;
* streak increment;
* dashboard score update.

As animações devem ser rápidas:

`150–300ms`

Nada infantil ou exagerado.

---

# 32. PRINCÍPIOS DE UX

A experiência deve sempre responder:

**What should I do now?**

Evitar dashboard cheio de informações sem prioridade.

Hierarquia principal da Home:

1. Today's Training
2. Core Score
3. Weekly Progress
4. Next Checkpoint
5. Metrics

O usuário deve conseguir iniciar um treino em no máximo:

**2 interações a partir do Dashboard.**

---

# 33. ESTRUTURA DE NAVEGAÇÃO

Bottom tabs:

### HOME

Dashboard e treino de hoje.

### TRAINING

Programas, sessões e biblioteca.

### MOBILITY

Mobilidade, recovery e movement library.

### PROGRESS

Scores, gráficos e histórico.

### CHALLENGES

Missões e desafios.

O Profile pode ser acessado pelo avatar no header para evitar seis tabs inferiores se necessário.

---

# 34. RESPONSIVIDADE

Apesar de ser mobile first, estruturar componentes de forma que possam futuramente funcionar em:

* tablet;
* web dashboard;
* desktop.

No desktop, limitar conteúdo principal aproximadamente a:

`480–640 px`

em telas de treino individuais.

Dashboards podem usar grid maior.

---

# 35. ACESSIBILIDADE

Garantir:

* contraste WCAG adequado;
* touch targets mínimos de 44 px;
* nunca depender apenas de cor para indicar estado;
* labels em inputs;
* estados focus;
* suporte a dynamic text;
* ícones sempre acompanhados de significado acessível.

---

# 36. ESTRUTURA FRONT-END

Organizar a implementação considerando arquitetura moderna de componentes.

Estrutura conceitual:

```text
app
├── onboarding
│   ├── welcome
│   ├── account
│   ├── goals
│   ├── discipline
│   ├── assessment
│   ├── profile
│   └── plan
│
├── home
├── training
├── mobility
├── progress
├── challenges
└── profile
```

Componentes:

```text
components
├── ui
├── cards
├── charts
├── training
├── assessment
├── navigation
├── gamification
└── feedback
```

---

# 37. COMPONENTES IMPORTANTES

Criar como componentes reutilizáveis:

`AppHeader`

`BottomNavigation`

`PrimaryButton`

`SecondaryButton`

`MetricCard`

`CoreScore`

`TrainingCard`

`ProgramCard`

`ProgressRing`

`WeeklyTracker`

`LevelBadge`

`XpIndicator`

`AchievementBadge`

`CheckpointCard`

`ExerciseCard`

`WorkoutTimer`

`AssessmentCard`

`DisciplineCard`

`GoalCard`

`SectionHeader`

`EmptyState`

`SkeletonCard`

---

# 38. DADOS MOCKADOS

Utilizar dados realistas no protótipo.

Usuário:

**Alex Morgan**

Training Path:

**Grappling**

Level:

**Foundation I**

Core Score:

**78**

Power:

**76**

Flex:

**68**

Balance:

**81**

Core:

**84**

Streak:

**12 days**

XP:

**8,420**

Weekly sessions:

**3 / 5**

Today's session:

**Upper Body Power**

Duration:

**42 min**

Difficulty:

**Intermediate**

---

# 39. SENSAÇÃO DO PRODUTO

O produto deve parecer uma combinação entre:

**performance lab + training coach + progression system.**

Não criar estética de:

* academia comercial;
* app de dieta;
* app fitness feminino;
* bodybuilding tradicional;
* videogame;
* interface militar exagerada.

ELEMENT CORE deve parecer uma metodologia própria.

A mensagem implícita deve ser:

**Você não está apenas fazendo exercícios.
Você está construindo capacidade física progressivamente.**

---

# 40. RESULTADO ESPERADO NO FIGMA

Crie:

* todas as telas descritas;
* componentes reutilizáveis;
* Auto Layout;
* variants;
* states;
* design tokens;
* estilos de texto;
* estilos de cores;
* navegação clicável;
* protótipo do onboarding;
* fluxo Dashboard → Training → Workout Player → Session Complete;
* fluxo Progress → Checkpoint;
* fluxo Challenge;
* estados loading / empty / error.

Também criar uma página separada chamada:

**ELEMENT CORE — DESIGN SYSTEM**

contendo:

* logo;
* colors;
* typography;
* buttons;
* inputs;
* cards;
* chips;
* icons;
* navigation;
* progress components;
* badges;
* states.

E uma página:

**ELEMENT CORE — APP FLOW**

mostrando visualmente:

**Onboarding → Dashboard → Training → Progression**

O resultado final deve preservar a linguagem visual da referência enviada, mas transformar o conceito em uma interface de produto real, consistente, escalável e pronta para desenvolvimento.
