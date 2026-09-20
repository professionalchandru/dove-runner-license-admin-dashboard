import type { LicensesPageLayoutProps } from "./types";

export function LicensesPageLayout({
  children,
  panel,
}: LicensesPageLayoutProps) {
  return (
    <div className="min-h-screen bg-muted/30">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-3 px-6 py-3">
        {children}
      </div>
      {panel}
    </div>
  );
}
