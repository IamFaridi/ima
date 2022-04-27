import { FetchedData } from "./api";


export function sortList(data: FetchedData[], searchQuery: string, text: "Date" | "Title" | "Size"):FetchedData[] {
    const filteredData = data.filter((item: FetchedData) => item.name.toLowerCase().includes(searchQuery.toLowerCase()));
    switch (text) {
        case 'Date':
            return filteredData.sort((a: FetchedData, b: FetchedData) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime());
        case 'Size':
            return filteredData.sort((a: FetchedData, b: FetchedData) => b.width - a.width);
        case 'Title':
            return filteredData.sort((a: FetchedData, b: FetchedData) => a.name.localeCompare(b.name));
        default:
            return filteredData;
    }
}