import {IFormulaElement} from "../interfaces/formula-element";

export const formulaElements: IFormulaElement[] = [
  {
    name: '+',
    description: 'Возвращает результат сложения 1-го операнда со 2-м',
    value: '+',
    type: 'operator'
  },
  {
    name: '-',
    description: 'Возвращает результат вычитания 2-го операнда из 1-го',
    value: '-',
    type: 'operator'
  },
  {
    name: '*',
    description: 'Возвращает результат умножения 1-го операнда на 2-й',
    value: '*',
    type: 'operator'
  },
  {
    name: '/',
    description: 'Возвращает результат деления 1-го операнда на 2-й',
    value: '/',
    type: 'operator'
  },
  {
    name: '%',
    description: 'Возвращает остаток от деления 1-го операнда на 2-й',
    value: '%',
    type: 'operator'
  },
  {
    name: '^',
    description: 'Возвращает результат возведения 1-го операнда в степень 2-го',
    value: '^',
    type: 'operator'
  },
  {
    name: '=',
    description: 'Возвращает значение "Истина", если 1-й операнд равен 2-му, в противном случае возвращает значение "Ложь"',
    value: '=',
    type: 'operator'
  },
  {
    name: '!=',
    description: 'Возвращает значение "Истина", если 1-й операнд не равен 2-му, в противном случае возвращает значение "Ложь"',
    value: '!=',
    type: 'operator'
  },
  {
    name: '<>',
    description: 'Возвращает значение "Истина", если 1-й операнд не равен 2-му, в противном случае возвращает значение "Ложь"',
    value: '<>',
    type: 'operator'
  },
  {
    name: '<',
    description: 'Возвращает значение "Истина", если 1-й операнд меньше 2-го, в противном случае возвращает значение "Ложь"',
    value: '<',
    type: 'operator'
  },
  {
    name: '<=',
    description: 'Возвращает значение "Истина", если 1-й операнд меньше или равен 2-му, в противном случае возвращает значение "Ложь"',
    value: '<=',
    type: 'operator'
  },
  {
    name: '>',
    description: 'Возвращает значение "Истина", если 1-й операнд больше 2-го, в противном случае возвращает значение "Ложь"',
    value: '>',
    type: 'operator'
  },
  {
    name: '>=',
    description: 'Возвращает значение "Истина", если 1-й операнд больше или равен 2-му, в противном случае возвращает значение "Ложь"',
    value: '>=',
    type: 'operator'
  },
  {
    name: '&&',
    description: 'Возвращает значение "Истина" или "Ложь" в соответствии с правилом "И". При этом первый и второй операнд должны быть булевыми (принимать значение "Ложь" или "Истина"',
    value: '&&',
    type: 'operator'
  },
  {
    name: '||',
    description: 'Возвращает значение "Истина" или "Ложь" в соответствии с правилом "ИЛИ". При этом первый и второй операнд должны быть булевыми (принимать значение "Ложь" или "Истина"',
    value: '||',
    type: 'operator'
  },
  {
    name: 'NOT (выражение)',
    description: 'Логическое отрицание, 1 (означает истину), если выражение не равно нулю',
    value: 'NOT()',
    type: 'function'
  },
  {
    name: 'IF (условие, значение_если_истинно, значение_если_ложь)',
    description: 'Возвращает одно значение, если условие оценивается как истинное, или другое, если оно оценивается как ложное',
    value: 'IF()',
    type: 'function'
  },
  {
    name: 'RANDOM ()',
    description: 'Производит случайное число от 0 до 1',
    value: 'RANDOM()',
    type: 'function'
  },
  {
    name: 'MIN (e1, e2, ...)',
    description: 'Возвращает наименьшее из заданных выражений',
    value: 'MIN()',
    type: 'function'
  },
  {
    name: 'MAX (e1, e2, ...)',
    description: 'Возвращает наибольшее из заданных выражений',
    value: 'MAX()',
    type: 'function'
  },
  {
    name: 'ABS (выражение)',
    description: 'Возвращает абсолютное (неотрицательное) значение выражения',
    value: 'ABS()',
    type: 'function'
  },
  {
    name: 'ROUND (выражение, точность)',
    description: 'Округляет значение до определенного количества цифр, использует текущий режим округления',
    value: 'ROUND()',
    type: 'function'
  },
  {
    name: 'FLOOR (выражение)',
    description: 'Округляет значение до ближайшего целого числа в меньшую сторону',
    value: 'FLOOR()',
    type: 'function'
  },
  {
    name: 'CEILING (выражение)',
    description: 'Округляет значение до ближайшего целого числа в большую сторону',
    value: 'CEILING()',
    type: 'function'
  },
  {
    name: 'LOG (выражение)',
    description: 'Возвращает натуральный логарифм (по основанию "e") выражения',
    value: 'LOG()',
    type: 'function'
  },
  {
    name: 'LOG10 (выражение)',
    description: 'Возвращает десятичный логарифм (по основанию "10") выражения',
    value: 'LOG10()',
    type: 'function'
  },
  {
    name: 'SQRT (выражение)',
    description: 'Возвращает квадратный корень из выражения',
    value: 'SQRT()',
    type: 'function'
  },
  {
    name: 'SINR (выражение)',
    description: 'Возвращает тригонометрический синус угла (в радианах)',
    value: 'SINR()',
    type: 'function'
  },
  {
    name: 'COSR (выражение)',
    description: 'Возвращает тригонометрический косинус угла (в радианах)',
    value: 'COSR()',
    type: 'function'
  },
  {
    name: 'TANR (выражение)',
    description: 'Возвращает тригонометрический тангенс угла (в радианах)',
    value: 'TANR()',
    type: 'function'
  },
  {
    name: 'COTR (выражение)',
    description: 'Возвращает тригонометрический тангенс угла (в радианах)',
    value: 'COTR()',
    type: 'function'
  },
  {
    name: 'SECR (выражение)',
    description: 'Возвращает секанс (в радианах)',
    value: 'SECR()',
    type: 'function'
  },
  {
    name: 'CSCR (выражение)',
    description: 'Возвращает косеканс (в радианах)',
    value: 'CSCR()',
    type: 'function'
  },
  {
    name: 'ASINR (выражение)',
    description: 'Возвращает значение арксинуса (в радианах)',
    value: 'ASINR()',
    type: 'function'
  },
  {
    name: 'ACOSR (выражение)',
    description: 'Возвращает значение арккосинуса (в радианах)',
    value: 'ACOSR()',
    type: 'function'
  },
  {
    name: 'ATANR (выражение)',
    description: 'Возвращает арктангенса (в радианах)',
    value: 'ATANR()',
    type: 'function'
  },
  {
    name: 'ACOTR (выражение)',
    description: 'Возвращает главное значение арккотангенса, или обратного котангенса, числа (в радианах)',
    value: 'ACOTR()',
    type: 'function'
  },
  {
    name: 'ATAN2R (у, х)',
    description: 'Возвращает арктангенс для заданных координат x и y (в радианах)',
    value: 'ATAN2R()',
    type: 'function'
  },
  {
    name: 'SIN (выражение)',
    description: 'Возвращает тригонометрический синус угла (в градусах)',
    value: 'SIN()',
    type: 'function'
  },
  {
    name: 'COS (выражение)',
    description: 'Возвращает тригонометрический косинус угла (в градусах)',
    value: 'COS()',
    type: 'function'
  },
  {
    name: 'TAN (выражение)',
    description: 'Возвращает тригонометрические тангенс угла (в градусах)',
    value: 'TAN()',
    type: 'function'
  },
  {
    name: 'COT (выражение)',
    description: 'Возвращает тригонометрический котангенс угла (в градусах)',
    value: 'COT()',
    type: 'function'
  },
  {
    name: 'SEC (выражение)',
    description: 'Возвращает секанс (в градусах)',
    value: 'SEC()',
    type: 'function'
  },
  {
    name: 'CSC (выражение)',
    description: 'Возвращает косеканс (в градусах)',
    value: 'CSC()',
    type: 'function'
  },
  {
    name: 'ASIN (выражение)',
    description: 'Возвращает значение арксинуса (в градусах)',
    value: 'ASIN()',
    type: 'function'
  },
  {
    name: 'ACOS (выражение)',
    description: 'Возвращает значение арккосинуса (в градусах)',
    value: 'ACOS()',
    type: 'function'
  },
  {
    name: 'ATAN (выражение)',
    description: 'Возвращает значение арктангенса (в градусах)',
    value: 'ATAN()',
    type: 'function'
  },
  {
    name: 'ACOT (выражение)',
    description: 'Возвращает главное значение арккотангенса, или обратного котангенса, числа (в градусах)',
    value: 'ACOT()',
    type: 'function'
  },
  {
    name: 'ATAN2 (у, х)',
    description: 'Возвращает арктангенс для заданных координат x и y',
    value: 'ATAN2()',
    type: 'function'
  },
  {
    name: 'SINH (выражение)',
    description: 'Возвращает гиперболический синус',
    value: 'SINH()',
    type: 'function'
  },
  {
    name: 'COSH (выражение)',
    description: 'Возвращает гиперболический косинус',
    value: 'COSH()',
    type: 'function'
  },
  {
    name: 'TANH (выражение)',
    description: 'Возвращает гиперболический тангенс',
    value: 'TANH()',
    type: 'function'
  },
  {
    name: 'COTH (выражение)',
    description: 'Возвращает гиперболический котангенс',
    value: 'COTH()',
    type: 'function'
  },
  {
    name: 'SECH (выражение)',
    description: 'Возвращает гиперболический секанс (в градусах)',
    value: 'SECH()',
    type: 'function'
  },
  {
    name: 'CSCH (выражение)',
    description: 'Возвращает гиперболический косеканс (в градусах)',
    value: 'CSCH()',
    type: 'function'
  },
  {
    name: 'ASINH (выражение)',
    description: 'Возвращает угол гиперболического синуса (в градусах)',
    value: 'ASINH()',
    type: 'function'
  },
  {
    name: 'ACOSH (выражение)',
    description: 'Возвращает угол гиперболического косинуса (в градусах)',
    value: 'ACOSH()',
    type: 'function'
  },
  {
    name: 'ATANH (выражение)',
    description: 'Возвращает угол гиперболического тангенса значения',
    value: 'ATANH()',
    type: 'function'
  },
  {
    name: 'RAD (выражение)',
    description: 'Преобразует угол, измеренный в градусах, в приблизительно эквивалентный угол, измеренный в радианах',
    value: 'RAD()',
    type: 'function'
  },
  {
    name: 'DEG (выражение)',
    description: 'Преобразует угол, измеренный в радианах, в приблизительно эквивалентный угол, измеренный в градусах',
    value: 'DEG()',
    type: 'function'
  },
  {
    name: 'FACT (выражение)',
    description: 'Возвращает факториальное значение целого числа. Вернет 1 для 0 или отрицательного числа',
    value: 'FACT()',
    type: 'function'
  },
  {
    name: 'e',
    description: 'Значение e с точностью до 70 цифр',
    value: 'e',
    type: 'constant'
  },
  {
    name: 'PI',
    description: 'Значение PI с точностью до 100 цифр',
    value: 'PI',
    type: 'constant'
  },
  {
    name: 'TRUE',
    description: 'Значение один ("Истина")',
    value: 'TRUE',
    type: 'constant'
  },
  {
    name: 'FALSE',
    description: 'Значение ноль ("Ложь")',
    value: 'FALSE',
    type: 'constant'
  },
  {
    name: 'NULL',
    description: 'Значение отсутствует',
    value: 'NULL',
    type: 'constant'
  },
];
