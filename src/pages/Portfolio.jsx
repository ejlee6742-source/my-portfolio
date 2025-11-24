import { Link } from "react-router-dom";
import { portfolioItems } from "../data/portfolioItems";

// const portfolioItems = [
//   {
//     id: 1,
//     title: "반응형 웹사이트",
//     description: "HTML, CSS, JavaScript로 만든 반응형 랜딩 페이지",
//     skills: ["HTML", "CSS", "JavaScript"],
//     image: "/images/web2.png",
//     link: "#",
//   },
//   {
//     id: 2,
//     title: "React 포트폴리오 사이트",
//     description: "React + React Router로 만든 개인 포트폴리오",
//     skills: ["React", "SPA", "Routing"],
//     image: "/images/web1.jpg",
//     link: "#",
//   },
//   {
//     id: 3,
//     title: "디자인 시안 모음",
//     description: "Figma로 작업한 웹/모바일 UI 시안 모음",
//     skills: ["Figma", "UI/UX"],
//     link: "#",
//   },
// ];

export default function Portfolio() {
  return (
    <div>
      <h1>Portfolio</h1>
      <p>내가 작업한 포트폴리오 리스트입니다.</p>

      <div className="portfolio-grid">
        {portfolioItems.map((item) => (
          <div key={item.id} className="portfolio-card">
            <h3>{item.title}</h3>
            <p>{item.description}</p>
            <img src={item.image} alt={item.title} className="thumb" />

            {/* <div className="skills">
              {item.skills.map((skill, i) => (
                <span key={i} className="skill-badge">
                  {skill}
                </span>
              ))}
            </div> */}

            <Link to={`/portfolio/${item.id}`} className="more-link">
            바로가기
            </Link>
            {/* {item.link && (
              <a href={item.link} className="more-link">
                자세히 보기
              </a>
            )
            } */}
          </div>
        ))}
      </div>
    </div>
  );
}
