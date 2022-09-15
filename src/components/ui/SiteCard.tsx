import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import CardMedia from '@mui/material/CardMedia';

type Props = {
  width:string;
  title:string;
  description:string;
  description2?:string;
  url:string;
  imagePath: string;
  repoUrl?: string;
}
//

export default function SiteCard(
  {width,title,description,description2,url,imagePath,repoUrl}:Props):JSX.Element {
  return (
    <Card sx={{ minWidth: 275, width }}>
      <CardMedia component='img' height='140' image={imagePath} />
      <CardContent>
        <Typography variant='h5' component='div'>
          {title}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color='text.secondary'>
          {description}
        </Typography>
        <Typography variant='body2'>{description2}</Typography>
      </CardContent>
      <CardActions sx={{justifyContent:"right"}}>
        <a href={repoUrl}>
          <Button size='small'>github</Button>
        </a>
        <a href={url}>
          <Button size='small'>開く</Button>
        </a>
      </CardActions>
    </Card>
  );
}
