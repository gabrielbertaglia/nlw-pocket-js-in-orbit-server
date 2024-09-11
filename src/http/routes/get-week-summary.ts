import type { FastifyPluginAsyncZod } from 'fastify-type-provider-zod'
import { getWeekSummaryGoals } from '../../functions/get-week-summary'

export const getWeekSummaryRoute: FastifyPluginAsyncZod = async app => {
  app.get('/summary', async () => {
    const { summary } = await getWeekSummaryGoals()
    return { summary }
  })
}
