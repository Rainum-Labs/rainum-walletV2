import { Badge } from "@/components/ui/badge";
import type { TransactionPreview } from "@/lib/api/types";

type TransactionsTableProps = {
  transactions: TransactionPreview[];
};

const StatusTone: Record<TransactionPreview["status"], Parameters<typeof Badge>[0]["tone"]> = {
  pending: "amber",
  finalized: "aqua",
  failed: "critical",
};

export function TransactionsTable({ transactions }: TransactionsTableProps) {
  return (
    <div className="overflow-hidden rounded-3xl border border-white/10 bg-slate-900/50">
      <table className="min-w-full text-left text-sm text-white/70">
        <thead className="bg-white/5 text-xs uppercase tracking-wide text-white/50">
          <tr>
            <th className="px-6 py-4 font-medium">Hash</th>
            <th className="px-6 py-4 font-medium">Fra → Til</th>
            <th className="px-6 py-4 font-medium">Beløb</th>
            <th className="px-6 py-4 font-medium">VM / Privacy</th>
            <th className="px-6 py-4 font-medium text-right">Status</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((tx) => (
            <tr key={tx.hash} className="border-t border-white/5">
              <td className="px-6 py-4 font-mono text-xs text-white/60">
                {tx.hash}
              </td>
              <td className="px-6 py-4">
                <div className="flex flex-col gap-1">
                  <span className="font-mono text-xs text-white/70">{tx.from}</span>
                  <span className="font-mono text-xs text-white/40">{tx.to}</span>
                </div>
              </td>
              <td className="px-6 py-4 text-white">
                {tx.amount.toLocaleString(undefined, { maximumFractionDigits: 2 })}
              </td>
              <td className="px-6 py-4">
                <div className="flex flex-col gap-1 text-xs text-white/60">
                  <span>{tx.vmType.toUpperCase()}</span>
                  <span>Privacy: {tx.privacyLevel}</span>
                </div>
              </td>
              <td className="px-6 py-4 text-right">
                <Badge tone={StatusTone[tx.status]}>{tx.status}</Badge>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
