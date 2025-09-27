// Menu Data - Easy to add new dishes!
// Just copy the structure below and add your new dish

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
        },
        {
            id: 11,
            name: "煎饼果子",
            description: "香脆煎饼配鸡蛋和蔬菜，营养丰富",
            image: "https://images.unsplash.com/photo-1551218808-94e220e084d2?w=400&h=300&fit=crop",
            ingredients: [
                "面粉 200g",
                "鸡蛋 2个",
                "生菜 适量",
                "甜面酱 2勺",
                "葱花 少许"
            ],
            steps: [
                "和面制作煎饼皮",
                "平底锅摊成薄饼",
                "打入鸡蛋摊匀",
                "翻面后刷甜面酱",
                "加入生菜和葱花卷起"
            ]
        }
        // ADD NEW BREAKFAST DISHES HERE:
        // Copy the structure above and add your new dish
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
        // ADD NEW LUNCH/DINNER DISHES HERE:
        // Copy the structure above and add your new dish
    ]
};

// HOW TO ADD NEW DISHES:
/*
1. Choose the category (breakfast or lunch)
2. Copy this structure and paste it in the array:

{
    id: 11,  // Use the next available number
    name: "你的菜名",
    description: "简短描述这道菜",
    image: "你的图片URL或本地图片路径",
    ingredients: [
        "材料1 数量",
        "材料2 数量",
        "材料3 数量"
    ],
    steps: [
        "步骤1",
        "步骤2", 
        "步骤3"
    ]
}

3. Save the file and refresh the website!

TIPS:
- For images, you can use Unsplash URLs like: https://images.unsplash.com/photo-[ID]?w=400&h=300&fit=crop
- Or add your own images to the project folder and use: "./images/your-image.jpg"
- Make sure each dish has a unique ID number
- Keep descriptions short and appetizing
- List ingredients with quantities
- Write steps in order
*/