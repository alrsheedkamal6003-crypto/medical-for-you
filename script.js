document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('membershipForm');
    const successMessage = document.getElementById('successMessage');
    const submitBtn = document.querySelector('.submit-btn');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); // منع تحديث الصفحة الافتراضي

        // تغيير شكل الزر لإعطاء إحساس بالمعالجة
        const originalBtnText = submitBtn.innerHTML;
        submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> جاري الإرسال...';
        submitBtn.disabled = true;

        // محاكاة عملية إرسال البيانات (تأخير لمدة ثانيتين)
        setTimeout(function() {
            // إخفاء النموذج وإظهار رسالة النجاح
            form.reset();
            submitBtn.innerHTML = originalBtnText;
            submitBtn.disabled = false;
            
            successMessage.style.display = 'block';

            // إخفاء رسالة النجاح بعد 5 ثواني
            setTimeout(() => {
                successMessage.style.display = 'none';
            }, 5000);

        }, 2000);
    });
});