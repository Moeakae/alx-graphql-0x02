import { gql } from '@apollo/client';

/**
 * GraphQL queries for the Rick and Morty app
 */


// Query to get all characters
export const GET_CHARACTERS = gql`
    query GetCharacters($page: Int) {
        characters(page: $page) {
            info {
                count
                pages
                next
                prev
            }
            results {
                id
                name
                status
                species
                type
                gender
                image
            }
        }
    }
`;

// Query to get a single character by ID
export const GET_CHARACTER = gql`
    query GetCharacter($id: ID!) {
        character(id: $id) {
            id
            name
            status
            species
            type
            gender
            image
            origin {
                name
            }
            location {
                name
            }
            episode {
                id
                name
                episode
            }
        }
    }
`;