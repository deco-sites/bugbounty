import Icon from "site/components/ui/Icon.tsx";
import { CTA, NavLink, NavSocial } from "site/sections/Header.tsx";
import { useUI } from "site/sdk/useUI.ts";
import Image from "apps/website/components/Image.tsx";

export interface Props {
  navLinks?: NavLink[];
  navSocials?: NavSocial[];
  ctas?: CTA[];
}

export default function MobileMenu({ navLinks, navSocials, ctas }: Props) {
  const { displayMenu } = useUI();

  return (
    <div class="block lg:hidden">
      <button
        class="bg-transparent border-none outline-none p-0 text-accent transition-all duration-300 align-middle"
        onClick={() => {
          displayMenu.value = !displayMenu.value;
        }}
        style={{
          transform: displayMenu.value ? "rotate(180deg)" : "rotate(0deg)",
        }}
      >
        <Icon
          id={!displayMenu.value ? "Hamburguer" : "XMark"}
          width={35}
          height={32}
          strokeWidth={2}
          style={{ transition: "transform 0.3s ease" }}
        />
      </button>

      <div
        style={{
          visibility: displayMenu.value ? "visible" : "hidden",
          opacity: displayMenu.value ? 1 : 0,
          pointerEvents: displayMenu.value ? "auto" : "none",
        }}
        class="bg-[#1e1e1e] absolute w-[calc(100vw-16px)] h-[calc(100vh-116px)] top-full left-1/2 -translate-y-[48px] -translate-x-1/2 mt-4 shadow-[0px_4px_16px_0px_rgba(0,0,0,0.10)] rounded-[36px] border border-[rgba(255,255,255,0.2)] backdrop-blur-xl z-10 transition-all px-3 pt-6 pb-20"
      >
        <ul class="flex flex-col divide-y divide-[hsla(0,0%,85%,.13)]">
          {navLinks?.map((link) => (
            <li class="grid items-center py-3 md:py-4 text-white px-6">
              <a
                class="flex items-center cursor-pointer hover:text-accent transition-colors"
                href={link.to}
              >
                {link.label}
              </a>
              {Boolean(link.subLinks?.length) && (
                <ul class="ml-4">
                  {link.subLinks?.map((subLink) => (
                    <li class="py-3 md:py-4">
                      <a class="flex items-center" href={subLink.to}>
                        {subLink.label}
                      </a>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
        <div class="flex flex-col gap-4 mt-10">
          {ctas?.map((cta) => (
            <a
              href={cta.link}
              class={`${
                cta.style === "accent"
                  ? "bg-accent text-secondary"
                  : "bg-neutral-content text-base-300 hover:text-accent"
              } py-3 md:py-4 transition-colors rounded-full px-6`}
            >
              {cta.label}
            </a>
          ))}
        </div>
        <ul class="flex flex-row gap-3 mt-10 justify-center">
          {navSocials?.map((social) => (
            <li>
              <a href={social.link} target="_blank">
                <Image
                  src={social.icon}
                  width={20}
                  height={20}
                  alt={social.label}
                  loading="lazy"
                />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
