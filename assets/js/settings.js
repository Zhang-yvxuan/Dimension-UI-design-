document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('settings-form');
  const themeSelect = document.getElementById('theme');
  const notificationsCheckbox = document.getElementById('notifications');

  // 加载设置
  const savedTheme = localStorage.getItem('theme') || 'light';
  themeSelect.value = savedTheme;
  document.body.classList.add(savedTheme); // 应用主题类

  const savedNotifications = localStorage.getItem('notifications') === 'true';
  notificationsCheckbox.checked = savedNotifications;

  // 保存设置
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    localStorage.setItem('theme', themeSelect.value);
    localStorage.setItem('notifications', notificationsCheckbox.checked);
    document.body.className = ''; // 重置类
    document.body.classList.add(themeSelect.value);
    alert('设置已保存');
  });
});