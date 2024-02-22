// - Створити змінні. Присвоїти кожному з них значення: 'hello','owu','com', 'ua', 1, 10, -999, 123, 3.14, 2.7, 16, true, false.
//     Вивести кожну змінну за допомогою: console.log
    let d = 'hello'
    console.log(d)
    let e = 'owu'
    console.log(e)
    let g = 'com'
    console.log(g)
    let h = 'ua'
    console.log(h)
    let i = 1
    console.log(i)
    let j = 10
    console.log(j)
    let k = -999
    console.log(k)
    let l = 123
    console.log(l)
    let m =3.14
    console.log(m)
    let n =2.7
    console.log(n)
    let o =16
    console.log(o)
    let p = true
    console.log(p)
    let q = false
    console.log(q)


// - Створити 3 змінних firstName, middleName, lastName, наповнити їх своїм ПІБ. З'єднати їх в одну змінну person (Не об'єкт, просто за допомоги конкатенації)
    let firstName ='Rustam'
    let middleName ='Sergeyevich'
    let lastName = 'Kolesnik'
    let person = `${lastName} ${firstName} ${middleName}`
    console.log(person)
// - За допомогою оператора typeof визначити типи наступних змінних та вивести їх в консоль.
//     let a = 100; let b = '100'; let c = true;
    let a = 100
    console.log(typeof a)
    let b ='100'
    console.log(typeof b)
    let c = true
    console.log(typeof c)
// Додаткове для тих хто цікавився prompt`oм
// - За допомогою 3х різних prompt() отримати 3 слова які являються вашими Імям, По-Батькові та роками. та вивести в консоль
    let name = prompt('Enter your name', 'Rustam')
    console.log(name)
    let prmt = prompt('Enter your Middle Name', 'Sergeyevich')
    console.log(prmt)
    let age = prompt('Enter your age', '19')
    console.log(age)