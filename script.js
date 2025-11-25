// Dados do quiz com 30 exercícios completos
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
        alternatives: ["l'école", "vas", "je"]
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
        alternatives: ["à", "la poste", "vais"]
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
        alternatives: ["tous les jours", "près", "ici"]
    },
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
        alternatives: ["lundi", "ouvert", "petite"]
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
        alternatives: ["il", "trouve", "grand"]
    },
    {
        id: 6,
        french: "Ma maison est près de l'école.",
        audio: "Ma maison est près de l'école..mp3",
        images: ["MAISON.jpg", "PRÈS.jpg", "ÉCOLE.jpg"],
        correctAnswers: [
            "Minha casa fica perto da escola.",
            "Minha casa está perto da escola.",
            "Minha casa é perto da escola."
        ],
        alternatives: ["ton", "loin", "jardin"]
    },
    {
        id: 7,
        french: "Tu habites dans un quartier calme.",
        audio: "Tu habites dans un quartier calme..mp3",
        images: ["TU.jpg", "HABITER.jpg", "DANS.jpg", "QUARTIER.jpg", "CALME.jpg"],
        correctAnswers: [
            "Você mora em um bairro tranquilo.",
            "Você mora em um bairro calmo.",
            "Você mora em um bairro sossegado."
        ],
        alternatives: ["je", "bruyant", "ville"]
    },
    {
        id: 8,
        french: "Le restaurant est à côté de la poste.",
        audio: "Le restaurant est à côté de la poste..mp3",
        images: ["RESTAURANT.jpg", "À CÔTÉ.jpg", "POSTE.jpg"],
        correctAnswers: [
            "O restaurante fica ao lado dos correios.",
            "O restaurante está ao lado dos correios.",
            "O restaurante é ao lado do correio.",
            "O restaurante é ao lado dos correios.",
            "O restaurante está ao lado do correio.",
            "O restaurante fica ao lado do correio."
        ],
        alternatives: ["loin", "devant", "banque"]
    },
    {
        id: 9,
        french: "Elle va manger tous les jours au restaurant.",
        audio: "Elle va manger tous les jours au restaurant..mp3",
        images: ["ELLE.jpg", "MANGER.jpg", "TOUS LES JOURS.jpg", "RESTAURANT.jpg"],
        correctAnswers: [
            "Ela vai comer no restaurante todos os dias.",
            "Ela vai comer todos os dias no restaurante."
        ],
        alternatives: ["il", "parfois", "maison"]
    },
    {
        id: 10,
        french: "Le cinéma est à côté de la place, mais loin d'ici.",
        audio: "Le cinéma est à côté de la place, mais loin d'ici..mp3",
        images: ["CINÉMA.jpg", "À CÔTÉ.jpg", "PLACE.jpg", "LOIN.jpg", "D'ICI.jpg"],
        correctAnswers: [
            "O cinema fica ao lado da praça, mas longe daqui.",
            "O cinema está ao lado da praça, mas longe daqui.",
            "O cinema é ao lado da praça, mas longe daqui."
        ],
        alternatives: ["près", "petite", "école"]
    },
    {
        id: 11,
        french: "Tous les soirs, je passe devant la pâtisserie.",
        audio: "Tous les soirs, je passe devant la pâtisserie..mp3",
        images: ["SOIR.jpg", "DEVANT.jpg", "PÂTISSERIE.jpg"],
        correctAnswers: [
            "Todas as noites, eu passo em frente à confeitaria.",
            "Todas as noites, eu passo na frente da confeitaria."
        ],
        alternatives: ["matins", "derrière", "boulangerie"]
    },
    {
        id: 12,
        french: "La salle de sport est dans ma rue.",
        audio: "La salle de sport est dans ma rue..mp3",
        images: ["SALLE DE SPORT.jpg", "DANS.jpg", "RUE.jpg"],
        correctAnswers: [
            "A academia fica na minha rua.",
            "A academia é na minha rua."
        ],
        alternatives: ["ton", "avenue", "loin"]
    },
    {
        id: 13,
        french: "Nous cherchons la pharmacie.",
        audio: "Nous cherchons la pharmacie..mp3",
        images: ["NOUS.jpg", "CHERCHER.jpg", "PHARMACIE.jpg"],
        correctAnswers: [
            "Nós estamos procurando a farmácia.",
            "Nós procuramos a farmácia.",
            "Nós buscamos a farmácia."
        ],
        alternatives: ["je", "trouvons", "hôpital"]
    },
    {
        id: 14,
        french: "Le musée est loin d'ici.",
        audio: "Le musée est loin d'ici..mp3",
        images: ["MUSÉE.jpg", "LOIN.jpg", "D'ICI.jpg"],
        correctAnswers: [
            "O museu fica longe daqui.",
            "O museu está longe daqui.",
            "O museu é longe daqui."
        ],
        alternatives: ["près", "bibliothèque", "grand"]
    },
    {
        id: 15,
        french: "La mairie est au centre de la ville.",
        audio: "La mairie est au centre de la ville..mp3",
        images: ["MAIRIE.jpg", "CENTRE.jpg", "VILLE.jpg"],
        correctAnswers: [
            "A prefeitura fica no centro da cidade.",
            "A prefeitura está no centro da cidade.",
            "A prefeitura é no centro da cidade."
        ],
        alternatives: ["banlieue", "petite", "école"]
    },
    {
        id: 16,
        french: "L'école est proche d'ici.",
        audio: "L'école est proche d'ici..mp3",
        images: ["ÉCOLE.jpg", "PROCHE.jpg", "D'ICI.jpg"],
        correctAnswers: [
            "A escola fica próxima daqui.",
            "A escola está próxima daqui.",
            "A escola é próxima daqui."
        ],
        alternatives: ["loin", "grande", "université"]
    },
    {
        id: 17,
        french: "Le cimetière est très calme et loin du centre.",
        audio: "Le cimetière est très calme et loin du centre..mp3",
        images: ["CIMETIÈRE.jpg", "CALME.jpg", "LOIN.jpg", "CENTRE.jpg"],
        correctAnswers: [
            "O cemitério é muito tranquilo e longe do centro.",
            "O cemitério é muito calmo e longe do centro."
        ],
        alternatives: ["près", "bruyant", "petit"]
    },
    {
        id: 18,
        french: "Elle va déjeuner devant l'hôpital.",
        audio: "Elle va déjeuner devant l'hôpital..mp3",
        images: ["ELLE.jpg", "DÉJEUNER.jpg", "DEVANT.jpg", "HÔPITAL.jpg"],
        correctAnswers: [
            "Ela vai almoçar em frente ao hospital.",
            "Ela vai almoçar na frente do hospital."
        ],
        alternatives: ["il", "dîner", "derrière"]
    },
    {
        id: 19,
        french: "La pâtisserie est fermée le dimanche.",
        audio: "La pâtisserie est fermée le dimanche..mp3",
        images: ["PÂTISSERIE.jpg", "FERMER.jpg", "DIMANCHE.jpg"],
        correctAnswers: [
            "A confeitaria está fechada no domingo.",
            "A confeitaria fica fechada no domingo.",
            "A confeitaria é fechada no domingo."
        ],
        alternatives: ["lundi", "ouverte", "boulangerie"]
    },
    {
        id: 20,
        french: "Il y a un joli magasin dans ton quartier.",
        audio: "Il y a un joli magasin dans ton quartier..mp3",
        images: ["JOLIE.jpg", "MAGASIN.jpg", "DANS.jpg", "QUARTIER.jpg"],
        correctAnswers: [
            "Há uma loja linda no seu bairro.",
            "Há uma loja linda no teu bairro.",
            "Há uma linda loja no seu bairro.",
            "Há uma linda loja no teu bairro.",
            "Tem uma loja linda no seu bairro.",
            "Tem uma loja linda no teu bairro.",
            "Tem uma linda loja no seu bairro.",
            "Tem uma linda loja no teu bairro."
        ],
        alternatives: ["elle", "laid", "ville"]
    },
    {
        id: 21,
        french: "Nous allons manger au parc le soir.",
        audio: "Nous allons manger au parc le soir..mp3",
        images: ["NOUS.jpg", "MANGER.jpg", "PARC.jpg", "SOIR.jpg"],
        correctAnswers: [
            "Nós vamos comer no parque à noite.",
            "Nós vamos comer no parque de noite."
        ],
        alternatives: ["je", "matin", "jardin"]
    },
    {
        id: 22,
        french: "La gare est loin d'ici.",
        audio: "La gare est loin d'ici..mp3",
        images: ["GARE.jpg", "LOIN.jpg", "D'ICI.jpg"],
        correctAnswers: [
            "A estação fica longe daqui.",
            "A estação está longe daqui.",
            "A estação é longe daqui."
        ],
        alternatives: ["près", "aéroport", "grande"]
    },
    {
        id: 23,
        french: "Le magasin est près du cinéma.",
        audio: "Le magasin est près du cinéma..mp3",
        images: ["MAGASIN.jpg", "PRÈS.jpg", "CINÉMA.jpg"],
        correctAnswers: [
            "A loja fica perto do cinema.",
            "A loja está perto do cinema.",
            "A loja é perto do cinema."
        ],
        alternatives: ["loin", "théâtre", "petite"]
    },
    {
        id: 24,
        french: "Tous les jours, je vais à la poste.",
        audio: "Tous les jours, je vais à la poste..mp3",
        images: ["TOUS LES JOURS.jpg", "POSTE.jpg"],
        correctAnswers: [
            "Todos os dias, eu vou aos correios.",
            "Todos os dias, eu vou ao correio."
        ],
        alternatives: ["parfois", "banque", "école"]
    },
    {
        id: 25,
        french: "La boulangerie de mon quartier est fermée le dimanche.",
        audio: "La boulangerie de mon quartier est fermée le dimanche..mp3",
        images: ["BOULANGERIE.jpg", "QUARTIER.jpg", "FERMER.jpg", "DIMANCHE.jpg"],
        correctAnswers: [
            "A padaria do meu bairro está fechada no domingo.",
            "A padaria do meu bairro fica fechada no domingo.",
            "A padaria do meu bairro é fechada aos domingos.",
            "A padaria do meu bairro é fechada no domingo.",
            "A padaria do meu bairro fica fechada aos domingos."
        ],
        alternatives: ["ton", "ouverte", "lundi"]
    },
    {
        id: 26,
        french: "La bibliothèque est à côté de la mairie.",
        audio: "La bibliothèque est à côté de la mairie..mp3",
        images: ["BIBLIOTHÈQUE.jpg", "À CÔTÉ.jpg", "MAIRIE.jpg"],
        correctAnswers: [
            "A biblioteca fica ao lado da prefeitura.",
            "A biblioteca está ao lado da prefeitura.",
            "A biblioteca é ao lado da prefeitura."
        ],
        alternatives: ["loin", "école", "musée"]
    },
    {
        id: 27,
        french: "Le petit magasin du coin est joli.",
        audio: "Le petit magasin du coin est joli..mp3",
        images: ["PETIT.jpg", "MAGASIN.jpg", "COIN.jpg", "JOLIE.jpg"],
        correctAnswers: [
            "A lojinha da esquina é linda.",
            "A pequena loja da esquina é linda.",
            "A lojinha do canto é linda.",
            "A pequena loja do canto é linda."
        ],
        alternatives: ["grand", "laid", "rue"]
    },
    {
        id: 28,
        french: "Je vais manger à la boulangerie cette semaine.",
        audio: "Je vais manger à la boulangerie cette semaine..mp3",
        images: ["MANGER.jpg", "BOULANGERIE.jpg", "SEMAINE.jpg"],
        correctAnswers: [
            "Eu vou comer na padaria esta semana.",
            "Vou comer na padaria esta semana."
        ],
        alternatives: ["il", "mois", "restaurant"]
    },
    {
        id: 29,
        french: "Nous déjeunons tous les jours près de l'école.",
        audio: "Nous déjeunons tous les jours près de l'école..mp3",
        images: ["NOUS.jpg", "DÉJEUNER.jpg", "TOUS LES JOURS.jpg", "PRÈS.jpg", "ÉCOLE.jpg"],
        correctAnswers: [
            "Nós almoçamos todos os dias perto da escola.",
            "Almoçamos todos os dias perto da escola."
        ],
        alternatives: ["je", "loin", "maison"]
    },
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
        alternatives: ["ton", "loin", "jardin"]
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
    answeredQuestions: new Set(),
    currentAudio: null,
    selectedExercises: [] // Array para armazenar os exercícios selecionados aleatoriamente
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
    // Resetar estado ao iniciar
    resetState();
    setupEventListeners();
    
    // Transição automática da página inicial
    introVideo.addEventListener('ended', () => {
        setTimeout(() => {
            showPage('home-page');
        }, 500);
    });
});

// Resetar estado da aplicação
function resetState() {
    state = {
        currentPage: 'intro-page',
        currentQuestion: 0,
        score: 0,
        userAnswers: [],
        difficulty: 'easy',
        audioPlaybackRate: 1,
        selectedWords: [],
        answeredQuestions: new Set(),
        currentAudio: null,
        selectedExercises: []
    };
    localStorage.removeItem('frenchQuizProgress');
}

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
    
    // Configurar controle de velocidade do áudio - CORRIGIDO
    playbackRate.addEventListener('input', (e) => {
        state.audioPlaybackRate = parseFloat(e.target.value);
        rateValue.textContent = `${state.audioPlaybackRate}x`;
        
        // Aplicar a velocidade ao áudio atual se estiver tocando
        if (state.currentAudio) {
            state.currentAudio.playbackRate = state.audioPlaybackRate;
        }
    });
    
    checkBtn.addEventListener('click', checkAnswer);
    
    // Removido event listener do botão voltar
    
    nextBtn.addEventListener('click', () => {
        playSound('BUTTON.mp3');
        goToNextQuestion();
    });

    // Permitir digitação no modo difícil
    answerInput.addEventListener('focus', () => {
        if (state.answeredQuestions.has(state.currentQuestion)) {
            answerInput.blur();
        }
    });

    // Permitir Enter para verificar resposta
    answerInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter' && !checkBtn.disabled) {
            checkAnswer();
        }
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

// Selecionar 15 exercícios aleatórios do repertório de 30
function selectRandomExercises() {
    // Criar array com todos os índices (0-29)
    const allIndices = Array.from({length: quizData.length}, (_, i) => i);
    
    // Embaralhar os índices
    const shuffledIndices = allIndices.sort(() => Math.random() - 0.5);
    
    // Selecionar os primeiros 15 índices
    const selectedIndices = shuffledIndices.slice(0, 15);
    
    // Retornar os exercícios correspondentes
    return selectedIndices.map(index => quizData[index]);
}

// Iniciar quiz
function startQuiz() {
    // Selecionar 15 exercícios aleatórios
    state.selectedExercises = selectRandomExercises();
    
    // Resetar para primeira questão
    state.currentQuestion = 0;
    state.score = 0;
    state.answeredQuestions.clear();
    state.selectedWords = [];
    
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
    const question = state.selectedExercises[state.currentQuestion];
    
    // Parar áudio atual se estiver tocando
    if (state.currentAudio) {
        state.currentAudio.pause();
        state.currentAudio = null;
    }
    
    // Atualizar imagens
    imagesSection.innerHTML = '';
    question.images.forEach(img => {
        const imgElement = document.createElement('img');
        imgElement.src = img;
        imgElement.alt = img.replace('.jpg', '');
        imgElement.onerror = () => {
            console.log(`Imagem não encontrada: ${img}`);
        };
        imagesSection.appendChild(imgElement);
    });
    
    // Configurar área de resposta baseada na dificuldade
    if (state.difficulty === 'easy') {
        setupWordChoices(question);
    } else {
        answerInput.value = '';
        answerInput.disabled = state.answeredQuestions.has(state.currentQuestion);
        if (!state.answeredQuestions.has(state.currentQuestion)) {
            answerInput.focus();
        }
    }
    
    // Esconder feedback e resetar estado
    feedback.classList.add('hidden');
    checkBtn.disabled = state.answeredQuestions.has(state.currentQuestion);
    
    // Atualizar estado dos botões de navegação
    // REMOVIDO: prevBtn.disabled = state.currentQuestion === 0;
    prevBtn.style.display = 'none'; // Esconder botão voltar
    
    // Botão avançar só fica habilitado depois de verificar
    nextBtn.disabled = !state.answeredQuestions.has(state.currentQuestion);
    
    // Resetar palavras selecionadas se não foi respondida
    if (!state.answeredQuestions.has(state.currentQuestion)) {
        state.selectedWords = [];
        updateSentenceDisplay();
    }
}

// Configurar escolhas de palavras (modo fácil)
function setupWordChoices(question) {
    wordChoices.innerHTML = '';
    
    // Analisar a frase para identificar palavras repetidas
    const words = question.french.split(' ');
    const wordCount = {};
    words.forEach(word => {
        wordCount[word] = (wordCount[word] || 0) + 1;
    });
    
    // Criar array com palavras repetidas conforme necessário
    let allWords = [];
    Object.keys(wordCount).forEach(word => {
        for (let i = 0; i < wordCount[word]; i++) {
            allWords.push(word);
        }
    });
    
    // Adicionar apenas 3 alternativas extras
    const extraWords = question.alternatives.slice(0, 3);
    allWords = [...allWords, ...extraWords];
    
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
                
                // Desabilitar apenas se não houver mais instâncias disponíveis
                const currentWordCount = state.selectedWords.filter(w => w === word).length;
                const availableWordCount = shuffledWords.filter(w => w === word).length;
                
                if (currentWordCount >= availableWordCount) {
                    const wordBtns = document.querySelectorAll('.word-btn');
                    wordBtns.forEach(btn => {
                        if (btn.textContent === word && !btn.disabled) {
                            btn.disabled = true;
                            btn.classList.add('used');
                        }
                    });
                }
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
            
            // Adicionar botão para remover palavra apenas se não foi respondida
            if (!state.answeredQuestions.has(state.currentQuestion)) {
                const removeBtn = document.createElement('button');
                removeBtn.className = 'remove-word';
                removeBtn.textContent = '×';
                removeBtn.addEventListener('click', () => {
                    if (!state.answeredQuestions.has(state.currentQuestion)) {
                        state.selectedWords.splice(index, 1);
                        updateSentenceDisplay();
                        
                        // Reativar uma instância da palavra removida
                        const wordBtns = document.querySelectorAll('.word-btn');
                        let reactivated = false;
                        wordBtns.forEach(btn => {
                            if (btn.textContent === word && btn.disabled && !reactivated) {
                                btn.disabled = false;
                                btn.classList.remove('used');
                                reactivated = true;
                            }
                        });
                    }
                });
                wordElement.appendChild(removeBtn);
            }
            
            sentenceDisplay.appendChild(wordElement);
        });
    }
}

// Reproduzir áudio - FUNÇÃO MELHORADA com controle de velocidade
function playAudio() {
    const question = state.selectedExercises[state.currentQuestion];
    
    // Parar áudio atual se estiver tocando
    if (state.currentAudio) {
        state.currentAudio.pause();
        state.currentAudio = null;
    }
    
    // Criar novo áudio com tratamento de erro melhorado
    state.currentAudio = new Audio();
    state.currentAudio.playbackRate = state.audioPlaybackRate; // Aplicar velocidade
    
    // Configurar eventos do áudio
    state.currentAudio.onerror = function() {
        console.error('Erro ao carregar áudio:', question.audio);
        alert('Erro ao carregar o áudio. Verifique se o arquivo existe: ' + question.audio);
    };
    
    state.currentAudio.oncanplaythrough = function() {
        state.currentAudio.play().catch(e => {
            console.error('Erro ao reproduzir áudio:', e);
            alert('Erro ao reproduzir áudio. Verifique as permissões do navegador.');
        });
    };
    
    // Tentar carregar o áudio
    state.currentAudio.src = question.audio;
    state.currentAudio.load();
    
    // Feedback visual
    audioBtn.classList.add('playing');
    setTimeout(() => {
        audioBtn.classList.remove('playing');
    }, 500);
}

// Verificar resposta
function checkAnswer() {
    playSound('BUTTON.mp3');
    const question = state.selectedExercises[state.currentQuestion];
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
    
    // Atualizar pontuação apenas se não foi respondida antes
    if (!state.userAnswers[state.currentQuestion]) {
        if (isCorrect) {
            state.score++;
        }
    }
    
    // Feedback sonoro
    if (isCorrect) {
        playSound('WIN.wav');
        resultStatus.textContent = 'CORRETO';
        resultStatus.className = 'correct';
    } else {
        playSound('ERROR.wav');
        resultStatus.textContent = 'INCORRETO';
        resultStatus.className = 'incorrect';
    }
    
    // Mostrar resposta correta com TODAS as traduções possíveis
    let correctAnswerHTML = '';
    if (state.difficulty === 'easy') {
        correctAnswerHTML = `Frase correta: ${question.french}<br><br>`;
    }
    correctAnswerHTML += `<strong>Traduções aceitas:</strong><br>`;
    question.correctAnswers.forEach((answer, index) => {
        correctAnswerHTML += `${index + 1}. ${answer}<br>`;
    });
    
    correctAnswer.innerHTML = correctAnswerHTML;
    feedback.classList.remove('hidden');
    
    // Salvar resposta do usuário
    state.userAnswers[state.currentQuestion] = {
        question: question.french,
        userAnswer: state.difficulty === 'easy' ? state.selectedWords.join(' ') : answerInput.value,
        isCorrect: isCorrect,
        score: isCorrect ? 1 : 0
    };
    
    // Habilitar botão avançar após verificar
    nextBtn.disabled = false;
    
    // Salvar progresso
    saveProgress();
    
    // Debug: mostrar pontuação atual
    console.log(`Pontuação atual: ${state.score}/${state.currentQuestion + 1}`);
}

// Reproduzir som - FUNÇÃO MELHORADA
function playSound(soundFile) {
    const audio = new Audio(soundFile);
    audio.onerror = function() {
        console.error('Erro ao carregar som:', soundFile);
    };
    audio.play().catch(e => {
        console.error('Erro ao reproduzir som:', e);
    });
}

// Navegar para questão anterior - REMOVIDA
// function goToPreviousQuestion() { ... }

// Navegar para próxima questão
function goToNextQuestion() {
    if (state.currentQuestion < state.selectedExercises.length - 1) {
        state.currentQuestion++;
        loadQuestion();
        updateProgress();
    } else {
        showResults();
    }
}

// Atualizar barra de progresso
function updateProgress() {
    const progress = ((state.currentQuestion + 1) / state.selectedExercises.length) * 100;
    progressBar.style.width = `${progress}%`;
    progressText.textContent = `${state.currentQuestion + 1}/${state.selectedExercises.length}`;
}

// Mostrar resultados
function showResults() {
    showPage('results-page');
    
    // Calcular pontuação final baseada nas respostas salvas
    let finalScore = 0;
    state.userAnswers.forEach(answer => {
        if (answer && answer.isCorrect) {
            finalScore++;
        }
    });
    
    // Garantir que a pontuação não exceda o número de questões
    finalScore = Math.min(finalScore, state.selectedExercises.length);
    
    const percentage = (finalScore / state.selectedExercises.length) * 100;
    
    console.log(`Resultado final: ${finalScore}/${state.selectedExercises.length} (${percentage}%)`);
    
    // Determinar resultado com base na porcentagem
    if (percentage >= 95) {
        mainMessage.textContent = "EXCELENTE";
        secondaryMessage.textContent = `Parabéns pelo seu desempenho excepcional! Você alcançou um resultado EXCELENTE, acertando ${finalScore} das ${state.selectedExercises.length} palavras no quiz de escrita em francês! Isso demonstra um domínio impressionante das expressões e da ortografia francesa. Continue assim, pois seu esforço e dedicação são inspiradores! Este resultado reflete não apenas sua habilidade linguística, mas também sua atenção aos detalhes e compromisso em aprender. Que tal continuar explorando o idioma com o mesmo entusiasmo? A prática constante vai te levar ainda mais longe.`;
        resultImage.src = "MASCOTEFELIZ.png";
        playSound("POSITIVO.mp3");
    } else if (percentage >= 75) {
        mainMessage.textContent = "PARABÉNS";
        secondaryMessage.textContent = `Parabéns pelo seu desempenho! Você obteve um BOM resultado, acertando ${finalScore} das ${state.selectedExercises.length} palavras no quiz de escrita em francês! Isso mostra que você está no caminho certo, com uma sólida compreensão do idioma. Sua dedicação está valendo a pena, e cada palavra certa é um passo rumo à fluência. Continue assim, brilhando no aprendizado do francês!`;
        resultImage.src = "MASCOTEALEGRE.png";
        playSound("POSITIVO.mp3");
    } else if (percentage >= 60) {
        mainMessage.textContent = "QUASE LÁ";
        secondaryMessage.textContent = `Você alcançou o nível SUFICIENTE, acertando ${finalScore} das ${state.selectedExercises.length} palavras no quiz de escrita em francês! Isso indica um progresso notável, com uma boa base no idioma. Sua dedicação está clara, e você está muito próximo de resultados ainda melhores. Cada palavra escrita é um avanço no aprendizado do francês. Continue se empenhando, e logo verá seu desempenho crescer! Siga firme na jornada para dominar o idioma!`;
        resultImage.src = "MASCOTEDUVIDA.png";
        playSound("NEGATIVO.mp3");
    } else {
        mainMessage.textContent = "NÃO FOI DESSA VEZ";
        secondaryMessage.textContent = `Você obteve o nível INSUFICIENTE, acertando ${finalScore} das ${state.selectedExercises.length} palavras no quiz de escrita em francês. Não desanime! Cada tentativa é uma oportunidade de aprendizado, e você já deu o primeiro passo ao participar. O francês pode ser desafiador, mas com prática, você vai melhorar. Reforce as palavras e continue se dedicando. Sua persistência vai te levar mais longe na jornada do idioma!`;
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
        answeredQuestions: Array.from(state.answeredQuestions),
        selectedExercises: state.selectedExercises
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
        state.selectedExercises = progressData.selectedExercises || [];
    }
}
