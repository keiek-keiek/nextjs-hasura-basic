/**
 * @jest-environment jsdom
 */
 import { render, screen, cleanup } from '@testing-library/react'
 import '@testing-library/jest-dom/extend-expect'
 import {setupServer} from 'msw/node'
 import {getPage, initTestHelpers} from 'next-page-tester'
 import {handlers} from '../mock/handlers'
 import 'setimmediate'
import userEvent from '@testing-library/user-event'
 
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

 describe('UserDetail Test Cases', () => {
     it('Should render the user detail pre-fetched by getStaticProps', async () => {
         const {page} = await getPage({
             route: '/users/ceb6d6b2-f877-4f39-8872-2267f6965ed0'
         })
         render(page)
         expect(await screen.findByText('User detail')).toBeInTheDocument()
         expect(screen.getByText('Test user A')).toBeInTheDocument()
         expect(
            screen.getByText('2021-01-13T18:06:46/412969+00:00')
         ).toBeInTheDocument()
         userEvent.click(screen.getByTestId('back-to-main'))
         expect(await screen.findByText('SSG+ISR')).toBeInTheDocument()
         userEvent.click(
             screen.getByTestId('link-b24e25d9-6dc4-4d1a-943b-5735704d0922')
         )
         expect(await screen.findByText('User detail')).toBeInTheDocument()
         expect(screen.getByText('Test user B')).toBeInTheDocument()
         expect(
            screen.getByText('2021-02-13T18:06:46/412969+00:00')
         ).toBeInTheDocument()
     })
 })
 