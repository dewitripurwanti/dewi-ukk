<script scr="script.js"></script>
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e,preventDefault();

        decoment.querySelector(thiss.get.Attribute('href')).scrollintoView({
          behavior: 'smooth'
        });
    });
});
