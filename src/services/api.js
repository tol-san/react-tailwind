import axios from 'axios'

// Mock Data
const MOCK_TOURS = [
    {
        id: 1,
        title: 'Bali Paradise Explorer',
        destination: 'Bali, Indonesia',
        price: 1299,
        duration: '7 Days',
        image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=800&q=80',
        category: 'Adventure'
    },
    {
        id: 2,
        title: 'Swiss Alps Hiking',
        destination: 'Interlaken, Switzerland',
        price: 1899,
        duration: '10 Days',
        image: 'https://images.unsplash.com/photo-1531366936337-7c912a4589a7?auto=format&fit=crop&w=800&q=80',
        category: 'Hiking'
    },
    {
        id: 3,
        title: 'Kyoto Cultural Dive',
        destination: 'Kyoto, Japan',
        price: 1599,
        duration: '9 Days',
        image: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=800&q=80',
        category: 'Culture'
    }
]

// Simulate API delay
const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms))

export const api = {
    getTours: async () => {
        await delay(800)
        return MOCK_TOURS
    },

    getTourById: async (id) => {
        await delay(500)
        return MOCK_TOURS.find(tour => tour.id === parseInt(id))
    },

    getUser: async () => {
        await delay(1000)
        return {
            id: 1,
            name: 'John Doe',
            email: 'john@example.com',
            avatar: 'https://i.pravatar.cc/150?u=1'
        }
    }
}
