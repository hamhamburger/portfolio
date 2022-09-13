
import Background from "../ui/Background";
import Header from "../ui/Header";
import SiteCard from "../ui/SiteCard";
import { Box } from "@mui/material";
import SkillTable from "../ui/SkillTable";
import test_play from "../../assets/test_play.gif"
import trash from '../../assets/trash.png';
const siteDataList = [
  {
    title:"Formula",
    body:"React+ReactFlow+Firebaseを用いて作成した、フローチャートからフォームを作成できるアプリです。",
    url:"https://easy-diagram-form.web.app/",
    imagePath:test_play
  },
  {
    title:"ゴミ箱",
    body:"勉強の過程で生まれたTodoリストやカウンターなどのコンポーネントの墓場です（特に面白いものはありません）",
    url:"https://react-practice-febca.web.app/",
    imagePath:trash
  }
]


const TopPage = ():JSX.Element => {
  return (
    <div>
      <Header />
      <Background />
      <h1 style={{ color: 'white', textAlign: 'center' }}>
        Masayoshi Oonishi&apos;s Page
      </h1>
      <Box
        id='works'
        sx={{
          display: 'flex',
          gap: '60px',
          justifyContent: 'center',
          flexWrap: 'wrap',
        }}
      >
        {siteDataList.map((siteData) => {
          return (
            <SiteCard
              key={siteData.title}
              title={siteData.title}
              width='100px'
              description={siteData.body}
              url={siteData.url}
              imagePath={siteData.imagePath}
            />
          );
        })}
      </Box>
   
      <Box id="skills" sx={{marginTop:"50px", marginRight: 'auto', marginLeft: 'auto',}}>
        <SkillTable />  
      </Box>
    </div>
  );
};

export default TopPage