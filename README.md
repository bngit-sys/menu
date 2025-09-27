# 美味菜单 - 家庭菜单网站

一个优雅的中文菜单网站，专为家庭用餐设计。妻子可以浏览早餐和正餐选项，查看详细制作步骤和所需材料，并直接发送订单到微信或短信。

## 功能特点

- 🍽️ **分类浏览**: 早餐和正餐分类展示
- 📱 **响应式设计**: 支持手机、平板、电脑等各种设备
- 🎵 **背景音乐**: 可选择的背景音乐播放
- 📋 **详细食谱**: 每道菜都有完整的制作步骤和材料清单
- 📲 **一键订购**: 直接发送订单信息到微信或短信
- 🎨 **现代界面**: 优雅、清洁的现代化设计

## 使用方法

1. 打开 `index.html` 文件
2. 选择早餐或正餐分类
3. 点击感兴趣的菜品查看详情
4. 查看制作步骤和所需材料
5. 点击"我要订购"发送订单信息

## 自定义内容

### 添加新菜品

在 `script.js` 文件中的 `menuData` 对象中添加新菜品：

```javascript
{
    id: 11,
    name: "菜品名称",
    description: "菜品描述",
    image: "图片URL",
    ingredients: [
        "材料1",
        "材料2"
    ],
    steps: [
        "步骤1",
        "步骤2"
    ]
}
```

### 添加背景音乐

在 `script.js` 文件中的 `musicUrls` 对象中添加音乐文件：

```javascript
const musicUrls = {
    music1: '你的音乐文件URL',
    music2: '你的音乐文件URL',
    music3: '你的音乐文件URL'
};
```

## 部署到 GitHub Pages

1. 将代码推送到 GitHub 仓库
2. 在仓库设置中启用 GitHub Pages
3. 选择源分支（通常是 main 或 master）
4. 访问 `https://你的用户名.github.io/仓库名` 即可查看网站

## 技术栈

- HTML5
- CSS3 (Flexbox, Grid, 动画效果)
- JavaScript (ES6+)
- 响应式设计
- 现代浏览器兼容

## 浏览器支持

- Chrome 60+
- Firefox 55+
- Safari 12+
- Edge 79+

## 许可证

MIT License