import { instance } from '@/api/api.interceptor'

const STATISTICS = 'statistics'

export type TypeStatisticsRespone = {
	name: string
	value: number
}

export const StatisticsService = {
	async getMain() {
		return instance<TypeStatisticsRespone[]>({
			url: `${STATISTICS}/main`,
			method: 'GET'
		})
	}
}

export default StatisticsService
