import type { Metadata, Site, Socials } from "@types";

export const SITE: Site = {
  TITLE: "Harry Log",
  DESCRIPTION: "내가 말하고자 하는 말이 내 침묵보다 더 가치 있기를",
  EMAIL: "sullanta0802@gmail.com",
  NUM_POSTS_ON_HOMEPAGE: 5,
  NUM_PROJECTS_ON_HOMEPAGE: 3,
};

export const HOME: Metadata = {
  TITLE: "Home",
  DESCRIPTION: "작은 기록이 큰 성장을 만듭니다.",
};

export const BLOG: Metadata = {
  TITLE: "Blog",
  DESCRIPTION:
    "문제 해결부터 기술 트렌드까지, 제가 배우고 느낀 모든 것을 글로 남깁니다.",
};

export const PROJECTS: Metadata = {
  TITLE: "Projects",
  DESCRIPTION:
    "제가 만들고 운영해본 프로젝트들입니다. 기술 선택, 구조 고민, 사용자 경험까지 담았습니다.",
};

export const SOCIALS: Socials = [
  {
    NAME: "LinkedIn",
    HREF: "https://www.linkedin.com/in/이영훈/",
  },
  {
    NAME: "GitHub",
    HREF: "https://github.com/kr-younghoon",
  },
  // {
  // NAME: "Website",
  // HREF: "https://trevortylerlee.com",
  // },
];
