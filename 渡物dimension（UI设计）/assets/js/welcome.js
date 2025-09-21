// 1️⃣ 获取按钮元素
const logoutBtn = document.getElementById("logout-btn");

// 2️⃣ 绑定点击事件
logoutBtn.addEventListener("click", function() {
  // 3️⃣ 设置登录状态为 false
  localStorage.setItem("isLoggedIn", "false");

  // 4️⃣ 可选：提示用户
  alert("已退出登录");

  // 5️⃣ 可选：跳回注册页
  window.location.href = "register.html";
});


// 搜索回车跳转示例
document.querySelector('.nav-item.search input').addEventListener('keypress', function(e){
  if(e.key === 'Enter'){
    const query = e.target.value.trim();
    if(query) {
      alert("你搜索了: " + query);
      // 这里可以跳转到搜索结果页
      // window.location.href = `search.html?q=${encodeURIComponent(query)}`;
    }
  }
});