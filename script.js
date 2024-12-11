// 更新标题和时间显示
function updateTime() {
    const now = new Date();
    const timeString = now.toLocaleTimeString('zh-CN', { hour12: false });
    const dateString = now.toLocaleDateString('zh-CN', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        weekday: 'long'
    });
    
    // 更新页面标题
    document.title = `北京时间 ${timeString}`;
    
    // 更新页面显示
    document.getElementById('current-time').textContent = timeString;
    document.getElementById('current-date').textContent = dateString;
}

// 番茄时钟相关变量
let pomodoroTime = 25 * 60;
let pomodoroInterval;
let isRunning = false;

// 番茄时钟功能
function updatePomodoroTimer() {
    const minutes = Math.floor(pomodoroTime / 60);
    const seconds = pomodoroTime % 60;
    document.getElementById('pomodoro-timer').textContent = 
        `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
}

function startPomodoro() {
    if (!isRunning) {
        isRunning = true;
        pomodoroInterval = setInterval(() => {
            if (pomodoroTime > 0) {
                pomodoroTime--;
                updatePomodoroTimer();
            } else {
                clearInterval(pomodoroInterval);
                isRunning = false;
                alert('番茄时钟完成！');
            }
        }, 1000);
    }
}

function pausePomodoro() {
    clearInterval(pomodoroInterval);
    isRunning = false;
}

function resetPomodoro() {
    clearInterval(pomodoroInterval);
    isRunning = false;
    pomodoroTime = 25 * 60;
    updatePomodoroTimer();
}

// 事件监听
document.getElementById('start-pomodoro').addEventListener('click', startPomodoro);
document.getElementById('pause-pomodoro').addEventListener('click', pausePomodoro);
document.getElementById('reset-pomodoro').addEventListener('click', resetPomodoro);

// 初始化
setInterval(updateTime, 1000);
updateTime();
updatePomodoroTimer();