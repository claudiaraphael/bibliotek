import { useState, useEffect } from 'react'
import {
  Box,
  Container,
  Flex,
  Heading,
  useColorMode,
  Button,
  useDisclosure,
  Icon,
  Text,
  HStack,
  Spacer,
} from '@chakra-ui/react'
import { MoonIcon, SunIcon, AddIcon } from '@chakra-ui/icons'
import { Book } from './types'
import BookList from './components/BookList'
import AddBookModal from './components/AddBookModal'

// Sample data for demonstration
const sampleBooks: Book[] = [
  {
    id: '1',
    title: 'The Great Gatsby',
    author: 'F. Scott Fitzgerald',
    coverImage: 'https://via.placeholder.com/150',
    description: 'A story of wealth, love, and the American Dream.',
    genre: 'Classic',
    publicationYear: 1925,
    rating: 4.5,
    isRead: true,
    dateAdded: new Date('2023-01-15'),
  },
  {
    id: '2',
    title: 'To Kill a Mockingbird',
    author: 'Harper Lee',
    coverImage: 'https://via.placeholder.com/150',
    description: 'A novel about racial injustice and moral growth.',
    genre: 'Fiction',
    publicationYear: 1960,
    rating: 4.8,
    isRead: true,
    dateAdded: new Date('2023-02-10'),
  },
  {
    id: '3',
    title: '1984',
    author: 'George Orwell',
    coverImage: 'https://via.placeholder.com/150',
    description: 'A dystopian novel about totalitarianism.',
    genre: 'Science Fiction',
    publicationYear: 1949,
    rating: 4.6,
    isRead: false,
    dateAdded: new Date('2023-03-05'),
  },
]

function App() {
  const { colorMode, toggleColorMode } = useColorMode()
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [books, setBooks] = useState<Book[]>(sampleBooks)

  const addBook = (newBook: Omit<Book, 'id' | 'dateAdded'>) => {
    const book: Book = {
      ...newBook,
      id: Date.now().toString(),
      dateAdded: new Date(),
    }
    setBooks([...books, book])
  }

  return (
    <Box minH="100vh" pb={8}>
      <Container maxW="container.xl" pt={5}>
        <Flex direction="column" gap={6}>
          <Flex align="center" mb={4}>
            <Heading size="xl" fontWeight="bold" color={colorMode === 'dark' ? 'brand.200' : 'brand.600'}>
              Bibliotek
            </Heading>
            <Spacer />
            <HStack spacing={4}>
              <Button onClick={toggleColorMode} variant="ghost" aria-label="Toggle color mode">
                <Icon as={colorMode === 'dark' ? SunIcon : MoonIcon} />
                <Text ml={2} display={{ base: 'none', md: 'block' }}>
                  {colorMode === 'dark' ? 'Light Mode' : 'Dark Mode'}
                </Text>
              </Button>
              <Button
                leftIcon={<AddIcon />}
                onClick={onOpen}
                colorScheme="brand"
                aria-label="Add book"
              >
                Add Book
              </Button>
            </HStack>
          </Flex>

          <BookList books={books} />

          <AddBookModal isOpen={isOpen} onClose={onClose} addBook={addBook} />
        </Flex>
      </Container>
    </Box>
  )
}

export default App