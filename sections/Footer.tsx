import { ImageWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";

interface LinkItem {
  text: string;
  textUrl: string;
}

interface ColumnLink {
  title?: string;
  titleUrl?: string;
  items?: LinkItem[];
}

interface FooterBottom {
  socials?: ImageWidget[];
  texts?: {
    text?: string;
    url?: string;
  }[]
}

interface Props {
  logo?: ImageWidget;
  columnLinks?: ColumnLink[];
  footerBottom?: FooterBottom;
}

function Footer({
  logo,
  columnLinks,
  footerBottom
}: Props) {
  return (
    <div class="bg-accent px-6 py-20">
      <div class="flex flex-col md:flex-row md:justify-between lg:container">
        {logo && <a class="mb-12" href="/"><Image src={logo} width={143.58} height={40} alt="Deco.cx" /></a>}
        <div class="flex flex-col md:flex-row gap-4 md:gap-[40px]">
          {columnLinks?.map((columns) => (
            <div class="flex flex-col gap-4 md:gap-5 text-info-content opacity-90">
              <a href={columns.titleUrl} class="font-bold hidden md:block">{columns.title}</a>
              <ul class="flex flex-col gap-4 md:gap-2">
                {columns.items?.map((link) => (
                  <li>
                    <a href={link.textUrl} class="inline-block group">
                      <div class="mb-[6px]">{link.text}</div>
                      <div class="h-[2px] bg-black w-0 group-hover:w-full duration-500"></div>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div class="mt-12 flex flex-col md:flex-row md:items-center md:justify-between gap-6 lg:gap-4 lg:container">
        <ul class="flex flex-row justify-items-start md:justify-end items-start gap-4">
          {footerBottom?.socials?.map((item: any) => (
            <li>
              <a href="flex justify-center items-center px-3  h-10 w-10 hover:bg-[#FFFFFF1A] rounded-[56px] p-2 transition duration-500">
                <Image
                  src={item}
                  width={24}
                  height={24}
                  alt="Ícone rede social"
                />
              </a>
            </li>
          ))}
        </ul>
        <div class="flex flex-col md:flex-row-reverse gap-5 lg:gap-10 text-info-content text-xs"
        >
          {footerBottom?.texts?.map((item) => (
            <a class="underline underline-offset-4" href={item.url || "#"}>{item.text || ""}</a>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Footer;
