// [Modified] 提前定义常量，确保初始化顺序正确
const minVolume = 0.1; // 定义最小音量值（无声）
const maxVolume = 1.0; // 定义最大音量值
const fadeDuration = 10000; // 定义渐变持续时间，单位为毫秒（6秒）

// 创建 Audio 对象用于播放音乐，指定钢琴循环音乐文件路径
const audio = new Audio('assets/music/piano-loop.mp3');
// 设置音频循环播放
audio.loop = true;
// 在创建后立即设置初始音量为 minVolume
audio.volume = minVolume;
// 跟踪音乐是否正在播放的标志
let isPlaying = false;
// 存储渐变定时器的引用，用于清除
let fadeInterval = null;

// 获取音乐按钮元素并绑定点击事件，添加错误处理
const musicButton = document.querySelector('.music-toggle');
if (!musicButton) {
  console.error('Music toggle button (.music-toggle) not found in the DOM.');
} else {
  musicButton.addEventListener('click', toggleMusic);
}

// 切换音乐播放/暂停的函数
function toggleMusic() {
  if (!musicButton) return; // 防止按钮未找到时继续执行

  // 如果音乐正在播放，暂停并清除渐变
  if (isPlaying) {
    audio.pause();
    musicButton.classList.remove('active');
    clearInterval(fadeInterval); // 清除当前的渐变定时器
    console.log('Music paused.');
  } else {
    // 强制设置初始音量为 minVolume 再开始播放
    audio.volume = minVolume;
    audio.play().catch(error => {
      console.error('Failed to play audio:', error);
    });
    musicButton.classList.add('active');
    console.log('Music started playing.');
  }
  // 切换播放状态
  isPlaying = !isPlaying;
}

// 监听滚轮事件，触发音量渐变（增减）
window.addEventListener('wheel', () => {
  if (!isPlaying) return;

  // 清除当前的渐变定时器，准备重新开始
  clearInterval(fadeInterval);

  // 记录渐变开始时间
  let startTime = Date.now();
  // 获取滚轮触发时的当前音量作为起点
  const startVolume = audio.volume;

  // 设置渐变定时器，每50ms更新一次音量
  fadeInterval = setInterval(() => {
    let elapsed = Date.now() - startTime;
    let progress = Math.min(elapsed / fadeDuration, 1);

    // 在前半段时间（0到3秒）音量渐增
    if (progress <= 0.5) {
      audio.volume = startVolume + (maxVolume - startVolume) * (progress / 0.5);
    } 
    // 在后半段时间（3到6秒）音量渐减
    else {
      audio.volume = maxVolume - (maxVolume - minVolume) * ((progress - 0.5) / 0.5);
    }

    // 当进度达到100%（6秒）时，音量降为0并停止渐变
    if (progress >= 1) {
      audio.volume = minVolume;
      clearInterval(fadeInterval);
      console.log('Fade cycle completed, volume set to 0.');
    }
  }, 50);
});