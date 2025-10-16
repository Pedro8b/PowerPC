// Данные всех компьютеров
const computersData = {
    'green-monster': {
        title: 'Gamer Beast RTX 4080',
        subtitle: 'Легендарная мощь для настоящих геймеров',
        price: '245 000 ₽',
        oldPrice: '299 000 ₽',
        discount: '-18%',
        badge: 'ХИТ СЕЗОНА',
        mainImage: 'images/Green Monster.jpg',
        thumbnails: [
            'images/Green Monster.jpg',
            'images/pc-build-2.jpg',
            'images/pc-build-3.jpg',
            'images/pc-build-4.jpg'
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
        description: `
            <p>Gamer Beast RTX 4080 — это воплощение мечты каждого геймера. Эта система создана для тех, кто не ищет компромиссов и стремится к абсолютному превосходству в виртуальных мирах.</p>

            <h3>🎮 Игровая производительность</h3>
            <p>С видеокартой NVIDIA RTX 4080 вы сможете наслаждаться играми в 4K разрешении с максимальными настройками графики. Технологии DLSS 3 и Ray Tracing обеспечат невероятно реалистичное изображение и плавный геймплей даже в самых требовательных проектах.</p>

            <h3>⚡ Молниеносная скорость</h3>
            <p>Процессор Intel Core i9-13900K в сочетании с оперативной памятью DDR5 обеспечивает беспрецедентную производительность в играх и многозадачности. Система справится с любыми задачами — от стриминга до работы с профессиональными приложениями.</p>

            <h3>🎯 Ключевые преимущества</h3>
            <ul class="benefits-list">
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
        oldPrice: '147 000 ₽',
        discount: '-15%',
        badge: 'ВЫБОР ОФИСА',
        mainImage: 'images/Blue.webp',
        thumbnails: [
            'images/Blue.webp',
            'images/pc-build-2.jpg',
            'images/pc-build-3.jpg'
        ],
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
        description: `
            <p>Office Pro i7 — это надежный партнер для вашего бизнеса. Оптимальное сочетание производительности и энергоэффективности для комфортной работы с любыми офисными приложениями.</p>

            <h3>💼 Для бизнеса и работы</h3>
            <p>Идеально подходит для работы с документами, финансовыми отчетами, графиками и презентациями. Быстрая загрузка системы и мгновенный отклик приложений повышают продуктивность работы.</p>

            <h3>🔧 Надежность прежде всего</h3>
            <p>Все компоненты проходят тщательный отбор и тестирование на стабильность. Мы используем только проверенные решения от ведущих производителей.</p>

            <h3>🎯 Преимущества для офиса</h3>
            <ul class="benefits-list">
                <li>Энергоэффективная работа</li>
                <li>Тихая система охлаждения</li>
                <li>Компактный корпус</li>
                <li>Простота обслуживания</li>
                <li>Совместимость с офисным ПО</li>
            </ul>
        `
    },
    'stream-master': {
        title: 'Stream Master',
        subtitle: 'Для стримеров и создателей контента',
        price: '189 000 ₽',
        oldPrice: '252 000 ₽',
        discount: '-25%',
        badge: 'ДЛЯ ТВОРЧЕСТВА',
        mainImage: 'images/Red.webp',
        thumbnails: [
            'images/Red.webp',
            'images/pc-build-2.jpg',
            'images/pc-build-3.jpg'
        ],
        specs: [
            { name: 'Процессор:', value: 'AMD Ryzen 7 7700X' },
            { name: 'Видеокарта:', value: 'NVIDIA RTX 4070 12GB' },
            { name: 'Оперативная память:', value: '32GB DDR5' },
            { name: 'Накопитель:', value: '1TB NVMe SSD' },
            { name: 'Материнская плата:', value: 'ASUS TUF B650' },
            { name: 'Блок питания:', value: '750W 80+ Gold' },
            { name: 'Охлаждение:', value: 'Liquid Cooler 240mm' },
            { name: 'Корпус:', value: 'NZXT H510 Flow' }
        ],
        description: `
            <p>Stream Master создан для тех, кто творит и делится своим творчеством с миром. Идеальная платформа для стриминга, монтажа видео и работы с графикой.</p>

            <h3>🎥 Профессиональный стриминг</h3>
            <p>Потоковая передача в 4K без потери качества геймплея. Технология NVIDIA NVENC обеспечивает плавный стрим даже при высоких настройках графики в играх.</p>

            <h3>🎨 Для создателей контента</h3>
            <p>Быстрый рендеринг видео, работа с 3D-графикой и сложными проектами в Adobe Creative Suite. Эффективная многозадачность для одновременной работы в нескольких приложениях.</p>

            <h3>🌟 Ключевые особенности</h3>
            <ul class="benefits-list">
                <li>Плавный стриминг 4K 60FPS</li>
                <li>Быстрый рендеринг видео</li>
                <li>Поддержка VR-контента</li>
                <li>Стильный дизайн с RGB</li>
                <li>Оптимизация для OBS и XSplit</li>
            </ul>
        `
    },
    'budget-warrior': {
        title: 'Budget Warrior',
        subtitle: 'Отличное начало для игр',
        price: '89 000 ₽',
        oldPrice: null,
        discount: null,
        badge: 'БЮДЖЕТНЫЙ ВЫБОР',
        mainImage: 'images/Black.jpg',
        thumbnails: [
            'images/Black.jpg',
            'images/pc-build-2.jpg'
        ],
        specs: [
            { name: 'Процессор:', value: 'AMD Ryzen 5 5600X' },
            { name: 'Видеокарта:', value: 'NVIDIA RTX 4060 8GB' },
            { name: 'Оперативная память:', value: '16GB DDR4' },
            { name: 'Накопитель:', value: '512GB NVMe SSD' },
            { name: 'Материнская плата:', value: 'MSI B550M' },
            { name: 'Блок питания:', value: '550W 80+ Bronze' },
            { name: 'Охлаждение:', value: 'Stock Air Cooler' },
            { name: 'Корпус:', value: 'Deepcool Matrexx 30' }
        ],
        description: `
            <p>Budget Warrior — идеальный старт для погружения в мир игр. Высокая производительность по доступной цене без компромиссов в качестве сборки.</p>

            <h3>🎮 Отличная игровая производительность</h3>
            <p>Комфортный гейминг в Full HD разрешении с высокими настройками графики. Идеально подходит для популярных киберспортивных дисциплин и современных игр.</p>

            <h3>💰 Доступность и качество</h3>
            <p>Мы смогли сохранить высокое качество компонентов, предложив при этом одну из самых привлекательных цен на рынке. Отличное соотношение цены и производительности.</p>

            <h3>🚀 Преимущества для начинающих</h3>
            <ul class="benefits-list">
                <li>Доступная цена</li>
                <li>Отличная производительность в Full HD</li>
                <li>Простота апгрейда в будущем</li>
                <li>Надежные компоненты</li>
                <li>Поддержка современных технологий</li>
            </ul>
        `
    },
    'extreme-overlord': {
        title: 'Extreme Overlord',
        subtitle: 'Абсолютная мощь без компромиссов',
        price: '389 000 ₽',
        oldPrice: null,
        discount: null,
        badge: 'ЭКСТРИМ',
        mainImage: 'images/White.jpg',
        thumbnails: [
            'images/White.jpg',
            'images/pc-build-2.jpg',
            'images/pc-build-3.jpg',
            'images/pc-build-4.jpg'
        ],
        specs: [
            { name: 'Процессор:', value: 'Intel Core i9-14900K' },
            { name: 'Видеокарта:', value: 'NVIDIA RTX 4090 24GB' },
            { name: 'Оперативная память:', value: '64GB DDR5' },
            { name: 'Накопитель:', value: '4TB NVMe SSD' },
            { name: 'Материнская плата:', value: 'ASUS ROG Maximus Z790' },
            { name: 'Блок питания:', value: '1200W 80+ Platinum' },
            { name: 'Охлаждение:', value: 'Custom Water Loop' },
            { name: 'Корпус:', value: 'Lian Li O11 Dynamic XL' }
        ],
        description: `
            <p>Extreme Overlord — это вершина технологического совершенства. Для тех, кто не признает слово "невозможно" и стремится к абсолютному превосходству.</p>

            <h3>🚀 Неограниченная производительность</h3>
            <p>Мощность для решения любых задач: от научных вычислений и рендеринга 8K видео до гейминга в 8K разрешении с максимальными настройками.</p>

            <h3>🎯 Экстремальное охлаждение</h3>
            <p>Кастомная система жидкостного охлаждения обеспечивает стабильную работу даже при экстремальных нагрузках. Полный контроль над температурой каждого компонента.</p>

            <h3>💎 Премиум исполнение</h3>
            <ul class="benefits-list">
                <li>Лучшие компоненты на рынке</li>
                <li>Кастомная кабельная разводка</li>
                <li>Эксклюзивный дизайн</li>
                <li>Расширенная гарантия</li>
                <li>Персональная поддержка</li>
            </ul>
        `
    },
    'compact-pro': {
        title: 'Compact Pro',
        subtitle: 'Компактный размер, полная мощность',
        price: '112 000 ₽',
        oldPrice: null,
        discount: null,
        badge: 'КОМПАКТНЫЙ',
        mainImage: 'images/PCBack.jpg',
        thumbnails: [
            'images/PCBack.jpg',
            'images/pc-build-2.jpg'
        ],
        specs: [
            { name: 'Процессор:', value: 'Intel Core i5-13400' },
            { name: 'Видеокарта:', value: 'NVIDIA RTX 4060 8GB' },
            { name: 'Оперативная память:', value: '16GB DDR4' },
            { name: 'Накопитель:', value: '1TB NVMe SSD' },
            { name: 'Материнская плата:', value: 'ASRock B760M' },
            { name: 'Блок питания:', value: '500W 80+ Gold SFX' },
            { name: 'Охлаждение:', value: 'Low-Profile Air Cooler' },
            { name: 'Корпус:', value: 'Fractal Design Node 202' }
        ],
        description: `
            <p>Compact Pro доказывает, что большая мощность может умещаться в маленьком корпусе. Идеальное решение для ограниченного пространства без потери производительности.</p>

            <h3>🏠 Для любого пространства</h3>
            <p>Разместится на любом столе, в гостиной или офисе. Компактные размеры не означают компромиссы в производительности или качестве сборки.</p>

            <h3>⚡ Эффективное охлаждение</h3>
            <p>Специально разработанная система охлаждения обеспечивает оптимальные температуры даже в ограниченном пространстве корпуса.</p>

            <h3>🎯 Особенности компактной сборки</h3>
            <ul class="benefits-list">
                <li>Минималистичный дизайн</li>
                <li>Тихая работа</li>
                <li>Энергоэффективность</li>
                <li>Простота транспортировки</li>
                <li>Совместимость с TV и мониторами</li>
            </ul>
        `
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
    
    if (!model || !computersData[model]) {
        // Если модель не найдена, перенаправляем на каталог
        window.location.href = 'catalog.html';
        return;
    }
    
    const computer = computersData[model];
    
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
        discountElem.style.display = 'block';
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
            // Обновляем главное изображение
            document.getElementById('mainImage').src = this.src;
            document.getElementById('mainImage').alt = this.alt;
            
            // Убираем активный класс у всех миниатюр
            document.querySelectorAll('.thumbnail').forEach(t => t.classList.remove('active'));
            // Добавляем активный класс текущей миниатюре
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

// Инициализация при загрузке страницы
document.addEventListener('DOMContentLoaded', function() {
    loadComputerData();
});