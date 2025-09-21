// --------------------
// 登录逻辑
// --------------------
function login(event) {
  event.preventDefault(); // 阻止表单默认提交刷新

  // 获取输入
  const inputUsername = document.getElementById("username").value.trim();
  const inputPassword = document.getElementById("password").value;

  // 验证输入是否为空
  if (!inputUsername || !inputPassword) {
    alert("请填写用户名和密码");
    return;
  }

  // 获取本地保存的用户信息
  const user = JSON.parse(localStorage.getItem("user") || "null");

  if (!user) {
    alert("未注册，请先注册账号");
    return;
  }

  // 验证用户名和密码
  if (inputUsername === user.username && inputPassword === user.password) {
    // 登录成功，设置登录状态
    localStorage.setItem("isLoggedIn", "true");

    alert("登录成功，欢迎 " + user.username + " !");
    window.location.href = "welcome.html"; // 跳转欢迎页
  } else {
    alert("用户名或密码错误，请重试");
  }
}

// --------------------
// 页面加载时检查登录状态
// --------------------
window.onload = function() {
  const user = JSON.parse(localStorage.getItem("user") || "null");
  const isLoggedIn = localStorage.getItem("isLoggedIn");

  // 如果已登录，直接跳转 welcome
  if (user && isLoggedIn === "true") {
    window.location.href = "welcome.html";
  }
};

// --------------------
// 绑定表单提交事件
// --------------------
document.getElementById("login-form").addEventListener("submit", login);
