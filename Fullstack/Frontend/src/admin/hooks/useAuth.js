import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { adminApi, authApi } from "../api/endpoints";

export const PROFILE_KEY = ["admin", "profile"];

export const useProfile = () =>
  useQuery({
    queryKey: PROFILE_KEY,
    queryFn: adminApi.profile,
    retry: false,
    staleTime: 5 * 60 * 1000,
  });

export const useLogin = () => {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: authApi.login,
    onSuccess: (admin) => qc.setQueryData(PROFILE_KEY, admin),
  });
};

export const useRegister = () => useMutation({ mutationFn: authApi.register });

export const useLogout = () => {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: authApi.logout,
    onSettled: () => qc.clear(), // always clear local data, even if the call fails
  });
};

export const useUpdateAccount = () => {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: ({ id, data }) => adminApi.update(id, data),
    onSuccess: () => {
      qc.invalidateQueries({ queryKey: PROFILE_KEY });
      qc.invalidateQueries({ queryKey: ["admins"] });
    },
  });
};

export const useChangePassword = () =>
  useMutation({ mutationFn: ({ id, data }) => adminApi.changePassword(id, data) });

/* ---- team management (superadmin) ---- */
export const useAdmins = (enabled) =>
  useQuery({ queryKey: ["admins"], queryFn: adminApi.list, enabled });

export const useToggleAdmin = () => {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: adminApi.toggleStatus,
    onSuccess: () => qc.invalidateQueries({ queryKey: ["admins"] }),
  });
};

export const useDeleteAdmin = () => {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: adminApi.remove,
    onSuccess: () => qc.invalidateQueries({ queryKey: ["admins"] }),
  });
};
