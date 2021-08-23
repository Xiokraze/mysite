import styles from "./Poem.module.css";

const Poem = ({ title, poem }) => {
  return (
    <div className={styles.poem}>
      <h2>{title}</h2>
      {poem.map((line) => (
        <p>{line}</p>
      ))}
    </div>
  );
};

export default Poem;
