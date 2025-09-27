# 🍽️ How to Add New Dishes

Adding new dishes to your menu is now super easy! Just follow these simple steps:

## 📝 **Step 1: Open the Menu Data File**
Open `menu-data.js` in your text editor.

## 🍳 **Step 2: Choose Your Category**
- **早餐 (Breakfast)**: Add to the `breakfast` array
- **正餐 (Lunch/Dinner)**: Add to the `lunch` array

## ➕ **Step 3: Add Your New Dish**

Find the section where you want to add your dish and copy this template:

```javascript
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
```

## 🖼️ **Step 4: Add Your Picture**

### Option A: Use Unsplash (Free Stock Photos)
1. Go to [Unsplash.com](https://unsplash.com)
2. Search for your dish (e.g., "pancakes", "stir fry")
3. Copy the image URL
4. Add `?w=400&h=300&fit=crop` to the end for proper sizing

Example: `https://images.unsplash.com/photo-1234567890?w=400&h=300&fit=crop`

### Option B: Use Your Own Photos
1. Add your photo to the project folder
2. Use the path: `"./images/your-photo.jpg"`

## 📋 **Step 5: Fill in the Details**

Replace the template with your dish information:

```javascript
{
    id: 11,
    name: "煎饼果子",
    description: "香脆煎饼配鸡蛋和蔬菜，营养丰富",
    image: "https://images.unsplash.com/photo-1234567890?w=400&h=300&fit=crop",
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
```

## 💾 **Step 6: Save and Test**
1. Save the `menu-data.js` file
2. Refresh your website
3. Your new dish should appear!

## 🎯 **Tips for Great Dishes**

### **Name**: Keep it short and appetizing
- ✅ "煎蛋吐司" 
- ❌ "用黄油煎的鸡蛋配烤面包片"

### **Description**: One sentence that makes it sound delicious
- ✅ "香脆吐司配嫩滑煎蛋，营养丰富的经典早餐"
- ❌ "这是用面包和鸡蛋做的食物"

### **Ingredients**: Include quantities
- ✅ "鸡蛋 2个"
- ❌ "一些鸡蛋"

### **Steps**: Write in order, be specific
- ✅ "平底锅加热，放入黄油融化"
- ❌ "做菜"

## 🔢 **ID Numbers**
Make sure each dish has a unique ID number. Check the last dish in each category and use the next number.

## 📱 **Testing Your New Dish**
1. Click on your new dish
2. Check that the image loads
3. Verify ingredients and steps are correct
4. Test the ordering function

## 🆘 **Need Help?**
If something doesn't work:
1. Check that you copied the structure exactly
2. Make sure you used the right punctuation (commas, quotes)
3. Verify your image URL works
4. Check that your ID number is unique

Happy cooking! 🍳✨