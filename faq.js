document.addEventListener("DOMContentLoaded", function () {
    var faqItems = document.querySelectorAll('.faq-item');

    faqItems.forEach(function (item) {
        item.addEventListener('click', function () {
            var answer = this.querySelector('p');
            answer.style.display = answer.style.display === 'block' ? 'none' : 'block';
        });
    });
});
