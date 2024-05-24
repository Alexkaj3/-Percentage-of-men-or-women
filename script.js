document.addEventListener('DOMContentLoaded', function() {
    const button = document.querySelector('.login-button');
    button.addEventListener('click', function() {
        const name = document.getElementById('name').value.trim(); // استخراج الاسم وإزالة الفراغات الزائدة
        const gender = document.getElementById('gender').value;
        // التحقق من أن الاسم ونوع الجنس قد تم إدخالهما
        if (name !== '' && gender !== '') {
            localStorage.setItem('name', name); // حفظ الاسم في التخزين المحلي
            if (gender === 'male') {
                window.location.href = 'male_questions.html'; // توجيه المستخدم إلى صفحة الأسئلة للذكور
            } else {
                window.location.href = 'female_questions.html'; // توجيه المستخدم إلى صفحة الأسئلة للإناث
            }
        } else {
            alert('يرجى إدخال الاسم وتحديد نوع الجنس');
        }
    });
});