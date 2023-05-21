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

class TechnicalBook extends Book {
    constructor(title, author, ISBN, numCopies, edition) {
        super(title, author, ISBN, numCopies);
        this.edition = edition;
    }

    getEdition() {
        return `The current edition of the book is ${this.edition}`;
    }
}

const book = new Book('Rangers row', 'Robin holding', '123456', 20);

book.sell(12);
book.reStock(239);
book.sell(250);

const book2 = new TechnicalBook('Nindolle', 'Turkishee', '122443', 25, '2nd Edition');

console.log(book2.getEdition())
console.log(book.getAvailability());