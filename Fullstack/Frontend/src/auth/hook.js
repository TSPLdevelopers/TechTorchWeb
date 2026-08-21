import {
  useQuery,
  useMutation,
  useQueryClient,
} from "@tanstack/react-query";

import {
  registerAdmin,
  loginAdmin,
  logoutAdmin,
  getAdminProfile,
  getAdminById,
  updateAdmin,
  updateAdminPassword,
  toggleAdminStatus,
  deleteAdmin,
} from "./api";
export const useRegisterAdmin = () => {
  return useMutation({
    mutationFn: registerAdmin,
  });
};
export const useLoginAdmin = () => {
  return useMutation({
    mutationFn: loginAdmin,
  });
};
export const useLogoutAdmin = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: logoutAdmin,
    onSuccess: () => {
      queryClient.clear();
    },
  });
};
export const useAdminProfile = () => {
  return useQuery({
    queryKey: ["adminProfile"],
    queryFn: getAdminProfile,
  });
};
export const useAdminById = (id) => {
  return useQuery({
    queryKey: ["admin", id],
    queryFn: () => getAdminById(id),
    enabled: !!id,
  });
};
export const useUpdateAdmin = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ id, data }) => updateAdmin(id, data),

    onSuccess: (_, variables) => {
      queryClient.invalidateQueries({
        queryKey: ["admin", variables.id],
      });

      queryClient.invalidateQueries({
        queryKey: ["adminProfile"],
      });
    },
  });
};
export const useUpdateAdminPassword = () => {
  return useMutation({
    mutationFn: ({ id, data }) =>
      updateAdminPassword(id, data),
  });
};
export const useToggleAdminStatus = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ id, data }) =>
      toggleAdminStatus(id, data),

    onSuccess: (_, variables) => {
      queryClient.invalidateQueries({
        queryKey: ["admin", variables.id],
      });

      queryClient.invalidateQueries({
        queryKey: ["adminProfile"],
      });
    },
  });
};
export const useDeleteAdmin = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: deleteAdmin,

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["admin"],
      });
    },
  });
};