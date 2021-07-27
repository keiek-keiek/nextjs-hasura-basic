/**
 * @jest-environment jsdom
 */
 import { render, screen, cleanup } from '@testing-library/react'
 import '@testing-library/jest-dom/extend-expect'
 import {setupServer} from 'msw/node'
 import {getPage, initTestHelpers} from 'next-page-tester'
 import {handlers} from '../mock/handlers'
 import 'setimmediate'
 
 process.env.NEXT_PUBLIC_HASURA_URL = 'https://kind-swine-88.hasura.app/v1/graphql'

 initTestHelpers()
 
 const server = setupServer(...handlers)
 beforeAll(()=>{
     server.listen()
 })
 afterEach(()=>{
     server.resetHandlers()
     cleanup()
 })
 afterAll(()=>{
     server.close()
 })
 
 describe('Hasura CRUD Test Cases', () => {
     it('Should render the list of users by useQuery', async() => {
         const { page } = await getPage({
             route: '/hasura-crud',
         })
         render(page)
         expect(await screen.findByText('Hasura CRUD')).toBeInTheDocument()
         expect(await screen.findByText('Test user A')).toBeInTheDocument()
         expect(screen.getByText('2021-01-13T18:06:46/412969+00:00')).toBeInTheDocument()
         expect(
             screen.getByTestId('edit-ceb6d6b2-f877-4f39-8872-2267f6965ed0')
         ).toBeTruthy()
         expect(
             screen.getByTestId('delete-ceb6d6b2-f877-4f39-8872-2267f6965ed0')
         ).toBeTruthy()
         expect(await screen.findByText('Test user B')).toBeInTheDocument()
         expect(screen.getByText('2021-02-13T18:06:46/412969+00:00')).toBeInTheDocument()
         expect(
             screen.getByTestId('edit-b24e25d9-6dc4-4d1a-943b-5735704d0922')
         ).toBeTruthy()
         expect(
             screen.getByTestId('delete-b24e25d9-6dc4-4d1a-943b-5735704d0922')
         ).toBeTruthy()
         expect(await screen.findByText('Test user C')).toBeInTheDocument()
         expect(screen.getByText('2021-03-13T18:06:46/412969+00:00')).toBeInTheDocument()
         expect(
             screen.getByTestId('edit-cd7194d3-3c8c-4e27-acfd-94aecb2a6271')
         ).toBeTruthy()
         expect(
             screen.getByTestId('delete-cd7194d3-3c8c-4e27-acfd-94aecb2a6271')
         ).toBeTruthy()

     })
 })