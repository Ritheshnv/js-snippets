class Book {
    constructor(title, author, ISBN, numCopies) {
        this.title = title;
        this.author = author;
        this.ISBN = ISBN;
        this.numCopies = numCopies;
    }

    get availability() {
        return this.getAvailability();
    }

    getAvailability() {
        if(this.numCopies<=0){
            return 'out of stock'
        } else if (this.numCopies<10) {
            return 'low stock'
        } else {
            return 'in stock'
        }
    }

    sell(numSold=1) {
        return this.numCopies -= numSold;
    }

    reStock(numCopies = 5) {
        return this.numCopies += numCopies;
    }
}

const book = new Book('Rangers row', 'Robin holding', '123456', 20);

book.sell(12);
book.reStock(239);
book.sell(250);

console.log(book.getAvailability());