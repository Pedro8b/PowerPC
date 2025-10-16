/* 
 * ===== ИНТЕГРАЦИЯ СДЭК API =====
 * 
 * КАК ПОЛУЧИТЬ КЛЮЧИ:
 * 1. Зарегистрируйтесь на https://www.cdek.ru/ru/integration
 * 2. Получите тестовые ключи в личном кабинете
 * 3. Вставьте их в переменные ниже
 */

// ========================================
// ВСТАВЬТЕ СЮДА ВАШИ КЛЮЧИ ОТ СДЭК
// ========================================
const CDEK_ACCOUNT = 'wqGwiQx0gg8mLtiEKsUinjVSICCjtTEP';  // ← ЗАМЕНИТЕ
const CDEK_PASSWORD = 'RmAmgvSgSl1yirlz9QupbzOJVqhCxcP5';  // ← ЗАМЕНИТЕ

// Тестовые ключи СДЭК (для демонстрации):
// Account: z9GRRu7FxmO53CQ9cFfI6qiy32wpfTkd
// Password: w24JTCv4MnAcuRTx0oHjHLDtyt3I6IBq
// ========================================

// Получение OAuth токена для СДЭК API
async function getCdekToken() {
    try {
        const response = await fetch('https://api.cdek.ru/v2/oauth/token', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: `grant_type=client_credentials&client_id=${CDEK_ACCOUNT}&client_secret=${CDEK_PASSWORD}`
        });
        
        const data = await response.json();
        return data.access_token;
    } catch (error) {
        console.error('Ошибка получения токена СДЭК:', error);
        return null;
    }
}

// Функция расчета доставки СДЭК
async function calculateDelivery(cityCode, weight = 5000) {
    // Проверка на наличие ключей
    if (CDEK_ACCOUNT === 'ВАШ_ACCOUNT_ЗДЕСЬ' || CDEK_PASSWORD === 'ВАШ_SECURE_PASSWORD_ЗДЕСЬ') {
        // Если ключи не указаны, показываем имитацию
        console.warn('⚠️ Ключи СДЭК не настроены. Показываем тестовые данные.');
        return simulateDelivery(cityCode);
    }
    
    try {
        const token = await getCdekToken();
        if (!token) {
            return simulateDelivery(cityCode);
        }
        
        const url = 'https://api.cdek.ru/v2/calculator/tariff';
        
        const data = {
            type: 1, // интернет-магазин
            currency: 1, // рубли
            tariff_code: 136, // посылка дверь-дверь
            from_location: {
                code: 44 // Москва
            },
            to_location: {
                code: parseInt(cityCode)
            },
            packages: [
                {
                    weight: weight, // вес в граммах
                    length: 50,
                    width: 40,
                    height: 60
                }
            ]
        };

        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify(data)
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const result = await response.json();
        return result;
        
    } catch (error) {
        console.error('Ошибка расчета доставки:', error);
        // В случае ошибки показываем имитацию
        return simulateDelivery(cityCode);
    }
}

// Имитация расчета доставки (для тестирования без API)
function simulateDelivery(cityCode) {
    console.log('📦 Использую имитацию доставки для города:', cityCode);
    
    const deliveryData = {
        '44': { cost: 0, days: '1-2' },      // Москва
        '137': { cost: 500, days: '2-3' },   // Санкт-Петербург
        '270': { cost: 1200, days: '5-7' },  // Новосибирск
        '250': { cost: 900, days: '4-6' },   // Екатеринбург
        '151': { cost: 800, days: '3-5' },   // Казань
        '344': { cost: 850, days: '3-5' },   // Самара
        '438': { cost: 1000, days: '4-6' }   // Краснодар
    };
    
    const delivery = deliveryData[cityCode] || { cost: 1000, days: '5-7' };
    
    return {
        delivery_sum: delivery.cost,
        period_min: parseInt(delivery.days.split('-')[0]),
        period_max: parseInt(delivery.days.split('-')[1])
    };
}

// Обработчик кнопки расчета доставки
document.addEventListener('DOMContentLoaded', function() {
    const calculateBtn = document.getElementById('calculateDeliveryBtn');
    
    if (calculateBtn) {
        calculateBtn.addEventListener('click', async function() {
            const citySelect = document.getElementById('citySelect');
            const cityCode = citySelect.value;
            
            if (!cityCode) {
                alert('Пожалуйста, выберите город');
                return;
            }
            
            // Показываем загрузку
            calculateBtn.disabled = true;
            calculateBtn.textContent = 'Рассчитываем...';
            
            // Рассчитываем доставку
            const result = await calculateDelivery(cityCode, 5000); // 5 кг
            
            // Восстанавливаем кнопку
            calculateBtn.disabled = false;
            calculateBtn.textContent = 'Рассчитать доставку';
            
            // Показываем результат
            if (result && result.delivery_sum !== undefined) {
                const costElement = document.getElementById('deliveryCost');
                const daysElement = document.getElementById('deliveryDays');
                
                if (result.delivery_sum === 0) {
                    costElement.textContent = 'Бесплатно';
                } else {
                    costElement.textContent = `${result.delivery_sum} ₽`;
                }
                
                if (result.period_min && result.period_max) {
                    daysElement.textContent = `${result.period_min}-${result.period_max} дней`;
                } else {
                    daysElement.textContent = '3-7 дней';
                }
                
                // Показываем результаты
                const resultDiv = document.getElementById('deliveryResult');
                if (resultDiv) {
                    resultDiv.style.display = 'block';
                }
            } else {
                alert('Не удалось рассчитать доставку. Попробуйте позже.');
            }
        });
    }
});

// Экспорт функций для использования в других файлах
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { calculateDelivery, simulateDelivery };
}