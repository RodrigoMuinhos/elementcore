O aplicativo ainda está **excessivamente mockado e incompleto**. A próxima versão deve transformar o conceito atual em um produto muito mais funcional, profundo e próximo de uma aplicação real de acompanhamento físico, nutricional e de performance.

Não quero apenas telas conceituais. Quero **fluxos completos, estados reais de uso, áreas de cadastro, acompanhamento, mídia, evolução, gamificação e interação entre aluno e personal trainer**.

## 1. EXERCÍCIOS COM FOTO, VÍDEO E EXECUÇÃO DO PERSONAL

Cada exercício deve possuir uma tela própria e completa.

Não usar apenas nome, ícone ou card genérico.

Cada exercício precisa ter:

* foto real ou imagem de referência do exercício;
* área principal para reprodução de vídeo;
* vídeo demonstrativo do personal executando o movimento;
* thumbnail antes da reprodução;
* botão play;
* opção fullscreen;
* duração do vídeo;
* possibilidade de pausar, avançar e repetir;
* instruções técnicas;
* músculos trabalhados;
* séries;
* repetições;
* tempo de execução;
* descanso;
* nível de dificuldade;
* equipamento necessário;
* erros comuns;
* observações do personal.

Exemplo de estrutura:

**BARBELL SQUAT**

`Strength · Lower Body`

[ FOTO / THUMBNAIL DO EXERCÍCIO ]

[ ▶ WATCH TECHNIQUE ]

**4 SETS × 8 REPS**

**REST: 90 SEC**

### TARGET MUSCLES

Quadriceps · Glutes · Core

### COACH INSTRUCTIONS

Keep your chest elevated, maintain spinal control and drive through the floor.

### COMMON MISTAKES

* knees collapsing inward;
* losing lumbar control;
* excessive forward lean.

O aluno deve conseguir entender **como executar o exercício sem precisar sair do aplicativo**.

---

# 2. VÍDEOS DO PERSONAL TRAINER

Criar uma área específica para conteúdos enviados pelo personal.

O personal poderá associar um vídeo a:

* exercício;
* sessão;
* mobilidade;
* correção técnica;
* aquecimento;
* orientação nutricional;
* feedback individual.

Exemplo:

**COACH VIDEO**

> Rodrigo left a technique note for this exercise.

[ ▶ WATCH VIDEO ]

Também deve existir uma biblioteca:

**COACH CONTENT**

com:

* Exercise Technique;
* Mobility;
* Nutrition;
* Recovery;
* Training Tips;
* Personalized Feedback.

---

# 3. DIETA E NUTRIÇÃO

Adicionar um módulo completo:

**NUTRITION**

Não quero apenas uma dieta estática em PDF ou uma lista simples de alimentos.

O módulo deve permitir acompanhamento diário.

Bottom navigation ou menu:

**Nutrition**

Página principal:

**TODAY'S NUTRITION**

Mostrar:

* calorias planejadas;
* calorias registradas;
* proteínas;
* carboidratos;
* gorduras;
* água;
* refeições concluídas.

Exemplo:

**DAILY TARGET**

`2,450 kcal`

**1,820 kcal consumed**

Progress bar.

Macros:

**PROTEIN**
`132 / 180 g`

**CARBS**
`186 / 260 g`

**FAT**
`52 / 75 g`

---

# 4. REGISTRO DE REFEIÇÃO POR FOTO

Essa funcionalidade é importante.

O aluno deve poder fotografar o próprio prato diretamente pelo aplicativo.

CTA:

**ADD MEAL**

Opções:

* Take Photo;
* Upload Photo;
* Add Manually.

Fluxo:

**Nutrition → Add Meal → Camera → Preview → Confirm → Meal Log**

Depois da foto:

**WHAT MEAL IS THIS?**

* Breakfast;
* Lunch;
* Snack;
* Dinner;
* Other.

Permitir também:

**ADD NOTES**

Exemplo:

> Chicken, rice, beans, salad and vegetables.

A foto deve aparecer posteriormente no histórico.

Exemplo:

### LUNCH

12:45 PM

[ FOTO DO PRATO ]

**620 kcal**

Protein: 42 g
Carbs: 71 g
Fat: 18 g

Caso não exista análise automática de imagem no MVP, deixar a estrutura preparada para integração futura com IA.

O personal também deve conseguir visualizar as refeições registradas pelo aluno.

---

# 5. FOOD JOURNAL

Criar uma timeline diária.

### TODAY

**08:15 — Breakfast**

[photo]

**12:42 — Lunch**

[photo]

**16:20 — Snack**

[photo]

**20:10 — Dinner**

[photo]

Permitir navegar entre:

`DAY / WEEK / MONTH`

Mostrar:

**NUTRITION CONSISTENCY**

`82%`

---

# 6. GAMIFICAÇÃO

O aplicativo precisa ser realmente gamificado.

Não utilizar apenas badges decorativos.

O sistema deve incentivar comportamento positivo e consistência.

O usuário recebe pontos por:

* completar treino;
* completar mobilidade;
* cumprir dieta;
* registrar refeições;
* beber água;
* manter sequência de dias;
* realizar assessment;
* melhorar uma métrica;
* completar challenge;
* bater recorde pessoal.

Nome da pontuação:

**CORE XP**

Exemplo:

**WORKOUT COMPLETE**

`+320 CORE XP`

**MEAL LOGGED**

`+20 CORE XP`

**PERFECT TRAINING WEEK**

`+500 CORE XP`

---

# 7. SISTEMA DE RECOMPENSAS

Criar uma página:

**REWARDS**

Exibir:

**AVAILABLE CORE XP**

`8,420 XP`

Recompensas podem ser:

* badges;
* níveis;
* achievements;
* conteúdos especiais;
* workouts especiais;
* desafios;
* avatar items;
* descontos;
* sessões bônus;
* benefícios definidos pela academia/personal.

Exemplo:

### 10,000 XP

**PERFORMANCE SESSION**

Unlock one exclusive performance workout.

### 15,000 XP

**COACH REVIEW**

Unlock a performance review.

Deixar a estrutura flexível para que o administrador possa definir recompensas posteriormente.

---

# 8. LEVEL SYSTEM

Criar níveis visíveis.

Exemplo:

**LEVEL 01**
Foundation

**LEVEL 02**
Control

**LEVEL 03**
Build

**LEVEL 04**
Performance

**LEVEL 05**
Mastery

O dashboard deve mostrar:

**LEVEL 12**

`8,420 / 10,000 XP`

Progress bar.

Ao subir de nível:

**LEVEL UP**

**CONTROL II**

Adicionar uma microanimação premium, sem estética infantil ou exageradamente gamer.

---

# 9. MÉTODO CHALLENGE — 90 DIAS

Criar um módulo central chamado:

# THE 90 DAY CHALLENGE

Esse desafio deve ser um dos grandes diferenciais do ELEMENT CORE.

Objetivo:

acompanhar a transformação física e de performance do aluno durante **90 dias**.

Criar página:

**90 DAY CHALLENGE**

Mostrar:

**DAY 34 / 90**

Progress:

`38%`

Mensagem:

**56 DAYS REMAINING**

---

# 10. ETAPAS DO CHALLENGE

Dividir o challenge em fases.

### PHASE 01

Foundation

Days 1–15

### PHASE 02

Adaptation

Days 16–30

### PHASE 03

Build

Days 31–50

### PHASE 04

Performance

Days 51–70

### PHASE 05

Evolution

Days 71–90

Mostrar visualmente onde o usuário está.

---

# 11. DASHBOARD DO CHALLENGE

Mostrar:

**CURRENT DAY**

Day 34

**TRAINING COMPLETION**

`91%`

**NUTRITION CONSISTENCY**

`84%`

**MOBILITY**

`+12%`

**STRENGTH**

`+18%`

**BODY WEIGHT**

`-4.2 kg`

**CORE SCORE**

`62 → 78`

---

# 12. BEFORE / DURING / AFTER

O Challenge precisa registrar evolução visual.

No dia 1:

**STARTING PHOTOS**

* Front;
* Side;
* Back.

Permitir tirar as fotos pelo aplicativo.

Durante o desafio:

Day 30

Day 60

Day 90

Criar comparação:

**DAY 1 ↔ DAY 30**

slider visual ou comparação lado a lado.

Também criar:

**PROGRESS PHOTOS**

com timeline.

As imagens são privadas e só podem ser vistas pelo aluno e profissionais autorizados.

---

# 13. CHECKPOINTS DO CHALLENGE

Criar checkpoints obrigatórios:

### DAY 1

Initial Assessment

### DAY 15

Foundation Check

### DAY 30

Performance Review

### DAY 45

Midpoint Assessment

### DAY 60

Progress Review

### DAY 75

Final Preparation

### DAY 90

Final Assessment

Cada checkpoint pode solicitar:

* peso;
* medidas;
* fotos;
* testes físicos;
* observações;
* percepção de esforço;
* recuperação;
* sono;
* alimentação.

---

# 14. ANAMNESE E FICHA DO ALUNO

Adicionar um módulo profissional:

**HEALTH PROFILE**

ou:

**ANAMNESIS**

Essa área deve existir tanto para o aluno quanto para o personal autorizado.

Ela não pode ser apenas um pequeno formulário.

Criar uma ficha completa.

---

# 15. DADOS PESSOAIS

Campos:

* Full Name
* Date of Birth
* Gender — opcional conforme política do produto
* Height
* Weight
* Occupation
* Emergency Contact

---

# 16. OBJETIVO

Pergunta:

**WHAT IS YOUR MAIN GOAL?**

Opções:

* Weight Loss
* Muscle Gain
* Strength
* Performance
* Mobility
* Conditioning
* Rehabilitation Support
* General Health
* Sport Performance

Permitir múltiplos objetivos.

---

# 17. HISTÓRICO DE TREINO

Perguntas:

**Do you currently exercise?**

Yes / No

**How often?**

* 1–2x/week
* 3–4x/week
* 5–6x/week
* Daily

**Previous training experience**

Campo aberto.

---

# 18. LESÕES E LIMITAÇÕES

Criar uma seção:

**INJURIES & LIMITATIONS**

Pergunta:

**Do you currently have any injury, pain or physical limitation?**

Yes / No

Caso seja Yes:

Selecionar região corporal:

* Neck
* Shoulder
* Elbow
* Wrist
* Back
* Hip
* Knee
* Ankle
* Other

Campo:

**Describe the injury or limitation**

Campo:

**When did it start?**

Campo:

**Has this been medically evaluated?**

Yes / No

Campo:

**Movement restrictions**

Isso deve ficar visível para o personal durante a prescrição do treino.

---

# 19. HISTÓRICO DE SAÚDE

Criar:

**HEALTH HISTORY**

Perguntas configuráveis relacionadas a condições relevantes para prática de exercício.

Exemplo:

* cardiovascular condition;
* high blood pressure;
* diabetes;
* respiratory condition;
* previous surgery;
* chronic pain;
* orthopedic condition;
* other relevant condition.

Permitir:

**Other**

e campo aberto.

Não fazer diagnóstico automático.

O aplicativo apenas registra informações fornecidas pelo usuário para acompanhamento profissional.

---

# 20. MEDICAÇÕES

Adicionar:

**MEDICATIONS**

Pergunta:

**Do you currently use any medication?**

Yes / No

Caso positivo:

**Medication name**

**Reason / indication**

**Frequency**

**Prescribed by a healthcare professional?**

Yes / No

**Additional notes**

---

# 21. ANABOLIZANTES E OUTRAS SUBSTÂNCIAS

Criar essa área de maneira profissional, confidencial e sem julgamento.

Título:

**PERFORMANCE-RELATED SUBSTANCES**

Pergunta:

**Do you currently use or have you recently used substances that may affect training, recovery or body composition?**

Categorias:

* anabolic-androgenic steroids;
* hormone-related medication;
* stimulants;
* other performance-related substances;
* prefer not to answer.

Caso selecionado, permitir ao usuário informar detalhes voluntariamente.

Essa informação deve ser tratada como **dado sensível** e ter controle de acesso.

---

# 22. MEDICAÇÕES PARA CONTROLE DE PESO

Criar seção própria:

**WEIGHT MANAGEMENT MEDICATIONS**

Pergunta:

**Do you currently use medication prescribed for weight management?**

Yes / No / Prefer not to answer

Permitir registrar, por exemplo:

* GLP-1 related medication;
* other prescribed weight-management medication.

Campos:

**Medication**

**Start date**

**Prescribed by**

**Notes**

O sistema não deve recomendar iniciar, parar ou alterar medicação.

A função é somente registrar informações relevantes fornecidas pelo paciente.

---

# 23. TERMO DE RESPONSABILIDADE

Ao finalizar a anamnese:

Checkbox:

**I confirm that the information provided is accurate to the best of my knowledge.**

Outro checkbox:

**I understand that this application does not replace medical evaluation or healthcare advice.**

CTA:

**SUBMIT HEALTH PROFILE**

---

# 24. ANAMNESE PELO PERSONAL

O personal também deve conseguir:

* visualizar ficha;
* complementar observações profissionais;
* registrar restrições;
* adicionar alertas internos;
* indicar exercícios contraindicados;
* marcar necessidade de liberação profissional;
* acompanhar alterações no histórico.

Criar área:

**COACH NOTES**

Exemplo:

**TRAINING RESTRICTION**

Avoid overhead pressing temporarily.

**NOTE**

Monitor right shoulder discomfort during pushing movements.

---

# 25. ALERTAS DURANTE A PRESCRIÇÃO

Se o aluno possuir uma restrição cadastrada, mostrar alerta.

Exemplo:

**MOVEMENT ALERT**

This athlete has reported:

**Right Shoulder Injury**

Antes de incluir determinado movimento:

**Overhead Press may conflict with an active training restriction.**

CTA:

**REVIEW HEALTH PROFILE**

Não bloquear automaticamente todos os exercícios; permitir fluxo de decisão profissional conforme permissões do sistema.

---

# 26. FICHA DE EVOLUÇÃO CORPORAL

Criar:

**BODY METRICS**

Registrar historicamente:

* Weight
* Body Fat %
* Muscle Mass
* Waist
* Chest
* Arm
* Hip
* Thigh
* Calf

Mostrar gráficos.

Exemplo:

**WEIGHT**

`92.4 kg → 87.9 kg`

**-4.5 kg**

---

# 27. PERFORMANCE ASSESSMENT

Registrar também indicadores de performance:

* push-ups;
* squat;
* plank;
* mobility score;
* balance;
* vertical jump;
* running;
* grip;
* sport-specific tests.

Cada métrica deve possuir histórico.

---

# 28. DASHBOARD DO PERSONAL

Criar também a perspectiva profissional.

O aplicativo não deve representar apenas a experiência do aluno.

Criar:

**COACH DASHBOARD**

Mostrar:

**ACTIVE CLIENTS**

`24`

**TRAINING TODAY**

`18`

**CHECK-INS PENDING**

`6`

**HEALTH ALERTS**

`2`

**CHALLENGE PARTICIPANTS**

`14`

---

# 29. CLIENT LIST

Página:

**CLIENTS**

Cada cliente possui:

* foto;
* nome;
* nível;
* challenge day;
* adherence;
* último treino;
* alertas;
* próxima avaliação.

Exemplo:

**ALEX MORGAN**

Day 34 / 90

Training adherence: 91%

Nutrition: 84%

Health alert: Shoulder

CTA:

**VIEW CLIENT**

---

# 30. CLIENT PROFILE

Dentro do cliente:

Tabs:

**Overview**

**Training**

**Nutrition**

**Assessment**

**Health**

**Progress**

**Media**

**Coach Notes**

---

# 31. CHECK-IN

Criar check-in semanal.

Perguntas:

**HOW ARE YOU FEELING?**

Energy:

1–5

Sleep:

1–5

Stress:

1–5

Soreness:

1–5

Motivation:

1–5

Pergunta:

**Any pain or discomfort?**

Campo aberto.

Pergunta:

**Anything your coach should know this week?**

Campo aberto.

CTA:

**SEND CHECK-IN**

---

# 32. FEEDBACK DO PERSONAL

Após o check-in, o personal pode responder.

Exemplo:

**COACH FEEDBACK**

> Your training consistency is strong this week. We'll reduce shoulder loading and increase lower-body power work.

Pode enviar:

* texto;
* áudio;
* vídeo.

---

# 33. MEDIA HUB

Criar uma área:

**MEDIA**

Organizada em:

* Exercise Videos;
* Coach Videos;
* Progress Photos;
* Meal Photos;
* Assessment Media.

Dessa forma, todas as mídias ficam centralizadas.

---

# 34. DASHBOARD PRINCIPAL REVISADO

O Dashboard não deve parecer um mockup vazio.

A ordem de prioridade deve ser:

### 1. TODAY'S TRAINING

Foto + vídeo + treino.

### 2. 90 DAY CHALLENGE

Day 34 / 90.

### 3. CORE SCORE

Performance.

### 4. WEEKLY ADHERENCE

Treino + alimentação + mobilidade.

### 5. NUTRITION

Próxima refeição / macros.

### 6. COACH MESSAGE

Última orientação.

### 7. NEXT CHECKPOINT

Próxima avaliação.

### 8. REWARDS

XP e próximo nível.

---

# 35. NAVEGAÇÃO PRINCIPAL REVISADA

Estrutura sugerida:

### HOME

### TRAINING

### NUTRITION

### CHALLENGE

### PROGRESS

Profile e Health Profile podem ficar dentro do avatar/menu.

Mobility deve fazer parte de Training ou possuir acesso contextual para evitar excesso de tabs.

---

# 36. EXPERIÊNCIA REAL, NÃO APENAS MOCKUP

O Figma deve representar um aplicativo funcional.

Para cada funcionalidade importante criar:

* estado inicial;
* dados preenchidos;
* loading;
* empty state;
* error;
* success;
* modal;
* confirmação;
* upload;
* câmera;
* permissões;
* vídeo;
* histórico.

Não usar repetidamente os mesmos cards apenas trocando o título.

Cada área precisa ter estrutura própria.

---

# 37. COMPONENTES DE MÍDIA

Criar componentes reutilizáveis:

`ExerciseVideoPlayer`

`CoachVideoCard`

`ExercisePhoto`

`MealPhotoUploader`

`ProgressPhotoCapture`

`BeforeAfterViewer`

`MediaGallery`

`VideoThumbnail`

`UploadProgress`

`CameraCapture`

---

# 38. COMPONENTES DE SAÚDE

Criar:

`HealthProfileCard`

`MedicationForm`

`InjurySelector`

`BodyMap`

`HealthAlert`

`CoachRestriction`

`MedicalHistoryForm`

`SensitiveDataNotice`

---

# 39. COMPONENTES DE NUTRIÇÃO

Criar:

`MacroProgress`

`MealCard`

`MealPhotoCard`

`FoodJournal`

`NutritionScore`

`WaterTracker`

`DailyCalories`

`MealUploader`

---

# 40. COMPONENTES DE GAMIFICAÇÃO

Criar:

`CoreXp`

`LevelProgress`

`AchievementCard`

`RewardCard`

`ChallengeProgress`

`ChallengePhase`

`StreakCard`

`CheckpointReward`

`LevelUpModal`

---

# 41. COMPONENTES DO CHALLENGE

Criar:

`ChallengeHero`

`DayCounter`

`ChallengeTimeline`

`ChallengeCheckpoint`

`ChallengeMetric`

`TransformationGallery`

`BeforeAfterSlider`

`ChallengePhaseCard`

`ChallengeCompletion`

---

# 42. PRIVACIDADE E DADOS SENSÍVEIS

Como o aplicativo armazenará informações relacionadas a:

* saúde;
* lesões;
* medicações;
* medidas corporais;
* fotos corporais;
* alimentação;
* dados potencialmente sensíveis;

o design deve apresentar:

* controle de acesso;
* consentimento;
* indicador de conteúdo privado;
* confirmação antes de compartilhamento;
* possibilidade de editar dados;
* possibilidade de excluir mídia;
* transparência sobre quem pode visualizar a informação.

Exemplo:

**PRIVATE HEALTH INFORMATION**

Only you and authorized professionals can access this information.

---

# 43. RESULTADO ESPERADO

O novo projeto deve parecer um **produto completo de acompanhamento de performance**, e não apenas uma sequência de mockups de academia.

A experiência deve conectar:

**TRAINING + NUTRITION + HEALTH + COACH + CHALLENGE + PROGRESS + GAMIFICATION**

O ELEMENT CORE deve funcionar como um verdadeiro sistema de evolução de 90 dias.

A jornada principal deve ser:

**Avaliação inicial
→ Anamnese
→ Definição de objetivo
→ Plano personalizado
→ Treino diário
→ Dieta e registro fotográfico
→ Feedback do personal
→ Check-ins
→ Challenge de 90 dias
→ Avaliações periódicas
→ Gamificação
→ Comparação de evolução
→ Resultado final**

A interface deve transmitir constantemente:

**WHAT DO I NEED TO DO TODAY?**

e

**HOW MUCH HAVE I IMPROVED?**

O objetivo é que o usuário consiga visualizar claramente sua evolução desde o **Day 1 até o Day 90**, com dados, fotos, performance, alimentação, consistência e acompanhamento profissional reunidos em uma única experiência.
