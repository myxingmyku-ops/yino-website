# 壹锘官网表单接入 Google Apps Script

## 目标
把官网表单从 GitHub Pages 直接提交到 Google Apps Script，再由 Google 账号把项目咨询发送到：

`Myxingmyku@gmail.com`

---

## 第一步：创建脚本
1. 打开 https://script.google.com/
2. 新建项目
3. 把 `contact-form.gs` 里的代码完整粘进去
4. 保存项目，建议命名：`yino-website-form`

---

## 第二步：部署成 Web App
1. 右上角点击 **部署** → **新建部署**
2. 类型选择 **Web 应用**
3. 执行身份：**我**
4. 访问权限：**任何人**
5. 点击部署
6. 首次会要求授权，按提示完成
7. 复制部署后的 **Web App URL**

URL 看起来类似：

`https://script.google.com/macros/s/AKfycbxxxxxxxxxxxxxxxx/exec`

---

## 第三步：把 URL 发给我
你只要把这个 Web App URL 发给我，我就会把官网前端直接接上。

---

## 说明
- 这个方案不依赖第三方邮件转发表单服务
- 表单提交后会直接由你的 Google 账号发送到 `Myxingmyku@gmail.com`
- 后续如果需要，我还可以继续加：
  - 自动写入 Google Sheet
  - 自动抄送第二邮箱
  - 自动按项目类型分类
  - 自动回执给客户
