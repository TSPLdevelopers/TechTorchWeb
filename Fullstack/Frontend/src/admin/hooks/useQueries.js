import { keepPreviousData, useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { queryApi } from "../api/endpoints";

export const useQueryList = (params) =>
  useQuery({
    queryKey: ["queries", "list", params],
    queryFn: () => queryApi.list(params),
    placeholderData: keepPreviousData,
  });

export const useQueryMeta = () =>
  useQuery({ queryKey: ["queries", "meta"], queryFn: queryApi.meta, staleTime: Infinity });

// sidebar badge ke liye - har 10s me refresh
export const useQueryStats = () =>
  useQuery({ queryKey: ["queries", "stats"], queryFn: queryApi.stats, refetchInterval: 10000,refetchIntervalInBackground: true, });

export const useQueryOne = (type, id) =>
  useQuery({
    queryKey: ["queries", "one", type, id],
    queryFn: () => queryApi.one(type, id),
    enabled: !!type && !!id,
  });

export const useQueryStatus = () => {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: ({ type, id, status }) => queryApi.setStatus(type, id, status),
    onSuccess: () => qc.invalidateQueries({ queryKey: ["queries"] }),
  });
};

export const useQueryDelete = () => {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: ({ type, id }) => queryApi.remove(type, id),
    onSuccess: () => qc.invalidateQueries({ queryKey: ["queries"] }),
  });
};