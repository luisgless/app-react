import "./App.css";
import { TwiterFollowCard } from "./TwitterFollowCard";

//Renderesido de usuarios
const user = [
  {
    userName: "MAR13L4",
    name: "Mariela Sandoval González",
    isFollowing: true,
  },
  {
    userName: "C1PH3R",
    name: "Luis González",
    isFollowing: false,
  },
  {
    userName: "Addry117",
    name: "Adriana Fernanda Mejía",
    isFollowing: false,
  },
];
export function App() {
  return (
    <section className="App">
      {user.map(({ userName, name, isFollowing }) => (
        <TwiterFollowCard
        key={userName}
        userName={userName} initialIsFollowing={isFollowing}>
          {name}
        </TwiterFollowCard>
      ))}
    </section>
  );
}
