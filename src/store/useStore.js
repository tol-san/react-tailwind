import { create } from 'zustand'

export const useStore = create((set) => ({
    // Theme State
    isDarkMode: false,
    toggleTheme: () => set((state) => ({ isDarkMode: !state.isDarkMode })),

    // Cart State
    cart: [],
    addToCart: (item) => set((state) => ({ cart: [...state.cart, item] })),
    removeFromCart: (itemId) => set((state) => ({
        cart: state.cart.filter(item => item.id !== itemId)
    })),
    clearCart: () => set({ cart: [] }),

    // Auth State (Mock)
    user: null,
    login: (userData) => set({ user: userData }),
    logout: () => set({ user: null }),
}))
