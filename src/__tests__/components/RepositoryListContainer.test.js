import RepositoryListContainer from '../../components/RepositoryListContainer'
import { render, within } from '@testing-library/react-native';

describe('RepositoryList', () => {
    describe('RepositoryListContainer', () => {
        it('renders repository information correctly', () => {
            const repositories = {
                totalCount: 8,
                pageInfo: {
                    hasNextPage: true,
                    endCursor:
                        'WyJhc3luYy1saWJyYXJ5LnJlYWN0LWFzeW5jIiwxNTg4NjU2NzUwMDc2XQ==',
                    startCursor: 'WyJqYXJlZHBhbG1lci5mb3JtaWsiLDE1ODg2NjAzNTAwNzZd',
                },
                edges: [
                    {
                        node: {
                            id: 'jaredpalmer.formik',
                            fullName: 'jaredpalmer/formik',
                            description: 'Build forms in React, without the tears',
                            language: 'TypeScript',
                            forksCount: 1619,
                            stargazersCount: 21856,
                            ratingAverage: 88,
                            reviewCount: 3,
                            ownerAvatarUrl:
                                'https://avatars2.githubusercontent.com/u/4060187?v=4',
                        },
                        cursor: 'WyJqYXJlZHBhbG1lci5mb3JtaWsiLDE1ODg2NjAzNTAwNzZd',
                    },
                    {
                        node: {
                            id: 'async-library.react-async',
                            fullName: 'async-library/react-async',
                            description: 'Flexible promise-based React data loader',
                            language: 'JavaScript',
                            forksCount: 69,
                            stargazersCount: 1760,
                            ratingAverage: 72,
                            reviewCount: 3,
                            ownerAvatarUrl:
                                'https://avatars1.githubusercontent.com/u/54310907?v=4',
                        },
                        cursor:
                            'WyJhc3luYy1saWJyYXJ5LnJlYWN0LWFzeW5jIiwxNTg4NjU2NzUwMDc2XQ==',
                    },
                ],
            };
            const { getAllByTestId } = render(<RepositoryListContainer repositories={repositories}/>);
            const repositoryItems = getAllByTestId('repositoryItem');

            const [item1, item2] = repositoryItems; 
            expect(item1).toHaveTextContent('jaredpalmer/formik')
            expect(item1).toHaveTextContent('Build forms in React, without the tears')
            expect(item1).toHaveTextContent('TypeScript')
            expect(within(item1).getByText('1.6k')).toBeDefined()
            expect(within(item1).getByText('21.9k')).toBeDefined()
            expect(within(item1).getByText('88')).toBeDefined()
            expect(within(item1).getByText('3')).toBeDefined()

            expect(item2).toHaveTextContent('async-library/react-async')
            expect(item2).toHaveTextContent('Flexible promise-based React data loader')
            expect(item2).toHaveTextContent('JavaScript')
            expect(within(item2).getByText('69')).toBeDefined()
            expect(within(item2).getByText('1.8k')).toBeDefined()
            expect(within(item2).getByText('72')).toBeDefined()
            expect(within(item2).getByText('3')).toBeDefined()
        });
    });
});