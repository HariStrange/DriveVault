import React, { useState, useEffect, useRef } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Users, ArrowLeft, Sun, Moon } from "lucide-react";
import { toast } from "sonner";
import gsap from "gsap";
import { useTheme } from "@/contexts/ThemeContext";
import axios from "axios";

export const CandidateAuth: React.FC = () => {
  const [loginData, setLoginData] = useState({ email: "", password: "" });
  const [registerData, setRegisterData] = useState({
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
    role: "candidate" as "candidate" | "welder",
  });
  const [loading, setLoading] = useState(false);
  const { login, register, isAuthenticated } = useAuth();
  const { theme, toggleTheme } = useTheme();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState<"login" | "register">("login");
  const prevTab = useRef<"login" | "register">(activeTab);
  const [showVerification, setShowVerification] = useState(false);
  const [verificationEmail, setVerificationEmail] = useState("");
  const [verificationCode, setVerificationCode] = useState("");

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/candidate/dashboard");
      return;
    }
    gsap.fromTo(
      ".auth-card",
      { scale: 0.8, opacity: 0, y: 50 },
      { scale: 1, opacity: 1, y: 0, duration: 0.6, ease: "back.out(1.7)" }
    );
  }, [isAuthenticated, navigate]);

  useEffect(() => {
    const fromX =
      prevTab.current === "login" && activeTab === "register" ? 80 : -80;
    gsap.fromTo(
      ".tab-content",
      { x: fromX, opacity: 0 },
      { x: 0, opacity: 1, duration: 0.38, ease: "power2.out" }
    );
    prevTab.current = activeTab;
  }, [activeTab]);

  // -------------------------
  // 🔹 Login Handler
  // -------------------------
  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const success = await login(
        loginData.email,
        loginData.password,
        "candidate"
      );
      if (success) {
        toast.success("Welcome back!");
        navigate("/candidate/dashboard");
      } else {
        toast.error("Invalid credentials. Please try again.");
      }
    } catch {
      toast.error("Login failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  // -------------------------
  // 🔹 Register Handler
  // -------------------------
  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();

    if (registerData.password !== registerData.confirmPassword) {
      toast.error("Passwords do not match.");
      return;
    }

    if (registerData.password.length < 6) {
      toast.error("Password must be at least 6 characters long.");
      return;
    }

    setLoading(true);
    try {
      const success = await register(
        registerData.email,
        registerData.email,
        registerData.password,
        registerData.role,
        registerData.phone
      );

      if (success) {
        toast.success(
          "Registration successful! Please check your email for the verification code (valid 15 min)."
        );
        setShowVerification(true);
        setVerificationEmail(registerData.email);
      } else {
        toast.error("Registration failed. Email may already exist.");
      }
    } catch {
      toast.error("Registration failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  // -------------------------
  // 🔹 Verification Handler
  // -------------------------
  const handleVerification = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!verificationCode) {
      toast.error("Please enter the verification code.");
      return;
    }

    setLoading(true);
    try {
      const res = await axios.post(
        `${import.meta.env.VITE_API_URL}/api/auth/verify`,
        {
          email: verificationEmail,
          code: verificationCode,
        }
      );

      if (res.data.valid) {
        toast.success("Email verified successfully. Please log in now.");
        setShowVerification(false);
        setActiveTab("login");
      } else {
        toast.error("Invalid or expired code. Try again.");
      }
    } catch {
      toast.error("Verification failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <Card className="auth-card w-full max-w-md relative overflow-hidden">
        <Button
          variant="ghost"
          onClick={toggleTheme}
          className="absolute top-4 right-4 p-2"
          aria-label="Toggle theme"
        >
          {theme === "dark" ? (
            <Sun className="h-5 w-5" />
          ) : (
            <Moon className="h-5 w-5" />
          )}
        </Button>

        <CardHeader className="text-center space-y-2">
          <Users className="h-16 w-16 mx-auto text-primary" />
          <CardTitle className="text-2xl font-bold">Driver Portal</CardTitle>
          <CardDescription>
            Login or register to continue as a driver/welder
          </CardDescription>
        </CardHeader>

        <CardContent>
          {showVerification ? (
            <form onSubmit={handleVerification} className="space-y-4">
              <div className="space-y-2 text-center">
                <Label>Enter Verification Code</Label>
                <p className="text-sm text-muted-foreground">
                  A 6-digit code was sent to <b>{verificationEmail}</b>. It will
                  expire in 15 minutes.
                </p>
                <Input
                  type="text"
                  maxLength={6}
                  placeholder="Enter 6-digit code"
                  value={verificationCode}
                  onChange={(e) => setVerificationCode(e.target.value)}
                  required
                />
              </div>
              <Button type="submit" className="w-full" disabled={loading}>
                {loading ? "Verifying..." : "Verify Email"}
              </Button>
            </form>
          ) : (
            <Tabs
              defaultValue="login"
              value={activeTab}
              onValueChange={(val) => setActiveTab(val as "login" | "register")}
              className="w-full"
            >
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="login">Login</TabsTrigger>
                <TabsTrigger value="register">Register</TabsTrigger>
              </TabsList>

              {/* LOGIN */}
              <TabsContent value="login" className="space-y-4 tab-content">
                <form onSubmit={handleLogin} className="space-y-4">
                  <div className="space-y-2">
                    <Label>Email</Label>
                    <Input
                      type="text"
                      placeholder="Enter email"
                      value={loginData.email}
                      onChange={(e) =>
                        setLoginData({ ...loginData, email: e.target.value })
                      }
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label>Password</Label>
                    <Input
                      type="password"
                      placeholder="Enter password"
                      value={loginData.password}
                      onChange={(e) =>
                        setLoginData({
                          ...loginData,
                          password: e.target.value,
                        })
                      }
                      required
                    />
                  </div>
                  <Button type="submit" className="w-full" disabled={loading}>
                    {loading ? "Signing In..." : "Sign In"}
                  </Button>
                </form>
              </TabsContent>

              {/* REGISTER */}
              <TabsContent value="register" className="space-y-4 tab-content">
                <form onSubmit={handleRegister} className="space-y-4">
                  <div className="space-y-2">
                    <Label>Email</Label>
                    <Input
                      type="email"
                      placeholder="Enter your email"
                      value={registerData.email}
                      onChange={(e) =>
                        setRegisterData({
                          ...registerData,
                          email: e.target.value,
                        })
                      }
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label>Phone Number</Label>
                    <Input
                      type="tel"
                      placeholder="Enter phone number"
                      value={registerData.phone}
                      onChange={(e) =>
                        setRegisterData({
                          ...registerData,
                          phone: e.target.value,
                        })
                      }
                    />
                  </div>
                  <div className="space-y-2">
                    <Label>Password</Label>
                    <Input
                      type="password"
                      placeholder="Minimum 6 characters"
                      value={registerData.password}
                      onChange={(e) =>
                        setRegisterData({
                          ...registerData,
                          password: e.target.value,
                        })
                      }
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label>Confirm Password</Label>
                    <Input
                      type="password"
                      placeholder="Confirm password"
                      value={registerData.confirmPassword}
                      onChange={(e) =>
                        setRegisterData({
                          ...registerData,
                          confirmPassword: e.target.value,
                        })
                      }
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label>Role</Label>
                    <select
                      value={registerData.role}
                      onChange={(e) =>
                        setRegisterData({
                          ...registerData,
                          role: e.target.value as "candidate" | "welder",
                        })
                      }
                      className="w-full p-2 border rounded-md"
                    >
                      <option value="candidate">Candidate (Driver)</option>
                      <option value="welder">Welder</option>
                    </select>
                  </div>

                  <Button type="submit" className="w-full" disabled={loading}>
                    {loading ? "Creating Account..." : "Create Account"}
                  </Button>
                </form>
              </TabsContent>
            </Tabs>
          )}

          <div className="mt-6 text-center">
            <Button asChild variant="ghost" size="sm" className="text-primary">
              <Link to="/" className="flex items-center">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Home
              </Link>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
