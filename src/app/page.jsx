import Image from "next/image";
import styles from "./page.module.css";
import Field from "@/components/Field/Field";
import Sidebar from "@/components/Sidebar/Sidebar";

export default function Home() {
    return (
        <div className={styles.container}>
            <Field />
            <Sidebar />
        </div>
    );
}
