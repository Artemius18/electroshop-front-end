import { instance } from '@/api/api.interceptor'
import { IOrder } from '@/types/order.interface'

const ORDERS = 'orders'

export const ReviewService = {
	async getAll() {
		return instance<IOrder[]>({
			url: ORDERS,
			method: 'GET'
		})
	}
}

export default ReviewService
