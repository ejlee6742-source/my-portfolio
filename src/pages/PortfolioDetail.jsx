import { useParams } from "react-router-dom";
import { portfolioItems } from "../data/portfolioItems";

// const portfolioItems = [
//   {
//     id: 1,
//     title: "반응형 웹사이트",
//     description: "HTML/CSS/JS 랜딩 페이지 상세 설명...",
//     skills: ["HTML", "CSS", "JavaScript"],
//     content: "여기에 이 프로젝트에 대한 자세한 설명, 이미지 등을 넣을 수 있음.",
//     image: "/images/web2.png"
//   },
//   {
//     id: 2,
//     title: "React 포트폴리오",
//     description: "React SPA 포트폴리오 상세 설명...",
//     skills: ["React", "Routing"],
//     content: "프로젝트 설명, 배운 점, 어려웠던 점, 링크, 이미지 등...",
//     image: "/images/web1.jpg"
//   },
// ];

export default function PortfolioDetail() {
  const { id } = useParams(); // URL의 :id 가져오기
  const item = portfolioItems.find(p => p.id === Number(id));

  if (!item) {
    return <h2>해당 포트폴리오를 찾을 수 없습니다.</h2>;
  }

  return (
    <div>
      <h1>{item.title}</h1>
      <p>{item.description}</p>
      <img src={item.image} alt={item.title} className="thumb"/>
      <h3>사용 기술</h3>
      <ul>
        {item.skills.map((skill, i) => (
          <li key={i}>{skill}</li>
        ))}
      </ul>

      <h3>상세 내용</h3>
      <p>{item.content}</p>
    </div>
  );
}
