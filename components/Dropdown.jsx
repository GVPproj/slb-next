import { Fragment, Menu } from "@headlessui/react"
import { useState } from "react"

export default function Dropdown() {
  const [open, setOpen] = useState(false)
  const mobileLinkClassNames = ` py-4 text-lg `

  return (
    <Menu as="div" className="relative flex flex-col gap-4 items-end z-50">
      <Menu.Button
        onClick={() => {
          setOpen((prev) => !prev)
        }}
      >
        {!open && (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        )}
        {open && (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        )}
      </Menu.Button>
      <Menu.Items as="div" className=" flex flex-col items-end ">
        <Menu.Item>
          {({ active }) => (
            <a
              className={`${mobileLinkClassNames} ${active && "underline"}`}
              href="/"
            >
              selected works
            </a>
          )}
        </Menu.Item>
        <Menu.Item>
          {({ active }) => (
            <a
              className={`${mobileLinkClassNames} ${active && "underline"}`}
              href="/archives"
            >
              archives
            </a>
          )}
        </Menu.Item>
        <Menu.Item>
          {({ active }) => (
            <a
              className={`${mobileLinkClassNames} ${active && "underline"}`}
              href="/about"
            >
              about
            </a>
          )}
        </Menu.Item>
      </Menu.Items>
    </Menu>
  )
}
