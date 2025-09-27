// Menu data with Chinese dishes
const menuData = {
    breakfast: [
        {
            id: 1,
            name: "煎蛋吐司",
            description: "香脆吐司配嫩滑煎蛋，营养丰富的经典早餐",
            image: "https://images.unsplash.com/photo-1484723091739-30a097e8f929?w=400&h=300&fit=crop",
            ingredients: [
                "吐司面包 2片",
                "鸡蛋 2个",
                "黄油 适量",
                "盐 少许",
                "黑胡椒 少许"
            ],
            steps: [
                "将吐司面包放入烤面包机中烤至金黄色",
                "平底锅加热，放入黄油融化",
                "打入鸡蛋，用小火煎制",
                "撒上盐和黑胡椒调味",
                "将煎蛋放在吐司上即可享用"
            ]
        },
        {
            id: 2,
            name: "豆浆油条",
            description: "传统中式早餐，香脆油条配热豆浆",
            image: "https://images.unsplash.com/photo-1546554137-f86b9593a222?w=400&h=300&fit=crop",
            ingredients: [
                "豆浆 500ml",
                "油条 2根",
                "白糖 适量",
                "芝麻 少许"
            ],
            steps: [
                "将豆浆加热至温热",
                "油条切成小段",
                "在豆浆中加入适量白糖调味",
                "撒上芝麻增香",
                "将油条蘸豆浆食用"
            ]
        },
        {
            id: 3,
            name: "燕麦粥",
            description: "健康营养的燕麦粥，适合减肥人士",
            image: "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=400&h=300&fit=crop",
            ingredients: [
                "燕麦片 50g",
                "牛奶 200ml",
                "蜂蜜 1勺",
                "蓝莓 适量",
                "坚果 少许"
            ],
            steps: [
                "将燕麦片放入锅中",
                "加入牛奶，小火煮制",
                "不断搅拌至浓稠",
                "加入蜂蜜调味",
                "盛入碗中，撒上蓝莓和坚果"
            ]
        },
        {
            id: 4,
            name: "小笼包",
            description: "皮薄馅嫩的小笼包，汤汁丰富",
            image: "https://images.unsplash.com/photo-1496116218417-1a781b1c416c?w=400&h=300&fit=crop",
            ingredients: [
                "面粉 200g",
                "猪肉馅 150g",
                "虾仁 50g",
                "生姜 1块",
                "生抽 2勺",
                "香油 1勺"
            ],
            steps: [
                "和面制作包子皮",
                "调制肉馅，加入虾仁和调料",
                "包成小笼包形状",
                "上锅蒸制15分钟",
                "趁热食用，小心烫口"
            ]
        }
    ],
    lunch: [
        {
            id: 5,
            name: "宫保鸡丁",
            description: "经典川菜，鸡肉嫩滑，花生香脆",
            image: "https://images.unsplash.com/photo-1563379091339-03246963d4d0?w=400&h=300&fit=crop",
            ingredients: [
                "鸡胸肉 300g",
                "花生米 50g",
                "干辣椒 10个",
                "花椒 1勺",
                "生抽 2勺",
                "老抽 1勺",
                "料酒 1勺",
                "糖 1勺",
                "醋 1勺"
            ],
            steps: [
                "鸡胸肉切丁，用料酒和生抽腌制",
                "热锅下油，炸花生米至金黄",
                "爆炒干辣椒和花椒出香味",
                "下鸡丁炒至变色",
                "加入调料炒匀，最后加入花生米"
            ]
        },
        {
            id: 6,
            name: "红烧肉",
            description: "肥瘦相间的红烧肉，入口即化",
            image: "https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=400&h=300&fit=crop",
            ingredients: [
                "五花肉 500g",
                "冰糖 50g",
                "生抽 3勺",
                "老抽 1勺",
                "料酒 2勺",
                "生姜 1块",
                "大葱 1根"
            ],
            steps: [
                "五花肉切块，冷水下锅焯水",
                "热锅下冰糖炒糖色",
                "下肉块炒至上色",
                "加入调料和热水",
                "小火炖煮1小时至软烂"
            ]
        },
        {
            id: 7,
            name: "麻婆豆腐",
            description: "麻辣鲜香的经典川菜",
            image: "https://images.unsplash.com/photo-1582878826629-29b7ad1cdc43?w=400&h=300&fit=crop",
            ingredients: [
                "嫩豆腐 400g",
                "猪肉末 100g",
                "豆瓣酱 2勺",
                "花椒粉 1勺",
                "生抽 1勺",
                "料酒 1勺",
                "葱花 适量",
                "蒜末 适量"
            ],
            steps: [
                "豆腐切块，用盐水焯一下",
                "热锅下肉末炒散",
                "加入豆瓣酱炒出红油",
                "下豆腐块，轻轻翻炒",
                "调味后撒花椒粉和葱花"
            ]
        },
        {
            id: 8,
            name: "糖醋里脊",
            description: "酸甜可口的经典菜品",
            image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=400&h=300&fit=crop",
            ingredients: [
                "里脊肉 300g",
                "鸡蛋 1个",
                "面粉 50g",
                "番茄酱 3勺",
                "白糖 2勺",
                "醋 2勺",
                "生抽 1勺",
                "料酒 1勺"
            ],
            steps: [
                "里脊肉切条，用料酒腌制",
                "裹蛋液和面粉，下锅炸至金黄",
                "调制糖醋汁",
                "热锅下汁，炒至浓稠",
                "下肉条炒匀即可"
            ]
        },
        {
            id: 9,
            name: "清蒸鲈鱼",
            description: "鲜嫩清香的蒸鱼，保持原汁原味",
            image: "https://images.unsplash.com/photo-1544943910-4c1dc44aab44?w=400&h=300&fit=crop",
            ingredients: [
                "鲈鱼 1条",
                "生姜 1块",
                "大葱 1根",
                "生抽 2勺",
                "料酒 1勺",
                "香油 1勺",
                "香菜 适量"
            ],
            steps: [
                "鲈鱼洗净，打花刀",
                "鱼身抹料酒，放姜丝",
                "上锅蒸8-10分钟",
                "蒸好后淋生抽和香油",
                "撒香菜段即可"
            ]
        },
        {
            id: 10,
            name: "蒜蓉西兰花",
            description: "清爽健康的素菜",
            image: "https://images.unsplash.com/photo-1540420773420-3366772f4999?w=400&h=300&fit=crop",
            ingredients: [
                "西兰花 1颗",
                "大蒜 5瓣",
                "生抽 1勺",
                "盐 少许",
                "香油 1勺",
                "食用油 适量"
            ],
            steps: [
                "西兰花掰成小朵，洗净",
                "开水焯烫2分钟",
                "热锅下蒜蓉爆香",
                "下西兰花炒制",
                "调味后淋香油即可"
            ]
        }
    ]
};

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
const musicSelect = document.getElementById('musicSelect');
const backgroundMusic = document.getElementById('backgroundMusic');

// Initialize the app
document.addEventListener('DOMContentLoaded', function() {
    loadMenu(currentCategory);
    setupEventListeners();
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
    musicSelect.addEventListener('change', changeMusic);

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

// Music controls
function toggleMusic() {
    if (isMusicPlaying) {
        backgroundMusic.pause();
        musicToggle.classList.remove('playing');
        isMusicPlaying = false;
    } else {
        if (backgroundMusic.src) {
            backgroundMusic.play();
            musicToggle.classList.add('playing');
            isMusicPlaying = true;
        }
    }
}

function changeMusic() {
    const selectedMusic = musicSelect.value;
    if (selectedMusic) {
        // In a real implementation, you would load actual music files
        // For now, we'll just show a message
        alert(`已选择音乐：${musicSelect.options[musicSelect.selectedIndex].text}`);
        
        // Reset music state
        backgroundMusic.pause();
        musicToggle.classList.remove('playing');
        isMusicPlaying = false;
    }
}

// Add some sample music URLs (you can replace these with your own)
const musicUrls = {
    music1: 'https://www.soundjay.com/misc/sounds/bell-ringing-05.wav',
    music2: 'https://www.soundjay.com/misc/sounds/bell-ringing-05.wav',
    music3: 'https://www.soundjay.com/misc/sounds/bell-ringing-05.wav'
};

// Update music source when selection changes
musicSelect.addEventListener('change', function() {
    const selectedMusic = this.value;
    if (selectedMusic && musicUrls[selectedMusic]) {
        backgroundMusic.src = musicUrls[selectedMusic];
    }
});