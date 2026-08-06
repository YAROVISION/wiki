/**
 * Ефект сніжинок / зоряного неба на Canvas
 * Динамічно створює та анімує падаючі сніжинки в повноекранному режимі
 */
class SnowflakeEffect {
  constructor(canvasId = 'snowflakes-canvas') {
    this.canvas = document.getElementById(canvasId);
    if (!this.canvas) {
      this.canvas = document.createElement('canvas');
      this.canvas.id = canvasId;
      this.canvas.style.position = 'fixed';
      this.canvas.style.top = '0';
      this.canvas.style.left = '0';
      this.canvas.style.width = '100vw';
      this.canvas.style.height = '100vh';
      this.canvas.style.pointerEvents = 'none';
      this.canvas.style.zIndex = '-1'; // Відображення на задньому плані
      document.body.appendChild(this.canvas);
    }
    this.ctx = this.canvas.getContext('2d');
    this.snowflakes = [];
    this.maxSnowflakes = 120; // Кількість сніжинок
    
    this.init();
    this.animate();
    
    window.addEventListener('resize', () => this.resize());
  }
  
  init() {
    this.resize();
    for (let i = 0; i < this.maxSnowflakes; i++) {
      this.snowflakes.push(this.createSnowflake(true));
    }
  }
  
  resize() {
    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight;
  }
  
  createSnowflake(randomY = false) {
    return {
      x: Math.random() * this.canvas.width,
      y: randomY ? Math.random() * this.canvas.height : this.canvas.height + 10,
      radius: Math.random() * 2 + 0.5, // Розмір від 0.5px до 2.5px
      density: Math.random() * 0.4 + 0.15, // Швидкість руху
      opacity: Math.random() * 0.6 + 0.2, // Прозорість від 0.2 до 0.8
      swing: Math.random() * 2 * Math.PI, // Початкова фаза коливання вбік
      swingSpeed: Math.random() * 0.01 + 0.002 // Швидкість коливання
    };
  }
  
  animate() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    
    for (let i = 0; i < this.snowflakes.length; i++) {
      const f = this.snowflakes[i];
      
      this.ctx.beginPath();
      this.ctx.arc(f.x, f.y, f.radius, 0, Math.PI * 2);
      this.ctx.fillStyle = `rgba(255, 255, 255, ${f.opacity})`;
      this.ctx.fill();
      
      // Оновлення координат (рух вгору)
      f.y -= f.density * 1.1; // Повільний рух вгору
      f.x += Math.sin(f.swing) * 0.25; // Легке погойдування вбік
      f.swing += f.swingSpeed;
      
      // Якщо сніжинка піднялася вище екрана, повертаємо її донизу з новими параметрами
      if (f.y < -10) {
        this.snowflakes[i] = this.createSnowflake(false);
      }
    }
    
    requestAnimationFrame(() => this.animate());
  }
}

// Автоматична ініціалізація після завантаження сторінки
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => new SnowflakeEffect());
} else {
  new SnowflakeEffect();
}
