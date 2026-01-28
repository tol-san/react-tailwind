import { create } from "zustand";

const useTourQueryStore = create((set) => ({
    tourQuery: {},
    setSearchText: (searchText) =>
        set(() => ({ tourQuery: { searchText } })), // Reset other filters on search? Mosh usually clears others, or strictly sets searchText
    setDestinationId: (destinationId) =>
        set((store) => ({
            tourQuery: { ...store.tourQuery, destinationId },
        })),
    setSortOrder: (sortOrder) =>
        set((store) => ({
            tourQuery: { ...store.tourQuery, sortOrder },
        })),
}));

export default useTourQueryStore;
