import styles from "./StudentList.module.css"

export function StudentList({ children }) {
  return (
    <section className="studentList">
        <h1 className={styles.heading}>Studenter</h1>
        <div className="border-2 p-4 border-amber-300">
            {children}
        </div>
    </section>
  );
}