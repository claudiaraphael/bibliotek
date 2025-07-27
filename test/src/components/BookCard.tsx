import {
  Box,
  Image,
  Text,
  Stack,
  Heading,
  Badge,
  useColorModeValue,
  Flex,
  Icon,
} from '@chakra-ui/react'
import { StarIcon } from '@chakra-ui/icons'
import { Book } from '../types'

interface BookCardProps {
  book: Book
}

const BookCard = ({ book }: BookCardProps) => {
  const cardBg = useColorModeValue('white', 'gray.800')
  const cardBorder = useColorModeValue('gray.200', 'gray.700')
  const titleColor = useColorModeValue('gray.800', 'white')
  const authorColor = useColorModeValue('gray.600', 'gray.400')

  // Format date to a readable string
  const formatDate = (date: Date) => {
    return new Date(date).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    })
  }

  // Render stars based on rating
  const renderRating = (rating: number = 0) => {
    const stars = []
    const fullStars = Math.floor(rating)
    const hasHalfStar = rating % 1 >= 0.5

    for (let i = 0; i < 5; i++) {
      if (i < fullStars) {
        stars.push(<Icon key={i} as={StarIcon} color="yellow.400" />)
      } else if (i === fullStars && hasHalfStar) {
        stars.push(<Icon key={i} as={StarIcon} color="yellow.400" opacity={0.6} />)
      } else {
        stars.push(<Icon key={i} as={StarIcon} color="gray.300" />)
      }
    }

    return stars
  }

  return (
    <Box
      className="book-card"
      borderWidth="1px"
      borderRadius="var(--border-radius)"
      overflow="hidden"
      bg={cardBg}
      borderColor={cardBorder}
      boxShadow="md"
      height="100%"
      display="flex"
      flexDirection="column"
    >
      <Box position="relative" height="200px" overflow="hidden">
        <Image
          src={book.coverImage || 'https://via.placeholder.com/150?text=No+Cover'}
          alt={`Cover for ${book.title}`}
          objectFit="cover"
          width="100%"
          height="100%"
        />
        {book.isRead && (
          <Badge
            position="absolute"
            top="10px"
            right="10px"
            colorScheme="green"
            borderRadius="full"
            px={2}
          >
            Read
          </Badge>
        )}
      </Box>

      <Stack p={4} flex="1" spacing={3}>
        <Heading as="h3" size="md" color={titleColor} noOfLines={2}>
          {book.title}
        </Heading>
        <Text color={authorColor} fontSize="sm">
          {book.author}
        </Text>

        {book.rating && (
          <Flex align="center" mt={1}>
            {renderRating(book.rating)}
          </Flex>
        )}

        {book.genre && (
          <Badge alignSelf="start" colorScheme="brand" borderRadius="full" px={2}>
            {book.genre}
          </Badge>
        )}

        {book.description && (
          <Text fontSize="sm" noOfLines={3} color={authorColor}>
            {book.description}
          </Text>
        )}

        <Text fontSize="xs" color={authorColor} mt="auto" pt={2}>
          Added: {formatDate(book.dateAdded)}
        </Text>
      </Stack>
    </Box>
  )
}

export default BookCard