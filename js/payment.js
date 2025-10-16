// Валидация номера карты (алгоритм Луна)
function validateCardNumber(cardNumber) {
    cardNumber = cardNumber.replace(/\s/g, '');
    
    if (!/^\d{16}$/.test(cardNumber)) {
        return false;
    }
    
    let sum = 0;
    let isEven = false;
    
    for (let i = cardNumber.length - 1; i >= 0; i--) {
        let digit = parseInt(cardNumber[i]);
        
        if (isEven) {
            digit *= 2;
            if (digit > 9) {
                digit -= 9;
            }
        }
        
        sum += digit;
        isEven = !isEven;
    }
    
    return (sum % 10) === 0;
}

// Определение типа карты
function getCardType(cardNumber) {
    const firstDigit = cardNumber[0];
    
    if (firstDigit === '4') return 'Visa';
    if (firstDigit === '5') return 'MasterCard';
    if (firstDigit === '2') return 'Mir';
    
    return 'Unknown';
}

// Форматирование номера карты
function formatCardNumber(value) {
    const v = value.replace(/\s+/g, '').replace(/[^0-9]/gi, '');
    const matches = v.match(/\d{4,16}/g);
    const match = (matches && matches[0]) || '';
    const parts = [];

    for (let i = 0, len = match.length; i < len; i += 4) {
        parts.push(match.substring(i, i + 4));
    }

    if (parts.length) {
        return parts.join(' ');
    } else {
        return value;
    }
}

// Обработка формы оплаты
document.getElementById('paymentForm')?.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const cardNumber = document.getElementById('cardNumber').value;
    const cardHolder = document.getElementById('cardHolder').value;
    const expiryDate = document.getElementById('expiryDate').value;
    const cvv = document.getElementById('cvv').value;
    
    // Валидация
    if (!validateCardNumber(cardNumber)) {
        showError('Неверный номер карты');
        return;
    }
    
    if (!cardHolder.trim()) {
        showError('Укажите имя владельца карты');
        return;
    }
    
    if (!/^\d{2}\/\d{2}$/.test(expiryDate)) {
        showError('Неверный формат даты (ММ/ГГ)');
        return;
    }
    
    if (!/^\d{3}$/.test(cvv)) {
        showError('CVV должен состоять из 3 цифр');
        return;
    }
    
    // Имитация обработки платежа
    showLoadingOverlay();
    
    setTimeout(() => {
        hideLoadingOverlay();
        showSuccessMessage('Оплата прошла успешно!');
        
        // Сохранение заказа
        saveOrder({
            cardType: getCardType(cardNumber),
            amount: document.getElementById('totalAmount').textContent,
            date: new Date().toISOString()
        });
        
        // Перенаправление на страницу успеха
        setTimeout(() => {
            window.location.href = 'order-success.html';
        }, 2000);
    }, 2000);
});

// Автоформатирование ввода номера карты
document.getElementById('cardNumber')?.addEventListener('input', function(e) {
    e.target.value = formatCardNumber(e.target.value);
});

// Вспомогательные функции
function showError(message) {
    const errorDiv = document.getElementById('paymentError');
    errorDiv.textContent = message;
    errorDiv.style.display = 'block';
    
    setTimeout(() => {
        errorDiv.style.display = 'none';
    }, 3000);
}

function showSuccessMessage(message) {
    const successDiv = document.getElementById('paymentSuccess');
    successDiv.textContent = message;
    successDiv.style.display = 'block';
}

function showLoadingOverlay() {
    document.getElementById('loadingOverlay').style.display = 'flex';
}

function hideLoadingOverlay() {
    document.getElementById('loadingOverlay').style.display = 'none';
}

function saveOrder(orderData) {
    const orders = JSON.parse(localStorage.getItem('orders') || '[]');
    orders.push(orderData);
    localStorage.setItem('orders', JSON.stringify(orders));
}