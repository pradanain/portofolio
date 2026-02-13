import * as React from "react";
import { Github, Instagram, Linkedin, Mail } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

export type SocialKey = "email" | "linkedin" | "github" | "instagram";

export type SocialLink = {
  key: SocialKey;
  label: string;
  href: string;
};

type RoleRotatorProps = {
  roles: string[];
  interval?: number;
  socials?: SocialLink[];
};

const iconMap: Record<SocialKey, React.ElementType> = {
  email: Mail,
  linkedin: Linkedin,
  github: Github,
  instagram: Instagram
};

export default function RoleRotator({
  roles,
  interval = 2500,
  socials = []
}: RoleRotatorProps) {
  const [index, setIndex] = React.useState(0);
  const role = roles[index] ?? roles[0];

  React.useEffect(() => {
    if (roles.length <= 1) return;
    const id = window.setInterval(() => {
      setIndex((prev) => (prev + 1) % roles.length);
    }, interval);
    return () => window.clearInterval(id);
  }, [roles, interval]);

  return (
    <div className="flex flex-col gap-4">
      <p className="text-base md:text-lg text-muted-foreground" aria-live="polite">
        {[role].map((item) => (
          <span key={item} className="role-swap text-gradient font-semibold">
            {item}
          </span>
        ))}
      </p>
      {socials.length ? (
        <TooltipProvider delayDuration={150}>
          <div className="flex items-center gap-3">
            {socials.map((social) => {
              const Icon = iconMap[social.key];
              return (
                <Tooltip key={social.href}>
                  <TooltipTrigger asChild>
                    <Button asChild variant="secondary" size="icon" aria-label={social.label}>
                      <a href={social.href} target="_blank" rel="noreferrer">
                        <Icon className="h-4 w-4" />
                      </a>
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>{social.label}</TooltipContent>
                </Tooltip>
              );
            })}
          </div>
        </TooltipProvider>
      ) : null}
    </div>
  );
}
