"use client"
import Link from "next/link"
import * as DropdownMenu from "@radix-ui/react-dropdown-menu"
import { HamburgerMenuIcon } from "@radix-ui/react-icons"

const DropdownMenuDemo = () => {
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild>
        <button
          className="h-8 w-8 items-center justify-center inline-flex rounded-full text-slate-900 hover:bg-slate-200 focus:shadow-radix"
          aria-label="Navigate page"
        >
          <HamburgerMenuIcon />
        </button>
      </DropdownMenu.Trigger>

      <DropdownMenu.Portal>
        <DropdownMenu.Content
          className="DropdownMenuContent min-w-[220px] py-1 rounded bg-slate-50"
          sideOffset={5}
        >
          <Link href="/works" asChild>
            <DropdownMenu.Item className="text-center mt-2 hover:bg-slate-200 focus:bg-slate-200">
              works
            </DropdownMenu.Item>
          </Link>
          <Link href="/photography" asChild>
            <DropdownMenu.Item className="text-center mt-2 hover:bg-slate-200 focus:bg-slate-200">
              photography
            </DropdownMenu.Item>
          </Link>
          <Link href="/design" asChild>
            <DropdownMenu.Item className="text-center mt-2 hover:bg-slate-200 focus:bg-slate-200">
              design
            </DropdownMenu.Item>
          </Link>
          <Link href="/about" asChild>
            <DropdownMenu.Item className="text-center mt-2 hover:bg-slate-200 focus:bg-slate-200">
              about
            </DropdownMenu.Item>
          </Link>
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  )
}

export default DropdownMenuDemo
