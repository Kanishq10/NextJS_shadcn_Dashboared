"use client"

import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"

import { ScrollArea } from "@/components/ui/scroll-area"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { Card } from "@/components/ui/card"
import { useState } from "react"
import { Calendar } from "@/components/ui/calendar"
import { CalendarIcon } from "lucide-react"
import { Button } from "./ui/button"
import { format } from 'date-fns'

const TodoList = () => {
    const [date, setDate] = useState<Date | undefined>(new Date());
    const [open, setOpen] = useState(false);
    return (
        <>

            <div className="flex  flex-col items-center gap-4">
                <Popover open={open} onOpenChange={setOpen}>
                    <PopoverTrigger asChild>
                        <Button>
                            {date ? format(date, "PPP") : <span>Pick a date</span>}
                            <CalendarIcon />
                        </Button>
                    </PopoverTrigger>
                    <PopoverContent>
                        <Calendar
                            mode="single"
                            selected={date}
                            onSelect={setDate}
                            className="rounded-md border shadow-sm"
                            captionLayout="dropdown"
                        />
                    </PopoverContent>
                </Popover>
                <ScrollArea className="w-screen max-h-100 overflow-y-auto">
                    {/* List Item */}
                    <Card className="p-4">
                        <div className="flex items-center gap-3">
                            <Checkbox id="item1" />
                            <Label htmlFor="item1" className="text-sm text-muted-foreground">
                                Skibdi
                            </Label>
                        </div>
                    </Card>
                    {/* List Item */}
                    <Card className="p-4">
                        <div className="flex items-center gap-3">
                            <Checkbox id="item1" />
                            <Label htmlFor="item1" className="text-sm text-muted-foreground">
                                Skibdi
                            </Label>
                        </div>
                    </Card>
                    {/* List Item */}
                    <Card className="p-4">
                        <div className="flex items-center gap-3">
                            <Checkbox id="item1" />
                            <Label htmlFor="item1" className="text-sm text-muted-foreground">
                                Skibdi
                            </Label>
                        </div>
                    </Card>
                    {/* List Item */}
                    <Card className="p-4">
                        <div className="flex items-center gap-3">
                            <Checkbox id="item1" />
                            <Label htmlFor="item1" className="text-sm text-muted-foreground">
                                Skibdi
                            </Label>
                        </div>
                    </Card>
                    {/* List Item */}
                    <Card className="p-4">
                        <div className="flex items-center gap-3">
                            <Checkbox id="item1" />
                            <Label htmlFor="item1" className="text-sm text-muted-foreground">
                                Skibdi
                            </Label>
                        </div>
                    </Card>
                    {/* List Item */}
                    <Card className="p-4">
                        <div className="flex items-center gap-3">
                            <Checkbox id="item1" />
                            <Label htmlFor="item1" className="text-sm text-muted-foreground">
                                Skibdi
                            </Label>
                        </div>
                    </Card>
                    {/* List Item */}
                    <Card className="p-4">
                        <div className="flex items-center gap-3">
                            <Checkbox id="item1" />
                            <Label htmlFor="item1" className="text-sm text-muted-foreground">
                                Skibdi
                            </Label>
                        </div>
                    </Card>
                    {/* List Item */}
                    <Card className="p-4">
                        <div className="flex items-center gap-3">
                            <Checkbox id="item1" />
                            <Label htmlFor="item1" className="text-sm text-muted-foreground">
                                Skibdi
                            </Label>
                        </div>
                    </Card>
                    {/* List Item */}
                    <Card className="p-4">
                        <div className="flex items-center gap-3">
                            <Checkbox id="item1" />
                            <Label htmlFor="item1" className="text-sm text-muted-foreground">
                                Skibdi
                            </Label>
                        </div>
                    </Card>
                    {/* List Item */}
                    <Card className="p-4">
                        <div className="flex items-center gap-3">
                            <Checkbox id="item1" />
                            <Label htmlFor="item1" className="text-sm text-muted-foreground">
                                Skibdi
                            </Label>
                        </div>
                    </Card>
                    {/* List Item */}
                    <Card className="p-4">
                        <div className="flex items-center gap-3">
                            <Checkbox id="item1" />
                            <Label htmlFor="item1" className="text-sm text-muted-foreground">
                                Skibdi
                            </Label>
                        </div>
                    </Card>
                </ScrollArea>
            </div>
        </>
    )
}

export default TodoList