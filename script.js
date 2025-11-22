// Dados do quiz
const quizData = [
    {
        id: 1,
        french: "La boulangerie est au coin de la rue.",
        audio: "La boulangerie est au coin de la rue..mp3",
        images: ["BOULANGERIE.jpg", "COIN.jpg", "RUE.jpg"],
        correctAnswer: "A padaria fica na esquina da rua.",
        alternatives: ["TOUS LES JOURS", "JE", "VAIS", "À", "LA POSTE", "L'ÉCOLE", "VAS"]
    },
    {
        id: 2,
        french: "Je mange du pain tous les matins à la boulangerie.",
        audio: "Je mange du pain tous les matins à la boulangerie..mp3",
        images: ["MANGER.jpg", "MATIN.jpg", "BOULANGERIE.jpg"],
        correctAnswer: "Eu como pão todas as manhãs na padaria.",
        alternatives: ["TOUS LES JOURS", "JE", "VAIS", "À", "LA POSTE", "L'ÉCOLE", "VAS"]
    },
    // Adicione os outros 28 exercícios seguindo o mesmo padrão
    // ...
    {
        id: 30,
        french: "Ma maison est à côté du parc.",
        audio: "Ma maison est à côté du parc..mp3",
        images: ["MAISON.jpg", "À CÔTÉ.jpg", "PARC.jpg"],
        correctAnswer: "Minha casa fica ao lado do parque.",
        alternatives: ["TOUS LES JOURS", "JE", "VAIS", "À", "LA POSTE", "L'ÉCOLE", "VAS"]
    }
];

// Estado da aplicação
let state = {
    currentPage: 'intro-page',
    currentQuestion: 0,
    score: 0,
    userAnswers: [],
    difficulty: 'easy',
    audioPlaybackRate: 1
};

// Elementos DOM
const pages = document.querySelectorAll('.page');
const introVideo = document.getElementById('intro-video');
const introAudio = document.getElementById('intro-audio');
const startBtn = document.getElementById('start-btn');
const difficultyButtons = document.getElementById('difficulty-buttons');
const difficultyBtns = document.querySelectorAll('.difficulty-btn');
const quizPage = document.getElementById('quiz-page');
const modeIndicator = document.getElementById('mode-indicator');
const modeText = document.getElementById('mode-text');
const frenchSentence = document.getElementById('french-sentence');
const audioBtn = document.getElementById('audio-btn');
const playbackRate = document.getElementById('playback-rate');
const rateValue = document.getElementById('rate-value');
const imagesSection = document.getElementById('images-section');
const wordChoices = document.getElementById('word-choices');
const translationInput = document.getElementById('translation-input');
const answerInput = document.getElementById('answer-input');
const checkBtn = document.getElementById('check-btn');
const feedback = document.getElementById('feedback');
const resultStatus = document.getElementById('result-status');
const correctAnswer = document.getElementById('correct-answer');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');
const progressBar = document.getElementById('progress');
const progressText = document.getElementById('progress-text');
const resultsPage = document.getElementById('results-page');
const mainMessage = document.getElementById('main-message');
const secondaryMessage = document.getElementById('secondary-message');
const resultImage = document.getElementById('result-image');

// Inicialização
document.addEventListener('DOMContentLoaded', () => {
    loadProgress();
    setupEventListeners();
    
    // Transição automática da página inicial
    introVideo.addEventListener('ended', () => {
        setTimeout(() => {
            showPage('home-page');
        }, 500);
    });
});

// Configurar event listeners
function setupEventListeners() {
    startBtn.addEventListener('click', () => {
        difficultyButtons.classList.remove('hidden');
    });
    
    difficultyBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            state.difficulty = e.target.dataset.difficulty;
            startQuiz();
        });
    });
    
    audioBtn.addEventListener('click', playAudio);
    
    playbackRate.addEventListener('input', (e) => {
        state.audioPlaybackRate = parseFloat(e.target.value);
        rateValue.textContent = `${state.audioPlaybackRate}x`;
    });
    
    checkBtn.addEventListener('click', checkAnswer);
    
    prevBtn.addEventListener('click', goToPreviousQuestion);
    nextBtn.addEventListener('click', goToNextQuestion);
}

// Mostrar página específica
function showPage(pageId) {
    pages.forEach(page => {
        page.classList.remove('active');
    });
    document.getElementById(pageId).classList.add('active');
    state.currentPage = pageId;
}

// Iniciar quiz
function startQuiz() {
    showPage('quiz-page');
    updateModeIndicator();
    loadQuestion();
    updateProgress();
}

// Atualizar indicador de modo
function updateModeIndicator() {
    if (state.difficulty === 'easy') {
        modeText.textContent = "FORME CORRETAMENTE A FRASE COM A AJUDA DO ÁUDIO E DAS IMAGENS";
    } else {
        modeText.textContent = "TRADUZA CORRETAMENTE A FRASE COM A AJUDA DO ÁUDIO E DAS IMAGENS";
    }
}

// Carregar questão atual
function loadQuestion() {
    const question = quizData[state.currentQuestion];
    
    // Atualizar frase em francês
    frenchSentence.textContent = question.french;
    
    // Atualizar imagens
    imagesSection.innerHTML = '';
    question.images.forEach(img => {
        const imgElement = document.createElement('img');
        imgElement.src = img;
        imgElement.alt = img.replace('.jpg', '');
        imagesSection.appendChild(imgElement);
    });
    
    // Configurar área de resposta baseada na dificuldade
    if (state.difficulty === 'easy') {
        wordChoices.classList.remove('hidden');
        translationInput.classList.add('hidden');
        setupWordChoices(question);
    } else {
        wordChoices.classList.add('hidden');
        translationInput.classList.remove('hidden');
        answerInput.value = '';
    }
    
    // Esconder feedback
    feedback.classList.add('hidden');
    
    // Atualizar estado dos botões de navegação
    prevBtn.disabled = state.currentQuestion === 0;
    nextBtn.disabled = state.currentQuestion === quizData.length - 1;
}

// Configurar escolhas de palavras (modo fácil)
function setupWordChoices(question) {
    wordChoices.innerHTML = '';
    
    // Embaralhar alternativas
    const shuffledAlternatives = [...question.alternatives].sort(() => Math.random() - 0.5);
    
    shuffledAlternatives.forEach(alternative => {
        const wordBtn = document.createElement('button');
        wordBtn.className = 'word-btn';
        wordBtn.textContent = alternative;
        wordBtn.addEventListener('click', () => {
            // Lógica para selecionar/desselecionar palavras
            wordBtn.classList.toggle('selected');
        });
        wordChoices.appendChild(wordBtn);
    });
}

// Reproduzir áudio
function playAudio() {
    const question = quizData[state.currentQuestion];
    const audio = new Audio(question.audio);
    audio.playbackRate = state.audioPlaybackRate;
    audio.play();
    
    // Feedback visual
    audioBtn.classList.add('playing');
    setTimeout(() => {
        audioBtn.classList.remove('playing');
    }, 500);
}

// Verificar resposta
function checkAnswer() {
    const question = quizData[state.currentQuestion];
    let isCorrect = false;
    
    if (state.difficulty === 'easy') {
        // Verificar seleção de palavras
        const selectedWords = Array.from(document.querySelectorAll('.word-btn.selected'))
            .map(btn => btn.textContent)
            .join(' ');
        isCorrect = selectedWords === question.french;
    } else {
        // Verificar tradução (case-insensitive)
        const userAnswer = answerInput.value.trim().toLowerCase();
        const correctAnswers = question.correctAnswer.split('.').map(a => a.trim().toLowerCase());
        isCorrect = correctAnswers.includes(userAnswer);
    }
    
    // Atualizar pontuação
    if (isCorrect) {
        state.score++;
        playSound('WIN.wav');
        resultStatus.textContent = 'CORRETO';
        resultStatus.className = 'correct';
    } else {
        playSound('ERROR.wav');
        resultStatus.textContent = 'INCORRETO';
        resultStatus.className = 'incorrect';
    }
    
    // Mostrar resposta correta
    correctAnswer.textContent = question.correctAnswer;
    feedback.classList.remove('hidden');
    
    // Salvar resposta do usuário
    state.userAnswers[state.currentQuestion] = {
        question: question.french,
        userAnswer: state.difficulty === 'easy' ? 
            Array.from(document.querySelectorAll('.word-btn.selected')).map(btn => btn.textContent).join(' ') :
            answerInput.value,
        isCorrect: isCorrect
    };
    
    // Salvar progresso
    saveProgress();
}

// Reproduzir som
function playSound(soundFile) {
    const audio = new Audio(soundFile);
    audio.play();
}

// Navegar para questão anterior
function goToPreviousQuestion() {
    if (state.currentQuestion > 0) {
        state.currentQuestion--;
        loadQuestion();
        updateProgress();
    }
}

// Navegar para próxima questão
function goToNextQuestion() {
    if (state.currentQuestion < quizData.length - 1) {
        state.currentQuestion++;
        loadQuestion();
        updateProgress();
    } else {
        showResults();
    }
}

// Atualizar barra de progresso
function updateProgress() {
    const progress = ((state.currentQuestion + 1) / quizData.length) * 100;
    progressBar.style.width = `${progress}%`;
    progressText.textContent = `${state.currentQuestion + 1}/${quizData.length}`;
}

// Mostrar resultados
function showResults() {
    showPage('results-page');
    
    const percentage = (state.score / quizData.length) * 100;
    
    // Determinar resultado com base na porcentagem
    if (percentage >= 95) {
        mainMessage.textContent = "EXCELENTE";
        secondaryMessage.textContent = `Parabéns pelo seu desempenho excepcional! Você alcançou um resultado EXCELENTE, acertando ${state.score} das palavras no quiz de escrita em francês! Isso demonstra um domínio impressionante das expressões e da ortografia francesa. Continue assim, pois seu esforço e dedicação são inspiradores! Este resultado reflete não apenas sua habilidade linguística, mas também sua atenção aos detalhes e compromisso em aprender. Que tal continuar explorando o idioma com o mesmo entusiasmo? A prática constante vai te levar ainda mais longe.`;
        resultImage.src = "MASCOTEFELIZ.png";
        playSound("POSITIVO.mp3");
    } else if (percentage >= 75) {
        mainMessage.textContent = "PARABÉNS";
        secondaryMessage.textContent = `Parabéns pelo seu desempenho! Você obteve um BOM resultado, acertando ${state.score} das palavras no quiz de escrita em francês! Isso mostra que você está no caminho certo, com uma sólida compreensão do idioma. Sua dedicação está valendo a pena, e cada palavra certa é um passo rumo à fluência. Continue assim, brilhando no aprendizado do francês!`;
        resultImage.src = "MASCOTEALEGRE.png";
        playSound("POSITIVO.mp3");
    } else if (percentage >= 60) {
        mainMessage.textContent = "QUASE LÁ";
        secondaryMessage.textContent = `Você alcançou o nível SUFICIENTE, acertando ${state.score} das palavras no quiz de escrita em francês! Isso indica um progresso notável, com uma boa base no idioma. Sua dedicação está clara, e você está muito próximo de resultados ainda melhores. Cada palavra escrita é um avanço no aprendizado do francês. Continue se empenhando, e logo verá seu desempenho crescer! Siga firme na jornada para dominar o idioma!`;
        resultImage.src = "MASCOTEDUVIDA.png";
        playSound("NEGATIVO.mp3");
    } else {
        mainMessage.textContent = "NÃO FOI DESSA VEZ";
        secondaryMessage.textContent = `Você obteve o nível INSUFICIENTE, acertando ${state.score} das palavras no quiz de escrita em francês. Não desanime! Cada tentativa é uma oportunidade de aprendizado, e você já deu o primeiro passo ao participar. O francês pode ser desafiador, mas com prática, você vai melhorar. Reforce as palavras e continue se dedicando. Sua persistência vai te levar mais longe na jornada do idioma!`;
        resultImage.src = "MASCOTEDUVIDA.png";
        playSound("NEGATIVO.mp3");
    }
}

// Salvar progresso no localStorage
function saveProgress() {
    const progressData = {
        currentQuestion: state.currentQuestion,
        score: state.score,
        userAnswers: state.userAnswers,
        difficulty: state.difficulty
    };
    localStorage.setItem('frenchQuizProgress', JSON.stringify(progressData));
}

// Carregar progresso do localStorage
function loadProgress() {
    const savedProgress = localStorage.getItem('frenchQuizProgress');
    if (savedProgress) {
        const progressData = JSON.parse(savedProgress);
        state.currentQuestion = progressData.currentQuestion || 0;
        state.score = progressData.score || 0;
        state.userAnswers = progressData.userAnswers || [];
        state.difficulty = progressData.difficulty || 'easy';
    }
}
