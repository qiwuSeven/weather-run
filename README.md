# weather-run

## 项目结构

* main.js
* drawer.js
* chracter.js
* blocks.js
* sound.js

  (未指定↓)

* weather.js

* item.js

## 模块

### main.js

开始游戏按钮 执行开始 ==> drawer

接收键盘事件/声音变化 ==> chracter

### drawer.js

每一帧获取chracter、blocks状态绘制在屏幕上

判断胜负、分数 ==> main

### chracter.js

提供人物数据 ==> drawer

接收键盘的跳跃 计算y值变化

### blocks.js

提供障碍物队列 ==> drawer

（箱子）

### sound.js 

声音监听的模块

### weather.js（未指定）

不同天气会有不同的效果：

### item.js （未指定）

道具 用来应对天气

