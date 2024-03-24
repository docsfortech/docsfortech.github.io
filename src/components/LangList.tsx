import {
    Calculator,
    Calendar,
    CreditCard,
    Settings,
    Smile,
    User,
} from "lucide-react"

import {
    Command,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
} from "@/components/ui/command"
import { Languages } from "./Languages"

function navigateTo(value: string) {
    location.href = `/${value.toLowerCase()}`
}

export function LangList() {
    return (
        <Command className="rounded-lg border shadow-md">
            <CommandInput placeholder="Search for languages & technologies..." />
            <CommandList>
                <CommandEmpty>No results found.</CommandEmpty>
            </CommandList>
        </Command>
    )
}
