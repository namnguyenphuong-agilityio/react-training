import './footergroup.css'

interface LinkItem {
  text: string;
  href: string;
}

interface FooterGroupProps {
  title: string;
  links: LinkItem[];
}

export const FooterGroup = ({ title, links }: FooterGroupProps) => {
  return (
    <div className="footer-group">
      <h4 className="footer-group__title">{title.toUpperCase()}</h4>
      <ul>
        {links.map((link) => (
          <li key={link.text} className="footer-group__item">
            <a href={link.href} className="footer-group__link">{link.text}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}
