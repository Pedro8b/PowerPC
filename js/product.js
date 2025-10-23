// Данные всех компьютеров
const computersData = {
    'green-monster': {
        title: 'Gamer Beast RTX 4080',
        subtitle: 'Легендарная мощь для настоящих геймеров',
        price: '245 000 ₽',
        priceNumber: 245000,
        oldPrice: '299 000 ₽',
        discount: '-18%',
        badge: 'ХИТ СЕЗОНА',
        mainImage: 'images/Green Monster.jpg',
        thumbnails: [
            'images/Green Monster.jpg',
            'images/Green Monster.jpg',
            'images/Green Monster.jpg',
            'images/Green Monster.jpg'
        ],
        specs: [
            { name: 'Процессор:', value: 'Intel Core i9-13900K' },
            { name: 'Видеокарта:', value: 'NVIDIA GeForce RTX 4080 16GB' },
            { name: 'Оперативная память:', value: '32GB DDR5 5600MHz' },
            { name: 'Накопитель:', value: '2TB NVMe M.2 SSD' },
            { name: 'Материнская плата:', value: 'ASUS ROG Z790' },
            { name: 'Блок питания:', value: '1000W 80+ Gold' },
            { name: 'Охлаждение:', value: 'Liquid Cooler 360mm' },
            { name: 'Корпус:', value: 'Lian Li O11 Dynamic' }
        ],
        shortSpecs: 'Intel i9 • RTX 4080 • 32GB RAM',
        description: `
            <p>Gamer Beast RTX 4080 — это воплощение мечты каждого геймера. Эта система создана для тех, кто не ищет компромиссов и стремится к абсолютному превосходству в виртуальных мирах.</p>

            <h3>🎮 Игровая производительность</h3>
            <p>С видеокартой NVIDIA RTX 4080 вы сможете наслаждаться играми в 4K разрешении с максимальными настройками графики. Технологии DLSS 3 и Ray Tracing обеспечат невероятно реалистичное изображение и плавный геймплей даже в самых требовательных проектах.</p>

            <h3>⚡ Молниеносная скорость</h3>
            <p>Процессор Intel Core i9-13900K в сочетании с оперативной памятью DDR5 обеспечивает беспрецедентную производительность в играх и многозадачности. Система справится с любыми задачами — от стриминга до работы с профессиональными приложениями.</p>

            <h3>🎯 Ключевые преимущества</h3>
            <ul>
                <li>Стабильный FPS в 4K играх</li>
                <li>Тихая работа даже под нагрузкой</li>
                <li>Премиальная система охлаждения</li>
                <li>Кастомная кабельная разводка</li>
                <li>RGB подсветка с управлением</li>
            </ul>
        `
    },
    'pro': {
        title: 'Office Pro i7',
        subtitle: 'Идеальное решение для бизнеса и работы',
        price: '125 000 ₽',
        priceNumber: 125000,
        oldPrice: '147 000 ₽',
        discount: '-15%',
        badge: 'ВЫБОР ОФИСА',
        mainImage: 'images/Blue.webp',
        thumbnails: ['images/Blue.webp', 'images/Blue.webp', 'images/Blue.webp'],
        specs: [
            { name: 'Процессор:', value: 'Intel Core i7-13700' },
            { name: 'Видеокарта:', value: 'NVIDIA RTX 4060 8GB' },
            { name: 'Оперативная память:', value: '16GB DDR4' },
            { name: 'Накопитель:', value: '1TB NVMe SSD' },
            { name: 'Материнская плата:', value: 'ASUS Prime B760' },
            { name: 'Блок питания:', value: '650W 80+ Bronze' },
            { name: 'Охлаждение:', value: 'Air Cooler' },
            { name: 'Корпус:', value: 'Fractal Design Focus G' }
        ],
        shortSpecs: 'Intel i7 • RTX 4060 • 16GB RAM',
        description: `
            <p>Office Pro i7 — это надежный партнер для вашего бизнеса. Оптимальное сочетание производительности и энергоэффективности для комфортной работы с любыми офисными приложениями.</p>
            <h3>💼 Для бизнеса и работы</h3>
            <p>Идеально подходит для работы с документами, финансовыми отчетами, графиками и презентациями. Быстрая загрузка системы и мгновенный отклик приложений повышают продуктивность работы.</p>
        `
    },
    'stream-master': {
        title: 'Stream Master',
        subtitle: 'Для стримеров и создателей контента',
        price: '189 000 ₽',
        priceNumber: 189000,
        oldPrice: '252 000 ₽',
        discount: '-25%',
        badge: 'ДЛЯ ТВОРЧЕСТВА',
        mainImage: 'images/Red.webp',
        thumbnails: ['images/Red.webp', 'images/Red.webp', 'images/Red.webp'],
        specs: [
            { name: 'Процессор:', value: 'AMD Ryzen 7 7700X' },
            { name: 'Видеокарта:', value: 'NVIDIA RTX 4070 12GB' },
            { name: 'Оперативная память:', value: '32GB DDR5' },
            { name: 'Накопитель:', value: '1TB NVMe SSD' }
        ],
        shortSpecs: 'AMD Ryzen 7 • RTX 4070 • 32GB RAM',
        description: `<p>Stream Master создан для тех, кто творит и делится своим творчеством с миром.</p>`
    },
    'budget-warrior': {
        title: 'Budget Warrior',
        subtitle: 'Отличное начало для игр',
        price: '89 000 ₽',
        priceNumber: 89000,
        oldPrice: null,
        discount: null,
        badge: 'БЮДЖЕТНЫЙ ВЫБОР',
        mainImage: 'images/Black.jpg',
        thumbnails: ['images/Black.jpg', 'images/Black.jpg'],
        specs: [
            { name: 'Процессор:', value: 'AMD Ryzen 5 5600X' },
            { name: 'Видеокарта:', value: 'NVIDIA RTX 4060 8GB' }
        ],
        shortSpecs: 'AMD Ryzen 5 • RTX 4060 • 16GB RAM',
        description: `<p>Budget Warrior — идеальный старт для погружения в мир игр.</p>`
    },
    'extreme-overlord': {
        title: 'Extreme Overlord',
        subtitle: 'Абсолютная мощь без компромиссов',
        price: '389 000 ₽',
        priceNumber: 389000,
        oldPrice: null,
        discount: null,
        badge: 'ЭКСТРИМ',
        mainImage: 'images/White.jpg',
        thumbnails: ['images/White.jpg', 'images/White.jpg'],
        specs: [
            { name: 'Процессор:', value: 'Intel Core i9-14900K' },
            { name: 'Видеокарта:', value: 'NVIDIA RTX 4090 24GB' }
        ],
        shortSpecs: 'Intel i9 • RTX 4090 • 64GB RAM',
        description: `<p>Extreme Overlord — это вершина технологического совершенства.</p>`
    },
    'compact-pro': {
        title: 'Compact Pro',
        subtitle: 'Компактный размер, полная мощность',
        price: '112 000 ₽',
        priceNumber: 112000,
        oldPrice: null,
        discount: null,
        badge: 'КОМПАКТНЫЙ',
        mainImage: 'images/PCBack.jpg',
        thumbnails: ['images/PCBack.jpg', 'images/PCBack.jpg'],
        specs: [
            { name: 'Процессор:', value: 'Intel Core i5-13400' },
            { name: 'Видеокарта:', value: 'NVIDIA RTX 4060 8GB' }
        ],
        shortSpecs: 'Intel i5 • RTX 4060 • 16GB RAM',
        description: `<p>Compact Pro доказывает, что большая мощность может умещаться в маленьком корпусе.</p>`
    }
};

// Функция для получения параметра из URL
function getUrlParameter(name) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(name);
}

// Функция для загрузки данных компьютера
function loadComputerData() {
    const model = getUrlParameter('model');
    
    // Если модель не указана, загружаем green-monster по умолчанию
    const computerKey = model && computersData[model] ? model : 'green-monster';
    const computer = computersData[computerKey];
    
    // Сохраняем текущий товар в localStorage для checkout
    localStorage.setItem('currentProduct', JSON.stringify({
        model: computerKey,
        title: computer.title,
        price: computer.price,
        priceNumber: computer.priceNumber,
        image: computer.mainImage,
        specs: computer.shortSpecs
    }));
    
    // Заполняем основную информацию
    document.getElementById('productTitle').textContent = computer.title;
    document.getElementById('productSubtitle').textContent = computer.subtitle;
    document.getElementById('productPrice').textContent = computer.price;
    document.getElementById('productBadge').textContent = computer.badge;
    
    // Обрабатываем старую цену и скидку
    const oldPriceElem = document.getElementById('productOldPrice');
    const discountElem = document.getElementById('productDiscount');
    
    if (computer.oldPrice && computer.discount) {
        oldPriceElem.textContent = computer.oldPrice;
        discountElem.textContent = computer.discount;
        oldPriceElem.style.display = 'block';
        discountElem.style.display = 'inline-block';
    } else {
        oldPriceElem.style.display = 'none';
        discountElem.style.display = 'none';
    }
    
    // Устанавливаем главное изображение
    const mainImage = document.getElementById('mainImage');
    mainImage.src = computer.mainImage;
    mainImage.alt = computer.title;
    
    // Обновляем галерею миниатюр
    updateThumbnails(computer.thumbnails, computer.title);
    
    // Заполняем характеристики
    updateSpecifications(computer.specs);
    
    // Заполняем описание
    document.getElementById('productDescription').innerHTML = computer.description;
    
    // Обновляем title страницы
    document.title = `${computer.title} - Power PC`;
}

// Функция для обновления миниатюр
function updateThumbnails(thumbnails, title) {
    const thumbnailsContainer = document.querySelector('.image-thumbnails');
    thumbnailsContainer.innerHTML = '';
    
    thumbnails.forEach((thumb, index) => {
        const img = document.createElement('img');
        img.src = thumb;
        img.alt = `${title} - вид ${index + 1}`;
        img.className = 'thumbnail';
        if (index === 0) img.classList.add('active');
        
        img.addEventListener('click', function() {
            document.getElementById('mainImage').src = this.src;
            document.getElementById('mainImage').alt = this.alt;
            
            document.querySelectorAll('.thumbnail').forEach(t => t.classList.remove('active'));
            this.classList.add('active');
        });
        
        thumbnailsContainer.appendChild(img);
    });
}

// Функция для обновления характеристик
function updateSpecifications(specs) {
    const specsGrid = document.getElementById('specsGrid');
    specsGrid.innerHTML = '';
    
    specs.forEach(spec => {
        const specItem = document.createElement('div');
        specItem.className = 'spec-item';
        
        specItem.innerHTML = `
            <span class="spec-name">${spec.name}</span>
            <span class="spec-value">${spec.value}</span>
        `;
        
        specsGrid.appendChild(specItem);
    });
}

// Обработчик кнопки "В избранное"
document.addEventListener('DOMContentLoaded', function() {
    loadComputerData();
    
    // Добавление в избранное
    const favBtn = document.getElementById('addToFavoritesBtn');
    if (favBtn) {
        favBtn.addEventListener('click', function() {
            const product = JSON.parse(localStorage.getItem('currentProduct'));
            let favorites = JSON.parse(localStorage.getItem('favorites') || '[]');
            
            // Проверяем, нет ли уже в избранном
            const exists = favorites.some(item => item.model === product.model);
            
            if (!exists) {
                favorites.push(product);
                localStorage.setItem('favorites', JSON.stringify(favorites));
                alert('✅ Товар добавлен в избранное!');
                this.textContent = '💖 В избранном';
                this.disabled = true;
            } else {
                alert('ℹ️ Товар уже в избранном');
            }
        });
    }
});