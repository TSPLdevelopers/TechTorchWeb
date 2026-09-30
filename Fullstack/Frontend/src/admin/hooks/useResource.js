import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { api } from "../api/endpoints";

// resource: "news" | "jobs" | "events" | "whitepapers" | "updates"
export const useList = (resource) =>
  useQuery({ queryKey: ["content", resource], queryFn: api[resource].list });

export const useSave = (resource) => {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: ({ id, data }) =>
      id ? api[resource].update(id, data) : api[resource].create(data),
    onSuccess: () => qc.invalidateQueries({ queryKey: ["content", resource] }),
  });
};

export const useRemove = (resource) => {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: (id) => api[resource].remove(id),
    onSuccess: () => qc.invalidateQueries({ queryKey: ["content", resource] }),
  });
};
