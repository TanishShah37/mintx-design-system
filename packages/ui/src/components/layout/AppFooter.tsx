import React from "react";
import { cn } from "../../tokens/cn";
import { Box } from "../ui/Box";
import { Stack } from "../ui/Stack";
import { Link } from "../ui/Link";
import { Divider } from "../ui/Divider";
import { MintxLogo } from "./MintxLogo";
import { Github, Twitter, Linkedin, Mail } from "lucide-react";

export interface AppFooterProps {
  className?: string;
}

export const AppFooter: React.FC<AppFooterProps> = ({
  className,
}) => {
  return (
    <footer className={cn("w-full border-t border-border bg-background py-12", className)}>
      <Box className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <Stack gap={4}>
            <MintxLogo className="h-8" />
            <p className="text-sm text-muted-foreground leading-relaxed">
              Mintx is a next-generation decentralized trading platform designed for the future of digital finance. Secure, fast, and completely transparent.
            </p>
            <Stack direction="row" gap={3}>
              <Link href="#" className="p-2 bg-muted rounded-xl hover:bg-muted/80 transition-colors">
                <Twitter size={18} />
              </Link>
              <Link href="#" className="p-2 bg-muted rounded-xl hover:bg-muted/80 transition-colors">
                <Github size={18} />
              </Link>
              <Link href="#" className="p-2 bg-muted rounded-xl hover:bg-muted/80 transition-colors">
                <Linkedin size={18} />
              </Link>
            </Stack>
          </Stack>

          <Stack gap={4}>
            <h4 className="font-bold text-sm uppercase tracking-wider">Platform</h4>
            <Stack gap={2}>
              <Link variant="muted" href="#">Exchange</Link>
              <Link variant="muted" href="#">Markets</Link>
              <Link variant="muted" href="#">Wallets</Link>
              <Link variant="muted" href="#">Security</Link>
            </Stack>
          </Stack>

          <Stack gap={4}>
            <h4 className="font-bold text-sm uppercase tracking-wider">Company</h4>
            <Stack gap={2}>
              <Link variant="muted" href="#">About Us</Link>
              <Link variant="muted" href="#">Careers</Link>
              <Link variant="muted" href="#">Press Kit</Link>
              <Link variant="muted" href="#">Privacy Policy</Link>
            </Stack>
          </Stack>

          <Stack gap={4}>
            <h4 className="font-bold text-sm uppercase tracking-wider">Support</h4>
            <Stack gap={2}>
              <Link variant="muted" href="#">Help Center</Link>
              <Link variant="muted" href="#">API Documentation</Link>
              <Link variant="muted" href="#">Contact Us</Link>
              <Link variant="muted" href="#">Status Page</Link>
            </Stack>
          </Stack>
        </div>

        <Divider className="my-10" />

        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Mintx Labs Inc. All rights reserved.
          </p>
          <Stack direction="row" gap={6}>
            <Link href="#" className="text-xs text-muted-foreground hover:text-foreground">Cookies</Link>
            <Link href="#" className="text-xs text-muted-foreground hover:text-foreground">Terms of Service</Link>
            <Link href="#" className="text-xs text-muted-foreground hover:text-foreground">Regulatory Disclosures</Link>
          </Stack>
        </div>
      </Box>
    </footer>
  );
};
