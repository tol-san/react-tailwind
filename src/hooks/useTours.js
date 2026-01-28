import { useQuery } from "@tanstack/react-query";
import APIClient from "../services/api-client";
import useTourQueryStore from "../store/useTourQueryStore";

const apiClient = new APIClient("/tours.json"); // Requesting the JSON file directly

const useTours = () => {
    const tourQuery = useTourQueryStore((s) => s.tourQuery);

    return useQuery({
        queryKey: ["tours", tourQuery], // Key changes when query changes
        queryFn: async () => {
            // Fetch all data
            const allTours = await apiClient.getAll();

            // Client-side filtering to mimic backend behavior
            let filteredTours = allTours;

            if (tourQuery.destinationId) {
                // In this static setup, destinationId might be a string like 'bali'
                filteredTours = filteredTours.filter(t => t.destinationIdentifier === tourQuery.destinationId);
            }

            if (tourQuery.searchText) {
                const lowerSearch = tourQuery.searchText.toLowerCase();
                filteredTours = filteredTours.filter(t =>
                    t.title.toLowerCase().includes(lowerSearch) ||
                    t.destinationName.toLowerCase().includes(lowerSearch)
                );
            }

            if (tourQuery.sortOrder) {
                if (tourQuery.sortOrder === 'price-asc') {
                    filteredTours.sort((a, b) => a.price - b.price);
                } else if (tourQuery.sortOrder === 'price-desc') {
                    filteredTours.sort((a, b) => b.price - a.price);
                }
            }

            // Simulate network delay for effect
            await new Promise(resolve => setTimeout(resolve, 500));

            return filteredTours;
        },
        staleTime: 24 * 60 * 60 * 1000, // 24h
    });
};

export default useTours;
