"use client";

import {
  Navbar as NextUINavbar,
  NavbarContent,
  NavbarBrand,
  NavbarItem,
} from "@nextui-org/navbar";
import { Button } from "@nextui-org/button";
import { Link } from "@nextui-org/link";
import { link as linkStyles } from "@nextui-org/theme";
import NextLink from "next/link";
import clsx from "clsx";

import { siteConfig } from "@/config/site";
import { TwitterIcon, GithubIcon, DiscordIcon, Logo } from "@/components/icons";
import {
  ConnectButton,
  useConnectModal,
  useActiveAccount,
  Blobbie,
  useWalletDetailsModal,
} from "thirdweb/react";
import { client } from "@/app/client";

export const Navbar = () => {
  const { connect, isConnecting } = useConnectModal();
  const activeAccount = useActiveAccount();
  const detailsModal = useWalletDetailsModal();

  async function handleConnect() {
    if (activeAccount) {
      // If an account is already connected, open the wallet details modal
      detailsModal.open({ client });
    } else {
      // If no account is connected, connect
      const wallet = await connect({ client });
      console.log("connected to", wallet);
    }
  }

  return (
    <NextUINavbar maxWidth="xl" position="sticky">
      <NavbarContent className="basis-1/5 sm:basis-full" justify="start">
        <NavbarBrand as="li" className="gap-3 max-w-fit">
          <NextLink className="flex justify-start items-center gap-1" href="/">
            <Logo />
          </NextLink>
        </NavbarBrand>
        <ul className="hidden lg:flex gap-4 justify-start ml-2">
          {siteConfig.navItems.map((item) => (
            <NavbarItem key={item.href}>
              <NextLink
                className={clsx(
                  linkStyles({ color: "foreground" }),
                  "data-[active=true]:text-primary data-[active=true]:font-medium"
                )}
                color="foreground"
                href={item.href}
              >
                {item.label}
              </NextLink>
            </NavbarItem>
          ))}
        </ul>
      </NavbarContent>

      <NavbarContent
        className="hidden sm:flex basis-1/5 sm:basis-full"
        justify="end"
      >
        <NavbarItem className="hidden sm:flex gap-2">
          <Link isExternal aria-label="Twitter" href={siteConfig.links.twitter}>
            <TwitterIcon className="text-default-500" />
          </Link>
          <Link isExternal aria-label="Discord" href={siteConfig.links.discord}>
            <DiscordIcon className="text-default-500" />
          </Link>
          <Link isExternal aria-label="Github" href={siteConfig.links.github}>
            <GithubIcon className="text-default-500" />
          </Link>
        </NavbarItem>
        <NavbarItem className="hidden md:flex">
          {/* <ConnectButton client={client} /> */}
          {activeAccount ? (
            <Button
              radius="sm"
              className="bg-black"
              size="md"
              onClick={handleConnect}
            >
              <div className="rounded-full overflow-hidden">
                <Blobbie address={activeAccount.address} size={24} />
              </div>
              <span>
                {activeAccount.address.slice(0, 6)}...
                {activeAccount.address.slice(-4)}
              </span>
            </Button>
          ) : (
            <Button
              radius="sm"
              className="bg-gradient-to-tr from-pink-500 to-purple-500 text-white shadow-lg"
              onClick={handleConnect}
              size="md"
            >
              Connect
            </Button>
          )}
        </NavbarItem>
      </NavbarContent>

      <NavbarContent className="sm:hidden basis-1 pl-4" justify="end">
        <Link isExternal aria-label="Github" href={siteConfig.links.github}>
          {/* <GithubIcon className="text-default-500" /> */}
        </Link>
        {activeAccount ? (
          <Button
            radius="sm"
            className="bg-black"
            size="sm"
            onClick={handleConnect}
          >
            <div className="rounded-full overflow-hidden">
              <Blobbie address={activeAccount.address} size={24} />
            </div>
            <span>
              {activeAccount.address.slice(0, 6)}...
              {activeAccount.address.slice(-4)}
            </span>
          </Button>
        ) : (
          <Button
            radius="sm"
            className="bg-gradient-to-tr from-pink-500 to-purple-500 text-white shadow-lg"
            onClick={handleConnect}
            size="sm"
          >
            Connect
          </Button>
        )}
      </NavbarContent>
    </NextUINavbar>
  );
};
