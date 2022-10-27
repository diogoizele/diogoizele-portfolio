import Link from "next/link";
import { FiGithub, FiLinkedin, FiTwitter, FiYoutube } from "react-icons/fi";

import { Container, SocialMediaAnchor } from "./socialMedia.styles";

interface SocialMediaLinkProps {
  href: string;
  icon: React.ReactNode;
  title: string;
}

const SocialMediaLink = ({ href, icon, title }: SocialMediaLinkProps) => {
  return (
    <Link href={href}>
      <SocialMediaAnchor title={title} href={href} target="_blank">
        {icon}
      </SocialMediaAnchor>
    </Link>
  );
};

export const SocialMedia = () => {
  return (
    <Container>
      <SocialMediaLink
        href="https://github.com/diogoizele"
        icon={<FiGithub size={28} />}
        title="GitHub"
      />
      <SocialMediaLink
        href="https://www.linkedin.com/in/diogoizele/"
        icon={<FiLinkedin size={28} />}
        title="LinkedIn"
      />
      <SocialMediaLink
        href="https://twitter.com/diogoizele"
        icon={<FiTwitter size={28} />}
        title="Twitter"
      />
      <SocialMediaLink
        href="https://www.youtube.com/channel/UCQ-oyN6ClB9W6-Z773iii9Q"
        icon={<FiYoutube size={28} />}
        title="YouTube"
      />
    </Container>
  );
};
