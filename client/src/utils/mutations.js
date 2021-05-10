import gql from 'graphql-tag';


export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
        email
        
      }
    }
  }
`;

export const SAVE_BOOk = gql`
  mutation savedBooks( $bookData: bookInput! ) {
    savedBook(bookData: $bookData) {
        _id
        username
        email
        savedBooks {
            bookId
            authors
            description
            title
            image
            link
        }
    }

  }

`;


export const REMOVE_BOOK = gql`
  mutation removeBook( $bookId: ID! ) {
      removeBook(bookId: $bookId) {
        _id
        username
        email
        savedBooks {
            bookId
            authors
            image
            link
            title
            description
        }
      }
  }
`;