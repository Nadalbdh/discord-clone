# Discord Clone 

## Overview 

This project is a Discord clone created using Django and React. It allows users to create and join servers, chat in text channels, and customize their profiles.

## Technologies Used 

**Backend**:

- Django: A powerful Python web framework for building the backend.
- Django REST framework: Used for building RESTful APIs in Django.
- Pillow: Python Imaging Library for image processing.

**Frontend**:

- React: A JavaScript library for building user interfaces.
- Webpack: A module bundler used for bundling JavaScript files.
- Babel: A JavaScript compiler for converting modern JavaScript code to browser-compatible code.
- axios: A promise-based HTTP client for making API requests.
- react-router-dom: A routing library for handling navigation in React applications.

**Other**:

- SQLite  A lightweight database used by default with Django.
- Python: The primary language for the Django backend.
- Node.js: Required for running React and managing frontend dependencies.


## How to Run

1. **Backend Setup**:
```
pip install -r requirements.txt
python manage.py makemigrations
python manage.py migrate
python manage.py createsuperuser
python manage.py runserver
```

2. **Frontend Setup**:

```
cd frontend
yarn install
yarn serve
yarn build
```