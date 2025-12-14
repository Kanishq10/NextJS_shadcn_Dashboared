"use client"; // Add this since TanStack Form uses client-side state

import { useState } from "react";
import { useForm } from "@tanstack/react-form";
import { zodValidator } from "@tanstack/zod-form-adapter";
import { z } from "zod"; // Optional: for validation

import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"

import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"

import { Input } from "@/components/ui/input"

import {
    Field,
    FieldContent,
    FieldDescription,
    FieldError,
    FieldGroup,
    FieldLabel,
    FieldLegend,
    FieldSeparator,
    FieldSet,
    FieldTitle,
} from "@/components/ui/field"

import { Button } from "@/components/ui/button";

// Define TypeScript interface for form values
interface UserFormValues {
    username: string;
    email: string;
    phone: string;
    location: string;
    role: "admin" | "user" | "manager";
}

const defaultFields: UserFormValues = {
    username: "Jhon",
    email: "JhonnySins@gmail.com",
    phone: "987654321",
    location: "New York",
    role: "admin"
}

const EditUser = () => {
    const [isOpen, setIsOpen] = useState(false);

    // Optional: Define validation schema with Zod
    const formSchema = z.object({
        username: z.string().min(2, "Username must be at least 2 characters"),
        email: z.string().email("Invalid email address"),
        phone: z.string().min(10, "Phone must be at least 10 digits"),
        location: z.string().min(2, "Location is required"),
        role: z.enum(["admin", "user", "manager"])
    });

    // Initialize the form
    const form = useForm({
        defaultValues: defaultFields,
        // Optional: Add validator adapter (if using Zod)
        // validatorAdapter: zodValidator,

        onSubmit: async ({ value }) => {
            // Handle form submission
            console.log("Form submitted:", value);

            // Simulate API call
            try {
                // await updateUser(value);
                console.log("User updated successfully!");
                setIsOpen(false); // Close the sheet
                form.reset(); // Reset form to default values
            } catch (error) {
                console.error("Failed to update user:", error);
            }
        },
    });

    return (
        <div>
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
                <Button asChild>
                    <SheetTrigger>Edit</SheetTrigger>
                </Button>
                <SheetContent className="w-[400px] sm:w-[540px]">
                    <SheetHeader>
                        <SheetTitle className="mb-4">Edit User</SheetTitle>
                        <SheetDescription>
                            <form
                                onSubmit={(e) => {
                                    e.preventDefault();
                                    e.stopPropagation();
                                    form.handleSubmit();
                                }}
                            >
                                <FieldGroup>
                                    <FieldSet>
                                        <FieldGroup>
                                            {/* Username Field */}
                                            <form.Field
                                                name="username"
                                            >
                                                {(field) => (
                                                    <Field>
                                                        <FieldLabel htmlFor={field.name}>
                                                            Username
                                                        </FieldLabel>
                                                        <Input
                                                            id={field.name}
                                                            name={field.name}
                                                            value={field.state.value}
                                                            onBlur={field.handleBlur}
                                                            onChange={(e) => field.handleChange(e.target.value)}
                                                            placeholder="Enter username"
                                                        />
                                                        {field.state.meta.errors.length > 0 && (
                                                            <FieldError>{field.state.meta.errors.join(", ")}</FieldError>
                                                        )}
                                                    </Field>
                                                )}
                                            </form.Field>
                                            {/* Email Field */}
                                            <form.Field
                                                name="email"
                                            >
                                                {(field) => (
                                                    <Field>
                                                        <FieldLabel htmlFor={field.name}>
                                                            Email
                                                        </FieldLabel>
                                                        <Input
                                                            id={field.name}
                                                            name={field.name}
                                                            type="email"
                                                            value={field.state.value}
                                                            onBlur={field.handleBlur}
                                                            onChange={(e) => field.handleChange(e.target.value)}
                                                            placeholder="Enter email"
                                                        />
                                                        {field.state.meta.errors.length > 0 && (
                                                            <FieldError>{field.state.meta.errors.join(", ")}</FieldError>
                                                        )}
                                                    </Field>
                                                )}
                                            </form.Field>
                                            {/* Phone Field */}
                                            <form.Field
                                                name="phone"
                                            >
                                                {(field) => (
                                                    <Field>
                                                        <FieldLabel htmlFor={field.name}>
                                                            Phone
                                                        </FieldLabel>
                                                        <Input
                                                            id={field.name}
                                                            name={field.name}
                                                            value={field.state.value}
                                                            onBlur={field.handleBlur}
                                                            onChange={(e) => field.handleChange(e.target.value)}
                                                            placeholder="Enter phone number"
                                                        />
                                                        <FieldDescription>Only admins can see</FieldDescription>
                                                        {field.state.meta.errors.length > 0 && (
                                                            <FieldError>{field.state.meta.errors.join(", ")}</FieldError>
                                                        )}
                                                    </Field>
                                                )}
                                            </form.Field>
                                            {/* Location Field */}
                                            <form.Field
                                                name="location"
                                            >
                                                {(field) => (
                                                    <Field>
                                                        <FieldLabel htmlFor={field.name}>
                                                            Location
                                                        </FieldLabel>
                                                        <Input
                                                            id={field.name}
                                                            name={field.name}
                                                            value={field.state.value}
                                                            onBlur={field.handleBlur}
                                                            onChange={(e) => field.handleChange(e.target.value)}
                                                            placeholder="Enter location"
                                                        />
                                                        <FieldDescription>Public place</FieldDescription>
                                                        {field.state.meta.errors.length > 0 && (
                                                            <FieldError>{field.state.meta.errors.join(", ")}</FieldError>
                                                        )}
                                                    </Field>
                                                )}
                                            </form.Field>
                                            {/* Role Field - Select Example */}
                                            <form.Field
                                                name="role"
                                            >
                                                {(field) => (
                                                    <Field>
                                                        <FieldLabel>Role</FieldLabel>
                                                        <Select
                                                            value={field.state.value}
                                                            onValueChange={(value: UserFormValues["role"]) =>
                                                                field.handleChange(value)
                                                            }
                                                        >
                                                            <SelectTrigger>
                                                                <SelectValue placeholder="Choose Role" />
                                                            </SelectTrigger>
                                                            <SelectContent>
                                                                <SelectItem value="admin">Admin</SelectItem>
                                                                <SelectItem value="user">User</SelectItem>
                                                                <SelectItem value="manager">Manager</SelectItem>
                                                            </SelectContent>
                                                        </Select>
                                                        <FieldDescription>
                                                            Only verified users can be admin
                                                        </FieldDescription>
                                                        {field.state.meta.errors.length > 0 && (
                                                            <FieldError>{field.state.meta.errors.join(", ")}</FieldError>
                                                        )}
                                                    </Field>
                                                )}
                                            </form.Field>
                                        </FieldGroup>
                                    </FieldSet>

                                    <Field orientation="horizontal">
                                        <Button
                                            type="submit"
                                            disabled={form.state.isSubmitting}
                                        >
                                            {form.state.isSubmitting ? "Submitting..." : "Submit"}
                                        </Button>
                                        <Button
                                            variant="outline"
                                            type="button"
                                            onClick={() => {
                                                setIsOpen(false);
                                                form.reset();
                                            }}
                                        >
                                            Cancel
                                        </Button>
                                    </Field>
                                </FieldGroup>
                            </form>
                        </SheetDescription>
                    </SheetHeader>
                </SheetContent>
            </Sheet>
        </div>
    );
}

export default EditUser;