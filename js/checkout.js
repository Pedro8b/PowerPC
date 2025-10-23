// Загрузка данных товара из localStorage
document.addEventListener('DOMContentLoaded', function() {
    loadProductData();
});

function loadProductData() {
    // Получаем данные товара из localStorage
    const productData = localStorage.getItem('currentProduct');
    
    if (!productData) {
        // Если данных нет, показываем дефолтный товар
        console.warn('⚠️ Данные товара не найдены, используем дефолтные');
        return;
    }
    
    try {
        const product = JSON.parse(productData);
        
        // Обновляем информацию о товаре
        updateProductInfo(product);
        
        // Обновляем цену для оплаты
        updatePaymentAmount(product);
        
    } catch (error) {
        console.error('Ошибка загрузки данных товара:', error);
    }
}

function updateProductInfo(product) {
    // Обновляем изображение
    const productImage = document.querySelector('.product-thumb');
    if (productImage) {
        productImage.src = product.image;
        productImage.alt = product.title;
    }
    
    // Обновляем название
    const productTitle = document.querySelector('.product-details h3');
    if (productTitle) {
        productTitle.textContent = product.title;
    }
    
    // Обновляем характеристики
    const productSpecs = document.querySelector('.product-specs');
    if (productSpecs) {
        productSpecs.textContent = product.specs;
    }
    
    // Обновляем цену в карточке товара
    const productPrice = document.querySelector('.product-price');
    if (productPrice) {
        productPrice.textContent = product.price;
    }
}

function updatePaymentAmount(product) {
    // Обновляем итоговую сумму
    const totalAmount = document.getElementById('totalAmount');
    if (totalAmount) {
        totalAmount.textContent = product.price;
    }
    
    // Обновляем кнопку оплаты
    const paymentButton = document.querySelector('#paymentForm button[type="submit"]');
    if (paymentButton) {
        paymentButton.innerHTML = `🔒 Оплатить ${product.price}`;
    }
}