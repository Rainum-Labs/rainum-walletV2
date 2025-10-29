import type { ReactNode } from "react";
import { AppShell } from "@/components/layout/app-shell";
import { DashboardSidebar } from "@/components/dashboard/sidebar";
import { DashboardTopbar } from "@/components/dashboard/topbar";
import { demoAlerts } from "@/data/demo-dashboard";

const DEFAULT_ADDRESS = "0xRAINUMFOUNDERSAFE";

export default function AppLayout({ children }: { children: ReactNode }) {
  return (
    <AppShell
      sidebar={<DashboardSidebar />}
      topbar={
        <DashboardTopbar
          address={DEFAULT_ADDRESS}
          alerts={demoAlerts.filter((alert) => !alert.resolved).length}
        />
      }
    >
      {children}
    </AppShell>
  );
}
