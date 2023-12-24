import styles from "../../style/style";

export default function Home() {
  return (
    <main>
      <div className={`${styles.flexCenter} ${styles.paddingX}`}>
        <div className={`${styles.boxWidth}`}>
          <h1 className=" text-xl text-center">Hello world</h1>
        </div>
      </div>
    </main>
  );
}
