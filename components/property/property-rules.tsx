import { Info } from "lucide-react";

interface PropertyRulesProps {
  rules: string[];
}

export function PropertyRules({ rules }: PropertyRulesProps) {
  if (!rules || rules.length === 0) {
    return <p className="text-sm text-zinc-500">Standard rental lease rules apply.</p>;
  }

  return (
    <ul className="space-y-2">
      {rules.map((rule, idx) => (
        <li key={idx} className="flex items-start gap-2 text-sm text-zinc-600 dark:text-zinc-400">
          <Info className="mt-0.5 h-4 w-4 shrink-0 text-emerald-600 dark:text-emerald-400" />
          <span>{rule}</span>
        </li>
      ))}
    </ul>
  );
}
