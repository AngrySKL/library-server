import { Book, BookDetail } from "../models/book";
import { Router } from "express";

const bookRouter: Router = Router();

const books = [
  new Book(1, '麻烦关下灯', '', 0),
  new Book(2, '我要和宋仲基睡觉了', '', 0),
  new Book(3, '请不要伤害', '李胜基', 1),
  new Book(4, '我和宋仲基的孩子', '', 0),
  new Book(5, '我对象挺好的', '林志玲', 1),
  new Book(6, '象对我也挺好的', '', 0),
  new Book(7, '郁金香的汉子们', '吴亦凡', 1),
  new Book(8, '麻烦关下灯', '', 0),
  new Book(9, '我要和宋仲基睡觉了', '', 0),
  new Book(10, '请不要伤害', '李胜基', 1),
  new Book(11, '我和宋仲基的孩子', '', 0),
  new Book(12, '我对象挺好的', '林志玲', 1),
  new Book(13, '象对我也挺好的', '', 0),
  new Book(14, '郁金香的汉子们', '吴亦凡', 1),
];

bookRouter.get('/', (req, res) => {
  res.json(books);
});

bookRouter.get('/:id', (req, res) => {
  const book = books.find((book) => book.id == req.params.id);
  const bookDetail = new BookDetail(
    book.id,
    book.title,
    'Veal',
   `<p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus modi commodi nobis nisi quas doloribus numquam error dolorum at a.
    </p>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias laboriosam magnam quos aut similique, qui quidem excepturi, eligendi voluptatem eveniet commodi porro? Cum pariatur et inventore temporibus cupiditate voluptatibus error, quisquam, corporis mollitia perferendis modi molestias animi necessitatibus! Corrupti, ea animi. Culpa magnam dolorem placeat fugit unde laudantium delectus reprehenderit!
      </p>
    <p>
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quo vitae harum deserunt aut. Eaque aspernatur maiores fugiat deleniti vero repudiandae neque, ratione, laborum sint dolorum, aut unde quia perferendis molestiae.
      </p>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. A laudantium, quasi, laboriosam, ipsum expedita id rerum quidem saepe nobis architecto obcaecati tenetur nostrum.
      </p>`,
      book.borrower);
  res.json(bookDetail);
});

export { bookRouter };