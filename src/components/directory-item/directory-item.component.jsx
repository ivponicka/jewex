import {Body, BackgroundImage, DirectoryItemContainter} from './directory-item.styles.jsx';
import { useNavigate } from 'react-router-dom';


const DirectoryItem = ({ category }) => {
  const { imageUrl, title, route } = category;
  const navigate = useNavigate();
  const onNavigateHandler = () => navigate(route)
  return (
    <DirectoryItemContainter onClick={onNavigateHandler}>
      <BackgroundImage
        className='background-image'
        imageUrl={imageUrl}
      />
      <Body>
        <h2>{title}</h2>
        <p>Shop Now</p>
      </Body>
    </DirectoryItemContainter>
  );
};

export default DirectoryItem;