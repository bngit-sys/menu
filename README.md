# 美味菜单 - 家庭菜单网站

一个优雅的中文菜单网站，专为家庭用餐设计。妻子可以浏览早餐和正餐选项，查看详细制作步骤和所需材料，并直接发送订单到微信或短信。网站采用粉色主题设计，自动播放莫扎特奏鸣曲K448作为背景音乐。

## 功能特点

- 🍽️ **分类浏览**: 早餐和正餐分类展示
- 📱 **响应式设计**: 支持手机、平板、电脑等各种设备
- 🎵 **自动背景音乐**: 莫扎特奏鸣曲K448自动播放
- 📋 **详细食谱**: 每道菜都有完整的制作步骤和材料清单
- 📲 **一键订购**: 直接发送订单信息到微信或短信
- 🎨 **粉色主题**: 优雅的粉色设计，温馨浪漫
- ➕ **轻松添加菜品**: 简单的数据文件管理，轻松添加新菜品

## 使用方法

1. 打开 `index.html` 文件
2. 选择早餐或正餐分类
3. 点击感兴趣的菜品查看详情
4. 查看制作步骤和所需材料
5. 点击"我要订购"发送订单信息

## 自定义内容

### 🍳 添加新菜品（超简单！）

现在添加新菜品变得非常简单！只需要编辑 `menu-data.js` 文件：

1. **打开文件**: 编辑 `menu-data.js`
2. **选择分类**: 找到 `breakfast` 或 `lunch` 数组
3. **复制模板**: 使用这个结构：

```javascript
{
    id: 12,  // 使用下一个可用数字
    name: "你的菜名",
    description: "简短描述",
    image: "图片URL",
    ingredients: [
        "材料1 数量",
        "材料2 数量"
    ],
    steps: [
        "步骤1",
        "步骤2"
    ]
}
```

4. **保存文件**: 刷新网站即可看到新菜品！

**详细说明**: 查看 `HOW-TO-ADD-DISHES.md` 文件获取完整指南。

### 🎵 更换背景音乐

编辑 `script.js` 文件中的 `setupMozartMusic()` 函数：

```javascript
function setupMozartMusic() {
    backgroundMusic.src = '你的音乐文件.mp3';  // 替换为你的音乐文件
    backgroundMusic.loop = true;
    backgroundMusic.volume = 0.3;
    // ... 其余代码保持不变
}
```

### 🖼️ 图片选项

**选项1 - 使用Unsplash免费图片**:
- 访问 [Unsplash.com](https://unsplash.com)
- 搜索你的菜品
- 复制图片URL并添加 `?w=400&h=300&fit=crop`

**选项2 - 使用自己的照片**:
- 将照片放入项目文件夹
- 使用路径: `"./images/your-photo.jpg"`

## 部署到 GitHub Pages

1. 将代码推送到 GitHub 仓库
2. 在仓库设置中启用 GitHub Pages
3. 选择源分支（通常是 main 或 master）
4. 访问 `https://你的用户名.github.io/仓库名` 即可查看网站

## 文件结构

```
menus/
├── index.html              # 主页面
├── styles.css              # 样式文件
├── script.js               # 主要功能
├── menu-data.js            # 菜品数据（易于编辑）
├── mozart.mp3              # 背景音乐文件
├── HOW-TO-ADD-DISHES.md    # 添加菜品详细指南
├── README.md               # 项目说明
└── .github/
    └── workflows/
        └── deploy.yml      # GitHub Pages 部署配置
```

## 技术栈

- **HTML5**: 语义化结构
- **CSS3**: 粉色主题，响应式设计，动画效果
- **JavaScript (ES6+)**: 现代JavaScript功能
- **模块化设计**: 数据与逻辑分离
- **GitHub Pages**: 自动部署
- **现代浏览器兼容**: Chrome, Firefox, Safari, Edge

## 浏览器支持

- Chrome 60+
- Firefox 55+
- Safari 12+
- Edge 79+

## 快速开始

1. **克隆仓库**: `git clone https://github.com/yourusername/menu.github.io.git`
2. **打开网站**: 双击 `index.html` 或使用本地服务器
3. **添加菜品**: 编辑 `menu-data.js` 文件
4. **自定义音乐**: 替换 `mozart.mp3` 文件
5. **部署**: 推送到GitHub，自动部署到GitHub Pages

## 特色功能

### 🎵 自动音乐播放
- 莫扎特奏鸣曲K448自动播放
- 音量设置为30%，不会干扰浏览
- 可点击音乐按钮暂停/播放

### 📱 完美移动体验
- 响应式设计，手机浏览体验优秀
- 触摸友好的按钮和界面
- 快速加载，流畅动画

### 🛒 智能订购系统
- 一键复制订单到剪贴板
- 支持微信和短信发送
- 包含完整食材清单和制作步骤

## 许可证

MIT License