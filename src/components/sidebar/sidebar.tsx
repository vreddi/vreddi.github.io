import {
  Sidebar as SidebarShadCN,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
  SidebarGroupLabel,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
} from "@/components/_shadcn/ui/sidebar";
import { Calendar, Home, Inbox, Search, Settings } from "lucide-react";
import Link from "next/link";
import { getConnections, getGuides, getProjects } from "./sidebar.utils";
import React from "react";
import Image from "next/image";

// Menu items.
const items = [
  {
    title: "Home",
    url: "#",
    icon: Home,
  },
  {
    title: "Inbox",
    url: "#",
    icon: Inbox,
  },
  {
    title: "Calendar",
    url: "#",
    icon: Calendar,
  },
  {
    title: "Search",
    url: "#",
    icon: Search,
  },
  {
    title: "Settings",
    url: "#",
    icon: Settings,
  },
];

export function Sidebar() {
  return (
    <SidebarShadCN className="transition-colors duration-300">
      <SidebarHeader>
        <Link href="/" className="flex flex-row items-center">
          <div>
            <div
              className="bg-cover bg-center bg-[position:center_9%] bg-[size:74%] h-10 w-10 md:h-14 md:w-14 rounded-full transition-all duration-300
                    bg-[url('../../public/memoji-light.png')] hover:bg-[url('../../public/memoji-wink-light.png')]
                    dark:bg-[url('../../public/memoji-dark.png')] dark:hover:bg-[url('../../public/memoji-wink-dark.png')]"
            />
          </div>
          <div className="flex flex-1 ml-2 md:ml-4 text-sm md:text-lg font-light text-apple-text-light dark:text-apple-text-dark relative transition-colors duration-300">
            <span className="animate-text-reveal">Vishrut Reddi</span>
          </div>
        </Link>
      </SidebarHeader>
      <SidebarContent>
        {/* About me */}
        <SidebarGroup>
          <SidebarGroupLabel className="text-[16px] antialiased">
            About me
          </SidebarGroupLabel>
          <SidebarGroupContent className="antialiased ml-2 mr-2">
            I'm Vishrut, a software engineer by day, guitarist by night. Turning
            coffee into code and ideas into melodies. 🎸
          </SidebarGroupContent>
        </SidebarGroup>

        {/* Connections */}
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarGroupLabel className="text-[16px] antialiased">
              Connections
            </SidebarGroupLabel>
            <SidebarMenu>
              {getConnections().map((connection) => (
                <SidebarMenuItem key={connection.title}>
                  <SidebarMenuButton asChild>
                    <a href={connection.link}>
                      <Image
                        src={connection.icon}
                        alt={connection.title}
                        width={16}
                        height={16}
                        className="h-4 w-4"
                      />
                      <span>{connection.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        {/* Articles */}
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarGroupLabel className="text-[16px] antialiased">
              Articles
            </SidebarGroupLabel>
            <SidebarMenu>
              {[].map((guide: any) => (
                <SidebarMenuItem key={guide.id}>
                  <SidebarMenuButton asChild>
                    <a href={""}>
                      <Image
                        src={guide.icon}
                        alt={guide.title}
                        width={16}
                        height={16}
                        className="h-4 w-4"
                      />
                      <span>{guide.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        {/* Guides */}
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarGroupLabel className="text-[16px] antialiased">
              Guides
            </SidebarGroupLabel>
            <SidebarMenu>
              {getGuides().map((guide) => (
                <SidebarMenuItem key={guide.id}>
                  <SidebarMenuButton asChild>
                    <a href={""}>
                      <Image
                        src={guide.icon}
                        alt={guide.title}
                        width={16}
                        height={16}
                        className="h-4 w-4"
                      />
                      <span>{guide.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        {/* Projects */}
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarGroupLabel className="text-[16px] antialiased">
              Projects
            </SidebarGroupLabel>
            <SidebarMenu>
              {getProjects().map((project) => (
                <SidebarMenuItem key={project.id}>
                  <SidebarMenuButton asChild>
                    <a href={""}>
                      <Image
                        src={project.icon}
                        alt={project.title}
                        width={16}
                        height={16}
                        className="h-4 w-4"
                      />
                      <span>{project.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter />
    </SidebarShadCN>
  );
}

Sidebar.displayName = "Sidebar";
