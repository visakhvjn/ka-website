import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <section className="flex min-h-[60vh] items-center py-20">
      <Container className="text-center">
        <p className="text-6xl font-bold text-brand">404</p>
        <h1 className="mt-4 text-2xl font-bold text-brand">
          Page not found
        </h1>
        <p className="mt-2 text-muted">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <div className="mt-8 flex justify-center gap-4">
          <Button href="/">Go home</Button>
          <Button href="/contact" variant="outline">
            Contact us
          </Button>
        </div>
      </Container>
    </section>
  );
}
