
import Background from "../ui/Background";
import Header from "../ui/Header";
import SiteCard from "../ui/SiteCard";
import { Box, Typography } from "@mui/material";
import SkillTable from "../ui/SkillTable";
import test_play from "../../assets/test_play.gif"
import trash from '../../assets/trash.png';
import GitActions from "../ui/GitActions";
const siteDataList = [
  {
    title: 'Formula',
    body: 'React+ReactFlow+Firebaseを用いて作成した、フローチャートからフォームを作成できるアプリです。',
    url: 'https://easy-diagram-form.web.app/',
    repoUrl: 'https://github.com/hamhamburger/easy-diagram-form',
    imagePath: test_play,
  },
  {
    title: 'ゴミ箱',
    body: '勉強の過程で生まれたTodoリストやカウンターなどのコンポーネントの墓場です（特に面白いものはありません）',
    url: 'https://react-practice-febca.web.app/',
    repoUrl: 'https://github.com/hamhamburger/typescript-training',
    imagePath: trash,
  },
];


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
              repoUrl={siteData.repoUrl}
              imagePath={siteData.imagePath}
            />
          );
        })}
      </Box>

      <Box
        id='skills'
        sx={{
          marginTop: '50px',
          marginRight: 'auto',
          marginLeft: 'auto',
          maxWidth: '750px',
        }}
      >
        <SkillTable />

        <Box sx={{ marginTop: "50px" }}>
          <Typography variant="h4" sx={{color:"white"}}>Recent commits</Typography>
          <GitActions />
        </Box>
      </Box>
    </div>
  );
};

export default TopPage