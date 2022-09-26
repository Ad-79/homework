let a = prompt('Введите первое число:');
        let b = prompt('Введите второе число:');
        let c = prompt('Выберите операцию:\n1 - сложение;\n2 - вычитание;\n3 - умножение;\n4 - деление;');
        let d;
        let e;
        

        if(c == 1){
            d=Number(a)+Number(b)
            e=(`Сумма чисел ${a} и ${b} равна: `)
        }
        else{
            if(c == 2){
                d=Number(a)-Number(b)
                e=(`${a} - ${b} = `)

            }
            else{
                if(c == 3){
                d=Number(a)*Number(b)
                e=(`${a} * ${b} = `)

                }
                else{
                    if(c == 4){
                    d=Number(a)/Number(b)
                    e=(`${a} / ${b} = `)

                    }
                    else{
                        d=('Sorry:(')
                        e=('Варианта нет ')
                        
                    }

                }

            }

        }



        alert(e + d);



