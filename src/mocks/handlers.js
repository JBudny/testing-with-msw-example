import { rest } from 'msw'
import { mockedResponse } from './mockedResponse'

export const handlers = [
  rest.get('https://randomuser.me/api', (req, res, ctx) => {

 return res(
        ctx.status(200),
        ctx.json({...mockedResponse}),
      )
  }),
]