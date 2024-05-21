import { Grid } from "@material-ui/core";
import BookItem from "./book-item";

interface BookListProps {
  books: {
    id: number;
    title: string;
    author: string;
    genre: string;
    cover: string;
  }[];
}

const BookList = ({ books = [] }: BookListProps) => {
  return (
    <Grid container spacing={3}>
      {
        books.map((book) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={book.id}>
            <BookItem book={{ title: book.title, author: book.author, genre: book.genre, cover: book.cover }} />
          </Grid>
        ))
      }
    </Grid>
  );
}

export default BookList;
