function Book(title, author, ISBN, numCopies) {
    this.title = title;
    this.author = author;
    this.ISBN = ISBN;
    this.numCopies = numCopies;
}

Book.prototype.getAvailability = function() {
    if(this.numCopies<=0){
        return 'out of stock'
    } else if (this.numCopies<10) {
        return 'low stock'
    } else {
        return 'in stock'
    }
}

Book.prototype.sell = function(numSold = 1) {
    return this.numCopies -= numSold;
}

Book.prototype.reStock = function(numCopies = 5) {
    return this.numCopies += numCopies;
}

const book = new Book('Rangers row', 'Robin holding', '123456', 9);

console.log(book.getAvailability());

