import { SimpleGrid, Text, Box, useColorModeValue } from '@chakra-ui/react'
import { Book } from '../types'
import BookCard from './BookCard'

interface BookListProps {
  books: Book[]
}

const BookList = ({ books }: BookListProps) => {
  const emptyStateColor = useColorModeValue('gray.600', 'gray.400')

  if (books.length === 0) {
    return (
      <Box textAlign="center" py={10}>
        <Text fontSize="xl" color={emptyStateColor}>
          No books added yet. Click "Add Book" to get started.
        </Text>
      </Box>
    )
  }

  return (
    <SimpleGrid columns={{ base: 1, sm: 2, md: 3, lg: 4 }} spacing={6}>
      {books.map((book) => (
        <BookCard key={book.id} book={book} />
      ))}
    </SimpleGrid>
  )
}

export default BookList