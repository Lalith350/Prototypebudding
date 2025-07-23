export function Footer() {
  return (
    <footer className="border-t">
      <div className="container mx-auto py-6 px-4">
        <p className="text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} Human Village. A space for human-curated
          suggestions.
        </p>
      </div>
    </footer>
  );
}
