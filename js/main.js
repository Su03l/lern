const Book = [
    {BookId : 1,
    BookTitle : 'Start with why',
    Author : 'Simon Sinek',
    BookPrice :  80.0,
    Quantity : 13},

    {BookId : 2,
    BookTitle : 'But how do it know',
    Author : 'J. Clark Scott',
    BookPrice :  59.9,
    Quantity : 22},

    {BookId : 3,
    BookTitle : 'Clean Code',
    Author : 'Robert Cecil Martin',
    BookPrice :  50.0,
    Quantity : 5},

    {BookId : 4,
    BookTitle : 'Zero to One',
    Author : 'Peter Thiel',
    BookPrice :  45.0,
    Quantity : 12},

    {BookId : 5,
    BookTitle : 'You dont know JS',
    Author : 'Kyle Simpson',
    BookPrice :  39.9,
    Quantity : 9}

];


function findBookById(Id){
    for(let i = 0; i < Book.length; i++){
        if(Book[i].BookId === Id){
            return Book[i];
        }
    }
    return null;
}


function findBookByTitle(BookTitle){
    for(let i = 0; i < Book.length; i++){
        if(Book[i].BookTitle === BookTitle){
            return Book[i];
        }
    }
    return null;
}

function findBookByAuthorr(Author){
    for(let i = 0; i < Book.length; i++){
        if(Book[i].Author === Author){
            return Book[i];
        }
    }
    return null;
}
function findBookByTitle(bookTitle) {
    for (let i = 0; i < books.length; i++) {
        if (books[i].BookTitle.toLowerCase() === bookTitle.toLowerCase()) {
            return books[i];
        }
    }
    return null;
}

function sellBook(bookTitle, requestedQuantity, availableBalance) {
    const book = findBookByTitle(bookTitle);
    if (!book) {
        return "الكتاب غير متوفر.";
    }
    
    if (book.Quantity < requestedQuantity) {
        return "الكمية المطلوبة غير متوفرة.";
    }

    const totalPrice = book.BookPrice * requestedQuantity;
    if (availableBalance < totalPrice) {
        return "الرصيد غير كافٍ لإتمام عملية الشراء.";
    }

    
    book.Quantity -= requestedQuantity;
    
    
    const invoice = {
        BookTitle: book.BookTitle,
        QuantityPurchased: requestedQuantity,
        PricePerBook: book.BookPrice,
        TotalPrice: totalPrice,
        RemainingBalance: availableBalance - totalPrice
    };
    
    return invoice;
}


const result = sellBook('Clean Code', 3, 200);
console.log(result);

const result2 = sellBook('Start with why', 14, 1500);
console.log(result2);


