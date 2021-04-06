import Buyable from '../domain/Buyable';

export default class Cart {
    private _items: Buyable[] = [];

    add(item: Buyable): void {
        if(!this._items.find((itemIndex) => itemIndex.id === item.id) || 'countable' in item) {
            this._items.push(item);
        }
    }

    sum(): number {
        let sum:number = 0;
        for (let item of this._items) {
            sum += item.price;
        }
        return sum;   
    }

    sumDiscount(discount: number): number {
        return ( this.sum() * (1 - (discount / 100)));  
    }

    remove(id: number): void {
        const itemIndex: number = this._items.findIndex((item) => item.id === id);
        if (itemIndex != -1) {
            this._items.splice(itemIndex, 1);
        }
    }

    get items(): Buyable[] {
        return [...this._items]; 
    }
}