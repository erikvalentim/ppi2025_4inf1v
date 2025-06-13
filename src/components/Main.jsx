import styles from "./MyGrid.module.css";
import { MyText } from "./MyText";

const cards = [
  {
    title: "Motivação 1",
    text: "a vida e feita de escolhas, e cada escolha tem suas consequencias",
    img: "https://picsum.photos/200/?random=1"
  },
  {
    title: "Motivação 2",
    text: "os limites so existem se voce os deixar existir",
    img: "https://picsum.photos/200?random=2"
  },
  {
    title: "Motivação 3",
    text: "a vinganca nunca e plena, mata a alma e envenena",
    img: "https://picsum.photos/200/?random=3"
  },
  {
    title: "Motivação 4",
    text: "o mundo nao gira ele capota",
    img: "https://picsum.photos/200/?random=4"
  },
  {
    title: "Motivação 5",
    text: "se a vida te der limoes, faça uma limonada",
    img: "https://picsum.photos/200/?random=5"
  },
];

export function Main() {
  return (
    <main className={styles.main}>
      <div className={styles.grid}>
        {cards.map((card, i) => (
          <div className={styles.card} key={i}>
            <img src={card.img} alt={card.title} className={styles.cardImg} />
            <MyText title={card.title} text={card.text} />
          </div>
        ))}
      </div>
    </main>
  );
}