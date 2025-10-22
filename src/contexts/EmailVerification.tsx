import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import axios from "axios";

const API_BASE_URL = "http://localhost:3000";

export const EmailVerification: React.FC<{ email: string; onVerified: () => void }> = ({ email, onVerified }) => {
  const [code, setCode] = useState("");
  const [loading, setLoading] = useState(false);

  const handleVerify = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!code.trim()) {
      toast.error("Please enter your verification code");
      return;
    }
    setLoading(true);
    try {
      const response = await axios.post(`${API_BASE_URL}/api/auth/verify-email`, { email, code });
      toast.success(response.data.message || "Email verified successfully!");
      onVerified();
    } catch (error: any) {
      toast.error(error.response?.data?.error || "Verification failed. Try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-4">
      <p className="text-sm text-muted-foreground">
        We've sent a 6-digit verification code to <strong>{email}</strong>. Please enter it below (valid for 15 min).
      </p>
      <form onSubmit={handleVerify} className="space-y-3">
        <Input
          type="text"
          maxLength={6}
          value={code}
          onChange={(e) => setCode(e.target.value)}
          placeholder="Enter verification code"
          required
        />
        <Button type="submit" className="w-full" disabled={loading}>
          {loading ? "Verifying..." : "Verify Email"}
        </Button>
      </form>
    </div>
  );
};
