// 模拟用户数量增长
const counterEl = document.getElementById("user-count");
if(counterEl){
  let count = 218374; // 初始基数
  setInterval(()=>{
    count += Math.floor(Math.random()*3); // 随机递增
    counterEl.textContent = count.toLocaleString();
  }, 1500);
}
