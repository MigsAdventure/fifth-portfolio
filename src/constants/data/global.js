const emoji = {
  firstVisit: {
    en: ["Hello and welcome!", "It looks like it's your first time here.", "This site is utilizing:", "React, SASS, AWS S3, CloudFront, Route53, and CodePipeline"],
    es: ["¡Hola y bienvenido!", "Parece que es tu primera vez aquí", "Este sitio está utilizando:", "React, SASS, AWS S3, CloudFront, Route53, y CodePipeline"],
    jp: ["こんにちは、ようこそ", "ここが初めてのようです", "このサイトは利用しています：", "React、SASS、AWS S3、CloudFront、Route53、およびCodePipeline"],
    kr: ["안녕하세요. 환영합니다!", "여기서 처음 방문한 것 같습니다.", "이 사이트는 활용하고 있습니다.", "React, SASS, AWS S3, CloudFront, Route53, 및 CodePipeline"]
  },
  visited: {
    en: ["Welcome back!", "This site is utilizing:", "React, SASS, AWS S3, CloudFront, Route53, and CodePipeline", "Thanks for visiting again and have a great day!"],
    es: ["¡Dar una buena acogida!", "Este sitio está utilizando:", "React, SASS, AWS S3, CloudFront, Route53, y CodePipeline", "¡Gracias por visitarnos nuevamente y que tenga un gran día!"],
    jp: ["お帰りなさい", "このサイトは利用しています：", "反応する、SASS、AWS S3、クラウドフロント、ルート53、および パイプライン", "再び訪問していただき、ありがとうございました！"],
    kr: ["다시 오신 것을 환영합니다!", "이 사이트는 활용하고 있습니다.", "React, SASS, AWS S3, CloudFront, Route53, 및 CodePipeline", "다시 방문해 주셔서 감사합니다. 좋은 하루 보내세요!"]
  },
  charsPerLine: {
    en: 25,
    es: 20,
    jp: 12,
    kr: 22
  }
};

const projects_filter = {
  all: "All Projects",
  ncsoft: "NcSoft",
  personal: "Personal",
  2019: "2019",
  2018: "2018",
  2017: "2017",
  2016: "2016",
  };

const projects = {
  headers: {
    resp: {
      en: "Responsibilities",
      es: "Responsibilities",
      jp: "Responsibilities",
      kr: "Responsibilities",
    },
    tech: {
      en: "Technologies",
      es: "Technologies",
      jp: "Technologies",
      kr: "Technologies",
    },
  },
  btn: {
    en: "Go To Site",
    es: "Ir al Sitio",
    jp: "サイトへ",
    kr: "사이트로 이동",
  },
};

 const contact_form = {
   name: {
     en: "Name",
     es: "Nombre",
     jp: "Name",
     kr: "Name",
   },
   email: {
     en: "Email",
     es: "Email",
     jp: "Email",
     kr: "Email",
   },
   message: {
     en: "Message",
     es: "Mensaje",
     jp: "Message",
     kr: "Message",
   }
 };
 
const footer =  {
  copyright: "Miguel Guzman",
  social: {
    resume: 'assets/pdf/resume.pdf',
    github: 'https://github.com/migsadventure',
    linkedin: 'https://www.linkedin.com/in/migsadventure/',
  }
 };

export {
  projects_filter,
  projects,
  contact_form,
  footer,
  emoji
}

