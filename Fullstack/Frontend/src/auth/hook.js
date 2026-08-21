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

// Register Admin
export const useRegisterAdmin = () => {
  return useMutation({
    mutationFn: registerAdmin,
  });
};

// Login Admin
export const useLoginAdmin = () => {
  return useMutation({
    mutationFn: loginAdmin,
  });
};

// Logout Admin
export const useLogoutAdmin = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: logoutAdmin,
    onSuccess: () => {
      queryClient.clear();
    },
  });
};

// Get Logged-in Admin Profile
export const useAdminProfile = () => {
  return useQuery({
    queryKey: ["adminProfile"],
    queryFn: getAdminProfile,
  });
};

// Get Admin By ID
export const useAdminById = (id) => {
  return useQuery({
    queryKey: ["admin", id],
    queryFn: () => getAdminById(id),
    enabled: !!id,
  });
};

// Update Admin
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

// Update Admin Password
export const useUpdateAdminPassword = () => {
  return useMutation({
    mutationFn: ({ id, data }) =>
      updateAdminPassword(id, data),
  });
};

// Toggle Admin Status
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

// Delete Admin
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