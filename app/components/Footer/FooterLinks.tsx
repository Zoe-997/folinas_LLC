import Link from "next/link";
import Heading from "../Commons/Heading";

interface FooterLinkItemProps {
    label: string;
    href: string;
}

interface FooterLinksProps {
    items: FooterLinkItemProps[];
    title?: string;
}

const FooterLinks = ({items, title}: FooterLinksProps) => {
    return (
        <div className="mt-[29px]">
            {title && <Heading headingTag="h4" heading={title} />}
            <ul id="footer-links" className="mt-5">
                {items.map((item, index) => (
                    <li key={index} className="mb-2 last:mb-0">
                        <Link href={item.href}>{item.label}</Link>
                    </li>
                )) }
            </ul>
        </div>
    )
}
 
export default FooterLinks;