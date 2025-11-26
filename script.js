/* ===== HALLEY STYLE 背景文字动画 ===== */
(function() {
    const container = document.querySelector('.halley-background');
    if (!container) return;

    const text = "Halley Style ";
    const rows = 10;       // 行数
    const cols = 20;       // 每行文字数量
    const spacingX = 300;  // 横向间距
    const spacingY = 80;   // 纵向间距
    const speed = 0.2;     // 移动速度

    // 生成文字链条
    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
            const span = document.createElement('span');
            span.textContent = text;
            span.style.left = `${-c * spacingX}px`;
            span.style.top = `${window.innerHeight - r * spacingY + Math.random() * 20}px`;
            container.appendChild(span);
        }
    }

    const spans = container.querySelectorAll('span');

    // 动画函数
    function animate() {
        spans.forEach(span => {
            let x = parseFloat(span.style.left);
            let y = parseFloat(span.style.top);
            x += speed;
            y -= speed * 0.5; // 左下 → 右上方向

            if (x > window.innerWidth + 200 || y < -50) {
                x = -200;
                y = window.innerHeight + 50;
            }

            span.style.left = x + "px";
            span.style.top = y + "px";
        });
        requestAnimationFrame(animate);
    }

    animate();

    // 窗口大小变化时重新布局
    window.addEventListener('resize', () => {
        spans.forEach((span, i) => {
            const row = Math.floor(i / cols);
            span.style.top = `${window.innerHeight - row * spacingY + Math.random() * 20}px`;
        });
    });
})();


/* ===== CATEGORY FILTER 功能 ===== */
(function() {
    const filterButtons = document.querySelectorAll(".filter-btn");
    const cards = document.querySelectorAll(".card");

    filterButtons.forEach(btn => {
        btn.addEventListener("click", () => {
            const category = btn.getAttribute("data-category");

            // 更新按钮状态
            filterButtons.forEach(b => b.classList.remove("active"));
            btn.classList.add("active");

            // 显示 / 隐藏卡片
            cards.forEach(card => {
                const cardCategory = card.getAttribute("data-category");

                if (category === "all" || cardCategory === category) {
                    card.style.display = "inline-block";
                    card.style.opacity = "0";
                    setTimeout(() => {
                        card.style.opacity = "1";
                    }, 50);
                } else {
                    card.style.display = "none";
                }
            });
        });
    });
})();
