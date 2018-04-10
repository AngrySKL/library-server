import { Book, BookDetail } from "../models/book";
import { Router } from "express";
import { books } from "./mock";

import * as _ from "lodash";

const bookRouter: Router = Router();

bookRouter.get('/', (req, res) => {
  var term = req.query.searchTerm;
  var currentPage = parseInt(req.query.currentPage);
  var pageSize = parseInt(req.query.pageSize);

  const searchResult = term ? books.filter( (book) => book.title.indexOf(term) >= 0) : books;
  const totalCount = searchResult.length;
  const start = (currentPage - 1) * pageSize;
  const end = start + pageSize;
  const finalResult = searchResult.slice(start, end);
  
  res.json({ books: finalResult, totalCount: totalCount });
})

bookRouter.get('/detail/:id', (req, res) => {
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