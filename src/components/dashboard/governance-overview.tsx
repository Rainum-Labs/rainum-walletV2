import { CalendarClock, Users } from "lucide-react";
import type { GovernanceProposal } from "@/lib/api/types";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

type GovernanceOverviewProps = {
  proposals: GovernanceProposal[];
};

const statusTone: Record<GovernanceProposal["status"], "aqua" | "amber" | "neutral" | "critical"> =
  {
    Voting: "amber",
    Passed: "aqua",
    Rejected: "critical",
    Executed: "neutral",
  };

export function GovernanceOverview({ proposals }: GovernanceOverviewProps) {
  return (
    <Card padding="sm" className="space-y-4">
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-lg font-semibold text-white">Governance Radar</h3>
          <p className="text-sm text-white/60">
            Delegér stemmer og følg execution queue i realtid.
          </p>
        </div>
        <Badge tone="violet">Delegationsaktiv</Badge>
      </div>
      <div className="space-y-3">
        {proposals.map((proposal) => (
          <div
            key={proposal.id}
            className="flex flex-col gap-3 rounded-2xl border border-white/10 bg-slate-900/50 p-4 md:flex-row md:items-center md:justify-between"
          >
            <div className="space-y-1">
              <div className="flex items-center gap-2 text-xs uppercase tracking-wide text-white/50">
                <Users className="h-3.5 w-3.5" />
                {proposal.category}
              </div>
              <h4 className="text-base font-semibold text-white">
                {proposal.title}
              </h4>
              <p className="text-xs text-white/50">
                {proposal.votesFor}% for / {proposal.votesAgainst}% imod — quorum{" "}
                {proposal.quorum}%
              </p>
            </div>
            <div className="flex items-center gap-3 md:text-right">
              <div className="space-y-1 text-xs text-white/50">
                <div className="inline-flex items-center gap-2">
                  <CalendarClock className="h-3.5 w-3.5" />
                  {proposal.status === "Voting"
                    ? `Slutter ${new Date(proposal.votingEndsAt).toLocaleString()}`
                    : `Proposer ${proposal.proposer}`}
                </div>
                <p>Proposal #{proposal.id}</p>
              </div>
              <Badge tone={statusTone[proposal.status]}>{proposal.status}</Badge>
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
}
