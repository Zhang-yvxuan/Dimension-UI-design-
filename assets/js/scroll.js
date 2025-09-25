// scroll.js
function handleScrollToAnchor() {
  const hash = window.location.hash.slice(1); // 获取哈希值
  if (hash && document.getElementById(hash)) {
    const element = document.getElementById(hash);
    const offset = 70; // 向上偏移 70px
    const elementPosition = element.getBoundingClientRect().top + window.scrollY;
    const offsetPosition = elementPosition - offset;

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    });
    console.log(`跳转到 ${hash}，偏移后位置: ${offsetPosition}`); // 调试日志
  } else {
    console.log(`未找到 ID: ${hash}`); // 调试未找到元素
  }
}

// 等待页面加载并延迟检查
document.addEventListener('DOMContentLoaded', () => {
  // 确保分类渲染完成后执行
  setTimeout(handleScrollToAnchor, 100); // 延迟 100ms 确保 DOM 更新
});

// 监听哈希变化
window.addEventListener('hashchange', handleScrollToAnchor);