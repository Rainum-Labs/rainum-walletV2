import { demoAlerts, demoMetrics, demoWalletSnapshot } from "@/data/demo-dashboard";
import { PortfolioSummary } from "@/components/dashboard/portfolio-summary";
import { NetworkHealth } from "@/components/dashboard/network-health";
import { BridgeOverview } from "@/components/dashboard/bridge-overview";
import { GovernanceOverview } from "@/components/dashboard/governance-overview";
import { AlertCenter } from "@/components/dashboard/alert-center";
import { TransactionsTable } from "@/components/dashboard/transactions-table";

export default function DashboardPage() {
  const wallet = demoWalletSnapshot;
  const metrics = demoMetrics;

  return (
    <div className="flex flex-col gap-6">
      <PortfolioSummary snapshot={wallet} />
      <NetworkHealth metrics={metrics} />
      <BridgeOverview transfers={wallet.bridgeTransfers} />
      <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        <GovernanceOverview proposals={wallet.governance} />
        <AlertCenter alerts={demoAlerts} />
      </div>
      <TransactionsTable transactions={wallet.recentTransactions} />
    </div>
  );
}
