
const QUESTION_BANK = [{"text": "Сколько бит в одном байте?", "options": ["4", "8", "16", "32"], "correct": 1, "difficulty": "easy"}, {"text": "Какая система счисления используется в компьютерах?", "options": ["Десятичная", "Двоичная", "Шестнадцатеричная", "Восьмеричная"], "correct": 1, "difficulty": "easy"}, {"text": "Что такое алгоритм?", "options": ["Программа", "Последовательность действий", "Язык программирования", "Устройство ПК"], "correct": 1, "difficulty": "easy"}, {"text": "Что из перечисленного – язык программирования?", "options": ["HTML", "CSS", "Python", "HTTP"], "correct": 2, "difficulty": "easy"}, {"text": "Как называется ошибка в программе?", "options": ["Баг", "Фикс", "Код", "Компиляция"], "correct": 0, "difficulty": "easy"}, {"text": "Какой формат является форматом изображения?", "options": [".mp3", ".exe", ".png", ".txt"], "correct": 2, "difficulty": "easy"}, {"text": "Что означает CPU?", "options": ["Центральный процессор", "Блок питания", "Оперативная память", "Видеокарта"], "correct": 0, "difficulty": "easy"}, {"text": "Какая клавиша обычно подтверждает действие?", "options": ["Enter", "Space", "Esc", "Tab"], "correct": 0, "difficulty": "easy"}, {"text": "Что такое браузер?", "options": ["Программа для просмотра сайтов", "Антивирус", "ОС", "Файловый менеджер"], "correct": 0, "difficulty": "easy"}, {"text": "Что такое операционная система?", "options": ["Windows", "Word", "Excel", "Photoshop"], "correct": 0, "difficulty": "easy"}, {"text": "Какой тег HTML для абзаца?", "options": ["<p>", "<div>", "<span>", "<a>"], "correct": 0, "difficulty": "easy"}, {"text": "Что делает клавиша Ctrl+C?", "options": ["Копировать", "Вставить", "Вырезать", "Отменить"], "correct": 0, "difficulty": "easy"}, {"text": "Что такое компьютерный вирус?", "options": ["Вредоносная программа", "Антивирус", "Драйвер", "Браузер"], "correct": 0, "difficulty": "easy"}, {"text": "Что такое IP-адрес?", "options": ["Уникальный номер устройства в сети", "Имя компьютера", "Пароль", "Тип браузера"], "correct": 0, "difficulty": "easy"}, {"text": "Что такое URL?", "options": ["Адрес страницы в интернете", "Поисковая система", "Язык программирования", "Браузер"], "correct": 0, "difficulty": "easy"}, {"text": "Какой символ используется для комментария в Python?", "options": ["//", "#", "/*", "<!--"], "correct": 1, "difficulty": "easy"}, {"text": "Что такое переменная в программировании?", "options": ["Контейнер для данных", "Функция", "Цикл", "Условие"], "correct": 0, "difficulty": "easy"}, {"text": "Что такое цикл for?", "options": ["Повторение действий", "Условие", "Массив", "Функция"], "correct": 0, "difficulty": "easy"}, {"text": "Что такое компилятор?", "options": ["Переводит код в машинный", "Редактор кода", "Игровой движок", "Антивирус"], "correct": 0, "difficulty": "easy"}, {"text": "Что такое интерпретатор?", "options": ["Выполняет код построчно", "Переводит весь код сразу", "Компилирует в EXE", "Редактирует код"], "correct": 0, "difficulty": "easy"}, {"text": "Переведите 1010₂ в десятичную.", "options": ["8", "9", "10", "11"], "correct": 2, "difficulty": "medium"}, {"text": "Какая логическая операция возвращает true только если оба операнда истинны?", "options": ["ИЛИ", "И", "НЕ", "ИСКЛЮЧАЮЩЕЕ ИЛИ"], "correct": 1, "difficulty": "medium"}, {"text": "Что означает RAM?", "options": ["Постоянная память", "Оперативная память", "Внешняя память", "Кэш"], "correct": 1, "difficulty": "medium"}, {"text": "Какой тег HTML для ссылки?", "options": ["<link>", "<a>", "<href>", "<url>"], "correct": 1, "difficulty": "medium"}, {"text": "Что такое IP-адрес?", "options": ["Уникальный номер в сети", "Имя ПК", "Пароль", "Тип браузера"], "correct": 0, "difficulty": "medium"}, {"text": "Какой оператор вывода в Python?", "options": ["input()", "print()", "output()", "write()"], "correct": 1, "difficulty": "medium"}, {"text": "Что такое цикл?", "options": ["Многократное выполнение кода", "Условный переход", "Математическая операция", "Тип данных"], "correct": 0, "difficulty": "medium"}, {"text": "Какой тип данных в Python для целых чисел?", "options": ["float", "str", "int", "bool"], "correct": 2, "difficulty": "medium"}, {"text": "Что такое функция в программировании?", "options": ["Блок кода с именем", "Переменная", "Цикл", "Условие"], "correct": 0, "difficulty": "medium"}, {"text": "Что такое массив?", "options": ["Набор элементов одного типа", "Функция", "Цикл", "Переменная"], "correct": 0, "difficulty": "medium"}, {"text": "Что такое база данных?", "options": ["Организованное хранилище данных", "Таблица Excel", "Файл", "Программа"], "correct": 0, "difficulty": "medium"}, {"text": "Что такое SQL?", "options": ["Язык запросов", "Язык программирования", "ОС", "Файловая система"], "correct": 0, "difficulty": "medium"}, {"text": "Что такое первичный ключ в БД?", "options": ["Уникальный идентификатор записи", "Имя таблицы", "Тип данных", "Индекс"], "correct": 0, "difficulty": "medium"}, {"text": "Что такое Git?", "options": ["Система контроля версий", "Язык программирования", "Редактор", "Браузер"], "correct": 0, "difficulty": "medium"}, {"text": "Что такое API?", "options": ["Интерфейс для взаимодействия программ", "База данных", "Язык", "Операционная система"], "correct": 0, "difficulty": "medium"}, {"text": "Что такое HTTP?", "options": ["Протокол передачи данных", "Язык разметки", "Браузер", "Сервер"], "correct": 0, "difficulty": "medium"}, {"text": "Что такое CSS?", "options": ["Стили для HTML", "Язык программирования", "База данных", "Фреймворк"], "correct": 0, "difficulty": "medium"}, {"text": "Что такое JavaScript?", "options": ["Язык программирования для веба", "Стили", "База данных", "Сервер"], "correct": 0, "difficulty": "medium"}, {"text": "Что такое рекурсия?", "options": ["Функция, вызывающая себя", "Цикл", "Массив", "Условие"], "correct": 0, "difficulty": "medium"}, {"text": "Что такое сортировка пузырьком?", "options": ["Обмен соседних элементов", "Выбор минимального", "Двоичное дерево", "Рекурсия"], "correct": 0, "difficulty": "medium"}, {"text": "Что такое рекурсия? (hard)", "options": ["Функция вызывает саму себя", "Вид цикла", "Тип данных", "Ошибка"], "correct": 0, "difficulty": "hard"}, {"text": "Переведите 255 в двоичную систему.", "options": ["11111111", "10000000", "11110000", "10101010"], "correct": 0, "difficulty": "hard"}, {"text": "Что такое алгоритм сортировки пузырьком?", "options": ["Обмен соседних элементов", "Выбор минимального", "Двоичное дерево", "Рекурсивное деление"], "correct": 0, "difficulty": "hard"}, {"text": "Что такое SQL инъекция?", "options": ["Внедрение вредоносного кода в запрос", "Тип базы данных", "Метод шифрования", "Антивирус"], "correct": 0, "difficulty": "hard"}, {"text": "Что такое инкапсуляция в ООП?", "options": ["Скрытие внутренних данных", "Наследование", "Полиморфизм", "Перегрузка"], "correct": 0, "difficulty": "hard"}, {"text": "Что делает git commit?", "options": ["Сохраняет изменения локально", "Отправляет на сервер", "Создаёт ветку", "Удаляет файлы"], "correct": 0, "difficulty": "hard"}, {"text": "Что такое полиморфизм?", "options": ["Один интерфейс – разная реализация", "Скрытие данных", "Наследование", "Абстракция"], "correct": 0, "difficulty": "hard"}, {"text": "Что такое наследование в ООП?", "options": ["Создание нового класса на основе существующего", "Скрытие данных", "Разные реализации", "Перегрузка"], "correct": 0, "difficulty": "hard"}, {"text": "Что такое абстрактный класс?", "options": ["Класс, который нельзя инстанцировать", "Класс без методов", "Финальный класс", "Статический класс"], "correct": 0, "difficulty": "hard"}, {"text": "Что такое интерфейс в программировании?", "options": ["Контракт, определяющий методы", "Графический интерфейс", "База данных", "Сервер"], "correct": 0, "difficulty": "hard"}, {"text": "Что такое многопоточность?", "options": ["Параллельное выполнение задач", "Последовательное выполнение", "Один поток", "Синхронный код"], "correct": 0, "difficulty": "hard"}, {"text": "Что такое deadlock?", "options": ["Взаимная блокировка потоков", "Утечка памяти", "Ошибка компиляции", "Деление на ноль"], "correct": 0, "difficulty": "hard"}, {"text": "Что такое реляционная БД?", "options": ["База данных с таблицами и связями", "Нереляционная", "Файловая", "Иерархическая"], "correct": 0, "difficulty": "hard"}, {"text": "Что такое нормализация БД?", "options": ["Устранение избыточности данных", "Создание таблиц", "Индексация", "Шифрование"], "correct": 0, "difficulty": "hard"}, {"text": "Что такое Docker?", "options": ["Контейнеризация приложений", "Виртуальная машина", "Язык программирования", "База данных"], "correct": 0, "difficulty": "hard"}, {"text": "Что такое Kubernetes?", "options": ["Оркестрация контейнеров", "База данных", "Язык", "Фреймворк"], "correct": 0, "difficulty": "hard"}, {"text": "Что такое CI/CD?", "options": ["Непрерывная интеграция и доставка", "База данных", "Язык", "ОС"], "correct": 0, "difficulty": "hard"}, {"text": "Что такое REST API?", "options": ["Архитектурный стиль API", "База данных", "Протокол", "Язык"], "correct": 0, "difficulty": "hard"}, {"text": "Что такое JSON?", "options": ["Формат обмена данными", "Язык программирования", "База данных", "Стиль"], "correct": 0, "difficulty": "hard"}, {"text": "Что такое XML?", "options": ["Расширяемый язык разметки", "Язык программирования", "База данных", "Протокол"], "correct": 0, "difficulty": "hard"}];

(function() {
  const MAZE_CELLS = 19;
  const RECORDS_KEY = 'labyrinth_knowledge_records_v3';
  const SETTINGS_KEY = 'labyrinth_knowledge_settings_v5';

  const DEFAULT_SETTINGS = {
    difficulty: 'medium',
    theme: 'dark',
    hero: 'circle'
  };

  const DIFFICULTY_CONFIG = {
    easy: { lives: 3, questionTimeLimit: 12, points: 10 },
    medium: { lives: 2, questionTimeLimit: 10, points: 20 },
    hard: { lives: 1, questionTimeLimit: 8, points: 30 }
  };

  const HERO_LABELS = {
    circle: 'Синий круг',
    kolobok: 'Колобок',
    butterfly: 'Бабочка',
    ant: 'Муравей',
    hasbulla: 'Хасбик'
  };

  const THEME_LABELS = {
    light: 'Светлый фон',
    dark: 'Чёрный фон',
    purple: 'Фиолетовый фон'
  };

  const el = {
    screens: {
      menu: document.getElementById('menuScreen'),
      instruction: document.getElementById('instructionScreen'),
      game: document.getElementById('gameScreen'),
      highscores: document.getElementById('highscoresScreen'),
      settings: document.getElementById('settingsScreen'),
      exit: document.getElementById('exitScreen'),
      end: document.getElementById('endScreen')
    },
    startBtn: document.getElementById('startBtn'),
    instructionBtn: document.getElementById('instructionBtn'),
    highscoresBtn: document.getElementById('highscoresBtn'),
    settingsBtn: document.getElementById('settingsBtn'),
    exitBtn: document.getElementById('exitBtn'),
    backFromInstructionBtn: document.getElementById('backFromInstructionBtn'),
    backFromRecordsBtn: document.getElementById('backFromRecordsBtn'),
    backFromSettingsBtn: document.getElementById('backFromSettingsBtn'),
    backFromExitBtn: document.getElementById('backFromExitBtn'),
    tryCloseBtn: document.getElementById('tryCloseBtn'),
    clearRecordsBtn: document.getElementById('clearRecordsBtn'),
    recordsList: document.getElementById('recordsList'),
    saveResultBtn: document.getElementById('saveResultBtn'),
    restartBtn: document.getElementById('restartBtn'),
    backMenuBtn: document.getElementById('backMenuBtn'),
    playerNameInput: document.getElementById('playerNameInput'),
    resultTitle: document.getElementById('resultTitle'),
    finalScore: document.getElementById('finalScore'),
    finalTime: document.getElementById('finalTime'),
    resultGif: document.getElementById('resultGif'),
    resultMediaWrap: document.getElementById('resultMediaWrap'),
    goodAudio: document.getElementById('goodAudio'),
    badAudio: document.getElementById('badAudio'),
    scoreEl: document.getElementById('scoreEl'),
    livesEl: document.getElementById('livesEl'),
    difficultyEl: document.getElementById('difficultyEl'),
    timeEl: document.getElementById('timeEl'),
    themeEl: document.getElementById('themeEl'),
    heroEl: document.getElementById('heroEl'),
    playerSprite: document.getElementById('playerSprite'),
    messageEl: document.getElementById('messageEl'),
    canvasWrap: document.querySelector('.canvas-wrap'),
    canvas: document.getElementById('mazeCanvas'),
    questionOverlay: document.getElementById('questionOverlay'),
    questionText: document.getElementById('questionText'),
    optionsBox: document.getElementById('optionsBox'),
    questionTimer: document.getElementById('questionTimer'),
    hintBtn: document.getElementById('hintBtn'),
    skipBtn: document.getElementById('skipBtn'),
    difficultyChips: [...document.querySelectorAll('.difficulty-chip')],
    themeChips: [...document.querySelectorAll('.theme-chip')],
    heroChips: [...document.querySelectorAll('.hero-chip')],
  };

  const ctx = el.canvas.getContext('2d');
  const settings = loadSettings();
  applySettings(settings);
  syncSettingsUI();

  const heroImages = {
    kolobok: loadImage('assets/kolobok.gif'),
    butterfly: loadImage('assets/butterfly.gif'),
    ant: loadImage('assets/ant.gif'),
    hasbulla: loadImage('assets/hasbulla.gif')
  };

  const game = {
    state: 'MENU',
    maze: [],
    player: { x: 1, y: 1 },
    startPos: { x: 1, y: 1 },
    endPos: { x: MAZE_CELLS - 2, y: MAZE_CELLS - 2 },
    checkpoints: [],
    score: 0,
    lives: DIFFICULTY_CONFIG[settings.difficulty].lives,
    startTime: 0,
    finalTime: 0,
    currentQuestion: null,
    usedQuestions: [],
    questionStartTime: 0,
    hintUsed: false,
    filteredOptions: null,
    filteredCorrectIndex: null,
    message: '',
    messageTime: 0,
    winFlag: false,
    resultSaved: false,
    cellSize: 30,
    questionTimeLimit: DIFFICULTY_CONFIG[settings.difficulty].questionTimeLimit,
    rafId: null,
    runTimer: null,
    dragStartPoint: null,
    dragTracking: false,
    hasMovedInCurrentDrag: false
  };

  function loadImage(src) {
    const img = new Image();
    img.src = src;
    return img;
  }

  function loadSettings() {
    try {
      return { ...DEFAULT_SETTINGS, ...(JSON.parse(localStorage.getItem(SETTINGS_KEY)) || {}) };
    } catch (_) {
      return { ...DEFAULT_SETTINGS };
    }
  }

  function saveSettings() {
    localStorage.setItem(SETTINGS_KEY, JSON.stringify(settings));
  }

  function applySettings(current) {
    document.documentElement.classList.remove('theme-light', 'theme-dark', 'theme-purple');
    document.documentElement.classList.add(`theme-${current.theme}`);
  }

  function setActiveChip(chips, value) {
    chips.forEach(chip => chip.classList.toggle('active', chip.dataset.value === value));
  }

  function syncSettingsUI() {
    setActiveChip(el.difficultyChips, settings.difficulty);
    setActiveChip(el.themeChips, settings.theme);
    setActiveChip(el.heroChips, settings.hero);
  }

  function showScreen(name) {
    Object.values(el.screens).forEach(screen => screen.classList.remove('active'));
    el.screens[name].classList.add('active');
    game.state = name.toUpperCase();
    if (name !== 'game') { stopAutoRun(); el.playerSprite.classList.add('hidden'); }
    if (name === 'highscores') renderRecords();
  }

  function getRecords() {
    try {
      const items = JSON.parse(localStorage.getItem(RECORDS_KEY)) || [];
      return Array.isArray(items) ? items : [];
    } catch (_) {
      return [];
    }
  }

  function saveRecord(record) {
    const items = getRecords();
    items.push(record);
    items.sort((a, b) => b.score - a.score || a.time - b.time);
    localStorage.setItem(RECORDS_KEY, JSON.stringify(items.slice(0, 10)));
  }

  function renderRecords() {
    const items = getRecords();
    if (!items.length) {
      el.recordsList.innerHTML = '<div class="subtitle">Пока нет сохранённых рекордов.</div>';
      return;
    }
    el.recordsList.innerHTML = items.map((r, idx) => `
      <div class="record-item">
        <div><strong>${idx + 1}.</strong></div>
        <div>${escapeHtml(r.name || 'Аноним')}</div>
        <div class="record-score">${r.score} очков</div>
        <div class="record-time">${Number(r.time).toFixed(1)} сек</div>
      </div>
    `).join('');
  }

  function clearRecords() {
    localStorage.removeItem(RECORDS_KEY);
    renderRecords();
  }

  function updateCanvasSize() {
    const rect = el.canvasWrap.getBoundingClientRect();
    const size = Math.max(280, Math.min(rect.width, window.innerHeight * 0.72));
    el.canvas.width = Math.floor(size);
    el.canvas.height = Math.floor(size);
    game.cellSize = el.canvas.width / MAZE_CELLS;
    draw();
  }

  function generateMaze(width, height) {
    const maze = Array.from({ length: height }, () => Array(width).fill(0));
    const stack = [[1, 1]];
    maze[1][1] = 1;
    while (stack.length) {
      const [x, y] = stack[stack.length - 1];
      const neighbors = [];
      for (const [dx, dy] of [[-2,0],[2,0],[0,-2],[0,2]]) {
        const nx = x + dx;
        const ny = y + dy;
        if (nx > 0 && nx < width - 1 && ny > 0 && ny < height - 1 && maze[ny][nx] === 0) {
          neighbors.push([nx, ny, dx / 2, dy / 2]);
        }
      }
      if (neighbors.length) {
        const [nx, ny, wx, wy] = neighbors[Math.floor(Math.random() * neighbors.length)];
        maze[ny][nx] = 1;
        maze[y + wy][x + wx] = 1;
        stack.push([nx, ny]);
      } else {
        stack.pop();
      }
    }
    maze[height - 2][width - 2] = 1;
    return maze;
  }

  function getRandomQuestion(difficulty) {
    let suitable = QUESTION_BANK.filter(q => q.difficulty === difficulty);
    if (!suitable.length) suitable = QUESTION_BANK.slice();
    let available = suitable.filter(q => !game.usedQuestions.includes(q));
    if (!available.length) {
      game.usedQuestions = [];
      available = suitable.slice();
    }
    const chosen = available[Math.floor(Math.random() * available.length)];
    game.usedQuestions.push(chosen);
    return chosen;
  }

  function setupCheckpoints() {
    const points = [];
    for (let y = 0; y < MAZE_CELLS; y++) {
      for (let x = 0; x < MAZE_CELLS; x++) {
        if (
          game.maze[y][x] === 1 &&
          !(x === game.startPos.x && y === game.startPos.y) &&
          !(x === game.endPos.x && y === game.endPos.y) &&
          (x + y) % 7 === 0 &&
          Math.abs(x - game.startPos.x) + Math.abs(y - game.startPos.y) > 4
        ) {
          points.push({ x, y });
        }
      }
    }
    game.checkpoints = points.slice(0, 18);
  }

  function startNewGame() {
    const cfg = DIFFICULTY_CONFIG[settings.difficulty];
    game.maze = generateMaze(MAZE_CELLS, MAZE_CELLS);
    game.player = { x: 1, y: 1 };
    game.startPos = { x: 1, y: 1 };
    game.endPos = { x: MAZE_CELLS - 2, y: MAZE_CELLS - 2 };
    game.score = 0;
    game.lives = cfg.lives;
    game.questionTimeLimit = cfg.questionTimeLimit;
    game.startTime = performance.now();
    game.finalTime = 0;
    game.currentQuestion = null;
    game.usedQuestions = [];
    game.questionStartTime = 0;
    game.hintUsed = false;
    game.filteredOptions = null;
    game.filteredCorrectIndex = null;
    game.message = '';
    game.messageTime = 0;
    game.winFlag = false;
    game.resultSaved = false;
    game.dragStartPoint = null;
    game.dragTracking = false;
    game.hasMovedInCurrentDrag = false;
    el.playerNameInput.value = '';
    el.messageEl.textContent = '';
    setupCheckpoints();
    hideQuestion();
    showScreen('game');
    updateCanvasSize();
    updateSidebar();
    draw();
  }

  function updateSidebar() {
    const elapsed = game.startTime ? (performance.now() - game.startTime) / 1000 : 0;
    el.scoreEl.textContent = `Очки: ${game.score}`;
    el.livesEl.textContent = `Жизни: ${game.lives}`;
    el.difficultyEl.textContent = `Сложность: ${settings.difficulty}`;
    el.timeEl.textContent = `Время: ${elapsed.toFixed(1)} с`;
    el.themeEl.textContent = `Тема: ${THEME_LABELS[settings.theme]}`;
    el.heroEl.textContent = `Герой: ${HERO_LABELS[settings.hero]}`;
    clearMessageIfNeeded();
  }

  function showMessage(text) {
    game.message = text;
    game.messageTime = performance.now();
    el.messageEl.textContent = text;
  }

  function clearMessageIfNeeded() {
    if (game.message && performance.now() - game.messageTime > 2200) {
      game.message = '';
      el.messageEl.textContent = '';
    }
  }

  function isCheckpoint(x, y) {
    return game.checkpoints.some(p => p.x === x && p.y === y);
  }

  function removeCheckpoint(x, y) {
    game.checkpoints = game.checkpoints.filter(p => !(p.x === x && p.y === y));
  }

  function draw() {
    if (!game.maze.length) return;
    const cell = game.cellSize;
    ctx.clearRect(0, 0, el.canvas.width, el.canvas.height);

    for (let y = 0; y < game.maze.length; y++) {
      for (let x = 0; x < game.maze[y].length; x++) {
        const px = x * cell;
        const py = y * cell;
        const value = game.maze[y][x];

        ctx.fillStyle = value === 0 ? getCssVar('--wall') : getCssVar('--path');
        ctx.fillRect(px, py, cell, cell);

        if (value === 0) {
          ctx.strokeStyle = 'rgba(255,255,255,0.08)';
          ctx.lineWidth = 1;
          ctx.strokeRect(px + 0.5, py + 0.5, cell - 1, cell - 1);
        }

        if (x === game.startPos.x && y === game.startPos.y) {
          ctx.fillStyle = '#00ff66';
          ctx.fillRect(px, py, cell, cell);
        } else if (x === game.endPos.x && y === game.endPos.y) {
          ctx.fillStyle = '#ff4040';
          ctx.fillRect(px, py, cell, cell);
        } else if (isCheckpoint(x, y)) {
          ctx.fillStyle = '#fff100';
          ctx.beginPath();
          ctx.arc(px + cell / 2, py + cell / 2, cell / 3.2, 0, Math.PI * 2);
          ctx.fill();
        }
      }
    }
    drawPlayer();
    updatePlayerSprite();
  }

  function drawPlayer() {
    const cell = game.cellSize;
    const px = game.player.x * cell;
    const py = game.player.y * cell;

    if (settings.hero === 'circle') {
      el.playerSprite.classList.add('hidden');
      const cx = px + cell / 2;
      const cy = py + cell / 2;
      const radius = cell / 2 - 2;
      const gradient = ctx.createRadialGradient(cx - radius * 0.35, cy - radius * 0.35, 4, cx, cy, radius);
      gradient.addColorStop(0, '#71a5ff');
      gradient.addColorStop(1, '#0b43c8');
      ctx.fillStyle = gradient;
      ctx.beginPath();
      ctx.arc(cx, cy, radius, 0, Math.PI * 2);
      ctx.fill();
      return;
    }
  }

  function updatePlayerSprite() {
    if (settings.hero === 'circle') return;
    const rect = el.canvas.getBoundingClientRect();
    const displayCell = rect.width / MAZE_CELLS;
    const px = game.player.x * displayCell;
    const py = game.player.y * displayCell;
    const pad = Math.max(1.5, displayCell * 0.04);
    const src = `assets/${settings.hero}.gif`;
    if (el.playerSprite.getAttribute('src') !== src) {
      el.playerSprite.setAttribute('src', src);
    }
    el.playerSprite.classList.remove('hidden');
    el.playerSprite.style.left = `${px + pad}px`;
    el.playerSprite.style.top = `${py + pad}px`;
    el.playerSprite.style.width = `${displayCell - pad * 2}px`;
    el.playerSprite.style.height = `${displayCell - pad * 2}px`;
  }

  function openQuestion() {
    game.currentQuestion = getRandomQuestion(settings.difficulty);
    game.questionStartTime = performance.now();
    game.hintUsed = false;
    game.filteredOptions = null;
    game.filteredCorrectIndex = null;
    renderQuestion();
    el.questionOverlay.classList.add('active');
    stopAutoRun();
  }

  function hideQuestion() {
    el.questionOverlay.classList.remove('active');
  }

  function getShownOptions() {
    return game.filteredOptions ?? game.currentQuestion.options;
  }

  function renderQuestion() {
    if (!game.currentQuestion) return;
    el.questionText.textContent = game.currentQuestion.text;
    el.optionsBox.innerHTML = '';
    getShownOptions().forEach((option, index) => {
      const btn = document.createElement('button');
      btn.className = 'option-btn';
      btn.textContent = `${index + 1}. ${option}`;
      btn.addEventListener('click', () => answerQuestion(index));
      el.optionsBox.appendChild(btn);
    });
    el.hintBtn.disabled = game.hintUsed;
    el.hintBtn.textContent = game.hintUsed ? 'Подсказка использована' : 'Подсказка 50/50 (+3 сек)';
  }

  function answerQuestion(answerIndex) {
    const isCorrect = game.filteredOptions
      ? answerIndex === game.filteredCorrectIndex
      : answerIndex === game.currentQuestion.correct;

    if (isCorrect) {
      game.score += DIFFICULTY_CONFIG[settings.difficulty].points;
      removeCheckpoint(game.player.x, game.player.y);
      showMessage(`Правильно! +${DIFFICULTY_CONFIG[settings.difficulty].points} очков`);
      hideQuestion();
      game.currentQuestion = null;
    } else {
      game.lives -= 1;
      if (game.lives <= 0) {
        finishGame(false);
        return;
      }
      const correctText = game.currentQuestion.options[game.currentQuestion.correct];
      showMessage(`Неверно! Правильно: ${correctText}. Жизней: ${game.lives}`);
      hideQuestion();
      game.currentQuestion = null;
    }
    updateSidebar();
    draw();
  }

  function skipQuestion() {
    if (!game.currentQuestion) return;
    game.score -= 5;
    removeCheckpoint(game.player.x, game.player.y);
    showMessage('Вопрос пропущен. -5 очков');
    hideQuestion();
    game.currentQuestion = null;
    updateSidebar();
    draw();
  }

  function useHint() {
    if (game.hintUsed || !game.currentQuestion) return;
    game.questionStartTime += 3000;
    const correctIndex = game.currentQuestion.correct;
    const wrongIndices = game.currentQuestion.options.map((_, i) => i).filter(i => i !== correctIndex);
    const keepWrong = wrongIndices[Math.floor(Math.random() * wrongIndices.length)];
    game.filteredOptions = [
      game.currentQuestion.options[correctIndex],
      game.currentQuestion.options[keepWrong]
    ];
    game.filteredOptions.sort(() => Math.random() - 0.5);
    game.filteredCorrectIndex = game.filteredOptions.indexOf(game.currentQuestion.options[correctIndex]);
    game.hintUsed = true;
    renderQuestion();
  }

  function finishGame(win) {
    stopAutoRun();
    game.winFlag = win;
    game.finalTime = (performance.now() - game.startTime) / 1000;
    game.resultSaved = false;
    showScreen('end');
    el.resultTitle.textContent = win ? 'ПОБЕДА!' : 'ПОРАЖЕНИЕ';
    el.resultTitle.className = `title result-title ${win ? 'win' : 'lose'}`;
    el.finalScore.textContent = `Очки: ${game.score}`;
    el.finalTime.textContent = `Время: ${game.finalTime.toFixed(1)} сек`;
    hideQuestion();
    applyResultMedia(win);
  }

  function applyResultMedia(win) {
    const gifPath = win ? 'assets/good.gif' : 'assets/bad.gif';
    const audioEl = win ? el.goodAudio : el.badAudio;

    el.resultGif.src = gifPath + `?v=${Date.now()}`;
    el.resultMediaWrap.classList.remove('hidden');
    el.resultGif.onerror = () => el.resultMediaWrap.classList.add('hidden');
    el.resultGif.onload = () => el.resultMediaWrap.classList.remove('hidden');

    [el.goodAudio, el.badAudio].forEach(a => {
      try { a.pause(); a.currentTime = 0; } catch (_) {}
    });
    try {
      audioEl.currentTime = 0;
      const p = audioEl.play();
      if (p && typeof p.catch === 'function') p.catch(() => {});
    } catch (_) {}
  }

  function tryMove(dx, dy) {
    if (game.currentQuestion || game.state !== 'GAME') return { moved: false, reason: 'paused' };
    const newX = game.player.x + dx;
    const newY = game.player.y + dy;

    if (
      newX < 0 || newX >= MAZE_CELLS ||
      newY < 0 || newY >= MAZE_CELLS ||
      game.maze[newY][newX] !== 1
    ) {
      return { moved: false, reason: 'wall' };
    }

    game.player.x = newX;
    game.player.y = newY;

    if (isCheckpoint(newX, newY)) {
      draw();
      updateSidebar();
      openQuestion();
      return { moved: true, reason: 'question' };
    }

    if (newX === game.endPos.x && newY === game.endPos.y) {
      draw();
      updateSidebar();
      finishGame(true);
      return { moved: true, reason: 'finish' };
    }

    draw();
    updateSidebar();
    return { moved: true, reason: 'ok' };
  }

  function moveUntilStop(direction) {
    stopAutoRun();
    if (!direction) return;
    const first = tryMove(direction.dx, direction.dy);
    if (!first.moved || first.reason !== 'ok') return;

    game.runTimer = setInterval(() => {
      const result = tryMove(direction.dx, direction.dy);
      if (!result.moved || result.reason !== 'ok') {
        stopAutoRun();
      }
    }, 95);
  }

  function stopAutoRun() {
    if (game.runTimer) {
      clearInterval(game.runTimer);
      game.runTimer = null;
    }
  }

  function getPointerPosition(evt) {
    const rect = el.canvas.getBoundingClientRect();
    const clientX = evt.clientX ?? (evt.touches && evt.touches[0] ? evt.touches[0].clientX : 0);
    const clientY = evt.clientY ?? (evt.touches && evt.touches[0] ? evt.touches[0].clientY : 0);
    const scaleX = el.canvas.width / rect.width;
    const scaleY = el.canvas.height / rect.height;
    return {
      x: (clientX - rect.left) * scaleX,
      y: (clientY - rect.top) * scaleY
    };
  }

  function isPointOnPlayer(pos) {
    const cell = game.cellSize;
    const cx = game.player.x * cell + cell / 2;
    const cy = game.player.y * cell + cell / 2;
    return Math.hypot(pos.x - cx, pos.y - cy) <= cell * 0.55;
  }

  function directionFromVector(dx, dy) {
    if (Math.abs(dx) < 8 && Math.abs(dy) < 8) return null;
    if (Math.abs(dx) > Math.abs(dy)) {
      return dx > 0 ? { dx: 1, dy: 0 } : { dx: -1, dy: 0 };
    }
    return dy > 0 ? { dx: 0, dy: 1 } : { dx: 0, dy: -1 };
  }

  function handlePointerDown(evt) {
    if (game.state !== 'GAME' || game.currentQuestion) return;
    const pos = getPointerPosition(evt);
    if (!isPointOnPlayer(pos)) return;
    evt.preventDefault();
    game.dragTracking = true;
    game.dragStartPoint = pos;
    game.hasMovedInCurrentDrag = false;
  }

  function handlePointerMove(evt) {
    if (!game.dragTracking || game.currentQuestion || game.hasMovedInCurrentDrag) return;
    const pos = getPointerPosition(evt);
    const dx = pos.x - game.dragStartPoint.x;
    const dy = pos.y - game.dragStartPoint.y;
    const direction = directionFromVector(dx, dy);
    if (!direction) return;
    evt.preventDefault();
    game.hasMovedInCurrentDrag = true;
    moveUntilStop(direction);
  }

  function handlePointerUp() {
    game.dragTracking = false;
    game.dragStartPoint = null;
    game.hasMovedInCurrentDrag = false;
  }

  function tick() {
    if (game.state === 'GAME') {
      updateSidebar();
      if (game.currentQuestion) {
        const remaining = Math.max(0, game.questionTimeLimit - (performance.now() - game.questionStartTime) / 1000);
        el.questionTimer.textContent = Math.ceil(remaining);
        if (remaining <= 0) {
          game.lives -= 1;
          if (game.lives <= 0) {
            finishGame(false);
          } else {
            showMessage('Время вышло! Потеряна жизнь.');
            hideQuestion();
            game.currentQuestion = null;
            updateSidebar();
            draw();
          }
        }
      }
    }
    game.rafId = requestAnimationFrame(tick);
  }

  function saveCurrentResult() {
    if (game.resultSaved) return;
    const name = (el.playerNameInput.value || '').trim() || 'Аноним';
    saveRecord({ name, score: game.score, time: game.finalTime });
    game.resultSaved = true;
    renderRecords();
    el.saveResultBtn.textContent = 'Сохранено';
    el.saveResultBtn.disabled = true;
  }

  function resetSaveButton() {
    el.saveResultBtn.textContent = 'Сохранить результат';
    el.saveResultBtn.disabled = false;
  }

  function getCssVar(name) {
    return getComputedStyle(document.documentElement).getPropertyValue(name).trim();
  }

  function escapeHtml(str) {
    return String(str)
      .replaceAll('&', '&amp;')
      .replaceAll('<', '&lt;')
      .replaceAll('>', '&gt;')
      .replaceAll('"', '&quot;');
  }

  function bindEvents() {
    el.startBtn.addEventListener('click', () => { resetSaveButton(); startNewGame(); });
    el.instructionBtn.addEventListener('click', () => showScreen('instruction'));
    el.highscoresBtn.addEventListener('click', () => showScreen('highscores'));
    el.settingsBtn.addEventListener('click', () => showScreen('settings'));
    el.exitBtn.addEventListener('click', () => showScreen('exit'));

    el.backFromInstructionBtn.addEventListener('click', () => showScreen('menu'));
    el.backFromRecordsBtn.addEventListener('click', () => showScreen('menu'));
    el.backFromSettingsBtn.addEventListener('click', () => showScreen('menu'));
    el.backFromExitBtn.addEventListener('click', () => showScreen('menu'));
    el.tryCloseBtn.addEventListener('click', () => window.close());
    el.clearRecordsBtn.addEventListener('click', clearRecords);
    el.restartBtn.addEventListener('click', () => { resetSaveButton(); startNewGame(); });
    el.backMenuBtn.addEventListener('click', () => showScreen('menu'));
    el.saveResultBtn.addEventListener('click', saveCurrentResult);
    el.hintBtn.addEventListener('click', useHint);
    el.skipBtn.addEventListener('click', skipQuestion);

    el.difficultyChips.forEach(chip => chip.addEventListener('click', () => {
      settings.difficulty = chip.dataset.value;
      saveSettings();
      syncSettingsUI();
    }));

    el.themeChips.forEach(chip => chip.addEventListener('click', () => {
      settings.theme = chip.dataset.value;
      saveSettings();
      applySettings(settings);
      syncSettingsUI();
      draw();
      updateSidebar();
    }));

    el.heroChips.forEach(chip => chip.addEventListener('click', () => {
      settings.hero = chip.dataset.value;
      saveSettings();
      syncSettingsUI();
      draw();
      updateSidebar();
    }));

    window.addEventListener('keydown', (event) => {
      if (game.state !== 'GAME' || game.currentQuestion) return;
      switch (event.key) {
        case 'ArrowLeft':
          event.preventDefault();
          moveUntilStop({ dx: -1, dy: 0 });
          break;
        case 'ArrowRight':
          event.preventDefault();
          moveUntilStop({ dx: 1, dy: 0 });
          break;
        case 'ArrowUp':
          event.preventDefault();
          moveUntilStop({ dx: 0, dy: -1 });
          break;
        case 'ArrowDown':
          event.preventDefault();
          moveUntilStop({ dx: 0, dy: 1 });
          break;
      }
    });

    el.canvas.addEventListener('pointerdown', handlePointerDown);
    el.canvas.addEventListener('pointermove', handlePointerMove);
    window.addEventListener('pointerup', handlePointerUp);
    window.addEventListener('pointercancel', handlePointerUp);
    window.addEventListener('resize', updateCanvasSize);
  }

  bindEvents();
  showScreen('menu');
  updateCanvasSize();
  tick();
})();
