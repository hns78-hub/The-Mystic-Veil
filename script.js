// --- BACKEND CONFIGURATION ---
const FORMSPREE_ID = "mkoqoqnd";
const IMAGE_BASE_URL = "https://raw.githubusercontent.com/metabismuth/tarot-json/master/cards/";

// Supabase Configuration
const SUPABASE_URL = "https://skkhzcztrizlhzhkbsuz.supabase.co";
const SUPABASE_KEY = "sb_publishable_X_KocDCiVnjOuGzxG33p8w_bNriCrSH";
const _supabase = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

const tarotDeck = [
    // Major Arcana
    { name: "The Fool", image: "m00.jpg", keywords: "Innocence, New Beginnings, Free Spirit" },
    { name: "The Magician", image: "m01.jpg", keywords: "Manifestation, Resourcefulness, Power" },
    { name: "The High Priestess", image: "m02.jpg", keywords: "Intuition, Sacred Knowledge, Subconscious" },
    { name: "The Empress", image: "m03.jpg", keywords: "Femininity, Nature, Abundance" },
    { name: "The Emperor", image: "m04.jpg", keywords: "Authority, Structure, Core Foundations" },
    { name: "The Hierophant", image: "m05.jpg", keywords: "Tradition, Spiritual Wisdom, Conformity" },
    { name: "The Lovers", image: "m06.jpg", keywords: "Love, Harmony, Relationships" },
    { name: "The Chariot", image: "m07.jpg", keywords: "Control, Willpower, Success" },
    { name: "Strength", image: "m08.jpg", keywords: "Courage, Persuasion, Influence" },
    { name: "The Hermit", image: "m09.jpg", keywords: "Soul-searching, Introspection, Guidance" },
    { name: "Wheel of Fortune", image: "m10.jpg", keywords: "Good Luck, Karma, Life Cycles" },
    { name: "Justice", image: "m11.jpg", keywords: "Fairness, Truth, Cause and Effect" },
    { name: "The Hanged Man", image: "m12.jpg", keywords: "Pause, Surrender, New Perspectives" },
    { name: "Death", image: "m13.jpg", keywords: "Endings, Change, Transformation" },
    { name: "Temperance", image: "m14.jpg", keywords: "Balance, Moderation, Purpose" },
    { name: "The Devil", image: "m15.jpg", keywords: "Shadow Self, Attachment, Addiction" },
    { name: "The Tower", image: "m16.jpg", keywords: "Sudden Upheaval, Broken Pride, Revelation" },
    { name: "The Star", image: "m17.jpg", keywords: "Hope, Faith, Rejuvenation" },
    { name: "The Moon", image: "m18.jpg", keywords: "Illusion, Fear, Anxiety" },
    { name: "The Sun", image: "m19.jpg", keywords: "Positivity, Warmth, Radiant Energy" },
    { name: "Judgement", image: "m20.jpg", keywords: "Reflection, Reckoning, Awakening" },
    { name: "The World", image: "m21.jpg", keywords: "Completion, Integration, Accomplishment" },

    // Cups
    { name: "Ace of Cups", image: "c01.jpg", keywords: "New Love, Emotional Awakening" },
    { name: "Two of Cups", image: "c02.jpg", keywords: "Unified Love, Partnership" },
    { name: "Three of Cups", image: "c03.jpg", keywords: "Celebration, Friendship, Community" },
    { name: "Four of Cups", image: "c04.jpg", keywords: "Meditation, Apathy, Disconnection" },
    { name: "Five of Cups", image: "c05.jpg", keywords: "Loss, Regret, Disappointment" },
    { name: "Six of Cups", image: "c06.jpg", keywords: "Nostalgia, Childhood Memories" },
    { name: "Seven of Cups", image: "c07.jpg", keywords: "Searching for Purpose, Choices" },
    { name: "Eight of Cups", image: "c08.jpg", keywords: "Disillusionment, Abandonment" },
    { name: "Nine of Cups", image: "c09.jpg", keywords: "Contentment, Satisfaction, Wishes" },
    { name: "Ten of Cups", image: "c10.jpg", keywords: "Divine Love, Blissful Relationships" },
    { name: "Page of Cups", image: "c11.jpg", keywords: "Creative Opportunities, Intuition" },
    { name: "Knight of Cups", image: "c12.jpg", keywords: "Creativity, Romance, Charm" },
    { name: "Queen of Cups", image: "c13.jpg", keywords: "Compassion, Calm, Comfort" },
    { name: "King of Cups", image: "c14.jpg", keywords: "Emotional Balance, Control" },

    // Swords
    { name: "Ace of Swords", image: "s01.jpg", keywords: "Breakthrough, Clarity, Sharp Mind" },
    { name: "Two of Swords", image: "s02.jpg", keywords: "Difficult Choices, Stalemate" },
    { name: "Three of Swords", image: "s03.jpg", keywords: "Heartbreak, Sorrow, Grief" },
    { name: "Four of Swords", image: "s04.jpg", keywords: "Rest, Relaxation, Meditation" },
    { name: "Five of Swords", image: "s05.jpg", keywords: "Conflict, Disagreement, Loss" },
    { name: "Six of Swords", image: "s06.jpg", keywords: "Transition, Change, Rite of Passage" },
    { name: "Seven of Swords", image: "s07.jpg", keywords: "Deception, Strategy, Stealth" },
    { name: "Eight of Swords", image: "s08.jpg", keywords: "Imprisonment, Entrapment" },
    { name: "Nine of Swords", image: "s09.jpg", keywords: "Anxiety, Nightmares, Worry" },
    { name: "Ten of Swords", image: "s10.jpg", keywords: "Painful Endings, Deep Wounds" },
    { name: "Page of Swords", image: "s11.jpg", keywords: "New Ideas, Curiosity, Mental Edge" },
    { name: "Knight of Swords", image: "s12.jpg", keywords: "Ambitious, Action-Oriented" },
    { name: "Queen of Swords", image: "s13.jpg", keywords: "Independent, Unbiased, Perception" },
    { name: "King of Swords", image: "s14.jpg", keywords: "Mental Clarity, Intellectual Power" },

    // Wands
    { name: "Ace of Wands", image: "w01.jpg", keywords: "Inspiration, New Opportunities" },
    { name: "Two of Wands", image: "w02.jpg", keywords: "Future Planning, Progress" },
    { name: "Three of Wands", image: "w03.jpg", keywords: "Expansion, Foresight, Strategy" },
    { name: "Four of Wands", image: "w04.jpg", keywords: "Celebration, Joy, Relaxed Energy" },
    { name: "Five of Wands", image: "w05.jpg", keywords: "Competition, Conflict, Rivalry" },
    { name: "Six of Wands", image: "w06.jpg", keywords: "Victory, Success, Public Recognition" },
    { name: "Seven of Wands", image: "w07.jpg", keywords: "Challenge, Competition, Protection" },
    { name: "Eight of Wands", image: "w08.jpg", keywords: "Speed, Action, Fast Movement" },
    { name: "Nine of Wands", image: "w09.jpg", keywords: "Resilience, Persistence, Grit" },
    { name: "Ten of Wands", image: "w10.jpg", keywords: "Burden, Responsibility, Hard Work" },
    { name: "Page of Wands", image: "w11.jpg", keywords: "Inspiration, Ideas, Curiosity" },
    { name: "Knight of Wands", image: "w12.jpg", keywords: "Energy, Passion, Lust for Life" },
    { name: "Queen of Wands", image: "w13.jpg", keywords: "Courage, Confidence, Passion" },
    { name: "King of Wands", image: "w14.jpg", keywords: "Natural Leader, Visionary" },

    // Pentacles
    { name: "Ace of Pentacles", image: "p01.jpg", keywords: "New Career, Abundance, Wealth" },
    { name: "Two of Pentacles", image: "p02.jpg", keywords: "Balance, Adaptability, Priorities" },
    { name: "Three of Pentacles", image: "p03.jpg", keywords: "Teamwork, Collaboration, Learning" },
    { name: "Four of Pentacles", image: "p04.jpg", keywords: "Control, Stability, Security" },
    { name: "Five of Pentacles", image: "p05.jpg", keywords: "Hardship, Poverty, Isolation" },
    { name: "Six of Pentacles", image: "p06.jpg", keywords: "Generosity, Giving, Receiving" },
    { name: "Seven of Pentacles", image: "p07.jpg", keywords: "Patience, Reward, Investment" },
    { name: "Eight of Pentacles", image: "p08.jpg", keywords: "Apprenticeship, Mastery, Skill" },
    { name: "Nine of Pentacles", image: "p09.jpg", keywords: "Abundance, Luxury, Self-Sufficiency" },
    { name: "Ten of Pentacles", image: "p10.jpg", keywords: "Wealth, Family, Long-term Security" },
    { name: "Page of Pentacles", image: "p11.jpg", keywords: "Manifestation, Career, Ambition" },
    { name: "Knight of Pentacles", image: "p12.jpg", keywords: "Efficiency, Routine, Methodical" },
    { name: "Queen of Pentacles", image: "p13.jpg", keywords: "Nurturing, Earth Mother, Security" },
    { name: "King of Pentacles", image: "p14.jpg", keywords: "Abundance, Power, Security" }
];

let shuffledDeck = [];
let drawnCards = [];
const spreadPositions = ["Past", "Present", "Future", "Advice"];

// UI Elements
const questionSection = document.getElementById('question-section');
const tarotSection = document.getElementById('tarot-section');
const contactSection = document.getElementById('contact-section');
const successSection = document.getElementById('success-section');
const ritualDeckGrid = document.getElementById('ritual-deck-grid');
const shuffleContainer = document.getElementById('shuffle-container');
const shuffleDeckBtn = document.getElementById('shuffle-deck-btn');
const shuffleStatus = document.getElementById('shuffle-status');
const soundPick = document.getElementById('sound-pick');
const soundMagic = document.getElementById('sound-magic');
const soundShuffle = document.getElementById('sound-shuffle');

const startBtn = document.getElementById('start-reading');
const questionInput = document.getElementById('user-question');
const summaryText = document.getElementById('summary-text');
const readingForm = document.getElementById('reading-form');

// Transition: Question to Reading
startBtn.addEventListener('click', () => {
    if (!questionInput.value.trim()) {
        alert("Please focus your intent and enter a question first.");
        return;
    }

    questionSection.classList.add('hidden');
    tarotSection.classList.remove('hidden');

    // Prepare deck sliced to exactly 72 cards
    shuffledDeck = [...tarotDeck].sort(() => Math.random() - 0.5).slice(0, 72);
    shuffledDeck.forEach(c => c.isReversed = false);
    populateDeckGrid();
    document.getElementById('deck-status').innerText = "Pick 4 cards from the ritual board to reveal your path.";
    ritualDeckGrid.style.display = 'grid'; // Ensure grid is visible
    ritualDeckGrid.style.opacity = '1'; // Ensure grid is visible
});

// Shuffling Logic
let isShufflingInProgress = false;

shuffleDeckBtn.addEventListener('click', () => {
    if (isShufflingInProgress) return;
    isShufflingInProgress = true;

    // Play shuffle sound
    if (soundShuffle) {
        soundShuffle.volume = 0.6;
        soundShuffle.currentTime = 0;
        soundShuffle.play();
    }

    // Disable UI
    shuffleDeckBtn.disabled = true;
    shuffleDeckBtn.style.opacity = '0.5';
    shuffleStatus.style.display = 'block';
    ritualDeckGrid.style.pointerEvents = 'none';

    const cards = ritualDeckGrid.querySelectorAll('.ritual-card');
    const parentRect = ritualDeckGrid.getBoundingClientRect();
    const centerX = parentRect.width / 2;
    const centerY = parentRect.height / 2;

    cards.forEach(card => {
        const cardRect = card.getBoundingClientRect();
        // Calculate current position of card relative to grid container
        const currentX = (cardRect.left + cardRect.width / 2) - parentRect.left;
        const currentY = (cardRect.top + cardRect.height / 2) - parentRect.top;

        // Determine translate vector to center of container
        const tx = centerX - currentX;
        const translateY = centerY - currentY;

        card.style.setProperty('--tx', `${tx}px`);
        card.style.setProperty('--ty', `${translateY}px`);
        card.classList.add('shuffling');
    });

    // Wait for the animation to finish (1.5 seconds)
    setTimeout(() => {
        // Shuffle the sequence again
        shuffledDeck.sort(() => Math.random() - 0.5);
        // Apply random reversal (approx 25% chance)
        shuffledDeck.forEach(c => {
            c.isReversed = Math.random() < 0.25;
        });

        // Re-populate the board
        populateDeckGrid();

        // Restore interactions
        isShufflingInProgress = false;
        shuffleDeckBtn.disabled = false;
        shuffleDeckBtn.style.opacity = '1';
        shuffleStatus.style.display = 'none';
        ritualDeckGrid.style.pointerEvents = 'auto';

        document.getElementById('deck-status').innerText = "The deck has been charged with your energy. Draw 4 cards.";
    }, 1500);
});


function populateDeckGrid() {
    ritualDeckGrid.innerHTML = '';
    for (let i = 0; i < shuffledDeck.length; i++) {
        const card = document.createElement('div');
        card.className = 'ritual-card';
        card.dataset.index = i;

        card.addEventListener('click', (e) => {
            const targetCard = e.currentTarget;
            const idx = parseInt(targetCard.dataset.index);
            drawCardFromDeck(idx, targetCard);
        });

        ritualDeckGrid.appendChild(card);
    }
}

function drawCardFromDeck(index, cardEl) {
    if (drawnCards.length >= 4) return;
    if (cardEl.classList.contains('drawn')) return;

    // Play pick sound
    if (soundPick) {
        soundPick.volume = 0.4;
        soundPick.currentTime = 0;
        soundPick.play();
    }

    // Mark card as drawn
    cardEl.classList.add('drawn');

    const cardData = shuffledDeck[index];
    drawnCards.push(cardData);

    const slotIndex = drawnCards.length;
    const slot = document.getElementById(`slot-${slotIndex}`);
    const placeholder = slot.querySelector('.card-placeholder');

    const sourceRect = cardEl.getBoundingClientRect();
    const destRect = placeholder.getBoundingClientRect();

    const flyingCard = document.createElement('div');
    flyingCard.className = 'flying-card';
    flyingCard.style.left = `${sourceRect.left}px`;
    flyingCard.style.top = `${sourceRect.top}px`;
    flyingCard.style.width = `${sourceRect.width}px`;
    flyingCard.style.height = `${sourceRect.height}px`;
    document.body.appendChild(flyingCard);

    const deltaX = destRect.left - sourceRect.left;
    const deltaY = destRect.top - sourceRect.top;
    const scaleX = destRect.width / sourceRect.width;
    const scaleY = destRect.height / sourceRect.height;

    // Force reflow
    flyingCard.offsetHeight; 

    // Animate
    flyingCard.style.transform = `translate(${deltaX}px, ${deltaY}px) scale(${scaleX}, ${scaleY})`;

    // Wait for animation to finish before placing the real card
    setTimeout(() => {
        flyingCard.remove();

        // Create Card element
        const cardElFront = document.createElement('div');
        cardElFront.className = `card fade-in ${cardData.isReversed ? 'is-reversed' : ''}`;
        cardElFront.innerHTML = `
            <div class="card-face card-back"></div>
            <div class="card-face card-front">
                <div class="card-image-container">
                    <img src="${IMAGE_BASE_URL}${cardData.image}" alt="${cardData.name}" class="tarot-card-img" onerror="this.src='https://via.placeholder.com/180x300?text=Card+Back'">
                </div>
                <div class="card-info">
                    <div class="card-title">${cardData.name}</div>
                    <div style="font-size: 0.6rem; color: #666; max-width: 90%; text-overflow: ellipsis; overflow: hidden; white-space: nowrap;">${cardData.keywords}</div>
                </div>
            </div>
        `;

        placeholder.replaceWith(cardElFront);

        // Animate flip quickly
        setTimeout(() => {
            cardElFront.classList.add('flipped');
        }, 50);

        if (drawnCards.length === 4) {
            document.getElementById('draw-instruction').innerText = "The Spread is Complete";
            document.getElementById('deck-status').innerText = "Review your cards, then proceed to submission.";
            ritualDeckGrid.style.pointerEvents = 'none';
            ritualDeckGrid.style.opacity = '0.5';

            setTimeout(showContactForm, 1000);
        } else {
            document.getElementById('deck-status').innerText = `Select ${4 - drawnCards.length} more cards from the ritual board.`;
        }
    }, 600);
}

function showContactForm() {
    contactSection.classList.remove('hidden');
    contactSection.scrollIntoView({ behavior: 'smooth' });

    // Prepare summary
    const summary = drawnCards.map((c, i) => `${spreadPositions[i]}: ${c.name}`).join(' | ');
    summaryText.innerText = summary;
}

// Form Submission Integration
readingForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    const submitBtn = readingForm.querySelector('button[type="submit"]');
    const originalBtnText = submitBtn.innerText;

    submitBtn.innerText = "STORING IN THE ARCHIVE...";
    submitBtn.style.opacity = "0.7";
    submitBtn.disabled = true;

    const name = document.getElementById('client-name').value;
    const email = document.getElementById('client-email').value;
    const message = document.getElementById('client-message').value;
    const question = questionInput.value;

    // Prepare spread data for Supabase, including is_reversed
    const spreadData = drawnCards.map((c, i) => ({
        position: spreadPositions[i],
        name: c.name,
        image_url: `${IMAGE_BASE_URL}${c.image}`,
        is_reversed: c.isReversed
    }));

    try {
        // 1. Save to Supabase (The Archive)
        const { error: sbError } = await _supabase
            .from('readings')
            .insert([
                {
                    name,
                    email,
                    message,
                    question,
                    spread: spreadData,
                    status: 'pending'
                }
            ]);

        if (sbError) throw sbError;

        // 2. Optional: Notify via Formspree (for email notification)
        if (FORMSPREE_ID && FORMSPREE_ID !== "PASTE_YOUR_ID_HERE") {
            await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
                method: 'POST',
                body: JSON.stringify({
                    _subject: `New Reading: ${name}`,
                    Name: name,
                    Email: email,
                    Question: question,
                    Spread_Link: "Check your Supabase Dashboard for the visuals!"
                }),
                headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' }
            });
        }

        handleSuccess();
    } catch (error) {
        console.error("Database Error:", error);
        alert("The ritual was interrupted by a technical error. Please try again.");
        resetButton();
    }

    function resetButton() {
        submitBtn.innerText = originalBtnText;
        submitBtn.style.opacity = "1";
        submitBtn.disabled = false;
    }

    function handleSuccess() {
        contactSection.classList.add('hidden');
        tarotSection.classList.add('hidden');
        successSection.classList.remove('hidden');
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
});

// Reset logic for "Begin a New Journey"
document.getElementById('return-home').addEventListener('click', () => {
    // 1. Clear internal data
    drawnCards = [];
    shuffledDeck = [];

    // 2. Reset UI elements
    successSection.classList.add('hidden');
    questionSection.classList.remove('hidden');

    questionInput.value = "";
    document.getElementById('client-name').value = "";
    document.getElementById('client-email').value = "";
    document.getElementById('client-message').value = "";

    // Restore instructions
    document.getElementById('draw-instruction').innerText = "";
    document.getElementById('deck-status').innerText = "Select 4 cards from the sacred deck, or prepare the energies first.";

    // Reset Shuffle UI
    shuffleContainer.style.display = 'block';
    shuffleContainer.style.opacity = '1';
    shuffleDeckBtn.style.opacity = '1';
    shuffleDeckBtn.disabled = false;
    shuffleStatus.style.display = 'none';

    // Reset Grid UI
    ritualDeckGrid.style.display = 'grid';
    ritualDeckGrid.style.opacity = '1';
    ritualDeckGrid.style.pointerEvents = 'auto';

    // Clear the card slots
    for (let i = 1; i <= 4; i++) {
        const slot = document.getElementById(`slot-${i}`);
        slot.innerHTML = `
            <div class="card-placeholder"></div>
        `;
    }

    window.scrollTo({ top: 0, behavior: 'smooth' });
});
