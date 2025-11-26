/* ===== HALLEY STYLE 背景文字动画 ===== */
(function() {
    const container = document.querySelector('.halley-background');
    if (!container) return;

    const text = "Halley Style ";
    const rows = 15;       // 行数
    const cols = 25;       // 每行文字数量
    const spacingX = 300;  // 水平间距
    const spacingY = 80;   // 垂直间距
    const speed = 0.2;     // 移动速度

    const spans = [];

    // 初始化文字，覆盖整个屏幕
    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
            const span = document.createElement('span');
            span.textContent = text;
            // 初始位置让文字覆盖整个屏幕
            span.style.left = `${c * spacingX - window.innerWidth}px`;
            span.style.top = `${window.innerHeight - r * spacingY}px`;
            container.appendChild(span);
            spans.push(span);
        }
    }

    function animate() {
        spans.forEach(span => {
            let x = parseFloat(span.style.left);
            let y = parseFloat(span.style.top);

            x += speed;
            y -= speed; // 左下→右上方向

            // 超出屏幕范围，循环回左下
            if (x > window.innerWidth + 200 || y < -200) {
                x = -200;
                y = window.innerHeight + 50;
            }

            span.style.left = x + "px";
            span.style.top = y + "px";
        });

        requestAnimationFrame(animate);
    }

    animate();

    // 窗口大小变化时重新调整文字位置
    window.addEventListener('resize', () => {
        spans.forEach((span, i) => {
            const row = Math.floor(i / cols);
            span.style.top = `${window.innerHeight - row * spacingY}px`;
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
