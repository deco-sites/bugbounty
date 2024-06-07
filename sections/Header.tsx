import { ImageWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";
import Icon from "site/components/ui/Icon.tsx";
import MobileMenu from "site/islands/MobileMenu.tsx";

export type SubLink = Omit<NavLink, "subLinks">;

export interface NavLink {
  to?: string;
  label: string;
  subLinks?: SubLink[];
}

export interface NavSocial {
  label: string;
  icon: ImageWidget;
  link: string;
}

export interface CTA {
  label: string;
  link: string;
  style: "primary" | "accent";
}

export interface Props {
  logo?: ImageWidget;
  navLinks?: NavLink[];
  navSocials?: NavSocial[];
  ctas?: CTA[];
}

export default function Header({ logo, navLinks, navSocials, ctas }: Props) {
  return (
    <header class="relative px-4 lg:px-0 flex py-[48px] items-center justify-between lg:container lg:w-full shadow-[0px_4px_16px_0px_rgba(0,0,0,0.10)]">
      {logo && (
        <a href="/">
          <Image src={logo} width={143.58} height={40} alt="Deco.cx" />
        </a>
      )}
      <nav class="hidden lg:flex rounded-[36px] border border-[rgba(255,255,255,0.2)] bg-white/5 backdrop-blur-xl w-full max-w-[548px] h-[44px] items-center px-[32px] text-[13px]">
        <ul class="flex gap-[40px] h-full">
          {navLinks?.map((link) => (
            <li class="group flex items-center">
              <a
                class="flex items-center cursor-pointer hover:text-accent transition-colors h-full"
                href={link.to}
              >
                {link.label}
                {Boolean(link.subLinks?.length) && (
                  <Icon id="ChevronDown" class="ml-1" width={12} height={12} />
                )}
              </a>
              {Boolean(link.subLinks?.length) && (
                <ul class="absolute hidden group-hover:flex top-full flex-col w-[152px]">
                  <div class="bg-transparent w-full h-2"></div>
                  <div class="bg-[#2FD180] text-[#113032] p-2 rounded">
                    {link.subLinks?.map((subLink) => (
                      <li>
                        <a
                          class="flex flex-row items-center justify-between flex-grow p-2 hover:bg-black/5 rounded cursor-pointer"
                          href={subLink.to}
                        >
                          {subLink.label}
                        </a>
                      </li>
                    ))}
                  </div>
                </ul>
              )}
            </li>
          ))}
        </ul>
        <ul class="flex ml-auto gap-4">
          {navSocials?.map((social) => (
            <li>
              <a href={social.link} target="_blank">
                <Image
                  src={social.icon}
                  width={20}
                  height={20}
                  alt={social.label}
                />
              </a>
            </li>
          ))}
        </ul>
      </nav>
      <ul class="hidden lg:flex gap-2">
        {ctas?.map((cta) => (
          <li>
            <a
              href={cta.link}
              class={`rounded-full py-2 px-4 text-base font-bold ${
                cta.style === "accent"
                  ? "bg-accent text-secondary"
                  : "bg-neutral-content text-base-300 hover:text-accent"
              } h-[35px]`}
            >
              {cta.label}
            </a>
          </li>
        ))}
      </ul>
      <MobileMenu navLinks={navLinks} navSocials={navSocials} ctas={ctas} />
    </header>
  );
}
