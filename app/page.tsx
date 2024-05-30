import Header from "@/app/components/header";
import ChatSection from "./components/chat-section";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center gap-4 md:gap-6 lg:gap-8 p-4 md:p-12 lg:p-24  background-gradient">
      <Header />
      <ChatSection />
    </main>
  );
}
