// Задания 2.3, 3.2 и часть 5: намеренные ошибки типизации.
// Файл лежит ВНЕ src/, поэтому обычная сборка (npx tsc) его не затрагивает.
// Чтобы увидеть сообщения компилятора, выполните:
//   npx tsc --noEmit --ignoreConfig --strict --module nodenext --target esnext examples/errors.ts

import { formatPrice, clamp, logMessage } from "../src/functions";

// Ошибка 1
let title: string = "Книга";
title = 123; // Type 'number' is not assignable to type 'string'.

// Ошибка 2
let pages: number = 300;
pages = "много"; // Type 'string' is not assignable to type 'number'.

// Ошибка 3
let isRead: boolean = false;
isRead = 1; // Type 'number' is not assignable to type 'boolean'.

// Задание 2.4
let userName: string = null; // Type 'null' is not assignable to type 'string'.

// Задание 3.2
formatPrice("100");  // Argument of type 'string' is not assignable to parameter of type 'number'.
clamp(5, 0);         // Expected 3 arguments, but got 2.
logMessage(123);     // Argument of type 'number' is not assignable to parameter of type 'string'.
