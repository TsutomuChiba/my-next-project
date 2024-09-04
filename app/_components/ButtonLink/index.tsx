import styles from "./index.module.css";

type Props = {
    hres: string;
    children: React.ReactNode;
};

export default function ButtonLink({ href, children }: Props) {
    return (
        <a href={href} className={styles.button}>
            {children}
        </a>
    );
}
