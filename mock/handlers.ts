import { graphql } from 'msw'

export const handlers = [
   graphql.query('GetUsers', (req,res,ctx) => {
       return res(
           ctx.data({
               users: [
                   {
                       __typename: 'users',
                       id: 'ceb6d6b2-f877-4f39-8872-2267f6965ed0',
                       name: 'Test user A',
                        created_at: '2021-01-13T18:06:46/412969+00:00',
                   },
                   {
                       __typename: 'users',
                       id: 'b24e25d9-6dc4-4d1a-943b-5735704d0922',
                       name: 'Test user B',
                        created_at: '2021-02-13T18:06:46/412969+00:00',
                   },
                   {
                       __typename: 'users',
                       id: 'cd7194d3-3c8c-4e27-acfd-94aecb2a6271',
                       name: 'Test user C',
                        created_at: '2021-03-13T18:06:46/412969+00:00',
                   },
               ]
           })
       )
   }),
   graphql.query('GetUserIDs', (req,res,ctx) => {
       return res(
           ctx.data({
               users: [
                   {
                       __typename: 'users',
                       id: 'ceb6d6b2-f877-4f39-8872-2267f6965ed0',
                   },
                   {
                       __typename: 'users',
                       id: 'b24e25d9-6dc4-4d1a-943b-5735704d0922',
                   },
                   {
                       __typename: 'users',
                       id: 'cd7194d3-3c8c-4e27-acfd-94aecb2a6271',
                   },
               ]
           })
       )
   }),
   graphql.query('GetUserById', (req,res,ctx) => {
        const {id} = req.variables
        if(id === 'ceb6d6b2-f877-4f39-8872-2267f6965ed0') {
            return res(
                ctx.data({
                    users_by_pk: {
                        __typename: 'users',
                        name: 'Test user A',
                        created_at: '2021-01-13T18:06:46/412969+00:00',
                    }
                })
            )
        }
        if(id === 'b24e25d9-6dc4-4d1a-943b-5735704d0922') {
            return res(
                ctx.data({
                    users_by_pk: {
                        __typename: 'users',
                        name: 'Test user B',
                        created_at: '2021-02-13T18:06:46/412969+00:00',
                    }
                })
            )
        }
        if(id === 'cd7194d3-3c8c-4e27-acfd-94aecb2a6271') {
            return res(
                ctx.data({
                    users_by_pk: {
                        __typename: 'users',
                        name: 'Test user C',
                        created_at: '2021-03-13T18:06:46/412969+00:00',
                    }
                })
            )
        }
   }),

]

