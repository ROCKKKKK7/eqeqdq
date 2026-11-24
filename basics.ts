// Часть 2. Работа с базовыми типами

// Задание 2.1. Явные аннотации типов
let studentName: string = "Анна";
let studentAge: number = 20;
let isEnrolled: boolean = true;
let middleName: null = null;
let hobby: undefined = undefined;

// Задание 2.2. Вывод типов (type inference)
let city = "Москва";         // string
let population = 12_000_000; // number
let isCapital = true;        // boolean

// Задание 2.4. Корректная работа с null при strict: true
let userName: string | null = null;

export function describeBasics(): void {
    console.log(studentName, studentAge, isEnrolled, middleName, hobby);
    console.log(city, population, isCapital, userName);
}
