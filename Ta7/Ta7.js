function getTheTitles(books) {
    let titles = books.map(book => book.title);
    console.log(titles);
    return titles; 
}


let books = [
    {
        title: 'Book',
        author: 'Name'
    },
    {
        title: 'Book2',
        author: 'Name2'
    },
    {
        title: 'Book3',
        author: 'Name3'
    }
];

getTheTitles(books);