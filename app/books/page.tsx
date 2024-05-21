"use client"

import { useState, useEffect } from 'react';
import { Container, Typography, TextField, Grid, Box } from '@mui/material';
import BookList from './_components/book-list';
import { useRouter } from 'next/navigation';

const BooksPage = () => {
  const [search, setSearch] = useState('');
  const [books, setBooks] = useState([]);
  const router = useRouter();

  useEffect(() => {
    if (search) {
      // Buscar livros da API (substitua pelo seu endpoint)
      fetch(`https://www.googleapis.com/books/v1/volumes?q=${search}`)
        .then((response) => response.json())
        .then((data) => {
          if (data.items) {
            const formattedBooks = data.items.map((item: { id: any; volumeInfo: { title: any; authors: any[]; categories: any[]; imageLinks: { thumbnail: any; }; }; }) => ({
              id: item.id,
              title: item.volumeInfo.title,
              author: item.volumeInfo.authors ? item.volumeInfo.authors.join(', ') : 'Unknown Author',
              genre: item.volumeInfo.categories ? item.volumeInfo.categories.join(', ') : 'Unknown Genre',
              cover: item.volumeInfo.imageLinks ? item.volumeInfo.imageLinks.thumbnail : 'https://via.placeholder.com/128x195?text=No+Cover',
            }));
            setBooks(formattedBooks);
          } else {
            setBooks([]);
          }
        })
        .catch((error) => {
          console.error("Error fetching books:", error);
          setBooks([]);
        });
    } else {
      setBooks([]);
    }
  }, [search]);

  return (
    <Container>
      <Typography variant="h4" gutterBottom style={{ marginTop: 20, marginBottom: 20, textAlign: 'center' }}>
        Livros Disponíveis
      </Typography>
      <Box display="flex" justifyContent="space-between" alignItems="center" mb={2} style={{ marginBottom: 80 }}>
        <TextField
          label="Buscar"
          variant="outlined"
          onChange={(e) => setSearch(e.target.value)}

          fullWidth
        />
      </Box>
      <Grid container spacing={1} width={3}>
        <BookList books={books} />
      </Grid>
    </Container>
  );
}

export default BooksPage;
