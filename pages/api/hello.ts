// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

// Sentry error tracking for API routes
import { withSentry } from '@sentry/nextjs';

type Data = {
  name: string
}

const handler = (req: NextApiRequest,
  res: NextApiResponse<Data>) => {
  res.status(200).json({ name: 'John Doe' })
}

// Ensure function export is wrapped with the `withSentry` HOC to capture errors in Sentry.
export default withSentry(handler)