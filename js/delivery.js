// Функция расчета доставки СДЭК
async function calculateDelivery(cityCode, weight) {
    const url = 'https://api.cdek.ru/v2/calculator/tariff';
    
    const data = {
        type: 1, // тип заказа (интернет-магазин)
        currency: 1, // рубли
        tariff_code: 136, // код тарифа (посылка дверь-дверь)
        from_location: {
            code: 44 // Москва (ваш город отправки)
        },
        to_location: {
            code: cityCode // город получателя
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

    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });

        const result = await response.json();
        return result;
    } catch (error) {
        console.error('Ошибка расчета доставки:', error);
        return null;
    }
}

// Использование
document.getElementById('calculateDeliveryBtn').addEventListener('click', async () => {
    const cityCode = document.getElementById('citySelect').value;
    const result = await calculateDelivery(cityCode, 5000); // 5 кг
    
    if (result && result.delivery_sum) {
        document.getElementById('deliveryCost').textContent = 
            `Стоимость доставки: ${result.delivery_sum} ₽`;
        document.getElementById('deliveryDays').textContent = 
            `Срок доставки: ${result.period_min}-${result.period_max} дней`;
    }
});