import { cn } from "@/lib/utils";

type Props = {
  title: string;

  className?: string;
};

export default function PageTitle({ title, className }: Props) {
  return <h1 className={cn("text-2xl fonts-semibold", className)}>{title}</h1>;
}
