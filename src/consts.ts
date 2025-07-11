import type { Metadata, Site, Socials } from "@types";

export const SITE: Site = {
  TITLE: "kr-younghoon",
  DESCRIPTION:
    "프론트엔드 개발자 영훈의 개발 여정과 경험을 공유하는 공간입니다. 코드, 디자인, 그리고 성장의 기록을 담습니다.",
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
    HREF: "https://www.linkedin.com/in/%EC%98%81%ED%9B%88-%EC%9D%B4-749ba1220/",
  },
  {
    NAME: "GitHub",
    HREF: "https://github.com/kr-younghoon",
  },
  {
    NAME: "Website",
    HREF: "https://trevortylerlee.com",
  },
];
