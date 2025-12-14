"use client";

import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Card } from "@/components/ui/card";
import { useState } from "react";
import { Calendar } from "@/components/ui/calendar";
import { CalendarIcon } from "lucide-react";
import { Button } from "./ui/button";
import { format } from "date-fns";

const TodoList = () => {
    const [date, setDate] = useState<Date | undefined>(new Date());
    const [open, setOpen] = useState(false);

    const tasks = [
        "Skibdi",
        "Task 2",
        "Task 3",
        "Task 4",
        "Task 5",
        "Task 6",
        "Task 7",
        "Task 8",
        "Task 9",
        "Task 10",
    ];

    return (
        <div className="flex flex-col items-center gap-4 p-4">
            {/* Date Picker */}
            <Popover open={open} onOpenChange={setOpen}>
                <PopoverTrigger asChild>
                    <Button variant="outline" className="flex items-center gap-2">
                        {date ? format(date, "PPP") : <span>Pick a date</span>}
                        <CalendarIcon className="w-4 h-4" />
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

            {/* Scrollable Task List */}
            <ScrollArea className="w-full max-h-[400px] overflow-y-auto border rounded-md p-2">
                {tasks.map((task, index) => (
                    <Card key={index} className="p-4 mb-2">
                        <div className="flex items-center gap-3">
                            <Checkbox id={`item-${index}`} />
                            <Label
                                htmlFor={`item-${index}`}
                                className="text-sm text-muted-foreground"
                            >
                                {task}
                            </Label>
                        </div>
                    </Card>
                ))}
            </ScrollArea>
        </div>
    );
};

export default TodoList;
