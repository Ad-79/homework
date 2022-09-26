        
        let name = prompt('Введите имя:');
        let surname = prompt('Введите фамилию:');
        let otchestvo = prompt('Введите отчество:');
        let age = prompt('Ваш возраст:');
        let age_day = age*365;               
        let age_5_year = Number(age)+5;
        let gender = confirm('Ваш пол женский?');
               
        gender == true? gender='женский' : gender='мужской' ;
                   
        let pension;

        age >= 63 ? pension="Да" : pension="Нет" ;       

        alert(`ФИО: ${name} ${surname} ${otchestvo} \nВаш возраст в годах: ${age} \nВаш возраст в днях: ${age_day}\nЧерез 5 лет вам будет: ${age_5_year}\nПОЛ: ${gender}\nВы на пенсии: ${pension}`)