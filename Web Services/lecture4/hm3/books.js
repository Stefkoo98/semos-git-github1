const fs = require('./fs');
const booksDb = 'books.json';

const create = async (bookData) => {
    let data = await fs.read(booksDb);
    let id = 1;
    if (data.length !== 0) {
        id = data[data.length - 1].id + 1;
    }
    let book = {
        id,
        name: bookData.name,
        author: bookData.author,
        genre: bookData.genre,
        year: bookData.year,
        price: bookData.price
    };
    data = [...data, book];
    await fs.write(booksDb, data);
    return book;
};

const getAll = async () => {
    let data = await fs.read(booksDb);
    return data;
};

const getOne = async (id) => {
    let data = await fs.read(booksDb);
    let book = data.filter(b => b.id === Number(id));
    if (book.length === 0) return null;
    return book[0];
};

const update = async (id, bookData) => {
    let data = await fs.read(booksDb);
    data = data.map(b => {
        if (b.id === Number(id)) {
            b.name = bookData.name;
            b.author = bookData.author;
            b.genre = bookData.genre;
            b.year = bookData.year;
            b.price = bookData.price;
        }
        return b
    });
    await fs.write(booksDb, data);
};

const partialUpdate = async (id, bookData) => {
    let data = await fs.read(booksDb);
    data = data.map(b => {
        if (b.id === Number(id)) {
            b.name = bookData.name ? bookData.name : b.name;
            b.author = bookData.author ? bookData.author : b.author;
            b.genre = bookData.genre ? bookData.genre : b.genre;
            b.year = bookData.year ? bookData.year : b.year;
            b.price = bookData.price ? bookData.price : b.price;
        }
        return b;
    });
    await fs.write(booksDb, data);
};

const remove = async (id) => {
    let data = await fs.read(booksDb);
    let prevLength = data.length;
    data = data.filter(b => b.id !== Number(id));
    if (data.length === prevLength) {
        return false
    }
    await fs.write(booksDb, data)
    return true;
};


module.exports = {
    create,
    getAll,
    getOne,
    update,
    partialUpdate,
    remove
};