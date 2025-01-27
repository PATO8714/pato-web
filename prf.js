document.addEventListener('DOMContentLoaded', () => {
  // الحصول على عدد المشاهدين من التخزين المحلي (أو 50 كمبدأ أولي)
  let viewers = localStorage.getItem('viewers') || 1;

  // تحديث العدد عند تحميل الصفحة
  document.getElementById('viewer-count').textContent = viewers;
});

function showProfile() {
  // تحديث واجهة العرض
  document.getElementById('welcome-screen').style.display = 'none';
  document.getElementById('profile-card').style.display = 'flex';

  // تحديث عدد المشاهدين
  let viewers = parseInt(localStorage.getItem('viewers') || 50, 10);
  viewers += 1; // زيادة العدد بمقدار 1
  localStorage.setItem('viewers', viewers); // تخزين العدد الجديد

  // تحديث عرض العدد في الصفحة
  document.getElementById('viewer-count').textContent = viewers;

  // إظهار زر التشغيل بعد الضغط على "click to enter"
  document.querySelector('.button-container').style.display = 'block';
}

document.getElementById('play-button').addEventListener('click', function() {
  const video = document.getElementById('background-video');
  
  // إظهار الفيديو وتشغيله
  video.style.display = 'block';
  video.muted = false;  // إزالة كتم الصوت
  video.play();  // تشغيل الفيديو
  
  // تغيير نص الزر بعد الضغط عليه
  this.textContent = 'Video Playing...';
  this.disabled = true;  // تعطيل الزر بعد الضغط عليه
});





