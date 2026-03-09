type ClassValue = string | false | null | undefined;

export const cx = (...values: ClassValue[]) => values.filter(Boolean).join(" ");

type ButtonVariant = "default" | "outline" | "secondary";
type ButtonSize = "default" | "sm" | "lg" | "icon";
type BadgeVariant = "default" | "secondary" | "outline";

const BUTTON_BASE =
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 ring-offset-background";

const BUTTON_VARIANTS: Record<ButtonVariant, string> = {
  default: "bg-primary text-primary-foreground hover:bg-primary/90",
  outline:
    "border border-input bg-background hover:bg-secondary hover:text-secondary-foreground",
  secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80"
};

const BUTTON_SIZES: Record<ButtonSize, string> = {
  default: "h-10 px-4 py-2",
  sm: "h-9 px-3",
  lg: "h-11 px-6",
  icon: "h-10 w-10"
};

export function buttonClass({
  variant = "default",
  size = "default",
  className
}: {
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
} = {}) {
  return cx(BUTTON_BASE, BUTTON_VARIANTS[variant], BUTTON_SIZES[size], className);
}

const BADGE_BASE =
  "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-medium transition-colors";

const BADGE_VARIANTS: Record<BadgeVariant, string> = {
  default: "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",
  secondary: "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",
  outline: "border-border/60 bg-transparent text-foreground hover:bg-secondary/80"
};

export function badgeClass({
  variant = "default",
  className
}: {
  variant?: BadgeVariant;
  className?: string;
} = {}) {
  return cx(BADGE_BASE, BADGE_VARIANTS[variant], className);
}

export function cardClass(className?: string) {
  return cx(
    "rounded-xl border border-border/60 bg-card text-card-foreground shadow-soft",
    className
  );
}

export const cardHeaderClass = "flex flex-col space-y-1.5 p-6";
export const cardTitleClass = "text-lg font-semibold leading-none tracking-tight";
export const cardDescriptionClass = "text-sm text-muted-foreground";
export const cardContentClass = "p-6 pt-0";
export const cardFooterClass = "flex items-center p-6 pt-0";
