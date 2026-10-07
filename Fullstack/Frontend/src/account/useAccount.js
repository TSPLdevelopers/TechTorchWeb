import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { authApi, blogApi, interestApi, api } from "../admin/api/endpoints";
import { PROFILE_KEY } from "../admin/hooks/useAuth";

export const ME_KEY = ["me"];

// Who is signed in right now? -> { accountType: "admin" | "candidate", name, email, role, ... } or null
export const useMe = () =>
  useQuery({
    queryKey: ME_KEY,
    queryFn: async () => {
      try {
        return await authApi.me();
      } catch (e) {
        if (e.status === 401 || e.status === 403) return null; // simply signed out
        throw e;
      }
    },
    retry: false,
    staleTime: 60 * 1000,
  });

export const useSignIn = () => {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: authApi.login,
    onSuccess: (user) => {
      qc.setQueryData(ME_KEY, user);
      if (user.accountType === "admin") qc.setQueryData(PROFILE_KEY, user); // admin dashboard reads this
    },
  });
};

export const useCandidateSignUp = () => {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: authApi.registerCandidate,
    onSuccess: (user) => qc.setQueryData(ME_KEY, user), // signed in automatically
  });
};

export const useSignOut = () => {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: authApi.logout,
    onSettled: () => {
      qc.clear();
      qc.setQueryData(ME_KEY, null);
    },
  });
};

/* ---------- public ---------- */
export const usePublishedBlogs = () => useQuery({ queryKey: ["blogs", "published"], queryFn: blogApi.published });
export const usePublishedBlog = (id) => useQuery({ queryKey: ["blogs", "one", id], queryFn: () => blogApi.one(id), enabled: !!id });
export const usePublicJobs = () => useQuery({ queryKey: ["jobs", "public"], queryFn: api.jobs.list });

/* ---------- candidate ---------- */
export const useMyBlogs = (enabled = true) => useQuery({ queryKey: ["blogs", "mine"], queryFn: blogApi.mine, enabled });
export const useMyInterests = (enabled = true) => useQuery({ queryKey: ["interests", "mine"], queryFn: interestApi.mine, enabled });

export const useSaveBlog = () => {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: ({ id, data }) => (id ? blogApi.update(id, data) : blogApi.create(data)),
    onSuccess: () => qc.invalidateQueries({ queryKey: ["blogs"] }),
  });
};
export const useDeleteBlog = () => {
  const qc = useQueryClient();
  return useMutation({ mutationFn: blogApi.remove, onSuccess: () => qc.invalidateQueries({ queryKey: ["blogs"] }) });
};
export const useShowInterest = () => {
  const qc = useQueryClient();
  return useMutation({ mutationFn: interestApi.create, onSuccess: () => qc.invalidateQueries({ queryKey: ["interests"] }) });
};
export const useWithdrawInterest = () => {
  const qc = useQueryClient();
  return useMutation({ mutationFn: interestApi.withdraw, onSuccess: () => qc.invalidateQueries({ queryKey: ["interests"] }) });
};

/* ---------- admin moderation ---------- */
export const useAdminBlogs = () => useQuery({ queryKey: ["blogs", "admin"], queryFn: blogApi.adminAll });
export const useAdminBlogUpdate = () => {
  const qc = useQueryClient();
  return useMutation({ mutationFn: ({ id, data }) => blogApi.adminUpdate(id, data), onSuccess: () => qc.invalidateQueries({ queryKey: ["blogs"] }) });
};
export const useAdminBlogDelete = () => {
  const qc = useQueryClient();
  return useMutation({ mutationFn: blogApi.adminRemove, onSuccess: () => qc.invalidateQueries({ queryKey: ["blogs"] }) });
};
export const useAdminInterests = () => useQuery({ queryKey: ["interests", "admin"], queryFn: interestApi.adminAll });
export const useAdminInterestStatus = () => {
  const qc = useQueryClient();
  return useMutation({ mutationFn: ({ id, status }) => interestApi.adminStatus(id, status), onSuccess: () => qc.invalidateQueries({ queryKey: ["interests"] }) });
};
export const useAdminInterestDelete = () => {
  const qc = useQueryClient();
  return useMutation({ mutationFn: interestApi.adminRemove, onSuccess: () => qc.invalidateQueries({ queryKey: ["interests"] }) });
};