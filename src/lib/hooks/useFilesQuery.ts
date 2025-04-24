import { useQuery } from '@tanstack/react-query';
import { getFiles } from '@/lib/api';
import { Datasource } from '@/lib/types';

export default function useFilesQuery(datasource: Datasource) {
    const { data: files = [], isLoading } = useQuery({
        queryKey: ['files', datasource],
        queryFn: () => getFiles(datasource),
        staleTime: 5 * 60 * 1000,
        refetchOnWindowFocus: false,
    });

    return {
        files,
        isLoading,
    };
}
