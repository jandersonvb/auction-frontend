import { Grid } from '@material-ui/core';
import { Card, CardActionArea, CardContent, CardMedia, Typography } from '@mui/material';
import { useRouter } from 'next/navigation';

interface BookItemProps {
  book: {
    title: string;
    author: string;
    genre: string;
    cover: string;
  }
}

const BookItem = ({ book }: BookItemProps) => {
  const router = useRouter();

  return (
    <Grid item xs={6} sm={6} md={12} style={{ borderRadius: 5 }}>
      <Card>
        <CardActionArea
          onClick={() => {
            // Navegar para a página de detalhes do livro

            // Exemplo de navegação para a página de detalhes do livro
            router.push(`/books/${book.title}`);
          }}
        >
          <CardMedia
            component="img"
            height="200"
            image={book.cover}
            alt={book.title}
          />
          <CardContent>
            <Typography variant="h6" component="h2">
              {book.title}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {book.author}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Grid>
  );
}

export default BookItem;