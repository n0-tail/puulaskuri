// CO2 data and comparisons (based on real environmental data)
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

// Engaging comparison scenarios
const COMPARISONS = [
    {
        category: "Transportation",
        scenarios: [
            { name: "🚗 Driving", unit: "km", factor: CO2_DATA.driving, emoji: "🚗" },
            { name: "✈️ Flying", unit: "km", factor: CO2_DATA.flying, emoji: "✈️" },
            { name: "🚌 Bus Ride", unit: "km", factor: CO2_DATA.bus, emoji: "🚌" },
            { name: "🚆 Train Journey", unit: "km", factor: CO2_DATA.train, emoji: "🚆" },
            { name: "🚇 Subway Trip", unit: "km", factor: CO2_DATA.subway, emoji: "🚇" }
        ]
    },
    {
        category: "Food & Drinks",
        scenarios: [
            { name: "🍔 Hamburgers", unit: "burgers", factor: CO2_DATA.hamburger, emoji: "🍔" },
            { name: "🍕 Pizza Slices", unit: "slices", factor: CO2_DATA.pizza, emoji: "🍕" },
            { name: "🥩 Beef Steaks", unit: "kg", factor: CO2_DATA.beef, emoji: "🥩" },
            { name: "🍗 Chicken Meals", unit: "kg", factor: CO2_DATA.chicken, emoji: "🍗" },
            { name: "☕ Coffee Cups", unit: "cups", factor: CO2_DATA.coffee, emoji: "☕" },
            { name: "🍺 Beer Bottles", unit: "bottles", factor: CO2_DATA.beer, emoji: "🍺" },
            { name: "🍷 Wine Glasses", unit: "bottles", factor: CO2_DATA.wine, emoji: "🍷" }
        ]
    },
    {
        category: "Home & Lifestyle",
        scenarios: [
            { name: "💡 Light Bulbs", unit: "hours", factor: CO2_DATA.electricity, emoji: "💡" },
            { name: "🚿 Hot Showers", unit: "10-min showers", factor: CO2_DATA.shower, emoji: "🚿" },
            { name: "👕 Laundry Loads", unit: "loads", factor: CO2_DATA.laundry, emoji: "👕" },
            { name: "🍽️ Dishwasher Runs", unit: "loads", factor: CO2_DATA.dishwasher, emoji: "🍽️" },
            { name: "❄️ AC Hours", unit: "hours", factor: CO2_DATA.airConditioning, emoji: "❄️" },
            { name: "🔥 Heating Hours", unit: "hours", factor: CO2_DATA.heating, emoji: "🔥" },
            { name: "📱 Smartphone Usage", unit: "years", factor: CO2_DATA.smartphone, emoji: "📱" },
            { name: "💻 Laptop Usage", unit: "years", factor: CO2_DATA.laptop, emoji: "💻" },
            { name: "📺 Netflix Hours", unit: "hours", factor: CO2_DATA.streaming, emoji: "📺" }
        ]
    }
];

// Achievement milestones
const ACHIEVEMENTS = [
    { trees: 1, text: "🌱 First Tree! You're making a difference!", emoji: "🌱" },
    { trees: 5, text: "🌿 Small Grove! You could offset a weekend trip!", emoji: "🌿" },
    { trees: 10, text: "🌳 Growing Forest! That's like planting a mini park!", emoji: "🌳" },
    { trees: 25, text: "🏞️ Forest Guardian! You're offsetting a month of driving!", emoji: "🏞️" },
    { trees: 50, text: "🌲 Tree Master! You could power a small village!", emoji: "🌲" },
    { trees: 100, text: "🌍 Climate Hero! You're saving the planet one tree at a time!", emoji: "🌍" },
    { trees: 250, text: "🏆 Carbon Champion! You're offsetting a year of energy use!", emoji: "🏆" },
    { trees: 500, text: "👑 Tree Legend! You're creating a carbon sink!", emoji: "👑" },
    { trees: 1000, text: "🌟 Ultimate Eco Warrior! You're a climate change superhero!", emoji: "🌟" }
];

let currentAchievement = 0;
let lastTreeCount = 0;

// Initialize the page
document.addEventListener('DOMContentLoaded', function() {
    updateComparison();
    setupFactCards();
    addKeyboardSupport();
    addHapticFeedback();
});

function changeTrees(delta) {
    const input = document.getElementById('treeCount');
    const newValue = Math.max(0, Math.min(1000, parseInt(input.value) + delta));
    input.value = newValue;
    updateComparison();
    
    // Add satisfying sound effect (if supported)
    playClickSound();
}

function updateComparison() {
    const treeCount = parseInt(document.getElementById('treeCount').value) || 0;
    const totalCO2 = treeCount * CO2_DATA.treeAbsorption;
    
    // Get a random engaging comparison
    const randomCategory = COMPARISONS[Math.floor(Math.random() * COMPARISONS.length)];
    const randomScenario = randomCategory.scenarios[Math.floor(Math.random() * randomCategory.scenarios.length)];
    
    const equivalentAmount = Math.round(totalCO2 / randomScenario.factor);
    
    let comparisonText = '';
    
    if (treeCount === 0) {
        comparisonText = `
            <p>🌱 Start planting trees to see your impact!</p>
            <p>Each tree absorbs about <strong>22 kg of CO2</strong> per year</p>
        `;
    } else if (treeCount === 1) {
        comparisonText = `
            <p>🌱 <strong>1 tree</strong> absorbs about <strong>22 kg of CO2</strong> per year</p>
            <p>That's like <strong>driving 9.6 km</strong> in a car!</p>
        `;
    } else {
        comparisonText = `
            <p>🌳 <strong>${treeCount} trees</strong> absorb about <strong>${totalCO2} kg of CO2</strong> per year</p>
            <p>That's like <strong>${randomScenario.emoji} ${equivalentAmount} ${randomScenario.unit}</strong> of ${randomScenario.name.toLowerCase()}!</p>
        `;
    }
    
    document.getElementById('comparisonText').innerHTML = comparisonText;
    
    // Check for achievements
    checkAchievements(treeCount);
    
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
    const categories = ['Transportation', 'Transportation', 'Home & Lifestyle', 'Food & Drinks'];
    const category = categories[cardIndex];
    
    const categoryData = COMPARISONS.find(c => c.category === category);
    if (categoryData) {
        const randomScenario = categoryData.scenarios[Math.floor(Math.random() * categoryData.scenarios.length)];
        const treeCount = parseInt(document.getElementById('treeCount').value) || 0;
        const totalCO2 = treeCount * CO2_DATA.treeAbsorption;
        const equivalentAmount = Math.round(totalCO2 / randomScenario.factor);
        
        // Update the main comparison text
        const comparisonText = `
            <p>🌳 <strong>${treeCount} trees</strong> absorb about <strong>${totalCO2} kg of CO2</strong> per year</p>
            <p>That's like <strong>${randomScenario.emoji} ${equivalentAmount} ${randomScenario.unit}</strong> of ${randomScenario.name.toLowerCase()}!</p>
        `;
        
        document.getElementById('comparisonText').innerHTML = comparisonText;
    }
}

function checkAchievements(treeCount) {
    const achievement = ACHIEVEMENTS.find(a => a.trees === treeCount);
    
    if (achievement && treeCount > lastTreeCount) {
        showAchievement(achievement.text, achievement.emoji);
        currentAchievement = treeCount;
    }
    
    lastTreeCount = treeCount;
}

function showAchievement(text, emoji) {
    const achievementElement = document.getElementById('achievement');
    const emojiElement = achievementElement.querySelector('.achievement-emoji');
    const textElement = achievementElement.querySelector('.achievement-text');
    
    emojiElement.textContent = emoji;
    textElement.textContent = text;
    
    achievementElement.classList.remove('hidden');
    
    // Hide achievement after 3 seconds
    setTimeout(() => {
        achievementElement.classList.add('hidden');
    }, 3000);
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
        const buttons = document.querySelectorAll('button');
        buttons.forEach(button => {
            button.addEventListener('click', () => {
                navigator.vibrate(50);
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
    const container = document.querySelector('.calculator-box');
    
    // Add a subtle pulse effect
    container.style.transform = 'scale(1.02)';
    setTimeout(() => {
        container.style.transform = 'scale(1)';
    }, 150);
    
    // Add particle effect for milestone numbers
    if (treeCount % 10 === 0 && treeCount > 0) {
        createParticleEffect();
    }
}

function createParticleEffect() {
    const container = document.querySelector('.container');
    
    for (let i = 0; i < 10; i++) {
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
            const angle = (i / 10) * 2 * Math.PI;
            const distance = 100 + Math.random() * 50;
            const x = Math.cos(angle) * distance;
            const y = Math.sin(angle) * distance;
            
            particle.style.transform = `translate(${x}px, ${y}px)`;
            particle.style.opacity = '0';
        }, 50);
        
        // Remove particle after animation
        setTimeout(() => {
            container.removeChild(particle);
        }, 1050);
    }
}

// Add smooth scrolling and additional interactive features
document.addEventListener('DOMContentLoaded', function() {
    // Add confetti effect for special numbers
    const input = document.getElementById('treeCount');
    input.addEventListener('input', function() {
        const value = parseInt(this.value);
        if (value === 100 || value === 500 || value === 1000) {
            createConfettiEffect();
        }
    });
});

function createConfettiEffect() {
    const colors = ['#ff6b6b', '#4ecdc4', '#45b7d1', '#96ceb4', '#feca57'];
    const container = document.querySelector('.container');
    
    for (let i = 0; i < 50; i++) {
        const confetti = document.createElement('div');
        confetti.style.position = 'absolute';
        confetti.style.width = '10px';
        confetti.style.height = '10px';
        confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        confetti.style.left = Math.random() * 100 + '%';
        confetti.style.top = '-10px';
        confetti.style.pointerEvents = 'none';
        confetti.style.zIndex = '1000';
        confetti.style.borderRadius = '50%';
        
        container.appendChild(confetti);
        
        // Animate confetti
        setTimeout(() => {
            confetti.style.transition = 'all 3s ease-out';
            confetti.style.top = '100%';
            confetti.style.transform = `rotate(${Math.random() * 360}deg)`;
            confetti.style.opacity = '0';
        }, i * 50);
        
        // Remove confetti after animation
        setTimeout(() => {
            if (container.contains(confetti)) {
                container.removeChild(confetti);
            }
        }, 3500);
    }
} 