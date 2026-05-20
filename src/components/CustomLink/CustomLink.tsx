import { NavLink } from "react-router";

type CustomLinkProps = {
  link: string;
  label: string;
};

const CustomLink = ({ link, label }: CustomLinkProps) => {
  return <NavLink to={link}>{label}</NavLink>;
};

export default CustomLink;
