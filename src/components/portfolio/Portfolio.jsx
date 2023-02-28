import "./portfolio.scss"
import PortfolioList from "../portfolioList/PortfolioList";
import { useState } from "react"

export default function Portfolio() {

  const [selected,setSelected] = useState("featured")

  const list=[
    {id: "featured",
    title: "Featured"},

    {id: "web",
    title: "Web Apps"},

    {id: "mobile",
    title: "Mobile Apps"},

    {id: "design",
    title: "Design"},

    {id: "branding",
    title: "Branding"}
  ];
  return (
    <div className="portfolio" id="portfolio">
        <h1>Portfolio</h1>
        <ul>
        {list.map(item=>(
          <PortfolioList 
          title={item.title} 
          active={selected === item.id}
          setSelected={setSelected}
          id={item.id}
          /> 
        ))}
        </ul>
        <div className="container">
          <div className="item">
            <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.IuWuNqMEJWHLUzfmfLkBcwHaEJ%26pid%3DApi&f=1&ipt=e352491f500c377a188c6012d0ba1a6f5117a7b006f2866f66db13c8b0a0952a&ipo=images" alt="" />
            <h3>XML Reading</h3>
          </div>
        </div>
    </div>
  )
}
