import Image from "next/image";
import styles from "./page.module.css";
import { Button } from "@repo/ui";


export default function Page(): JSX.Element {
  return (
    <main className={styles.main}>
      
      <Button appName="web" className={styles.button}>
        Click me!
      </Button>
    </main>
  );
}
