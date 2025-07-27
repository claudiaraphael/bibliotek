# Estrutura backend

bibliotek/
├── main.py
├── requirements.txt
├── app/
│   ├── __init__.py
│   ├── core/
│   │   ├── __init__.py
│   │   └── config.py
│   ├── db/
│   │   ├── __init__.py
│   │   ├── base.py
│   │   └── session.py
│   ├── models/
│   │   ├── __init__.py
│   │   └── book.py
│   ├── schemas/
│   │   ├── __init__.py
│   │   └── book.py
│   └── api/
│       ├── __init__.py
│       └── endpoints/
│           ├── __init__.py
│           └── books.py
└── tests/
    ├── __init__.py
    └── test_books.py