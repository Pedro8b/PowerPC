// Переключение между формами входа и регистрации
document.addEventListener('DOMContentLoaded', function() {
    const switchLinks = document.querySelectorAll('.switch-link');
    const authForms = document.querySelectorAll('.auth-form');
    
    switchLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetForm = this.getAttribute('data-target');
            
            // Скрываем все формы
            authForms.forEach(form => form.classList.remove('active'));
            
            // Показываем целевую форму
            const activeForm = document.getElementById(targetForm);
            if (activeForm) {
                activeForm.classList.add('active');
            }
        });
    });
});