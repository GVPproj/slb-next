"use client"
import React from "react"
import Link from "next/link"
import * as DropdownMenu from "@radix-ui/react-dropdown-menu"
import {
  HamburgerMenuIcon,
  CheckIcon,
  ChevronRightIcon,
} from "@radix-ui/react-icons"

const DropdownMenuDemo = () => {
  const [bookmarksChecked, setBookmarksChecked] = React.useState(true)
  const [urlsChecked, setUrlsChecked] = React.useState(false)

  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild>
        <button
          className="IconButton text-slate-900 hover:bg-slate-200 focus:shadow-radix"
          aria-label="Navigate page"
        >
          <HamburgerMenuIcon />
        </button>
      </DropdownMenu.Trigger>

      <DropdownMenu.Portal>
        <DropdownMenu.Content
          className="DropdownMenuContent bg-slate-50"
          sideOffset={5}
        >
          <Link href="/works" asChild>
            <DropdownMenu.Item className="text-center hover:bg-slate-200">
              works
            </DropdownMenu.Item>
          </Link>
          <Link href="/photography" asChild>
            <DropdownMenu.Item className="text-center hover:bg-slate-200">
              photography
            </DropdownMenu.Item>
          </Link>
          <Link href="/design" asChild>
            <DropdownMenu.Item className="text-center hover:bg-slate-200">
              design
            </DropdownMenu.Item>
          </Link>
          <Link href="/about" asChild>
            <DropdownMenu.Item className="text-center hover:bg-slate-200">
              about
            </DropdownMenu.Item>
          </Link>

          <DropdownMenu.Sub>
            <DropdownMenu.SubTrigger className="DropdownMenuSubTrigger">
              More Tools
              <div className="RightSlot">
                <ChevronRightIcon />
              </div>
            </DropdownMenu.SubTrigger>
            <DropdownMenu.Portal>
              <DropdownMenu.SubContent
                className="DropdownMenuSubContent"
                sideOffset={2}
                alignOffset={-5}
              >
                <DropdownMenu.Item className="DropdownMenuItem">
                  Save Page As… <div className="RightSlot">⌘+S</div>
                </DropdownMenu.Item>
                <DropdownMenu.Item className="DropdownMenuItem">
                  Create Shortcut…
                </DropdownMenu.Item>
                <DropdownMenu.Item className="DropdownMenuItem">
                  Name Window…
                </DropdownMenu.Item>
                <DropdownMenu.Separator className="DropdownMenu.Separator" />
                <DropdownMenu.Item className="DropdownMenuItem">
                  Developer Tools
                </DropdownMenu.Item>
              </DropdownMenu.SubContent>
            </DropdownMenu.Portal>
          </DropdownMenu.Sub>

          <DropdownMenu.Separator className="DropdownMenuSeparator" />

          <DropdownMenu.CheckboxItem
            className="DropdownMenuCheckboxItem"
            checked={bookmarksChecked}
            onCheckedChange={setBookmarksChecked}
          >
            <DropdownMenu.ItemIndicator className="DropdownMenuItemIndicator">
              <CheckIcon />
            </DropdownMenu.ItemIndicator>
            Show Bookmarks <div className="RightSlot">⌘+B</div>
          </DropdownMenu.CheckboxItem>
          <DropdownMenu.CheckboxItem
            className="DropdownMenuCheckboxItem"
            checked={urlsChecked}
            onCheckedChange={setUrlsChecked}
          >
            <DropdownMenu.ItemIndicator className="DropdownMenuItemIndicator">
              <CheckIcon />
            </DropdownMenu.ItemIndicator>
            Show Full URLs
          </DropdownMenu.CheckboxItem>

          <DropdownMenu.Separator className="DropdownMenuSeparator" />

          <DropdownMenu.Arrow className="DropdownMenuArrow" />
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  )
}

export default DropdownMenuDemo
