import * as React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export type Service = {
  title: string;
  description: string;
  tags: string[];
  category: "Web" | "Backend" | "Data" | "Soft Skill";
};

type Props = {
  services: Service[];
  stack?: string[];
  initialFilter?: "All" | "Web" | "Backend" | "Data" | "Soft Skill";
};

const FILTERS: Array<Props["initialFilter"]> = [
  "All",
  "Web",
  "Backend",
  "Data",
  "Soft Skill",
];

export default function ServicesWithFilter({
  services,
  stack = [],
  initialFilter = "All",
}: Props) {
  const [active, setActive] =
    React.useState<Props["initialFilter"]>(initialFilter);

  const filtered =
    active === "All" ? services : services.filter((s) => s.category === active);

  return (
    <div className="space-y-8">
      {/* Filter chips */}
      <div className="flex flex-wrap items-center gap-2">
        {FILTERS.map((f) => {
          const isActive = f === active;
          return (
            <Button
              key={f}
              type="button"
              variant={isActive ? "default" : "secondary"}
              size="sm"
              className="rounded-full"
              aria-pressed={isActive}
              onClick={() => setActive(f)}
            >
              {f}
            </Button>
          );
        })}

        <span className="ml-1 text-xs text-muted-foreground">
          {filtered.length} layanan
        </span>
      </div>

      {/* Services grid */}
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {filtered.map((service, idx) => (
          <Card
            key={`${service.title}-${idx}`}
            className="group h-full overflow-hidden border-border/60 bg-card/70 transition hover:-translate-y-0.5 hover:bg-card hover:shadow-sm"
          >
            <CardHeader className="space-y-3">
              <div className="flex items-start justify-between gap-3">
                <CardTitle className="text-lg">{service.title}</CardTitle>

                <span className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-border/60 bg-background/70 text-xs text-muted-foreground">
                  {String(idx + 1).padStart(2, "0")}
                </span>
              </div>

              <CardDescription className="leading-relaxed">
                {service.description}
              </CardDescription>
            </CardHeader>

            <CardContent className="space-y-3">
              <div className="flex flex-wrap gap-2">
                {service.tags.map((item) => (
                  <Badge key={item} variant="outline" className="rounded-full">
                    {item}
                  </Badge>
                ))}
              </div>

              <div className="pt-1">
                <Badge variant="secondary" className="rounded-full">
                  {service.category}
                </Badge>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Tech Stack (optional) */}
      {stack.length > 0 && (
        <div className="relative overflow-hidden rounded-2xl border border-border/60 bg-card/70 p-6">
          <div
            aria-hidden="true"
            className="absolute -right-24 -top-24 h-56 w-56 rounded-full bg-primary/10 blur-3xl"
          />
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div className="space-y-1">
              <p className="text-sm font-semibold text-foreground">
                Keahlian Utama
              </p>
              <p className="text-sm text-muted-foreground">
                Kombinasi tool dan soft skill yang paling sering dipakai.
              </p>
            </div>

            <div className="flex flex-wrap gap-2">
              {stack.map((item) => (
                <Badge key={item} className="rounded-full">
                  {item}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
