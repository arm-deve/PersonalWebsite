   window.addEventListener('load', function() {
        setTimeout(() => {
            document.body.classList.add('loaded');
            
            setTimeout(() => {
                const loader = document.querySelector('.page-loader');
                if (loader) loader.remove();
            }, 400);
        }, 800);
    });


// تنظیم سال جاری در فوتر
        document.getElementById('currentYear').textContent = new Date().getFullYear();
        
        // منوی موبایل
        const mobileMenuBtn = document.getElementById('mobileMenuBtn');
        const mobileMenu = document.getElementById('mobileMenu');
        
        mobileMenuBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
            const icon = mobileMenuBtn.querySelector('i');
            
            if (mobileMenu.classList.contains('hidden')) {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            } else {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-times');
            }
        });
        
        // بستن منوی موبایل با کلیک روی لینک
        document.querySelectorAll('#mobileMenu a').forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.add('hidden');
                mobileMenuBtn.querySelector('i').classList.remove('fa-times');
                mobileMenuBtn.querySelector('i').classList.add('fa-bars');
            });
        });
        
        // اعتبارسنجی فرم
        const contactForm = document.getElementById('contactForm');
        const successMessage = document.getElementById('successMessage');
        
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            // پنهان کردن خطاهای قبلی
            document.querySelectorAll('[id$="Error"]').forEach(error => {
                error.classList.add('hidden');
            });
            
            // اعتبارسنجی
            let isValid = true;
            const name = document.getElementById('name').value.trim();
            const contact = document.getElementById('contact').value.trim();
            const message = document.getElementById('message').value.trim();
            
            if (name.length < 2) {
                document.getElementById('nameError').textContent = 'لطفاً نام خود را وارد کنید';
                document.getElementById('nameError').classList.remove('hidden');
                isValid = false;
            }
            
            if (contact.length < 5) {
                document.getElementById('contactError').textContent = 'لطفاً ایمیل یا شماره تماس را وارد کنید';
                document.getElementById('contactError').classList.remove('hidden');
                isValid = false;
            }
            
            if (message.length < 10) {
                document.getElementById('messageError').textContent = 'لطفاً توضیحات پروژه را بیشتر بنویسید';
                document.getElementById('messageError').classList.remove('hidden');
                isValid = false;
            }
            
            if (isValid) {
                // نمایش پیام موفقیت
                successMessage.classList.remove('hidden');
                contactForm.reset();
                
                // پنهان کردن پیام پس از 5 ثانیه
                setTimeout(() => {
                    successMessage.classList.add('hidden');
                }, 5000);
            }
        });
        
        // انیمیشن اسکرول
        const fadeElements = document.querySelectorAll('.fade-in');
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        }, {
            threshold: 0.1
        });
        
        fadeElements.forEach(element => {
            observer.observe(element);
        });
        
        // هموار کردن اسکرول
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                const targetId = this.getAttribute('href');
                if (targetId === '#') return;
                
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    e.preventDefault();
                    window.scrollTo({
                        top: targetElement.offsetTop - 80,
                        behavior: 'smooth'
                    });
                }
            });
        });
        
        // فعال کردن انیمیشن تایپ‌رایت پس از لود صفحه
        window.addEventListener('load', () => {
            const typewriter = document.querySelector('.typewriter');
            typewriter.style.animation = 'none';
            setTimeout(() => {
                typewriter.style.animation = '';
            }, 100);
        });


(function(){
  emailjs.init("PUBLIC_KEY");
})();

document.getElementById("contactForm").addEventListener("submit", function(e) {
  e.preventDefault();

  emailjs.sendForm(
    "SERVICE_ID",
    "TEMPLATE_ID",
    this
  ).then(() => {
    alert("پیام با موفقیت ارسال شد ✅");
    this.reset();
  }, (error) => {
    alert("خطا در ارسال ❌");
    console.log(error);
  });
});

document.getElementById('currentYear').textContent = new Date().getFullYear();
