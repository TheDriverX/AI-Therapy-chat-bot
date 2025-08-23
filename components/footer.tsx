export function Footer() {
    return (
        <footer className="border-t py-6">
            <div className="container flex flex-col items-center gap-4 md:px-6">
                <p
                  className="w-full text-sm text-muted-foreground text-center"
                  style={{
                    position: "relative",
                    left: "135px",
                    width: "fit-content",
                  }}
                >
                  © 2025 Mirage All rights reserved.
                </p>
            </div>
        </footer>
    );
}