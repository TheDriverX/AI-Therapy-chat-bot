'use client';
import { Container } from "@/components/container";

export default function DashboardPage() {
    return (
        <div className="min-h-screen bg-background flex ">
            <Container className="pt-20 pb-8 flex flex-col ">
                <h1 className="text-3xl font-bold mb-100 ">Welcome</h1>
            </Container>
        </div>
    );
}