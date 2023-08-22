// Es necesario asignar valores a las variables de clase

export class MyDate {
  year: number;
  month: number;
  day: number;

  constructor(year: number, month: number, day: number) {
    this.year = year;
    this.month = month;
    this.day = day;
  }

  // Definición del tipo de retorno en un método
  printFormat():string {
    return `${this.day}/${this.month}/${this.year}`;
  }

  // Definiendo un literal type en un método
  add(amount: number, type: 'days' | 'months' | 'years') {
    if (type === 'days') this.day += amount;
    if (type === 'months') this.month += amount;
    if (type === 'years') this.year += amount;
  }
}
