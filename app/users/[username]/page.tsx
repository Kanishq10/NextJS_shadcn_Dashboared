import CardList from "@/components/cardList";
import {
    Breadcrumb,
    BreadcrumbEllipsis,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"


import {
    HoverCard,
    HoverCardContent,
    HoverCardTrigger,
} from "@/components/ui/hover-card"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import Link from "next/link";
import { BadgeCheck, Candy, Citrus, Shield } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import EditUser from "@/components/EditUser";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import RadialChart from "@/components/RadialChart";

const SingleUserPage = () => {
    return (
        <div>
            <Breadcrumb>
                <BreadcrumbList>
                    <BreadcrumbItem>
                        <BreadcrumbLink asChild>
                            <Link href="/">Home</Link>
                        </BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator />
                    <BreadcrumbItem>
                        <DropdownMenu>
                            <DropdownMenuTrigger className="flex items-center gap-1">
                                <BreadcrumbEllipsis className="size-4" />
                                <span className="sr-only">Toggle menu</span>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="start">
                                <DropdownMenuItem>Documentation</DropdownMenuItem>
                                <DropdownMenuItem>Themes</DropdownMenuItem>
                                <DropdownMenuItem>GitHub</DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator />
                    <BreadcrumbItem>
                        <BreadcrumbLink asChild>
                            <Link href="/docs/components">Components</Link>
                        </BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator />
                    <BreadcrumbItem>
                        <BreadcrumbPage>Breadcrumb</BreadcrumbPage>
                    </BreadcrumbItem>
                </BreadcrumbList>
            </Breadcrumb>
            {/* Container */}
            <div className="mt-4 flex flex-col xl:flex-row gap-8">
                {/* LEFT */}
                <div className="w-full xl:w-1/3 space-y-6">
                    {/*User Badge  */}
                    <div className="bg-primary-foreground p-4 rounded-lg">
                        <h1 className="text-xl font-semibold">User Badges</h1>
                        <div className="flex gap-4 mt-4">
                            <HoverCard>
                                <HoverCardTrigger>
                                    <BadgeCheck
                                        size={36}
                                        className="rounded-full bg-blue-500/30 border border-blue-500/50 p-2"
                                    />
                                </HoverCardTrigger>
                                <HoverCardContent>
                                    <h1 className="font-bold mb-2">Verified User</h1>
                                    <p className="text-sm text-muted-foreground">
                                        This user has been verified by the admin.
                                    </p>
                                </HoverCardContent>
                            </HoverCard>
                            <HoverCard>
                                <HoverCardTrigger>
                                    <Shield
                                        size={36}
                                        className="rounded-full bg-green-800/30 border border-green-800/50 p-2"
                                    />
                                </HoverCardTrigger>
                                <HoverCardContent>
                                    <h1 className="font-bold mb-2">Admin</h1>
                                    <p className="text-sm text-muted-foreground">
                                        Admin users have access to all features and can manage
                                        users.
                                    </p>
                                </HoverCardContent>
                            </HoverCard>
                            <HoverCard>
                                <HoverCardTrigger>
                                    <Candy
                                        size={36}
                                        className="rounded-full bg-yellow-500/30 border border-yellow-500/50 p-2"
                                    />
                                </HoverCardTrigger>
                                <HoverCardContent>
                                    <h1 className="font-bold mb-2">Awarded</h1>
                                    <p className="text-sm text-muted-foreground">
                                        This user has been awarded for their contributions.
                                    </p>
                                </HoverCardContent>
                            </HoverCard>
                            <HoverCard>
                                <HoverCardTrigger>
                                    <Citrus
                                        size={36}
                                        className="rounded-full bg-orange-500/30 border border-orange-500/50 p-2"
                                    />
                                </HoverCardTrigger>
                                <HoverCardContent>
                                    <h1 className="font-bold mb-2">Popular</h1>
                                    <p className="text-sm text-muted-foreground">
                                        This user has been popular in the community.
                                    </p>
                                </HoverCardContent>
                            </HoverCard>
                        </div>
                    </div>

                    <div className="bg-primary-foreground p-4 rounded-lg">
                        <div className="flex justify-between">
                            <h1 className="text-xl font-semibold">User Information</h1>
                            <EditUser />
                        </div>

                        <div className="space-y-4 mt-4">
                            <div className="flex flex-col gap-2 mb-8">
                                <p className="text-sm text-muted-foreground">Profile completion</p>
                                <progress value={66} />
                            </div>
                        </div>
                        <div className="flex items-center gap-2">
                            <span className="font-bold">Username: </span>
                            <span>Jhon_Depp</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <span className="font-bold">Email: </span>
                            <span>jhonnySins@gmail.com</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <span className="font-bold">Phone: </span>
                            <span>9876543210</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <span className="font-bold">Role: </span>
                            <Badge>Admin</Badge>
                        </div>
                        <p className="text-sm text-muted-foreground">Joined on 2025.01.01</p>
                    </div>
                    <CardList title="Recent Transactions" />
                </div>

                {/* RIGHT */}
                <div className="w-full xl:w-2/3 space-y-6">
                    {/* USER CARD CONTAINER */}

                    <div className="bg-primary-foreground p-4 rounded-lg">
                        <div className="flex items-center gap-3">
                            <Avatar>
                                <AvatarImage src="/gorrila.jpg" alt="gorrila" />
                                <AvatarFallback>Gorilla</AvatarFallback>
                            </Avatar>
                            <h1 className="font-bold">Jhone Doe</h1>
                        </div>
                    </div>

                    {/* Chart Container */}
                    <div className="bg-primary-foreground p-4 rounded-lg">
                        <RadialChart/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SingleUserPage;