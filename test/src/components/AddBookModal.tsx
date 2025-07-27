import { useState } from 'react'
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Select,
  Stack,
  Checkbox,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  useColorModeValue,
} from '@chakra-ui/react'
import { Book } from '../types'

interface AddBookModalProps {
  isOpen: boolean
  onClose: () => void
  addBook: (book: Omit<Book, 'id' | 'dateAdded'>) => void
}

const AddBookModal = ({ isOpen, onClose, addBook }: AddBookModalProps) => {
  const [title, setTitle] = useState('')
  const [author, setAuthor] = useState('')
  const [coverImage, setCoverImage] = useState('')
  const [description, setDescription] = useState('')
  const [genre, setGenre] = useState('')
  const [publicationYear, setPublicationYear] = useState<number | undefined>(undefined)
  const [rating, setRating] = useState<number | undefined>(undefined)
  const [isRead, setIsRead] = useState(false)

  const modalBg = useColorModeValue('white', 'gray.800')
  const inputBg = useColorModeValue('white', 'gray.700')

  const handleSubmit = () => {
    // Basic validation
    if (!title || !author) return

    // Create new book object
    const newBook: Omit<Book, 'id' | 'dateAdded'> = {
      title,
      author,
      coverImage: coverImage || undefined,
      description: description || undefined,
      genre: genre || undefined,
      publicationYear,
      rating,
      isRead,
    }

    // Add book and close modal
    addBook(newBook)
    resetForm()
    onClose()
  }

  const resetForm = () => {
    setTitle('')
    setAuthor('')
    setCoverImage('')
    setDescription('')
    setGenre('')
    setPublicationYear(undefined)
    setRating(undefined)
    setIsRead(false)
  }

  return (
    <Modal isOpen={isOpen} onClose={onClose} size="lg">
      <ModalOverlay backdropFilter="blur(5px)" />
      <ModalContent bg={modalBg}>
        <ModalHeader>Add New Book</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Stack spacing={4}>
            <FormControl isRequired>
              <FormLabel>Title</FormLabel>
              <Input
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Book title"
                bg={inputBg}
              />
            </FormControl>

            <FormControl isRequired>
              <FormLabel>Author</FormLabel>
              <Input
                value={author}
                onChange={(e) => setAuthor(e.target.value)}
                placeholder="Author name"
                bg={inputBg}
              />
            </FormControl>

            <FormControl>
              <FormLabel>Cover Image URL</FormLabel>
              <Input
                value={coverImage}
                onChange={(e) => setCoverImage(e.target.value)}
                placeholder="https://example.com/book-cover.jpg"
                bg={inputBg}
              />
            </FormControl>

            <FormControl>
              <FormLabel>Description</FormLabel>
              <Textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Brief description of the book"
                bg={inputBg}
                rows={3}
              />
            </FormControl>

            <FormControl>
              <FormLabel>Genre</FormLabel>
              <Select
                placeholder="Select genre"
                value={genre}
                onChange={(e) => setGenre(e.target.value)}
                bg={inputBg}
              >
                <option value="Fiction">Fiction</option>
                <option value="Non-Fiction">Non-Fiction</option>
                <option value="Science Fiction">Science Fiction</option>
                <option value="Fantasy">Fantasy</option>
                <option value="Mystery">Mystery</option>
                <option value="Thriller">Thriller</option>
                <option value="Romance">Romance</option>
                <option value="Biography">Biography</option>
                <option value="History">History</option>
                <option value="Self-Help">Self-Help</option>
                <option value="Other">Other</option>
              </Select>
            </FormControl>

            <FormControl>
              <FormLabel>Publication Year</FormLabel>
              <NumberInput
                min={1000}
                max={new Date().getFullYear()}
                value={publicationYear}
                onChange={(_, value) => setPublicationYear(value)}
                bg={inputBg}
              >
                <NumberInputField placeholder="e.g. 2023" />
                <NumberInputStepper>
                  <NumberIncrementStepper />
                  <NumberDecrementStepper />
                </NumberInputStepper>
              </NumberInput>
            </FormControl>

            <FormControl>
              <FormLabel>Rating</FormLabel>
              <NumberInput
                min={0}
                max={5}
                step={0.5}
                value={rating}
                onChange={(_, value) => setRating(value)}
                bg={inputBg}
              >
                <NumberInputField placeholder="Rate from 0 to 5" />
                <NumberInputStepper>
                  <NumberIncrementStepper />
                  <NumberDecrementStepper />
                </NumberInputStepper>
              </NumberInput>
            </FormControl>

            <FormControl>
              <Checkbox isChecked={isRead} onChange={(e) => setIsRead(e.target.checked)}>
                I have read this book
              </Checkbox>
            </FormControl>
          </Stack>
        </ModalBody>

        <ModalFooter>
          <Button variant="ghost" mr={3} onClick={onClose}>
            Cancel
          </Button>
          <Button colorScheme="brand" onClick={handleSubmit}>
            Add Book
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  )
}

export default AddBookModal