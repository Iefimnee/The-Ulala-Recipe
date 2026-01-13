/* ==============================================
   Recipe of Ulala - Main JavaScript
   所有交互逻辑
   ============================================== */

// ======================
// 1. Mobile Menu Toggle (移动端菜单)
// ======================
document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.getElementById('menuToggle');
    const mainNav = document.getElementById('mainNav');
    
    if (menuToggle && mainNav) {
        menuToggle.addEventListener('click', function() {
            this.classList.toggle('active');
            mainNav.classList.toggle('active');
        });
        
        // Close menu when clicking nav links
        const navLinks = mainNav.querySelectorAll('.nav-link');
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                menuToggle.classList.remove('active');
                mainNav.classList.remove('active');
            });
        });
        
        // Close menu when clicking outside
        document.addEventListener('click', function(event) {
            if (!menuToggle.contains(event.target) && !mainNav.contains(event.target)) {
                menuToggle.classList.remove('active');
                mainNav.classList.remove('active');
            }
        });
    }
});

// ======================
// 2. Smooth Scroll (平滑滚动)
// ======================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        if (href !== '#' && href !== '') {
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        }
    });
});

// ======================
// 3. Lazy Loading Images (图片懒加载)
// ======================
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src || img.src;
                img.classList.add('loaded');
                observer.unobserve(img);
            }
        });
    });
    
    const images = document.querySelectorAll('img[loading="lazy"]');
    images.forEach(img => imageObserver.observe(img));
}

// ======================
// 4. Toggle Ingredient Detail (成分展开/收起)
// ======================
function toggleIngredient(ingredientId) {
    const detail = document.getElementById('detail-' + ingredientId);
    const icon = document.getElementById('icon-' + ingredientId);
    const item = detail ? detail.closest('.ingredient-item') : null;
    
    if (!detail) {
        console.error('Ingredient detail not found:', ingredientId);
        return;
    }
    
    // Toggle display
    if (detail.style.display === 'none' || detail.style.display === '') {
        detail.style.display = 'block';
        if (icon) icon.textContent = '▲';
        if (item) item.classList.add('active');
        
        // Track event (if Google Analytics is loaded)
        if (typeof gtag !== 'undefined') {
            gtag('event', 'ingredient_click', {
                'ingredient_name': ingredientId
            });
        }
    } else {
        detail.style.display = 'none';
        if (icon) icon.textContent = '▼';
        if (item) item.classList.remove('active');
    }
}

// ======================
// 5. Suitability Check (适合性自测)
// ======================
function checkSuitability() {
    const checkboxes = document.querySelectorAll('#suitabilityCheckboxes input[type="checkbox"]');
    const resultDiv = document.getElementById('checkResult');
    
    if (!checkboxes.length || !resultDiv) {
        console.error('Suitability check elements not found');
        return;
    }
    
    // Count checked items
    const totalItems = checkboxes.length;
    const checkedItems = Array.from(checkboxes).filter(cb => cb.checked).length;
    
    // Calculate match percentage
    const matchPercentage = Math.round((checkedItems / totalItems) * 100);
    
    // Show result
    resultDiv.style.display = 'block';
    
    // Determine result type and message
    let resultClass = '';
    let resultMessage = '';
    
    if (checkedItems === totalItems) {
        // Perfect match
        resultClass = 'match';
        resultMessage = `
            <div style="font-size: 24px; margin-bottom: 12px;">✅</div>
            <div style="font-size: 18px; margin-bottom: 8px;">
                <strong>${totalItems}/${totalItems}項目が一致！</strong>
            </div>
            <div style="font-size: 14px;">
                このフードはうちの子に適しています。
            </div>
        `;
    } else if (checkedItems >= totalItems * 0.5) {
        // Partial match
        resultClass = 'partial';
        resultMessage = `
            <div style="font-size: 24px; margin-bottom: 12px;">⚠️</div>
            <div style="font-size: 18px; margin-bottom: 8px;">
                <strong>${checkedItems}/${totalItems}項目が一致</strong>
            </div>
            <div style="font-size: 14px;">
                一部の項目が合わない可能性があります。<br>
                詳しい成分表をご確認ください。
            </div>
        `;
    } else {
        // Poor match
        resultClass = 'no-match';
        resultMessage = `
            <div style="font-size: 24px; margin-bottom: 12px;">❌</div>
            <div style="font-size: 18px; margin-bottom: 8px;">
                <strong>${checkedItems}/${totalItems}項目のみ一致</strong>
            </div>
            <div style="font-size: 14px;">
                このフードは適していない可能性があります。<br>
                他の商品も検討してみてください。
            </div>
        `;
    }
    
    // Update result display
    resultDiv.className = 'check-result ' + resultClass;
    resultDiv.innerHTML = resultMessage;
    
    // Scroll to result
    resultDiv.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    
    // Track event
    if (typeof gtag !== 'undefined') {
        gtag('event', 'suitability_check', {
            'match_percentage': matchPercentage,
            'result_type': resultClass
        });
    }
}

// ======================
// 6. Toggle FAQ (FAQ折叠)
// ======================
function toggleFAQ(faqId) {
    const answer = document.getElementById('faq-answer-' + faqId);
    const icon = document.getElementById('faq-icon-' + faqId);
    const item = answer ? answer.closest('.faq-item') : null;
    
    if (!answer) {
        console.error('FAQ answer not found:', faqId);
        return;
    }
    
    // Toggle display
    if (answer.style.display === 'none' || answer.style.display === '') {
        answer.style.display = 'block';
        if (icon) icon.textContent = '▲';
        if (item) item.classList.add('active');
    } else {
        answer.style.display = 'none';
        if (icon) icon.textContent = '▼';
        if (item) item.classList.remove('active');
    }
}

// ======================
// 7. Show Related Products (显示相关产品)
// ======================
function showRelatedProducts(ingredientName) {
    // This function can be expanded later to dynamically load related products
    // For MVP, related products are static in HTML
    console.log('Showing related products for:', ingredientName);
}

// ======================
// 8. Calculate Similarity Score (计算相似度)
// ======================
function calculateSimilarity(product1, product2) {
    // Simple similarity calculation based on common attributes
    let score = 0;
    let totalChecks = 0;
    
    // Check brand
    totalChecks++;
    if (product1.brand === product2.brand) score += 20;
    
    // Check size suitability
    totalChecks++;
    const commonSizes = product1.sizes.filter(size => product2.sizes.includes(size));
    if (commonSizes.length > 0) score += 20;
    
    // Check age suitability
    totalChecks++;
    const commonAges = product1.ages.filter(age => product2.ages.includes(age));
    if (commonAges.length > 0) score += 20;
    
    // Check price range (within 30%)
    totalChecks++;
    const priceDiff = Math.abs(product1.price - product2.price) / Math.max(product1.price, product2.price);
    if (priceDiff < 0.3) score += 20;
    
    // Check common ingredients
    totalChecks++;
    const commonIngredients = product1.mainIngredients.filter(ing => 
        product2.mainIngredients.includes(ing)
    );
    if (commonIngredients.length > 0) score += 20;
    
    return Math.min(score, 100);
}

// ======================
// 9. Form Validation Helper (表单验证)
// ======================
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

// ======================
// 10. Scroll Progress Indicator (滚动进度)
// ======================
window.addEventListener('scroll', function() {
    const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (winScroll / height) * 100;
    
    // You can add a progress bar element if needed
    // For MVP, this is optional
});

// ======================
// 11. Back to Top Button (返回顶部)
// ======================
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// Show/hide back to top button based on scroll position
window.addEventListener('scroll', function() {
    const backToTopBtn = document.getElementById('backToTop');
    if (backToTopBtn) {
        if (window.scrollY > 300) {
            backToTopBtn.style.display = 'block';
        } else {
            backToTopBtn.style.display = 'none';
        }
    }
});

// ======================
// 12. Initialize on Page Load (页面加载初始化)
// ======================
window.addEventListener('DOMContentLoaded', function() {
    console.log('Recipe of Ulala - JavaScript loaded successfully');
    
    // Add any initialization code here
    // For example, set up event listeners, load data, etc.
});

// ======================
// 13. Error Handling (错误处理)
// ======================
window.addEventListener('error', function(e) {
    console.error('JavaScript error:', e.message);
    // In production, you might want to send this to an error tracking service
});

// ======================
// Export functions for use in HTML onclick handlers
// ======================
window.toggleIngredient = toggleIngredient;
window.checkSuitability = checkSuitability;
window.toggleFAQ = toggleFAQ;
window.showRelatedProducts = showRelatedProducts;
window.scrollToTop = scrollToTop;
