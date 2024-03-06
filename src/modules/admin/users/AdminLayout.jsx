import React from 'react'; import {
    Avatar, Button, Timeline,
    Dropdown, Card ,
    DropdownDivider,
    DropdownHeader,
    DropdownItem,
    Navbar,
    Badge,
    NavbarBrand,
    NavbarCollapse,
    NavbarLink,
    NavbarToggle,
    Sidebar,
} from 'flowbite-react';
import AuthContext from '../../../config/context/auth-context'
import { HiArrowSmRight, HiChartPie, HiInbox, HiShoppingBag, HiTable, HiUser, HiViewBoards, HiArrowNarrowRight, HiCalendar, } from 'react-icons/hi';
import { Outlet, Link } from 'react-router-dom';


const AdminLayout = () => {
    //Diseñar el layout para admin
    return (
        <>
            <header>
                <Navbar fluid rounded>
                    <Navbar.Brand href="https://flowbite-react.com" >
                        <img src="data:image/jpeg;base64,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"
                            className="mr-3 h-6 sm:h-9" alt="Moshi moshi Jesus desu" width={75} />
                        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Este es el admin</span>
                    </Navbar.Brand>
                    <div className="flex md:order-2">
                        <Dropdown
                            arrowIcon={false}
                            inline
                            label={
                                <Avatar alt="User settings" img="data:image/jpeg;base64,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" rounded />
                            }
                        >
                            <DropdownHeader>
                                <span className="block text-sm">Viko</span>
                                <span className="block truncate text-sm font-medium">name@flowbite.com</span>
                            </DropdownHeader>
                            <DropdownItem>Dashboard</DropdownItem>
                            <DropdownItem>Settings</DropdownItem>
                            <DropdownItem>Earnings</DropdownItem>
                            <DropdownDivider />
                            <DropdownItem>Sign out</DropdownItem>
                        </Dropdown>
                        <NavbarToggle />
                    </div>
                    <NavbarCollapse>
                        <NavbarLink href="#" active>
                            Home
                        </NavbarLink>
                        <NavbarLink href="#">About</NavbarLink>
                        <NavbarLink href="#">Services</NavbarLink>
                        <NavbarLink href="#">Pricing</NavbarLink>
                        <NavbarLink href="#">Contact</NavbarLink>
                    </NavbarCollapse>
                </Navbar>

            </header>

            <div className='flex' >
                <aside>
                    <Sidebar aria-label="Sidebar with call to action button example">
                        <Sidebar.Items>
                            <Sidebar.ItemGroup>
                                <Sidebar.Item href="#" icon={HiChartPie}>
                                    Dashboard
                                </Sidebar.Item>
                                <Sidebar.Item href="#" icon={HiViewBoards}>
                                    Kanban
                                </Sidebar.Item>
                                <Sidebar.Item href="#" icon={HiInbox}>
                                    Inbox
                                </Sidebar.Item>
                                <Sidebar.Item href="#" icon={HiUser}>
                                    Users
                                </Sidebar.Item>
                                <Sidebar.Item href="#" icon={HiShoppingBag}>
                                    Products
                                </Sidebar.Item>
                                <Sidebar.Item href="#" icon={HiArrowSmRight}>
                                    Sign In
                                </Sidebar.Item>
                                <Sidebar.Item href="#" icon={HiTable}>
                                    Sign Up
                                </Sidebar.Item>
                            </Sidebar.ItemGroup>
                        </Sidebar.Items>
                        <Sidebar.CTA>
                            <div className="mb-3 flex items-center">
                                <Badge color="warning">Beta</Badge>
                                <button
                                    aria-label="Close"
                                    className="-m-1.5 ml-auto inline-flex h-6 w-6 rounded-lg bg-gray-100 p-1 text-cyan-900 hover:bg-gray-200 focus:ring-2 focus:ring-gray-400 dark:bg-gray-700 dark:text-gray-400 dark:hover:bg-gray-600"
                                    type="button"
                                >
                                    <svg
                                        aria-hidden
                                        className="h-4 w-4"
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                </button>
                            </div>
                            <div className="mb-3 text-sm text-cyan-900 dark:text-gray-400">
                                Preview the new Flowbite dashboard navigation! You can turn the new navigation off for a limited time in your
                                profile.
                            </div>
                            <a
                                className="text-sm text-cyan-900 underline hover:text-cyan-800 dark:text-gray-400 dark:hover:text-gray-300"
                                href="#"
                            >
                                Turn new navigation off
                            </a>
                        </Sidebar.CTA>
                    </Sidebar>

                </aside >
                <main className='w-full'>
                    <section className='px-4 pt-2 pb-6'>
                        <Outlet />
                    </section>
                </main>
            </div>
        </>
    )
}

export default AdminLayout