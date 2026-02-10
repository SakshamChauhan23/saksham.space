import Link from "next/link";

export default function NotFound() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-background">
            <div className="text-center px-6">
                {/* 404 Number */}
                <h1 className="text-8xl md:text-9xl font-bold gradient-text mb-4">
                    404
                </h1>

                {/* Message */}
                <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-4">
                    Page Not Found
                </h2>
                <p className="text-muted max-w-md mx-auto mb-8">
                    The page you&apos;re looking for doesn&apos;t exist or has been moved.
                    Let&apos;s get you back on track.
                </p>

                {/* Actions */}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <Link
                        href="/"
                        className="px-6 py-3 bg-accent text-white rounded-full font-medium hover:bg-accent-hover transition-colors"
                    >
                        Go Home
                    </Link>
                    <Link
                        href="/about"
                        className="px-6 py-3 border-2 border-foreground text-foreground rounded-full font-medium hover:bg-foreground hover:text-background transition-colors"
                    >
                        About Me
                    </Link>
                </div>
            </div>
        </div>
    );
}
