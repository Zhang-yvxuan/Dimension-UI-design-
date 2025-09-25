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
});ss