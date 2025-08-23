'use client';
import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Container } from "@/components/container";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Lock, Mail,User } from "lucide-react";
import Link from "next/link";

export default function SignupPage() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    return (
        // Main container for the signup page, centers content both vertically and horizontally
        <div className="min-h-screen w-full flex items-center justify-center">
            <Container className="flex flex-col items-center justify-center w-full">
                <Card className="w-full md:w-5/12 max-w-2xl p-8 md:p-10 rounded-3xl shadow-2xl border border-primary/10 bg-card/90 backdrop-blur-lg mt-12">
                    <div className="text-center">
                        <h1 className="text-2xl md:text-3xl font-extrabold bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent mb-1 tracking-tight">
                            Sign Up
                        </h1>
                        <p className="text-base text-muted-foreground font-medium">
                            Create Your Account to start your journey with Mirage
                        </p>
                    </div>
                    {/* form component */}
                    <form className="space-y-6">
                        <div className="space-y-3">
                            {/* Name */}
                            <div>
                                <label
                                    htmlFor="name"
                                    className="block text-base font-semibold mb-1"
                                >
                                    Name
                                </label>
                                <div className="relative">
                                    {/* Name icon inside input */}
                                    <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-8 text-muted-foreground" />
                                    <Input
                                        id="name"
                                        type="text"
                                        placeholder="Enter your name"
                                        className="pl-12 py-2 text-base rounded-full bg-card bg-opacity-80 border border-primary focus:outline-none focus:ring-2 focus:ring-primary text-black placeholder:text-muted-foreground"
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                        required
                                    />
                                </div>
                            </div>
                            {/* Email */}
                            <div>
                                <label
                                    htmlFor="email"
                                    className="block text-base font-semibold mb-1"
                                >
                                    Email
                                </label>
                                <div className="relative">
                                    {/* Email icon inside input */}
                                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-8 text-muted-foreground" />
                                    <Input
                                        id="email"
                                        type="email"
                                        placeholder="Enter your email"
                                        className="pl-12 py-2 text-base rounded-full bg-card bg-opacity-80 border border-primary focus:outline-none focus:ring-2 focus:ring-primary text-black placeholder:text-muted-foreground"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        required
                                    />
                                </div>
                            </div>
                            {/* Password */}
                            <div>
                                <label
                                    htmlFor="password"
                                    className="block text-base font-semibold mb-1"
                                >
                                    Password
                                </label>
                                <div className="relative">
                                    {/* Password icon inside input */}
                                    <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-8 text-muted-foreground" />
                                    <Input
                                        id="password"
                                        type="password"
                                        placeholder="Enter your password"
                                        className="pl-12 py-2 text-base rounded-full bg-card bg-opacity-80 border border-primary focus:outline-none focus:ring-2 focus:ring-primary text-black placeholder:text-muted-foreground"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        required
                                    />
                                </div>
                            </div>
                            {/* Confirm Password */}
                            <div>
                                <label
                                    htmlFor="confirmPassword"
                                    className="block text-base font-semibold mb-1"
                                >
                                    Confirm Password
                                </label>
                                <div className="relative">
                                    {/* Confirm Password icon inside input */}
                                    <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-8 text-muted-foreground" />
                                    <Input
                                        id="confirmPassword"
                                        type="password"
                                        placeholder="Re-Enter your password"
                                        className="pl-12 py-2 text-base rounded-full bg-card bg-opacity-80 border border-primary focus:outline-none focus:ring-2 focus:ring-primary text-black placeholder:text-muted-foreground"
                                        value={confirmPassword}
                                        onChange={(e) => setConfirmPassword(e.target.value)}
                                        required
                                    />
                                </div>
                            </div>
                        </div>
                        {/* Sign Up button */}
                        <Button
                            className="w-full py-2 text-base rounded-full font-bold bg-gradient-to-r from-primary to-primary/80"
                            size="lg"
                            type="button"
                        >
                            Sign Up
                        </Button>
                    </form>
                    {/* Extra navigation links below the form */}
                    <div className="flex items-center justify-center gap-2 text-sm mt-4">
                        {/* Link to sign in page */}
                        <span className="text-muted-foreground">
                            Already have an account?
                        </span>
                        <Link
                            href="/login"
                            className="text-primary font-semibold underline"
                        >
                            Sign in
                        </Link>
                        <span className="text-muted-foreground">•</span>
                        {/* Link to forgot password page */}
                        <Link
                            href="/forgot-password"
                            className="text-primary underline"
                        >
                            Forgot password?
                        </Link>
                    </div>
                </Card>
            </Container>
        </div>
    );
}