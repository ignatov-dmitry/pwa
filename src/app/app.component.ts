import { Component } from '@angular/core';

class Product {
  name: string;
  done: boolean;
  price: number;

  constructor(name: string, price: number) {
    this.name = name;
    this.price = price;
    this.done = true;
  }
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Тестовое PWA';
  text: string;
  price: number;
  displayedColumns = ['Название', 'Цена', 'Заказать'];
  dataSource = items;


    addItem(text: string, price: number): void {
      if (text == null || text.trim() === '' || price == null) {
        return;
      }

      this.dataSource.push(new Product(text, price));
      this.price = null;
      this.text  = null;
  }

}

const items: Product[] =
    [
        { name: 'Хлеб', done: false, price: 15.9 },
        { name: 'Батон', done: false, price: 60 },
        { name: 'Масло', done: false, price: 22.6 },
        { name: 'Сыр', done: true, price: 310 },
        { name: 'Кефир', done: false, price: 15.9 },
        { name: 'Колбаса', done: false, price: 60 },
        { name: 'Картофель', done: false, price: 22.6 },
        { name: 'Сахар', done: true, price: 310 },
        { name: 'Шоколад', done: false, price: 15.9 },
        { name: 'Мороженое', done: false, price: 60 },
        { name: 'Капуста', done: false, price: 22.6 },
        { name: 'Сметана', done: true, price: 310 }
    ];
