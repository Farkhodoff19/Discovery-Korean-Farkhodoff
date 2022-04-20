(function() {
    window.addEventListener('load', function() {
        like();
        submit();
        scrollNavigation();
    });

    window.addEventListener('scroll', function() {
        scrollFunction()
        changeNavigationColor()
    });

    function scrollFunction() {
        const navBrand = document.querySelector("nav .navbar-brand");
        const logo = document.querySelector("nav .logo");

        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            navBrand.style.fontSize = ".8rem";
            logo.style.width = "0";
        } else {
            navBrand.style.fontSize = "1.5rem";
            logo.style.width = "2rem";
        }
    }

    function changeNavigationColor() {
        const navbar = document.querySelector("nav .navbar");
        const navBrand = document.querySelector("nav .navbar-brand");
        const navLinks = document.querySelectorAll("nav .nav-link");
        const foodSection = document.getElementById('food-drinks');

        const difference = foodSection.offsetHeight+ foodSection.offsetTop;

        if (window.pageYOffset + 48 > foodSection.offsetTop && window.pageYOffset < difference) {
            navbar.classList.remove('bg-dark');
            navbar.classList.remove('navbar-dark');
            navbar.classList.add('bg-light');
            navbar.classList.add('navbar-light');
            navBrand.classList.remove('text-white');
            navBrand.classList.add('text-dark');
            navBrand.querySelector('span').classList.remove('bg-light');
            navBrand.querySelector('span').classList.remove('text-dark');
            navBrand.querySelector('span').classList.add('bg-dark');
            navBrand.querySelector('span').classList.add('text-light');
            navLinks.forEach(element => element.classList.remove('text-white'));
            navLinks.forEach(element => element.classList.add('text-dark'));
        } else {
            navbar.classList.remove('bg-light');
            navbar.classList.remove('navbar-light');
            navbar.classList.add('bg-dark');
            navbar.classList.add('navbar-dark');
            navLinks.forEach(element => element.classList.remove('text-dark'));
            navLinks.forEach(element => element.classList.add('text-white'));
            navBrand.classList.remove('text-dark');
            navBrand.classList.add('text-white');
            navBrand.querySelector("span").classList.remove('bg-dark');
            navBrand.querySelector("span").classList.remove('text-white');
            navBrand.querySelector("span").classList.add('bg-light');
            navBrand.querySelector("span").classList.add('text-dark');
        }
    }

    function like() {
        document.querySelectorAll(".heart").forEach(heart => heart.addEventListener("click", function() {
                this.classList.toggle("is-active");
            })
        )
    }

    function submit() {
        const form = document.querySelector('.newsletter form');
        form.addEventListener("submit", function (e) {
            e.preventDefault();

            console.log(form.checkValidity())

            if (form.checkValidity() === false) {
                e.preventDefault();
                e.stopPropagation();
                document.querySelector('.alert-danger').classList.add('show');
                setTimeout( () => {
                    document.querySelector('.alert-danger').classList.remove('show');
                    document.querySelector('.newsletter form').classList.remove('was-validated');
                }, 3000);
            } else {
                form.querySelector('input').value = '';
                document.querySelector('.alert-success').classList.add('show');
                setTimeout( () => {
                    document.querySelector('.alert-success').classList.remove('show');
                    document.querySelector('.newsletter form').classList.remove('was-validated');
                }, 3000);
            }

            form.classList.add('was-validated');
        })
    }

    // scroll navigation

    function scrollNavigation() {
        document.querySelectorAll(".scrollNav a").forEach( link => link.addEventListener('click', function(event) {
            if (this.hash !== "") {
                event.preventDefault();
                let hash = this.hash;
                window.scroll({top: document.querySelector(hash).offsetTop, behavior: 'smooth'});
            }
        }));
    }

})();