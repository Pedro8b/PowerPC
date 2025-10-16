// Переключение между вкладками в личном кабинете
document.addEventListener("DOMContentLoaded", function () {
const menuItems = document.querySelectorAll(".menu-item");
const tabContents = document.querySelectorAll(".tab-content");

menuItems.forEach((item) => {
    item.addEventListener("click", function (e) {
    e.preventDefault();

    // Убираем активный класс у всех пунктов меню
    menuItems.forEach((i) => i.classList.remove("active"));
    // Добавляем активный класс текущему пункту
    this.classList.add("active");

    // Скрываем все вкладки
    tabContents.forEach((tab) => tab.classList.remove("active"));

    // Показываем выбранную вкладку
    const targetTab = this.getAttribute("data-tab");
    const activeTab = document.getElementById(targetTab);
    if (activeTab) {
    activeTab.classList.add("active");
    }
});
});
});
