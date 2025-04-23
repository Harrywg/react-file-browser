import { useQuery } from '@tanstack/react-query';
import { getFiles } from '@/lib/api';

export default function useFilesQuery() {
    const { data: files = [], isLoading } = useQuery({
        queryKey: ['files'],
        queryFn: getFiles,
        staleTime: 5 * 60 * 1000,
        refetchOnWindowFocus: false,
    });

    return {
        files,
        isLoading,
    };
}
