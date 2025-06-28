// CO2 data and concrete examples (based on real environmental data)
const CO2_DATA = {
    // CO2 emissions per activity (kg per year)
    driving: 2.3, // kg CO2 per km
    flying: 0.255, // kg CO2 per km
    homeEnergy: 2.5, // kg CO2 per kWh
    beef: 13.3, // kg CO2 per kg
    chicken: 2.9, // kg CO2 per kg
    electricity: 0.5, // kg CO2 per kWh
    smartphone: 55, // kg CO2 per year
    laptop: 422, // kg CO2 per year
    streaming: 0.4, // kg CO2 per hour
    coffee: 0.4, // kg CO2 per cup
    beer: 0.6, // kg CO2 per bottle
    wine: 1.4, // kg CO2 per bottle
    pizza: 1.4, // kg CO2 per slice
    hamburger: 2.5, // kg CO2 per burger
    shower: 2.5, // kg CO2 per 10-minute shower
    laundry: 0.6, // kg CO2 per load
    dishwasher: 1.4, // kg CO2 per load
    airConditioning: 0.4, // kg CO2 per hour
    heating: 0.2, // kg CO2 per hour
    train: 0.04, // kg CO2 per km
    bus: 0.1, // kg CO2 per km
    subway: 0.05, // kg CO2 per km
    bicycle: 0, // kg CO2 per km
    walking: 0, // kg CO2 per km
    treeAbsorption: 22 // kg CO2 per tree per year
};

// Concrete, engaging examples that scale with tree count
const CONCRETE_EXAMPLES = [
    // 1 Tree Examples
    {
        trees: 1,
        examples: [
            {
                category: "Transportation",
                text: "🌱 <strong>1 tree</strong> offsets a <strong>flight from London to Paris</strong> (344 km)",
                emoji: "✈️",
                detail: "That's like taking the Eurostar instead of flying!"
            },
            {
                category: "Food & Drinks",
                text: "🌱 <strong>1 tree</strong> offsets <strong>9 hamburgers</strong> per year",
                emoji: "🍔",
                detail: "Almost a month of weekend BBQs!"
            },
            {
                category: "Home Life",
                text: "🌱 <strong>1 tree</strong> powers your <strong>smartphone for 4 months</strong>",
                emoji: "📱",
                detail: "All those selfies and social media posts!"
            },
            {
                category: "Travel",
                text: "🌱 <strong>1 tree</strong> offsets a <strong>road trip to the beach</strong> (88 km)",
                emoji: "🚗",
                detail: "Your weekend getaway is now carbon-neutral!"
            }
        ]
    },
    // 2 Trees Examples
    {
        trees: 2,
        examples: [
            {
                category: "Transportation",
                text: "🌿 <strong>2 trees</strong> offset <strong>your daily commute for 2 months</strong> (40 km round trip)",
                emoji: "🚗",
                detail: "That's 40 work days of guilt-free driving!"
            },
            {
                category: "Food & Drinks",
                text: "🌿 <strong>2 trees</strong> offset <strong>55 cups of coffee</strong> per year",
                emoji: "☕",
                detail: "Your daily caffeine fix for almost 2 months!"
            },
            {
                category: "Home Life",
                text: "🌿 <strong>2 trees</strong> power your <strong>Netflix binge for 110 hours</strong>",
                emoji: "📺",
                detail: "That's like watching 3 entire seasons of your favorite show!"
            },
            {
                category: "Travel",
                text: "🌿 <strong>2 trees</strong> offset a <strong>weekend camping trip</strong> (176 km)",
                emoji: "🏕️",
                detail: "Your nature escape is now nature-friendly!"
            }
        ]
    },
    // 3 Trees Examples
    {
        trees: 3,
        examples: [
            {
                category: "Transportation",
                text: "🌳 <strong>3 trees</strong> offset <strong>your Uber rides for 3 months</strong>",
                emoji: "🚕",
                detail: "All those late-night rides home are covered!"
            },
            {
                category: "Food & Drinks",
                text: "🌳 <strong>3 trees</strong> offset <strong>26 pizza slices</strong> per year",
                emoji: "🍕",
                detail: "That's like 6 months of Friday night pizza!"
            },
            {
                category: "Home Life",
                text: "🌳 <strong>3 trees</strong> power your <strong>gaming sessions for 165 hours</strong>",
                emoji: "🎮",
                detail: "Your virtual adventures are now eco-friendly!"
            },
            {
                category: "Travel",
                text: "🌳 <strong>3 trees</strong> offset a <strong>flight from NYC to Boston</strong>",
                emoji: "✈️",
                detail: "Your business trip is carbon-neutral!"
            }
        ]
    },
    // 5 Trees Examples
    {
        trees: 5,
        examples: [
            {
                category: "Transportation",
                text: "🌲 <strong>5 trees</strong> offset <strong>your car for 3 months</strong> (15,000 km/year)",
                emoji: "🚗",
                detail: "A whole quarter of guilt-free driving!"
            },
            {
                category: "Food & Drinks",
                text: "🌲 <strong>5 trees</strong> offset <strong>44 beers</strong> per year",
                emoji: "🍺",
                detail: "That's like a month of weekend pub visits!"
            },
            {
                category: "Home Life",
                text: "🌲 <strong>5 trees</strong> power your <strong>entire home office for 2 months</strong>",
                emoji: "💻",
                detail: "Your remote work setup is now sustainable!"
            },
            {
                category: "Travel",
                text: "🌲 <strong>5 trees</strong> offset a <strong>European city break</strong> (440 km flight)",
                emoji: "✈️",
                detail: "Your romantic getaway is planet-friendly!"
            }
        ]
    },
    // 10 Trees Examples
    {
        trees: 10,
        examples: [
            {
                category: "Transportation",
                text: "🌳 <strong>10 trees</strong> offset <strong>your family's road trip</strong> (880 km)",
                emoji: "🚗",
                detail: "That epic summer vacation is now carbon-neutral!"
            },
            {
                category: "Food & Drinks",
                text: "🌳 <strong>10 trees</strong> offset <strong>your restaurant meals for 6 months</strong>",
                emoji: "🍽️",
                detail: "All those date nights and celebrations!"
            },
            {
                category: "Home Life",
                text: "🌳 <strong>10 trees</strong> power your <strong>entire household for 1 month</strong>",
                emoji: "🏠",
                detail: "Your home is now a green energy haven!"
            },
            {
                category: "Travel",
                text: "🌳 <strong>10 trees</strong> offset a <strong>transatlantic flight</strong> (880 km)",
                emoji: "✈️",
                detail: "Your international adventure is sustainable!"
            }
        ]
    },
    // 25 Trees Examples
    {
        trees: 25,
        examples: [
            {
                category: "Transportation",
                text: "🌲 <strong>25 trees</strong> offset <strong>your entire year of driving</strong>",
                emoji: "🚗",
                detail: "Your car is now carbon-neutral for the whole year!"
            },
            {
                category: "Food & Drinks",
                text: "🌲 <strong>25 trees</strong> offset <strong>your family's food for 6 months</strong>",
                emoji: "🍽️",
                detail: "All your groceries are now climate-friendly!"
            },
            {
                category: "Home Life",
                text: "🌲 <strong>25 trees</strong> power your <strong>entire home for 3 months</strong>",
                emoji: "🏠",
                detail: "Your household is now a sustainability champion!"
            },
            {
                category: "Travel",
                text: "🌲 <strong>25 trees</strong> offset <strong>your annual vacation flights</strong>",
                emoji: "✈️",
                detail: "All your travel dreams are now eco-friendly!"
            }
        ]
    },
    // 50+ Trees Examples
    {
        trees: 50,
        examples: [
            {
                category: "Transportation",
                text: "🌍 <strong>50 trees</strong> offset <strong>an entire family's transportation for a year</strong>",
                emoji: "🚗",
                detail: "Your whole family is now carbon-neutral!"
            },
            {
                category: "Food & Drinks",
                text: "🌍 <strong>50 trees</strong> offset <strong>a year of gourmet dining</strong>",
                emoji: "🍽️",
                detail: "All your fancy restaurant visits are covered!"
            },
            {
                category: "Home Life",
                text: "🌍 <strong>50 trees</strong> power <strong>multiple homes for 6 months</strong>",
                emoji: "🏠",
                detail: "You're now a neighborhood sustainability leader!"
            },
            {
                category: "Travel",
                text: "🌍 <strong>50 trees</strong> offset <strong>multiple international trips</strong>",
                emoji: "✈️",
                detail: "Your wanderlust is now planet-friendly!"
            }
        ]
    }
];

// Initialize the page
document.addEventListener('DOMContentLoaded', function() {
    updateComparison();
    setupFactCards();
    addKeyboardSupport();
    addHapticFeedback();
});

function changeTrees(delta) {
    const input = document.getElementById('treeCount');
    const newValue = Math.max(1, Math.min(100, parseInt(input.value) + delta));
    input.value = newValue;
    updateComparison();
    
    // Add satisfying sound effect (if supported)
    playClickSound();
}

function updateComparison() {
    const treeCount = parseInt(document.getElementById('treeCount').value) || 1;
    const totalCO2 = treeCount * CO2_DATA.treeAbsorption;
    
    // Find the best matching example for this tree count
    let selectedExample = null;
    
    // Find exact match first
    let exactMatch = CONCRETE_EXAMPLES.find(example => example.trees === treeCount);
    if (exactMatch) {
        selectedExample = exactMatch.examples[Math.floor(Math.random() * exactMatch.examples.length)];
    } else {
        // Find closest match
        let closest = CONCRETE_EXAMPLES[0];
        for (let example of CONCRETE_EXAMPLES) {
            if (Math.abs(example.trees - treeCount) < Math.abs(closest.trees - treeCount)) {
                closest = example;
            }
        }
        selectedExample = closest.examples[Math.floor(Math.random() * closest.examples.length)];
    }
    
    let comparisonText = `
        <p>${selectedExample.text}</p>
        <p><em>${selectedExample.detail}</em></p>
    `;
    
    document.getElementById('comparisonText').innerHTML = comparisonText;
    
    // Update fact cards with current tree count
    updateFactCards(treeCount, totalCO2);
    
    // Add visual feedback
    addVisualFeedback(treeCount);
}

function updateFactCards(treeCount, totalCO2) {
    const factCards = document.querySelectorAll('.fact-card');
    
    // Calculate different comparisons for each card
    const comparisons = [
        { emoji: "🚗", text: `${Math.round(totalCO2 / CO2_DATA.driving)} km driving` },
        { emoji: "✈️", text: `${Math.round(totalCO2 / CO2_DATA.flying)} km flying` },
        { emoji: "🏠", text: `${Math.round(totalCO2 / CO2_DATA.electricity)} kWh electricity` },
        { emoji: "🍔", text: `${Math.round(totalCO2 / CO2_DATA.hamburger)} hamburgers` }
    ];
    
    factCards.forEach((card, index) => {
        if (index < comparisons.length) {
            const factText = card.querySelector('.fact-text');
            factText.textContent = comparisons[index].text;
        }
    });
}

function setupFactCards() {
    const factCards = document.querySelectorAll('.fact-card');
    
    factCards.forEach(card => {
        card.addEventListener('click', function() {
            // Remove active class from all cards
            factCards.forEach(c => c.classList.remove('active'));
            // Add active class to clicked card
            this.classList.add('active');
            
            // Show detailed comparison for this category
            showDetailedComparison(this);
        });
    });
}

function showDetailedComparison(card) {
    const cardIndex = Array.from(card.parentNode.children).indexOf(card);
    const categories = ['Transportation', 'Travel', 'Home Life', 'Food & Drinks'];
    const category = categories[cardIndex];
    
    const treeCount = parseInt(document.getElementById('treeCount').value) || 1;
    
    // Find examples for this category and tree count
    let selectedExample = null;
    
    // Find exact match first
    let exactMatch = CONCRETE_EXAMPLES.find(example => example.trees === treeCount);
    if (exactMatch) {
        selectedExample = exactMatch.examples.find(example => example.category === category);
    }
    
    // If no exact match, find closest
    if (!selectedExample) {
        let closest = CONCRETE_EXAMPLES[0];
        for (let example of CONCRETE_EXAMPLES) {
            if (Math.abs(example.trees - treeCount) < Math.abs(closest.trees - treeCount)) {
                closest = example;
            }
        }
        selectedExample = closest.examples.find(example => example.category === category);
    }
    
    // If still no match, use first example of that category
    if (!selectedExample) {
        for (let exampleSet of CONCRETE_EXAMPLES) {
            selectedExample = exampleSet.examples.find(example => example.category === category);
            if (selectedExample) break;
        }
    }
    
    if (selectedExample) {
        // Update the main comparison text
        const comparisonText = `
            <p>${selectedExample.text}</p>
            <p><em>${selectedExample.detail}</em></p>
        `;
        
        document.getElementById('comparisonText').innerHTML = comparisonText;
    }
}

function addKeyboardSupport() {
    document.addEventListener('keydown', function(e) {
        if (e.key === 'ArrowUp' || e.key === '+') {
            e.preventDefault();
            changeTrees(1);
        } else if (e.key === 'ArrowDown' || e.key === '-') {
            e.preventDefault();
            changeTrees(-1);
        } else if (e.key === 'Enter') {
            e.preventDefault();
            updateComparison();
        }
    });
}

function addHapticFeedback() {
    // Add haptic feedback for mobile devices
    if ('vibrate' in navigator) {
        const factCards = document.querySelectorAll('.fact-card');
        const buttons = document.querySelectorAll('button');
        
        factCards.forEach(card => {
            card.addEventListener('click', function() {
                navigator.vibrate(50);
            });
        });
        
        buttons.forEach(button => {
            button.addEventListener('click', function() {
                navigator.vibrate(30);
            });
        });
    }
}

function playClickSound() {
    // Create a subtle click sound effect
    const audioContext = new (window.AudioContext || window.webkitAudioContext)();
    const oscillator = audioContext.createOscillator();
    const gainNode = audioContext.createGain();
    
    oscillator.connect(gainNode);
    gainNode.connect(audioContext.destination);
    
    oscillator.frequency.setValueAtTime(800, audioContext.currentTime);
    oscillator.frequency.exponentialRampToValueAtTime(400, audioContext.currentTime + 0.1);
    
    gainNode.gain.setValueAtTime(0.1, audioContext.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.1);
    
    oscillator.start(audioContext.currentTime);
    oscillator.stop(audioContext.currentTime + 0.1);
}

function addVisualFeedback(treeCount) {
    // Add a subtle animation to the comparison text
    const comparisonText = document.getElementById('comparisonText');
    comparisonText.style.transform = 'scale(1.05)';
    setTimeout(() => {
        comparisonText.style.transform = 'scale(1)';
    }, 200);
    
    // Add particle effect for milestone numbers
    if (treeCount % 10 === 0 && treeCount > 0) {
        createParticleEffect();
    }
}

function createParticleEffect() {
    const container = document.querySelector('.calculator-box');
    
    for (let i = 0; i < 8; i++) {
        const particle = document.createElement('div');
        particle.innerHTML = '🌱';
        particle.style.position = 'absolute';
        particle.style.left = '50%';
        particle.style.top = '50%';
        particle.style.fontSize = '20px';
        particle.style.pointerEvents = 'none';
        particle.style.transition = 'all 1s ease-out';
        particle.style.zIndex = '1000';
        
        container.appendChild(particle);
        
        // Animate particle
        setTimeout(() => {
            const angle = (i / 8) * 2 * Math.PI;
            const distance = 80 + Math.random() * 40;
            const x = Math.cos(angle) * distance;
            const y = Math.sin(angle) * distance;
            
            particle.style.transform = `translate(${x}px, ${y}px)`;
            particle.style.opacity = '0';
        }, 50);
        
        // Remove particle after animation
        setTimeout(() => {
            if (particle.parentNode) {
                particle.parentNode.removeChild(particle);
            }
        }, 1050);
    }
} 