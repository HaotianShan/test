import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuContent,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import {
  MenuIcon,
  CreditCard,
  Globe,
  LinkIcon,
  LayoutTemplate,
  ShoppingCart,
  Code,
  Terminal,
  Shield,
  BarChart,
  Building,
  Rocket,
  ShoppingBag,
  Box,
  Store,
  LayoutGrid,
  Users,
  HeartHandshake,
  FileText,
  BookOpen,
  Film,
  Briefcase,
  Newspaper,
  Book,
  Handshake,
  PlayCircle,
  HelpCircle,
  Calendar,
  Phone,
} from "lucide-react";

const NavBar = () => {
  const navItems = [
    {
      name: "Products",
      href: "/products",
      dropdown: [
        {
          title: "Global payments",
          items: [
            {
              name: "Payments",
              description: "Online payments",
              icon: CreditCard,
            },
            {
              name: "Payment Links",
              description: "Shareable payment links",
              icon: LinkIcon,
            },
          ],
        },
        {
          title: "No-code payments",
          items: [
            {
              name: "Checkout",
              description: "Prebuilt payment form",
              icon: LayoutTemplate,
            },
          ],
        },
        {
          title: "Flexible UI components",
          items: [
            {
              name: "Elements",
              description: "Customizable UI components",
              icon: Code,
            },
          ],
        },
        {
          title: "In-person payments",
          items: [
            {
              name: "Terminal",
              description: "Hardware for in-store",
              icon: Terminal,
            },
          ],
        },
        {
          title: "Security & optimization",
          items: [
            { name: "Radar", description: "Fraud prevention", icon: Shield },
            {
              name: "Authorization",
              description: "Acceptance optimizations",
              icon: BarChart,
            },
          ],
        },
      ],
    },
    {
      name: "Solutions",
      href: "/solutions",
      dropdown: [
        {
          title: "By stage",
          items: [
            { name: "Enterprises", icon: Building },
            { name: "Startups", icon: Rocket },
          ],
        },
        {
          title: "By business model",
          items: [
            { name: "Ecommerce", icon: ShoppingBag },
            { name: "SaaS", icon: Box },
            { name: "Retail", icon: Store },
            { name: "Platforms", icon: LayoutGrid },
            { name: "Marketplaces", icon: Users },
            { name: "Nonprofits", icon: HeartHandshake },
          ],
        },
        {
          title: "By use case",
          items: [
            { name: "Finance automation", icon: FileText },
            { name: "Embedded finance", icon: BookOpen },
            { name: "Global businesses", icon: Globe },
            { name: "Crypto", icon: Terminal },
            { name: "Creator economy", icon: Film },
            { name: "AI companies", icon: Code },
          ],
        },
      ],
    },
    {
      name: "Developers",
      href: "/developers",
      dropdown: [
        {
          title: "Documentation",
          items: [
            {
              name: "Get started",
              description: "Start integrating Stripe",
              icon: Rocket,
            },
            { name: "Prebuilt checkout", icon: ShoppingCart },
            { name: "Libraries and SDKs", icon: Code },
            { name: "App integrations", icon: LayoutGrid },
            { name: "Code samples", icon: Terminal },
          ],
        },
        {
          title: "Guides",
          items: [
            { name: "Accept online payments", icon: CreditCard },
            { name: "Manage subscriptions", icon: Calendar },
            { name: "Send payments", icon: Handshake },
            { name: "Set up in-person payments", icon: Terminal },
          ],
        },
      ],
    },
    {
      name: "Resources",
      href: "/resources",
      dropdown: [
        {
          title: "Support",
          items: [
            { name: "Support center", icon: HelpCircle },
            { name: "Support plans", icon: Shield },
          ],
        },
        {
          title: "Learning",
          items: [
            { name: "Guides", icon: BookOpen },
            { name: "Customer stories", icon: Users },
            { name: "Blog", icon: Newspaper },
            { name: "Sessions", icon: PlayCircle },
          ],
        },
        {
          title: "Company",
          items: [
            { name: "Contact sales", icon: Phone },
            { name: "Jobs", icon: Briefcase },
            { name: "Newsroom", icon: Newspaper },
            { name: "Stripe Press", icon: Book },
            { name: "Become a partner", icon: Handshake },
          ],
        },
      ],
    },
    { name: "Pricing", href: "/pricing" },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-white/80 backdrop-blur-md">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        {/* Logo */}
        <Link href="/">
          <div className="font-bold text-2xl">Stripe</div>
        </Link>
        {/* Desktop Navigation */}
        <NavigationMenu className="hidden md:flex">
          <NavigationMenuList>
            {navItems.map((item) => (
              <NavigationMenuItem key={item.name}>
                {item.dropdown ? (
                  <>
                    <NavigationMenuTrigger className="bg-transparent flex items-center gap-2 text-gray-800 hover:text-gray-600 [&>svg]:h-4 [&>svg]:w-4">
                      {item.name}
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <div className="grid grid-cols-3 gap-1 p-6 w-[800px]">
                        {item.dropdown.map((section, sectionIndex) => (
                          <div key={sectionIndex} className="space-y-4">
                            <h4 className="text-sm font-medium text-gray-500">
                              {section.title}
                            </h4>
                            <ul className="space-y-2">
                              {section.items.map((subItem, itemIndex) => (
                                <li key={itemIndex}>
                                  <NavigationMenuLink asChild>
                                    <a
                                      href="#"
                                      className="flex items-start p-2 rounded-md hover:bg-gray-50 transition-colors"
                                    >
                                      <div className="flex-shrink-0 mt-1 mr-3 text-gray-400">
                                        <subItem.icon className="h-5 w-5" />
                                      </div>
                                      <div>
                                        <div className="font-medium text-gray-900">
                                          {subItem.name}
                                        </div>
                                        {subItem.description && (
                                          <div className="text-sm text-gray-500 mt-1">
                                            {subItem.description}
                                          </div>
                                        )}
                                      </div>
                                    </a>
                                  </NavigationMenuLink>
                                </li>
                              ))}
                            </ul>
                            {sectionIndex < item.dropdown.length - 1 && (
                              <div className="border-t border-gray-200 my-4"></div>
                            )}
                          </div>
                        ))}
                      </div>
                    </NavigationMenuContent>
                  </>
                ) : (
                  <Link href={item.href} legacyBehavior passHref>
                    <NavigationMenuLink
                      className={`${navigationMenuTriggerStyle()} bg-transparent text-gray-800 hover:text-gray-600 transition-colors`}
                    >
                      {item.name}
                    </NavigationMenuLink>
                  </Link>
                )}
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>
        {/* Right Buttons */}
        <div className="hidden items-center space-x-2 md:flex">
          <Button variant="ghost" asChild>
            <Link href="/signin">Sign in</Link>
          </Button>
          <Button asChild>
            <Link href="/start">Get started</Link>
          </Button>
        </div>

        {/* Mobile Menu */}
        <Sheet>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="outline" size="icon">
              <MenuIcon className="h-5 w-5" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[300px] sm:w-[400px]">
            <div className="mt-8 flex flex-col space-y-4">
              {navItems.map((item) => (
                <div key={item.name}>
                  <Button
                    variant="ghost"
                    className="justify-start text-left w-full"
                    asChild
                  >
                    <Link href={item.href}>{item.name}</Link>
                  </Button>
                  {item.dropdown && (
                    <div className="ml-4 mt-2 space-y-2 border-l border-gray-200 pl-4">
                      {item.dropdown
                        .flatMap((section) => section.items)
                        .map((subItem, index) => (
                          <Button
                            key={index}
                            variant="ghost"
                            className="justify-start text-left w-full"
                            asChild
                          >
                            <Link href="#">
                              <div className="flex items-center">
                                <subItem.icon className="mr-2 h-4 w-4 text-gray-500" />
                                {subItem.name}
                              </div>
                            </Link>
                          </Button>
                        ))}
                    </div>
                  )}
                </div>
              ))}
              <div className="mt-8 flex flex-col space-y-2">
                <Button variant="outline" asChild>
                  <Link href="/signin">Sign in</Link>
                </Button>
                <Button asChild>
                  <Link href="/start">Get started</Link>
                </Button>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
};

export default NavBar;
