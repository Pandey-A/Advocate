// import { NAV_LINKS } from "@/constants";
import Link from "next/link";
import Icons from "../global/icons";
import Wrapper from "../global/wrapper";
import { Button } from "../ui/button";
import MobileMenu from "./mobile-menu";
import { NAV_LINKS } from "@/constants";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { ChevronDownIcon } from "lucide-react";

const Navbar = () => {
  return (
    <header className="sticky top-0 w-full h-16 bg-background/80 backdrop-blur-sm z-50">
      <Wrapper className="h-full">
        <div className="flex items-center justify-between h-full">
          <div className="flex items-center">
            <Link href="/" className="flex items-center gap-2">
              <Icons.icon className="w-6" />
              <span className="text-xl font-semibold">Advocate AI</span>
            </Link>
          </div>

          <div className="hidden lg:flex items-center gap-4">
            <ul className="flex items-center gap-8">
              {NAV_LINKS.map((link, index) => (
                <li key={index} className="text-sm font-medium">
                  {link.name === "Features" ? (
                    <DropdownMenu>
                      <DropdownMenuTrigger className="flex items-center gap-1 hover:text-blue-600 transition-colors">
                        {link.name}
                        <ChevronDownIcon className="w-4 h-4" />
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="start" className="w-56">
                        <DropdownMenuItem asChild>
                          <Link href="#legal-research" className="flex flex-col items-start p-2">
                            <span className="font-medium">AI Legal Research</span>
                            <span className="text-sm text-muted-foreground">Research case law and precedents</span>
                          </Link>
                        </DropdownMenuItem>
                        <DropdownMenuItem asChild>
                          <Link href="#case-analytics" className="flex flex-col items-start p-2">
                            <span className="font-medium">Case Analytics</span>
                            <span className="text-sm text-muted-foreground">Analyze case patterns and trends</span>
                          </Link>
                        </DropdownMenuItem>
                        <DropdownMenuItem asChild>
                          <Link href="#document-management" className="flex flex-col items-start p-2">
                            <span className="font-medium">Document Management</span>
                            <span className="text-sm text-muted-foreground">Organize legal documents efficiently</span>
                          </Link>
                        </DropdownMenuItem>
                        <DropdownMenuItem asChild>
                          <Link href="#case-tracking" className="flex flex-col items-start p-2">
                            <span className="font-medium">Real-Time Case Tracking</span>
                            <span className="text-sm text-muted-foreground">Monitor case progress and deadlines</span>
                          </Link>
                        </DropdownMenuItem>
                        <DropdownMenuItem asChild>
                          <Link href="#legal-assistant" className="flex flex-col items-start p-2">
                            <span className="font-medium">Intelligent Legal Assistant</span>
                            <span className="text-sm text-muted-foreground">AI-powered legal assistance</span>
                          </Link>
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  ) : (
                    <Link href={link.href} className="hover:text-blue-600 transition-colors">
                      {link.name}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          <div className="flex items-center gap-4">
            <Link href="/" className="hidden lg:block">
              <Button variant="blue">Get Started</Button>
            </Link>
            <MobileMenu />
          </div>
        </div>
      </Wrapper>
    </header>
  );
};

export default Navbar;
