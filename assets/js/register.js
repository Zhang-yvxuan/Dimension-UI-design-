// --------------------
// 注册逻辑
// --------------------
function regist(event) {
  event.preventDefault(); // 阻止表单默认提交刷新

  // 获取表单输入
  const username = document.getElementById("username").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value;
  const confirm = document.getElementById("confirm").value;

  // 表单验证
  if (!username || !email || !password || !confirm) {
    alert("请填写完整信息");
    return;
  }

  if (password !== confirm) {
    alert("两次密码不一致");
    return;
  }

  // 保存用户信息到 LocalStorage
  const userInfo = { username, email, password };
  localStorage.setItem("user", JSON.stringify(userInfo));

  // 设置登录状态
  localStorage.setItem("isLoggedIn", "true");

  alert("注册成功，欢迎 " + username + " !");
  window.location.href = "welcome.html"; // 跳转到欢迎页
}

// --------------------
// 页面加载时检查登录状态
// --------------------
window.onload = function() {
  const user = JSON.parse(localStorage.getItem("user") || "null");
  const isLoggedIn = localStorage.getItem("isLoggedIn");

  // 如果用户已登录，跳转 welcome
  if (user && isLoggedIn === "true") {
    window.location.href = "welcome.html";
  }
};

// --------------------
// 绑定表单提交事件
// --------------------
document.getElementById("register-form").addEventListener("submit", regist);