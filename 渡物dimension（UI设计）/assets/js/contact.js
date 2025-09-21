document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("contactForm");

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    const email = document.getElementById("email").value.trim();
    const subject = document.getElementById("subject").value.trim();
    const message = document.getElementById("message").value.trim();

    if (!email || !subject || !message) {
      alert("请填写完整信息");
      return;
    }

    // 模拟发送成功
    alert("发送成功，我们会尽快受理。感谢您的反馈！");
    window.location.href = "welcome.html";
  });
});
