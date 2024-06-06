import { ImageWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";
import Icon from "site/components/ui/Icon.tsx";

type SubLink = Omit<NavLink, "subLinks">;

interface NavLink {
  to?: string;
  label: string;
  subLinks?: SubLink[];
}

interface NavSocial {
  label: string;
  icon: ImageWidget;
  link: string;
}

interface CTA {
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
    <header class="flex py-[48px] items-center justify-between lg:container lg:w-full shadow-[0px_4px_16px_0px_rgba(0,0,0,0.10)]">
      {logo && <Image src={logo} width={143.58} height={40} alt="Deco.cx" />}
      <nav class="flex rounded-[36px] border border-[rgba(255,255,255,0.2)] bg-white/5 backdrop-blur-xl w-full max-w-[548px] h-[44px] items-center px-[32px] text-[13px]">
        <ul class="flex gap-[40px]">
          {navLinks?.map((link) => (
            <li class="group">
              <a class="flex items-center cursor-pointer hover:text-accent transition-colors" href={link.to}>
                {link.label}
                {Boolean(link.subLinks?.length) && (
                  <Icon id="ChevronDown" class="ml-1" width={12} height={12} />
                )}
              </a>
              {Boolean(link.subLinks?.length) && (
                <ul class="absolute hidden group-hover:flex bg-white/5 backdrop-blur-xl rounded-[36px] border border-[rgba(255,255,255,0.2)] w-full max-w-[548px] h-[44px] items-center px-[32px]">
                  {link.subLinks?.map((subLink) => (
                    <li>
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
      <ul class="flex gap-2">
        {ctas?.map((cta) => (
          <li>
            <a
              href={cta.link}
              class={`rounded-full py-2 px-4 text-base font-bold ${
                cta.style === "accent"
                  ? "bg-accent text-secondary"
                  : "bg-neutral-content text-base-300"
              } h-[35px]`}
            >
              {cta.label}
            </a>
          </li>
        ))}
      </ul>
    </header>
  );
}
