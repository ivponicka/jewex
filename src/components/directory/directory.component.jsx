import DirectoryItem from "../directory-item/directory-item.component";
import { DirectoryContainer } from "./directory.styles";

const categories = [
  {
    id: 1,
    title: "Rings",
    imageUrl:
      "https://images.unsplash.com/photo-1589674781759-c21c37956a44?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    route: "shop/rings",
  },
  {
    id: 2,
    title: "Earrings",
    imageUrl:
      "https://images.unsplash.com/photo-1588444650700-fd887f15a9e7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    route: "shop/earring",
  },
  {
    id: 3,
    title: "Necklaces",
    imageUrl:
      "https://images.unsplash.com/photo-1588444837495-c6cfeb53f32d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    route: "shop/necklaces",
  },
  {
    id: 4,
    title: "Bracelets",
    imageUrl:
      "https://images.unsplash.com/photo-1619119069152-a2b331eb392a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80",
    route: "shop/bracelets",
  },
  {
    id: 5,
    title: "Watches",
    imageUrl:
      "https://images.unsplash.com/photo-1549972574-8e3e1ed6a347?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80",
    route: "shop/watches",
  },
];

const Directory = () => {
  return (
    <DirectoryContainer>
      {categories.map((category) => (
        <DirectoryItem key={category.id} category={category} />
      ))}
    </DirectoryContainer>
  );
};

export default Directory;
