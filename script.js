// ===== CATEGORY FILTER =====

// 获取所有分类按钮与卡片
const filterButtons = document.querySelectorAll(".filter-btn");
const cards = document.querySelectorAll(".card");

// 给按钮添加点击事件
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
                // 显示卡片（带淡入动画）
                card.style.display = "inline-block";
                card.style.opacity = "0";
                setTimeout(() => {
                    card.style.opacity = "1";
                }, 50);
            } else {
                // 隐藏卡片
                card.style.display = "none";
            }
        });
    });
});
