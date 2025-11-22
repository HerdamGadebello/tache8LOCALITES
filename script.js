// Dados do quiz com todas as traduções possíveis atualizadas
const quizData = [
    {
        id: 1,
        french: "La boulangerie est au coin de la rue.",
        audio: "La boulangerie est au coin de la rue..mp3",
        images: ["BOULANGERIE.jpg", "COIN.jpg", "RUE.jpg"],
        correctAnswers: [
            "A padaria fica na esquina da rua.",
            "A padaria está no canto da rua.",
            "A padaria está na esquina da rua.",
            "A panificadora fica na esquina da rua.",
            "A panificadora está no canto da rua.",
            "A panificadora está na esquina da rua."
        ],
        alternatives: ["L'ÉCOLE", "VAS", "JE"]
    },
    {
        id: 2,
        french: "Je mange du pain tous les matins à la boulangerie.",
        audio: "Je mange du pain tous les matins à la boulangerie..mp3",
        images: ["MANGER.jpg", "MATIN.jpg", "BOULANGERIE.jpg"],
        correctAnswers: [
            "Eu como pão todas as manhãs na padaria.",
            "Todas as manhãs, eu como pão na padaria.",
            "Eu como pão todas as manhãs na panificadora.",
            "Todas as manhãs, eu como pão na panificadora."
        ],
        alternatives: ["À", "LA POSTE", "VAIS"]
    },
    {
        id: 3,
        french: "Le supermarché est loin d'ici.",
        audio: "Le supermarché est loin d'ici..mp3",
        images: ["SUPERMARCHÉ.jpg", "LOIN.jpg", "D'ICI.jpg"],
        correctAnswers: [
            "O supermercado fica longe daqui.",
            "O supermercado está longe daqui.",
            "O supermercado é longe daqui.",
            "O mercado fica longe daqui.",
            "O mercado está longe daqui.",
            "O mercado é longe daqui."
        ],
        alternatives: ["TOUS LES JOURS", "PRÈS", "ICI"]
    },
    // Continue com os outros 27 exercícios seguindo o mesmo padrão...
    {
        id: 4,
        french: "Dimanche, la banque est fermée dans la ville.",
        audio: "Dimanche, la banque est fermée dans la ville..mp3",
        images: ["DIMANCHE.jpg", "BANQUE.jpg", "FERMER.jpg", "DANS.jpg", "VILLE.jpg"],
        correctAnswers: [
            "No domingo, o banco está fechado na cidade.",
            "No domingo, o banco é fechado na cidade.",
            "No domingo, o banco fica fechado na cidade."
        ],
        alternatives: ["LUNDI", "OUVERT", "PETITE"]
    },
    {
        id: 5,
        french: "Elle cherche la gare du quartier.",
        audio: "Elle cherche la gare du quartier..mp3",
        images: ["ELLE.jpg", "CHERCHER.jpg", "GARE.jpg", "QUARTIER.jpg"],
        correctAnswers: [
            "Ela está procurando a estação do bairro.",
            "Ela procura a estação do bairro.",
            "Ela busca a estação do bairro."
        ],
        alternatives: ["IL", "TROUVE", "GRAND"]
    },
    // Adicione mais exercícios até completar 30...
    {
        id: 30,
        french: "Ma maison est à côté du parc.",
        audio: "Ma maison est à côté du parc..mp3",
        images: ["MAISON.jpg", "À CÔTÉ.jpg", "PARC.jpg"],
        correctAnswers: [
            "Minha casa fica ao lado do parque.",
            "Minha casa está do lado do parque.",
            "Minha casa é do lado do parque."
        ],
        alternatives: ["TON", "LOIN", "JARDIN"]
    }
];

// Estado da aplicação
let state = {
    currentPage: 'intro-page',
    currentQuestion: 0,
    score: 0,
    userAnswers: [],
    difficulty: 'easy',
    audioPlaybackRate: 1,
    selectedWords: [],
    answeredQuestions: new Set()
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
const audioBtn = document.getElementById('audio-btn');
const playbackRate = document.getElementById('playback-rate');
const rateValue = document.getElementById('rate-value');
const imagesSection = document.getElementById('images-section');
const easyMode = document.getElementById('easy-mode');
const hardMode = document.getElementById('hard-mode');
const sentenceDisplay = document.getElementById('sentence-display');
const wordChoices = document.getElementById('word-choices');
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
        playSound('BUTTON.mp3');
        difficultyButtons.classList.remove('hidden');
    });
    
    difficultyBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            playSound('BUTTON.mp3');
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
    
    prevBtn.addEventListener('click', () => {
        playSound('BUTTON.mp3');
        goToPreviousQuestion();
    });
    
    nextBtn.addEventListener('click', () => {
        playSound('BUTTON.mp3');
        goToNextQuestion();
    });
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
        easyMode.classList.remove('hidden');
        hardMode.classList.add('hidden');
    } else {
        modeText.textContent = "TRADUZA CORRETAMENTE A FRASE COM A AJUDA DO ÁUDIO E DAS IMAGENS";
        easyMode.classList.add('hidden');
        hardMode.classList.remove('hidden');
    }
}

// Carregar questão atual
function loadQuestion() {
    const question = quizData[state.currentQuestion];
    
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
        setupWordChoices(question);
    } else {
        answerInput.value = '';
        answerInput.disabled = state.answeredQuestions.has(state.currentQuestion);
    }
    
    // Esconder feedback e resetar estado
    feedback.classList.add('hidden');
    checkBtn.disabled = state.answeredQuestions.has(state.currentQuestion);
    
    // Atualizar estado dos botões de navegação
    prevBtn.disabled = state.currentQuestion === 0;
    nextBtn.disabled = state.currentQuestion === quizData.length - 1 && state.answeredQuestions.has(state.currentQuestion);
    
    // Resetar palavras selecionadas se não foi respondida
    if (!state.answeredQuestions.has(state.currentQuestion)) {
        state.selectedWords = [];
        updateSentenceDisplay();
    }
}

// Configurar escolhas de palavras (modo fácil)
function setupWordChoices(question) {
    wordChoices.innerHTML = '';
    sentenceDisplay.innerHTML = '';
    
    // Criar palavras da frase correta + apenas 3 alternativas extras
    const correctWords = question.french.split(' ');
    const allWords = [...new Set([...correctWords, ...question.alternatives.slice(0, 3)])];
    
    // Embaralhar palavras
    const shuffledWords = [...allWords].sort(() => Math.random() - 0.5);
    
    shuffledWords.forEach(word => {
        const wordBtn = document.createElement('button');
        wordBtn.className = 'word-btn';
        wordBtn.textContent = word;
        wordBtn.disabled = state.answeredQuestions.has(state.currentQuestion);
        wordBtn.addEventListener('click', () => {
            if (!state.answeredQuestions.has(state.currentQuestion)) {
                // Adicionar palavra à frase
                state.selectedWords.push(word);
                updateSentenceDisplay();
                wordBtn.disabled = true;
                wordBtn.classList.add('used');
            }
        });
        wordChoices.appendChild(wordBtn);
    });
}

// Atualizar display da frase sendo construída
function updateSentenceDisplay() {
    sentenceDisplay.innerHTML = '';
    
    if (state.selectedWords.length === 0) {
        const placeholder = document.createElement('div');
        placeholder.className = 'sentence-placeholder';
        placeholder.textContent = 'Clique nas palavras para formar a frase...';
        sentenceDisplay.appendChild(placeholder);
    } else {
        state.selectedWords.forEach((word, index) => {
            const wordElement = document.createElement('span');
            wordElement.className = 'sentence-word';
            wordElement.textContent = word;
            
            // Adicionar botão para remover palavra
            const removeBtn = document.createElement('button');
            removeBtn.className = 'remove-word';
            removeBtn.textContent = '×';
            removeBtn.addEventListener('click', () => {
                if (!state.answeredQuestions.has(state.currentQuestion)) {
                    state.selectedWords.splice(index, 1);
                    updateSentenceDisplay();
                    // Reativar o botão da palavra removida
                    const wordBtns = document.querySelectorAll('.word-btn');
                    wordBtns.forEach(btn => {
                        if (btn.textContent === word) {
                            btn.disabled = false;
                            btn.classList.remove('used');
                        }
                    });
                }
            });
            
            wordElement.appendChild(removeBtn);
            sentenceDisplay.appendChild(wordElement);
        });
    }
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
    playSound('BUTTON.mp3');
    const question = quizData[state.currentQuestion];
    let isCorrect = false;
    
    // Marcar como respondida
    state.answeredQuestions.add(state.currentQuestion);
    checkBtn.disabled = true;
    
    if (state.difficulty === 'easy') {
        // Verificar se as palavras selecionadas formam a frase correta
        const userPhrase = state.selectedWords.join(' ');
        isCorrect = userPhrase === question.french;
        
        // Desativar todos os botões de palavras
        const wordBtns = document.querySelectorAll('.word-btn');
        wordBtns.forEach(btn => {
            btn.disabled = true;
        });
    } else {
        // Verificar tradução (case-insensitive e aceita múltiplas respostas)
        const userAnswer = answerInput.value.trim().toLowerCase();
        const correctAnswers = question.correctAnswers.map(answer => 
            answer.toLowerCase().replace(/[.,]/g, '').trim()
        );
        
        // Remove pontuação da resposta do usuário para comparação
        const cleanUserAnswer = userAnswer.replace(/[.,]/g, '').trim();
        
        isCorrect = correctAnswers.some(correctAnswer => 
            cleanUserAnswer === correctAnswer
        );
        
        answerInput.disabled = true;
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
    if (state.difficulty === 'easy') {
        correctAnswer.textContent = `Frase correta: ${question.french}`;
    } else {
        correctAnswer.innerHTML = `Traduções aceitas:<br>${question.correctAnswers.join('<br>')}`;
    }
    feedback.classList.remove('hidden');
    
    // Salvar resposta do usuário
    state.userAnswers[state.currentQuestion] = {
        question: question.french,
        userAnswer: state.difficulty === 'easy' ? state.selectedWords.join(' ') : answerInput.value,
        isCorrect: isCorrect
    };
    
    // Atualizar botão próximo se for a última pergunta
    if (state.currentQuestion === quizData.length - 1) {
        nextBtn.disabled = false;
    }
    
    // Salvar progresso
    saveProgress();
}

// Reproduzir som
function playSound(soundFile) {
    const audio = new Audio(soundFile);
    audio.play().catch(e => console.log('Erro ao reproduzir áudio:', e));
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
        secondaryMessage.textContent = `Parabéns pelo seu desempenho excepcional! Você alcançou um resultado EXCELENTE, acertando ${state.score} das ${quizData.length} palavras no quiz de escrita em francês! Isso demonstra um domínio impressionante das expressões e da ortografia francesa. Continue assim, pois seu esforço e dedicação são inspiradores! Este resultado reflete não apenas sua habilidade linguística, mas também sua atenção aos detalhes e compromisso em aprender. Que tal continuar explorando o idioma com o mesmo entusiasmo? A prática constante vai te levar ainda mais longe.`;
        resultImage.src = "MASCOTEFELIZ.png";
        playSound("POSITIVO.mp3");
    } else if (percentage >= 75) {
        mainMessage.textContent = "PARABÉNS";
        secondaryMessage.textContent = `Parabéns pelo seu desempenho! Você obteve um BOM resultado, acertando ${state.score} das ${quizData.length} palavras no quiz de escrita em francês! Isso mostra que você está no caminho certo, com uma sólida compreensão do idioma. Sua dedicação está valendo a pena, e cada palavra certa é um passo rumo à fluência. Continue assim, brilhando no aprendizado do francês!`;
        resultImage.src = "MASCOTEALEGRE.png";
        playSound("POSITIVO.mp3");
    } else if (percentage >= 60) {
        mainMessage.textContent = "QUASE LÁ";
        secondaryMessage.textContent = `Você alcançou o nível SUFICIENTE, acertando ${state.score} das ${quizData.length} palavras no quiz de escrita em francês! Isso indica um progresso notável, com uma boa base no idioma. Sua dedicação está clara, e você está muito próximo de resultados ainda melhores. Cada palavra escrita é um avanço no aprendizado do francês. Continue se empenhando, e logo verá seu desempenho crescer! Siga firme na jornada para dominar o idioma!`;
        resultImage.src = "MASCOTEDUVIDA.png";
        playSound("NEGATIVO.mp3");
    } else {
        mainMessage.textContent = "NÃO FOI DESSA VEZ";
        secondaryMessage.textContent = `Você obteve o nível INSUFICIENTE, acertando ${state.score} das ${quizData.length} palavras no quiz de escrita em francês. Não desanime! Cada tentativa é uma oportunidade de aprendizado, e você já deu o primeiro passo ao participar. O francês pode ser desafiador, mas com prática, você vai melhorar. Reforce as palavras e continue se dedicando. Sua persistência vai te levar mais longe na jornada do idioma!`;
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
        difficulty: state.difficulty,
        answeredQuestions: Array.from(state.answeredQuestions)
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
        state.answeredQuestions = new Set(progressData.answeredQuestions || []);
    }
}
