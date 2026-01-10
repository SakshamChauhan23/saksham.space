export default function Loading() {
    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-background">
            <div className="relative">
                {/* Spinner */}
                <div className="w-12 h-12 rounded-full border-4 border-border border-t-accent animate-spin" />

                {/* Pulse glow */}
                <div className="absolute inset-0 w-12 h-12 rounded-full bg-accent/20 animate-ping" />
            </div>
        </div>
    );
}
