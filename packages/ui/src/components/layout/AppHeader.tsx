import React from "react";
import { cn } from "../../tokens/cn";
import { Box } from "../ui/Box";
import { Stack } from "../ui/Stack";
import { Link } from "../ui/Link";
import { Button } from "../ui/Button";
import { MintxLogo } from "./MintxLogo";
import { Bell, Search, User } from "lucide-react";

export interface AppHeaderProps {
  className?: string;
  user?: { name: string; avatar?: string };
}

export const AppHeader: React.FC<AppHeaderProps> = ({
  className,
  user,
}) => {
  return (
    <header className={cn("sticky top-0 z-40 w-full border-b border-border bg-background/80 backdrop-blur-md", className)}>
      <Box className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Stack direction="row" align="center" gap={8}>
          <MintxLogo className="h-8" />
          <nav className="hidden md:flex items-center gap-6 ml-8">
            <Link href="/markets" className="text-sm font-medium">Markets</Link>
            <Link href="/trade" className="text-sm font-medium">Trade</Link>
            <Link href="/portfolio" className="text-sm font-medium">Portfolio</Link>
            <Link href="/discover" className="text-sm font-medium">Discover</Link>
          </nav>
        </Stack>

        <Stack direction="row" align="center" gap={4}>
          <div className="relative hidden lg:block group">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <input
              type="search"
              placeholder="Search assets..."
              className="h-9 w-64 rounded-xl border border-border bg-background px-9 py-2 text-sm transition-colors focus:outline-none focus:ring-2 focus:ring-primary/20"
            />
          </div>
          
          <Button variant="ghost" iconOnly className="h-9 w-9 rounded-xl">
            <Search className="h-5 w-5 lg:hidden" />
          </Button>

          <Button variant="ghost" iconOnly className="h-9 w-9 rounded-xl">
            <Bell className="h-5 w-5" />
          </Button>

          <div className="h-8 w-px bg-border mx-1" />

          {user ? (
            <Button variant="ghost" className="h-9 px-2 flex items-center gap-2 rounded-xl">
              <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center overflow-hidden">
                {user.avatar ? <img src={user.avatar} alt="" /> : <User className="h-4 w-4" />}
              </div>
              <span className="text-sm font-medium hidden sm:inline-block">{user.name}</span>
            </Button>
          ) : (
            <Button variant="primary" size="sm" className="rounded-xl px-6">
              Sign In
            </Button>
          )}
        </Stack>
      </Box>
    </header>
  );
};
