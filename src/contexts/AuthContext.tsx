import React, { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";
import { toast } from "sonner";
import Cookies from "js-cookie";
import { User } from "@/types";

const API_BASE_URL = import.meta.env.VITE_API_URL || "http://localhost:3000";

interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => Promise<boolean>;
  register: (
    email: string,
    name: string,
    password: string,
    role: "candidate" | "welder",
    phone?: string
  ) => Promise<boolean>;
  logout: () => void;
  isAuthenticated: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error("useAuth must be used within an AuthProvider");
  return context;
};

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [user, setUser] = useState<User | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // ✅ Automatically restore session from cookie
  useEffect(() => {
    const token = Cookies.get("auth_token");
    const userData = Cookies.get("user_data");

    if (token && userData) {
      try {
        const parsedUser = JSON.parse(userData);
        if (parsedUser.role === "driver") parsedUser.role = "candidate";

        setUser(parsedUser);
        setIsAuthenticated(true);
        axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
      } catch (err) {
        console.error("Error parsing user_data cookie:", err);
        Cookies.remove("auth_token");
        Cookies.remove("user_data");
      }
    }
  }, []);

  // ✅ LOGIN
  const login = async (email: string, password: string): Promise<boolean> => {
    try {
      const response = await axios.post(`${API_BASE_URL}/api/auth/login`, {
        email,
        password,
      });

      const { token, user: backendUser } = response.data;
      if (!token || !backendUser) {
        toast.error("Invalid response from server.");
        return false;
      }

      if (backendUser.role === "driver") backendUser.role = "candidate";

      // Store in cookies for 7 days
      Cookies.set("auth_token", token, { expires: 7, sameSite: "strict" });
      Cookies.set("user_data", JSON.stringify(backendUser), {
        expires: 7,
        sameSite: "strict",
      });

      setUser(backendUser);
      setIsAuthenticated(true);
      axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;

      toast.success(`Welcome back, ${backendUser.name || "user"}!`);
      return true;
    } catch (error: any) {
      console.error("Login error:", error);
      if (error.response?.status === 403) {
        toast.error("Please verify your email before logging in.");
      } else if (error.response?.status === 401) {
        toast.error("Invalid email or password.");
      } else {
        toast.error("Login failed. Please try again later.");
      }
      return false;
    }
  };

  // ✅ REGISTER
  const register = async (
    email: string,
    name: string,
    password: string,
    role: "candidate" | "welder",
    phone?: string
  ): Promise<boolean> => {
    try {
      const backendRole = role === "candidate" ? "driver" : "welder";
      const formData = { email, name, password, phone, role: backendRole };

      const response = await axios.post(
        `${API_BASE_URL}/api/auth/register`,
        formData
      );

      toast.success(
        response.data.message ||
          "Registration successful! Please check your email for the verification code."
      );

      return true;
    } catch (error: any) {
      console.error("Registration error:", error);
      toast.error(
        error.response?.data?.error || "Registration failed. Please try again."
      );
      return false;
    }
  };

  // ✅ LOGOUT
  const logout = () => {
    setUser(null);
    setIsAuthenticated(false);
    Cookies.remove("auth_token");
    Cookies.remove("user_data");
    delete axios.defaults.headers.common["Authorization"];
    toast.success("Logged out successfully.");
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        login,
        register,
        logout,
        isAuthenticated,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
