import CallToAction from "./_components/call-to-action"
import DashboardSnippet from "./_components/dashboard-snippet"

export default function Home() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <div>
                <CallToAction />
                <DashboardSnippet />
            </div>
        </main>
    )
}
