// Menu data is now loaded from menu-data.js file
// This makes it much easier to add new dishes!

// Global variables
let currentCategory = 'breakfast';
let currentDish = null;
let isMusicPlaying = false;

// DOM elements
const menuGrid = document.getElementById('menuGrid');
const categoryBtns = document.querySelectorAll('.category-btn');
const dishModal = document.getElementById('dishModal');
const orderModal = document.getElementById('orderModal');
const musicToggle = document.getElementById('musicToggle');
const backgroundMusic = document.getElementById('backgroundMusic');

// Initialize the app
document.addEventListener('DOMContentLoaded', function() {
    loadMenu(currentCategory);
    setupEventListeners();
    setupMozartMusic();
});

// Setup event listeners
function setupEventListeners() {
    // Category buttons
    categoryBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const category = this.dataset.category;
            switchCategory(category);
        });
    });

    // Modal close buttons
    document.querySelectorAll('.close').forEach(closeBtn => {
        closeBtn.addEventListener('click', function() {
            closeModal();
        });
    });

    // Click outside modal to close
    window.addEventListener('click', function(event) {
        if (event.target.classList.contains('modal')) {
            closeModal();
        }
    });

    // Music controls
    musicToggle.addEventListener('click', toggleMusic);

    // Order buttons
    document.getElementById('orderBtn').addEventListener('click', showOrderModal);
    document.getElementById('wechatOrder').addEventListener('click', () => sendOrder('wechat'));
    document.getElementById('smsOrder').addEventListener('click', () => sendOrder('sms'));
}

// Load menu for selected category
function loadMenu(category) {
    currentCategory = category;
    const dishes = menuData[category];
    
    // Update active category button
    categoryBtns.forEach(btn => {
        btn.classList.remove('active');
        if (btn.dataset.category === category) {
            btn.classList.add('active');
        }
    });

    // Clear and populate menu grid
    menuGrid.innerHTML = '';
    
    if (dishes.length === 0) {
        menuGrid.innerHTML = '<div class="loading"><div class="spinner"></div></div>';
        return;
    }

    dishes.forEach(dish => {
        const menuItem = createMenuItem(dish);
        menuGrid.appendChild(menuItem);
    });
}

// Create menu item element
function createMenuItem(dish) {
    const menuItem = document.createElement('div');
    menuItem.className = 'menu-item';
    menuItem.innerHTML = `
        <img src="${dish.image}" alt="${dish.name}" class="menu-item-image">
        <div class="menu-item-content">
            <h3 class="menu-item-name">${dish.name}</h3>
            <p class="menu-item-description">${dish.description}</p>
        </div>
    `;
    
    menuItem.addEventListener('click', () => showDishDetails(dish));
    return menuItem;
}

// Switch category
function switchCategory(category) {
    if (category !== currentCategory) {
        loadMenu(category);
    }
}

// Show dish details modal
function showDishDetails(dish) {
    currentDish = dish;
    
    // Update modal content
    document.getElementById('modalDishImage').src = dish.image;
    document.getElementById('modalDishName').textContent = dish.name;
    
    // Update ingredients
    const ingredientsList = document.getElementById('modalIngredients');
    ingredientsList.innerHTML = '';
    dish.ingredients.forEach(ingredient => {
        const li = document.createElement('li');
        li.textContent = ingredient;
        ingredientsList.appendChild(li);
    });
    
    // Update steps
    const stepsList = document.getElementById('modalSteps');
    stepsList.innerHTML = '';
    dish.steps.forEach(step => {
        const li = document.createElement('li');
        li.textContent = step;
        stepsList.appendChild(li);
    });
    
    // Show modal
    dishModal.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

// Show order confirmation modal
function showOrderModal() {
    document.getElementById('confirmDishName').textContent = currentDish.name;
    dishModal.style.display = 'none';
    orderModal.style.display = 'block';
}

// Send order
function sendOrder(method) {
    const dish = currentDish;
    const message = createOrderMessage(dish);
    
    if (method === 'wechat') {
        // Copy to clipboard and show instructions for WeChat
        navigator.clipboard.writeText(message).then(() => {
            alert('订单信息已复制到剪贴板！\n\n请打开微信，粘贴到聊天窗口发送给我。\n\n订单内容：\n' + message.substring(0, 100) + '...');
        }).catch(() => {
            // Fallback: show the message in a prompt
            prompt('请复制以下订单信息，然后打开微信发送给我：', message);
        });
    } else if (method === 'sms') {
        // For SMS, use the sms: protocol
        const smsUrl = `sms:?body=${encodeURIComponent(message)}`;
        window.open(smsUrl, '_blank');
    }
    
    closeModal();
}

// Create order message
function createOrderMessage(dish) {
    let message = `🍽️ 新订单：${dish.name}\n\n`;
    message += `📋 所需材料：\n`;
    dish.ingredients.forEach(ingredient => {
        message += `• ${ingredient}\n`;
    });
    message += `\n👨‍🍳 制作步骤：\n`;
    dish.steps.forEach((step, index) => {
        message += `${index + 1}. ${step}\n`;
    });
    message += `\n⏰ 订单时间：${new Date().toLocaleString('zh-CN')}`;
    
    return message;
}

// Close modal
function closeModal() {
    dishModal.style.display = 'none';
    orderModal.style.display = 'none';
    document.body.style.overflow = 'auto';
}

// Setup Mozart K448 music
function setupMozartMusic() {
    // Mozart Sonata K448 - using a reliable source
    backgroundMusic.src = 'mozart.mp3';
    backgroundMusic.loop = true;
    backgroundMusic.volume = 0.3; // Set to 30% volume
    
    // Auto-play when page loads (with user interaction fallback)
    setTimeout(() => {
        backgroundMusic.play().then(() => {
            musicToggle.classList.add('playing');
            isMusicPlaying = true;
        }).catch(error => {
            console.log('Auto-play failed, waiting for user interaction:', error);
            // Music will start when user clicks the music button
        });
    }, 1000); // Wait 1 second after page load
}

// Music controls
function toggleMusic() {
    if (isMusicPlaying) {
        backgroundMusic.pause();
        musicToggle.classList.remove('playing');
        isMusicPlaying = false;
    } else {
        backgroundMusic.play().catch(error => {
            console.log('Music play failed:', error);
            alert('音乐播放失败，请检查网络连接');
        });
        musicToggle.classList.add('playing');
        isMusicPlaying = true;
    }
}