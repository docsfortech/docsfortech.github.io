import {
    Command,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
    CommandSeparator,
} from "@/components/ui/command"
import { Languages } from "./Languages"

function navigateToLang(key: string) {
    const item = Languages[key];
    if (item === undefined) return
    if (item.url !== undefined) {
        location.href = item.url
        return
    }
    location.href = `/${key}`
}

export function LangList() {
    return (
        <Command className="rounded-lg border shadow-md">
            <CommandInput placeholder="Search for languages & technologies..." autoFocus />
            <CommandList>
                <CommandEmpty>No results found.</CommandEmpty>
                <CommandGroup heading="Languages">
                    {Object.entries(Languages).map(([key, value]) => (
                        <CommandItem
                            key={key}
                            value={key}
                            title={value.title}
                            onSelect={navigateToLang}
                        >
                            {value.icon}
                            <span>{value.title}</span>
                        </CommandItem>
                    ))}
                </CommandGroup>
            </CommandList>
        </Command>
    )
}
